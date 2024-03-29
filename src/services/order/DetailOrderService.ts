import prismaClient from '../../prisma';

interface DetailRequest {
    order_id: string;
}
class DetailOrderService {
    async execute({order_id}: DetailRequest) {
        const orders = prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: {
                    include: {
                        client: true
                    }
                },
            }
        });
        return orders;
    }
}

export { DetailOrderService };