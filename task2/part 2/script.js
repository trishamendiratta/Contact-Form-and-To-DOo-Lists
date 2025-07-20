
const form = document.getElementById('form');
const input = document.getElementById('form-input');
const list = document.getElementById('list');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', function () {
    list.removeChild(li);
  });

  li.appendChild(removeBtn);
  list.appendChild(li);
  input.value = '';
});
