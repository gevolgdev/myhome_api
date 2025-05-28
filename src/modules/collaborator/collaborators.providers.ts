import { Provider } from '@nestjs/common'
import { CollaboratorRepository } from './domain/repository/collaborator.repository'
import { CollaboratorMongooseRepository } from './domain/repository/collaborator-mongoose.repository'

export const collaboratorsUseCaseProviders: Provider[] = []

export const collaboratorsRepositoryProviders: Provider[] = [
	{
		provide: CollaboratorRepository,
		useClass: CollaboratorMongooseRepository,
	},
]
