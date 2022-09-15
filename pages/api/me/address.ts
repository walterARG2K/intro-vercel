import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

module.exports = methods({
    async patch(req: NextApiRequest, res: NextApiResponse) {
        return res.status(200).send(`dirección del usuario actualizado`);
    },
});
