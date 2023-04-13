import Forms from "./Forms.js";

export default class FormsLogin extends Forms {
  constructor(submitButtonName, submitFunction, formId = "") {
    super(submitButtonName, submitFunction, formId);
  }

  renderFormsLoginContent() {
    const divWrapperElement = document.createElement('div');
    divWrapperElement.classList.add('form-signin', 'w-100', 'm-auto');

    divWrapperElement.innerHTML = `
        <img class="mb-4 justify-content-center"
              src="src/img/medicine-logo.png"
              alt="logo" width="72"
              height="57" />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
        <input id="input-email"
         name="email"
         type="email"
         class="form-control mb-3"
         placeholder="name@example.com"
         required />
        <label for="input-email">Email address</label>
        </div>
        <div class="form-floating">
        <input type="password"
        name="password"
        class="form-control mb-3"
        id="floatingPassword"
        placeholder="Password"
        required />
        <label
        for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
        <label> <input type="checkbox"
                value="remember-me"
                id="rememberme"/> <span>Remember me</span></label>
        </div>`;

    return divWrapperElement;
  }
};