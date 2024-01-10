import {Request, Response} from 'express';
import {ListOrdersSendService} from '../../services/order/ListOrdersSendService';

class ListOrdersSendController {
    async handle(req: Request, res: Response) {
        const {user_id} = req;

        const listOrdersSendService = new ListOrdersSendService();

        const order = await listOrdersSendService.execute({
            client_id: user_id
        });
        
        return res.status(200).json(order);
    }
}

export {ListOrdersSendController}