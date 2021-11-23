import { useState, useEffect } from 'react';

import MONTHS from '../utils/months';

import { PreviousMonthDay, CurrentMonthDay, NextMonthDay } from './calendar/days';

const Calendar = ({ date, goToPreviousMonth, goToNextMonth }) => {
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
  }, [date]);

  const getPreviousMonthDays = date => {
    const lastDayOfLastMonth = date.getLastDayOfLastMonth();
    const firstDayOfTheMonthIndex = date.getFirstDayIndex();
    const remainingDaysForFirstWeek = 7 - (firstDayOfTheMonthIndex + 1);
    const lastDaysOfLastMonth = 7 - (remainingDaysForFirstWeek + 1);
    const startingCalendarDay = (lastDayOfLastMonth - lastDaysOfLastMonth) + 1;
    
    const lastDays = [];
    for (let day = startingCalendarDay; day <= lastDayOfLastMonth; day++) {
      lastDays.push(day);
    }

    return lastDays;
  }

  const getCurrentMonthDays = date => {
    const lastDayOfTheMonth = date.getLastDayOfCurrentMonth();

    const currentDays = [];
    for (let day = 1; day <= lastDayOfTheMonth; day++) {
      currentDays.push(day);
    }

    return currentDays;
  }

  const getNextMonthDays = date => {
    const lastDayOfTheMonthIndex = date.getLastDayOfCurrentMonthIndex();
    const remainingDaysForFinalWeek = 7 - (lastDayOfTheMonthIndex + 1);

    const nextDays = [];
    for (let day = 1; day <= remainingDaysForFinalWeek; day++) {
      nextDays.push(day);
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

      {lastDaysOfPreviousMonth.map(day => (
        <PreviousMonthDay
          key={`${date.getMonth()}${day}${date.getFullYear()}`}
          date={date}
          day={day}
        />
      ))}

      {currentDaysOfTheMonth.map(day => (
        <CurrentMonthDay
          key={`${date.getMonth()}${day}${date.getFullYear()}`}
          date={date}
          day={day}
        />
      ))}

      {nextDaysOfNextMonth.map(day => (
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