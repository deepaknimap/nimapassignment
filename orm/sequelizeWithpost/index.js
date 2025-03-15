require('dotenv').config();
const express = require('express');
const {connectDB} = require('./connect');
const app = express();
const employee = require('./model/employees');

const employeeRouter = require('./router/employee');

connectDB();

employee.sync({alter : false});

app.use(express.json());
app.use('/api/employee' , employeeRouter);

const port = process.env.port || 8000;

app.listen(port , ()=>{
    console.log(`port is running on ${port} http://localhost:${port}/`)
})



