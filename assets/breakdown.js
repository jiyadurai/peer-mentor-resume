// Turns course rows that have a `data-g` key into expandable grade breakdowns.
// - Click/tap a row: the breakdown opens inline (native <details>).
// - Desktop hover: a floating preview of the same breakdown.
(function () {
  var G = window.GRADES || {};
  var SVGNS = 'http://www.w3.org/2000/svg';

  function num(n) { return String(Math.round(n * 100) / 100); }
  function pct(n) { return (Math.round(n * 10) / 10).toFixed(1).replace(/\.0$/, '') + '%'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // Percent meter on a 0–110% scale; the 100% mark is a tick, and anything above it
  // runs past the tick in a second color.
  function meter(p) {
    var D = Math.max(110, p);
    var full = 100 / D * 100;
    var base = Math.min(p, 100) / D * 100;
    var over = p > 100 ? (p - 100) / D * 100 : 0;
    return '<span class="meter" aria-hidden="true">' +
      '<span class="m-track" style="width:' + full + '%"></span>' +
      '<span class="m-fill" style="width:' + base + '%"></span>' +
      (over ? '<span class="m-over" style="left:' + full + '%;width:' + over + '%"></span>' : '') +
      '<span class="m-tick" style="left:' + full + '%"></span></span>';
  }

  // Box plot of the class distribution with the student's score as a dot.
  // Axis runs from 0 to full marks; scores above full marks land past the dashed tick.
  function boxplot(score, max, s) {
    // Percentage x-coordinates + fixed pixel height: the plot stretches to any width
    // while circles stay round and every row is the same height.
    var H = 22, P = 3, y = H / 2;
    var hi = Math.max(max, score, s ? s[4] : 0);
    function x(v) { return (P + v / hi * (100 - 2 * P)).toFixed(2) + '%'; }
    var label = 'Scored ' + num(score) + ' of ' + num(max) +
      (s ? '; class median ' + num(s[2]) + ', mean ' + num(s[5]) + ', high ' + num(s[4]) : '');
    var out = '<svg class="bp" height="' + H + '" role="img" aria-label="' + esc(label) + '">';
    out += '<line class="bp-axis" x1="' + x(0) + '" x2="' + x(max) + '" y1="' + y + '" y2="' + y + '"/>';
    if (s) {
      out += '<line class="bp-wh" x1="' + x(s[0]) + '" x2="' + x(s[4]) + '" y1="' + y + '" y2="' + y + '"/>';
      out += '<line class="bp-wh" x1="' + x(s[0]) + '" x2="' + x(s[0]) + '" y1="' + (y - 4) + '" y2="' + (y + 4) + '"/>';
      out += '<line class="bp-wh" x1="' + x(s[4]) + '" x2="' + x(s[4]) + '" y1="' + (y - 4) + '" y2="' + (y + 4) + '"/>';
      var bw = Math.max(0.8, (s[3] - s[1]) / hi * (100 - 2 * P)).toFixed(2) + '%';
      out += '<rect class="bp-box" x="' + x(s[1]) + '" y="' + (y - 5) + '" width="' + bw + '" height="10" rx="1.5"/>';
      out += '<line class="bp-med" x1="' + x(s[2]) + '" x2="' + x(s[2]) + '" y1="' + (y - 5) + '" y2="' + (y + 5) + '"/>';
    }
    out += '<line class="bp-full" x1="' + x(max) + '" x2="' + x(max) + '" y1="2" y2="' + (H - 2) + '"/>';
    out += '<circle class="bp-you' + (score > max ? ' bp-over' : '') + '" cx="' + x(score) + '" cy="' + y + '" r="4.2"/>';
    return out + '</svg>';
  }

  var KEY = '<span class="p-key" aria-hidden="true">' +
    '<span><i class="k-box"></i>middle 50% of class</span>' +
    '<span><i class="k-med"></i>median</span>' +
    '<span><i class="k-you"></i>me</span>' +
    '<span><i class="k-full"></i>full marks</span></span>';

  function panel(d) {
    var h = '<div class="panel">';
    h += '<div class="p-total"><span class="p-label">Course total</span><span class="p-pct' + (d.total > 100 ? ' is-over' : '') + '">' + pct(d.total) + '</span>' + meter(d.total) + '</div>';
    if (d.exams && d.exams.length) {
      var anyStats = d.exams.some(function (e) { return e[3]; });
      h += '<div class="p-h"><span>' + esc(d.examsLabel || 'Exams') + '</span>' + (anyStats ? KEY : '') + '</div><div class="exams">';
      d.exams.forEach(function (e) {
        var s = e[3];
        h += '<div class="ex">' +
          '<span class="ex-name">' + esc(e[0]) + '</span>' +
          '<span class="ex-score' + (e[1] > e[2] ? ' is-over' : '') + '">' + num(e[1]) + '<span class="ex-max">/' + num(e[2]) + '</span></span>' +
          '<span class="ex-plot">' + boxplot(e[1], e[2], s) + '</span>' +
          '<span class="ex-mean">' + (s ? 'class avg ' + num(s[5]) : '') + '</span></div>';
      });
      h += '</div>';
    }
    if (d.categories && d.categories.length) {
      h += '<div class="p-h"><span>Coursework</span></div><ul class="cats">';
      d.categories.forEach(function (c) {
        h += '<li><span class="c-name">' + esc(c[0]) + '</span><span class="c-pct' + (c[1] > 100 ? ' is-over' : '') + '">' + pct(c[1]) + '</span>' + meter(c[1]) + '</li>';
      });
      h += '</ul>';
    }
    (d.notes || []).forEach(function (n) { h += '<p class="p-note">' + esc(n) + '</p>'; });
    return h + '</div>';
  }

  // Build the expandable rows.
  var rows = [];
  document.querySelectorAll('li[data-g]').forEach(function (li) {
    var d = G[li.dataset.g];
    if (!d) return;
    var det = document.createElement('details');
    var sum = document.createElement('summary');
    while (li.firstChild) sum.appendChild(li.firstChild);
    var chev = document.createElement('span');
    chev.className = 'chev';
    chev.setAttribute('aria-hidden', 'true');
    sum.appendChild(chev);
    det.appendChild(sum);
    det.insertAdjacentHTML('beforeend', panel(d));
    li.appendChild(det);
    li.classList.add('has-g');
    rows.push({ li: li, det: det, sum: sum });
  });

  // Summary line: computing exams (not quizzes) with class statistics, compared to the class.
  var sumEl = document.querySelector('[data-exam-summary]');
  if (sumEl) {
    var tot = 0, above = 0, top = 0;
    document.querySelectorAll('li[data-g][data-cat="cs"]').forEach(function (li) {
      var d = G[li.dataset.g];
      if (!d || !d.exams || d.examsLabel) return;
      d.exams.forEach(function (e) {
        var s = e[3];
        if (!s) return;
        tot++;
        if (e[1] > s[5]) above++;
        if (e[1] >= s[3]) top++;
      });
    });
    if (tot) sumEl.innerHTML = 'Above the class average on <strong>' + above + ' of ' + tot +
      '</strong> computing exams with published class statistics, and in the top quarter on <strong>' + top + '</strong>';
  }

  // Expand / collapse all.
  var toggleAll = document.querySelector('[data-expand-all]');
  if (toggleAll) {
    toggleAll.hidden = rows.length === 0;
    toggleAll.addEventListener('click', function () {
      var open = toggleAll.getAttribute('aria-pressed') !== 'true';
      rows.forEach(function (r) { r.det.open = open; });
      toggleAll.setAttribute('aria-pressed', String(open));
      toggleAll.textContent = open ? 'Collapse all' : 'Expand all';
      hidePeek();
    });
  }

  // Desktop hover preview.
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var peek = null, timer = null;
  function hidePeek() {
    clearTimeout(timer);
    if (peek) peek.classList.remove('show');
  }
  function showPeek(r) {
    if (r.det.open) return;
    if (!peek) {
      peek = document.createElement('div');
      peek.className = 'peek';
      peek.setAttribute('aria-hidden', 'true');
      document.body.appendChild(peek);
    }
    peek.innerHTML = '';
    peek.appendChild(r.det.querySelector('.panel').cloneNode(true));
    var hint = document.createElement('p');
    hint.className = 'peek-hint';
    hint.textContent = 'Click to pin open';
    peek.appendChild(hint);

    var rect = r.sum.getBoundingClientRect();
    var width = Math.min(rect.width, 640);
    peek.style.width = width + 'px';
    peek.style.left = (rect.left + window.scrollX) + 'px';
    peek.classList.add('measure');
    var h = peek.offsetHeight;
    peek.classList.remove('measure');
    var below = rect.bottom + 6;
    var top = (below + h > window.innerHeight - 8 && rect.top - h - 6 > 8) ? rect.top - h - 6 : below;
    peek.style.top = (top + window.scrollY) + 'px';
    peek.classList.add('show');
  }
  if (canHover) {
    rows.forEach(function (r) {
      r.sum.addEventListener('mouseenter', function () { clearTimeout(timer); timer = setTimeout(function () { showPeek(r); }, 180); });
      r.sum.addEventListener('mouseleave', hidePeek);
      r.sum.addEventListener('click', hidePeek);
    });
    window.addEventListener('scroll', hidePeek, { passive: true });
  }
})();
