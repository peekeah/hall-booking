const mongo = require("../shared/connect");

module.exports.getCustomers = async (req, res, next) => {
    try {
        const data = await mongo.db.collection('customers').find().toArray();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}