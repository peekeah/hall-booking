const { ObjectId } = require("mongodb");
const mongo = require("../shared/connect");

module.exports.bookRoom = async (req, res, next) => {
  try {
    const data = { ...req.body };
    data.date = new Date(data.date);
    data["room_id"] = req.params.id;

    const response = await mongo.db
      .collection("rooms")
      .updateOne(
        { _id: ObjectId(req.params.id) },
        { $set: { booked_data: data } }
      );

    res.send(response);

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
