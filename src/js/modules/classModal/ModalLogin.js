import Modal from "./Modal.js";
import FormsLogin from "../classForms/FormsLogin.js";
import Requests from "../classRequests/Requests.js";
import { showAllCards } from "../classCards/Cards.js";

export let token = localStorage.getItem("token");

export class ModalLogin extends Modal {
  constructor(modalId = "", title = "") {
    super(modalId, title);
  }

  onSubmit = async function (event) {
    event.preventDefault();
    try {
      const request = new Requests();
      const emailInput = document.querySelector("#input-email");
      const passwordInput = document.querySelector("#floatingPassword");
      const tokenRequest = await request.tokenRequest(
        emailInput.value,
        passwordInput.value
      );
      if (tokenRequest.ok) {
        token = await tokenRequest.text();
        localStorage.setItem("token", token);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("password", passwordInput.value);
        localStorage.setItem("autoLogIn", true);

        changeContentOnPage();

        const btnCloseModal = document.querySelector("#btn-close-modal");
        await btnCloseModal.click();

        await showAllCards(token);
      } else {
        throw new Error(
          `Error ${tokenRequest.status}: Incorrect username or password`
        );
      }
    } catch (error) {
      alert(error.message);
    }
  };

  renderModalLoginContent() {
    const formLogin = new FormsLogin("Sign in", this.onSubmit, "signin");
    return formLogin.renderForms(formLogin.renderFormsLoginContent());
  }
}

const modalLogin = new ModalLogin("modal-sign-in");
document.body.prepend(
  modalLogin.renderModal(modalLogin.renderModalLoginContent())
);

export const changeContentOnPage = function () {
  const logInBtn = document.querySelector(".header__btn-login");
  logInBtn.classList.add("d-none");
  const createVisitBtn = document.querySelector(".header__btn-create-visit");
  createVisitBtn.classList.replace("d-none", "d-block");
  const exitBtn = document.querySelector(".header__btn-exit");
  exitBtn.classList.replace("d-none", "d-block");
  const filterCards = document.querySelector("#cardsFilter");
  filterCards.classList.replace("d-none", "d-block");
  const mainTitle = document.querySelector(".main_title");
  mainTitle.textContent = "Your Visits";
  const mainText = document.querySelector("#text-container");
  mainText.classList.add("d-none");
};
