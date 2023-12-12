import { compare, hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface EditPassRequest {
    user_id: string;
    password: string;
    newPassword: string
}
class EditPassUserService {
    async execute({user_id, password, newPassword}: EditPassRequest) {
        // Verificar o password
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        });
        
        if (password === '' || newPassword === '') {
            throw new Error('Preenha todos os campos!');
        }

        if (newPassword.length < 5) {
            throw new Error('Nova Senha deve conter mais de 4 caracteres!');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Senha incorreta!');
        }

        const passwordHash = await hash(newPassword, 8);

        const editUser = await prismaClient.user.update({
            where: {
              id: user_id,
            },
            data: {
              password: passwordHash,
            },
          });


        return editUser;
    }
}

export { EditPassUserService };