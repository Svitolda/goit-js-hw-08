import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const form = document.querySelector('.feedback-form');
onPageReload();

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onBtnSubmit);

function onInputChange(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onBtnSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Заповніть форму');
  }
  evt.target.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
function onPageReload() {
  if (formData) {
    const entries = Object.entries(formData);
    entries.forEach(function (el) {
      const [key, value] = el;
      form[key].value = value;
    });
  }
}