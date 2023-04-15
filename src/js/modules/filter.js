const searchBtn = document.querySelector("#searchBtn");
const resetBtn = document.querySelector("#resetBtn");

const searchInput = document.querySelector("#searchInput");
const selectStatus = document.querySelector("#selectStatus");
const selectPriority = document.querySelector("#selectPriority");

searchBtn.addEventListener("click", () => {
    const cardsArr = Array.from(document.querySelectorAll(".card"));

    cardsArr.forEach((card) => {
        const purposeProperty = card.querySelector(".purpose");
        card.parentNode.classList.add("d-none");

        if (
            selectStatus.value === "" &&
            selectPriority.value === "" &&
            searchInput.value.trim() === ""
        ) {
            card.parentNode.classList.replace("d-none", "d-block");
        }

        if (
            (card.dataset.status === selectStatus.value || selectStatus.value === "") &&
            (card.dataset.priority === selectPriority.value || selectPriority.value === "") &&
            (purposeProperty.innerText.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                searchInput.value.trim() === "")
        ) {
            card.parentNode.classList.replace("d-none", "d-block");
        }
    });
});

resetBtn.addEventListener("click", () => {
    const cardsArr = Array.from(document.querySelectorAll(".card"));

    cardsArr.forEach((card) => {
        card.parentNode.classList.replace("d-none", "d-block");

        selectStatus.value = "";
        selectPriority.value = "";
        searchInput.value = "";
    });
});
