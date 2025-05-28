import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { EChoreType, IChoreEntity } from './chore.entity'

@Schema({
	collection: 'chores',
	timestamps: true,
})
export class ChoreMongooseEntity implements IChoreEntity {
	@Prop({ required: true, unique: true })
	id: string

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	description: string

	@Prop({ required: true, enum: EChoreType })
	type: EChoreType

	@Prop({ required: true })
	roomId: string[]

	@Prop({ required: true })
	collaboratorId: string[]

	@Prop({ required: true })
	homeId: string
}

export const ChoreSchema = SchemaFactory.createForClass(
	ChoreMongooseEntity,
)
