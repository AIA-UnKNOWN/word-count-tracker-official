import { useState, useEffect } from 'react';

import WeekTracker from './Week';


const WeekTrackers = ({ ids }) => {
  const weeksCount = (ids.length / 7);
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const daysIds = [...ids];
    const weeksCopy = [];
    let weekDays = [];
    for (let count = 0; count < weeksCount; count++) {
      for (let i = 0; i < 7; i++) {
        const day = daysIds.shift();
        weekDays.push(day);
      }
      weeksCopy.push(weekDays);
      weekDays = [];
    }
    setWeeks(weeksCopy);
  }, [ids]);

  return (
    <>
      {weeks.map((week, i) => (
        <WeekTracker
          key={i}
          id={`week-${i +1 }`}
          days={week}
        />
      ))}
    </>
  );
}

export default WeekTrackers;