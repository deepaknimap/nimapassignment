const express = require('express');
const app = express();


class customError extends Error {
    constructor(message, code, name) {
        super(message);
        this.code = code;
        this.name = name;
    }
}       

app.get('/', async (req, res, next) => {
    // throw new customError('this is a custom error check client' , 401 ,   'validationError');
    next(new customError('this is a custom error check client', 401, 'validationError'));
})


app.use((err, req, res, next) => {
    let { message = 'there something wrong', code = 500, name } = err;
    res.status(code).json({
        message,
        name
    })
})


app.listen(4000, () => {
    console.log('app is running on port 4000');
})


setTimeout(() => {
    console.log('hello world ')
}, 5000);


