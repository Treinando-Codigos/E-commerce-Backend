import Router from 'express';

import ProductsController from '../controller/ProductsController';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.get('/', productsController.index);

export default productRouter;
