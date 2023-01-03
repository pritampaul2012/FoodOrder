const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//Express Specific
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
//Mongoose Specific
mongoose
  .connect("mongodb+srv://jonty:pkp@cluster0.lxj62.mongodb.net/reactfoodDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
//EndPoints
app.use("/", require("./Routes/route"));

app.listen(5000, () => {
  console.log("BackEnd Server is running on Port 5000");
});
