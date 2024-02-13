import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import { getAllSideUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getAllSideUsers);

export default router;