const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();



// app.use(express.static("build"));

const url = process.env.MONGODB_URI;

mongoose.connect(url);

const restoSchema = new mongoose.Schema({
  restoName: String,
  content: String,
  rating: Number,
  date: Date,
});

const Resto = mongoose.model("Resto", restoSchema);

app.get("/api/restos", (request, response) => {
  Resto.find({}).then((restos) => {
    response.json(restos);
  });
});

app.post("/api/restos", (req,res) => {
  Resto.save
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
