import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userToAdmin = this.usersRepository.findById(user_id);

    if (userToAdmin) {
      const userAdmin = this.usersRepository.turnAdmin(userToAdmin);
      return userAdmin;
    }

    throw new Error("User not found");
  }
}

export { TurnUserAdminUseCase };
