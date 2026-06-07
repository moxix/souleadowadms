// =============================================
//  MOUSSA Portfolio — script.js
// =============================================

/**
 * toggleMenu — ouvre/ferme le menu mobile
 */
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

/**
 * Fermer le menu mobile si on clique en dehors
 */
document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobileMenu');
  var btn = document.querySelector('.nav-menu-btn');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

/**
 * Animation d'apparition au scroll (Intersection Observer)
 * Les éléments avec la classe .fade-in apparaissent
 * progressivement quand ils entrent dans le viewport.
 */
document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Appliquer l'animation aux cards et sections
  var elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-card-link');
  elements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });
});
