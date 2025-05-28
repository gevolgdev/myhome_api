import { randomUUID } from 'node:crypto'

export interface IRoomEntity {
	id: string
	name: string
	description: string
	image: string
}

export class RoomEntity {
	private _props: IRoomEntity

	constructor(props: IRoomEntity) {
		const id = props.id || randomUUID()
		const name = props.name
		const description = props.description
		const image = props.image

		this._props = {
			id,
			name,
			description,
			image,
		}
	}

	get id() {
		return this._props.id
	}

	get toJSON() {
		return this._props
	}
}
