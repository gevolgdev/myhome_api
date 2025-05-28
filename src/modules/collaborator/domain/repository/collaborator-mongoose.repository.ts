import { Model } from 'mongoose'
import {
	CollaboratorEntity,
	ICollaboratorEntity,
} from '../entity/collaborator.entity'
import { CollaboratorRepository } from './collaborator.repository'
import { CollaboratorMongooseEntity } from '../entity/collaborator-mongoose.entity'
import { InjectModel } from '@nestjs/mongoose'

export class CollaboratorMongooseRepository
	implements CollaboratorRepository
{
	constructor(
		@InjectModel(CollaboratorMongooseEntity.name)
		private readonly collaboratorModel: Model<CollaboratorMongooseEntity>,
	) {}

	async create(
		collaborator: CollaboratorEntity,
	): Promise<CollaboratorEntity> {
		const collaboratorDoc = await this.collaboratorModel.create(
			collaborator.toJSON,
		)
		await collaboratorDoc.save()

		return collaborator
	}
}
