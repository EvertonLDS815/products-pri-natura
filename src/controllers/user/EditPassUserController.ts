import {Request, Response} from 'express';
import {EditPassUserService} from '../../services/user/EditPassUserService';

class EditPassUserController {
    async handle(req: Request, res: Response) {
        try {
            const {password, newPassword} = req.body;
            const {user_id} = req;
            const editPassUserController = new EditPassUserService();

            const user = await editPassUserController.execute({
                user_id: user_id,
                password: password,
                newPassword: newPassword,
            });

            return res.json(user);
        } catch (err) {
            return res.status(401).json({
                error: err.message
            })
        }
    }
}

export { EditPassUserController }