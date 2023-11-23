import { Request, Response } from 'express';
import { CreateProductService} from '../../services/product/CreateProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {
        try {
            const {name, price, description, category_id} = req.body;
        
        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Error upload file!");
        } else {

            const {originalname, filename: banner} = req.file;
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });
    
            return res.status(201).json(product);
        }
        } catch (err) {
            return res.status(500).json({
                error: err.message
            })
        }

    }
}

export { CreateProductController }