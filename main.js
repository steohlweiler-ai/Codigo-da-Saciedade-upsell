/* Animate elements on scroll */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Intersection Observer: fade-in-up ── */
  const observerOpts = { threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll(
    '.case-card, .inside-item, .comparison-col, .pill, .offer-card, .guarantee-card, .closing-body p'
  ).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ${i * 0.07}s ease, transform 0.55s ${i * 0.07}s ease`;
    observer.observe(el);
  });

  // Add .visible to trigger transitions
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  /* ── Smooth pulse on btn-primary (hover only — não interfere com Kiwify) ── */
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.letterSpacing = '0.12em';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.letterSpacing = '0.08em';
    });
  });

});
