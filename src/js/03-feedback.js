import throttle from "lodash.throttle"; 

const STORAGE_KEY = 'feedback-msg';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const form = document.querySelector(".feedback-form");
// const textarea = document.querySelector(".feedback-form textarea");
onPageReload();


form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onBtnSubmit);

function onInputChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY,  JSON.stringify(formData));
    // evt.currentTarget.reset();
    console.log(formData)
}

function onBtnSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}

function onPageReload(evt) {
     if (formData) {
      let { email, message } = form.elements;
      email.value = formData.email || '';
      message.value = formData.message || '';
    }
}