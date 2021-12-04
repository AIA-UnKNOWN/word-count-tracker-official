import { useState, useEffect } from 'react';


const WeekTracker = ({ id, days }) => {
  const [totalWordCountForTheWeek, setTotalWordCountForTheWeek] = useState(0);

  useEffect(() => {

    setInterval(() => {
      const values = days.map(day => {
        let value = parseInt(document.getElementById(`day-${day}`).value);
        if (isNaN(value)) value = 0;
        // const input = document.getElementById(`day-${day}`);
        // if (input === null) console.log(day, input);
        console.log(value);
        return value;
      });
      let total = values.reduce((n1, n2) => n1 + n2);
      setTotalWordCountForTheWeek(total);
    }, 1000);

  }, []);

  // console.log(id, totalWordCountForTheWeek);

  return (
    <div id={id} className="week-tracker">
      <div className="labels">
        <label>Nov 1 - Nov 7</label>
        <label>Total Word Count</label>
      </div>
      <div className="counts">
        <div className="current-count">{totalWordCountForTheWeek || 0}</div>
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