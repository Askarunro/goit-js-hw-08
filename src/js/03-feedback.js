import '../css/common.css';
import '../css/01-gallery.css';
import '../css/03-feedback.css';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
populateTextarea();
refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', onInputInput);
// refs.textarea.addEventListener('input', onTextareaInput);
const formData = {};

refs.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ formData }));

  console.log(formData);
});

// function populateTextarea()

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
const obj = JSON.parse('{formData}');
// function onInputInput(evt) {
//   const email = evt.target.value;
//   localStorage.setItem('feedback-form-state1', email);
//   console.log(email);
// }

// // function onTextareaInput(evt) {
// //   const message = evt.target.value;
// //   localStorage.getItem('feedback-form-state', message);
// //   console.log(message);
// // }
// const a = {};
// a = JSON.parse('formData');
function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    console.log(savedMessage);
    // console.log(JSON.parse('formData'));
    // refs.textarea.message = JSON.parse(formData);
  }
}
