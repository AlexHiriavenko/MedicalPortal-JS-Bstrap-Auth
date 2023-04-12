import { cardsRequests } from "../../classCards/Cards.js";
import { messageEmptyCards } from "./messageEmptyCards.js";
import { h1 } from "../../classCards/Cards.js";

export function onDelete(token) {
    return  async function(event) {
        // Здесь можно использовать аргумент token
        let conf = confirm("A You Sure?");
        if (conf) {
            let target = event.target;
            console.log(target);
            console.log(token);
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
}
