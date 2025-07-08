import userModel from "./models/user.model.js";

class UserDAO {
  async getUsers() {
    try {
      let result = await userModel.find({});
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async getUserById(uid) {
    try {
      let result = await userModel.findOne({ _id: uid }).populate("orders");
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async saveUser(user) {
    try {
      let result = await userModel.create(user);
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async updateUser(uid, obj) {
    try {
      let result = await userModel.updateOne({ _id: uid }, { $set: obj });
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }
}

export default UserDAO
