import { UnauthorizedException } from '@nestjs/common'
import { EHttpExceptionMessages } from '../enums/http-exceptions-messages.enum'

export function matchRoles(roles: string[], userRole: string) {
	const authorized = roles.includes(userRole)

	if (!authorized) {
		throw new UnauthorizedException(
			EHttpExceptionMessages.USER_NOT_AUTHORIZED,
		)
	}

	return true
}
