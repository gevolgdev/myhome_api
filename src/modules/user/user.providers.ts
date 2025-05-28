import { Provider } from '@nestjs/common'
import { CreateUserUseCase } from './application/create-user.useCase'
import { UserRepository } from './domain/repository/user.repository'
import { UserMongooseRepository } from './domain/repository/user-mongoose.repository'
import { SignInUseCase } from './application/sign-in.useCase'

export const UserUseCaseProviders: Provider[] = [
	CreateUserUseCase,
	SignInUseCase,
]

export const UserRepositoryProviders: Provider[] = [
	{
		provide: UserRepository,
		useClass: UserMongooseRepository,
	},
]
