import { Router } from 'express';

const router = Router();

router.get('/', getBusiness);
router.get('/:id', getBusinessById);
router.post('/', createBusiness);
router.post('/:id/products', addProduct);

export default router;