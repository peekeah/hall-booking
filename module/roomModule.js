const mongo = require("../shared/connect");
const { ObjectId } = require("mongodb");

module.exports.getRooms = async (req, res, next) => {
  try {
    const data = await mongo.db.collection("rooms").find().toArray();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.getRoom = async (req, res, next) => {
  try {
    const data = await mongo.db
      .collection("rooms")
      .findOne({ _id: ObjectId(req.params.id) });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.createRoom = async (req, res, next) => {
  try {
    const data = await mongo.db.collection("rooms").insertOne(req.body);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports.updateRoom = async (req, res, next) => {
  try {
    const data = await mongo.db
      .collection("rooms")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: { ...req.body } });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
