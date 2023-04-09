import { token, cardsRequests } from "../../classCards/Cards.js";
import { messageEmptyCards } from "./messageEmptyCards.js";
import { h1 } from "../../classCards/Cards.js";

export async function onDelete(event) {
    let conf = confirm("A You Sure?");
    if (conf) {
        let target = event.target;
        const cardForDel = target.closest(".wrapper-card");
        const cardId = target.closest(".card").id;
        const statusDelete = (await cardsRequests.deleteCard(token, cardId)).status;
        if (statusDelete === 200) {
            const cardsSection = cardForDel.closest(".cards");
            cardForDel.remove();
            if (!cardsSection.innerHTML.trim()) {
                messageEmptyCards(h1);
            }
        }
    }
}
