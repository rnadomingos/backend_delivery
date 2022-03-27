import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response) {
        //Receber os dados do deliveryman
        const{ username, password } = request.body

        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()
        const result = await authenticateDeliverymanUseCase.execute({
            username, 
            password
        })
        return response.json(result)
    }
}