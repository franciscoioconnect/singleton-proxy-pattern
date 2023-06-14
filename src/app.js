import express from "express";
import routes from "./routes.js";
import dbConnection from "../src/db/connectionDb.js";
import bodyParser from "body-parser";

const port = 1337;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, async () => {
    await dbConnection.connectDB();
    routes(app);
});
