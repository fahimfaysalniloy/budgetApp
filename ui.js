import { domSelectors } from './selectors.js';

function incListCreator(obj) {
  const li = `<div class="item clearfix" id=${obj.id}>
    <div class="item__description">${obj.description}</div>
    <div class="right clearfix">
        <div class="item__value">+${obj.value}</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
   </div>`;
  domSelectors.incomeList.insertAdjacentHTML('beforeend', li);
}
function updateIncome(number) {
  domSelectors.netIncome.textContent = `+ ${number}`;
}
function expListCreator(obj) {
  const li = ` <div class="item clearfix" id="${obj.id}">
  <div class="item__description">${obj.description}</div>
  <div class="right clearfix">
      <div class="item__value">- ${obj.value}</div>
      <div class="item__percentage">${obj.percentage}%</div>
      <div class="item__delete">
          <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
      </div>
  </div>
</div>`;
  domSelectors.expenseList.insertAdjacentHTML('beforeend', li);
}
function updateExpense(number, percentage) {
  domSelectors.netExpense.textContent = `- ${number}`;
  domSelectors.netExpPercentage.textContent = `${percentage}%`;
}
function updateBudget(number) {
  domSelectors.budget.textContent = `${number > 0 ? `+` : ``} ${number}`;
}
export {
  incListCreator,
  expListCreator,
  updateIncome,
  updateExpense,
  updateBudget,
};
