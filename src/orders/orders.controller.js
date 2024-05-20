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


module.exports = {
    list,
    create: [validateOrder(), create],
    read: [orderExists, read],
};