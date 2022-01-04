import { useState, useEffect } from 'react';

import { fetchWordCount } from '../calendar/server-requests';


const WeekTracker = ({ id, days }) => {
  const [totalWordCountForTheWeek, setTotalWordCountForTheWeek] = useState(0);

  useEffect(() => {
    let isFetching = true;

    if (isFetching) {
      setInterval(() => {
        Promise.all(days.map(day => fetchWordCount(day)))
          .then(arrayOfResponse => {
            const values = arrayOfResponse.map(res => {
              if (res.chapter === null) return 0;
              if (typeof res.chapter === undefined) return 0;
              return res.chapter.word_count;
            });

            const total = values.reduce((n1, n2) => n1 + n2);
            setTotalWordCountForTheWeek(total);
          })
          .catch(error => {
            console.log(error);
          });
      }, 3000);
    }
    
    return () => {
      isFetching = false;
    }
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