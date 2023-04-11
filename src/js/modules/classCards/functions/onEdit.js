export function onEdit(event) {
    let target = event.target;
    const card = target.closest(".card");
    const cardId = card.id;
    const form = document.getElementById("visit-form");
    const inputs = form.querySelectorAll("input, option");
    console.log(inputs);
}

