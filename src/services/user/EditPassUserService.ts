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
            throw new Error('Password and/or newPassword invalid!');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Password invalid!');
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

          console.log(editUser);


        return editUser;
    }
}

export { EditPassUserService };