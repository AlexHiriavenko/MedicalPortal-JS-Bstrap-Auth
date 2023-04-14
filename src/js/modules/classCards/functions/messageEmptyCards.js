export function messageEmptyCards(parent) {
    const h2 = document.createElement("h2");
    h2.classList.add("empty", "text-primary");
    h2.textContent = "No items have been added";
    h2.style.textAlign = "center";
    parent.after(h2);
}
