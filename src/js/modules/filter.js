const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const cardsArr = Array.from(document.querySelectorAll(".card"));

  const searchInput = document.querySelector("#searchInput");

  const selectStatus = document.querySelector("#selectStatus");

  const selectPriority = document.querySelector("#selectPriority");

  cardsArr.forEach((card) => {
    const purposeProperty = card.querySelector(".purpose");
    card.parentNode.classList.add("d-none");

    if (
      card.dataset.status === selectStatus.value ||
      card.dataset.priority === selectPriority.value ||
      (searchInput.value !== "" &&
        purposeProperty.innerText.includes(searchInput.value.trim()))
    ) {
      card.parentNode.classList.replace("d-none", "d-block");
    }
  });
});
