import { applyDecorators, UseGuards } from '@nestjs/common'
import { ERoles } from '../enums/roles.enum'
import { RoleGuard } from '../guards/role.guard'
import { Roles } from './roles.decorator'

export function Auth(...roles: ERoles[]) {
	return applyDecorators(Roles(roles), UseGuards(RoleGuard))
}
