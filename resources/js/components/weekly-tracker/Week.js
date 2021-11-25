const WeekTracker = ({ id }) => {
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