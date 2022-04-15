const NodeCouchDb = require("node-couchdb");
var data = require("dotenv").config().parsed;
const couch = new NodeCouchDb({
  auth: {
    user: data.USERNAME,
    password: data.PASSWORD,
  },
});

module.exports = couch;
