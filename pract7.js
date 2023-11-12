// Обработка исключений для класса "Калькулятор"
class Calculator {
  divide(x, y) {
    if (y === 0) {
      throw new Error('Деление на 0');
    }
    return x / y;
  }

  isValidNumber(num) {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num) || num < -Math.pow(2, 64) || num > Math.pow(2, 64)) {
      throw new Error('Недопустимый размер числа');
    }
    return true;
  }
}

// Обработка исключений для класса "Пользователь"
class User {
  register(username, password) {
    if (!username || !password) {
      throw new Error('Введите правильные данные для регистрации');
    }
    // Регистрация пользователя
  }

  login(username, password) {
    if (/* проверка на корректность логина и пароля */) {
      throw new Error('Неправильная пара логин/пароль');
    }
    // Логин пользователя
  }

  logout(username, password) {
    if (/* проверка на корректность логина и пароля или авторизацию */) {
      throw new Error('Неправильная пара логин/пароль или пользователь не авторизован');
    }
    // Выход пользователя
  }
}
