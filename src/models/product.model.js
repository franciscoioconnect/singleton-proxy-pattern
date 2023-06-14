import dbConnection from "../db/connectionDb.js";
import { DataTypes } from "sequelize";

export const ProductModel = dbConnection.sequelize.define("Product", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
});

