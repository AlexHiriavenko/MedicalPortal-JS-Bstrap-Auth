import Modal from "./Modal.js";
import FormsLogin from "../classForms/FormsLogin.js";
import Requests from "../classRequests/Requests.js";
// import { token } from "../classCards/Cards.js";
import { showAllCards, token } from "../classCards/Cards.js";


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
          const token = await request.tokenRequest(this.emailInput.value, this.passwordInput.value)
          .then(token => {
            if (token !== undefined) {
              localStorage.setItem("token", token);
              const btnCloseModal = document.querySelector("#btn-close-modal")
              btnCloseModal.click();
              const logInBtn = document.querySelector(".header__btn-login");
              logInBtn.classList.add("d-none");
              const createVisitBtn = document.querySelector(".header__btn-create-visit");
              createVisitBtn.classList.add("d-block");
              createVisitBtn.classList.remove("d-none");
              return token;        
            }
          }).then(token => showAllCards(token));
        }
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

