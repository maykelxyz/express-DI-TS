import { IDBRepository } from "../interfaces/IDBRepository";
import { Config } from "../config";

export class DBRepository implements IDBRepository {
    config: Config;
    constructor(config: Config) {
        this.config = config;
    }
    async getUser(): Promise<any> {
        return "Success";
    }
}
