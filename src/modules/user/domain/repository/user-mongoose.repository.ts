import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserMongooseEntity } from '../entity/user-mongoose.entity'
import { UserRepository } from './user.repository'
import { UserEntity } from '../entity/user.entity'

export class UserMongooseRepository implements UserRepository {
	constructor(
		@InjectModel(UserMongooseEntity.name)
		private readonly userModel: Model<UserMongooseEntity>,
	) {}

	async createUser(user: UserEntity): Promise<UserEntity> {
		const userDoc = await this.userModel.create(user.toJSON)
		await userDoc.save()

		return user
	}

	async findById(id: string): Promise<UserEntity | null> {
		const userDoc = await this.userModel.findOne({ id })
		return userDoc ? UserEntity.assemble(userDoc.toJSON()) : null
	}

	async findByEmail(email: string): Promise<UserEntity | null> {
		const userDoc = await this.userModel.findOne({ email })
		return userDoc ? UserEntity.assemble(userDoc.toJSON()) : null
	}

	async findByPhone(phone: string): Promise<UserEntity | null> {
		const userDoc = await this.userModel.findOne({ phone })
		return userDoc ? UserEntity.assemble(userDoc.toJSON()) : null
	}
}
