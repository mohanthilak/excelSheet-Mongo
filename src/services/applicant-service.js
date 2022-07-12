const { ApplicantRepository } = require("../database");
const { ExcelToJSON } = require("../config");
const async = require("async");

class ApplicantService {
  constructor() {
    this.repository = new ApplicantRepository();
  }
  async ExcelToMongo(inputs) {
    // await this.repository.DeleteApplicants();
    const { path } = inputs;
    let totalCount = 0,
      uploadedCount = 0,
      duplicateCount = 0;
    const xlData = await ExcelToJSON(path);
    totalCount = xlData.length;
    const that = this;
    await async.eachSeries(xlData, async function (e) {
      let obj = {
        nameOfCadidate: e["Name of the Candidate"],
        email: e["Email"],
        mobileNumber: e["Mobile No."],
        dob: e["Date of Birth"],
        workExperience: e["Work Experience"],
        resumeTitle: e["Resume Title"],
        currentLocation: e["Current Location"],
        postalAddress: e["Postal Address"],
        currentEmployer: e["Current Employer"],
        currentDesignation: e["Current Designation"],
      };
      console.log(that.repository);
      try {
        let saved = await that.repository.CreateApplicant(obj);
        if (saved.email) uploadedCount++;
        else duplicateCount++;
        console.log("output from repository", saved);
      } catch (e) {
        console.log("Error at applicant-service", e);
      }
    });
    console.log("stats at service", totalCount, uploadedCount, duplicateCount);
    return { totalCount, uploadedCount, duplicateCount };
  }
}

module.exports = ApplicantService;
