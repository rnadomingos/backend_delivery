import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
    username: string,
    password: string
}

export class AuthenticateClientUseCase {
    async execute({username, password} : IAuthenticateClient) {
        //Receber o usuário e Senha
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        //Validar se username cadastrado
        if (!client) {
            throw new Error("Username or password invalid");
            
        }
        //Verificar se senha corresponde ao username
        const passwordMatch = await compare(password, client.password)

        console.log("pwMatch: ", passwordMatch);
        

        if (!passwordMatch) {
            throw new Error("Username or password invalid");
        }
        //Gerar o token
        const token = sign({username}, "4a521526b8752af0944da873f72307e4", {
            subject: client.id,
            expiresIn: "1d",
        });

        return token;
    }
}