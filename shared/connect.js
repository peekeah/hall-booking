const { MongoClient } = require("mongodb");

module.exports = {
  db: {},
  async connect() {
    try {
      const client = await MongoClient.connect(process.env.MONGO_CLOUD);
      this.db = client.db(process.env.DB);
    } catch (err) {
      console.log(err);
    }
  }
}
