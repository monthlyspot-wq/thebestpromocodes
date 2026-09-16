(function () {
  var input = document.getElementById('offer-filter');
  var list = document.getElementById('offer-list');
  if (!input || !list) return;

  function bindExisting() {
    var items = [].slice.call(list.querySelectorAll('[data-offer]'));
    function run() {
      var q = (input.value || '').toLowerCase().trim();
      items.forEach(function (el) {
        var hay = (el.getAttribute('data-offer') || '') + ' ' + (el.textContent || '');
        el.hidden = !!(q && hay.toLowerCase().indexOf(q) === -1);
      });
    }
    input.addEventListener('input', run);
  }

  function renderFromJson(data) {
    list.innerHTML = '';
    (data.offers || []).forEach(function (o) {
      var a = document.createElement('a');
      a.className = 'card';
      a.href = o.path;
      a.setAttribute('data-offer', [o.id, o.name, o.region].concat(o.tags || []).join(' '));
      a.style.display = 'block';
      a.style.textDecoration = 'none';
      a.style.color = 'inherit';
      a.innerHTML = '<strong>' + (o.name || o.id) + '</strong>' +
        '<p class="muted small" style="margin:.35rem 0 0">' + (o.region || '') +
        ((o.tags && o.tags.length) ? ' · ' + o.tags.join(', ') : '') + '</p>';
      list.appendChild(a);
    });
    bindExisting();
  }

  if (list.querySelectorAll('[data-offer]').length) {
    bindExisting();
    return;
  }

  fetch('/offers/index.json', { credentials: 'omit' })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(renderFromJson)
    .catch(function () {
      list.innerHTML = '<p class="muted small">Offer index unavailable.</p>';
    });
})();
