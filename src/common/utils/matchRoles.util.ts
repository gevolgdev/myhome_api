import { UnauthorizedException } from '@nestjs/common'
import { EHttpExceptionMessages } from '../enums/http-exceptions-messages.enum'
import { HttpExceptionHandler } from '../handlers/http-exception.handler'

export function matchRoles(roles: string[], userRole: string) {
	const authorized = roles.includes(userRole)

	if (!authorized) {
		HttpExceptionHandler.unauthorized()
	}

	return true
}
