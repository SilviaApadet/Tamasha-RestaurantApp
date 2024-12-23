document.getElementById('searchButton').addEventListener('click', function() {
    var searchQuery = document.getElementById('name').value.trim();
    
    if (searchQuery === '') {
        alert('Please enter a search term');
    } else {
        // In a real scenario, here you would process the search (e.g., search through a list of data, or make an API call)
        document.getElementById('results').innerHTML = `<p>Results for: <strong>${this.attributeStyleMap}</strong></p>`;
    }
});
// Mock API URL
const apiUrl = '//wsl.localhost/Ubuntu-20.04/home/abstract/Development/code/phase-1/Tamasha-RestaurantApp/index.html?name=Ijaka&email=tonnymartial45%40gmail.com&message=heyy%0D%0A#menu);'; // Replace with actual API if available
// Fetch Menu Items from API
async function fetchMenu() {
  try {
    const response = await fetch //wsl.localhost/Ubuntu-20.04/home/abstract/Development/code/phase-1/Tamasha-RestaurantApp/index.html?name=Ijaka&email=tonnymartial45%40gmail.com&message=heyy%0D%0A#menu);
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

// Initialize Menu on Page Load
document.addEventListener('DOMContentLoaded', fetchMenu);