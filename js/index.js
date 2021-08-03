document.addEventListener('DOMContentLoaded', function() {
  setTimeout(animationTiming, 1);
});

function animationTiming() {
  blockAnimation();
  setTimeout(circleAnimation, 1800);
}

function blockAnimation() {
  let blockList = document.querySelectorAll('.block');
  let translateValue = [
    ["-50vw", "-50vh"],
    ["50vw", "-50vh"],
    ["-50vw", "50vh"],
    ["50vw", "50vh"],
  ];

  for (let i = 0; i < 4; i++) {
    blockList[i].style.transform = "translate(" + translateValue[i][0] + ", " + translateValue[i][1] + ")";
  }

  setTimeout( function(){
    document.querySelectorAll('.block').forEach(elem => {
      elem.classList.toggle("d-none");
      elem.style.transform = "none";
    });
  }, 2000);
}

function circleAnimation() {
  let circleBtn = document.querySelector('.circle');
  circleBtn.classList.toggle("circleBtnAnimationStart");

  setTimeout(function(){ 
    document.querySelector('.circle').disabled = false;
  }, 3000);
}

function formAnimation() {
  let circleBtn = document.querySelector('.circle');
  circleBtn.classList.toggle("circleBtnAnimationStart");
  circleBtn.disabled = true;

  let form = document.querySelector('.form');
  form.classList.toggle("formAnimation");
  fillSelect();
}

function resetAnimation() {
  document.querySelectorAll('.block').forEach(elem => {
    elem.classList.toggle("d-none");
  });

  setTimeout(animationTiming, 1);
}
let carList = [];
function fillSelect() {
  var xhr = new XMLHttpRequest ();
  xhr.open("GET", "https://danilovmaxim13.github.io/IPOS-test/bd.json", true);
  xhr.onload = function() {
    carList = JSON.parse(xhr.responseText);
    console.log(carList);

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

  if (selectMark && selectModel && selectYear) {
    console.log("Появление кнопки");
  }

  carList.forEach(function(item) {
    if ((item["mark"] === selectMark || !selectMark) &&
        (item["model"] === selectModel || !selectModel) &&
        (item["year"] === selectYear || !selectYear)) {       
          marks.add(item["mark"]);
          models.add(item["model"]);
          years.add(item["year"]);
        }
  });

  updateOption("mark", marks);
  updateOption("model", models);
  updateOption("year", years);
}