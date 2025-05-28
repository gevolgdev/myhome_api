import { randomUUID } from 'node:crypto'

export enum EChoreType {
	DAILY = 'DAILY',
	WEEKLY = 'WEEKLY',
	MONTHLY = 'MONTHLY',
	YEARLY = 'YEARLY',
}

export interface IChoreEntity {
	id: string
	name: string
	description: string
	type: EChoreType
	roomId: string[]
	collaboratorId: string[]
	homeId: string
}

export class ChoreEntity {
	private _props: IChoreEntity

	constructor(props: IChoreEntity) {
		const id = props.id || randomUUID()
		const name = props.name
		const description = props.description
		const type = props.type
		const roomId = props.roomId
		const collaboratorId = props.collaboratorId
		const homeId = props.homeId

		this._props = {
			id,
			name,
			description,
			type,
			roomId,
			collaboratorId,
			homeId,
		}
	}

	get id() {
		return this._props.id
	}

	get toJSON() {
		return this._props
	}
}
