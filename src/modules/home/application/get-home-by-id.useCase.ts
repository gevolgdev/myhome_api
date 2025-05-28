import { Injectable } from '@nestjs/common'
import { HomeRepository } from '../domain/repository/home.repository'

@Injectable()
export class GetHomeByIdUseCase {
	constructor(private readonly homeRepository: HomeRepository) {}

	async execute() {
		const home = await this.homeRepository.getHomeById()

		return home
	}
}
