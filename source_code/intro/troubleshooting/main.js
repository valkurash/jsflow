"use strict"

/* На данном этапе необязательно понимать почему та или иная ошибка возникла,
 об это будет рассказываться в других частях курса. 
 Справа от строки указывается вариант решения ошибки. */

// используется необъявленная переменная
undeclaredVariable = "Успешное начало программы"; // let undeclaredVariable = "Успешное начало программы";

console.log(undeclaredVariable);

function buggy(param) {
  if (param === "show") { // Сравнение строки чувствительно к регистру
    // debugger;
    document.getElementById("content").innerHTML = "<img width=\"300\" src=\"images/cat.gif\"/>";
    document.getElementById("header").innerHTML = "Страница без ошибок. Спасибо!";
  }
}

buggy("Show"); // buggy("show")
