const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin");

router.get("/", controller.ViewAdmin);
router.post("/", controller.CreateAdmin);
router.post("/login", controller.LoginAdmin);

module.exports = router;
