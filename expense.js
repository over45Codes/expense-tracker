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
  let cell5 = row.insertCell(4);

  let deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn";
  deleteBtn.innerHTML = "Clear Transaction";
  cell5.appendChild(deleteBtn);

  if (category == "" || type == "" || date == "" || amount == "") {
    alert("Please fill out all fields");
  } else {
    cell2.innerHTML = category;
    cell1.innerHTML = type;
    cell3.innerHTML = formattedDate;
    cell4.innerHTML = `$ ${amount}`;

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      row.remove();
    });
  }

  const categoryInput = document.getElementById("name");
  categoryInput.value = "";

  const typeInput = document.getElementById("type");
  typeInput.value = "";

  const amountInput = document.getElementById("amount");
  amountInput.value = "";

  const dateInput = document.getElementById("date");
  dateInput.value = "";
}

function myDeleteFunction() {
  document.getElementById("transaction-table").deleteRow(0);
}
