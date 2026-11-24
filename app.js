(function () {
  'use strict';

  var PRICING = {
    VOL: { USA: ['USD 610', 'USD 2.720'], EUR: ['USD 570', 'USD 2.455'], LATAM: ['USD 430', 'USD 1.840'], AR: ['USD 340', 'USD 1.310'] },
    ECO: { USA: ['USD 1.050', 'USD 3.510'], EUR: ['USD 960', 'USD 3.160'], LATAM: ['USD 695', 'USD 2.365'], AR: ['USD 520', 'USD 1.750'] },
    MED: { USA: ['USD 2.280', 'USD 5.720'], EUR: ['USD 2.020', 'USD 5.100'], LATAM: ['USD 1.490', 'USD 3.690'], AR: ['USD 1.140', 'USD 2.720'] },
    FLT: { USA: ['USD 1.930', 'USD 5.100'], EUR: ['USD 1.760', 'USD 4.570'], LATAM: ['USD 1.320', 'USD 3.340'], AR: ['USD 960', 'USD 2.460'] },
    BLD: { USA: ['USD 2.460', 'USD 6.160'], EUR: ['USD 2.200', 'USD 5.450'], LATAM: ['USD 1.580', 'USD 3.960'], AR: ['USD 1.230', 'USD 2.900'] },
    CMP: { USA: ['USD 2.110', 'USD 5.980'], EUR: ['USD 1.930', 'USD 5.280'], LATAM: ['USD 1.400', 'USD 3.870'], AR: ['USD 1.050', 'USD 2.810'] },
    AGR: { USA: ['USD 1.760', 'USD 4.570'], EUR: ['USD 1.580', 'USD 4.040'], LATAM: ['USD 1.140', 'USD 2.990'], AR: ['USD 880', 'USD 2.200'] },
    EDU: { USA: ['USD 1.490', 'USD 4.220'], EUR: ['USD 1.320', 'USD 3.780'], LATAM: ['USD 960', 'USD 2.720'], AR: ['USD 740', 'USD 2.020'] }
  };

  var I18N = {
    en: {
      nav_platforms: 'Platforms',
      nav_process: 'Process',
      nav_about: 'Engineer',
      eyebrow: 'Software & Data Engineering · 100% Client Ownership',
      hero_h1: 'Turnkey business systems for a one-time fee — zero SaaS lock-in',
      hero_lead: 'I build and deliver complete, self-hosted operational platforms with full source code, PostgreSQL/SQLite databases, web portals, 1-command Docker deployment, and Google Sheets integrations so your organization truly owns its software and data.',
      cta_explore: 'Explore 8 Production Platforms',
      cta_demo: 'Request Live Demo / PDF Quote',
      pill_1: '✓ Live synthetic demo before paying',
      pill_2: '✓ One-time fee (50/50 or 40/30/30 milestones)',
      pill_3: '✓ Zero mandatory monthly subscriptions',
      pill_4: '✓ 541 automated tests + SHA-256 packages',
      pill_5: '✓ Payoneer ACH · Binance USDT (-5%) · Escrow',
      sec_platforms_h2: '8 Real Production Platforms Ready to Deliver',
      sec_platforms_sub: 'Each platform ships as a SHA-256 verified package with synthetic test data, 1-command Docker setup, and full documentation. Official one-time pricing (-12% below market median):',
      lbl_region: 'Region:',
      lbl_filter: 'Category:',
      cat_all: 'All (8)',
      cat_ops: 'Operations & ERP',
      cat_comp: 'ESG & Compliance',
      cat_imp: 'Education & Nonprofits',
      from_lbl: 'From',
      to_lbl: 'to',
      onetime_lbl: 'One-time',
      card_cta: 'Request sample →',
      proc_h2: 'How We Work With Zero Risk',
      s1_h: 'Test a Live Demo First',
      s1_p: 'Review a working synthetic-data demo or adapted schema before committing a dollar.',
      s2_h: 'Fixed-Scope PDF Proposal',
      s2_p: 'Receive exact deliverables, explicit exclusions, 30-day validity, and one-time pricing (no monthly lock-in).',
      s3_h: 'Milestone Delivery & Ownership',
      s3_p: 'Pay via 50/50 or 40/30/30 milestones (Payoneer ACH, Binance Pay USDT -5%, or Escrow) and own 100% of the code and SQL database.',
      eng_h2: 'About the Engineer',
      eng_p: 'I am Andrés Francisco Mazzuferi, a Data & Software Engineer based in Córdoba, Argentina (Tax ID CUIT 20-43812534-6), working remotely with organizations across the US, Europe, and Latin America. With a background in Industrial Engineering, Data Science (Universidad Siglo 21), and plant operations analytics, I build auditable, self-hosted software systems that replace fragile spreadsheets without trapping clients in perpetual SaaS fees.',
      eng_cta_mail: 'Email: andrewkrijdjd@gmail.com',
      eng_cta_li: 'LinkedIn Profile',
      f_stack_k: 'Core Stack',
      f_qa_k: 'Quality Gate',
      f_qa_v: '541 automated tests (Pytest, Vitest, Chrome Playwright E2E) + SHA-256 manifests',
      f_pay_k: 'Payment Rails',
      cards: {
        VOL: ['Available · 5 Editions', 'Volunteer directories, events, capacity limits, QR attendance, and automatic hour tracking for nonprofits and universities.', ['PostgreSQL 16 with RLS + SQLite/RBAC Web Portal', 'Google Sheets + Apps Script Edition', 'Verifiable completion certificates with hash']],
        ECO: ['Available · White-Label', 'Carbon Footprint (Scopes 1–3), Industrial Sustainability, and Ecosystem Health calculators with 177 cited DEFRA/IEA/IPCC factors.', ['White-label Next.js Web App + Python API + PDF/QR', 'SHA-256 cryptographic certificate verifier', 'CSV / Google Sheets export']],
        MED: ['Available · High-Ticket', 'Conflict-free multi-provider scheduling, patient registry, role-restricted clinical notes, and line-item billing.', ['Strict RBAC clinical notes (clinician/admin only)', 'Reminder outbox + secure CSV export', 'Google Sheets + 1-command Docker included']],
        FLT: ['Available · High-Ticket', 'Fleet control, fuel logs, consumption & cost per distance, in-house shop orders, and 30-day compliance alerts.', ['Monotonic odometer validation', 'Automated 30-day inspection & mileage service alerts', 'Full immutable audit trail']],
        BLD: ['Available · High-Ticket', 'Line-item construction budgets, capped progress certifications, subcontractor costs, and live budget deviation reports.', ['Automatic over-certification blocking at 100%', 'Real-time budget vs actual financial report', 'CSV / Google Sheets sync']],
        CMP: ['Available · High-Ticket', 'ISO 27001 / SOC 2 compliance portal, risk matrix, immutable SHA-256 evidence vault, and audit-ready PDF reports.', ['Tamper-evident SQLite triggers on evidence', 'Control coverage & risk treatment tracking', 'Auditable exports for external assessors']],
        AGR: ['Available · High-Ticket', 'Field-parcel traceability, zero-negative input stock, field operations, harvest tickets, and net margin per area.', ['Strict input stock & unit validation', 'Automated net profitability per field', 'Field templates in Google Sheets']],
        EDU: ['Available · High-Ticket', 'Student rosters, cohorts, attendance minimums, scholarship-adjusted payments, and QR-verifiable PDF diplomas.', ['Blocks certificate if attendance or grade not met', 'Public /verificar page exposing zero PII', 'Vector PDF with QR + CSV export']]
      }
    },
    es: {
      nav_platforms: 'Plataformas',
      nav_process: 'Proceso',
      nav_about: 'Ingeniero',
      eyebrow: 'Ingeniería de Software y Datos · Propiedad 100% del Cliente',
      hero_h1: 'Sistemas empresariales cerrados por pago único — sin suscripciones',
      hero_lead: 'Desarrollo y entrego plataformas operativas completas con código fuente, base de datos PostgreSQL/SQLite, portal web, despliegue Docker en 1 comando e integración con Google Sheets para que tu organización sea dueña real de su software y sus datos.',
      cta_explore: 'Ver las 8 Plataformas',
      cta_demo: 'Solicitar Demo / Presupuesto PDF',
      pill_1: '✓ Demo verificable antes de pagar',
      pill_2: '✓ Pago único (hitos 50/50 o 40/30/30)',
      pill_3: '✓ Cero cuotas mensuales obligatorias',
      pill_4: '✓ 541 tests automatizados + paquetes SHA-256',
      pill_5: '✓ Payoneer ACH · Binance USDT (-5%) · Escrow',
      sec_platforms_h2: '8 Plataformas Reales Listas para Entregar',
      sec_platforms_sub: 'Cada producto incluye paquete verificable con checksum SHA-256, datos sintéticos de prueba, Docker en 1 comando y documentación técnica. Precios oficiales de pago único (-12% vs mediana de mercado):',
      lbl_region: 'Región:',
      lbl_filter: 'Categoría:',
      cat_all: 'Todas (8)',
      cat_ops: 'Operaciones y ERP',
      cat_comp: 'ESG y Auditoría',
      cat_imp: 'Educación y ONGs',
      from_lbl: 'Desde',
      to_lbl: 'hasta',
      onetime_lbl: 'Pago único',
      card_cta: 'Solicitar muestra →',
      proc_h2: 'Cómo Trabajamos Sin Riesgo',
      s1_h: '1) Probá la Demo Primero',
      s1_p: 'Evaluá una demo real con datos sintéticos o un esquema adaptado a tu flujo antes de pagar.',
      s2_h: '2) Propuesta PDF Cerrada',
      s2_p: 'Recibís alcance exacto, exclusiones, validez 30 días y precio cerrado por pago único (sin mensualidades).',
      s3_h: '3) Entrega por Hitos y Propiedad',
      s3_p: 'Abonás por hitos 50/50 o 40/30/30 (Payoneer ACH, Binance Pay USDT -5% o Escrow) y te quedás con el 100% del código y base SQL.',
      eng_h2: 'Sobre el Ingeniero',
      eng_p: 'Soy Andrés Francisco Mazzuferi, Ingeniero de Datos y Software en Córdoba, Argentina (CUIT 20-43812534-6), trabajando en remoto para empresas de EE. UU., Europa y Latinoamérica. Con formación en Ingeniería Industrial, Licenciatura en Ciencia de Datos (Univ. Siglo 21) y experiencia en análisis industrial, reemplazo planillas frágiles por sistemas propios auditables.',
      eng_cta_mail: 'Email: andrewkrijdjd@gmail.com',
      eng_cta_li: 'Perfil de LinkedIn',
      f_stack_k: 'Stack Principal',
      f_qa_k: 'Control de Calidad',
      f_qa_v: '541 pruebas automatizadas (Pytest, Vitest, Chrome Playwright E2E) + manifiestos SHA-256',
      f_pay_k: 'Medios de Cobro',
      cards: {
        VOL: ['Disponible · 5 Modalidades', 'Gestión de voluntarios, eventos, cupos, asistencia QR y cálculo automático de horas para ONGs y universidades.', ['PostgreSQL 16 con RLS + Portal Web SQLite/RBAC', 'Edición Google Sheets + Apps Script', 'Certificados verificables con hash']],
        ECO: ['Disponible · White-Label', 'Calculadoras de Huella de Carbono (Alcances 1–3), Sostenibilidad Industrial e Índice Ecosistémico con 177 factores DEFRA/IEA/IPCC.', ['App Next.js White-Label + API Python + PDF/QR', 'Verificador SHA-256 de integridad', 'Exportación CSV / Google Sheets']],
        MED: ['Disponible · High-Ticket', 'Agenda médica sin solapamientos, pacientes, historias clínicas restringidas por rol y facturación por líneas.', ['Control estricto de notas clínicas (solo profesional/admin)', 'Outbox de recordatorios + export CSV', 'Google Sheets + Docker en 1 comando']],
        FLT: ['Disponible · High-Ticket', 'Control de flotas, cargas de combustible, consumo y costo por distancia, órdenes de taller y alertas VTV/service.', ['Validación de odómetro no decreciente', 'Alertas automáticas a 30 días y por km', 'Trazabilidad completa auditada']],
        BLD: ['Disponible · High-Ticket', 'Presupuestador de obra por partidas, certificaciones bloqueadas al 100%, subcontratistas y alerta de desvío real.', ['Bloqueo automático de sobre-certificación', 'Reporte financiero por proyecto y período', 'Sincronización CSV / Sheets']],
        CMP: ['Disponible · High-Ticket', 'Portal ISO 27001 / SOC 2, matriz de riesgos probabilidad×impacto, evidencias SHA-256 inmutables y reporte PDF.', ['Triggers SQLite anti-alteración de evidencias', 'Seguimiento de controles y riesgos', 'Exportación auditable para terceros']],
        AGR: ['Disponible · High-Ticket', 'Trazabilidad por lote, stock de insumos sin negativos, labores de campo, cartas de porte y rentabilidad neta por área.', ['Validación estricta de stock y unidades', 'Cálculo real de margen por hectárea', 'Plantillas de campo en Google Sheets']],
        EDU: ['Disponible · High-Ticket', 'Gestión de alumnos, cohortes, asistencias mínimas, pagos con saldo y emisión de diplomas PDF verificables por QR.', ['Bloqueo de diploma si falta asistencia o aprobación', 'Verificador público /verificar sin exponer PII', 'PDF vectorial con QR + CSV']]
      }
    }
  };

  var currentRegion = 'USA';
  var currentLang = 'en';
  var currentCat = 'all';

  function announce(msg) {
    var el = document.getElementById('live-status');
    if (el) el.textContent = msg;
  }

  function applyRegion(reg) {
    currentRegion = reg;
    document.querySelectorAll('.reg-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.reg === reg ? 'true' : 'false');
    });
    document.querySelectorAll('.card[data-sku]').forEach(function (card) {
      var pair = PRICING[card.dataset.sku] && PRICING[card.dataset.sku][reg];
      if (!pair) return;
      var minEl = card.querySelector('.price-val');
      var maxEl = card.querySelector('.price-max');
      if (minEl) minEl.textContent = pair[0];
      if (maxEl) maxEl.textContent = pair[1];
    });
    announce('Pricing region set to ' + reg);
  }

  function applyCategory(cat) {
    currentCat = cat;
    document.querySelectorAll('.cat-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.cat === cat ? 'true' : 'false');
    });
    var visibleCount = 0;
    document.querySelectorAll('.card[data-sku]').forEach(function (card) {
      var show = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('hidden', !show);
      if (show) visibleCount += 1;
    });
    announce(visibleCount + ' platforms shown');
  }

  function applyLang(lang) {
    currentLang = lang === 'es' ? 'es' : 'en';
    var dict = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('.card[data-sku]').forEach(function (card) {
      var cd = dict.cards[card.dataset.sku];
      if (!cd) return;
      var badge = card.querySelector('[data-card-badge]');
      var desc = card.querySelector('[data-card-desc]');
      var items = card.querySelectorAll('[data-card-list] li');
      if (badge) badge.textContent = cd[0];
      if (desc) desc.textContent = cd[1];
      items.forEach(function (li, i) { if (cd[2][i]) li.textContent = cd[2][i]; });
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === currentLang ? 'true' : 'false');
    });
    announce('Language switched to ' + currentLang.toUpperCase());
  }

  document.querySelectorAll('.reg-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyRegion(b.dataset.reg); });
  });
  document.querySelectorAll('.cat-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyCategory(b.dataset.cat); });
  });
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });

  var params = new URLSearchParams(window.location.search);
  if (params.get('lang') === 'es') applyLang('es');
  if (params.get('reg') && PRICING.VOL[params.get('reg')]) applyRegion(params.get('reg'));
  applyCategory(currentCat);
})();
