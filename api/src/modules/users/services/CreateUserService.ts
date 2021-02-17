import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({ name, email, password });

    return user;
  }
}
