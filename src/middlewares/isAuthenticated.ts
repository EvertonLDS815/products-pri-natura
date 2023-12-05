import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';

interface Payload {
    sub: string;
}
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log(req.headers)
    const authToken = req.headers.authorization;

    console.log(authToken)

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    console.log(token);

    try {
        // Validar esse token

        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        // Recuperar o id do token e colocar numa var req
        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).json({
            error: err.message
        });
    }
}