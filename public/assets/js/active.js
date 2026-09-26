document.addEventListener('DOMContentLoaded', function () {
    
  let page = window.location.pathname; // Get only the path part (e.g., "/about", "/archive", etc.)
  
  // Set active class for specific buttons
  setActive("archive", ".archive-btn");
  setActive("about", ".about-btn");
  setActive("contact", ".contact-btn");
  setActive("/", ".home-btn");  // Handle homepage case

  //console.log("this page is" +  page);
  
  function setActive(path, elemClass) {
    const menuLinks = document.querySelectorAll(elemClass); // Get the specific element
    const home = document.querySelectorAll(".home-btn")
    // Check if the current page matches the name (or if it's the homepage for "")
    if (page == "/" || page == "") {
        
      // console.log("this page is either "/" or "");
        
      home.forEach(function(element) {
        element.classList.add("active");
      });// Add the "active" class
    } else if (page.includes(path)) {
      
        // Add "active" class if the current page matches the path
        menuLinks.forEach(function(menuLink) {
           
             if (page.includes(path)) {
              // If the current path matches (e.g., "/about" matches with .about-btn)
              menuLink.classList.add("active");
              home.forEach(function(element) {
                element.classList.remove("active");
              });// Add the "active" class
                
            }
        });
    }}
});
