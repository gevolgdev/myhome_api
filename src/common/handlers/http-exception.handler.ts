import { HttpException, HttpStatus, Logger } from '@nestjs/common'
import { EHttpExceptionMessages } from '../enums/http-exceptions-messages.enum'

export class HttpExceptionHandler {
	static userEmailAlreadyExists(
		message = EHttpExceptionMessages.USER_EMAIL_ALREADY_EXISTS,
		statusCode = HttpStatus.CONFLICT,
	) {
		throw new HttpException(message, statusCode)
	}
}
