function validateOrder(requireStatus = false) {
    return (req, res, next) => {
        const { data: { deliverTo, mobileNumber, status, dishes } = {} } = req.body;

        if (!deliverTo) return next({ status: 400, message: "Order must include a deliverTo" });
        if (!mobileNumber) return next({ status: 400, message: "Order must include a mobileNumber" });
        if (!dishes || !Array.isArray(dishes) || dishes.length === 0) return next({ status: 400, message: "Order must include at least one dish" });

        dishes.forEach((dish, index) => {
            if (!dish.quantity || typeof dish.quantity !== "number" || dish.quantity <= 0) {
                return next({ status: 400, message: `Dish ${index} must have a quantity that is an integer greater than 0` });
            }
        });

        if (requireStatus) {
            const validStatuses = ["pending", "preparing", "out-for-delivery", "delivered"];
            if (!status) return next({ status: 400, message: "Order must have a status" });
            if (status === "") return next({ status: 400, message: "Order must have a status" });
            if (!validStatuses.includes(status)) return next({ status: 400, message: `Order must have a valid status. Status: ${status}` });
        }

        next();
    };
};

module.exports = validateOrder;