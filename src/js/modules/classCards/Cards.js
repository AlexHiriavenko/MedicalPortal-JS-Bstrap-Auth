console.log("Cards подключен");

const token = "5317fccb-f768-4268-8fa2-625878d56919"

// const email = "martmarchmartmarch@gmail.com";
// const password = "sdfryS_4352"; 
function getToken () {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: 'martmarchmartmarch@gmail.com', password: '4352' })
})
  .then(response => response.text())
  .then(response => console.log(response))
}


function createCard (token) {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: 'Визит к кардиологу',
          description: 'Плановый визит',
          doctor: 'Cardiologist',
          bp: '24',
          age: 23,
          weight: 70
        })
      })
        .then(response => response.json())
        .then(response => console.log(response))
}

function getAllCards () {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
    })
    .then(response => response.json())
    .then(response => console.log(response))
}

// getToken().then(token => createCard(token));

// getToken();

getAllCards();

