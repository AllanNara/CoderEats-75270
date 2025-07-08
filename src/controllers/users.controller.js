class UserController {
  getUsers(req, res) {
    res.json({ status: "success", response: "OK" }) 
  }

  saveUser(req, res) {
    res.json({ status: "success", response: "OK" }) 
  }

  getUserById(req, res) {
    res.json({ status: "success", response: "OK" }) 
  }
}

export default UserController
