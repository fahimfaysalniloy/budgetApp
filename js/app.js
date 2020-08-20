import { domSelectors } from './selectors.js';
import { handleSubmit } from './handlers.js';
import { clearFields } from './reset.js';
import { localStorage } from './localstorage.js';

//listeners

domSelectors.submit.addEventListener('click', handleSubmit);
window.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    handleSubmit();
  }
});
//clear all the inputs and data on page load
clearFields();
