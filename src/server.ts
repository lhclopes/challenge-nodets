import express from 'express';
import mongoose from 'mongoose';

import { Router, Request, Response } from 'express';

const app = express();
app.use(express.json());

const indexRoutes = require('./routes/indexRoutes');
app.use(indexRoutes);

const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);

mongoose
  .connect(
    'mongodb+srv://administrador:teste123Mongo@cluster0.mjhxj5s.mongodb.net/kuantokusta?retryWrites=true&w=majority'
  )
  .then(result =>
    app.listen(8080, () =>
      console.log('Conectado ao MongoDB Atlas - Server running on port 8080')
    )
  )
  .catch(err => console.log(err));
