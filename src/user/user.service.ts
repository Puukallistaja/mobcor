import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserId(id): string {
    return '<div style="color: red">Hello World! </div>' + id;
  }
}