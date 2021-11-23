import './main.scss';
import MyDate from './libs/my-date';
import { querySelector, querySelectorAll } from './utils/reusables';
import { renderCalendar } from './utils/render-calendar';

const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
let date = new MyDate(year, month, day);

window.onload = function() {
  renderCalendar(date);

  const prevMonthButton = querySelector('button.previous-month');
  const nextMonthButton = querySelector('button.next-month');

  let clicks = 0;

  prevMonthButton.addEventListener('click', function() {
    clicks--;
    date = new MyDate(year, month + clicks, day);
    renderCalendar(date);
  });

  nextMonthButton.addEventListener('click', function() {
    clicks++;
    date = new MyDate(year, month + clicks, day);
    renderCalendar(date);
  });

  // Server Requests
  const saveWordCountButtons = querySelectorAll('.save-word-count-button');
  const buttonsLength = saveWordCountButtons.length;
  for (let i = 0; i < buttonsLength; i++) {
    saveWordCountButtons[i].addEventListener('click', function(e) {
      const wordCountInput = e.target.previousElementSibling;
      const id = wordCountInput.id;
      const wordCount = parseInt(wordCountInput.value);

      // TODO: Save the word count in the database with the Id of the input element id
      
    });
  }
}