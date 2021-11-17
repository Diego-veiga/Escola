import { Router } from 'express';

import FotoController from '../controllers/fotoController';
import loginRequired from '../middlewares/loginRequired';

const routers = new Router();

routers.post('/', loginRequired, FotoController.store);

export default routers;
