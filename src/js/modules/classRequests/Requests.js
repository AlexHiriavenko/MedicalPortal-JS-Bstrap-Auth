export default class Requests {
    tokenRequest({ email, password }) {
        fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        }).then((response) => response.text());
    }

    getCards(token) {
        return fetch(`https://ajax.test-danit.com/api/v2/cards`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => response.json());
    }

    createCard(token, objForm) {
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: objForm.name,
                doctor: objForm.doctor,
                purpose: objForm.purpose,
                description: objForm.description,
                priority: objForm.priority,

                pressure: objForm.pressure,
                bodyMassIndex: objForm.bodyMassIndex,
                diseasesOfHeart: objForm.diseasesOfHeart,
                age: objForm.age,
                lastVisit: objForm.lastVisit,
            }),
        }).then((response) => response.json());
    }

    editCard(token, cardId, objForm) {
        fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: objForm.name,
                doctor: objForm.doctor,
                purpose: objForm.purpose,
                description: objForm.description,
                priority: objForm.priority,

                pressure: objForm.pressure,
                bodyMassIndex: objForm.bodyMassIndex,
                diseasesOfHeart: objForm.diseasesOfHeart,
                age: objForm.age,
                lastVisit: objForm.lastVisit,
            }),
        }).then((response) => response.json());
    }

    deleteCard(token, cardId) {
        return fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => response);
    }
}
