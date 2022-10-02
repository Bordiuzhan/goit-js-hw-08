import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const setValue = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmit);

inputText();
textAreaText();

function onForm(e) {
  if (e.target.name === 'email') {
    setValue[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(setValue));
  }
  if (e.target.name === 'message') {
    setValue[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(setValue));
  }
}
function inputText() {
  const savedMessadge = JSON.parse(localStorage.getItem(STORAGE_KEY));
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
  const savedMessadge = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessadge);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
