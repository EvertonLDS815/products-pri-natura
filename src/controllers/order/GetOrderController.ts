import {Request, Response} from 'express'
import { GetOrderService } from '../../services/order/GetOrderService';

class GetOrderController {
    async handle(req: Request, res: Response) {

        try {
            const {id} = req.body;
    
            const getOrderService = new GetOrderService();
    
            const order = await getOrderService.execute({
                order_id: id
            });
    
            return res.status(200).json(order);
        } catch (err) {
            console.log(err.message)
            return res.status(200).json({
                error: err.message
            });
        }
    }
}

export { GetOrderController };