import { UserEntity } from '../entity/user.entity'

export abstract class UserRepository {
	abstract createUser(user: UserEntity): Promise<UserEntity>
	abstract findById(id: string): Promise<UserEntity | null>
	abstract findByEmail(email: string): Promise<UserEntity | null>
	abstract findByPhone(phone: string): Promise<UserEntity | null>
}
