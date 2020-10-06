const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login) === false ? true : false;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
    } else {
      return "Такой логин уже используется!";
    }
  } else {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  return "Логин успешно добавлен!";
};
// console.log(isLoginValid("Pold"));
console.log(isLoginUnique(logins, "Poly"));
console.log(isLoginValid("sdasdww"));
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
