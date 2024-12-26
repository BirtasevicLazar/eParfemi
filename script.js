let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(item.name + ' je dodat u korpu!');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showNotification(message) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

function checkout() {
    if (cart.length === 0) {
        showNotification('Korpa je prazna!');
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'korpa.html';
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    const checkoutBtn = document.querySelector('.checkout-container');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (hero) {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > heroBottom) {
                checkoutBtn.style.opacity = '1';
                checkoutBtn.style.visibility = 'visible';
            } else {
                checkoutBtn.style.opacity = '0';
                checkoutBtn.style.visibility = 'hidden';
            }
        }
    });
});





function viewDetails(name, price, description, imageUrl) {
    window.location.href = './parfem/parfem.html?name=' + encodeURIComponent(name) + 
                          '&price=' + encodeURIComponent(price) + 
                          '&description=' + encodeURIComponent(description) +
                          '&imageUrl=' + encodeURIComponent('../' + imageUrl);
}

