require("dotenv").config();
var couch = require("../config/database");

const dbName = "customers";
const viewUrl = "_design/all_customers/_view/all";

let createUser = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    couch
      .insert(dbName, {
        name,
        email,
        address,
      })
      .then(
        ({ data, headers, status }) => {
          res.send(data);
        },
        (err) => {
          res.send(err);
        }
      );
  } catch (error) {
    res.json(error);
  }
};

let getAllUsers = async (req, res) => {
  try {
    couch.get(dbName, viewUrl).then(
      (data, headers, status) => {
        res.send(data);
      },
      (err) => {
        res.send(err);
      }
    );
  } catch (error) {
    res.json(error);
  }
};

let getUser = async (req, res) => {
  try {
    couch.get(dbName, req.params.doc_id).then(
      ({ data, headers, status }) => {
        res.send(data);
      },
      (err) => {
        res.send(err);
      }
    );
  } catch (error) {
    res.json(error);
  }
};

let updateUser = async (req, res) => {
  try {
    couch.get(dbName, req.body._id).then(
      ({ data, headers, status }) => {
        couch
          .update(dbName, {
            _id: req.body._id,
            _rev: req.body._rev,
            name: req.body.name || data.name,
            email: req.body.email || data.email,
            address: req.body.address || data.address,
          })
          .then(
            ({ data, headers, status }) => {
              res.send(data);
            },
            (err) => {
              res.send(err);
            }
          );
      },
      (err) => {
        res.send(err);
      }
    );
  } catch (error) {
    res.json(error);
  }
};

let deleteUser = async (req, res) => {
  try {
    const { _id, _rev } = req.body;
    couch.del(dbName, _id, _rev).then(
      ({ data, headers, status }) => {
        data.message = "User deleted successfully";
        res.send(data);
      },
      (err) => {
        res.send(err);
      }
    );
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
