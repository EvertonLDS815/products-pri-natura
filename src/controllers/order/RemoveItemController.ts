import {Request, Response} from 'express';
import {RemoveItemService} from '../../services/order/RemoveItemService';

class RemoveItemController {
    async handle(req: Request, res: Response) {

        try {
            const item_id = req.query.item_id as string;
            const removeItemService = new RemoveItemService();
    
            await removeItemService.execute({
                item_id
            });
    
            return res.sendStatus(204);
        } catch (err) {
            console.log(err)
        }
    }
}

export { RemoveItemController }