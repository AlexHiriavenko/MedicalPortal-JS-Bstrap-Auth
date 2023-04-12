import Modal from "./Modal.js";
import FormsLogin from "../classForms/FormsLogin.js";
import Requests from "../classRequests/Requests.js";

export default class ModalLogin extends Modal {
  constructor(modalId = "", title = "") {
    super(modalId, title);
    this.emailInput = null
    this.passwordInput = null

  }

  getToken = async function (event) {
    event.preventDefault();

    this.emailInput = document.querySelector("#input-email");
    this.passwordInput = document.querySelector("#floatingPassword");

        try {
        const request = new Requests();
        const tokenRequest = await request.tokenRequest(this.emailInput.value, this.passwordInput.value);
        if (tokenRequest.ok) {

            const token = await tokenRequest.text();
            localStorage.setItem("token", token);
            localStorage.setItem("email", this.emailInput.value);
            localStorage.setItem("password", this.passwordInput.value);
            localStorage.setItem("autoLogIn", true);
    
            const btnCloseModal = document.querySelector("#btn-close-modal")
            await btnCloseModal.click();
            const logInBtn = document.querySelector(".header__btn-login");
            logInBtn.classList.add("d-none");
            const createVisitBtn = document.querySelector(".header__btn-create-visit");
            createVisitBtn.classList.replace("d-none", "d-block");
        } else {
            throw new Error(
                `Error ${tokenRequest.status}: Incorrect username or password`
              );
        }}
        catch (error) {
            alert(error.message);
        } 
  }

  renderModalLoginContent() {
    const formLogin = new FormsLogin ( "Sign in", this.getToken, "signin"); 
    return formLogin.renderForms(formLogin.renderFormsLoginContent());
  }
}

const modalLogin = new ModalLogin ( "modal-sign-in"); 
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
  