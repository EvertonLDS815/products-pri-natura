import prismaClient from '../../prisma';

interface ClientProps {
    client_id: string
}
class ListOrdersCliService {
    async execute({client_id}: ClientProps) {
        const orders = await prismaClient.order.findMany({
                where: {
                    draft: true,
                    client_id: client_id,
                    },
                orderBy: {
                    created_at: 'asc'
                },
                include: {
                    client: true
                }
        });
        return orders;
    }
}

export { ListOrdersCliService };