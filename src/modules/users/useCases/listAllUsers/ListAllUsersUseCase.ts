import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userIsAdmin = this.usersRepository.findById(user_id).admin;

    if (userIsAdmin) {
      return this.usersRepository.list();
    }
    throw new Error("User is not admin");
  }
}

export { ListAllUsersUseCase };
