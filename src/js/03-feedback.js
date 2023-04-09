import throttle from "lodash.throttle"; 

const STORAGE_KEY = 'feedback-msg';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const form = document.querySelector("[required]");
// const textarea = document.querySelector(".feedback-form textarea");
onPageReload();


form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onBtnSubmit);

function onInputChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY,  JSON.stringify(formData));
    // evt.currentTarget.reset();
    
}

function onBtnSubmit(evt) {
    evt.preventDefault();
    if (formData.email === '' || formData.message === ''){
        return alert ('Заповніть форму');
    }
    evt.target.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}


function onPageReload() {
     if (formData) {
      let { email, message } = form.elements;
      email.value = formData.email || '';
      message.value = formData.message || '';
    }
}