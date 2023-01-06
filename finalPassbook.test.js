const Passbook = require("./finalPassbook");

test("check if the expense is added properly", () => {
  let esha = new Passbook();
  esha.entries = [];
  esha.addMoney("esha", 1000);
  esha.addExpense("drinks", 100);
  esha.addExpense("shopping", 400);
  esha.addExpense("pepsi", 100);
  esha.addMoney("dad", 1000);

  expect(esha.checkEntry()).toStrictEqual({
    name: "dad",
    AddedMoney: 1000,
    SpentMoney: 0,
    previousMoney: 400,
    moneyInAccount: 1400,
    date: "6-1-2023",
  });
});

test("check if the expense is deleted properly", () => {
  let esha = new Passbook();
  esha.entries = [];
  esha.addMoney("esha", 1000);
  esha.addExpense("drinks", 100);
  esha.addExpense("shopping", 400);
  esha.addExpense("pepsi", 100);
  esha.addMoney("dad", 1000);
  esha.deleteExpense("shopping", 400);

  expect(esha.checkEntry()).toStrictEqual({
    name: "dad",
    AddedMoney: 1000,
    SpentMoney: 0,
    previousMoney: 800,
    moneyInAccount: 1800,
    date: "6-1-2023",
  });
});
