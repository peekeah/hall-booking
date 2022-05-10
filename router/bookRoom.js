const express = require("express");
const { bookRoom } = require("../module/bookRoomModule");
const { createCustomer } = require("../module/createCustomerModule");
const router = express.Router();

router.patch("/:id", createCustomer, bookRoom);

module.exports = router;
