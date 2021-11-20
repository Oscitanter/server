// UserService PascalCase Class Naming
// userService camelCase instance naming
// user_service snake_case FORBIDDEN IN NODE.JS
// user-service kebab-case FORBIDDEN IN NODE.JS

class UserService {
  users = [];
  constructor() {
    this.addUser({
      id: "1",
      name: "Stelios",
      address: "Marinas 66",
      phoneNumber: "12345",
    });
    this.addUser({
      id: "2",
      name: "Dimitris",
      address: "Marinas 64",
      phoneNumber: "666666",
    });
    this.addUser({
      id: "3",
      name: "Daf",
      address: "Marinas 62",
      phoneNumber: "765432",
    });
  }

  addUser(user) {
    //POST = Create new User
    this.users.push(user);
  }
  getUsers() {
    //READ = Find all users
    return this.users;
  }
  getUserById(id) {
    //READ = Find One User
    let user = null;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        user = this.users[i];
        break;
      }
    }
    if (user) {
      //GUARD clause
      return user;
    }
    throw new Error(`User with id ${id} not found!`);
  }
  updateUser(id, newUser) {
    let wasUserReplaced = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users[i] = newUser;
        wasUserReplaced = true;
        break;
      }
    }
    if (wasUserReplaced) {
      return newUser;
    }
    throw new Error(`User: with id:${id} was not found and so not replaced!`);
  }
  deleteUser(id) {
    let wasUserDeleted = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
        wasUserDeleted = true;
        break;
      }
    }
    if (wasUserDeleted) {
      return `User with ${id} was deleted!`;
    }
    throw new Error(`User with ${id} was not found , so not deleted`);
  }
}

module.exports = UserService;
