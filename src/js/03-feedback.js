// import throttle from "lodash.throttle"; 

// const STORAGE_KEY = feedback-msg;

const form = document.querySelector(".feedback-form");

const textarea = document.querySelector(".feedback-form textarea");

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('submit', onTextInput);

function onFormSubmit(evt) {
    // evt.preventDefault();
    // evt.currentTarget.reset();
}

function onTextInput(evt) {
    const message = evt.currentTarget.value;
    
    localStorage.setItem('feedback-msg', message);
}