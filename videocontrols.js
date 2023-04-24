function updateVideoControls() {
    const gifContainers = document.querySelectorAll('.gif');
    const isMobile = window.innerWidth <= 600;
  
    gifContainers.forEach((container) => {
      const video = container.querySelector('video');
      if (video) {
        if (isMobile) {
          video.removeAttribute('controls');
        } else {
          video.setAttribute('controls', '');
        }
      }
    });
  }
  
  // Run the function on initial load
  updateVideoControls();
  
  // Add a resize event listener to update controls when the screen width changes
  window.addEventListener('resize', updateVideoControls);
  