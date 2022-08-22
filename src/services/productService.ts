import { ProductModel } from '../models/productModel';
import { ReserveModel } from '../models/reserveModel';

class ProductService {
  public model = ProductModel;
  public modelName = 'Product';
  public filters = [];

  async maxProductId() {
    const increment: number = 1;

    var products = await ProductModel.findOne().sort({ _id: -1 }).limit(1);
    if (products != null) return products._id.valueOf() + 1;
    else return 1;
  }

  newProduct(id: number) {
    var _id = id;
    var name = '?';
    var stock = 0;
    var reserved = 0;
    var sold = 0;

    const product = { _id, name, stock, reserved, sold };

    return product;
  }
}

export default new ProductService();
