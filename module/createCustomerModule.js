const { ObjectId } = require("mongodb");
const mongo = require("../shared/connect");

module.exports.createCustomer = async (req, res, next) => {
  try {
    const data = { ...req.body };
    data.date = new Date(data.date);
    const selectedRoom = await mongo.db
      .collection("rooms")
      .findOne({ _id: ObjectId(req.params.id) });
    const roomNo = selectedRoom.room_no;
    data["booked_room_no"] = roomNo;
    const response = await mongo.db.collection("customers").insertOne(data);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
