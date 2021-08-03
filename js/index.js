let mark, model, year, dateStart, dateEnd;

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(animationTiming, 1);
});

function animationTiming() {
  blockAnimation();
  setTimeout(circleAnimation, 1800);
}

function resetAnimation() {
  document.querySelectorAll('.block').forEach(elem => {
    elem.classList.toggle("d-none");
  });

  document.querySelector('.information').classList.toggle("d-none");
  setTimeout(animationTiming, 1);
}


// Анимации 4-х блоков
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
    });
  }, 2000);
}


// Анимации круглой кнопки нажать
function circleAnimation() {
  let circleBtn = document.querySelector('.circle');
  circleBtn.classList.toggle("d-none");

  setTimeout(() => circleBtn.classList.toggle("circleBtnAnimationStart"), 1);

  setTimeout(() => document.querySelector('.circle').disabled = false, 3000);
}

function clickCircleBtn() {
  let circleBtn = document.querySelector('.circle');
  circleBtn.classList.toggle("circleBtnAnimationStart");
  circleBtn.disabled = true;
  circleBtn.classList.toggle("d-none");

  formAnimation();
}