import { ConflictException } from '@nestjs/common';

export class UserEmailAlreadyExistsException extends ConflictException {
  constructor(email: string) {
    super(`User with email '${email}' already exists`);
  }
}
