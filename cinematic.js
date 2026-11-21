/* Small progressive enhancement for the cinematic hero. All primary links work without JS. */
(() => {
  const toggle = document.querySelector('.ambient-toggle');
  const hero = document.querySelector('.cinematic-hero');
  if (!toggle || !hero) return;

  toggle.addEventListener('click', () => {
    const off = document.body.classList.toggle('ambient-off');
    toggle.setAttribute('aria-pressed', String(off));
    toggle.setAttribute('aria-label', off ? 'Lichteffekte einschalten' : 'Lichteffekte reduzieren');
  });

  // Respect user preference from the first paint where possible; visual motion
  // is also disabled entirely by CSS under prefers-reduced-motion.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('ambient-off');
    toggle.setAttribute('aria-pressed', 'true');
    toggle.setAttribute('aria-label', 'Lichteffekte einschalten');
  }
})();