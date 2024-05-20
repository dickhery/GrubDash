const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /orders handlers needed to make the tests pass
const validateOrder = require("../middleware/validateOrder");
const orderExists = require("../middleware/orderExists");

const list = (req, res) => {
    res.json({ data: orders });
};

const create = (req, res) => {
    const { data: { deliverTo, mobileNumber, status, dishes } = {} } = req.body;
    const newOrder = { id: nextId(), deliverTo, mobileNumber, status, dishes };
    orders.push(newOrder);
    res.status(201).json({ data: newOrder });
};

const read = (req, res) => {
    res.json({ data: res.locals.order });
};

const update = (req, res, next) => {
    const order = res.locals.order;
    const { data: { id, deliverTo, mobileNumber, status, dishes } = {} } = req.body;

    if (id &&id !== order.id) {
        return next({ status: 400, message: `Order does not match route id. Order: ${id}, Route: ${order.id}` });
    }

    order.deliverTo = deliverTo;
    order.mobileNumber = mobileNumber;
    order.status = status;
    order.dishes = dishes;

    res.json({ data: order });
};

const deleteOrder = (req, res, next) => {
    if (res.locals.order.status !== "pending") {
        return next({ status: 400, message: "An order cannot be deleted unless it is pending" });
    }
    const index = orders.findIndex(order => order.id === res.locals.order.id);
    orders.splice(index, 1);
    res.sendStatus(204);
};

module.exports = {
    list,
    create: [validateOrder(), create],
    read: [orderExists, read],
    update: [orderExists, validateOrder(true), update],
    delete: [orderExists, deleteOrder],
};