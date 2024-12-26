document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('commentsContainer');
    const preloader = document.getElementById('commentsPreloader');

    const fetchComments = async () => {
        const randomId = Math.random() > 0.5 ? 100 : 200;
        const filter = randomId === 100 ? 'id_gte=100' : 'id_lte=200';

        try {
            preloader.style.display = 'block';

            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?${filter}`);
            if (!response.ok) throw new Error('Ошибка загрузки данных');

            const comments = await response.json();
            displayComments(comments);
        } catch (error) {
            showError('⚠ Что-то пошло не так. Проверьте соединение с интернетом или повторите попытку позже.');
        } finally {
            preloader.style.display = 'none';
        }
    };

    const showError = (message) => {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;

        const existingError = document.querySelector('.error-message');
        if (existingError) existingError.remove();

        commentsContainer.appendChild(errorElement);
    };
    const displayComments = (comments) => {
        commentsContainer.innerHTML = '';
        comments.forEach((comment) => {
            const commentCard = document.createElement('div');
            commentCard.classList.add('comment-card');

            const author = document.createElement('div');
            author.classList.add('comment-card__author');
            author.textContent = comment.name;

            const email = document.createElement('div');
            email.classList.add('comment-card__email');
            email.textContent = comment.email;

            const body = document.createElement('div');
            body.classList.add('comment-card__body');
            body.textContent = comment.body;

            commentCard.append(author, email, body);
            commentsContainer.appendChild(commentCard);

            commentCard.addEventListener('mouseenter', () => {
                commentCard.style.opacity = '1';
                commentCard.style.transform = 'translateY(0)';
            });

            commentCard.addEventListener('mouseleave', () => {
                commentCard.style.opacity = '0';
                commentCard.style.transform = 'translateY(10px)';
            });
        });
    };

    fetchComments();
});