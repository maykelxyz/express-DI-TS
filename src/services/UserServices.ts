import { IDBRepository } from "../interfaces/IDBRepository";
import { IUserService } from "../interfaces/IUserServices";
export class UserService implements IUserService {
    // Initialize the database repository
    private dbRepository: IDBRepository;

    // Initialize the database repository
    constructor(dbRepository: IDBRepository) {
        this.dbRepository = dbRepository;
    }
    async getUser() {
        return this.dbRepository.getUser();
    }
}
