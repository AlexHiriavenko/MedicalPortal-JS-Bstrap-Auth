import { therapistVisitForm } from "../../classVisit/TherapistVisitForm.js";
import { cardioVisitForm } from "../../classVisit/CardioVisitForm.js";
import { dentiistVisitForm } from "../../classVisit/DentistVisitForm.js";
import { visitForm, modalTitle} from "../../classVisit/variablesVisit.js";

export function onEdit(token) {
    return function (event) {
        modalTitle.textContent = "Edit Visit";
        let target = event.target;
        const card = target.closest(".card");
        const cardId = card.id;


        const inputs = [...visitForm.querySelectorAll("input")];
        const cardItems = [...card.querySelectorAll(".card-text span")];
        inputs.forEach((input) => {
            const span = cardItems.find((span) => span.hasAttribute(`data-${input.id}`));
            if (span) {
                input.value = span.textContent;
            }
        });

        const oldOption = visitForm.querySelector(`option[selected]`);
        oldOption.selected = false;
        const doctorItem = cardItems
            .find((span) => span.hasAttribute("data-doctor"))
            .dataset.doctor.toLowerCase();
        const doctorOption = visitForm.querySelector(`option[value="${doctorItem}"]`);
        doctorOption.selected = true;
        doctorItem === "cardiologist"
            ? cardioVisitForm.showCardioFields()
            : doctorItem === "dentist"
            ? dentiistVisitForm.showDentistFields()
            : therapistVisitForm.showTherapistFields();

        const priorityItem = cardItems
            .find((span) => span.hasAttribute("data-priority"))
            .textContent.toLowerCase();
        const priorityInput = visitForm.querySelector(`#${priorityItem}`);
        priorityInput.checked = true;
    };
}
