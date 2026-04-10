const User = require('./user');

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(name, email, age) {
    const user = new User(name, email, age);
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}

module.exports = UserManager;