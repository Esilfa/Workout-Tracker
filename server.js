const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();
const path = require("path");

const apiRoutes = require('./routes/api-routes');
const viewRoutes = require('./routes/html-routes');

// mongodb+srv://esilfa:Codingpass1!@cluster0.pfval.mongodb.net/myFirstDatabase?retryWrites=true&w=majority,

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});