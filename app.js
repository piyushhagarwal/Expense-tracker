class Passbook{
    moneyInAccount = 0;
    spent = 0;
    entries = [];

    addMoney(addedName,addedMoney){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;

        if (addedMoney > 0){
            let previousMoney = this.moneyInAccount;
            this.moneyInAccount += addedMoney;
            let entry = {name:addedName,AddedMoney:addedMoney,SpentMoney:0,date:currentDate,previousMoney:previousMoney,moneyInAccount:this.moneyInAccount}
            this.entries.push(entry)
            return true;
        }
        else{
            return false;
        }
        
      }

    addExpense(expenseName,expenseMoney){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        if(expenseMoney > 0){
            let previousMoney = this.moneyInAccount
            this.moneyInAccount -= expenseMoney
            this.spent += expenseMoney
            let expense = {name:expenseName,AddedMoney:0,SpentMoney:expenseMoney,date:currentDate,previousMoney:previousMoney,moneyInAccount:this.moneyInAccount}
            this.entries.push(expense)
            
            return true;
        }
        else{
            //invalid input
            return false;
        }
      }

      deleteExpense(expenseName,expenseMoney){
        for (let i = 0;i < this.entries.length ; i++){
          if (this.entries[i].name === expenseName && (this.entries[i].SpentMoney === expenseMoney || this.entries[i].AddedMoney === expenseMoney)){
            if (this.entries[i].SpentMoney != 0){
                this.spent -= this.entries[i].SpentMoney
                this.moneyInAccount += expenseMoney
                this.entries.splice(i,1)
            }
            else if(this.entries[i].AddedMoney != 0){
                this.moneyInAccount -= expenseMoney
                this.entries.splice(i,1)
            }
            
            return true;
          }
        }
        //Invalid input
        return false;
      }
}

// let piyush = new Passbook();
// piyush.addExpense("movie",200);
// piyush.addExpense("food",400);
// piyush.deleteExpense("movie",200)
// console.log(piyush.spent)
// console.log(piyush.entries)

// let esha = new Passbook();
// esha.addMoney("esha",1000)
// esha.addExpense("shopping",400);
// esha.deleteExpense("shopping",400)
// esha.addExpense("drinks",100);
// esha.addMoney("dad",1000)
// esha.deleteExpense("shopping",400)
// console.log(esha.moneyInAccount)
// console.log(esha.spent)
// console.log(esha.entries)

