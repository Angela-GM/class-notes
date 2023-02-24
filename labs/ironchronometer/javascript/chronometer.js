class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    //!! Remember to save the interval execution in the intervalId property
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      //this.currentTime++
    }, 1000);
  }
  // BONUS ===>
  //   this.intervalId = setInterval(() => {
  //     this.currentTime += 1;
  //     //this.currentTime++
  //   }, 10);
  // }

  getMinutes() {
    return Math.floor(this.currentTime / 60); // Multiply by 100 for the BONUS
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60); // Multiply by 100 for the BONUS
  }

  getMilliseconds() {
    // BONUS ===> Only works if setInterval is 10 ms
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    /* If else Option  */
    // if (value < 10) return '0' + String(value);
    // else return value.toString();

    /* One line option */
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    // Bonus
    clearInterval(this.intervalIdMilliseconds);
  }

  reset() {
    this.currentTime = 0;
    // Bonus
    this.currentMilliseconds = 0;
  }

  split() {
    //Remember you can use a function within a function and pass the return as an argument for another function
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    // Bonus
    const milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);

    // Bonus
    //return `${minutes}:${seconds}:${milliseconds}`;
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
