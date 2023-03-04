new CountdownTimer({
  selector: '#timer-1',
  daysRef: document.querySelector('data-value="days'),
  hoursRef: document.querySelector('data-value="hours'),
  minsRef: document.querySelector('data-value="mins'),
  secsRef: document.querySelector('data-value="secs'),
  targetDate: new Date('Jul 17, 2019'),
  todayDate: new Date(),
  timerId: null,
  // timerRef: document.querySelector(this.selector),

  timerStart() {
      timerId = setInterval(() => {
        const LeftTime = this.targetDate - this.todayDate;
        MathTime(LeftTime)
      },1000)
  }
});

function MathTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
  CountdownTimer.daysRef.textContent = days;
    // return `${days.toString().padStart(2, '0')} : ${hours.toString().padStart(2, '0')} : ${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`
}

CountdownTimer.timerStart()
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);