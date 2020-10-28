import { Request, Response, NextFunction } from 'express'

export const contentType = (_req: Request, res: Response, next: NextFunction): void => {
    //res.set('Content-Type', 'application/json')
    res.type('json')
    next()
}
