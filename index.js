// Fetch Menu Items from API

fetch('http://localhost:3000/menu')
.then(res => res.json())
.then(data => {
  const menuContainer = document.getElementById('menuItems');
  menuContainer.innerHTML = ''; // Clear previous content
  
  data.forEach((item)=>{
    const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span>$${item.price}</span>
      `;
      menuContainer.appendChild(menuItem);
  })

})
.catch ((error) =>{
  console.error('Error fetching menu:', error)
  document.getElementById('menuItems').innerHTML =
    '<p>Failed to load menu items. Please try again later.</p>';
  }
)

// Live Search Menu
function searchMenu() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    const title = item.querySelector('h3').innerText.toLowerCase();
    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Attach Search and Form Validation
document.getElementById('searchInput').addEventListener('input', searchMenu);
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  e.target.reset();
});

// Initialize Menu on Page Load
