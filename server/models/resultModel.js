const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  year: {
    type: Number,
    require: [true, "year is required"],
  },
  semester: {
    type: Number,
    require: [true, "semester is required"],
  },
  branch: {
    type: String,
    require: [true, "branch is required"],
  },
  subject: {
    type: String,
    default: [true, "subject is required"],
  },
  examType: {
    type: String,
    require: [true, "exam type is required"],
  },
  marks: [
    {
      rollNumber: {
        type: String,
        required: [true, "roll number is required"],
      },
      mark: {
        type: String,
        required: [true, "mark is required"],
      },
    },
  ],
});

const resultModel = mongoose.model("result", resultSchema);

module.exports = resultModel;
