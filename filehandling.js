const fs = require("fs");

class Filehandling {
  constructor(fileName) {
    this.fileName = fileName;
  }

  openFile() {
    fs.open(this.fileName, "w", (err) => {
      if (err) throw err;
    });
    return true;
  }

  writeInFile(data) {
    fs.writeFile(this.fileName, data, (err) => {
      if (err) {
        console.error(err);
      }
      return true;
    });
  }

  appendInFile(data) {
    fs.appendFile(this.fileName, data, (err) => {
      if (err) throw err;
    });
    return true;
  }

  deleteFile() {
    fs.unlink(this.fileName, (err) => {
      if (err) throw err;
    });
    return true;
  }

  closeFile() {
    let file_descriptor = fs.openSync(this.fileName);
    fs.close(file_descriptor, (err) => {
      if (err) throw err;
    });
  }
}

module.exports = Filehandling;
