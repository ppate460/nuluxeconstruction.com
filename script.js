document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const imageWrapper = document.querySelector('.image-wrapper');
    let startX;
    let isDragging = false;
    let isInteracting = false;
  
    const stopAnimation = () => {
      imageContainer.style.animationPlayState = 'paused';
      isInteracting = true;
    };
  
    const startAnimation = () => {
      imageContainer.style.animationPlayState = 'running';
      isInteracting = false;
    };
  
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX;
      stopAnimation();
    };
  
    const handleMouseMove = (e) => {
      if (isDragging) {
        const diffX = e.pageX - startX;
        imageWrapper.style.transform = `translateX(${diffX}px)`;
      }
    };
  
    const handleMouseUp = () => {
      isDragging = false;
      imageWrapper.style.transform = 'translateX(0)';
      if (!isInteracting) {
        startAnimation();
      }
    };
  
    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].pageX;
      stopAnimation();
    };
  
    const handleTouchMove = (e) => {
      if (isDragging) {
        const diffX = e.touches[0].pageX - startX;
        imageWrapper.style.transform = `translateX(${diffX}px)`;
      }
    };
  
    const handleTouchEnd = () => {
      isDragging = false;
      imageWrapper.style.transform = 'translateX(0)';
      if (!isInteracting) {
        startAnimation();
      }
    };
  
    imageSlider.addEventListener('mousedown', handleMouseDown);
    imageSlider.addEventListener('mousemove', handleMouseMove);
    imageSlider.addEventListener('mouseup', handleMouseUp);
  
    imageSlider.addEventListener('touchstart', handleTouchStart);
    imageSlider.addEventListener('touchmove', handleTouchMove);
    imageSlider.addEventListener('touchend', handleTouchEnd);
  });
  