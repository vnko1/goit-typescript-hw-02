/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var isWeekend = function (day) {
    return day === 5 /* Days.Saturday */ || day === 6 /* Days.Sunday */;
};
console.log(isWeekend(6 /* Days.Sunday */));
