import userModel from "./models/user.model.js";

class UserDAO {
  async getUser() {
    try {
      let result = await userModel.find({});
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async getUserById(bid) {
    try {
      let result = await userModel.findOne({ _id: bid });
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

  async updateUser(bid, obj) {
    try {
      let result = await userModel.updateOne({ _id: bid }, { $set: obj });
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }
}

export default userDAO
