import BusinessService from "../services/business.service.js";

const businessService = new BusinessService();

class BusinessController {
  async getBusiness(req, res) {
    let allBusiness = await businessService.getAll()
    res.json({ status: "success", business: allBusiness });
  }

  async getBusinessById(req, res) {
    const bid = req.params.bid
    const business = await businessService.getById(bid)
    if(!business) {
      return res.status(404).json({ status: "error", message: "Business not found" })
    }
    res.json({ status: "success", business }) 
  }

  async createBusiness(req, res) {
    const response = await businessService.createBusiness(req.body)
    if(!response) {
      return res.status(400).json({ status: "failed", message: "Error to create business (view console)"})
    }
    res.json({ status: "success", response  });
  }

  async addProduct(req, res) {
    const { bid } = req.params;
    const { product } = req.body;
    const response = await businessService.addNewProduct(bid, product)
    res.json({ status: "added", response })
  }

}

export default BusinessController;
