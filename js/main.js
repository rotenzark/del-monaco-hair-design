/* Del Monaco Hair Design — i18n IT/EN, nav mobile, reveal */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_salon: 'Il salone',
      nav_services: 'Servizi',
      nav_method: 'Il metodo',
      nav_hours: 'Orari e dove',
      book_short: 'Prenota',
      book_cta: 'Prenota online',
      book_cta2: 'Prenota online',
      call_cta: 'Chiama',
      hero_eyebrow: 'Via Pastrengo 1, angolo Borsieri — Milano Isola',
      hero_lead: 'Il colore giusto non è quello in cartella: è quello che sta bene a te. Taglio, colore e acconciature, per lei e per lui, con il tempo che ci vuole.',
      hero_proof: '4,9 su 5 · 542 recensioni verificate su Treatwell',
      sw1: 'Miele',
      sw2: 'Rame',
      sw3: 'Castano',
      sw4: 'Moka',
      sw5: 'Nero',
      salon_title: 'Il salone',
      salon_pull: 'All’angolo tra via Pastrengo e via Borsieri, un salone dove il colore si studia prima di farsi.',
      salon_p1: 'Del Monaco Hair Design è un salone di quartiere nel cuore dell’Isola: si lavora su appuntamento, con una clientela che torna — e lo dicono i numeri, non noi: quasi cinquecentocinquanta recensioni con una media di 4,9 su 5.',
      salon_p2: 'Donna e uomo, dal taglio alla piega, dal colore alle acconciature per le occasioni che contano. E per chi ha un problema vero — capelli che si spezzano, cute che soffre — ci sono i trattamenti anticaduta e ristrutturanti, senza promesse da pubblicità.',
      stat1: 'la media su Treatwell',
      stat2: 'recensioni verificate',
      stat3: 'giorni su 7: dal martedì al sabato',
      alt1: 'Il salone di via Pastrengo: poltrone nere, pareti bianche e mattoni a vista',
      alt2: 'La sala grande con l’orologio e il muro in mattoni',
      alt3: 'La postazione con lo specchio tondo',
      alt4: 'L’ingresso luminoso con le vetrine su strada',
      alt5: 'I prodotti Davines sul banco in legno',
      alt6: 'Il lavaggio: shampoo e massaggio al lavatesta',
      g_note: 'Foto dal profilo Treatwell del salone.',
      services_title: 'Servizi e listino',
      s1: 'Piega',
      s2: 'Taglio e piega',
      s3: 'Colore',
      s4: 'Balayage e schiariture',
      s5: 'Trattamento anticaduta / ristrutturante',
      s6: 'Acconciature da cerimonia',
      s6_price: 'su preventivo',
      s7: 'Taglio uomo',
      services_note: 'Listino indicativo: il preventivo vero si fa davanti allo specchio, guardando i tuoi capelli.',
      method_title: 'Il metodo',
      m1_t: 'La consulenza',
      m1_p: 'Prima di toccare le forbici: che capelli hai, che vita fanno, quanto tempo hai la mattina. Il colore si sceglie lì.',
      m2_t: 'Il lavoro',
      m2_p: 'Colore e taglio senza guardare l’orologio. Le schiariture si costruiscono ciocca per ciocca, non a colpi di pennello.',
      m3_t: 'Lo styling',
      m3_p: 'La piega che riesci a rifare anche a casa — e i consigli per non rovinarla il giorno dopo.',
      review_txt: 'su 5, in 542 recensioni verificate su Treatwell.',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì',
      tue_fri: 'Martedì — Venerdì',
      sat: 'Sabato',
      sun: 'Domenica',
      closed: 'chiuso',
      closed2: 'chiuso',
      hours_note: 'Si lavora su appuntamento: prenota online o con una telefonata.',
      addr_corner: 'angolo via Borsieri',
      metro: 'M5 Isola, cinque minuti a piedi',
      maps: 'Apri in Google Maps',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Hair Design',
      f_line: 'Parrucchiere donna e uomo, quartiere Isola.',
      aria_top: 'Del Monaco Hair Design — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_salon: 'The salon',
      nav_services: 'Services',
      nav_method: 'The method',
      nav_hours: 'Hours & location',
      book_short: 'Book',
      book_cta: 'Book online',
      book_cta2: 'Book online',
      call_cta: 'Call',
      hero_eyebrow: 'Via Pastrengo 1, corner of Via Borsieri — Milano Isola',
      hero_lead: 'The right colour isn’t the one on the chart: it’s the one that suits you. Cut, colour and styling, for her and for him, with the time it deserves.',
      hero_proof: '4.9 out of 5 · 542 verified reviews on Treatwell',
      sw1: 'Honey',
      sw2: 'Copper',
      sw3: 'Chestnut',
      sw4: 'Mocha',
      sw5: 'Black',
      salon_title: 'The salon',
      salon_pull: 'On the corner of Via Pastrengo and Via Borsieri, a salon where colour is studied before it’s done.',
      salon_p1: 'Del Monaco Hair Design is a neighbourhood salon in the heart of Isola. It works by appointment, with clients who keep coming back — and the numbers say it better than we can: nearly five hundred and fifty reviews, averaging 4.9 out of 5.',
      salon_p2: 'Women and men, from cut to blow-dry, from colour to styling for the occasions that matter. And for real problems — breaking hair, a suffering scalp — there are anti-hair-loss and restructuring treatments, without the advertising promises.',
      stat1: 'average rating on Treatwell',
      stat2: 'verified reviews',
      stat3: 'days a week: Tuesday to Saturday',
      alt1: 'The salon on Via Pastrengo: black chairs, white walls and exposed brick',
      alt2: 'The main room with the clock and the brick wall',
      alt3: 'The station with the round mirror',
      alt4: 'The bright entrance with street-facing windows',
      alt5: 'Davines products on the wooden counter',
      alt6: 'The wash: shampoo and massage at the basin',
      g_note: 'Photos from the salon’s Treatwell profile.',
      services_title: 'Services & price list',
      s1: 'Blow-dry',
      s2: 'Cut & blow-dry',
      s3: 'Colour',
      s4: 'Balayage & highlights',
      s5: 'Anti-hair-loss / restructuring treatment',
      s6: 'Occasion & bridal styling',
      s6_price: 'on quote',
      s7: 'Men’s cut',
      services_note: 'Indicative prices: the real quote happens in front of the mirror, looking at your hair.',
      method_title: 'The method',
      m1_t: 'The consultation',
      m1_p: 'Before the scissors come out: what hair you have, what life it leads, how much time you have in the morning. That’s where the colour gets chosen.',
      m2_t: 'The work',
      m2_p: 'Colour and cut without watching the clock. Highlights are built strand by strand, not brushed on.',
      m3_t: 'The styling',
      m3_p: 'A blow-dry you can actually redo at home — plus the tips to keep it alive the next day.',
      review_txt: 'out of 5, across 542 verified reviews on Treatwell.',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      mon: 'Monday',
      tue_fri: 'Tuesday — Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'closed',
      closed2: 'closed',
      hours_note: 'By appointment: book online or give us a call.',
      addr_corner: 'corner of Via Borsieri',
      metro: 'M5 Isola station, a five-minute walk',
      maps: 'Open in Google Maps',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'Hair Design',
      f_line: 'Hair salon for women and men, Isola district.',
      aria_top: 'Del Monaco Hair Design — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('delmonaco-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('delmonaco-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-head, .split-main, .split-side, .ledger, .steps .step, .review-band, .hours, .where');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }
/* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */
  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
