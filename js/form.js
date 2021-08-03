let carList = [];

function formAnimation() {
  fillSelect();

  let form = document.querySelector(".form");
  form.classList.toggle("formAnimation");
}

function fillSelect() {
  var xhr = new XMLHttpRequest ();
  xhr.open("GET", "https://danilovmaxim13.github.io/IPOS-test/bd.json", true);
  xhr.onload = function() {
    carList = JSON.parse(xhr.responseText);

    let marks = new Set();
    let models = new Set();
    let years = new Set();

    carList.forEach(function(item) {
      marks.add(item["mark"]);
      models.add(item["model"]);
      years.add(item["year"]);
    });

    updateOption("mark", marks);
    updateOption("model", models);
    updateOption("year", years);
  }

  xhr.send();
}

function updateOption(className, optionList) {
  let select = document.querySelector("." + className);
  select.innerHTML = "<option disabled hidden selected value = \"\"></option>";

  optionList.forEach(item => {
    let option = document.createElement("option");
    if (optionList.size === 1) {
      select.innerHTML = "";
      option.selected = true;
    }
    option.textContent = item;
    option.value = item;
    select.appendChild(option);
  })
}

function changeSelect() {
  let marks = new Set();
  let models = new Set();
  let years = new Set();

  let selectMark = document.querySelector(".mark").value;
  let selectModel = document.querySelector(".model").value;
  let selectYear = document.querySelector(".year").value;

  carList.forEach(function(item) {
    if ((item["mark"] === selectMark || !selectMark) &&
        (item["model"] === selectModel || !selectModel) &&
        (item["year"] === selectYear || !selectYear)) {
          marks.add(item["mark"]);
          models.add(item["model"]);
          years.add(item["year"]);
        }
  });

  if (marks.size === 1 && models.size === 1 && years.size === 1) {
    submitAnimation();
  }

  updateOption("mark", marks);
  updateOption("model", models);
  updateOption("year", years);
}


//Кнопка "Доставить"
function submitAnimation() {
  let submitBtn = document.querySelector(".submit");
  submitBtn.classList.toggle("d-none");

  setTimeout(function() {
    submitBtn.classList.toggle("submitAnimation");
  }, 1);
}

function clickSubmit() {
  let submitBtn = document.querySelector(".submit");
  submitBtn.classList.toggle("submitAnimation");
  submitBtn.classList.toggle("d-none");

  let form = document.querySelector(".form");
  form.classList.toggle("formAnimation");

  mark = document.querySelector(".mark").value;
  model = document.querySelector(".model").value;
  year = document.querySelector(".year").value;

  carList.forEach(function(item) {
    if ((item["mark"] === mark) &&
        (item["model"] === model) &&
        (item["year"] === year)) {
          let rangeDelivery = item["delivery"].split("-");
          let deliveryStart = rangeDelivery[0].split(".");
          let deliveryEnd = rangeDelivery[1].split(".");

          dateStart = new Date(deliveryStart[2], deliveryStart[1] - 1, deliveryStart[0]);
          dateEnd = new Date(deliveryEnd[2], deliveryEnd[1] - 1, deliveryEnd[0]);

          calendarAnimation();
          createCalendar(dateStart.getFullYear(), dateStart.getMonth(), dateStart, dateEnd);
        }
  });
}