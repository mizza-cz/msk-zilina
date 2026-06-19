function startCountdowns() {
  const countItems = document.querySelectorAll(".timer");

  countItems.forEach((countItem) => {
    initializeTimer(countItem);
  });
}

function initializeTimer(countItem) {
  const daysElement = countItem.querySelector("#countdown-days");
  const hoursElement = countItem.querySelector("#countdown-hours");
  const minutesElement = countItem.querySelector("#countdown-minutes");

  if (!daysElement || !hoursElement || !minutesElement) {
    console.warn("Timer elements not found:", countItem);
    return;
  }

  const deadline = new Date(countItem.dataset.endtime).getTime();

  if (Number.isNaN(deadline)) {
    console.error("Invalid data-endtime value:", countItem.dataset.endtime);
    return;
  }

  let timerInterval;

  function finishTimer() {
    countItem.innerHTML = `
      <b class="py-3 text-uppercase text-white" style="grid-column: span 3">
        Událost již začala
      </b>
    `;

    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  function updateTimer() {
    const timeDifference = deadline - Date.now();

    if (timeDifference <= 0) {
      finishTimer();
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

  if (deadline > Date.now()) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startCountdowns);
} else {
  startCountdowns();
}
