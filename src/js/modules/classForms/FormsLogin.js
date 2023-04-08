
class BootstrapLoginForm {
    constructor() {
      this.formElement = null;
      this.createForm();
    }
    
    createForm() {
      // Создаем элементы формы
      const formElement = document.createElement('form');
      formElement.classList.add('needs-validation');
      
      const usernameFormGroupElement = document.createElement('div');
      usernameFormGroupElement.classList.add('form-group');
      
      const usernameLabelElement = document.createElement('label');
      usernameLabelElement.setAttribute('for', 'username');
      usernameLabelElement.innerText = 'Username';
      
      const usernameInputElement = document.createElement('input');
      usernameInputElement.type = 'text';
      usernameInputElement.classList.add('form-control');
      usernameInputElement.setAttribute('id', 'username');
      usernameInputElement.setAttribute('placeholder', 'Enter username');
      usernameInputElement.setAttribute('required', '');
      
      usernameFormGroupElement.appendChild(usernameLabelElement);
      usernameFormGroupElement.appendChild(usernameInputElement);
      
      const passwordFormGroupElement = document.createElement('div');
      passwordFormGroupElement.classList.add('form-group');
      
      const passwordLabelElement = document.createElement('label');
      passwordLabelElement.setAttribute('for', 'password');
      passwordLabelElement.innerText = 'Password';
      
      const passwordInputElement = document.createElement('input');
      passwordInputElement.type = 'password';
      passwordInputElement.classList.add('form-control');
      passwordInputElement.setAttribute('id', 'password');
      passwordInputElement.setAttribute('placeholder', 'Enter password');
      passwordInputElement.setAttribute('required', '');
      
      passwordFormGroupElement.appendChild(passwordLabelElement);
      passwordFormGroupElement.appendChild(passwordInputElement);
      
      const submitButtonElement = document.createElement('button');
      submitButtonElement.type = 'submit';
      submitButtonElement.classList.add('btn', 'btn-primary', 'w-100');
      submitButtonElement.innerText = 'Log in';
      
      // Добавляем элементы в форму
      formElement.appendChild(usernameFormGroupElement);
      formElement.appendChild(passwordFormGroupElement);
      formElement.appendChild(submitButtonElement);
      
      // Добавляем форму на страницу
      document.body.appendChild(formElement);
      
      // Инициализируем Bootstrap validation
      $(formElement).validate();
      
      this.formElement = formElement;
    }
    
    getFormData() {
      if (this.formElement) {
        const formData = new FormData(this.formElement);
        const data = {};
        for (let [key, value] of formData.entries()) {
          data[key] = value;
        }
        return data;
      }
    }
  }

  const loginForm = new BootstrapLoginForm();