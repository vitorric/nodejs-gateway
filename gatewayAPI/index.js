import express from 'express';
import httpProxy from 'express-http-proxy';

const app = express();
const port = 3000;

import {
  USERS_API_URL,
  PRODUCTS_API_URL,
} from './URLs.js';

const userServiceProxy = httpProxy(USERS_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/users', (req, res, next) => userServiceProxy(req, res, next));
app.get('/users/*', (req, res, next) => userServiceProxy(req, res, next));
app.get('/products', (req, res, next) => productsServiceProxy(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));