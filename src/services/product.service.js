import { ProductModel } from "../models/product.model.js";
import { v4 as uuidv4 } from "uuid";

export const createProduct = async (input) => {
    try {
        const product = await ProductModel.create({
            ...input,
            id: uuidv4(),
        });
        return product;
    } catch (error) {
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const products = await ProductModel.findAll();
        return products;
    } catch (error) {
        throw error;
    }
};
