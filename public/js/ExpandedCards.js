document.addEventListener("DOMContentLoaded", function ExpandedCards() {
  const cardButtons = document.querySelectorAll(".card .overlay .btn-yellow");

  cardButtons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      const card = button.closest(".card");
      const overlay = card.querySelector(".overlay");
      const image = card.querySelector("img");

      image.classList.add("expanded");
      overlay.classList.add("no-background");
    });

    button.addEventListener("mouseout", function () {
      const card = button.closest(".card");
      const overlay = card.querySelector(".overlay");
      const image = card.querySelector("img");

      image.classList.remove("expanded");
      overlay.classList.remove("no-background");
    });
  });

  const horizontalCardButtons = document.querySelectorAll(
    ".horizontal-card .overlay .btn-yellow"
  );

  horizontalCardButtons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      const card = button.closest(".horizontal-card");
      const overlay = card.querySelector(".overlay");
      const image = card.querySelector("img");

      image.classList.add("expanded");
      overlay.classList.add("no-background");
    });

    button.addEventListener("mouseout", function () {
      const card = button.closest(".horizontal-card");
      const overlay = card.querySelector(".overlay");
      const image = card.querySelector("img");

      image.classList.remove("expanded");
      overlay.classList.remove("no-background");
    });
  });
});
