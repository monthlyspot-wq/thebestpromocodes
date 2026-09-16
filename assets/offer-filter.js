(function(){
  var input=document.getElementById('offer-filter');
  var list=document.getElementById('offer-list');
  if(!input||!list) return;
  var items=[].slice.call(list.querySelectorAll('[data-offer]'));
  function run(){
    var q=(input.value||'').toLowerCase().trim();
    items.forEach(function(el){
      var hay=(el.getAttribute('data-offer')||'')+' '+(el.textContent||'');
      el.hidden=q && hay.toLowerCase().indexOf(q)===-1;
    });
  }
  input.addEventListener('input', run);
})();
