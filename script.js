// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Product modal example (requires Bootstrap JS)
const productButtons = document.querySelectorAll('.btn-outline-primary');
productButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.closest('.card').querySelector('.card-title').textContent;
    alert(`Loading details for: ${productName}`);
  });
});
