import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { HttpExceptionHandler } from 'src/common/handlers/http-exception.handler'
import { IJWTPayload } from './interfaces/jwt'
import { randomUUID } from 'crypto'
import { addDays } from 'date-fns'
import {
	UserEntity,
	IUserAuthSession,
} from 'src/modules/user/domain/entity/user.entity'

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService) {}

	async generateCustomerAccessToken(
		user: UserEntity,
	): Promise<string> {
		const customerId = user.id

		const payload: IJWTPayload = {
			id: customerId,
			email: user.toJSON.email,
		}

		return this.jwtService.sign(payload, {
			subject: customerId,
			expiresIn: 60 * 60, // 1 hora
		})
	}

	async verifyAccessToken(accessToken: string) {
		try {
			const payload = this.jwtService.verify<IJWTPayload>(accessToken)
			return payload
		} catch (error) {
			HttpExceptionHandler.tokenError()
		}
	}

	async decodeAccessToken(accessToken: string): Promise<IJWTPayload> {
		const payload = this.jwtService.decode<IJWTPayload>(accessToken)
		return payload
	}

	async generateRefreshToken(): Promise<IUserAuthSession> {
		const refreshToken = randomUUID()
		const expiresIn = addDays(new Date(), 30)
		return {
			refreshToken,
			expiresIn,
		}
	}
}
