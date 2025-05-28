import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
	HomeMongooseEntity,
	HomeSchema,
} from './domain/entity/home-mongoose.entity'
import { HomeController } from './home.controller'
import {
	HomeProvidersRepository,
	HomeProvidersUseCase,
} from './home.providers'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: HomeMongooseEntity.name, schema: HomeSchema },
		]),
	],
	controllers: [HomeController],
	providers: [...HomeProvidersUseCase, ...HomeProvidersRepository],
})
export class HomeModule {}
