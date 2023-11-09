const button = document.querySelector('.checkbox') as HTMLInputElement;

// On page load, set the theme based on localStorage
document.addEventListener('DOMContentLoaded', event => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    // Set the checkbox based on the theme
    button.checked = currentTheme === 'dark';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    button.checked = true; // Since default is dark, checkbox should be checked
  }
});

button.addEventListener('click', () => {
  switchTheme();
});

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    button.checked = false; // Uncheck the checkbox
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    button.checked = true; // Check the checkbox
  }
}
