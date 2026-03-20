const KEY_SRORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

let formData = {
  email: '',
  message: '',
};

if (localStorage.getItem(KEY_SRORAGE)) {
  let { email, message } = JSON.parse(localStorage.getItem(KEY_SRORAGE));
  formData = { email, message };
  form.elements.email.value = email;
  form.elements.message.value = message;
}
let { email, message } = form.elements;

function onInput() {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(KEY_SRORAGE, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    localStorage.removeItem(KEY_SRORAGE);
    email.value = '';
    message.value = '';
    console.log(formData);
  }
}
