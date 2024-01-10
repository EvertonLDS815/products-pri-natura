import prismaClient from "../../prisma";

interface ListOrderProps {
    client_id: string;
}
class ListOrdersSendService {
    async execute({client_id}: ListOrderProps) {
        const order = await prismaClient.order.findMany({
            where: {
                client_id,
                status: false,
                draft: false
            },
            include: {
                client: true
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        return order;
    }
}

export { ListOrdersSendService }