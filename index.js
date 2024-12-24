//search and display menu
 document.getElementById('searchButton').addEventListener('click', function() {
     const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const searchContainer= document.getElementById("result")
    if (searchQuery === '') {
        alert('Please enter a search term');
    } else {
        // In a real scenario, here you would process the search (e.g., search through a list of data, or make an API call)
         searchContainer.innerHTML = `<p>Results for: <strong>${searchQuery}</strong></p>`;
    }
});
// Mock API URL
const apiUrl = 'http://localhost:3000/menu'; // Replace with actual API if available

// Fetch Menu Items from API
async function fetchMenu() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = ''; // Clear existing content
  
    data.forEach((item, index) => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <img src="https://via.placeholder.com/150?text=Dish+${index + 1}" alt="Dish ${index + 1}">
        <h3>${item.title.substring(0, 20)}...</h3>
        <p>${item.body.substring(0, 50)}...</p>
        <span>$${(10 + index * 5).toFixed(2)}</span>
      `;
      menuContainer.appendChild(menuItem);
    });
  } catch (error) {
    console.error('Error fetching menu:', error);
    document.getElementById('menuItems').innerHTML = '<p>Failed to load menu items. Please try again later.</p>';
  }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('All fields are required!');
    return;
  }

  alert('Message sent successfully!');
  this.reset();
});
// Select the button
const button = document.getElementById('submit');

// Add an event listener for the 'click' event
button.addEventListener('order', function() {
  alert('Message sent successfully!');
});

// Attach search function to input's `input` menu
searchInput.addEventListener("input", searchmenu);

// Initialize Menu on Page Load
document.addEventListener('DOMContentLoaded', fetchMenu);
