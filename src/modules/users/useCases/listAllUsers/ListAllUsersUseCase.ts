import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFound = this.usersRepository.findById(user_id);

    if (!userFound) {
      throw new Error("This user don't exist");
    } else if (!userFound.admin) {
      throw new Error("You're not allowed");
    } else {
      return this.usersRepository.list();
    }
  }
}

export { ListAllUsersUseCase };
