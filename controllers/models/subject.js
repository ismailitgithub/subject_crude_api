const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
  subjectName: String,
  preRequests: [String],
  book : {
    name: String,
    author: String,
    edition: String, 
  },
  subjectRefrences: [{ 
    refName: String,
    refLink: String,
  }],
}, 
  { timestamps: true }
);

module.exports = mongoose.model("Student", subjectSchema);
