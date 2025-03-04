import express from "express";
import cors from "cors";
import { IDBRepository } from "./interfaces/IDBRepository";
import { DBRepository } from "./repository/DBRepository";
import { UserService } from "./services/UserServices";
import createUserRoutes from "./routes/UserRoutes";
import { Config } from "./config";
import { IUserService } from "./interfaces/IUserServices";

function createServer(config: Config) {
    const server = express();

    // Initialize middlewares first
    server.use(express.json());
    server.use(cors());

    // Initialize the database repository
    const dbRepository: IDBRepository = new DBRepository(config);

    // Initialize services
    const userServices: IUserService = new UserService(dbRepository);

    // Initialize routes
    server.use("/users", createUserRoutes(userServices));

    return server;
}

export default createServer;
