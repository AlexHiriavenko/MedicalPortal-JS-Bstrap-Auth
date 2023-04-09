export function shortCard(cardObj) {
    const { id, name, doctor, status, priority } = cardObj;
    return `
<div id="${id}" class="card h-100 bg-light" data-doctor="${doctor}" data-status="${status}" data-priority="${priority}">
  <div class="card-body">
    <h5 class="card-title text-center bg-dark text-light">Visit: <span class="card-title">${id}</span></h5>
    <p class="card-text"><strong>Patient: </strong><span class="card-text patient-name">${name}</span></p>
    <p class="card-text"><strong>Doctor: </strong><span class="card-text doctor-type">${doctor}</span></p>
    <div class="full-content d-none"></div>
  </div>
  <div class="card-footer d-flex justify-content-between align-items-center">
    <button class="btn btn-primary me-auto show-more">Show More</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn card-edit">
        <svg style="color: rgb(25, 27, 26);" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
          class="card-edit" viewBox="0 0 16 16">
          <path class="card-edit"
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              fill="blue"></path>
          <path class="card-edit" fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              fill="blue"></path>
        </svg>
      </button>
      <button type="button" class="btn card-del">
        <svg style="color: black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
          class="card-del" viewBox="0 0 16 16">
          <path class="card-del"
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              fill="red"></path>
          <path class="card-del" fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              fill="red"></path>
      </svg>
      </button>
    </div>
  </div>
</div>`;
}

// <p class="card-text d-none">Date:<span class="card-text doctor-type date">${date}</span></p>
// <p class="card-text d-none">Purpose: <span class="card-text doctor-type purpose">${purpose}</span></p>
// <p class="card-text d-none">Description: <span class="card-text doctor-type description">${description}</span></p>
// <p class="card-text d-none">Priority<span class="card-text doctor-type priority">${priority}</span></p>
// <p class="card-text d-none">Status:<span class="card-text doctor-type status">${status}</span></p>
// <p class="card-text d-none">Status:<span class="card-text doctor-type status">${lastVisit}</span></p>