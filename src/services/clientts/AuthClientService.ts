import { compare } from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import prismaClient from '../../prisma'

interface AuthRequest {
    login: string;
    password: string;
}
class AuthClientService {
    async execute({login, password}: AuthRequest) {

        const user = await prismaClient.client.findFirst({
            where: {
                login: login,
            }
        })

        if (!user) {
            throw new Error("Login/Password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);
        

        if (!passwordMatch) {
            throw new Error("Login/Password incorrect!");
        }

        const token = sign(
            {
                name: user.name,
                login: user.login
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );


        return {
            id: user.id,
            name: user.name,
            login: user.login,
            token: token
        };
    }
}

export { AuthClientService}