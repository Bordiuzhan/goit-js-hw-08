const form = document.querySelector('.feedback-form');

form.addEventListener('input', onForm);

const setValue = {
  email: 'ret',
  message: '',
};
form[0].textContent = setValue.email;

console.log(form[0].textContent);
function onForm(e) {
  if (e.target.name === 'email') {
    setValue.email = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(setValue));
  }
  if (e.target.name === 'message') {
    setValue.message = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(setValue));
  }
}
