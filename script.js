document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});


/* Reveal page content gently as it enters the viewport */
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll([
    '#bio h2',
    '#bio p',
    '#shows h2',
    '#shows .booking-banner',
    '#shows .calendar',
    '#gallery h2',
    '#gallery .download-note',
    '#gallery .gallery a',
    '#epk h2',
    '#epk .epk-intro',
    '#epk .epk-booking',
    '#epk .epk-subheading',
    '#epk .epk-description',
    '#epk .epk-video',
    '#contact h2',
    '#contact > p',
    '#contact form',
    '#contact .social-icons',
    'footer'
  ].join(','));

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  revealTargets.forEach((element) => element.classList.add('reveal-on-scroll'));

  // Small stagger makes the photo and video grids feel more intentional.
  document.querySelectorAll('.gallery a, .epk-video').forEach((element, index) => {
    element.style.setProperty('--reveal-delay', (index % 3) * 90 + 'ms');
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach((element) => observer.observe(element));
});
