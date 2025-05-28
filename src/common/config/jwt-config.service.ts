import { Injectable } from '@nestjs/common'
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt'
import * as path from 'path'
import * as fs from 'fs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
	constructor(private readonly configService: ConfigService) {}

	createJwtOptions(): JwtModuleOptions {
		const secret = this.configService.get<string>('SECRET_JWT')

		return {
			secret,
			signOptions: {
				algorithm: 'HS256',
			},
		}
	}
}
