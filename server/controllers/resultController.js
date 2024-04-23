const resultModel = require("../models/resultModel");
const XLSX = require("xlsx");

const AddResultController = async (req, res) => {
  try {
    const { year, semester, branch, subject, examType } = req.fields;

    const workbook = XLSX.read(req.files.marks.path, { type: "file" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const marks = XLSX.utils.sheet_to_json(sheet);

    var result = await resultModel.create({
      year,
      semester,
      branch,
      subject,
      examType,
      marks,
    });

    await result.save();

    res
      .status(200)
      .send({ message: "result added successfully", success: true });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const GetResultController = async (req, res) => {
  try {
    const { year, semester, branch, subject, examType } = req.query;

    const result = await resultModel.findOne({
      year: parseInt(year),
      semester: parseInt(semester),
      branch: branch,
      subject: subject,
      examType: examType,
    });

    if (!result) {
      return res.status(404).send({
        message: "result not found",
        success: false,
      });
    } else {
      return res.status(200).send({
        success: true,
        data: {
          result,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error in GetResultController ${error.meaasge}`,
      success: false,
      error,
    });
  }
};

module.exports = {
  AddResultController,
  GetResultController,
};
