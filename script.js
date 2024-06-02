const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  const form = document.querySelector(".form");
  const nameInput = document.querySelector("#name");
  const secondNameInput = document.querySelector("#secondName");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  
  
  form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();
  
    // Здесь твой код
    fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: hfgryegvb'
      },
      body: JSON.stringify({
        "name": nameInput.value,
        "secondName": secondNameInput.value,
        "phone": phoneInput.value,
        "email": emailInput.value,
        "agree": true
      })
    })
      .then((result) => {
        if (result.ok) {
          alert('Отправлено!');
          form.reset();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert('Ошибка, попробуйте еще раз!');
      })
  
  })
  
  
  
  
  fetch(`https://polinashneider.space/user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: hfgryegvb'
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
    })
});
