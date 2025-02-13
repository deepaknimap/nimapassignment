import { indexRoute } from "./controller/index.jsc";
import express from 'express';
const app = express();


app.use(express.json());

app.use('/' ,  indexRoute);

app.use((err, req, res, next) => {
    let { code = 500, message = 'something went wrong', name } = err;
    res.status(code).json({
        message,
        success: false
    })
})

app.listen(8000, () => {
    console.log('link -> http://localhost:8000');
})