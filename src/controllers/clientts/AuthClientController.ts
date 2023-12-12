import {Request, Response} from 'express';
import {AuthClientService} from '../../services/clientts/AuthClientService';

class AuthClientController {
    async handle(req: Request, res: Response) {
        try {
            const { login, password } = req.body;

            const authClientService = new AuthClientService();

            const auth = await authClientService.execute({
                login,
                password
            })

        return res.json(auth);
        } catch (err) {
            return res.status(500).json({
                error: err.message
            })
        }
    }
}

export { AuthClientController }