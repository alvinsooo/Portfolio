document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-bar div');

    navItems.forEach(item => {
        item.addEventListener('click', function() {

            navItems.forEach(nav => nav.classList.remove('active'));

            this.classList.add('active');
        });
    });
});



// List of items
const items = ['Python', 'PHP', 'Laravel', 'Java', 'JavaScript', 'TypeScript', 'Nuxt', 'Nest', "UI/UX", 'Usability', 'Object Oriented Programming', 'Problem Solving', 'Critical Thinking', 'Data Structures', 'Figma', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git' 
];

// Get the container element
const container = document.getElementById('skill-container');

// Loop through the items and create elements
items.forEach(item => {
    // Create a new div element
    const item_div = document.createElement('div');
    item_div.classList.add('skill-item');
    // Set the content of the div
    item_div.textContent = item;
    
    // Append the new div to the container
    container.appendChild(item_div);
});

