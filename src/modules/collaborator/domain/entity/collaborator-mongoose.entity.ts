import {
	ECollaboratorRole,
	ICollaboratorEntity,
} from 'src/modules/collaborator/domain/entity/collaborator.entity'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { IHomeEntity } from 'src/modules/home/domain/entity/home.entity'
import { IChoreEntity } from 'src/modules/chore/domain/entity/chore.entity'

@Schema({ timestamps: true, collection: 'collaborators' })
export class CollaboratorMongooseEntity
	implements ICollaboratorEntity
{
	@Prop({ required: true, unique: true })
	id: string

	@Prop({ required: true, enum: ECollaboratorRole })
	role: ECollaboratorRole

	@Prop({ required: false })
	image: string

	@Prop({
		required: false,
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'homes',
	})
	homes: IHomeEntity[] | null

	@Prop({
		required: false,
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'chores',
	})
	chores: IChoreEntity[]
}

export const CollaboratorSchema = SchemaFactory.createForClass(
	CollaboratorMongooseEntity,
)
