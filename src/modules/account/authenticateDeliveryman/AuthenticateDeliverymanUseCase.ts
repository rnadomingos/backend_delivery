import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient"
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliveryman {
    username: string,
    password: string
}

export class AuthenticateDeliverymanUseCase {
    //Receber o usuário e Senha
    async execute({username, password}: IAuthenticateDeliveryman){
        //Validar se username cadastrado
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });
        if (!deliveryman) {
            throw new Error("Username or Password is invalid");
        }
        //Verificar se senha corresponde ao username
        const passwordMatch = await compare(password, deliveryman.password)
        if (!passwordMatch) {
            throw new Error("Username or Password is invalid");
        }
        //Gerar o token
        // SECRET_MD5 = Deliveryman_Jackson5
        const token = sign({ username }, "57e3f6820b78d7761905408ebf285266", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return token;
    }
}


