import Throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const { email, message } = feedbackForm.elements;

const saveData = () => {
  data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

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

feedbackForm.addEventListener('input', Throttle(saveData, 500));

window.addEventListener('load', loadData);

feedbackForm.addEventListener('submit', removeData);
