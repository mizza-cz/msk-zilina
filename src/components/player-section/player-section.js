const statsToggleButton = document.querySelector(".stats-toggle");
const fullStatsSection = document.querySelector("#fullStats");

if (statsToggleButton && fullStatsSection) {
  statsToggleButton.addEventListener("click", () => {
    const isExpanded = fullStatsSection.classList.toggle("is-open");

    statsToggleButton.setAttribute("aria-expanded", String(isExpanded));

    statsToggleButton.textContent = isExpanded
      ? "Skryť štatistiky"
      : "Kompletné štatistiky";
  });
}
