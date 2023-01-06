class Passbook {
  previousMoney = 0;
  moneyInAccount = 0;
  spent = 0;
  entries = [];

  addMoney(addedName, addedMoney) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    if (addedMoney > 0) {
      this.previousMoney = this.moneyInAccount;
      this.moneyInAccount += addedMoney;
      let entry = {
        name: addedName,
        AddedMoney: addedMoney,
        SpentMoney: 0,
        date: currentDate,
        previousMoney: this.previousMoney,
        moneyInAccount: this.moneyInAccount,
      };
      this.entries.push(entry);
    }
  }

  addExpense(expenseName, expenseMoney) {
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
        name: expenseName,
        AddedMoney: 0,
        SpentMoney: expenseMoney,
        date: currentDate,
        previousMoney: this.previousMoney,
        moneyInAccount: this.moneyInAccount,
      };
      this.entries.push(expense);
    }
  }

  deleteExpense(expenseName, expenseMoney) {
    for (let i = 0; i < this.entries.length; i++) {
      if (
        this.entries[i].name === expenseName &&
        (this.entries[i].SpentMoney === expenseMoney ||
          this.entries[i].AddedMoney === expenseMoney)
      ) {
        if (this.entries[i].SpentMoney != 0) {
          this.entries.splice(i, 1);
        } else if (this.entries[i].AddedMoney != 0) {
          this.entries.splice(i, 1);
        }
      }
    }
    let newEntries = this.entries;

    this.previousMoney = 0;
    this.moneyInAccount = 0;
    this.spent = 0;
    this.entries = [];

    newEntries.forEach((entry) => {
      if (entry.SpentMoney === 0) {
        this.addMoney(entry.name, entry.AddedMoney);
      } else if (entry.AddedMoney === 0) {
        this.addExpense(entry.name, entry.SpentMoney);
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
}

module.exports = Passbook;
