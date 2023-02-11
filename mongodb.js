const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/passbook", {
  useNewUrlParser: true,
});

const entrySchema = new mongoose.Schema({
  name: String,
  AddedMoney: Number,
  SpentMoney: Number,
  previousMoney: Number,
  moneyInAccount: Number,
  date: String,
});

const Entry = mongoose.model("Entry", entrySchema);

const entry = new Entry({
  name: "dad",
  AddedMoney: 1000,
  SpentMoney: 0,
  previousMoney: 800,
  moneyInAccount: 1800,
  date: "12-01-2023",
});

Entry.deleteMany({ name: " Piyush" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("deleted successfully");
  }
});

// Entry.find((err, entries) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(entries);
//   }
//   mongoose.connection.close();
// });

// entry.save();
