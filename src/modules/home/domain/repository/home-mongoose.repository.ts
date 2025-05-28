import { HomeEntity } from '../entity/home.entity'
import { HomeRepository } from './home.repository'

export class HomeMongooseRepository implements HomeRepository {
	getHomeById(): Promise<HomeEntity> {
		const payload = {
			image: 'https://via.placeholder.com/150',
			name: 'Casa do João',
			description: 'Casa do João',
			rooms: [],
			collaborators: [],
			chores: [],
		}

		const home = new HomeEntity(payload)
		console.log('::: Home repository ::: ', home)

		const homePromise = Promise.resolve(home)

		return homePromise
	}
}
