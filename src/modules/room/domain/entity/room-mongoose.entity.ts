import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IRoomEntity } from './room.entity'

@Schema({
	collection: 'rooms',
	timestamps: true,
})
export class RoomMongooseEntity implements IRoomEntity {
	@Prop({ required: true, unique: true })
	id: string

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	description: string

	@Prop({ required: true })
	image: string
}

export const RoomSchema = SchemaFactory.createForClass(
	RoomMongooseEntity,
)
