import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

module.exports = methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        return res.status(200).json({ message: `producto obtenido`, request: req.query });
    },
});
