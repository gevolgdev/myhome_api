import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { Auth } from 'src/common/decorators/auth.decorator'
import { ERoles } from 'src/common/enums/roles.enum'
import { ValidationPipe } from 'src/common/pipes/validation.pipe'

@Controller('api/infra/health-check')
export class HealthCheckController {
	@Get(':id')
	@Auth(ERoles.ADMIN, ERoles.USER)
	async healthCheck(@Param('id', new ValidationPipe()) id: string) {
		return {
			id,
			message: 'OK',
		}
	}
}
