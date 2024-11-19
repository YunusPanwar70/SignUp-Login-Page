import moduleName from '../controller/index.js';
import { Router } from 'express';

const signinRouter = Router();

signinRouter.post(
    "/sign-in",
    signinRouter.signinControllers.signinController
);
export default signinRouter;