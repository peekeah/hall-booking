const express = require("express");
const customerModule = require("../module/customerModule");
const router = express.Router();

router.get('/', customerModule.getCustomers);

module.exports = router;