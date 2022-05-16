'use strict';

const btns = document.querySelectorAll('.icon-btn');

for (const btn of btns) {
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-answer');
    });
}
