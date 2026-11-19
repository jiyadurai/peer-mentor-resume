// Light/dark toggle. The initial theme is applied by a tiny inline script in
// each page's <head> (to avoid a flash); this file wires up the button.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  var media = window.matchMedia('(prefers-color-scheme: dark)');
  function current() {
    return root.dataset.theme || (media.matches ? 'dark' : 'light');
  }
  function sync() {
    var mode = current();
    btn.dataset.mode = mode;
    btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = btn.getAttribute('aria-label');
  }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  if (media.addEventListener) media.addEventListener('change', sync);
  sync();
})();
