const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass
const validateDish = require("../middleware/validateDish");
const dishExists = require("../middleware/dishExists");

const list = (req, res) => {
    res.json({ data: dishes });
};

const create = (req, res) => {
    const { data: { name, description, price, image_url } = {} } = req.body;
    const newDish = { id: nextId(), name, description, price, image_url };
    dishes.push(newDish);
    res.status(201).json({ data: newDish });
};

const read = (req, res) => {
    res.json({ data: res.locals.dish });
};

const update = (req, res, next) => {
    const dish = res.locals.dish;
    const { data: { id, name, description, price, image_url } = {} } = req.body;

    if (id && id !== dish.id) {
        return next({ status: 400, message: `Dish does not match route id. Dish: ${id}, Route: ${dish.id}` });
    }

    dish.name = name;
    dish.description = description;
    dish.price = price;
    dish.image_url = image_url;

    res.json({ data: dish });
}

module.exports = {
    list,
    create: [validateDish, create],
    read: [dishExists, read],
    update: [dishExists, validateDish, update],
};