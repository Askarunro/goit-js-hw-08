import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/01-gallery.css';
import '../css/03-feedback.css';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onInputInput);
refs.textarea.addEventListener('input', onTextareaInput);
populateTextarea();
// let formData = {};

if (
  localStorage.getItem('feedback-form-state') &&
  localStorage.getItem('feedback-form-state-email')
) {
  populateTextarea();
  refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
  refs.input.addEventListener('input', throttle(onInputInput, 500));
} else {
  refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
  refs.input.addEventListener('input', throttle(onInputInput, 500));
}

// if(localStorage.getItem('feedback-form-state')){
//     populateTextarea();
//     refs.form.addEventListener('input', throttle(onFormInput, 500))
//   }
//   else{refs.form.addEventListener('input', throttle(onFormInput, 500));}

// function onFormInput(evt) {
//  formData[evt.target.name] = evt.target.value;
//   console.log(formData)
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData))
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem('feedback-form-state');
//   if (savedMessage) {
//     const dataNew = JSON.parse(savedMessage);
//     refs.input.value = dataNew.email;
//     refs.textarea.value = dataNew.message
//   }
// }

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  localStorage.removeItem('feedback-form-state-email');
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem('feedback-form-state', message);
  // console.log(message);
}

function onInputInput(evt) {
  const email = evt.target.value;
  localStorage.setItem('feedback-form-state-email', email);
  // console.log(email);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  // console.log('hi')
  const savedMessage2 = localStorage.getItem('feedback-form-state-email');
  if (savedMessage && savedMessage2) {
    // const dataNew = JSON.parse(savedMessage);
    refs.input.value = savedMessage2;
    // console.log(savedMessage2)
    refs.textarea.value = savedMessage;
  }
}
