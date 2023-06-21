import express from 'express';

const petRouter = express.Router();

petRouter.get("/", (req, res) => {
    res.send("pet");
    });
    

export default petRouter;