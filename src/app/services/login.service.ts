import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: User[] = [];

  constructor() {
    this.users.push({
      username: "andres",
      password: "19400657"
    });
    this.users.push({
      username: "admin",
      password: "admin"
    });

  }

  public validateUser(user: User): boolean {
    for (let u of this.users) {
      if (u.username == user.username && u.password == user.password) {
        return true;
      }
    }
    return false;
  }
}
