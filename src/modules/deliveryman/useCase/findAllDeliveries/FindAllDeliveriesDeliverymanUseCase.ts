import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveryDeliverymanUseCase {
    async excecute(id_deliveryman: string) {
        const deliveries = await prisma.deliveryman.findMany({
            where: {
                id:id_deliveryman,
            },
            select: {
                id: true,
                username: true,
                deliveries: true
            }
        });

        return deliveries;
    }
}