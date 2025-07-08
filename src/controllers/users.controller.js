import UserService from "../services/user.service.js"

const userService = new UserService()

class UserController {
  async getUsers(req, res) {
    const users = userService.getAll();
    res.json({ status: "success", users }) 
  }

  async saveUser(req, res) {
    const { name, email } = req.body
    if(!name || !email) {
      return res.status(400).json({ status: "error", message: "Missing fields" });
    }

    const response = await userService.createUser({ name, email })
    if(!response) {
      return res.status(500).json({ status: "error", message: "View console" }) 
    }

    res.status(201).json({ status: "created", payload: response })
  }

  async getUserById(req, res) {
    const uid = req.params.uid
    const user = userService.getUserById(uid)
    if(!user) {
      return res.status(404).json({ status: "error", message: "User not found" })
    }
    res.json({ status: "success", user }) 
  }
}

export default UserController
