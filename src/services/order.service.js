import BusinessDAO from "../daos/mongo/business.dao.js";
import UserDAO from "../daos/mongo/user.dao.js";
import OrderDAO from "../daos/mongo/order.dao.js";

const businessDAO = new BusinessDAO();
const userDAO = new UserDAO();
const orderDAO = new OrderDAO();

class OrderService {
  async getAll() {
    return await orderDAO.getOrders();
  }

  async getById(oid) {
    return await orderDAO.getOrderById(oid);
  }

  // products = [23, 52, 10, 22]  <-- ids de productos de un negocio
  async createOrder(uid, bid, products) {
    const user = await userDAO.getUserById(uid);
    const business = await businessDAO.getBusinessById(bid);
    if(!user || !business) {
      console.log("Error on OrderService (createOrder fn)")
      return { error: true, type: 404 }
    }
    const actualOrder = business.products.filter((pr) =>
      products.includes(pr.id),
    );
    const totalPrice = actualOrder.reduce((acc, prev) => {
      const price = parseInt(prev.price);
      acc += price;
      return acc;
    }, 0);
    const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

    const order = {
      number: orderNumber,
      business: business._id,
      user: user._id,
      status: "pending",
      products: actualOrder.map((pr) => pr.id),
      totalPrice,
    };

    const orderResult = await orderDAO.saveOrder(order);
    user.orders.push(orderResult._id);
    const updatedUser = await userDAO.updateUser(user._id, user);

    if(!orderResult || !updatedUser) {
      console.log("Error on OrderService (createOrder fn)")
      return null
    }


    return orderResult;
  }

  async resolveOrder(oid, resolve) {
    const order = await orderDAO.getOrderById(oid);
    order.status = resolve;
    const response = await orderDAO.updateOrder(oid, order)
    return response
  }
}

export default OrderService
