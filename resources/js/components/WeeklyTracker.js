const WeeklyTracker = () => {
  return (
    <div className="weekly-tracker-container">
                
      <div className="navbar">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="weekly-tracker">

        <div id="week-1" className="week-tracker">
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

        <div id="week-2" className="week-tracker">
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

        <div id="week-3" className="week-tracker">
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

        <div id="week-4" className="week-tracker">
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

        <div id="week-5" className="week-tracker">
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

      </div>
    </div>
  );
}

export default WeeklyTracker;