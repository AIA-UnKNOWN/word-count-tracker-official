import { useState } from 'react';

import { fetchWordCount, saveWordCount } from './server-requests';

const PreviousMonthDay = ({ date, day }) => {
  const lastMonth = date.getLastDayOfLastMonthDate().getMonth();
  const id = `${lastMonth}${day}${date.getFullYear()}`;

  const [value, setValue] = useState(0);

  const getWordCount = id => {
    new Promise((resolve, reject) => {
      if (!fetchWordCount(id)) return reject();
      resolve(fetchWordCount(id));
    })
      .then(data => data.chapter)
      .then(chapter => setValue(chapter.word_count))
      .catch(error => console.log(`No word count for ${id}`));
  }

  return (
    <div className={value !== 0 ? "day prev-month-day has-word-count" : "day prev-month-day"}>
      {day}
      <div className="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          className="word-count-input"
          onFocus={() => getWordCount(id)}
          onChange={e => setValue(e.target.value)}
          id={id}
          value={value}
        />
        <button
          onClick={() => saveWordCount(id, value)}
          className="save-word-count-button"
        >Save</button>
      </div>
    </div>
  );
}

const CurrentMonthDay = ({ date, day }) => {
  const id = `${date.getMonth()}${day}${date.getFullYear()}`;

  const [value, setValue] = useState(0);

  const getWordCount = id => {
    new Promise((resolve, reject) => {
      if (!fetchWordCount(id)) return reject();
      resolve(fetchWordCount(id));
    })
      .then(data => data.chapter)
      .then(chapter => setValue(chapter.word_count))
      .catch(error => console.log(`No word count for ${id}`));
  }

  const isDateExactlyToday = day => {
    return date.getMonth() === new Date().getMonth() && day === date.getDate();
  }

  const setClassName = () => {
    if (isDateExactlyToday(day)) return "day today";
    if (!isDateExactlyToday(day) && value !== 0) return "day has-word-count";

    return "day";
  }

  return (
    <div className={setClassName()}>
      {day}
      <div className="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          className="word-count-input"
          onFocus={() => getWordCount(id)}
          onChange={e => setValue(e.target.value)}
          id={id}
          value={value}
        />
        <button
          onClick={() => saveWordCount(id, value)}
          className="save-word-count-button"
        >Save</button>
      </div>
    </div>
  );
}

const NextMonthDay = ({ date, day }) => {
  const nextMonth = date.getFirstDayOfNextMonthDate().getMonth();
  const id = `${nextMonth}${day}${date.getFullYear()}`;

  const [value, setValue] = useState(0);

  const getWordCount = id => {
    const response = new Promise((resolve, reject) => {
      if (!fetchWordCount(id)) {
        reject();
        return;
      }

      resolve(fetchWordCount(id));
    });

    response
      .then(data => data.chapter)
      .then(chapter => setValue(chapter.word_count))
      .catch(error => console.log(`No word count for ${id}`));
  }

  return (
    <div className={value !== 0 ? "day next-month-day has-word-count" : "day next-month-day"}>
      {day}
      <div className="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          className="word-count-input"
          onFocus={() => getWordCount(id)}
          onChange={e => setValue(e.target.value)}
          id={id}
          value={value}
        />
        <button
          onClick={() => saveWordCount(id, value)}
          className="save-word-count-button"
        >Save</button>
      </div>
    </div>
  );
}

export { PreviousMonthDay, CurrentMonthDay, NextMonthDay };