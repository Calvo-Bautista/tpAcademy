
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly users = [
        { id: 1, name: 'Juan', email: 'alice@gmail.com' },
        { id: 2, name: 'Bautista', email: 'Bautista@gmail.com' },
        { id: 3, name: 'Hector', email: 'Hector@gmail.com' },
    ];

    getUsers() {
        return this.users;
    }
}
