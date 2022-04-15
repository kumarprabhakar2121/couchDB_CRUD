require("dotenv").config();

const app = require("./app");

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 5001;
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
