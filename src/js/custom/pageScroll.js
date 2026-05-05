document.querySelector(".headerPage-scroll")?.addEventListener("click", () => {
  const target = document.querySelector("#scrollContent");

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn("Target element not found");
  }
});
