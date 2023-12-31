import {Request, Response} from 'express';
import {ListOrdersCliService} from '../../services/clientts/ListOrdersCliService';

class ListOrdersCliController {
    async handle(req: Request, res: Response) {
        try {
            const {client_id} = req.body;
            const listOrdersSerivice = new ListOrdersCliService();
            
            const orders = await listOrdersSerivice.execute({
                client_id
            });
    
            return res.status(200).json(orders);
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                error: err
            })
        }
    }
}

export {ListOrdersCliController}