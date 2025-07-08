import BusinessDAO from "../daos/mongo/business.dao.js"

const businessDAO = new BusinessDAO();

class BusinessService {
  async getAll() {
    return await businessDAO.getBusiness();
  }

  async getById(bid) {
    return await businessDAO.getBusinessById(bid)
  }

  async createBusiness(body) {
    return await businessDAO.saveBusiness(body)
  }

  async addNewProduct(bid, prod) {
    const business = await businessDAO.getBusinessById(bid);
    business.products.push(prod);
    let response = await businessDAO.updateBusiness(bid, business);
    return response ? { updated: true } : { updated: false, error: "view console" } 
  }
}

export default BusinessService
