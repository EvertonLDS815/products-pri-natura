import prismaClient from '../../prisma';

class ListOrdersCliService {
    async execute(user_id: string) {
        const orders = await prismaClient.item.findMany({
            where: {
                order: {
                    draft: true,
                    client_id: user_id
                }
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                order: {
                    include: {
                        client: true
                    }
                },
                product: true
            }
        });
        return orders;
    }
}

export { ListOrdersCliService };