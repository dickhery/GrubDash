const validateDish = (req, res, next) => {
    const { data: { name, description, price, image_url } = {} } = req.body;

    if (!name) return next({ status: 400, message: "Dish must include a name" });
    if (!description) return next({ status: 400, message: "Dish must include a description" });
    if (price === undefined || price <= 0 || !Number.isInteger(price)) return next({ status: 400, message: "Dish must have a price that is an integer greater than 0" });
    if (!image_url) return next({ status: 400, message: "Dish must include a image_url" });

    next();
};

module.exports = validateDish;