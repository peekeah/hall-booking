const express = require("express");
const router = express.Router();

const roomModule = require("../module/roomModule")


// List rooms
router.get("/", roomModule.getRooms);
router.get("/:id", roomModule.getRoom);

// Create Rooms
router.post('/create', roomModule.createRoom);

// Update room
router.put("/update/:id", roomModule.updateRoom);



module.exports = router;
