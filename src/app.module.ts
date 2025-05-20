import {
	MiddlewareConsumer,
	Module,
	NestModule,
} from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { MongooseConfigService } from './common/config/mongoose-config.service'
import { HealthCheckModule } from './services/infra/health-check/health-check.module'
import { LoggerMiddleware } from './common/middlewares/logger.middleware'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useClass: MongooseConfigService,
		}),
		HealthCheckModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*')
	}
}
