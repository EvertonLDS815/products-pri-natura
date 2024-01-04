import prismaClient from '../../prisma';

interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
class AddItemService {
    async execute({order_id, product_id, amount}: ItemRequest) {
        const exists = await prismaClient.item.findMany({
            where: {
                order_id: order_id,
                product_id: product_id
            }
        });
        if (exists.length > 0) {
            const updateOne = await prismaClient.item.update({
                where: {
                    id: exists[0].id
                },
                data: {
                    amount: {
                        increment: 1,
                    },
                }
            });
            return updateOne;
        }

        const order = await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount
            },
            include: {
                order: true
            }
        });
        return order;

    }
}

export { AddItemService }