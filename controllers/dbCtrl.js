require("dotenv").config();
var couch = require("../config/database");

let dropDB = async (req, res) => {
  try {
    const { dbName } = req.body;
    if (!dbName) {
      res.send({
        msg: "dbName is required",
      });
    }
    couch.dropDatabase(dbName).then(
      () => {
        res.json({
          success: true,
          msg: "Db deleted successfully",
        });
      },
      (err) => {
        res.json({
          success: false,
          msg: err.body.reason,
        });
      }
    );
  } catch (error) {
    res.json(error);
  }
};

let getAllDbs = async (req, res) => {
  try {
    couch.listDatabases().then(
      (dbs) => {
        res.send(dbs);
      },
      (err) => {
        res.json({
          success: false,
          msg: err.body.reason,
        });
      }
    );
  } catch (error) {
    res.json(error);
  }
};

let createDB = async (req, res) => {
  try {
    const { dbName } = req.body;
    if (!dbName) {
      res.send({
        msg: "dbName is required",
      });
    }
    couch.createDatabase(dbName).then(
      () => {
        res.json({
          success: true,
          msg: "Db created successfully",
        });
      },
      (err) => {
        res.json({
          success: false,
          msg: err.body.reason,
        });
      }
    );
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createDB,
  dropDB,
  getAllDbs,
};
