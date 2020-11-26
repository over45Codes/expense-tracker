const input = document.getElementById("input");
const tableTransaction = document.getElementById("transaction-table");

const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", addTransaction);

function addTransaction(event) {
  event.preventDefault();

  const type = document.getElementById("type");

  const name = document.getElementById("name");

  const date = document.getElementById("date");

  const amount = document.getElementById("amount");

  addRow(type.value, name.value, date.value, amount.value);
}

function addRow(type, category, date, amount) {
  const formattedDate = new Intl.DateTimeFormat("en-US").format(
    new Date(date.replace(/-/g, "/"))
  );

  let row = tableTransaction.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  if (category == "" || type == "" || date == "" || amount == "") {
    alert("Please fill out all fields");
  } else {
    cell2.innerHTML = category;
    cell1.innerHTML = type;
    cell3.innerHTML = formattedDate;
    cell4.innerHTML = `$ ${amount}`;
  }
}
