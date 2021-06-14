import { Router } from 'express';

import FotoController from '../controllers/fotoController';

const routers = new Router();

routers.post('/', FotoController.store);

export default routers;
