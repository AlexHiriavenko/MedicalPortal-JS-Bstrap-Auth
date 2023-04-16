import Visit from "./Visit.js";

class DentiistVisitForm extends Visit {
  constructor() {
    // Вызываем конструктор родительского класса
    super();

    // Добавляем новые элементы формы, которые появятся при выборе кардиолога в выпадающем списке
    this.nameInput = document.getElementById("name");
    this.phoneInput = document.getElementById("phone");
    this.dateInput = document.getElementById("date");
    this.dateTitle = document.getElementById("dateTitle");
    this.lastVisitInput = document.getElementById("lastVisit");
    this.bodyMassIndexInput = document.getElementById("bodyMassIndex");
    this.dofheartInput = document.getElementById("diseasesOfHeart");
    this.pressureInput = document.getElementById("pressure");
    this.descriptionInput = document.getElementById("description");
    this.ageInput = document.getElementById("age");

    // Добавляем обработчик события для выпадающего списка докторов
    this.selectDoctors.addEventListener("change", () => {
      // Получаем выбранного доктора
      const selectedDoctor =
        this.selectDoctors.options[this.selectDoctors.selectedIndex].value;

      // Если выбран кардиолог, то показываем дополнительные поля формы
      if (selectedDoctor === "dentist") {
        this.showDentistFields();
      } 
    });
  }

  // Метод, который показывает поля формы
  showDentistFields() {
    this.nameInput.style.display = "block";
    this.phoneInput.style.display = "block";
    this.dateInput.style.display = "block";
    this.dateTitle.style.display = "block";
    this.lastVisitInput.style.display = "block";
    this.descriptionInput.style.display = "block";

    this.bodyMassIndexInput.style.display = "none";
    this.bodyMassIndexInput.value = "";
    this.dofheartInput.style.display = "none";
    this.dofheartInput.value = "";
    this.pressureInput.style.display = "none";
    this.pressureInput.value = "";
    this.ageInput.style.display = "none";
    this.ageInput.value = "";

  }
}

const dentiistVisitForm = new DentiistVisitForm();

