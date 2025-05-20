import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const configService = app.get(ConfigService)
	const PORT = configService.get('SERVER_PORT') ?? 3000

	app.enableCors({
		origin: configService.get('CORS_ORIGIN'),
		credentials: true,
	})

	await app.listen(PORT)
}
bootstrap()
