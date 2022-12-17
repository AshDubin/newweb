function toggleSubMenu() {
  // Get the sub menu element
  var subMenu = document.querySelector('.submenu');

  // Toggle the display of the sub menu
  if (subMenu.style.display === 'block') {
    subMenu.style.display = 'none';
  } else {
    subMenu.style.display = 'block';
  }
}
