import { HttpException, HttpStatus, Logger } from '@nestjs/common'
import { EHttpExceptionMessages } from '../enums/http-exceptions-messages.enum'

export class HttpExceptionHandler {
	static unauthorized(
		message = EHttpExceptionMessages.UNAUTHORIZED,
		statusCode = HttpStatus.UNAUTHORIZED,
	) {
		throw new HttpException(message, statusCode)
	}

	static userEmailAlreadyExists(
		message = EHttpExceptionMessages.USER_EMAIL_ALREADY_EXISTS,
		statusCode = HttpStatus.CONFLICT,
	) {
		throw new HttpException(message, statusCode)
	}

	static userPhoneAlreadyExists(
		message = EHttpExceptionMessages.USER_PHONE_ALREADY_EXISTS,
		statusCode = HttpStatus.CONFLICT,
	) {
		throw new HttpException(message, statusCode)
	}

	static userNotFound(
		message = EHttpExceptionMessages.USER_NOT_FOUND,
		statusCode = HttpStatus.NOT_FOUND,
	) {
		throw new HttpException(message, statusCode)
	}

	static userInvalidPassword(
		message = EHttpExceptionMessages.USER_INVALID_PASSWORD,
		statusCode = HttpStatus.UNAUTHORIZED,
	) {
		throw new HttpException(message, statusCode)
	}

	static tokenError(
		message = EHttpExceptionMessages.TOKEN_ERROR,
		statusCode = HttpStatus.UNAUTHORIZED,
	) {
		throw new HttpException(message, statusCode)
	}
}
