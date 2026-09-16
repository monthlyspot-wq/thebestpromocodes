(function(){
  var bar=document.getElementById('sticky-cta');
  if(!bar) return;
  var btn=document.querySelector('main a.btn[target="_blank"], main a.btn[rel*="sponsored"]');
  if(!btn){ bar.remove(); return; }
  var link=bar.querySelector('a.btn');
  if(link){
    link.href=btn.href;
    link.rel=btn.getAttribute('rel')||'nofollow sponsored noopener';
    link.target=btn.getAttribute('target')||'_blank';
    if(!link.textContent.trim()) link.textContent=btn.textContent.trim()||'Open offer';
  }
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function sync(){
    var y=window.scrollY||document.documentElement.scrollTop||0;
    if(y>220) bar.classList.add('is-visible'); else bar.classList.remove('is-visible');
  }
  sync();
  window.addEventListener('scroll', sync, {passive:true});
  if(reduce){ /* still show after scroll; no animation */ }
})();
