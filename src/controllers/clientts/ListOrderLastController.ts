import {Request, Response} from 'express';
import { ListOrderLastService } from '../../services/clientts/ListOrderLastService';

class ListOrderLastController {

    async handle(req: Request, res: Response) {
        const {user_id} = req;
        const {order_id} = req.body;
        const listOrderLastService = new ListOrderLastService();

        const item = await listOrderLastService.execute({
            order_id,
            user_id
        });

        return res.json(item);
    }
}

export {ListOrderLastController}