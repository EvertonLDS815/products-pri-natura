import prismaClient from '../../prisma';

class ListCategoryService {
    async execute() {
        const category = prismaClient.category.findMany();

        return category;
    }
}

export { ListCategoryService };