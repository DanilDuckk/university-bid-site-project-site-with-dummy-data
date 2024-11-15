import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 3000;

import users from './routes/users.js';
import products from './routes/products.js';
import bids from "./routes/bids.js";

app.use(cors());
app.use(bodyParser.json());
app.use("/users", users);
app.use("/products", products);
app.use("/bids", bids);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})