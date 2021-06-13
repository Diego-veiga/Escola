import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequiered from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequiered, alunoController.index);
router.get('/:id', loginRequiered, alunoController.show);
router.post('/', loginRequiered, alunoController.store);
router.put('/:id', loginRequiered, alunoController.update);
router.delete('/:id', loginRequiered, alunoController.delete);

export default router;
