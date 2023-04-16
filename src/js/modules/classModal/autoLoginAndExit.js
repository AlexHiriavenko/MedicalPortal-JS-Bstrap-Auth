import { changeContentOnPage } from "../classModal/ModalLogin.js";

const autoClick = (id) => document.getElementById(`${id}`).click();

const autoLogIn = function () {
    if (localStorage.getItem("autoLogIn")) {
        changeContentOnPage();

        const email = document.querySelector("#input-email");
        const password = document.querySelector("#floatingPassword");
        email.value = localStorage.getItem("email");
        password.value = localStorage.getItem("password");

        autoClick("submit");
    }
};

document.addEventListener("DOMContentLoaded", autoLogIn);

const exitBtn = document.querySelector(".header__btn-exit");

exitBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
