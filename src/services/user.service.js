import UserDAO from "../daos/mongo/user.dao.js"

const userDAO = new UserDAO()

class UserService {
  async getAll() {
    return await userDAO.getUsers();
  }

  async getById(uid) {
    return await userDAO.getUserById(uid);
  }

  async createUser(body) {
    return await userDAO.saveUser(body)
  }
}

export default UserService
