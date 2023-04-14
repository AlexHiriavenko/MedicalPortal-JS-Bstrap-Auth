import Modal from "./Modal.js";
import FormsLogin from "../classForms/FormsLogin.js";
import Requests from "../classRequests/Requests.js";
import { showAllCards } from "../classCards/Cards.js";

export let token = localStorage.getItem("token");

export default class ModalLogin extends Modal {
    constructor(modalId = "", title = "") {
        super(modalId, title);
        this.emailInput = null;
        this.passwordInput = null;
        this.onSubmit = this.onSubmit.bind(this); // байндим к экземпляру класса ModalLogin
        this.getToken = this.getToken.bind(this); // байндим к экземпляру класса ModalLogin
    }

    async getToken() {
        try {
            const request = new Requests();
            const emailInput = document.querySelector("#input-email");
            const passwordInput = document.querySelector("#floatingPassword");
            const tokenRequest = await request.tokenRequest(emailInput.value, passwordInput.value);
            if (tokenRequest.ok) {
                token = await tokenRequest.text();
                console.log(token);
                localStorage.setItem("token", token);
                localStorage.setItem("email", emailInput.value);
                localStorage.setItem("password", passwordInput.value);
                localStorage.setItem("autoLogIn", true);
                return token;
            } else {
                throw new Error(`Error ${tokenRequest.status}: Incorrect username or password`);
            }
        } catch (error) {
            alert(error.message);
        }
    }

    onSubmit = async function (event) {
        event.preventDefault();
        if (!token) {
            await this.getToken();
        }
        this.emailInput = document.querySelector("#input-email");
        this.passwordInput = document.querySelector("#floatingPassword");

        const btnCloseModal = document.querySelector("#btn-close-modal");
        await btnCloseModal.click();
        const logInBtn = document.querySelector(".header__btn-login");
        logInBtn.classList.add("d-none");
        const createVisitBtn = document.querySelector(".header__btn-create-visit");
        createVisitBtn.classList.replace("d-none", "d-block");
        await showAllCards(token);
    };

    renderModalLoginContent() {
        const formLogin = new FormsLogin("Sign in", this.onSubmit, "signin");
        return formLogin.renderForms(formLogin.renderFormsLoginContent());
    }
}

const modalLogin = new ModalLogin("modal-sign-in");
document.body.prepend(modalLogin.renderModal(modalLogin.renderModalLoginContent()));

window.onload = function () {
    if (localStorage.getItem("autoLogIn")) {
        const email = document.querySelector("#input-email");
        const password = document.querySelector("#floatingPassword");
        email.value = localStorage.getItem("email");
        password.value = localStorage.getItem("password");
        autoClick("submit");
    }
};

const autoClick = (id) => document.getElementById(`${id}`).click();

// localStorage.clear();
