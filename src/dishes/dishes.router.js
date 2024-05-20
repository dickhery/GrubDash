const router = require("express").Router();

// TODO: Implement the /dishes routes needed to make the tests pass
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);


module.exports = router;