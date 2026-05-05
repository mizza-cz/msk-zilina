function startCountdowns() {
  const countItems = document.querySelectorAll(".timer");

  countItems.forEach(function (countItem, index) {
    initializeTimer(countItem, index + 1);
  });
}

function initializeTimer(countItem, timerIndex) {
  const daysElement = countItem.querySelector(`#countdown-days`);
  const hoursElement = countItem.querySelector(`#countdown-hours`);
  const minutesElement = countItem.querySelector(`#countdown-minutes`);

  if (!daysElement || !hoursElement || !minutesElement) {
    return;
  }

  const deadline = new Date(countItem.dataset.endtime).getTime();

  function updateTimer() {
    const currentTime = Date.now();
    const timeDifference = deadline - currentTime;

    if (timeDifference <= 0) {
      countItem.innerHTML = `<b class="py-3 text-uppercase" style="grid-column: span 3">Událost již začala</b>`;
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
  }

  updateTimer();

  const timerInterval = setInterval(updateTimer, 1000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startCountdowns);
} else {
  startCountdowns();
}
