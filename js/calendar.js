function calendarAnimation() {
  document.querySelectorAll('.block').forEach(elem => {
    elem.classList.toggle("d-none");
    setTimeout(() => elem.style.transform = "none", 1);
  });

  setTimeout(() => {
    document.querySelector('.calendar').classList.toggle("d-none");
  }, 2010);
}

function createCalendar(year, month, deliveryStart, deliveryEnd) {
  let nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  let lastDate = new Date(year, month + 1 , 0).getDate();
  let date = new Date(year, month, lastDate);

  let firstDayWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let lastDayWeek = new Date(date.getFullYear(), date.getMonth(), lastDate).getDay();

  let calendar = '<tr>';

  //Заполняем первую строку пустыми ячейками
  if (firstDayWeek != 0) {
    for (let i = 1; i < firstDayWeek; i++) {
      calendar += '<td class="unsuitable"></td>';
    }
  } else {
    for (let i = 0; i < 6; i++) {
      calendar += '<td class="unsuitable"></td>';
    }
  }

  //Заполняем всю таблицу
  for (let i = 1; i <= lastDate; i++) {
    let actualDay = new Date(year, month, i);

    if (actualDay.getTime() >= deliveryStart.getTime() &&  actualDay.getTime() <= deliveryEnd.getTime()) {
      calendar += '<td class="suitable" onclick="clickDate(\'' + i + '.' + month + '.' + year + '\')">' + i + '</td>';
    } else {
      calendar += '<td class="unsuitable">' + i + '</td>';
    }

    if (actualDay.getDay() == 0) {
      calendar += '</tr><tr>';
    }
  }

  for (let i = lastDayWeek; i < 7; i++) {
    calendar += '<td class="unsuitable"></td>';
  }

  document.querySelector('.calendar__body').innerHTML = calendar;

  let headerCalendar = document.querySelector('.calendar__header');
  headerCalendar.innerHTML = nameMonth[+month] + ' ' + year;
  headerCalendar.dataset.month = month;
  headerCalendar.dataset.year = year;
}


function controlCalendar(index) {
  let headerCalendar = document.querySelector('.calendar__header');
  let year = headerCalendar.dataset.year;
  let month = parseFloat(headerCalendar.dataset.month) + index;
  
  if (month > 11){
    year++;
    month = 0;
  }  else if (month < 0) {
    year--;
    month = 11;
  }
  
  createCalendar(year, month, dateStart, dateEnd);
}

function clickDate(dateDelivery) {
  document.querySelectorAll('.block').forEach(elem => {
    elem.classList.toggle("d-none");
  });
  document.querySelector('.calendar').classList.toggle("d-none");

  document.querySelector('.information').classList.toggle("d-none");
  document.querySelector('.information__text').innerHTML = "Вы выбрали "+ mark + " " + model + " " + year +"<br> Ожидайте доставку " + dateDelivery;
}