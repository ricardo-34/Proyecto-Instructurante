const openRegFormButton = document.getElementById('open-reg-form');
const registrationForm = document.getElementById('registration-form');

openRegFormButton.addEventListener('click', () => {
  registrationForm.classList.remove('hidden');
});
