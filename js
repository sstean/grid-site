const items = document.querySelectorAll(".reveal");

function onScroll() {
  const trigger = window.innerHeight * 0.88;

  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}

window.addEventListener("scroll", onScroll);
onScroll();
