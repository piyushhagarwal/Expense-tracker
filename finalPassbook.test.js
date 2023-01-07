const Passbook = require("./finalPassbook");

// test("check if the expense is added properly", () => {
//   let esha = new Passbook();
//   esha.entries = [];
//   esha.addMoney("esha", 1000);
//   esha.addExpense("drinks", 100);
//   esha.addExpense("shopping", 400);
//   esha.addExpense("pepsi", 100);
//   esha.addMoney("dad", 1000);

//   expect(esha.checkEntry()).toStrictEqual({
//     name: "dad",
//     AddedMoney: 1000,
//     SpentMoney: 0,
//     previousMoney: 400,
//     moneyInAccount: 1400,
//     date: "6-1-2023",
//   });
// });

// test("check if the expense is deleted properly", () => {
//   let esha = new Passbook();
//   esha.entries = [];
//   esha.addMoney("esha", 1000);
//   esha.addExpense("drinks", 100);
//   esha.addExpense("shopping", 400);
//   esha.addExpense("pepsi", 100);
//   esha.addMoney("dad", 1000);
//   esha.deleteExpense("shopping", 400);

//   expect(esha.checkEntry()).toStrictEqual({
//     name: "dad",
//     AddedMoney: 1000,
//     SpentMoney: 0,
//     previousMoney: 800,
//     moneyInAccount: 1800,
//     date: "6-1-2023",
//   });
// });

// test("add a parameter date which will manually take the date", () => {
//   let test = new Passbook();
//   test.addMoney("client", 2000, "07-01-2023");
//   // test.addExpense("product", 1000, "08-01-2023");

//   expect(test.checkEntry()).toStrictEqual({
//     id: 1,
//     name: "client",
//     AddedMoney: 2000,
//     SpentMoney: 0,
//     previousMoney: 0,
//     moneyInAccount: 2000,
//     date: "07-01-2023",
//   });
// });

// test("check if the expense is deleted properly by its id", () => {
//   let esha = new Passbook("eshanew.txt");
//   esha.addMoney("esha", 1000, "08-01-2023");
//   esha.addExpense("drinks", 100, "09-01-2023");
//   esha.addExpense("shopping", 400, "10-01-2023");
//   esha.addExpense("pepsi", 100, "11-01-2023");
//   esha.addMoney("dad", 1000, "12-01-2023");
//   esha.deleteExpense(3);

//   expect(esha.checkEntry()).toStrictEqual({
//     id: 4,
//     name: "dad",
//     AddedMoney: 1000,
//     SpentMoney: 0,
//     previousMoney: 800,
//     moneyInAccount: 1800,
//     date: "12-01-2023",
//   });
// });
