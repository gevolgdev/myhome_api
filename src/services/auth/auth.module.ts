import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { JwtConfigService } from 'src/common/config/jwt-config.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useClass: JwtConfigService,
		}),
	],
	providers: [AuthService],
	exports: [AuthService],
})
export class AuthModule {}
