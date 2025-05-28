import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { IUserEntity } from './user.entity'

@Schema({ timestamps: true, collection: 'users' })
export class UserMongooseEntity implements IUserEntity {
	@Prop({ required: true, unique: true })
	id: string

	@Prop({ required: true })
	email: string

	@Prop({ required: true })
	password: string

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	phone: string

	@Prop({
		required: true,
	})
	collaboratorId: string
}

export const UserSchema = SchemaFactory.createForClass(
	UserMongooseEntity,
)
