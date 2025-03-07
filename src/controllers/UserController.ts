import { Request, Response, NextFunction } from "express";
import { IUserService } from "../interfaces/IUserServices";

export class UserController {
    private userService: IUserService;
    constructor(userService: IUserService) {
        this.userService = userService;
    }
    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.getUser();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
