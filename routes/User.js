const express = require("express");
const { userController } = require("../controller/userController");
const { catchErrors } = require("../handlers/errorHandler");

const router = express.Router();

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));

module.exports = router;
