import { customError } from "../error/customError.js";

export const indexRoute =  (req, res, next) => {
    let { name, address, cast } = req.body;

    if (!name) {
        throw new customError('enter your full name it is require', 402)
    }
    res.json({
        name,
        address,
        cast
    })
}