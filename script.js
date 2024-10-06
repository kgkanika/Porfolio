
const hamburger = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.cross');

// Initially hide the cross icon
cross.style.display = 'none';

// Show the sidebar when clicking on the hamburger
hamburger.addEventListener('click', () => {
    sidebar.classList.add('sidebarGo'); // Slide the sidebar into view
    hamburger.style.display = 'none'; // Hide the hamburger
    cross.style.display = 'block'; // Show the cross icon
});

// Hide the sidebar when clicking on the cross
cross.addEventListener('click', () => {
    sidebar.classList.remove('sidebarGo'); // Slide the sidebar out of view
    hamburger.style.display = 'block'; // Show the hamburger
    cross.style.display = 'none'; // Hide the cross icon
});
