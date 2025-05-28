import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
	ChoreMongooseEntity,
	ChoreSchema,
} from './domain/entity/chore-mongoose.entity'
import { ChoreProviderUseCase } from './chore.provider'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: ChoreMongooseEntity.name,
				schema: ChoreSchema,
			},
		]),
	],
	controllers: [],
	providers: [...ChoreProviderUseCase],
	exports: [...ChoreProviderUseCase],
})
export class ChoreModule {}
