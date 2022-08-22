import { Request } from 'express';
import { Response } from 'express';

import { ProductModel } from '../models/productModel';
import { ReserveModel } from '../models/reserveModel';

import ProductService from '../services/productService';

export class ProductController {
  public productService = ProductService;

  // EndPoint 1
  //
  //Retorno
  //Caso o Produto Exista
  // HTTP 200 + JSON: {"stock": 123}
  //Caso nao exista cria um produto e o coloca como estoque 0
  public getStock = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    try {
      const product = await ProductModel.findOne({ _id: id });

      if (product != null) {
        res.status(200).json({ stock: product.stock });
      } else {
        await ProductModel.create(this.productService.newProduct(id));

        res.status(200).json({ stock: 0 });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  // EndPoint 2
  //
  //Retorno:
  //Caso o produto Exista
  // HTTP 200 + JSON: {"IN_STOCK": 123, "RESERVED": 4, "SOLD": 12}
  //Caso o produto não exista
  // HTTP 404
  public getProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
      const product = await ProductModel.findOne({ _id: id });

      if (product != null) {
        res.status(200).json({
          IN_STOCK: product.stock,
          RESERVED: product.reserved,
          SOLD: product.sold,
        });
      } else {
        res.status(404).json('');
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  // EndPoint 3
  //
  //Retorno
  //Se existe estoque disponivel (ou seja estoque maior ou igual a 1)
  // Altera o status de 1 item de IN_STOCK para RESERVED
  // HTTP 200 + JSON: {"reservationToken": "22489339-5462-458b-b184-fc1f55eedab5"}
  //Se não existe estoque disponivel (ou seja estoque menor que 1)
  // HTTP 400
  //Observaçao: O Token é unico para aquele produto e para aquela reserva
  public reserve = async (req: Request, res: Response) => {
    //Recebendo o Id do Produto
    const productId: number = parseInt(req.params.id);

    try {
      const product = await ProductModel.findOne({ _id: productId });

      if (product != null && product.stock > 0) {
        product.stock = product.stock.valueOf() - 1;
        product.reserved = product.reserved.valueOf() + 1;

        const updatedProduct = await ProductModel.updateOne(
          { _id: productId },
          product
        );
        const reservationToken = require('crypto').randomUUID();

        //Montando o Objeto Reserve para salvar no Banco
        const reserve = {
          productId,
          reservationToken,
        };

        await ReserveModel.create(reserve);
        res.status(200).json({ reservationToken: reservationToken });
      }
    } catch (error) {
      res.status(400).json();
    }
  };

  // EndPoint 4
  //
  //Retorno
  //Se o token confere com o produto, move o item de RESERVED para IN_STOCK
  // HTTP 200
  //Se o token nao confere retorna nada
  public unreserve = async (req: Request, res: Response) => {
    //Recebendo o Id do Produto e o Token
    const productId: number = parseInt(req.params.id);
    const { reservationToken } = req.body;

    try {
      var product = await ProductModel.findOne({ _id: productId });

      const reserve = await ReserveModel.findOne({
        productId: productId,
        reservationToken: reservationToken,
      });

      if (reserve != null) {
        if (product != null) {
          product.stock = product.stock.valueOf() + 1;
          product.reserved = product.reserved.valueOf() - 1;

          const updatedProduct = await ProductModel.updateOne(
            { _id: productId },
            product
          );
        }
        await ReserveModel.deleteOne({
          productId: reserve.productId,
          reservationToken: reserve.reservationToken,
        });
      }
      res.status(200).json('');
    } catch (error) {
      res.status(400).json();
    }
  };

  // EndPoint 5
  //
  //Retorno
  //Se o token confere com o produto, move o item de RESERVED para SOLD
  // HTTP 200
  //Se não for bem sucedido
  // HTTP 400
  public sold = async (req: Request, res: Response) => {
    //Recebendo o Id do Produto e o Token
    const productId: number = parseInt(req.params.id);
    const { reservationToken } = req.body;

    try {
      const product = await ProductModel.findOne({ _id: productId });

      const reserve = await ReserveModel.findOne({
        productId: productId,
        reservationToken: reservationToken,
      });

      if (reserve != null) {
        if (product != null) {
          product.sold = product.sold.valueOf() + 1;
          product.reserved = product.reserved.valueOf() - 1;

          const updatedProduct = await ProductModel.updateOne(
            { _id: productId },
            product
          );
        }

        await ReserveModel.deleteOne({
          productId: reserve.productId,
          reservationToken: reserve.reservationToken,
        });
      }
      res.status(200).json('');
    } catch (error) {
      res.status(400).json();
    }
  };
}

export default new ProductController();
