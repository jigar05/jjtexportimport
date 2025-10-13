// Button to change background color randomly
document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#f9f9f9", "#ffe0b2", "#c8e6c9", "#bbdefb", "#f48fb1"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
:root{
  /* Base palette */
  --bg: #0f1724;
  --surface: #0b1220;
  --text: #e6eef8;
  --muted: #9fb0c8;

  /* Accents */
  --color-primary: #6ee7b7;   /* mint */
  --color-secondary: #8b5cf6; /* violet */
  --color-accent: #ffb86b;    /* warm orange */

  /* Glass */
  --glass: rgba(255,255,255,0.06);
  --glass-border: rgba(255,255,255,0.08);

  /* Shadows and spacing */
  --shadow-soft: 0 8px 30px rgba(2,6,23,0.6);
  --radius: 14px;

  /* Sizing */
  --container-max: 1100px;
}

/* Light theme overrides */
:root[data-theme="light"]{
  --bg: linear-gradient(180deg,#f7fbff 0%, #eef6ff 100%);
  --surface: #ffffff;
  --text: #0b1a2b;
  --muted: #485b6b;
  --glass: rgba(255,255,255,0.6);
  --glass-border: rgba(10,20,30,0.06);
  --shadow-soft: 0 12px 30px rgba(12,22,38,0.08);
}

/* Layout */
* { box-sizing: border-box; }
html,body { height:100%; }
body{
  margin:0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: radial-gradient(1200px 400px at 10% 10%, rgba(139,92,246,0.15), transparent),
              radial-gradient(900px 300px at 90% 90%, rgba(110,231,183,0.08), transparent),
              var(--bg);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  padding:32px 20px;
  display:flex;
  flex-direction:column;
  gap:24px;
  align-items:center;
}

/* Container */
.container{
  width:100%;
  max-width:var(--container-max);
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:stretch;
}

/* Header */
.site-header{
  width:100%;
  max-width:var(--container-max);
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  padding:8px 12px;
}
.brand{ display:flex; gap:12px; align-items:center; }
.logo{
  width:56px;height:56px;border-radius:12px;
  display:grid;place-items:center;font-size:22px;
  background:linear-gradient(135deg,var(--color-primary),var(--color-secondary));
  box-shadow: var(--shadow-soft);
}
.title{ margin:0;font-size:18px;line-height:1; }
.subtitle{ margin:0;font-size:12px;color:var(--muted); }

/* Cards */
.card{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0));
  border-radius:var(--radius);
  padding:20px;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(255,255,255,0.02);
}

/* Glass style */
.glass{
  background: linear-gradient(180deg, var(--glass), rgba(255,255,255,0.02));
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px) saturate(120%);
}

/* Hero */
.hero{
  position:relative;
  overflow:hidden;
}
.hero h2{ margin:0 0 8px 0; font-size:28px; }
.hero p{ margin:0 0 16px 0; color:var(--muted); }

/* Decorative shapes */
.decor-left, .decor-right{
  position:absolute; inset:auto; pointer-events:none;
  filter: blur(36px);
  opacity:0.85;
  transform: translateZ(0);
}
.decor-left{
  left:-120px; top:-40px;
  width:480px; height:260px;
  background: radial-gradient(circle at 20% 30%, rgba(139,92,246,0.28), transparent 30%),
              conic-gradient(from 20deg at 60% 40%, rgba(255,184,107,0.12), transparent 30%);
  border-radius:48% 52% 40% 60% / 50% 40% 60% 50%;
  animation: floatLeft 8s ease-in-out infinite;
}
.decor-right{
  right:-100px; bottom:-60px;
  width:420px; height:260px;
  background: radial-gradient(circle at 70% 60%, rgba(110,231,183,0.20), transparent 30%),
              conic-gradient(from 120deg at 40% 60%, rgba(139,92,246,0.08), transparent 30%);
  border-radius:50% 45% 55% 50% / 40% 60% 40% 60%;
  animation: floatRight 10s ease-in-out infinite;
}
@keyframes floatLeft{
  0%{ transform: translateY(0) rotate(0); }
  50%{ transform: translateY(-14px) rotate(6deg); }
  100%{ transform: translateY(0) rotate(0); }
}
@keyframes floatRight{
  0%{ transform: translateY(0) rotate(0); }
  50%{ transform: translateY(10px) rotate(-6deg); }
  100%{ transform: translateY(0) rotate(0); }
}

/* Grid */
.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap:16px;
}

/* Palette swatches */
.palette .swatches{
  list-style:none;padding:0;margin:12px 0 0 0;display:flex;gap:12px;flex-wrap:wrap;
}
.palette .swatches li{
  width:92px;height:72px;border-radius:12px;display:grid;place-items:center;
  color:var(--text); font-size:12px; font-family:monospace;
  background: linear-gradient(180deg, var(--sw), color-mix(in srgb, var(--sw) 70%, transparent));
  box-shadow: 0 8px 20px color-mix(in srgb, var(--sw) 30%, #000 70%);
  border:1px solid rgba(255,255,255,0.03);
}

/* Buttons */
.btn{
  display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;
  border:0;cursor:pointer;font-weight:600;color:var(--text);background:transparent;
  transition: transform .16s ease, box-shadow .16s ease, opacity .12s ease;
}
.btn:active{ transform: translateY(1px) scale(.998); }
.btn-ghost{ color:var(--muted); padding:8px 12px; border-radius:8px; background:transparent; border:1px solid rgba(255,255,255,0.03); }
.btn-primary{
  background: linear-gradient(90deg,var(--color-primary),var(--color-secondary));
  color:#022029; box-shadow: 0 8px 24px rgba(11,21,40,0.28);
}
.btn-outline{
  border:1px solid rgba(255,255,255,0.06); color:var(--text); padding:9px 12px;
}
.btn-gradient{
  background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
  color:#061018;
  box-shadow: 0 10px 28px rgba(139,92,246,0.12);
}

/* Footer
/* Design tokens */
:root{
  /* Colors */
  --bg: #0f1724;            /* deep midnight */
  --surface: #0b1220;
  --muted: #9aa4b2;
  --text: #e6eef8;
  --accent: #3b82f6;        /* blue-500 */
  --accent-600: #2563eb;
  --success: #10b981;
  --glass: rgba(255,255,255,0.04);

  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --lead-size: 1.125rem;
  --h1-size: 2.25rem;
  --base-size: 16px;

  /* Layout */
  --container: 1100px;
  --radius: 12px;
  --card-radius: 14px;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 40px;
  --shadow-elev: 0 8px 30px rgba(2,6,23,0.6);
}

/* Basic
:root{
  --bg:#0f1724;
  --card:#0b1220;
  --muted:#9aa4b2;
  --accent:#7c5cff;
  --accent-2:#23d5ab;
  --glass: rgba(255,255,255,0.04);
  --radius:12px;
  --max-width:1200px;
  --container-padding:20px;
  --shadow: 0 6px 22px rgba(7,12,20,0.6);
  --glass-border: rgba(255,255,255,0.04);
  --text:#e6eef6;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  color:var(--text);
  background:linear-gradient(180deg,#071026 0%, #071c2b 100%);
  line-height:1.45;
  -webkit-font-smoothing:antialiased;
  font-size:16px;
}

/* container */
.container{
  max-width:var(--max-width);
  margin:0 auto;
  padding:28px var(--container-padding);
}

/* header */
.site-header{
  backdrop-filter: blur(6px);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  border-bottom:1px solid rgba(255,255,255,0.03);
  position:sticky;
  top:0;
  z-index:40;
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.brand{
  color:var(--text);
  font-weight:700;
  letter-spacing:0.2px;
  text-decoration:none;
  font-size:20px;
}
.nav a{ color:var(--muted); margin-left:18px; text-decoration:none; font-weight:600; font-size:14px;}
.nav a.button.ghost{ margin-left:22px}

/* hero */
.hero{
  padding:64px 0 40px;
}
.hero-grid{
  display:grid;
  gap:28px;
  grid-template-columns:1fr 420px;
  align-items:center;
}
.hero-content h1{
  font-size:40px;
  margin:0 0 12px 0;
  line-height:1.05;
  color: #f5f9ff;
}
.lead{ color:var(--muted); margin:0 0 18px}
.hero-ctas .button{ margin-right:12px}
.trust{ display:flex; gap:14px; margin-top:18px; padding:0; list-style:none;}
.trust li{ font-size:13px; color:var(--muted) }
.trust li strong{ color:var(--text); display:block}

/* hero card */
.hero-card .product-preview{
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid rgba(255,255,255,0.03);
  padding:12px;
  border-radius:14px;
  box-shadow:var(--shadow);
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.product-preview img{
  width:100%;
  border-radius:10px;
  display:block;
  object-fit:cover;
  height:220px;
}
.preview-meta{ padding:12px; display:flex; flex-direction:column; gap:6px}
.preview-meta h3{ margin:0; font-size:18px}
.preview-meta .muted{ color:var(--muted); font-size:13px }
.meta-ctas{ margin-top:6px }

/* buttons */
.button{
  display:inline-block;
  background:linear-gradient(90deg,var(--accent),var(--accent-2));
  color:#fff;
  padding:10px 14px;
  border-radius:10px;
  border:0;
  cursor:pointer;
  font-weight:700;
  text-decoration:none;
  box-shadow: 0 6px 18px rgba(124,92,255,0.18);
}
.button.ghost{
  background:transparent;
  border:1px solid rgba(255,255,255,0.06);
  color:var(--text);
  box-shadow:none;
}
.button.small{ padding:8px 10px; font-size:13px; border-radius:8px; }

/* section titles */
.section{ padding:60px 0; }
.section-title{ font-size:24px; margin:0 0 10px; color:#f8fbff; }
.section-sub{ color:var(--muted); margin:0 0 28px; }

/* product grid */
.product-grid{ display:grid; gap:18px; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); }
.product-card{
  background:var(--card);
  border-radius:14px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.03);
  transition:transform .22s ease, box-shadow .22s ease;
}
.product-card:hover{ transform:translateY(-6px); box-shadow:var(--shadow) }
.product-card .thumb img{ width:100%; height:160px; object-fit:cover; display:block }
.card-body{ padding:14px }
.card-body h3{ margin:0 0 6px; font-size:16px }
.card-body .muted{ color:var(--muted); font-size:13px; margin-bottom:8px }
.card-foot{ display:flex; align-items:center; justify-content:space-between }

/* flow */
.flow-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
  margin-top:24px;
}
.flow-step{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  padding:18px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.03);
}
.step-num{
  width:42px; height:42px; border-radius:10px; background:linear-gradient(90deg,var(--accent),var(--accent-2)); display:inline-flex; align-items:center; justify-content:center; font-weight:800; color:white; margin-bottom:10px;
}

/* features */
.features-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:18px; }
.feature{ background:var(--card); padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.03); }
.feature .icon{ width:36px; height:36px; fill:linear-gradient(90deg,var(--accent),var(--accent-2)); }

/* cta-strip */
.cta-strip{ background: linear-gradient(90deg, rgba(40,26,80,0.4), rgba(13,54,63,0.4)); border-top:1px solid rgba(255,255,255,0.02);}
.cta-inner{ display:flex; align-items:center; justify-content:space-between; gap:12px; padding:22px 0; }

/* contact */
.contact-grid{ display:grid; grid-template-columns:1fr 420px; gap:28px; align-items:start; }
.contact-form{ background:var(--card); padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.03) }
.contact-form label{ display:block; margin-bottom:12px; font-size:14px }
.contact-form input, .contact-form textarea{
  width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.04); background:transparent; color:var(--text);
}

/* footer */
.site-footer{ padding:18px 0; border-top:1px solid rgba(255,255,255,0.03); margin-top:40px }
.footer-inner{ display:flex; justify-content:space-between; align-items:center; color:var(--muted) }
.footer-links a{ color:var(--muted); margin-left:14px; text-decoration:none }

/* modal */
.modal{ position:fixed; inset:0; display:none; z-index:100; align-items:center; justify-content:center; }
.modal[aria-hidden="false"]{ display:flex; }
.modal-backdrop{ position:absolute; inset:0; background:linear-gradient(180deg, rgba(7,12,20,0.6), rgba(7,12,20,0.8)); }
.modal-panel{ position:relative; width:min(980px,96vw); background:linear-gradient(180deg, rgba(10,14,20,0.98), rgba(8,12,18,0.95)); border-radius:12px; padding:18px; z-index:120; box-shadow:var(--shadow); border:1px solid rgba(255,255,255,0.03); }
.modal-close{ position:absolute; right:12px; top:10px; background:transparent; color:var(--muted); font-size:26px; border:0; cursor:pointer; }
.modal-body{ display:flex; gap:18px; align-items:flex-start; }
.modal-thumb img{ width:320px; max-width:40vw; height:200px; object-fit:cover; border-radius:8px; display:block }
.modal-content h3{ margin-top:0 }
.modal-actions{ margin-top:18px; display:flex; gap:10px }

/* small screens */
@media (max-width:900px){
  .hero-grid{ grid-template-columns:1fr; }
  .flow-grid{ grid-template-columns:repeat(2,1fr) }
  .contact-grid{ grid-template-columns:1fr; }
  .features-grid{ grid-template-columns:1fr }
  .cta-inner{ flex-direction:column; align-items:flex-start; gap:12px; }
}
@media (max-width:600px){
  .flow-grid{ grid-template-columns:1fr }
  .modal-body{ flex-direction:column }
  .modal-thumb img{ width:100%; max-width:100%; height:200px; }
}
// Lightweight interaction for product quick view modal and simple form feedback
document.addEventListener('DOMContentLoaded', function(){
  // sample product data fallback if any element lacks explicit fields
  const products = {
    1:{
      id:1,
      title:'Prime Exporter Kit',
      price:'$129',
      desc:'Everything you need to package, list, and ship your items internationally. Includes tracking and customs templates.',
      img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=60&auto=format&fit=crop'
    },
    2:{
      id:2,
      title:'Bulk Upload Pro',
      price:'$199',
      desc:'Upload and manage thousands of SKUs with automated validation and category mapping.',
      img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=60&auto=format&fit=crop'
    },
    3:{
      id:3,
      title:'Seller Growth Suite',
      price:'$299',
      desc:'Optimize listings, run experiments, and track KPI performance across channels.',
      img:'https://images.unsplash.com/photo-1526378720575-8f4b6b81a7c2?w=900&q=60&auto=format&fit=crop'
    }
  };

  const openBtns = document.querySelectorAll('.js-open-product');
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const closeEls = document.querySelectorAll('.js-close');

  function openModalFromElement(el){
    // try to resolve product data from data attributes
    let card = el.closest('.product-card') || el.closest('.product-preview') || el;
    const id = card && card.dataset && card.dataset.id ? card.dataset.id : (el.dataset && el.dataset.id ? el.dataset.id : '1');
    const item = products[id] || {
      title: card.dataset.title || 'Product',
      price: card.dataset.price || '',
      desc: card.dataset.desc || 'Description coming soon.',
      img: card.querySelector('img') ? card.querySelector('img').src : ''
    };
    modalImg.src = item.img;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.desc;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  openBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      openModalFromElement(e.currentTarget);
    });
  });

  closeEls.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    });
  });

  // close on escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
  });

  // contact form minimal UX
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      // collect values
      const fd = new FormData(contactForm);
      // simulate submit
      const name = fd.get('name') || 'There';
      // simple feedback
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(()=>{
        btn.textContent = 'Sent ✓';
        btn.style.background = 'linear-gradient(90deg,#2ecc71,#27ae60)';
        setTimeout(()=>{
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
          contactForm.reset();
          alert('Thanks '+name+' — we will contact you soon!');
        },1200);
      },900);
    });
  }

  // set current year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
});
body {
  background-color: #f0f8ff;
}



