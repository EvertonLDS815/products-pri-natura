import {Request, Response} from 'express';
import {CreateOrderService} from '../../services/order/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const {
            neighborhood,
            adress,
            house_number,
        } = req.body;

        const {user_id} = req;

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            neighborhood,
            adress,
            house_number,
            client_id: user_id
        })

        return res.status(201).json(order);
    }
}

export { CreateOrderController }