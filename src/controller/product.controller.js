import { createProduct, getAllProducts } from "../services/product.service.js";

export const createProductHandler = async (req, res) => {
    const body = req.body;

    const product = await createProduct(body);

    return res.status(201).send(product);
};

export const getAllProductsHandler = async (req, res) => {
    const products = await getAllProducts();

    return res.status(200).send(products);
};
