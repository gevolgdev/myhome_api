import { Controller, Get } from '@nestjs/common'
import { GetHomeByIdUseCase } from './application/get-home-by-id.useCase'

@Controller('v1/api/home')
export class HomeController {
	constructor(
		private readonly getHomeByIdUseCase: GetHomeByIdUseCase,
	) {}

	@Get()
	async getHome() {
		return await this.getHomeByIdUseCase.execute()
	}
}
