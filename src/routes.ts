import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCase/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCase/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailableUseCase/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/updateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCase/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveryDeliverymanController } from "./modules/deliveryman/useCase/findAllDeliveries/FindAllDeliveryDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveryDeliverymanController = new FindAllDeliveryDeliverymanController();
const updateEndDate = new UpdateEndDateController();

routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);
routes.post("/deliveries/", 
    ensureAuthenticateClient, 
    createDeliveryController.handle
    );
routes.get("/delivery/available", 
    ensureAuthenticateDeliveryman, 
    findAllAvailableController.handle
    );
routes.put("/delivery/updateDeliveryman/:id", 
    ensureAuthenticateDeliveryman, 
    updateDeliverymanController.handle
    );
routes.get("/client/deliveries",
    ensureAuthenticateClient,
    findAllDeliveriesController.handle
    )    
routes.get("/deliveryman/deliveries",
    ensureAuthenticateDeliveryman,
    findAllDeliveryDeliverymanController.handle
    )

routes.put("/delivery/updateEndDate/:id", 
    ensureAuthenticateDeliveryman, 
    updateEndDate.handle
    )

export { routes };