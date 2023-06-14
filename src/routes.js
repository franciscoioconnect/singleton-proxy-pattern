import { createProductHandler, getAllProductsHandler } from "../src/controller/product.controller.js";


function routes(app) {
    app.get("/healthcheck", (req, res) => res.sendStatus(200));

    app.post("/api/product", createProductHandler);

    app.get("/api/product", getAllProductsHandler);
}

export default routes;
