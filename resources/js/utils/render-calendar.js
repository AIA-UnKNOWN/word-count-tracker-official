import MONTHS from './months.js';
import { querySelector, querySelectorAll } from './reusables';

const currentMonth = querySelector('.current-month');
const dateToday = querySelector('.date-today');
const daysContainer = querySelector('.current-month-days');

const renderCalendar = date => {
  currentMonth.innerText = MONTHS[date.getMonth()];
  dateToday.innerText = date.today();

  let days = '';

  const lastDayOfLastMonth = date.getLastDayOfLastMonth();
  const firstDayOfTheMonthIndex = date.getFirstDayIndex();
  const remainingDaysForFirstWeek = 7 - (firstDayOfTheMonthIndex + 1);
  const lastDaysOfLastMonth = 7 - (remainingDaysForFirstWeek + 1);
  const startingCalendarDay = (lastDayOfLastMonth - lastDaysOfLastMonth) + 1;

  for (let day = startingCalendarDay; day <= lastDayOfLastMonth; day++) {
    const lastMonth = date.getLastDayOfLastMonthDate().getMonth();
    const id = `${lastMonth}${day}${date.getFullYear()}`;

    days +=
    `<div class="day prev-month-day">
      ${day}
      <div class="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          class="word-count-input"
          id="${id}"
        >
        <button
          class="save-word-count-button"
        >Save</button>
      </div>
    </div>`;
  }

  const lastDayOfTheMonth = date.getLastDayOfCurrentMonth();
  for (let day = 1; day <= lastDayOfTheMonth; day++) {
    const id = `${date.getMonth()}${day}${date.getFullYear()}`;

    if (date.getMonth() === new Date().getMonth() && day === date.getDate()) {
      days +=
      `<div class="day today">
        ${day}
        <div class="day-word-count">
          <label>Word Count</label>
          <input
            type="number"
            name="word-count"
            class="word-count-input"
            id="${id}"
          >
          <button
            class="save-word-count-button"
          >Save</button>
        </div>
      </div>`;
    } else {
      days +=
      `<div class="day">
        ${day}
        <div class="day-word-count">
          <label>Word Count</label>
          <input
            type="number"
            name="word-count"
            class="word-count-input"
            id="${id}"
          >
          <button
            class="save-word-count-button"
          >Save</button>
        </div>
      </div>`;
    }
  }

  const lastDayOfTheMonthIndex = date.getLastDayOfCurrentMonthIndex();
  const remainingDaysForFinalWeek = 7 - (lastDayOfTheMonthIndex + 1);

  for (let day = 1; day <= remainingDaysForFinalWeek; day++) {
    const nextMonth = date.getFirstDayOfNextMonthDate().getMonth();
    const id = `${nextMonth}${day}${date.getFullYear()}`;

    days +=
    `<div class="day next-month-day">
      ${day}
      <div class="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          class="word-count-input"
          id="${id}"
        >
        <button
          class="save-word-count-button"
        >Save</button>
      </div>
    </div>`;
  }

  daysContainer.innerHTML = days;
}

export { renderCalendar };