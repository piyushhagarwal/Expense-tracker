const File = require("./filehandling");

class Passbook {
  previousMoney = 0;
  moneyInAccount = 0;
  spent = 0;
  entries = [];

  constructor(fileName) {
    this.f = new File(fileName);
    this.f.openFile();
  }

  addMoney(addedName, addedMoney, addedDate) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    if (addedMoney > 0) {
      this.previousMoney = this.moneyInAccount;
      this.moneyInAccount += addedMoney;
      let entry = {
        id: this.entries.length + 1,
        name: addedName,
        AddedMoney: addedMoney,
        SpentMoney: 0,
        date: addedDate,
        previousMoney: this.previousMoney,
        moneyInAccount: this.moneyInAccount,
      };
      this.entries.push(entry);

      this.f.openFile();
      let jsonEntries = JSON.stringify(this.entries, null, 2);
      this.f.writeInFile(jsonEntries);
      // this.f.appendInFile(`${JSON.stringify(entry)} \n`);
    }
  }

  addExpense(expenseName, expenseMoney, expenseDate) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    if (expenseMoney > 0) {
      this.previousMoney = this.moneyInAccount;
      this.moneyInAccount -= expenseMoney;
      this.spent += expenseMoney;
      let expense = {
        id: this.entries.length + 1,
        name: expenseName,
        AddedMoney: 0,
        SpentMoney: expenseMoney,
        date: expenseDate,
        previousMoney: this.previousMoney,
        moneyInAccount: this.moneyInAccount,
      };
      this.entries.push(expense);

      this.f.openFile();
      let jsonEntries = JSON.stringify(this.entries);
      this.f.writeInFile(jsonEntries);
      // this.f.appendInFile(`${JSON.stringify(entry)} \n`);
    }
  }

  deleteExpense(deleteId) {
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].id === deleteId) {
        this.entries.splice(i, 1);
      }
    }
    let newEntries = this.entries;

    this.previousMoney = 0;
    this.moneyInAccount = 0;
    this.spent = 0;
    this.entries = [];
    this.f.deleteFile();
    this.f.openFile();

    newEntries.forEach((entry) => {
      if (entry.SpentMoney === 0) {
        this.addMoney(entry.name, entry.AddedMoney, entry.date);
      } else if (entry.AddedMoney === 0) {
        this.addExpense(entry.name, entry.SpentMoney, entry.date);
      }
    });
  }

  checkEntry() {
    let [recentExpense] = this.entries.slice(-1);
    return recentExpense;
  }

  allEntries() {
    return this.entries;
  }

  // destructor() {
  //   fs.close(this.fileName, (err) => {
  //     if (err) throw err;
  //     console.log("File closed");
  //   });
  // }
}

module.exports = Passbook;
