import prismaClient from '../../prisma/index';
import {hash} from 'bcryptjs'

interface CreateClientProps {
    name: string;
    login: string;
    password: string;
}

class CreateClientService {
    async execute({name, login, password}: CreateClientProps) {

        if (!login) {
            throw new Error("Login incorreto");
        }
        if (password.length < 5) {
            throw new Error('Senha deve conter mais de 4 caracteres!');
        }

        const userAlreadyExists = await prismaClient.client.findFirst({
            where: {
                login: login
            }
        });

        if (userAlreadyExists) {
            throw new Error("Email Already Exists");
        };

        const passwordHash = await hash(password, 8)
        const user = await prismaClient.client.create({
            data: {
                name: name,
                login: login,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                login: true
            }
        });

        return user;
    }
}

export { CreateClientService }