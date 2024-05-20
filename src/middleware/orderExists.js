const orders = require("../data/orders-data");

const orderExists = (req, res, next) => {
    const { orderId } = req.params;
    const foundOrder = orders.find(order => order.id === orderId);

    if (foundOrder) {
        res.locals.order = foundOrder;
        return next();
    }

    next({ status: 404, message: `Order id not found: ${orderId}` });
};

module.exports = orderExists;