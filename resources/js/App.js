import { useState } from 'react';

import MyDate from './libs/my-date';

import Calendar from './components/Calendar';
import WeeklyTracker from './components/WeeklyTracker';

/*
TODO:
  - Fix issue where clicking on previous/next month doesnt navigate more than 1 deep
*/

const App = () => {
  const [myDate, setMyDate] = useState(new MyDate(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ));

  const goToPreviousMonth = () => {
    setMyDate(new MyDate(
      myDate.getFullYear(),
      myDate.getMonth() - 1,
      myDate.getDate()
    ));
  }

  const goToNextMonth = () => {
    setMyDate(new MyDate(
      myDate.getFullYear(),
      myDate.getMonth() + 1,
      myDate.getDate()
    ));
  }

  return (
    <div className="App">
      <div className="calendar-container">
        <Calendar
          date={myDate}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />
        <WeeklyTracker />
      </div>
      
    </div>
  );
}

export default App;