document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll('.grid-item');

        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    const addToCartButtons = document.querySelectorAll('.product-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Товар добавлен в корзину!');
        });
    });

    const newsletterForm = document.querySelector('#newsletter form');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const agreementCheckbox = document.getElementById('agreement');

        if (agreementCheckbox.checked) {
            alert(`Спасибо за подписку, ваша почта: ${emailInput.value}! Будем рады уведомлять вас о наших обновлениях!`);
        } else {
            alert('Пожалуйста, согласитесь на обработку персональных данных.');
        }
    });
});