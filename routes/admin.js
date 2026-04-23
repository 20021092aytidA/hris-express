const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin");

router.get("/", controller.ViewAdmin);
router.post("/", controller.CreateAdmin);

module.exports = router;
