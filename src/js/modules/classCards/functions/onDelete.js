import { cardsRequests } from "../../classCards/Cards.js";
import { visitCards } from "../../classCards/Cards.js";

export function onDelete(token) {
  return async function (event) {
    let conf = confirm("A You Sure?");
    if (conf) {
      let target = event.target;
      const cardForDel = target.closest(".wrapper-card");
      const cardId = target.closest(".card").id;
      const statusDelete = (await cardsRequests.deleteCard(token, cardId))
        .status;
      if (statusDelete === 200) {
        const cardsSection = cardForDel.closest(".cards");
        cardForDel.remove();
        if (!cardsSection.innerHTML.trim()) {
          visitCards.messageEmpty.classList.replace("d-none", "d-block");
        }
      } else {
        alert("sory try later");
      }
    }
  };
}
