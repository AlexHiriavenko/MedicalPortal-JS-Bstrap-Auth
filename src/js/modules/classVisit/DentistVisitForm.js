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

    // Добавляем обработчик события для выпадающего списка докторов
    this.selectDoctors.addEventListener("change", () => {
      // Получаем выбранного доктора
      const selectedDoctor =
        this.selectDoctors.options[this.selectDoctors.selectedIndex].value;

      // Если выбран кардиолог, то показываем дополнительные поля формы
      if (selectedDoctor === "dentist") {
        this.showDentistFields();
      } else {
        // Иначе скрываем дополнительные поля формы
        this.hideDentistFields();
      }
    });
  }

  // Метод, который скрывает поля формы
  hideDentistFields() {
    this.nameInput.style.display = "none";
    this.phoneInput.style.display = "none";
    this.dateInput.style.display = "none";
    this.dateTitle.style.display = "none";
    //     this.bodyMassIndexInput.style.display = "none";
    //     this.pressureInput.style.display = "none";
    //         this.descriptionInput.style.display = "none";
    this.lastVisitInput.style.display = "none";
  }

  // Метод, который показывает поля формы
  showDentistFields() {
    this.nameInput.style.display = "block";
    this.phoneInput.style.display = "block";
    this.dateInput.style.display = "block";
    this.dateTitle.style.display = "block";
//     this.ageInput.style.display = "block";
    //   this.bodyMassIndexInput.style.display = "block";
    //   this.pressureInput.style.display = "block";
    //     this.descriptionInput.style.display = "block";
    this.lastVisitInput.style.display = "block";
  }
}

// Создаем экземпляр класса CardioVisitForm и инициализируем его
const dentiistVisitForm = new DentiistVisitForm();
dentiistVisitForm.init();
