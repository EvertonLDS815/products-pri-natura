import prismaClient from "../../prisma";

interface ListItemProps {
    order_id: string;
}
class ListOrderItemService {

    async execute({order_id}: ListItemProps) {
        const item = await prismaClient.item.findMany({
            where: {
                order_id: order_id,
                order: {
                    draft: true
                }
            },
            include: {
                product: true,
                order: {
                    include: {
                        client: true
                    }
                }
            }
        });

        return item;
    }
}

export {ListOrderItemService}