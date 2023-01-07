const File = require("./filehandling");

test("to check if the filed is opened successfully", () => {
  let file1 = new File("file1.txt");
  expect(file1.openFile()).toBe(true);
});

test("to check if the filed is opened successfully", () => {
  let file1 = new File("file1.txt");
  file1.openFile();
  expect(file1.appendInFile("hello world")).toBe(true);
});

test("to check if the filed is deleted successfully", () => {
  let file1 = new File("file1.txt");
  expect(file1.deleteFile()).toBe(true);
});
