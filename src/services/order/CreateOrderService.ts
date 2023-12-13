import prismaClient from '../../prisma';

interface OrderRequest {
    neighborhood: string;
    adress: string;
    house_number: string;
    client_id: string
}
class CreateOrderService {
    async execute({neighborhood, adress, house_number, client_id}: OrderRequest) {
        
        // const client = await prismaClient.client.findFirst({
        //     where: {
        //         id: client_id
        //     }
        // });

        const order = await prismaClient.order.create({
            data: {
                neighborhood,
                adress,
                house_number,
                client_id: client_id
            }
        });

        return order;
    }
}

export { CreateOrderService }