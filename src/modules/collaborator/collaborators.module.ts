import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
	CollaboratorMongooseEntity,
	CollaboratorSchema,
} from './domain/entity/collaborator-mongoose.entity'
import {
	collaboratorsUseCaseProviders,
	collaboratorsRepositoryProviders,
} from './collaborators.providers'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: CollaboratorMongooseEntity.name,
				schema: CollaboratorSchema,
			},
		]),
	],
	controllers: [],
	providers: [
		...collaboratorsUseCaseProviders,
		...collaboratorsRepositoryProviders,
	],
	exports: [...collaboratorsRepositoryProviders],
})
export class CollaboratorsModule {}
