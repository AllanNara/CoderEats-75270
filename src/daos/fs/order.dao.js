import fs from "fs"

const fsPromises = fs.promises

class OrderDAO {
  async getOrder() {}

  async getOrderById(oid) {}

  async saveOrder(order) {}

  async updateOrder(oid, obj) {}
}

export default OrderDAO;
