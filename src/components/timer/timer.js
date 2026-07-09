function getSlovakTimeLabel(value, type) {
  const forms = {
    days: ["deň", "dni", "dní"],
    hours: ["hodina", "hodiny", "hodín"],
    minutes: ["minúta", "minúty", "minút"],
  };

  const lastTwo = value % 100;
  const lastOne = value % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return forms[type][2];
  }

  switch (lastOne) {
    case 1:
      return forms[type][0];

    case 2:
    case 3:
    case 4:
      return forms[type][1];

    default:
      return forms[type][2];
  }
}

function startCountdowns() {
  document.querySelectorAll(".timer").forEach(initializeTimer);
}

function initializeTimer(timer) {
  const daysElement = timer.querySelector("#countdown-days");
  const hoursElement = timer.querySelector("#countdown-hours");
  const minutesElement = timer.querySelector("#countdown-minutes");

  const daysLabel = timer.querySelector("#countdown-days-label");
  const hoursLabel = timer.querySelector("#countdown-hours-label");
  const minutesLabel = timer.querySelector("#countdown-minutes-label");

  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !daysLabel ||
    !hoursLabel ||
    !minutesLabel
  ) {
    console.warn("Timer elements not found:", timer);
    return;
  }

  const deadline = new Date(timer.dataset.endtime).getTime();

  if (isNaN(deadline)) {
    console.error("Invalid data-endtime:", timer.dataset.endtime);
    return;
  }

  let interval;

  function finishTimer() {
    clearInterval(interval);

    timer.innerHTML = `
      <b class="py-3 text-uppercase text-white" style="grid-column: span 3">
        Udalosť už začala
      </b>
    `;
  }

  function updateTimer() {
    const diff = deadline - Date.now();

    if (diff <= 0) {
      finishTimer();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;

    daysLabel.textContent = getSlovakTimeLabel(days, "days");
    hoursLabel.textContent = getSlovakTimeLabel(hours, "hours");
    minutesLabel.textContent = getSlovakTimeLabel(minutes, "minutes");
  }

  updateTimer();
  interval = setInterval(updateTimer, 1000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startCountdowns);
} else {
  startCountdowns();
}
