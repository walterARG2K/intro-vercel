import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

module.exports = methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        return res.status(200).send(`Usuario obtenido`);
    },
    async patch(req: NextApiRequest, res: NextApiResponse) {
        return res.status(200).send(`Usuario actualizado correctamente`);
    },
});
