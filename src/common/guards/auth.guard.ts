import {
	CanActivate,
	ExecutionContext,
	Injectable,
} from '@nestjs/common'
import { HttpExceptionHandler } from '../handlers/http-exception.handler'
import { AuthService } from 'src/services/auth/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const { authorization } = request.headers

		if (!authorization) {
			HttpExceptionHandler.unauthorized()
		}

		const accessToken = authorization.split(' ')[1]

		await this.authService.verifyAccessToken(accessToken)

		return true
	}
}
