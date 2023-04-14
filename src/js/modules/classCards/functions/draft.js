// function getToken() {
//     return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: "martmarchmartmarch@gmail.com", password: "4352" }),
//     })
//         .then((response) => response.text())
//         .then((response) => console.log(response));
// }

// function createCard(token) {
//     fetch("https://ajax.test-danit.com/api/v2/cards", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(testCardObj),
//     })
//         .then((response) => response.json())
//         .then((response) => console.log(response));
// }

// createCard(token); // каждое обновление страницы - это один запуск + 1 карточка

// export const token = "0360ffe9-0bf3-4ef0-ac36-247faebc6cd4";  // token Viktor
// getToken().then(token => createCard(token));
// getToken();

// getAllCards();
// export const token = "5317fccb-f768-4268-8fa2-625878d56919"; // my token

// export const token = "5317fccb-f768-4268-8fa2-625878d56919"; // my token
