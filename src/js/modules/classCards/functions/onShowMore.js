export function onShowMore(event) {
    const target = event.target;
    const card = target.closest(".card");
    const fullContent = card.querySelector(".full-content");

    fullContent.matches(".d-none")
        ? (fullContent.classList.replace("d-none", "d-block"), (target.textContent = "Show Less"))
        : (fullContent.classList.replace("d-block", "d-none"), (target.textContent = "Show More"));
}
