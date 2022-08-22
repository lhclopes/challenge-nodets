import { Router } from 'express';
import Controller from '../controllers/productController';

const router = Router();

router.get('/product/:id/stock', Controller.getStock);
router.get('/product/:id', Controller.getProduct);
router.post('/product/:id/reserve', Controller.reserve);
router.post('/product/:id/unreserve', Controller.unreserve);
router.post('/product/:id/sold', Controller.sold);

module.exports = router;
