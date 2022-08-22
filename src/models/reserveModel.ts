import { model, Schema } from 'mongoose';

interface IReserve {
  productId: Number;
  reservationToken: String;
}

const reserveSchema = new Schema<IReserve>({
  productId: {
    type: Number,
    required: true,
  },
  reservationToken: {
    type: String,
    required: true,
  },
});

export const ReserveModel = model('Reserve', reserveSchema);
