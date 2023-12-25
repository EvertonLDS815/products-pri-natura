import prismaClient from "../../prisma";

interface GetItems {
    order_id: string;
    user_id: string;
}
class ListOrderLastService {
    async execute({order_id, user_id}: GetItems) {
        const orderItem = await prismaClient.order.findMany({
            where: {
                draft: true,
                client_id: user_id
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        return orderItem.pop();
    }
}

export {ListOrderLastService}