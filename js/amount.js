import { expenseList } from "./script.js";

const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');

export function updateBalance() {
  let incomeAmount = 0;
  let expenseAmount = 0;
  expenseList.forEach((list) => {

    if (list.amount >= 0) {
      incomeAmount += list.amount;
    } else {
      expenseAmount += list.amount;
    }
  });

  income.textContent = `$${incomeAmount.toFixed(2)}`;
  expense.textContent = `-$${-expenseAmount.toFixed(2)}`;
  balance.textContent = `$${(incomeAmount + expenseAmount).toFixed(2)}`;

}

