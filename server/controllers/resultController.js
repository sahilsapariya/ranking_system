const resultModel = require("../models/resultModel");
const XLSX = require("xlsx");

const AddResultController = async (req, res) => {
  try {
    console.log("inside add result controller")
    const workbook = XLSX.readFile(req.file.path[0]);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const marks = XLSX.utils.sheet_to_json(sheet);

    var result = await resultModel.create({
      year: req.body.year,
      semester: req.body.semester,
      branch: req.body.branch,
      subject: req.body.subject,
      examType: req.body.examType,
      marks: marks,
    });

    await result.save();

    res
      .status(200)
      .send({ message: "result added successfully", success: true });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  AddResultController,
};
