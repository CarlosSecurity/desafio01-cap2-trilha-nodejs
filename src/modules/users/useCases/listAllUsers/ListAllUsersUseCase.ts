import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User not found!");
    }
    if (!userExists.admin) {
      throw new Error("Admin Required");
    }
    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
