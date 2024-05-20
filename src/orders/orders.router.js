const router = require("express").Router();

// TODO: Implement the /orders routes needed to make the tests pass
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);


module.exports = router;
