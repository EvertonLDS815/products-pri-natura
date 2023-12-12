import {Request, Response} from 'express';
import {EditPassClientService} from '../../services/clientts/EditPassClientService';

class EditPassClientController {
    async handle(req: Request, res: Response) {
        try {
            const {password, newPassword} = req.body;
            const {user_id} = req;
            
            const editPassClientController = new EditPassClientService();

            await editPassClientController.execute({
                user_id,
                password,
                newPassword,
            });

            return res.sendStatus(204);
        } catch (err) {
            return res.status(401).json({
                error: err.message
            })
        }
    }
}

export { EditPassClientController }