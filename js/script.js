import { updateBalance } from "./amount.js";


const description = document.getElementById('description');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('list');
const amount = document.getElementById('amount');


export let expenseList = [
  { text: 'Monthly Salary', amount: 3500.00 },
  { text: 'Apartment Rent', amount: -1200.00 },
  { text: 'Grocery Store Run', amount: -184.50 },
  { text: 'Freelance Design Gig', amount: 450.00 },
  { text: 'Electric & Gas Bill', amount: -95.20 },
  { text: 'Streaming Subscriptions', amount: -29.99 },
  { text: 'Sold Old Bicycle', amount: 120.00 },
  { text: 'Coffee Shop Pastries', amount: -14.75 },
  { text: 'Gym Membership Fee', amount: -60.00 },
  { text: 'Stock Dividend Payout', amount: 45.15 },
  { text: 'Car Insurance Premium', amount: -125.00 },
  { text: 'Weekend Dinner Out', amount: -88.40 }
];
generateList();

addBtn.addEventListener('click', () => {
  const textValue = description.value;
  const numberValue = amount.valueAsNumber;

  description.value = '';
  amount.value = '';

  if (textValue && numberValue) {
    expenseList.push( {text: textValue, amount: numberValue * 100 });
  }
  generateList();
});

list.addEventListener('click', (e) => {
  if(e.target.classList.contains('del-btn')){
  const indexToRemove = Number(e.target.dataset.index);
    expenseList.splice(indexToRemove, 1)
    generateList()
  }
})


function generateList() {
  let html = '';
  let listHTML = '';
  expenseList.forEach((list, index) => {
    html = `
    <li class="transactions-list">
      <span>${list.text}</span>
      ${negativeOrPositive(list.amount)}<span class="del-btn" data-index="${index}">X</span></span>
    </li>
  `
    listHTML += html
  })

  list.innerHTML = listHTML;
  updateBalance();
}

function negativeOrPositive(num) {
  if (num >= 0) {
    return `<span class="positive">$${num.toFixed(2)}`;
  } else {
    return `<span class="negative">-$${Math.abs(num).toFixed(2)}`;
  }
}
