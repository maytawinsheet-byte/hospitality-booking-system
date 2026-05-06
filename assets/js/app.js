const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
const bookingBtn = document.getElementById('bookingBtn');

bookingBtn.addEventListener('click', () => {

  alert('ระบบจองโต๊ะกำลังจะเริ่มทำงาน');

});
