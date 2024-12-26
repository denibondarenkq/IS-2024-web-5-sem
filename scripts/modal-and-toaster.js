document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');

    openBtn.onclick = () => modal.style.display = 'block';
    closeBtn.onclick = () => modal.style.display = 'none';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            toastr.success('Добро пожаловать, admin!', 'Успех');
            modal.style.display = 'none';
        } else {
            toastr.error('Вы еще не готовы к будущему!', 'Ошибка');
        }
    });
});