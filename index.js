const imageInput = document.getElementById('backgroundImageInput');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(e) {
      document.body.style.backgroundImage = `url(${e.target.result})`;
    };
  }
});