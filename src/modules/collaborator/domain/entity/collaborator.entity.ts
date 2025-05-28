import { randomUUID } from 'node:crypto'
import { IChoreEntity } from 'src/modules/chore/domain/entity/chore.entity'
import { IHomeEntity } from 'src/modules/home/domain/entity/home.entity'

export enum ECollaboratorRole {
	ADMIN = 'ADMIN',
	ROOMMATE = 'ROOMMATE',
}

export interface ICollaboratorEntity {
	id: string
	image: string
	role: ECollaboratorRole
	chores: IChoreEntity[] | null
	homes: IHomeEntity[] | null
}

export interface ICollaboratorEntityNew
	extends Omit<ICollaboratorEntity, 'id'> {}

export class CollaboratorEntity {
	private _props: ICollaboratorEntity

	constructor(props: ICollaboratorEntity) {
		const id = props.id
		const role = props.role
		const image = props.image
		const homes = props.homes
		const chores = props.chores

		this._props = {
			id,
			role,
			image,
			homes,
			chores,
		}
	}

	static new(props: ICollaboratorEntityNew) {
		return new CollaboratorEntity({
			...props,
			id: randomUUID(),
		})
	}

	static assemble(props: ICollaboratorEntity) {
		return new CollaboratorEntity({
			...props,
		})
	}

	public get id() {
		return this._props.id
	}

	public get toJSON() {
		return this._props
	}
}
