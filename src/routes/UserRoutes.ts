import { UserController } from "../controllers/UserController";
import express from "express";
import { IUserService } from "../interfaces/IUserServices";

const createUserRoutes = (userService: IUserService) => {
    const router = express.Router();

    // Initialize the controller
    const userController = new UserController(userService);

    // Map the routes
    router.get("", (req, res, next) => userController.getUser(req, res, next));

    return router;
};

export default createUserRoutes;
