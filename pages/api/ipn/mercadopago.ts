import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

module.exports = methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        return res.status(200).send(`compra por mercadopago realizado`);
    },
});
