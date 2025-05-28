import { Injectable } from '@nestjs/common'
import { UserRepository } from '../domain/repository/user.repository'
import { HttpExceptionHandler } from 'src/common/handlers/http-exception.handler'
import { HashPassUtils } from 'src/common/utils/hashPass'
import { UserEntity } from '../domain/entity/user.entity'
import { SignInDTO } from '../dto/sign-in.dto'
import { JwtService } from '@nestjs/jwt'
import { ISignInResponse } from '../domain/interface/user.interface'

@Injectable()
export class SignInUseCase {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly jwtService: JwtService,
	) {}

	async execute(payload: SignInDTO): Promise<ISignInResponse> {
		const userFound = await this.userRepository.findByEmail(
			payload.email,
		)

		if (!userFound) {
			throw HttpExceptionHandler.userNotFound()
		}

		const isPasswordInvalid = await HashPassUtils.compare(
			payload.password,
			userFound.toJSON?.password,
		)

		if (!isPasswordInvalid) {
			throw HttpExceptionHandler.userInvalidPassword()
		}

		const {
			toJSON: { password, ...restUser },
		} = UserEntity.assemble(userFound.toJSON)

		const accessToken = await this.jwtService.signAsync({
			sub: {
				id: restUser.id,
				email: restUser.email,
			},
		})

		return { ...restUser, accessToken }
	}
}
