import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


export class FindAllDeliveriesController {
    async handle(request: Request, response: Response) {
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()

        const { id_client } = request;

        const deliveries = await findAllDeliveriesUseCase.execute(id_client);

        response.json(deliveries)

    }
}