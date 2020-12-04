import { connection } from '../../../shared/config/database';

class OrdersFlavorService {
  execute() {
    const listAllProducts = async () => {
      const response = await connection.query(`SELECT * FROM produto`);
      if (response.rows) {
        return { code: 200, message: 'success', orders: response.rows };
      }
      return { code: 404, message: 'not found' };
    };
    return listAllProducts();
  }
}

export default OrdersFlavorService;
