export default class Modal { 
    constructor(modalId = "", title = "") {
        this.modalId = modalId
        this.title = title;
      }

    renderModal(content = "") {

    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('modal', 'fade', 'text-center');
    this.modalElement.setAttribute('id', this.modalId);
    this.modalElement.setAttribute('tabindex', '-1');
    this.modalElement.setAttribute('role', 'dialog');
    this.modalElement.setAttribute('aria-hidden', 'true');

    const modalDialogElement = document.createElement('div');
    modalDialogElement.classList.add('modal-dialog');

    const modalContentElement = document.createElement('div');
    modalContentElement.classList.add('modal-content');

    const modalHeaderElement = document.createElement('div');
    modalHeaderElement.classList.add('modal-header');
    modalHeaderElement.innerHTML = `<h5 class="modal-title">${this.title}</h5>
    <button type="button" id="btn-close-modal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`

    const modalBodyElement = document.createElement('div');
    modalBodyElement.classList.add('modal-body');
    modalBodyElement.append(content);

    modalContentElement.appendChild(modalHeaderElement);
    modalContentElement.appendChild(modalBodyElement);

    modalDialogElement.appendChild(modalContentElement);

    this.modalElement.appendChild(modalDialogElement);

    return this.modalElement

    };
};