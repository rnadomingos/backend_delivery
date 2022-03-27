import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient"


interface ICreateDeliveryman {
    username: string,
    password: string
}


export class CreateDeliverymanUseCase {
    //Verificar se Deliveryman existe
    async execute({username, password}: ICreateDeliveryman) {
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                }
            }
        })

        if (deliverymanExists) {
            throw new Error(`Deliveryman ${deliverymanExists.username} already exists in database`);
        }
        //Criptografar a Senha
        const hashPassword =  await hash(password, 10);

        //Inserir Deliveryman na base de dados
        const deliveryman = prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        });
        
        //Retornar Deliveryman
        return deliveryman;
    } 

}
