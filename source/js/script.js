const showPassButton = document.querySelector('.login-form__show-password');
const passwordButton = document.querySelector('.login-form__input--password');
const closedEye = document.querySelector('.closed-eye');
const closedIcon = document.querySelector('.closed-icon');

const caps = document.querySelector('.caps');

showPassButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if(passwordButton.type === 'password') {
    passwordButton.type = 'text';
    closedEye.classList.add('closed-eye--open');
    closedIcon.classList.add('closed-icon--open');
  } else {
    passwordButton.type = 'password';
    closedEye.classList.remove('closed-eye--open');
    closedIcon.classList.remove('closed-icon--open');
  }
});

document.addEventListener('keydown', (evt) => {
  const capsOn = evt.getModifierState && evt.getModifierState('CapsLock');
  if(evt.target.classList.contains('login-form__input')) {
    if(capsOn) {
      const activePlace = document.activeElement.getBoundingClientRect();
      caps.classList.add('caps--open');
      caps.style.top = `${activePlace.top}px`;
      caps.style.left = `${activePlace.left}px`;
    } else {
      caps.style.top = '';
      caps.style.left = '';
      caps.classList.remove('caps--open');
    }
  } else {
    caps.style.top = '';
    caps.style.left = '';
    caps.classList.remove('caps--open');
  }
});
