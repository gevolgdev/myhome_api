import { randomUUID } from 'node:crypto'
import { IChoreEntity } from 'src/modules/chore/domain/entity/chore.entity'
import { ICollaboratorEntity } from 'src/modules/collaborator/domain/entity/collaborator.entity'
import { IRoomEntity } from 'src/modules/room/domain/entity/room.entity'

export interface IHomeEntity {
	id?: string
	image: string
	name: string
	description: string
	rooms: IRoomEntity[]
	collaborators: ICollaboratorEntity[]
	chores: IChoreEntity[]
}

export interface IHomeEntityProps
	extends Omit<IHomeEntity, 'id' | 'createdAt' | 'updatedAt'> {
	id?: string
	createdAt?: Date
	updatedAt?: Date
}

export class HomeEntity {
	private _props: IHomeEntity

	constructor(props: IHomeEntity) {
		const id = props.id || randomUUID()
		const rooms = props.rooms
		const collaborators = props.collaborators
		const image = props.image
		const name = props.name
		const description = props.description
		const chores = props.chores

		this._props = {
			id,
			rooms,
			collaborators,
			image,
			name,
			description,
			chores,
		}
	}

	get id() {
		return this._props.id
	}

	get toJSON() {
		return this._props
	}
}
