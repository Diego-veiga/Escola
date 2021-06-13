import { Router } from 'express';
import userController from '../controllers/userController';

import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// não deveria existir
routes.get('/', loginRequired, userController.Index); // lista usuários
routes.get('/:id', userController.show); // Lista usuário

routes.post('/', userController.store);
routes.put('/', loginRequired, userController.update);
routes.delete('/', loginRequired, userController.delete);

export default routes;
