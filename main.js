document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for all internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  for (const internalLink of internalLinks) {
    internalLink.addEventListener('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scroll({
      top: targetElement.offsetTop - 50,
      left: 0,
      behavior: 'smooth'
    });
  }

  // Toggle project details
  const projectDetails = document.querySelectorAll('.project');

  for (const projectDetail of projectDetails) {
    projectDetail.addEventListener('click', toggleProjectDetails);
  }

  function toggleProjectDetails() {
    this.classList.toggle('active');
  }
});
