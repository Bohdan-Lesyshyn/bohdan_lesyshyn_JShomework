
 const ADMIN_PASSWORD = "1000";
 let message;

 let input = prompt("Введіть пароль");

 if (input === null) {
   message = "Скасовано користувачем!";
 } else if (input === ADMIN_PASSWORD) {
   message = "Ласкаво просимо!";
 } else {
   message = "Доступ заборонений, невірний пароль!";
 }
 alert(message);


