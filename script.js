const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const answer = toggle.parentElement.nextElementSibling;
    const question = toggle.parentElement.querySelector('.q-text');
    const isOpen = answer.style.display === 'block';
    toggle.classList.toggle('toggle-rotated');
    answer.style.display = isOpen ? 'none' : 'block';
    question.classList.toggle('bold-q');
  });
});