import {Request, Response} from 'express';
import {RemoveOrderService} from '../../services/order/RemoveOrderService';

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const removeOrder = new RemoveOrderService();

        await removeOrder.execute({
            order_id
        });

        return res.sendStatus(204);
    }
}

export { RemoveOrderController }