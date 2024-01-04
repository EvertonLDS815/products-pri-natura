import prismaClient from '../../prisma';

interface GetOrderProps {
    order_id: string;
}
class GetOrderService {
    async execute({order_id}: GetOrderProps) {
        const order = await prismaClient.order.findMany({
            where: {
                    id: order_id,
                    draft: true
                }
        });

        return order;
    }
}

export { GetOrderService };