import {
	CollaboratorEntity,
	ICollaboratorEntity,
} from '../entity/collaborator.entity'

export abstract class CollaboratorRepository {
	abstract create(
		props: CollaboratorEntity,
	): Promise<CollaboratorEntity>
}
