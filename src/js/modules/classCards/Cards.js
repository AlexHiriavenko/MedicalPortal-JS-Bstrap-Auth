import Requests from "../classRequests/Requests.js";
import { shortCard } from "./functions/shortCard.js";
import { onDelete } from "./functions/onDelete.js";
import { onShowMore } from "./functions/onShowMore.js";
import { onEdit } from "./functions/onEdit.js";
import { fullContent } from "./functions/FullContent.js";
import { messageEmptyCards } from "./functions/messageEmptyCards.js";

export const cardsRequests = new Requests();
// export const token = "5317fccb-f768-4268-8fa2-625878d56919"; // my token
export const h1 = document.querySelector("h1.display-2.text-center.main_title");

const testCardObj = {
    name: "Petro",
    doctor: "Dentist",
    purpose: "реставрация зуба",
    description: "ехал на велике, упал, обломал 2 зуба",
    priority: "high",
    visitDate: "2023-04-08",
    status: "done",
    lastVisit: "2023-03-08",
    phone: "+380991234567",
};

class VisitCards {
    constructor() {}

    async showCards(parent, requests, token) {
        const cardsSection = document.createElement("section");
        const classesCards = [
            "cards",
            "row",
            "row-cols-1",
            "row-cols-md-2",
            "row-cols-lg-3",
            "g-4",
        ];
        cardsSection.classList.add(...classesCards);
        const requestsCards = await requests.getCards(token);
        if (requestsCards.length < 1) {
            messageEmptyCards(parent);
        } else {
            const renderCards = await requestsCards.map((cardObj) => {
                const card = document.createElement("div");
                card.classList.add("col", "wrapper-card");

                const shortContent = shortCard(cardObj);
                card.innerHTML = shortContent;
                cardsSection.append(card);
                const cardFullContent = card.querySelector(".full-content");
                fullContent(cardObj, cardFullContent);
                return card;
            });
            parent.after(cardsSection);
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

    async editCard(cardsArray, token) {
        if (cardsArray) {
            const cards = await cardsArray.forEach((card) => {
                const btnEdit = card.querySelector(".btn.card-edit");
                btnEdit.addEventListener("click", onEdit(token));
            });
        }
    }
}

const visitCards = new VisitCards();

export function showAllCards(token) {
    return visitCards
        .showCards(h1, cardsRequests, token)
        .then((cardsArray) => visitCards.deleteCard(cardsArray, token))
        .then((cardsArray) => visitCards.showMore(cardsArray))
        .then((cardsArray) => visitCards.editCard(cardsArray, token))
}


function getToken() {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "martmarchmartmarch@gmail.com", password: "4352" }),
    })
        .then((response) => response.text())
        .then((response) => console.log(response));
}

function createCard(token) {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(testCardObj),
    })
        .then((response) => response.json())
        .then((response) => console.log(response));
}

// createCard(token); // каждое обновление страницы - это один запуск + 1 карточка


// export const token = "0360ffe9-0bf3-4ef0-ac36-247faebc6cd4";  // token Viktor
// const email = "martmarchmartmarch@gmail.com";
// const password = "sdfryS_4352";
// getToken().then(token => createCard(token));
// getToken();

// getAllCards();
