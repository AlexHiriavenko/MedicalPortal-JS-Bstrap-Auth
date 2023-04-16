import Requests from "../classRequests/Requests.js";
import { shortCard } from "./functions/shortCard.js";
import { onDelete } from "./functions/onDelete.js";
import { onShowMore } from "./functions/onShowMore.js";
import { onEdit } from "./functions/onEdit.js";
import { fullContent } from "./functions/FullContent.js";

export const cardsRequests = new Requests();

export const h1 = document.querySelector("h1.display-2.text-center.main_title");

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

        if (requestsCards.length < 1) {
            this.messageEmpty.classList.replace("d-none", "d-block");
        } else {
            const renderCards = await requestsCards.map((cardObj) => this.renderCard(cardObj));
            return renderCards;
        }
    }

    async deleteCard(cardsArray, token) {
        if (cardsArray) {
            const cards = await cardsArray.forEach((card) => {
                const btnDel = card.querySelector(".card-del");
                btnDel.addEventListener("click", onDelete(token));
            });
            return cardsArray;
        }
    }

    async showMore(cardsArray) {
        if (cardsArray) {
            const cards = await cardsArray.forEach((card) => {
                const btnShowMore = card.querySelector(".show-more");
                btnShowMore.addEventListener("click", onShowMore);
            });
        }
        return cardsArray;
    }

    async showEditForm(cardsArray, token) {
        if (cardsArray) {
            const cards = await cardsArray.forEach((card) => {
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

    async editCard(token, id, obj) {
        const editObj = await cardsRequests.editCard(token, id, obj);
        const card = document.getElementById(id).parentNode;
        card.innerHTML = shortCard(editObj);
        const cardFullContent = card.querySelector(".full-content");
        fullContent(editObj, cardFullContent);

        const btnDel = card.querySelector(".card-del");
        btnDel.addEventListener("click", onDelete(token));

        const btnShowMore = card.querySelector(".show-more");
        btnShowMore.addEventListener("click", onShowMore);

        const btnEdit = card.querySelector(".btn.card-edit");
        btnEdit.addEventListener("click", onEdit(token));
    }
}

export const visitCards = new VisitCards(h1);

export function showAllCards(token) {
    visitCards.renderCardsSection();
    return visitCards
        .showCards(cardsRequests, token)
        .then((cardsArray) => visitCards.deleteCard(cardsArray, token))
        .then((cardsArray) => visitCards.showMore(cardsArray))
        .then((cardsArray) => visitCards.showEditForm(cardsArray, token));
}
