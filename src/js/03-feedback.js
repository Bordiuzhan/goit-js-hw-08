import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmit);

inputText();
textAreaText();

function onForm(e) {
  const setValue = {
    email: input.value,
    message: textArea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(setValue));
}
function inputText() {
  const savedMessadge = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessadge);
  if (savedMessadge) {
    input.value = savedMessadge.email;
  }
}
function textAreaText() {
  const savedMessadge = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessadge) {
    textArea.value = savedMessadge.message;
  }
}
function onSubmit(e) {
  e.preventDefault();
  if (input.value === '' || textArea.value === '') {
    return console.log('Please fill in all the fields!');
  }
  const savedMessadge = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessadge);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
