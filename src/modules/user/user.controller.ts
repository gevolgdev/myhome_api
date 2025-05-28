import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateUserUseCase } from './application/create-user.useCase'
import { CreateUserDTO } from './dto/create-user.dto'
import { UserRepository } from './domain/repository/user.repository'
import { UserEntity } from './domain/entity/user.entity'
import { HttpExceptionHandler } from 'src/common/handlers/http-exception.handler'
import { SignInDTO } from './dto/sign-in.dto'
import { SignInUseCase } from './application/sign-in.useCase'
import { Auth } from 'src/common/decorators/auth.decorator'

@Controller('users')
export class UserController {
	constructor(
		private readonly createUserUseCase: CreateUserUseCase,
		private readonly signInUseCase: SignInUseCase,
		private readonly userRepository: UserRepository,
	) {}

	@Get('find-by-id/:id')
	@Auth()
	async findById(@Param('id') id: string) {
		const user = await this.userRepository.findById(id)

		if (!user) {
			return HttpExceptionHandler.userNotFound()
		}

		const userResponse = UserEntity.assemble(user?.toJSON)

		return { ...userResponse.toJSON }
	}

	@Post('create')
	async createUser(@Body() userData: CreateUserDTO) {
		return await this.createUserUseCase.execute(userData)
	}

	@Post('sign-in')
	async signIn(@Body() signInData: SignInDTO) {
		return await this.signInUseCase.execute(signInData)
	}
}
