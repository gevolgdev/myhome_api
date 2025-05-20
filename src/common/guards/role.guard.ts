import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { Roles } from '../decorators/roles.decorator'
import { matchRoles } from '../utils/matchRoles.util'

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()
		const userRole = request.headers['x-user-role']

		const authorizedRoles = this.reflector.get<string[]>(
			Roles,
			context.getHandler(),
		)

		if (!authorizedRoles) {
			return true
		}

		return matchRoles(authorizedRoles, userRole)
	}
}
