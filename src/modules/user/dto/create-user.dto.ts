import { IsEmail, IsString } from 'class-validator'

export class CreateUserDTO {
	@IsEmail()
	email: string

	@IsString()
	name: string

	@IsString()
	phone: string

	@IsString()
	password: string
}
