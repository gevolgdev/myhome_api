import { randomUUID } from 'crypto'

export interface IUserEntity {
	id: string
	email: string
	name: string
	phone: string
	password: string
	collaboratorId: string
}

export interface IUserAuthSession {
	refreshToken: string
	expiresIn: Date
}

export interface IUserEntityNew extends Omit<IUserEntity, 'id'> {}

export class UserEntity {
	private _props: IUserEntity

	constructor(props: IUserEntity) {
		const id = props.id
		const email = props.email
		const name = props.name
		const phone = props.phone
		const password = props.password
		const collaboratorId = props.collaboratorId

		this._props = {
			id,
			email,
			name,
			phone,
			password,
			collaboratorId,
		}
	}

	static new(props: IUserEntityNew) {
		return new UserEntity({
			...props,
			id: randomUUID(),
		})
	}

	static assemble(props: IUserEntity) {
		return new UserEntity({
			...props,
		})
	}

	get id() {
		return this._props.id
	}

	get toJSON() {
		return this._props
	}
}
