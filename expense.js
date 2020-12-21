const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", createExpense);

function createExpense(event) {
  event.preventDefault();

  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;

  const expense = { type, name, date, amount };

  renderExpense(expense);
}

function renderExpense(expense) {
  const table = document.getElementById("transaction-table");

  expense.date = new Intl.DateTimeFormat("en-US").format(
    new Date(expense.date.replace(/-/g, "/"))
  );

  const expenseRow = `
  <td>${expense.type}</td>
  <td>${expense.name}</td>
  <td>${expense.date}</td>
  <td>${" $ " + expense.amount}</td>
  <td>
  <button id='btn'>Clear Transaction</button>
  </td>
  `;

  table.innerHTML += expenseRow;
}

//   let row = tableTransaction.insertRow(-1);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//   let cell3 = row.insertCell(2);
//   let cell4 = row.insertCell(3);
//   let cell5 = row.insertCell(4);

//   let deleteBtn = document.createElement("button");
//   deleteBtn.type = "button";
//   deleteBtn.className = "btn";
//   deleteBtn.innerHTML = "Clear Transaction";
//   cell5.appendChild(deleteBtn);

//   if (category == "" || type == "" || date == "" || amount == "") {
//     alert("Please fill out all fields");
//   } else {
//     cell2.innerHTML = category;
//     cell1.innerHTML = type;
//     cell3.innerHTML = formattedDate;
//     cell4.innerHTML = `$ ${amount}`;

//     deleteBtn.addEventListener("click", (e) => {
//       e.preventDefault();

//       row.remove();
//     });
//   }

//   const categoryInput = document.getElementById("name");
//   categoryInput.value = "";

//   const typeInput = document.getElementById("type");
//   typeInput.value = "";

//   const amountInput = document.getElementById("amount");
//   amountInput.value = "";

//   const dateInput = document.getElementById("date");
//   dateInput.value = "";
// }
