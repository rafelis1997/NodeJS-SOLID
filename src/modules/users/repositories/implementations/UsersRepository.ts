import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const findUser = this.users.find((user) => user.id === id);

    return findUser;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const findUser = this.users.find((user) => user.email === email);

    return findUser;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    this.users.map((user) => {
      if (user.id === receivedUser.id) {
        const newAdmin = user;
        newAdmin.admin = true;
        return newAdmin;
      }

      return user;
    });

    return this.users.find((user) => user.id === receivedUser.id);
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
