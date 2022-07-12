const { ApplicantModel } = require("../models");

class ApplicantRepository {
  async CreateApplicant({
    nameOfCandidate,
    email,
    mobileNumber,
    dob,
    workExperience,
    resumeTitle,
    currentLocation,
    postalAddress,
    currentEmployer,
    currentDesignation,
  }) {
    try {
      console.log("#!!###!#!@!@#@!#@!#!@#!#!");
      const applicant = new ApplicantModel({
        nameOfCandidate,
        email,
        mobileNumber,
        dob,
        workExperience,
        resumeTitle,
        currentLocation,
        postalAddress,
        currentEmployer,
        currentDesignation,
      });
      const applicantResult = await applicant.save();
      return applicantResult;
    } catch (e) {
      console.log("Applicant creation error", e);
      return e;
    }
  }

  async FindApplicant({ email }) {
    try {
      const applicant = await ApplicantModel.find({ email });
      return applicant;
    } catch (e) {
      console.log("Finding Applicant error", e);
    }
  }

  async DeleteApplicants() {
    try {
      await ApplicantModel.deleteMany({});
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ApplicantRepository;
