import { useState, useEffect } from 'react';


const WeekTracker = ({ id, days }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const currentMonthDays = document.querySelectorAll('.day > label');
    
    if (currentMonthDays.length === 0) return;

    const timeOutID = setTimeout(() => {

      if (!timeOutID) clearTimeout(timeOutID);

      const totalDays = days.length;
      for (let day = 0; day < totalDays; day++) {
        const label = document.getElementById(`${days[day]}`);
        const dayWordCount = label.nextElementSibling;
        const wordCount = parseInt(dayWordCount.querySelector('input[name="word-count"]').value);

        /*
          1. Get the word count
          2. Sum it all
          3. Render it in the tracker
        */
      }
    }, 5000);
    /*
      ISSUE:
        Theres something wrong with the ids,
        When querying the DOM based on the id number,
        there are duplicate numbers but the only queried once are
        the existing first ones.

      Possible Solutions:
        Re-implement the passing of the data, instead of actual numbers,
        we should query the exact id
    */
  });

  return (
    <div id={id} className="week-tracker">
      <div className="labels">
        <label>Nov 1 - Nov 7</label>
        <label>Total Word Count</label>
      </div>
      <div className="counts">
        <div className="current-count">10493</div>
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