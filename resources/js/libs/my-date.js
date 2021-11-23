class MyDate extends Date {

  today() {
    return this.toDateString();
  }

  getLastDayOfLastMonthDate() {
    const year = this.getFullYear();
    const currentMonth = this.getMonth();
    return new Date(year, currentMonth, 0);
  }

  getLastDayOfLastMonth() {
    const year = this.getFullYear();
    const currentMonth = this.getMonth();
    const date = new Date(year, currentMonth, 0);
    return date.getDate();
  }

  getLastDayOfLastMonthIndex() {
    const year = this.getFullYear();
    const currentMonth = this.getMonth();
    const date = new Date(year, currentMonth, 0);
    return date.getDay();
  }

  getFirstDayIndex() {
    const today = new Date(this.getFullYear(), this.getMonth(), 1);
    return today.getDay();
  }

  getLastDayOfCurrentMonth() {
    const year = this.getFullYear();
    const nextMonth = this.getMonth() + 1;
    const date = new Date(year, nextMonth, 0);
    return date.getDate();
  }

  getLastDayOfCurrentMonthIndex() {
    const year = this.getFullYear();
    const nextMonth = this.getMonth() + 1;
    const date = new Date(year, nextMonth, 0);
    return date.getDay();
  }

  getFirstDayOfNextMonthDate() {
    const year = this.getFullYear();
    const nextMonth = this.getMonth() + 1;
    return new Date(year, nextMonth, 1);
  }

}

export default MyDate;