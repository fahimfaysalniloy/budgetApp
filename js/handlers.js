import { domSelectors } from './selectors.js';
import { Income, Expense, data, netExpPercent } from './data.js';
import {
  incListCreator,
  expListCreator,
  updateIncome,
  updateExpense,
  updateBudget,
} from './ui.js';
var incCount = 0;
var expCount = 0;

function handleSubmit(e) {
  /*************  fetching data from inputs     ************/

  var type, description, value, id, item;
  type = domSelectors.type.value; //'inc' or 'exp'
  description = domSelectors.description.value;
  value = Number(domSelectors.value.value);

  if (!value) {
    return; //no value=>return
  }

  /***************  clear inputs on submit ************/
  domSelectors.type.value = 'inc';
  domSelectors.description.value = '';
  domSelectors.value.value = '';

  /****************** add total and count percentage    **********/
  data.total[type] += value;
  netExpPercent();

  /**********create class,update data,update ui***********/
  if (type == 'inc') {
    id = `income-${incCount}`;
    incCount++;
    item = new Income(id, description, value);
    incListCreator(item);
    updateIncome(data.total.inc);
  } else {
    id = `expense-${expCount}`;
    expCount++;
    item = new Expense(id, description, value);
    expListCreator(item);
  }
  data.itemData[type].push(item);
  data.netTotal = data.total.inc - data.total.exp;
  updateExpense(data.total.exp, data.netPercent);
  updateBudget(data.netTotal);

  console.log(data);
}
export { handleSubmit };
