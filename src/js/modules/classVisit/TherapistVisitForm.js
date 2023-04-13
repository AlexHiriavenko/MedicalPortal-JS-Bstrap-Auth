import Visit from "./Visit.js";

class TherapistVisitForm extends Visit {
  constructor() {
    // Вызываем конструктор родительского класса
    super();

    // Добавляем новые элементы формы, которые появятся при выборе кардиолога в выпадающем списке
    this.nameInput = document.getElementById("name");
    this.phoneInput = document.getElementById("phone");
    this.dateInput = document.getElementById("date");
    this.dateTitle = document.getElementById("dateTitle");
    this.ageInput = document.getElementById("age");

    // Добавляем обработчик события для выпадающего списка докторов
    this.selectDoctors.addEventListener("change", () => {
      // Получаем выбранного доктора
      const selectedDoctor =
        this.selectDoctors.options[this.selectDoctors.selectedIndex].value;

      // Если выбран кардиолог, то показываем дополнительные поля формы
      if (selectedDoctor === "therapist") {
        this.showTherapistFields();
      } else {
        // Иначе скрываем дополнительные поля формы
        this.hideTherapistFields();
      }
    });
  }

  // Метод, который скрывает поля формы
  hideTherapistFields() {
    this.nameInput.style.display = "none";
    this.phoneInput.style.display = "none";
    this.dateInput.style.display = "none";
    this.dateTitle.style.display = "none";
    this.ageInput.style.display = "none";
  }

  // Метод, который показывает поля формы
  showTherapistFields() {
    this.nameInput.style.display = "block";
    this.phoneInput.style.display = "block";
    this.dateInput.style.display = "block";
    this.dateTitle.style.display = "block";
    this.ageInput.style.display = "block";
  }
 
}

const therapistVisitForm = new TherapistVisitForm();
therapistVisitForm.init();
