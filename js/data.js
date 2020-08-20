const data = {
  itemData: {
    inc: [],
    exp: [],
  },
  total: {
    inc: 0,
    exp: 0,
  },
  netTotal: 0,
};
class Income {
  constructor(id, desc, value) {
    this.id = id;
    this.description = desc;
    this.value = value;
  }
}
class Expense {
  constructor(id, desc, value) {
    this.id = id;
    this.description = desc;
    this.value = value;
    this.percentage = percentage(data.total.inc, value);
  }
}
function percentage(total, fraction) {
  if (total == 0) {
    return 0;
  }
  const p = (fraction / total) * 100;
  return Math.floor(p);
}
function netExpPercent() {
  data.netPercent = percentage(data.total.inc, data.total.exp);
}
export { Income, Expense, data, netExpPercent };
