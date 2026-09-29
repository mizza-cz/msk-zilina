document.querySelectorAll(".js-team-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const item = button.closest(".teamItem");

    if (!item) return;

    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
