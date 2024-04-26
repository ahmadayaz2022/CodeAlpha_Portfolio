document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.1 
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    sections.forEach(section => observer.observe(section));
  
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation"); 
        } else {
          entry.target.classList.remove("animation"); 
        }
      });
    }
  });