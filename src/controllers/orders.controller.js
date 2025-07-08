import OrderService from "../services/order.service.js"

const orderService = new OrderService()

class OrderController {
  async getOrders(req, res) {
    const orders = await orderService.getAll()
    res.json({ status: "success", orders }) 
  }

  async getOrderById(req, res) {
    const oid = req.params.oid
    const order = await orderService.getById(oid)
    if(!order) {
      return res.status(404).json({ status: "error", message: "Order not found" })
    }
    res.json({ status: "success", order }) 
  }

  async createOrder(req, res) {
    const { user, business, products } = req.body;
    if(!user || !business || !products.length) {
      return res.status(400).json({ status: "error", message: "Missing Fields" })
    }
    const result = await orderService.createOrder(user, business, products);
    if(result.error || result.type === 404) {
      return res.status(404).json({ status: "error", message: "Order or User not found" })
    }
    if(!result) {
      return res.status(500).json({ status: "error", message: "Order not found" })
    }
    res.json({ status: "success", payload: result }) 
  }

  async resolverOrder(req, res) {
    const { oid } = req.params;
    const { resolve } = req.query;
    const result = await orderService.resolveOrder(oid, resolve);
    res.json({ status: "success", message: "Order resolved", result })
  }
}


export default OrderController
