// Javascript to make it dark theme
document.getElementById('theme-switcher').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from actually navigating
    document.body.classList.toggle('dark-theme');
    // Optionally save the theme preference in localStorage
    console.log("Switched to Dark Theme")
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
