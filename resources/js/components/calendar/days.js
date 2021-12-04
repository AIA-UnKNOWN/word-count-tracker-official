import { useState, useEffect } from 'react';

import { fetchWordCount, saveWordCount } from './server-requests';


const PreviousMonthDay = ({ date, day }) => {
  const lastMonth = date.getLastDayOfLastMonthDate().getMonth();
  const year = date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear();
  const id = `${lastMonth.pad(2)}${day.pad(2)}${year}`;

  const [value, setValue] = useState(0);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    loadWordCount();
  }, []);

  const loadWordCount = () => {
    getWordCount(id);
  }

  const getWordCount = id => {
    new Promise((resolve, reject) => {
      if (!fetchWordCount(id)) return reject();
      resolve(fetchWordCount(id));
    })
      .then(data => data.chapter)
      .then(chapter => setValue(chapter.word_count))
      .catch(error => null);
  }

  const onEnter = e => {
    if (e.key === "Enter") {
      const button = e.target.nextElementSibling;
      button.click();
    }
  }

  const typingHandler = e => {
    setValue(e.target.value);
    setIsSaved(false);
  }

  return (
    <div className={value !== 0 ? "day prev-month-day has-word-count" : "day prev-month-day"}>
      <label id={day}>{day}</label>
      <div className="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          className="word-count-input"
          onFocus={() => loadWordCount()}
          onChange={typingHandler}
          onKeyUp={onEnter}
          id={`day-${id}`}
          value={value}
        />
        <button
          onClick={() => {
            setIsSaved(true);
            return saveWordCount(id, value);
          }}
          className="save-word-count-button"
        >
          {isSaved ? "Saved" : "Save"}
          {isSaved ? (<i className="fas fa-check-circle"></i>) : null}
        </button>
      </div>
    </div>
  );
}

const CurrentMonthDay = ({ date, day }) => {
  const id = `${date.getMonth().pad(2)}${day.pad(2)}${date.getFullYear()}`;

  const [value, setValue] = useState(0);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    loadWordCount();
  }, []);

  const loadWordCount = () => {
    getWordCount(id);
  }

  const getWordCount = id => {
    new Promise((resolve, reject) => {
      if (!fetchWordCount(id)) return reject();
      resolve(fetchWordCount(id));
    })
      .then(data => data.chapter)
      .then(chapter => {
        setValue(chapter.word_count);
      })
      .catch(error => null);
  }

  const onEnter = e => {
    if (e.key === "Enter") {
      const button = e.target.nextElementSibling;
      button.click();
    }
  }

  const typingHandler = e => {
    setValue(e.target.value);
    setIsSaved(false);
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
      <label id={day}>{day}</label>
      <div className="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          className="word-count-input"
          onFocus={() => loadWordCount()}
          onChange={typingHandler}
          onKeyUp={onEnter}
          id={`day-${id}`}
          value={value}
        />
        <button
          onClick={() => {
            setIsSaved(true);
            return saveWordCount(id, value);
          }}
          className="save-word-count-button"
        >
          {isSaved ? "Saved" : "Save"}
          {isSaved ? (<i className="fas fa-check-circle"></i>) : null}
        </button>
      </div>
    </div>
  );
}

const NextMonthDay = ({ date, day }) => {
  const nextMonth = date.getFirstDayOfNextMonthDate().getMonth();
  const id = `${nextMonth.pad(2)}${day.pad(2)}${date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear()}`;

  const [value, setValue] = useState(0);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    loadWordCount();
  }, []);

  const loadWordCount = () => {
    getWordCount(id);
  }

  const getWordCount = id => {
    new Promise((resolve, reject) => {
      if (!fetchWordCount(id)) return reject();
      resolve(fetchWordCount(id));
    })
      .then(data => data.chapter)
      .then(chapter => setValue(chapter.word_count))
      .catch(error => null);
  }

  const onEnter = e => {
    if (e.key === "Enter") {
      const button = e.target.nextElementSibling;
      button.click();
    }
  }

  const typingHandler = e => {
    setValue(e.target.value);
    setIsSaved(false);
  }

  return (
    <div className={value !== 0 ? "day next-month-day has-word-count" : "day next-month-day"}>
      <label id={day}>{day}</label>
      <div className="day-word-count">
        <label>Word Count</label>
        <input
          type="number"
          name="word-count"
          className="word-count-input"
          onFocus={() => loadWordCount()}
          onChange={typingHandler}
          onKeyUp={onEnter}
          id={`day-${id}`}
          value={value}
        />
        <button
          onClick={() => {
            setIsSaved(true);
            return saveWordCount(id, value);
          }}
          className="save-word-count-button"
        >
          {isSaved ? "Saved" : "Save"}
          {isSaved ? (<i className="fas fa-check-circle"></i>) : null}
        </button>
      </div>
    </div>
  );
}

export { PreviousMonthDay, CurrentMonthDay, NextMonthDay };