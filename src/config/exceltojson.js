const XLSX = require("xlsx");

module.exports = (path) => {
  try {
    const workbook = XLSX.readFile(path);
    let nameList = workbook.SheetNames;
    let x = 0;
    let xlData;
    nameList.forEach((e) => {
      xlData = XLSX.utils.sheet_to_json(workbook.Sheets[nameList[x]]);
      x++;
    });
    return xlData;
  } catch (e) {
    console.log("Error at XLSX config file", e);
    return e;
  }
};
