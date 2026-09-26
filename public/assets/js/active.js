document.addEventListener('DOMContentLoaded', function () {
  const page = window.location.pathname;

  const homeBtns = document.querySelectorAll('.home-btn');
  const archiveBtns = document.querySelectorAll('.archive-btn');
  const aboutBtns = document.querySelectorAll('.about-btn');
  const contactBtns = document.querySelectorAll('.contact-btn');

  // Remove active from everything first
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Check specific pages
  if (page.includes('/archive')) {
    archiveBtns.forEach(btn => btn.classList.add('active'));

  } else if (page.includes('/about')) {
    aboutBtns.forEach(btn => btn.classList.add('active'));

  } else if (page.includes('/contact')) {
    contactBtns.forEach(btn => btn.classList.add('active'));

  } else {
    // If we're not on archive/about/contact,
    // we're on the homepage
    homeBtns.forEach(btn => btn.classList.add('active'));
  }
});
