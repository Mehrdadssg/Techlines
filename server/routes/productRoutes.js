import express from "express";
import Products from "../models/Products.js";

const productRoutes = express.Router()

const getProducts = async (req,res) =>{
    const products = await Products.find({

    })

    res.json({
        products,
        pagination:{},
    })
}


productRoutes.route('/').get(getProducts);
export default productRoutes;