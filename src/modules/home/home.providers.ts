import { Provider } from '@nestjs/common'
import { HomeRepository } from './domain/repository/home.repository'
import { HomeMongooseRepository } from './domain/repository/home-mongoose.repository'
import { GetHomeByIdUseCase } from './application/get-home-by-id.useCase'

export const HomeProvidersUseCase: Provider[] = [GetHomeByIdUseCase]

export const HomeProvidersRepository: Provider[] = [
	{
		provide: HomeRepository,
		useClass: HomeMongooseRepository,
	},
]
