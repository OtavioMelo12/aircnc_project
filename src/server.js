const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://aircnc_melo:aircnc_melo@cluster0-olzkd.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
