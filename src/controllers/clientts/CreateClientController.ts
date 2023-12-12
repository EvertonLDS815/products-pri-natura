import {Request, Response} from 'express';
import {CreateClientService} from '../../services/clientts/CreateClientService';

class CreateClientController {
    async handle(req: Request, res: Response) {
        const {name, login, password} = req.body;

        const createClientService = new CreateClientService();

        const user = await createClientService.execute({
            name,
            login,
            password
        });

        return res.json(user);
    }
}

export { CreateClientController }