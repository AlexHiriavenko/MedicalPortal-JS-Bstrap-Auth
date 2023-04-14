import Requests from "../classRequests/Requests.js";
import { shortCard } from "./functions/shortCard.js";
import { fullContent } from "./functions/FullContent.js";
import { onDelete } from "./functions/onDelete.js";
import { onShowMore } from "./functions/onShowMore.js";
import { onEdit } from "./functions/onEdit.js";
import { token } from "../classModal/ModalLogin.js";

export const cardsRequests = new Requests();

export const h1 = document.querySelector("h1.display-2.text-center.main_title");

const testCardObj = {
    name: "Ivanko",
    doctor: "cardiologist",
    purpose: "реставрация зуба",
    description: "ехал на велике, упал, обломал 2 зуба",
    priority: "low",
    visitDate: "2023-04-08",
    status: "open",
    lastVisit: "2023-03-08",
    phone: "+380991234567",
};

class VisitCards {
    constructor(parent) {
        this.parent = parent;
    }

    renderCardsSection() {
        this.cardsSection = document.createElement("section");
        const classesCardsSection = [
            "cards",
            "row",
            "row-cols-1",
            "row-cols-md-2",
            "row-cols-lg-3",
            "g-4",
        ];
        this.cardsSection.classList.add(...classesCardsSection);
        this.messageEmpty = document.createElement("h2");
        this.messageEmpty.classList.add("empty", "text-primary", "d-none");
        this.messageEmpty.textContent = "No items have been added";
        this.messageEmpty.style.textAlign = "center";
        this.parent.after(this.cardsSection);
        this.parent.after(this.messageEmpty);
        return this.messageEmpty;
    }

    renderCard(cardObj) {
        const card = document.createElement("div");
        card.classList.add("col", "wrapper-card");

        card.innerHTML = shortCard(cardObj);
        this.cardsSection.append(card);
        const cardFullContent = card.querySelector(".full-content");
        fullContent(cardObj, cardFullContent);
        return card;
    }

    async showCards(requests, token) {
        const requestsCards = await requests.getCards(token);
        return requestsCards.length < 1
            ? this.messageEmpty.classList.replace("d-none", "d-block")
            : requestsCards.map((cardObj) => this.renderCard(cardObj));
    }

    deleteCard(cards, token) {
        if (typeof cards === "object") {
            cards.forEach((card) => {
                const btnDel = card.querySelector(".card-del");
                btnDel.addEventListener("click", onDelete(token));
            });
            return cards;
        }
    }

    showMore(cards) {
        if (typeof cards === "object") {
            cards.forEach((card) => {
                const btnShowMore = card.querySelector(".show-more");
                btnShowMore.addEventListener("click", onShowMore);
            });
        }
        return cards;
    }

    editCard(cards, token) {
        if (typeof cards === "object") {
            cards.forEach((card) => {
                const btnEdit = card.querySelector(".btn.card-edit");
                btnEdit.addEventListener("click", onEdit(token));
            });
        }
    }

    async createCard(token, obj) {
        const newCardObj = await cardsRequests.createCard(token, obj);
        const card = this.renderCard(newCardObj);

        const btnDel = card.querySelector(".card-del");
        btnDel.addEventListener("click", onDelete(token));

        const btnShowMore = card.querySelector(".show-more");
        btnShowMore.addEventListener("click", onShowMore);

        const btnEdit = card.querySelector(".btn.card-edit");
        btnEdit.addEventListener("click", onEdit(token));

        this.messageEmpty.classList.replace("d-block", "d-none");
        return card;
    }
}

export const visitCards = new VisitCards(h1);

export async function showAllCards(token) {
    visitCards.renderCardsSection();
    return visitCards
        .showCards(cardsRequests, token)
        .then((cards) => visitCards.deleteCard(cards, token))
        .then((cards) => visitCards.showMore(cards))
        .then((cards) => visitCards.editCard(cards, token));
}

const test = document.querySelector("h5.text-primary.header__logo-title");
test.addEventListener("click", () => visitCards.createCard(token, testCardObj));
