/* Small progressive enhancement for the cinematic hero. All primary links work without JS. */
(() => {
  const toggle = document.querySelector('.ambient-toggle');
  const hero = document.querySelector('.cinematic-hero');
  if (!toggle || !hero) return;

  // Show the ambient cursor light only after its first real pointer position.
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('pointermove', () => document.body.classList.add('has-pointer'), {passive:true, once:true});
  }

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