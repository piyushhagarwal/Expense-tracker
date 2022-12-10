class Passbook{
    totalMoney = 0;
    spent = 0;
    entries = [];

    constructor(money){
        this.money = money;
    }

    addMoney(walletMoney){
        this.totalMoney += this.walletMoney;
      }

    addExpense(expenseName,expenseMoney){
        const date = new Date();
        if(expenseMoney > 0){
            let expense = {name:expenseName,money:expenseMoney,date:date}
            this.entries.push(expense)
            this.spent += expenseMoney
            return true;
        }
        else{
            //invalid input
            return false;
        }
      }

      deleteExpense(expenseName,expenseMoney){
        for (let i = 0;i < this.entries.length ; i++){
          if (this.entries[i].name === expenseName && this.entries[i].money === expenseMoney){
            this.spent -= this.entries[i].money
            this.entries.splice(i,1)
            return true;
          }
        }
        //Invalid input
        return false;
      }
}

let piyush = new Passbook(1000);
piyush.addExpense("movie",200);
piyush.addExpense("food",400);
// piyush.deleteExpense("movie",200)
console.log(piyush.spent)
console.log(piyush.entries)

let esha = new Passbook(1000);
esha.addExpense("shopping",400);
esha.addExpense("drinks",100);
// esha.deleteExpense("drinks",100)
console.log(esha.spent)
console.log(esha.entries)

