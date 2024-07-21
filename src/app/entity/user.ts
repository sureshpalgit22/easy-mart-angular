export class User {
    id: string;
    username: string;
    password: string;
    email: string;
    roles: string[];  // Array of roles
  
    constructor(id: string, username: string, password: string, email: string, roles: string[]) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
      this.roles = roles;
    }
  }