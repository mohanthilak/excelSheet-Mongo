const { ApplicantService } = require("../../services");

module.exports = async (req, res) => {
  const service = new ApplicantService();
  const { path } = req.file;
  const result = await service.ExcelToMongo({ path });
  console.log("result at applicant controller", result);
  res.json(result);
};
