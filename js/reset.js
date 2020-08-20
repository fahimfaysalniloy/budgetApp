import { domSelectors } from './selectors.js';
export function clearFields() {
  domSelectors.netIncome.textContent = '+0';
  domSelectors.netExpense.textContent = '-0';
  domSelectors.netExpPercentage.textContent = '0%';
  domSelectors.budget.textContent = '0';
}
