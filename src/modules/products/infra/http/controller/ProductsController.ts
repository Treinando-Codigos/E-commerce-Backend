import { Request, Response } from 'express';
import ListProductsService from '../../../services/ListProductService';

const listProductsService = new ListProductsService();

class SessionsController {
  async index(req: Request, res: Response) {
    const result = await listProductsService.execute();
    return res.status(result.code).json(result);
  }
}

export default SessionsController;
