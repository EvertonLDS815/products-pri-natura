import {Request, Response} from 'express';
import {DetailClientService} from '../../services/clientts/DetailClientService';

class DetailClientController {
    async handle(req: Request, res: Response) {

        const {user_id} = req;

        const detailClientService = new DetailClientService();

        const user = await detailClientService.execute(user_id);

        return res.status(200).json(user);
    }
}

export {DetailClientController}