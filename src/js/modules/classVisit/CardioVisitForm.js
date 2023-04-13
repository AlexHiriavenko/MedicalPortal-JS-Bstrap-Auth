import Visit from "./Visit.js";

// Создаем класс CardioVisitForm, который наследуется от класса Visit
class CardioVisitForm extends Visit {
  constructor() {
    // Вызываем конструктор родительского класса
    super();
    // Добавляем новые элементы формы, которые появятся при выборе кардиолога в выпадающем списке
    this.nameInput = document.getElementById("name");
    this.phoneInput = document.getElementById("phone");
    this.dateInput = document.getElementById("date");
    this.dateTitle = document.getElementById("dateTitle");
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
      if (selectedDoctor === "cardiologist") {
        this.showCardioFields();
      } 
      
    });
  }

 
  // Метод, который показывает поля формы, которые появляются при выборе кардиолога
  showCardioFields() {
    this.nameInput.style.display = "block";
    this.phoneInput.style.display = "block";
    this.dateInput.style.display = "block";
    this.dateTitle.style.display = "block";
    this.bodyMassIndexInput.style.display = "block";
    this.dofheartInput.style.display = "block";
    this.pressureInput.style.display = "block";
    this.descriptionInput.style.display = "block";
    this.ageInput.style.display = "block";

    this.lastVisitInput.style.display = "none";

  }
 
}

// Создаем экземпляр класса CardioVisitForm и инициализируем его
const cardioVisitForm = new CardioVisitForm();
cardioVisitForm.init();
