export function onEdit(token) {
    return function (event) {
        const modalTitle = document.querySelector("h4.modal-header_title");
        modalTitle.textContent = "Edit Visit";
        let target = event.target;
        const card = target.closest(".card");
        const cardId = card.id;
    
        const form = document.getElementById("visit-form");
        const inputs = [...form.querySelectorAll("input")];
        const cardItems = [...card.querySelectorAll(".card-text span")];
        inputs.forEach((input) => {
            const span = cardItems.find((span) => span.hasAttribute(`data-${input.id}`));
            if (span) {
                input.value = span.textContent;
            }
        });
    
        const oldOption = form.querySelector(`option[selected]`);
        oldOption.selected = false;
        const doctorItem = cardItems
            .find((span) => span.hasAttribute("data-doctor"))
            .dataset.doctor.toLowerCase();
        const doctorOption = form.querySelector(`option[value="${doctorItem}"]`);
        doctorOption.selected = true;
    
        const priorityItem = cardItems
            .find((span) => span.hasAttribute("data-priority"))
            .textContent.toLowerCase();
        const priorityInput = form.querySelector(`#${priorityItem}`);
        priorityInput.checked = true;
    
        const btnSubmit = form.querySelector("#submit-btn");
        btnSubmit.addEventListener("click", onSubmit);
        function onSubmit(event) {
            event.preventDefault();
            console.log("test");
            inputs.forEach((input) => {
                const span = cardItems.find((span) => span.hasAttribute(`data-${input.id}`));
                if (span) {
                    span.textContent = input.value;
                }
            });
        }
    }
}
