import { visitCards } from "../classCards/Cards.js";
import { token } from "../classModal/ModalLogin.js";

export default class Visit {
    constructor() {
        this.modal = document.getElementById("modal-create-visit");
        this.selectDoctors = this.modal.querySelectorAll(".select-doctors")[0];
        this.lastVisitInput = document.getElementById("lastVisit");
    }

    getElements() {}

    // Метод инициализации класса добавляет обработчики событий для выпадающего меню докторов и кнопки отправки формы.
    // Также он вызывает метод showInputs(), который скрывает некоторые поля формы при инициализации.
    init() {
        const form = document.getElementById("visit-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            return this.submit();
        });
        this.showInputs();
        const close = this.modal.querySelector(".btn-close");
        close.addEventListener("click", function () {
            form.reset();
        });
    }

    // Метод showInputs() скрывает некоторые поля формы, показывая только необходимые поля для заполнения при инициализации класса.
    showInputs() {
        this.titleInput = this.modal.querySelectorAll(".title")[0];
        this.priorityInputs = this.modal.querySelectorAll('input[name="priority"]');
        this.nameInput = document.getElementById("name");
        this.submitBtn = document.getElementById("submit-btn");
        this.phoneInput = document.getElementById("phone");
        this.dateInput = document.getElementById("date");
        this.dateTitle = document.getElementById("dateTitle");
        this.ageInput = document.getElementById("age");
        this.descriptionInput = document.getElementById("description");
        this.bmiInput = document.getElementById("bodyMassIndex");
        this.dofheartInput = document.getElementById("diseasesOfHeart");
        this.pressureInput = document.getElementById("pressure");

        this.selectDoctors.style.display = "block"; // показывает выпадающее меню докторов
        this.titleInput.style.display = "block"; // показывает поле для ввода названия посещения
        this.priorityInputs.forEach((input) => {
            input.style.display = "block";
        }); // показывает радиокнопки для выбора приоритета посещения
        this.submitBtn.style.display = "block"; // показывает кнопку отправки формы
        this.nameInput.style.display = "none";
        this.phoneInput.style.display = "none";
        this.dateInput.style.display = "none";
        this.dateTitle.style.display = "none";
        this.ageInput.style.display = "none";
        this.descriptionInput.style.display = "none";
        this.bmiInput.style.display = "none";
        this.dofheartInput.style.display = "none";
        this.pressureInput.style.display = "none";
        this.lastVisitInput.style.display = "none";
    }

    submit() {
        const form = document.getElementById("visit-form");
        const dataValue = new FormData(form);

        // Создаем объект formData, который будет содержать значения полей формы
        const formData = {
            name: dataValue.get("name"),
            doctor: dataValue.get("doctor"),
            purpose: dataValue.get("purpose"),
            priority: dataValue.get("priority"),
            phone: dataValue.get("phone"),
            date: dataValue.get("date"),
            status: "open",
            age: dataValue.get("age"),
            description: dataValue.get("description"),
            bodyMassIndex: dataValue.get("bodyMassIndex"),
            diseasesOfHeart: dataValue.get("diseasesOfHeart"),
            pressure: dataValue.get("pressure"),
            lastVisit: dataValue.get("lastVisit"),
        };

        // Проверяем дату и устанавливаем соответствующий статус
        const status = this.checkDate(formData.date);

        formData.status = status;
        form.reset();
        this.closeModal = this.modal.querySelector(".btn-close");
        visitCards.createCard(token, formData);
        this.closeModal.click();
    }

    checkDate(date) {
        // Создаем объекты Date для текущей даты и выбранной даты
        const now = new Date();
        const selectedDate = new Date(date);
        // Сравниваем выбранную дату с текущей датой и возвращаем соответствующий статус
        if (selectedDate < now) {
            return "Done";
        } else {
            return "Open";
        }
    }
}

const form = new Visit();

form.init();

const mainForm = document.getElementById("visit-form");
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        mainForm.reset();
    }
});
