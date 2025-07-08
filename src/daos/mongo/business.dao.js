import businessModel from "./models/business.model.js";

class BusinessDAO {
  async getBusiness() {
    try {
      let result = await businessModel.find({});
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async getBusinessById(bid) {
    try {
      let result = await businessModel.findOne({ _id: bid });
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async saveBusiness(business) {
    try {
      let result = await businessModel.create(business);
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async updateBusiness(bid, obj) {
    try {
      let result = await businessModel.updateOne({ _id: bid }, { $set: obj });
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }
}

export default BusinessDAO
