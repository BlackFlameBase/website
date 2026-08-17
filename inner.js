(() => {
 const nav=[['HOME','index.html'],['BLACK FLAME','black-flame.html'],['BOOK','book.html'],['ARTCHIVE','artchive.html'],['SHOP','shop.html'],['ABOUT','about.html']];
 const current=document.body.dataset.page;
 const html=nav.map(([label,href])=>`<a href="${href}" ${label===current?'aria-current="page"':''}>${label}</a>`).join('');
 document.querySelectorAll('[data-global-nav]').forEach(x=>x.innerHTML=html);
 const menu=document.getElementById('menuToggle'), mobile=document.getElementById('mobileNav');
 if(menu&&mobile)menu.addEventListener('click',()=>{const o=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(o))});
 const audio=document.getElementById('siteAudio'), toggle=document.getElementById('soundToggle'); let on=false;
 if(toggle&&audio)toggle.addEventListener('click',async()=>{on=!on;if(on){try{await audio.play()}catch{on=false}}else audio.pause();toggle.setAttribute('aria-pressed',String(on));});
})();
