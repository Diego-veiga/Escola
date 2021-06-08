import { Router } from 'express';
import userController from '../controllers/userController';

import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', userController.store);
routes.get('/', loginRequired, userController.Index);
routes.get('/:id', userController.show);
routes.put('/:id?', userController.update);
routes.delete('/:id', userController.delete);

export default routes;
