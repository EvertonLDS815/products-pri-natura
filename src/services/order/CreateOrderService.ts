import prismaClient from '../../prisma';

interface OrderRequest {
    name: string;
    neighborhood: string;
    adress: string;
    house_number: string;
}
class CreateOrderService {
    async execute({name, neighborhood, adress, house_number}: OrderRequest) {
        
        const order = await prismaClient.order.create({
            data: {
                name,
                neighborhood,
                adress,
                house_number,
            }
        });

        return order;
    }
}

export { CreateOrderService }