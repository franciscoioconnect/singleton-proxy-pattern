import { Sequelize } from "sequelize";

let instance;

class DBConnection {
    constructor() {
        if (instance) {
            throw new Error("You can only create one DB Connection!");
        }
        this.sequelize = new Sequelize("sqlite::memory:");
        instance = this;
    }
    async connectDB() {
        try {
            await this.sequelize.authenticate();
            await this.sequelize.sync();
            console.log("db is online");
        } catch (error) {
            console.log("Error in db connection");
            console.log({ error });
        }
    }
}

let dbConnection = Object.freeze(new DBConnection());

export default dbConnection;


 /**
 * Example using the new ES6 syntax, instead of a class
 */

// const DBConnectionObject = {
//     sequelize: new Sequelize("sqlite::memory:"),
//     async connectDB() {
//         try {
//             await this.sequelize.authenticate();
//             await this.sequelize.sync();
//             console.log("db is online");
//         } catch (error) {
//             console.log("Error in db connection");
//             console.log({ error });
//         }
//     }
// }

// let dbConnection = Object.freeze(DBConnectionObject);

// export default dbConnection;
