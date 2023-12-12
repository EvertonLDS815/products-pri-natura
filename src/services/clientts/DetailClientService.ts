import prismaClient from '../../prisma';

class DetailClientService {
    async execute(user_id: string) {
        const user = await prismaClient.client.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                login: true
            }
        })

        return user;
    }
}


export {DetailClientService}