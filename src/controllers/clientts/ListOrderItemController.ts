import {Request, Response} from 'express';
import {ListOrderItemService} from '../../services/clientts/ListOrderItemService';

class ListOrderItemController {

    async handle(req: Request, res: Response) {
        const {order_id} = req.body;
        const listOrderItemService = new ListOrderItemService();

        const item = await listOrderItemService.execute({
            order_id
        });

        return res.json(item);
    }
}

export {ListOrderItemController}