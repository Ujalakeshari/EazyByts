// Menu API endpoint
const menuApi = 'https://example.com/api/menu';

// Order API endpoint
const orderApi = 'https://example.com/api/orders';

// Delivery API endpoint
const deliveryApi = 'https://example.com/api/delivery';

// Login API endpoint
const loginApi = 'https://example.com/api/login';

// Get menu items from API
fetch(menuApi)
    .then(response => response.json())
    .then(data => {
        const menuList = document.getElementById('menu-list');
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
           menuList.appendChild(listItem);
        });
    });

// Handle order placement
document.getElementById('order-form').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(orderApi, {
        method: 'POST',
        body: formData
    })
       .then(response => response.json())
       .then(data => {
            console.log(data);
            // Update order list
            const orderList = document.getElementById('order-list');
            const orderItem = document.createElement('li');
            orderItem.textContent = `Order #${data.id} placed successfully`;
            orderList.appendChild(orderItem);
        });
});

// Handle delivery tracking
fetch(deliveryApi)
   .then(response => response.json())
   .then(data => {
        const deliveryStatus = document.getElementById('delivery-status');
        deliveryStatus.textContent = `Delivery status: ${data.status}`;
    });

// Handle login
document.getElementById('login-form').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(loginApi, {
        method: 'POST',
        body: formData
    })
       .then(response => response.json())
       .then(data => {
            console.log(data);
            // Update login status
            const loginStatus = document.getElementById('login-status');
            loginStatus.textContent = `Logged in as ${data.username}`;
        });
});