import {Request, Response} from 'express';
import {CreateOrderService} from '../../services/order/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const {
            name,
            neighborhood,
            adress,
            house_number,
        } = req.body;

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            name,
            neighborhood,
            adress,
            house_number
        })

        return res.status(201).json(order);
    }
}

export { CreateOrderController }