import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
	UserMongooseEntity,
	UserSchema,
} from './domain/entity/user-mongoose.entity'
import {
	UserRepositoryProviders,
	UserUseCaseProviders,
} from './user.providers'
import { UserController } from './user.controller'
import { CollaboratorsModule } from '../collaborator/collaborators.module'
import { JwtModule } from '@nestjs/jwt'
import { JwtConfigService } from 'src/common/config/jwt-config.service'
import { AuthModule } from 'src/services/auth/auth.module'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: UserMongooseEntity.name, schema: UserSchema },
		]),
		JwtModule.registerAsync({ useClass: JwtConfigService }),
		CollaboratorsModule,
		AuthModule,
	],
	controllers: [UserController],
	providers: [...UserUseCaseProviders, ...UserRepositoryProviders],
})
export class UserModule {}
