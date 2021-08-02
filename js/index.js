document.addEventListener('DOMContentLoaded', function() {
  setTimeout(animationTiming, 1);
  fillSelect();
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
}

function resetAnimation() {
  document.querySelectorAll('.block').forEach(elem => {
    elem.classList.toggle("d-none");
  });

  setTimeout(animationTiming, 1);
}

function fillSelect() {
  let carList = $.getJSON( "https://danilovmaxim13.github.io/IPOS-test/bd.json", function(data){
            console.log(data);
      })
}