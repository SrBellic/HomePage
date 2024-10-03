window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  const topHeader = document.getElementById("top-header");
  const content = document.getElementById("home");
  const headerHeight = header.offsetHeight;

  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
    topHeader.classList.add("top-header-scrolled");
    content.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove("header-scrolled");
    topHeader.classList.remove("top-header-scrolled");
    content.style.paddingTop = "0";
  }
});
