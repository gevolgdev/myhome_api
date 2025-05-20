import { Injectable, NestMiddleware } from '@nestjs/common'
import { Response, Request, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const time = `[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds().toString().padStart(2, '0')}] `

		console.log(time + `- ${req.method} ${req.originalUrl}`)
		next()
	}
}
