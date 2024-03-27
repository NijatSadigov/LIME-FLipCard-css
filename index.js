document.addEventListener('DOMContentLoaded', function() {
    const fronts = document.querySelectorAll('.front');
  
    fronts.forEach(front => {
      const random = Math.floor(Math.random() * 10000); // Generate a random number to append to the URL
      front.style.backgroundImage = `url('https://source.unsplash.com/random/350x500?sig=${random}')`;
    });
  });