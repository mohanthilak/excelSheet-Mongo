const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicantDetailSchema = new Schema({
  nameOfCandidate: String,
  email: { type: String, unique: true },
  mobileNumber: String,
  dob: String,
  workExperience: String,
  resumeTitle: String,
  currentLocation: String,
  postalAddress: String,
  currentEmployer: String,
  currentDesignation: String,
});

module.exports = mongoose.model("ApplicantDetails", applicantDetailSchema);
