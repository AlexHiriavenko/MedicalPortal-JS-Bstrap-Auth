export default class Forms {
  constructor(submitButtonName, submitFunction, formId = "") {
    this.submitFunction = submitFunction;
    this.formId = formId;
    this.submitButtonName = submitButtonName;
  }

  renderForms(content) {
    this.form = document.createElement("form");
    this.form.setAttribute("id", this.formId);

    const submitButtonElement = document.createElement("button");
    submitButtonElement.id = "submit";
    submitButtonElement.type = "submit";
    submitButtonElement.classList.add("btn", "btn-lg", "btn-primary", "w-100");
    submitButtonElement.innerText = this.submitButtonName;

    this.form.append(content, submitButtonElement);

    this.form.addEventListener("submit", this.submitFunction);

    return this.form;
  }
}
