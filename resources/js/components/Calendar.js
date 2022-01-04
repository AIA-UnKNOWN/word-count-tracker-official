import { useState, useEffect } from 'react';

import MONTHS from '../utils/months';

import { PreviousMonthDay, CurrentMonthDay, NextMonthDay } from './calendar/days';


Number.prototype.pad = function(size) {
  let numberString = String(this);
  while (numberString.length < (size || 2)) {
    numberString = "0" + numberString;
  }
  return numberString;
}

const Calendar = ({ date, goToPreviousMonth, goToNextMonth, setIDs }) => {
  const [lastDaysOfPreviousMonth, setLastDaysOfPreviousMonth] = useState([]);
  const [currentDaysOfTheMonth, setCurrentDaysOfTheMonth] = useState([]);
  const [nextDaysOfNextMonth, setNextDaysOfNextMonth] = useState([]);

  useEffect(() => {
    const lastDays = getPreviousMonthDays(date);
    const currentDays = getCurrentMonthDays(date);
    const nextDays = getNextMonthDays(date);

    setLastDaysOfPreviousMonth(lastDays);
    setCurrentDaysOfTheMonth(currentDays);
    setNextDaysOfNextMonth(nextDays);

    const dates = [...lastDays, ...currentDays, ...nextDays];
    setIDs(dates.map(date => `${date.month.pad(2)}${date.day.pad(2)}${date.year}`));

    return () => setIDs([]);
  }, [date]);

  const getPreviousMonthDays = date => {
    const lastDayOfLastMonth = date.getLastDayOfLastMonth();
    const firstDayOfTheMonthIndex = date.getFirstDayIndex();
    const remainingDaysForFirstWeek = 7 - (firstDayOfTheMonthIndex + 1);
    const lastDaysOfLastMonth = 7 - (remainingDaysForFirstWeek + 1);
    const startingCalendarDay = (lastDayOfLastMonth - lastDaysOfLastMonth) + 1;
    const lastDays = [];

    for (let day = startingCalendarDay; day <= lastDayOfLastMonth; day++) {
      lastDays.push({
        month: date.getMonth() === 0 ? 11 : date.getMonth() - 1,
        day,
        year: date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear()
      });
    }

    return lastDays;
  }

  const getCurrentMonthDays = date => {
    const lastDayOfTheMonth = date.getLastDayOfCurrentMonth();
    const currentDays = [];

    for (let day = 1; day <= lastDayOfTheMonth; day++) {
      currentDays.push({
        month: date.getMonth(),
        day,
        year: date.getFullYear()
      });
    }
    
    return currentDays;
  }

  const getNextMonthDays = date => {
    const lastDayOfTheMonthIndex = date.getLastDayOfCurrentMonthIndex();
    const remainingDaysForFinalWeek = 7 - (lastDayOfTheMonthIndex + 1);
    const nextDays = [];

    for (let day = 1; day <= remainingDaysForFinalWeek; day++) {
      nextDays.push({
        month: new Date(date.getFullYear(), date.getMonth() + 1,day).getMonth(),
        day,
        year: date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear()
      });
    }
    
    return nextDays;
  }

  return (
    <div className="calendar">

      <div className="header">
        <button
          className="previous-month"
          onClick={goToPreviousMonth}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="info">
          <p className="current-month">{MONTHS[date.getMonth()]}</p>
          <p className="date-today">Sun Nov 7, 2021</p>
        </div>
        <button
          className="next-month"
          onClick={goToNextMonth}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="current-month-days">
        {lastDaysOfPreviousMonth.map(({ day }) => (
          <PreviousMonthDay
            key={`${date.getMonth()}${day}${date.getFullYear()}`}
            date={date}
            day={day}
          />
        ))}
        {currentDaysOfTheMonth.map(({ day }) => (
          <CurrentMonthDay
            key={`${date.getMonth()}${day}${date.getFullYear()}`}
            date={date}
            day={day}
          />
        ))}
        {nextDaysOfNextMonth.map(({ day }) => (
          <NextMonthDay
            key={`${date.getMonth()}${day}${date.getFullYear()}`}
            date={date}
            day={day}
          />
        ))}
      </div>

    </div>
  );
}

export default Calendar;