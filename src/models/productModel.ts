import { model, Schema } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IProduct {
  _id: Number;
  name: string;
  stock: Number;
  reserved: Number;
  sold: Number;
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  reserved: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    required: true,
  },
});

export const ProductModel = model('Product', productSchema);
