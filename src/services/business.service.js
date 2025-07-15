import BusinessRepository from "../repositories/business.repository";

const businessRepository = new BusinessRepository()

class BusinessService {
  async getAll() {
    return await businessRepository.getBusiness();
  }

  async getById(bid) {
    return await businessRepository.getBusinessById(bid)
  }

  async createBusiness(body) {
    return await businessRepository.saveBusiness(body)
  }

  async addNewProduct(bid, prod) {
    const business = await businessRepository.getBusinessById(bid);
    business.products.push(prod);
    let response = await businessRepository.updateBusiness(bid, business);
    return response ? { updated: true } : { updated: false, error: "view console" } 
  }
}

export default BusinessService
