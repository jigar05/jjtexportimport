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

