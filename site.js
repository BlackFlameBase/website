(() => {
  const C = window.BLACK_FLAME_CONTENT;
  const get = (path) => path.split('.').reduce((obj, key) => obj?.[key], C);

  document.querySelectorAll('[data-content]').forEach(el => {
    const value = get(el.dataset.content);
    if (value !== undefined && value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-link]').forEach(el => {
    const value = get(el.dataset.link);
    if (!value) return;
    el.textContent = value.label;
    el.href = value.href;
  });

  const renderNav = (target) => {
    target.innerHTML = C.navigation.map(item =>
      `<a href="${item.href}" ${item.current ? 'aria-current="page"' : ''}>${item.label}</a>`
    ).join('');
  };
  renderNav(document.getElementById('primaryNav'));
  renderNav(document.getElementById('mobileNav'));

  document.getElementById('systemStages').innerHTML = C.hero.system.stages.map(x => `<span class="system-stage">${x}</span>`).join('');
  document.getElementById('systemStatements').innerHTML = C.hero.system.statements.map(x => `<span>${x}</span>`).join('');

  const livingFlame = document.getElementById('livingFlame');
  livingFlame.src = C.hero.image;
  livingFlame.alt = C.hero.imageAlt;

  document.getElementById('gatewayStrip').innerHTML = C.gateways.map(g => `
    <a href="#${g.target}" data-scroll-target="${g.target}">
      <span class="gateway-kicker">HOME PORTAL</span>
      <span class="gateway-title">${g.label}</span>
    </a>`).join('');

  document.getElementById('teaserSections').innerHTML = C.teasers.map((t, index) => {
    const media = t.image
      ? `<img src="${t.image}" alt="${t.imageAlt || ''}" />`
      : `<div class="placeholder-art" aria-hidden="true"><span></span></div>`;
    return `
      <section class="teaser" id="${t.id}" aria-labelledby="${t.id}-title">
        <div class="teaser-copy">
          <p class="eyebrow">${t.pageLabel}</p>
          ${t.status ? `<span class="status-label">${t.status}</span>` : ''}
          <h2 id="${t.id}-title">${t.heading}</h2>
          <p>${t.body}</p>
          ${t.body2 ? `<p>${t.body2}</p>` : ''}
          <a class="button button-outline" href="${t.cta.href}">${t.cta.label}</a>
        </div>
        <div class="teaser-media">${media}</div>
      </section>`;
  }).join('');

  const social = C.social.filter(x => x.enabled);
  document.getElementById('socialIcons').innerHTML = social.map(s => `
    <a class="social-icon" href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}" data-label="${s.label}">
      <img src="${s.icon}" alt="" aria-hidden="true" />
    </a>`).join('');

  document.getElementById('footerLinks').innerHTML = C.footer.links.map(x => `<a href="${x.href}">${x.label}</a>`).join('');

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  const audio = document.getElementById('siteAudio');
  const soundToggle = document.getElementById('soundToggle');
  const heroSoundButton = document.getElementById('heroSoundButton');
  let soundOn = false;

  const updateSoundUI = () => {
    soundToggle.setAttribute('aria-pressed', String(soundOn));
    soundToggle.querySelector('.sound-wave').textContent = soundOn ? '┼ ┿' : '┼ ┼';
    heroSoundButton.textContent = soundOn ? 'SOUND ON' : C.hero.soundPrompt;
  };

  async function toggleSound(){
    soundOn = !soundOn;
    if (soundOn) {
      try { await audio.play(); }
      catch { soundOn = false; }
    } else {
      audio.pause();
    }
    updateSoundUI();
  }
  soundToggle.addEventListener('click', toggleSound);
  heroSoundButton.addEventListener('click', toggleSound);
  updateSoundUI();

  const form = document.getElementById('subscribeForm');
  const formStatus = document.getElementById('formStatus');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = new FormData(form).get('email');
    if (!C.subscriber.endpoint) {
      formStatus.textContent = `Subscription integration is ready to connect. ${email} was not transmitted.`;
      return;
    }
    try {
      const res = await fetch(C.subscriber.endpoint, {
        method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email})
      });
      if (!res.ok) throw new Error('Subscription failed');
      formStatus.textContent = 'Check your inbox for the Black Flame Primer.';
      form.reset();
    } catch {
      formStatus.textContent = 'Subscription could not be completed. Please try again.';
    }
  });
})();
