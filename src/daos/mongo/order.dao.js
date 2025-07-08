import orderModel from "./models/order.model.js";

class OrderDAO {
  async getOrders() {
    try {
      let result = await orderModel.find({});
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async getOrderById(oid) {
    try {
      let result = await orderModel.findOne({ _id: oid });
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async saveOrder(order) {
    try {
      let result = await orderModel.create(order);
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }

  async updateOrder(oid, obj) {
    try {
      let result = await orderModel.updateOne({ _id: oid }, { $set: obj });
      return result;
    } catch (error) {
      console.error({ error });
      return null;
    }
  }
}

export default OrderDAO
