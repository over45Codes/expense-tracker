const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", createExpense);

function createExpense(event) {
  event.preventDefault();

  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;

  if (type === "" && (name === "") & (date === "") && amount === "") {
    alert("Please fillout all fields");
  } else {
    const expense = { type, name, date, amount };
    renderExpense(expense);
  }
  clearExpense();
}

function renderExpense(expense) {
  const table = document.getElementById("transaction-table");

  expense.date = new Intl.DateTimeFormat("en-US").format(
    new Date(expense.date.replace(/-/g, "/"))
  );
  expense.amount = parseFloat(expense.amount).toFixed(2);

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
  table.addEventListener("click", deleteExpense);
}

function deleteExpense(e) {
  if (e.target.id === "btn") {
    e.target.parentElement.parentElement.remove();
  }
}

function clearExpense() {
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => (input.value = " "));
}
