const multer = require("multer");
const { __basedir } = require("path");
console.log(__basedir);

const excelFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml")
  ) {
    cb(null, true);
  } else {
    cb("Please upload only Excel files", false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `resources`);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: excelFilter });

module.exports = uploadFile;
