import prismaClient from '../../prisma';

class ListOrdersService {
    async execute() {
        const orders = prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        return orders;
    }
}

export { ListOrdersService };