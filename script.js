document.addEventListener('DOMContentLoaded', () => {
  const styleImages = document.querySelectorAll('.style-image');
  const closeButtons = document.querySelectorAll('.close-video');
  const videoOverlays = document.querySelectorAll('.video-overlay');
  const navLinks = document.querySelectorAll('header nav ul li a');
  const sections = document.querySelectorAll('section[id]');

  function stopVideo(videoOverlay) {
    const videoElement = videoOverlay.querySelector('video');
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  styleImages.forEach(image => {
    image.addEventListener('click', () => {
      const videoId = image.dataset.videoId;
      const videoOverlay = document.getElementById(videoId);

      if (videoOverlay) {
        videoOverlays.forEach(overlay => {
          if (overlay.classList.contains('active') && overlay !== videoOverlay) {
            overlay.classList.remove('active');
            stopVideo(overlay);
          }
        });

        videoOverlay.classList.add('active');
        const videoElement = videoOverlay.querySelector('video');
        if (videoElement) {
          videoElement.play();

        }
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const videoOverlay = button.closest('.video-overlay');
      if (videoOverlay) {
        videoOverlay.classList.remove('active');
        stopVideo(videoOverlay);
      }
    });
  });

  videoOverlays.forEach(overlay => {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        overlay.classList.remove('active');
        stopVideo(overlay);
      }
    });
  });

  function removeActiveClass() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  }

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - header.offsetHeight - 20;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    removeActiveClass();
    if (current) {
      const activeLink = document.querySelector(`header nav ul li a[href*="#${current}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } else {
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {

      removeActiveClass();
      this.classList.add('active');

    });
  });
});
