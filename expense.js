//get transaction from local storage
// const localStorageTransaction = JSON.parse(
//   localStorage.getItem("transactions")
// );
// let transactions =
//   localStorage.getItem("transactions") !== null ? localStorageTransactions : [];
// let transactionArray = [];
// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

const input = document.getElementById("input");
const tableTransaction = document.getElementById("transaction-table");

const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", addTransaction);

function addTransaction(event) {
  event.preventDefault();
  //console.log("clicked");

  const type = document.getElementById("type");
  console.log(type.value);
  const name = document.getElementById("name");
  console.log(name.value);
  const date = document.getElementById("date");
  console.log(date.value);
  const amount = document.getElementById("amount");
  console.log(amount.value);

  // console.log(tableTransaction);

  addRow(type.value, name.value, date.value, amount.value);
}

function addRow(type, category, date, amount) {
  let row = tableTransaction.insertRow(0);
  // tableTransaction.addRow;
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  // console.log("Hello Grace " + type);

  if (category == "" || type == "" || date == "" || amount == "") {
    alert("Please fill out all fields");
  } else {
    cell2.innerHTML = category;
    cell1.innerHTML = type;
    cell3.innerHTML = date;
    cell4.innerHTML = amount;
  }
}

//car("2010", "Toyota", "1000", "Hello Grace");

//defining, declaring, inventing, creating
//function car(year, make, mileage, hello_grace) {
//   console.log(year);
//   console.log(make);
//   console.log(mileage);
//   console.log(hello_grace);

//   console.log("fakdjsf;");
// }

//Logic -Conditional
//If statements

//press a button
//something to popout
//I want to text to appear on the screen

//Googling how to add a row in my expense tracker app (not gonna work)

//how make text appear when I click a button (good)
//how to add a row in a table (good)
