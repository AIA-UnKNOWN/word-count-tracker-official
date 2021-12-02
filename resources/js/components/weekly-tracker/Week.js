import { useState, useEffect } from 'react';


const WeekTracker = ({ id, days }) => {
  const [totalWordCountForTheWeek, setTotalWordCountForTheWeek] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      const values = days.map(day => {
        const value = parseInt(document.getElementById(`day-${day}`).value);
        return value;
      });
      let total = values.reduce((n1, n2) => n1 + n2);
      setTotalWordCountForTheWeek(total);
    }, 3000);

  }, [days]);

  return (
    <div id={id} className="week-tracker">
      <div className="labels">
        <label>Nov 1 - Nov 7</label>
        <label>Total Word Count</label>
      </div>
      <div className="counts">
        <div className="current-count">{totalWordCountForTheWeek}</div>
        <div className="slash">/</div>
        <div className="total-count">12000</div>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default WeekTracker;