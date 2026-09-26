document.addEventListener('DOMContentLoaded', function () {
  // Select the ion-menu (sidebar) and its links
  const menu = document.querySelector('ion-menu');
  const menuLinks = menu.querySelectorAll('.nav-link');
  const menuButton = document.querySelector('[menuToggle]');

  // Function to handle the sidebar on resize (responsive behavior)
  function closeSidebarOnResize() {
    if (window.innerWidth >= 768) {
      // Close the menu if it's open on desktop
      if (menu.open) {
        menu.close();
      }
    } else {
      // Make sure the menu can open on mobile
      if (!menu.open) {
        menu.style.display = ''; // Allow the sidebar to be opened again
      }
    }
  }

  // Trigger the resizing logic initially and on window resize
  window.addEventListener('resize', closeSidebarOnResize);
  closeSidebarOnResize();  // Run on initial load

  // Open menu programmatically when the menu button is clicked (burger menu on mobile)
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      menu.open();
    });
  }

  // Close the menu when a link is clicked in the sidebar
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.close();
    });
  });
});