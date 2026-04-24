/* Shared nav — injected into every page at runtime */
(function () {
  var css = document.querySelector('link[href*="site.css"]');
  var root = css ? css.getAttribute('href').replace('site.css', '') : '';
  var path = window.location.pathname;

  function inSection(seg) {
    return path.indexOf('/' + seg + '/') !== -1;
  }
  function homeActive() {
    return !inSection('domains') && !inSection('services') && !inSection('practice') &&
           !inSection('cheatsheets') && !inSection('architecture-patterns');
  }

  function link(href, label, extra) {
    return '<a href="' + root + href + '"' + (extra || '') + '>' + label + '</a>';
  }

  var nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.innerHTML =
    '<a href="' + root + 'index.html" class="nav-logo">SAP-C02 <span class="badge">Pro</span></a>' +
    '<div class="nav-links">' +
    link('index.html',                                        'Home',          homeActive()              ? ' class="active"' : '') +
    link('domains/01-organizational-complexity/index.html',  'Domains',       inSection('domains')       ? ' class="active"' : '') +
    link('services/networking/transit-gateway.html',         'Services',      inSection('services')      ? ' class="active"' : '') +
    link('architecture-patterns/disaster-recovery.html',     'Patterns',      inSection('architecture-patterns') ? ' class="active"' : '') +
    link('cheatsheets/exam-traps.html',                      'Cheatsheets',   inSection('cheatsheets')   ? ' class="active"' : '') +
    '<a href="' + root + 'practice/exam.html" class="nav-cta' + (inSection('practice') ? ' active' : '') + '">Practice Exam</a>' +
    '</div>';

  var s = document.currentScript;
  s.parentNode.insertBefore(nav, s);
})();
