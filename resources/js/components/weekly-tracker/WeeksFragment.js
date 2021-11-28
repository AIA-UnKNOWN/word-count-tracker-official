import WeekTracker from './Week';


const WeekTrackers = ({ weeks }) => {
  const calendarWeeks = {...weeks};
  const calendarWeeksList = Object.keys(calendarWeeks); // Returns an array of {Object} keys
  
  return (
    <>
    {calendarWeeksList.map((week, i) => (
      <WeekTracker
        key={week}
        id={`week-${i + 1}`}
        days={calendarWeeks[week]}
      />
    ))}
    </>
  );
}

export default WeekTrackers;