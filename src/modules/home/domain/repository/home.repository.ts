import { HomeEntity } from '../entity/home.entity'

export abstract class HomeRepository {
	abstract getHomeById(): Promise<HomeEntity>
}
