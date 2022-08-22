import { Router } from 'express';
import Controller from '../controllers/indexController';

const router = Router();

router.get('/', Controller.getIndex);

module.exports = router;
