import BusinessDAO from "./daos/mongo/business.dao.js";

const businessDAO = new BusinessDAO();

export default class BusinessRepository {
  async getBusiness() {
    return await businessDAO.getBusiness();
  }

  async getBusinessById(bid) {
    return await businessDAO.getBusinessById(bid)
  }

  async saveBusiness(business) {
    return await businessDAO.saveBusiness(business)
  }

  async updateBusiness(bid, obj) {
    return await businessDAO.updateBusiness(bid, obj)
  }
}
