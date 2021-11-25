import { useEffect } from 'react';

import WeekTracker from './weekly-tracker/Week';


const WeeklyTracker = ({ date }) => {
  
  useEffect(() => {
    
  }, [date]);

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