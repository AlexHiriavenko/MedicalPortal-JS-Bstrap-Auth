import { therapistVisitForm } from "../../classVisit/TherapistVisitForm.js";
import { cardioVisitForm } from "../../classVisit/CardioVisitForm.js";
import { dentiistVisitForm } from "../../classVisit/DentistVisitForm.js";

export function onEdit(token) {
    return function (event) {
        // const modalTitle = document.querySelector("h4.modal-header_title");
        // modalTitle.textContent = "Edit Visit";
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
        console.log(doctorItem);
        const doctorOption = form.querySelector(`option[value="${doctorItem}"]`);
        doctorOption.selected = true;
        doctorItem === "cardiologist"
            ? cardioVisitForm.showCardioFields()
            : doctorItem === "dentist"
            ? dentiistVisitForm.showDentistFields()
            : therapistVisitForm.showTherapistFields();

        const priorityItem = cardItems
            .find((span) => span.hasAttribute("data-priority"))
            .textContent.toLowerCase();
        const priorityInput = form.querySelector(`#${priorityItem}`);
        priorityInput.checked = true;
    };
}
