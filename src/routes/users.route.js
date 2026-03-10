import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import validate from '../validators/validate.js';
import { createSchema } from '../validators/user.validate.js';
const router = Router();

router.route('/').post(validate(createSchema), userController.create)

export default router