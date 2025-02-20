const express = require('express');
const app = express();

const { connectDb } = require('./dbconnection/db')
const productRouter = require('./router/product');

connectDb('mongodb://127.0.0.1:27017/product')
    .then(() => {
        console.log('database connected');
    });

app.use(express.json());

app.use('/api/product', productRouter);


app.listen(3000, () => {
    console.log('server is running on 3000 port')
});