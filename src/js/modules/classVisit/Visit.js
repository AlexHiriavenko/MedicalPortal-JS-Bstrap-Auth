export default class Visit {
  constructor() {
    this.modal = document.getElementById("modal-create-visit");
    this.submitBtn = document.getElementById("submit-btn");
    this.selectDoctors = document.querySelectorAll(".select-doctors")[0];
    this.titleInput = document.querySelectorAll(".title")[0];
    this.priorityInputs = document.querySelectorAll('input[name="priority"]');
    this.nameInput = document.getElementById("name");
    this.phoneInput = document.getElementById("phone");
    this.dateInput = document.getElementById("date");
    this.dateTitle = document.getElementById("dateTitle");
    this.ageInput = document.getElementById("age");
    this.descriptionInput = document.getElementById("description");
    this.bmiInput = document.getElementById("bodyMassIndex");
    this.dofheartInput = document.getElementById("diseasesOfHeart");
    this.pressureInput = document.getElementById("pressure");
    this.lastVisitInput = document.getElementById("lastVisit");

    this.visitFormMain = document.getElementById("visit-form");
  }

  // Метод инициализации класса добавляет обработчики событий для выпадающего меню докторов и кнопки отправки формы.
  // Также он вызывает метод showInputs(), который скрывает некоторые поля формы при инициализации.
  init() {
    this.selectDoctors.addEventListener("change", () => {
      const selectedDoctor =
        this.selectDoctors.options[this.selectDoctors.selectedIndex].value;
      // this.getDoctorStatus(selectedDoctor);
    });

    this.visitFormMain.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("form");
      this.submit();
    });

    this.showInputs();
  }

  // Метод showInputs() скрывает некоторые поля формы, показывая только необходимые поля для заполнения при инициализации класса.
  showInputs() {
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
    // Получаем форму по ID и создаем объект FormData для отправки данных формы на сервер
    const form = document.getElementById("visit-form");
    const dataValue = new FormData(form);
    console.log("values radio", dataValue.get("priority"));
    // console.log("doc", this.selectDoctors);

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

    console.log("formData", formData);


    // Отправляем POST-запрос на сервер с использованием fetch API
    fetch("https://ajax.test-danit.com/api/v2/cards", {
      // mode: "no-cors",
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 42e98cfb-6bcb-4b71-a7ba-7d9cb53b1005', 
      },
      body: JSON.stringify(formData),
    })
    // Когда получаем ответ от сервера, преобразуем его в JSON
      .then((response) => response.json())
      // Когда данные готовы, выводим сообщение в консоль с полученными данными
      .then((data) =>{
        form.reset();
        console.log(data);
      })
      // Если произошла ошибка при запросе, выводим сообщение об ошибке в консоль
      .catch((error) => console.log(error));

    // Сбрасываем значения формы после отправки данных на сервер
    // form.reset();
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
