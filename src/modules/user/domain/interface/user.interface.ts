export interface ICreateUserResponse {
	id: string
	email: string
	name: string
	phone: string
	collaboratorId: string
}

export interface ISignInResponse {
	id: string
	email: string
	name: string
	phone: string
	collaboratorId: string
	accessToken: string
}
