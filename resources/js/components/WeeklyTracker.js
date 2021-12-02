import { useState, useEffect } from 'react';

import WeekTrackers from './weekly-tracker/WeeksFragment';


const WeeklyTracker = ({ ids }) => {
  return (
    <div className="weekly-tracker-container">
                
      <div className="navbar">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="weekly-tracker">

        <WeekTrackers
          ids={ids}
        />

      </div>
    </div>
  );
}

export default WeeklyTracker;