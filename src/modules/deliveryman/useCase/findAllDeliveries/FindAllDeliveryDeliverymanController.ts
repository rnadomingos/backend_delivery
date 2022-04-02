import { Request, Response } from "express";
import { FindAllDeliveryDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";



export class FindAllDeliveryDeliverymanController {
    async handle(request: Request, response: Response) {

        const { id_deliveryman } = request;

        const findAllDeliveryDeliverymanUseCase = new FindAllDeliveryDeliverymanUseCase();
        const deliveries = await findAllDeliveryDeliverymanUseCase.excecute(id_deliveryman);

        return response.json(deliveries)
    }
}