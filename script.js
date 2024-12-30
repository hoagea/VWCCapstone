function openPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
function toggleMenu() {
  var sideMenu = document.getElementById('sideMenu');
  var mainContent = document.getElementById('mainContent');
  sideMenu.classList.toggle('collapsed');
  mainContent.classList.toggle('collapsed');
}

function showSection(sectionId) {
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
      section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Show the Introduction/Bio section by default
document.addEventListener('DOMContentLoaded', function() {
  showSection('intro');
});