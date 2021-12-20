const showPassButton = document.querySelector('.login-form__show-password');
const passwordButton = document.querySelector('.login-form__input--password');
const showIcon = document.querySelector('.closed-eye');

showPassButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if(passwordButton.type === 'password') {
    passwordButton.type = 'text';
    showIcon.classList.add('closed-eye--open');
  } else {
    passwordButton.type = 'password';
    showIcon.classList.remove('closed-eye--open');
  }
});

