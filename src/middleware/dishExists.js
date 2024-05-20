const dishes = require("../data/dishes-data");

const dishExists = (req, res, next) => {
    const { dishId } = req.params;
    const foundDish = dishes.find(dish => dish.id === dishId);

    if (foundDish) {
        res.locals.dish = foundDish;
        return next();
    }
    next({ status: 404, message: `Dish id not found: ${dishId}` });
};

module.exports = dishExists;