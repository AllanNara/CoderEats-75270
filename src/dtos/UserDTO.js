export default class UserDTO {
  constructor(userRaw) {
    this.id = userRaw._id ?? userRaw.id,
    this.first_name = userRaw.first_name,
    this.last_name = userRaw.last_name,
    this.email = userRaw.email,
    this.role = userRaw.role,
    this.orders = userRaw.orders
  }

  getFullName() {
    return this.first_name + this.last_name
  }

}
