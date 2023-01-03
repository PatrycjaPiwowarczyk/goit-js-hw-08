import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailData = document.querySelector('input[name="email"]');
const messageData = document.querySelector('textarea[name="message"]');

const storageUpdate = throttle(function (email, message) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}, 500);

form.addEventListener('input', () => {
  storageUpdate(emailData.value, messageData.value);
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const { email, message } = JSON.parse(savedData);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: emailData.value, message: messageData.value });
  localStorage.removeItem('feedback-form-state');
  emailData.value = '';
  messageData.value = '';
});
