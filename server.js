const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);

    await newContact.save();

    res.status(200).json({
      message: "Message Saved Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error saving message"
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});