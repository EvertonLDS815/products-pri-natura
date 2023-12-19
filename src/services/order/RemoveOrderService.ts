import prismaClient from '../../prisma';

interface OrderRequest {
    order_id: string;
}
class RemoveOrderService {
    async execute({order_id}: OrderRequest) {
        await prismaClient.item.deleteMany({
            where: {
                order: {
                    id: order_id,
                    draft: true
                },
            }
        });
        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        });

        return order;
    }
}

export { RemoveOrderService }