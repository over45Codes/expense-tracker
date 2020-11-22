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

const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", addTransaction);

function addTransaction(event) {
  event.preventDefault();
  console.log("clicked");

  const type = document.getElementById("type");
  console.log(type);
  const name = document.getElementById("name");
  console.log(name);
  const date = document.getElementById("date");
  console.log(date);
  const amount = document.getElementById("amount");
  console.log(amount);
  const tableTransaction = document.getElementById("transaction-table");
  console.log(tableTransaction);
}
