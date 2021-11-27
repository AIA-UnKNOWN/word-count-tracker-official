import { useState, useEffect } from 'react';

import WeekTracker from './weekly-tracker/Week';


const WeeklyTracker = ({ date }) => {
  const [weeks, setWeeks] = useState({
    firstWeek: [],
    secondWeek: [],
    thirdWeek: [],
    fourthWeek: [],
    fifthWeek: []
  });
  
  useEffect(() => {
    const lastMonthDays = getPreviousMonthDays();
    const currentMonthDays = getCurrentMonthDays();
    const nextMonthDays = getNextMonthDays();

    const calendarDays = [...lastMonthDays, ...currentMonthDays, ...nextMonthDays];

    runWeeklyTracker(calendarDays);
  }, [date]);

  const getPreviousMonthDays = () => {
    const lastDayOfLastMonth = date.getLastDayOfLastMonth();
    const firstDayOfTheMonthIndex = date.getFirstDayIndex();
    const remainingDaysForFirstWeek = 7 - (firstDayOfTheMonthIndex + 1);
    const lastDaysOfLastMonth = 7 - (remainingDaysForFirstWeek + 1);
    const startingCalendarDay = (lastDayOfLastMonth - lastDaysOfLastMonth) + 1;
    const days = [];

    for (let day = startingCalendarDay; day <= lastDayOfLastMonth; day++) {
      days.push(day);
    }

    return days;
  }

  const getCurrentMonthDays = () => {
    const days = [];

    for (let day = 1; day <= date.getLastDayOfCurrentMonth(); day++) {
      days.push(day);
    }

    return days;
  }

  const getNextMonthDays = () => {
    const lastDayOfTheMonthIndex = date.getLastDayOfCurrentMonthIndex();
    const remainingDaysForFinalWeek = 7 - (lastDayOfTheMonthIndex + 1);
    const days = [];

    for (let day = 1; day <= remainingDaysForFinalWeek; day++) {
      days.push(day);
    }

    return days;
  }

  const runWeeklyTracker = calendarDays => {
    const days = [...calendarDays];
    const calendarWeeks = {...weeks};
    const calendarWeeksList = Object.keys(calendarWeeks); // Returns an array of {Object} keys
    const calendarWeeksPerMonth = calendarWeeksList.length;

    for (let i = 0; i < calendarWeeksPerMonth; i++) {
      const week = calendarWeeksList[i];

      for (let i = 0; i < 7; i++) {
        const day = days.shift();
        calendarWeeks[week].push(day);
      }
    }

    setWeeks(calendarWeeks);
  }

  return (
    <div className="weekly-tracker-container">
                
      <div className="navbar">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="weekly-tracker">

        <WeekTracker id="week-1" />
        <WeekTracker id="week-2" />
        <WeekTracker id="week-3" />
        <WeekTracker id="week-4" />
        <WeekTracker id="week-5" />

      </div>
    </div>
  );
}

export default WeeklyTracker;