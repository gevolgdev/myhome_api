import { Injectable } from '@nestjs/common'
import { UserRepository } from '../domain/repository/user.repository'
import { CreateUserDTO } from '../dto/create-user.dto'
import { UserEntity } from '../domain/entity/user.entity'
import { CollaboratorRepository } from 'src/modules/collaborator/domain/repository/collaborator.repository'
import {
	CollaboratorEntity,
	ECollaboratorRole,
} from 'src/modules/collaborator/domain/entity/collaborator.entity'
import { HttpExceptionHandler } from 'src/common/handlers/http-exception.handler'
import { HashPassUtils } from 'src/common/utils/hashPass'
import { ICreateUserResponse } from '../domain/interface/user.interface'

@Injectable()
export class CreateUserUseCase {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly collaboratorRepository: CollaboratorRepository,
	) {}

	async execute(
		userData: CreateUserDTO,
	): Promise<ICreateUserResponse> {
		const userByEmail = await this.userRepository.findByEmail(
			userData.email,
		)
		const userByPhone = await this.userRepository.findByPhone(
			userData.phone,
		)

		if (userByEmail?.id) {
			HttpExceptionHandler.userEmailAlreadyExists()
		}
		if (userByPhone?.id) {
			HttpExceptionHandler.userPhoneAlreadyExists()
		}

		const createdCollaborator = CollaboratorEntity.new({
			role: ECollaboratorRole.ADMIN,
			image: '',
			homes: null,
			chores: null,
		})

		const collaboratorId = await this.collaboratorRepository
			.create(createdCollaborator)
			.then((collaborator) => collaborator.id)

		const passwordHashed = await HashPassUtils.hash(userData.password)

		const userEntity = UserEntity.new({
			...userData,
			password: passwordHashed,
			collaboratorId,
		})

		const {
			toJSON: { password, ...userCreated },
		} = await this.userRepository.createUser(userEntity)

		return { ...userCreated }
	}
}
