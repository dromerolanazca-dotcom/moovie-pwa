const input = document.getElementById('inputName');
const btn = document.getElementById('applyBtn');
const username = document.getElementById('username');

btn.addEventListener('click', () => {
  const name = input.value.trim();
  username.textContent = name || 'Invitado';
});