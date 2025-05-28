import mongoose, { HydratedDocument } from 'mongoose'
import { IHomeEntity } from './home.entity'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IRoomEntity } from 'src/modules/room/domain/entity/room.entity'
import { ICollaboratorEntity } from 'src/modules/collaborator/domain/entity/collaborator.entity'
import { IChoreEntity } from 'src/modules/chore/domain/entity/chore.entity'
import {
	RoomMongooseEntity,
	RoomSchema,
} from 'src/modules/room/domain/entity/room-mongoose.entity'

export type THomeMongooseEntity = HydratedDocument<IHomeEntity>

@Schema({
	collection: 'homes',
	timestamps: true,
})
export class HomeMongooseEntity implements IHomeEntity {
	@Prop({ required: true, unique: true })
	id: string

	@Prop({ required: true })
	image: string

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	description: string

	@Prop({
		required: true,
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'rooms',
	})
	rooms: IRoomEntity[]

	@Prop({
		required: true,
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'collaborators',
	})
	collaborators: ICollaboratorEntity[]

	@Prop({
		required: true,
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'chores',
	})
	chores: IChoreEntity[]
}

export const HomeSchema = SchemaFactory.createForClass(
	HomeMongooseEntity,
)
