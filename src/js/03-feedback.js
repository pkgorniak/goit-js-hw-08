import Throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const { email, message } = feedbackForm.elements;

const saveData = Throttle(() => {
  data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

const loadData = () => {
  const previousData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (previousData !== null) {
    email.value = previousData.email;
    message.value = previousData.message;
  }
};

const removeData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

feedbackForm.addEventListener('input', saveData);

window.addEventListener('load', loadData);

feedbackForm.addEventListener('submit', removeData);
