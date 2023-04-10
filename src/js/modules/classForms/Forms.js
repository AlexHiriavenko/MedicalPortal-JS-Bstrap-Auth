// import Requests from "../classRequests/Requests";

// определяем класс формы

class Form {
  constructor() {
    this.modal = document.getElementById("modal-create-visit"); // модальное окно
    this.submitBtn = document.getElementById("submit-btn"); // кнопка отправки формы
    this.selectDoctors = document.querySelectorAll(".select-doctors")[0]; // select для выбора доктора
    this.titleInput = document.querySelectorAll(".title")[0]; // поле для ввода цели визита
    this.priorityInputs = document.querySelectorAll('input[name="priority"]'); // радио-кнопки для выбора приоритета
    this.nameInput = document.getElementById("name"); // поле для ввода имени и фамилии
    this.phoneInput = document.getElementById("phone"); // поле для ввода телефона
    this.dateInput = document.getElementById("date"); // поле для выбора даты
  }

  // метод для инициализации формы
  init() {
    this.submitBtn.addEventListener("click", (event) => {
      event.preventDefault(); // отменяем стандартное действие кнопки отправки формы
      this.submit(); // вызываем метод submit()
    });
  }

  // метод для получения и отправки данных формы
  submit() {
    const form = document.getElementById("visit-form");
    const dataValue = new FormData(form);
    console.log("values radio", dataValue.get("priority"));

    const formData = {
      name: dataValue.get("name"),
      doctor: dataValue.get("doctor"),
      purpose: dataValue.get("purpose"),
      priority: dataValue.get("priority"),
      phone: dataValue.get("phone"),
      date: dataValue.get("date"),
      age: dataValue.get("age"),
      description: dataValue.get("description"),
      bodyMassIndex: dataValue.get("bodyMassIndex"),
      pressure: dataValue.get("pressure"),
      lastVisit: dataValue.get("lastVisit"),
    };

    console.log("formData", formData); 

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ajax.test-danit.com/api/v2/cards");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer 42e98cfb-6bcb-4b71-a7ba-7d9cb53b1005");
    xhr.send(JSON.stringify(formData));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // complete
        if (xhr.status === 200) { // success
          console.log("Open");
        } else { // fails
          console.log("Done");
        }
      }
    };

    this.modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}

// создаем объект класса Form и инициализируем форму
const form = new Form();
form.init();
