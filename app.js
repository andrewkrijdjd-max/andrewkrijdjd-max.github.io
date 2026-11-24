(function () {
  'use strict';

  var WA_NUMBER = '5493518119981';
  var EMAIL = 'andrewkrijdjd@gmail.com';

  // Single global international USD price list (no public regional switcher)
  var PRODUCTS = [
    {
      sku: 'MED',
      slug: 'medflow',
      cat: 'ops',
      saasPerUserMonth: 40,
      name: 'MedFlow',
      demoUrl: 'medflow.kreta.app',
      sector: { en: 'Clinics & Medical Practices', es: 'Clínicas y Consultorios' },
      headline: {
        en: 'End double-booked appointments and keep every patient record private.',
        es: 'Terminá con los turnos superpuestos y protegé las historias clínicas de tu equipo.'
      },
      bullets: {
        en: [
          'Multi-provider calendar that prevents scheduling conflicts',
          'Private clinical notes visible only to doctors and admins',
          'Itemized patient billing & appointment reminder queue'
        ],
        es: [
          'Agenda multi-profesional que evita choques de horarios',
          'Historias clínicas privadas solo para médicos y admins',
          'Facturación por prestación y cola de recordatorios'
        ]
      },
      editions: [
        { key: 'sheets', price: 790 },
        { key: 'sql_web', price: 2490 },
        { key: 'hibrido', price: 4290 }
      ]
    },
    {
      sku: 'FLT',
      slug: 'fleetguard',
      cat: 'ops',
      saasPerUserMonth: 45,
      name: 'FleetGuard',
      demoUrl: 'fleetguard.kreta.app',
      sector: { en: 'Trucking & Commercial Fleets', es: 'Flotas y Transporte' },
      headline: {
        en: 'Know your real fuel cost per mile and never miss an inspection again.',
        es: 'Conocé tu costo real de combustible por km y no pierdas nunca un vencimiento.'
      },
      bullets: {
        en: [
          'Fuel log analytics with instant cost-per-distance tracking',
          'In-house workshop maintenance orders & mileage validation',
          'Automatic 30-day alerts for DOT/inspections, insurance & PM'
        ],
        es: [
          'Cargas de combustible con consumo y costo por km automático',
          'Órdenes de taller propio y validación real de odómetros',
          'Alertas automáticas a 30 días de VTV, seguros y service'
        ]
      },
      editions: [
        { key: 'sheets', price: 890 },
        { key: 'sql_web', price: 2990 },
        { key: 'hibrido', price: 4990 }
      ]
    },
    {
      sku: 'BLD',
      slug: 'buildcost',
      cat: 'field',
      saasPerUserMonth: 55,
      name: 'BuildCost',
      demoUrl: 'buildcost.kreta.app',
      sector: { en: 'Construction & Remodeling', es: 'Constructoras y Obras' },
      headline: {
        en: 'Stop losing margin to surprise subcontractor bills and over-billing.',
        es: 'Frená los sobrecostos de obra y controlá certificaciones y subcontratistas.'
      },
      bullets: {
        en: [
          'Line-item job budgets that automatically recalculate totals',
          'Progress billing cap that blocks over-certification past 100%',
          'Instant budget vs. actual overrun report per project'
        ],
        es: [
          'Presupuesto de obra por partidas con cálculo total automático',
          'Tope automático que impide certificar más del 100% previsto',
          'Reporte inmediato de desvío real vs. presupuestado por obra'
        ]
      },
      editions: [
        { key: 'sheets', price: 990 },
        { key: 'sql_web', price: 3490 },
        { key: 'hibrido', price: 5990 }
      ]
    },
    {
      sku: 'CMP',
      slug: 'compliancevault',
      cat: 'esg',
      saasPerUserMonth: 50,
      name: 'ComplianceVault',
      demoUrl: 'compliance.kreta.app',
      sector: { en: 'ISO 27001 & SOC 2 Audits', es: 'Auditorías ISO y SOC 2' },
      headline: {
        en: 'Stay audit-ready all year without scrambling through scattered folders.',
        es: 'Pasá auditorías ISO 27001 y SOC 2 sin correr detrás de carpetas sueltas.'
      },
      bullets: {
        en: [
          'Clear control coverage dashboard & live risk scoring matrix',
          'Protected evidence vault with tamper-proof cryptographic proof',
          'One-click PDF audit packet ready for external assessors'
        ],
        es: [
          'Tablero claro de cobertura de controles y matriz de riesgos',
          'Bóveda de evidencias protegida contra alteraciones (SHA-256)',
          'Reporte PDF de auditoría en 1 clic listo para evaluadores'
        ]
      },
      editions: [
        { key: 'sheets', price: 990 },
        { key: 'sql_web', price: 2490 },
        { key: 'hibrido', price: 4490 }
      ]
    },
    {
      sku: 'ECO',
      slug: 'ecometrics',
      cat: 'esg',
      saasPerUserMonth: 42,
      name: 'EcoMetrics',
      demoUrl: 'ecometrics.kreta.app',
      sector: { en: 'ESG & Carbon Reporting', es: 'ESG y Huella de Carbono' },
      headline: {
        en: 'Deliver audit-ready carbon reports your clients and funders trust.',
        es: 'Generá reportes auditables de huella de carbono con tu propia marca.'
      },
      bullets: {
        en: [
          'Scope 1–3 carbon & sustainability calculators (177 official factors)',
          '100% white-label with your logo, domain, and custom brand colors',
          'Verifiable PDF certificates with scannable QR authenticity check'
        ],
        es: [
          'Calculadoras Alcance 1–3 y sostenibilidad (177 factores oficiales)',
          '100% marca blanca con tu logo, colores y encabezados propios',
          'Certificados PDF con código QR público de verificación'
        ]
      },
      editions: [
        { key: 'sheets', price: 1050 },
        { key: 'sql', price: 1750 },
        { key: 'sheets_web', price: 2370 },
        { key: 'sql_web', price: 2895 },
        { key: 'hibrido', price: 3510 }
      ]
    },
    {
      sku: 'AGR',
      slug: 'agrofield',
      cat: 'field',
      saasPerUserMonth: 35,
      name: 'AgroField',
      demoUrl: 'agrofield.kreta.app',
      sector: { en: 'Farms & Agronomy', es: 'Agro y Acopios' },
      headline: {
        en: 'See exact net profit per acre/hectare across every field and harvest.',
        es: 'Conocé tu margen neto real por hectárea en cada lote y cosecha.'
      },
      bullets: {
        en: [
          'Input inventory control that prevents stock errors and negative balances',
          'Track field operations, labor costs, and harvest delivery tickets',
          'Automatic net profitability breakdown for every parcel'
        ],
        es: [
          'Control real de stock de insumos sin negativos ni errores de unidad',
          'Seguimiento de labores, costos de campo y cartas de porte',
          'Cálculo automático de rentabilidad neta por cada lote'
        ]
      },
      editions: [
        { key: 'sheets', price: 690 },
        { key: 'sql_web', price: 2640 },
        { key: 'hibrido', price: 5720 }
      ]
    },
    {
      sku: 'EDU',
      slug: 'educampus',
      cat: 'edu',
      saasPerUserMonth: 28,
      name: 'EduCampus',
      demoUrl: 'educampus.kreta.app',
      sector: { en: 'Academies & Training', es: 'Academias e Institutos' },
      headline: {
        en: 'Automate student attendance, tuition tracking, and QR-verified diplomas.',
        es: 'Automatizá asistencias, cuotas/becas y diplomas PDF verificables por QR.'
      },
      bullets: {
        en: [
          'Cohorts, attendance rules, and scholarship-adjusted balances',
          'Automatic check blocking diplomas until requirements are met',
          'Instant PDF certificates with public employer QR verification'
        ],
        es: [
          'Cohortes, reglas de asistencia mínima y control de becas/pagos',
          'Bloqueo automático de diplomas si falta asistencia o aprobación',
          'Certificados PDF instantáneos con validación pública por QR'
        ]
      },
      editions: [
        { key: 'sheets', price: 590 },
        { key: 'sql_web', price: 1240 },
        { key: 'hibrido', price: 3990 }
      ]
    },
    {
      sku: 'VOL',
      slug: 'voluntariosdb',
      cat: 'edu',
      saasPerUserMonth: 26,
      name: 'VoluntariosDB',
      demoUrl: 'voluntarios.kreta.app',
      sector: { en: 'Nonprofits & Universities', es: 'ONGs y Universidades' },
      headline: {
        en: 'Track volunteers, event shifts, and QR check-in hours in one place.',
        es: 'Centralizá voluntarios, cupos de eventos y horas acreditadas con QR.'
      },
      bullets: {
        en: [
          'Volunteer directory, event capacities, and instant QR check-in',
          'Automatic cumulative hour reports ready for grants & donors',
          'Includes both lightweight Web Portal and PostgreSQL 16 schema'
        ],
        es: [
          'Directorio de voluntarios, cupos de jornadas y check-in QR',
          'Cálculo automático de horas listo para donantes y universidades',
          'Incluye portal web inmediato y base enterprise PostgreSQL 16'
        ]
      },
      editions: [
        { key: 'sheets', price: 610 },
        { key: 'sql', price: 1050 },
        { key: 'sheets_web', price: 1930 },
        { key: 'sql_web', price: 2370 },
        { key: 'hibrido', price: 2720 }
      ]
    }
  ];

  var EDITION_META = {
    sheets: {
      en: ['Google Sheets Starter', 'Automated Sheets + Apps Script workflows'],
      es: ['Inicial Google Sheets', 'Planillas pro automatizadas con Apps Script']
    },
    sql: {
      en: ['SQL Database + API', 'PostgreSQL schema, triggers & REST API'],
      es: ['Base SQL + API', 'Esquema PostgreSQL, triggers y API REST']
    },
    sheets_web: {
      en: ['Sheets + Web Portal', 'Branded web frontend synced to Sheets'],
      es: ['Sheets + Portal Web', 'Portal web propio conectado a Google Sheets']
    },
    sql_web: {
      en: ['Complete Web App (Most Popular)', 'Full web portal, user roles, SQL database & Docker'],
      es: ['App Web Completa (Más elegida)', 'Portal web completo, roles, base SQL y Docker']
    },
    hibrido: {
      en: ['All-in-One Hybrid', 'Web Portal + SQL database + Google Sheets sync'],
      es: ['Paquete Híbrido Total', 'Portal web + base SQL + sincronización Sheets']
    }
  };

  var I18N = {
    en: {
      skip_link: 'Skip to main content',
      nav_platforms: 'Platforms',
      nav_process: 'How it works',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      nav_cta: 'Book a demo',
      hero_tag: 'Pay once · Own 100% of your software & data',
      hero_h1: 'Software built for your business—without monthly subscriptions.',
      hero_lead: 'Replace messy spreadsheets and expensive per-user SaaS bills with a ready-to-run system you actually own. Test a live demo first, pay by milestones, and keep the full source code and database forever.',
      hero_cta_1: 'See all 8 systems',
      hero_cta_2: 'Compare plans & demo',
      m_1: 'Working systems ready today',
      m_2: 'Safe milestone payments',
      m_3: 'Recurring software fees',
      calc_title: 'Own vs. Rent: 3-Year Savings Calculator',
      calc_sub: 'Compare any edition (Google Sheets, SQL, Web Portal, or Hybrid) against typical monthly SaaS subscriptions.',
      calc_ind_lbl: 'Platform',
      calc_ed_lbl: 'Edition',
      calc_team_lbl: 'Team size',
      tick_1: '5–15 (1.0×)',
      tick_2: '16–35 (1.25×)',
      tick_3: '36–60+ (1.5×)',
      calc_saas_lbl: 'Typical SaaS (36 months)',
      calc_save_lbl: 'Estimated 3-year savings',
      calc_inspect: 'See this plan',
      cat_h2: 'Real working software—ready for your team',
      cat_sub: 'Every preview below is a real screen from the working application. Click any platform to compare Google Sheets, Web Portal, and Hybrid editions.',
      f_all: 'All platforms (8)',
      f_ops: 'Clinics & Fleets',
      f_field: 'Construction & Agro',
      f_esg: 'ESG & Compliance',
      f_edu: 'Education & Nonprofits',
      sheets_lbl: 'Google Sheets',
      webapp_lbl: 'Full Web App',
      view_btn: 'Demo & pricing',
      cust_h3: 'Need custom fields, integrations, or a system built around your spreadsheet?',
      cust_p: 'We adapt any platform to your logo, terminology, and workflow—or quote a dedicated system with the same one-time ownership model.',
      cust_wa: 'Chat on WhatsApp',
      cust_gm: 'Open in Gmail',
      flow_h2: 'How buying works—simple and zero risk',
      flow_sub: 'You test the real software before paying anything, approve a clear written quote, and own 100% of what we deliver.',
      st1_h: 'Test a live demo first',
      st1_p: 'We walk you through the working web app or Google Sheets system with sample data so your team can see every screen firsthand.',
      st2_h: 'Approve your closed PDF quote',
      st2_p: 'You receive a fixed-scope PDF proposal listing exact features, timeline, and one-time investment—zero hidden fees or surprise renewals.',
      st3_h: 'Pay by milestones & own it forever',
      st3_p: 'Pay 50% to start and 50% on handover (or 40/30/30 via Payoneer USD ACH, Escrow, or Binance Pay USDT with 5% off) and keep full code & data.',
      faq_h2: 'Questions buyers ask most',
      faq_sub: 'Straightforward answers on ownership, setup, team scaling, and payments.',
      q1_q: 'Are there really zero monthly fees after I buy?',
      q1_a: 'Yes. You pay once and receive the complete source code, database, and spreadsheet templates under your company\'s ownership. No recurring seat licenses ever.',
      q2_q: 'Does the price change if my team grows?',
      q2_a: 'Initial implementation is sized by organization tier (up to 15 users, 16–35 users, or 36+ users) so setup and onboarding match your complexity. Once delivered, you own the software with zero per-user monthly charges.',
      q3_q: 'Where is our data stored? Do you control our hosting?',
      q3_a: 'Your data stays 100% under your control. Every system ships ready to run in 1 command on your own server, cloud account (AWS, Google Cloud, Render, VPS), or local office computer—you never depend on us for hosting.',
      q4_q: 'How do payments work internationally?',
      q4_a: 'We work in safe milestones (50/50 or 40/30/30). You can pay via Payoneer (USD ACH), freelance Escrow (Upwork/Freelancer), or Binance Pay / USDT (which includes an instant 5% prompt-payment discount).',
      q5_q: 'Can we start with Google Sheets and upgrade later?',
      q5_a: 'Yes. You can launch with the Google Sheets Edition today and upgrade to the full Web Portal + SQL Edition whenever you are ready.',
      ct_pill: 'Direct with engineering · Fast reply',
      ct_h2: 'Ready to see your system running live?',
      ct_lead: 'Kreta Software is led by Andrés Francisco Mazzuferi (Software & Data Engineer · CUIT 20-43812534-6), working remotely with businesses across the US, Europe, and Latin America. Message us on WhatsApp or Gmail and we will send a tailored demo walkthrough and closed PDF quote.',
      ct_btn_wa: 'Message on WhatsApp',
      ct_btn_gm: 'Compose in Gmail',
      ct_btn_copy: 'Copy email',
      st_card_h: 'Every Kreta Software delivery includes',
      st_l1: '100% source code & database ownership—zero lock-in',
      st_l2: '1-command Docker deployment + setup guide for your team',
      st_l3: 'Verified quality (541 automated & real-browser tests)',
      st_l4: 'Safe milestones · Payoneer ACH · Binance USDT (-5%) · Escrow',
      dr_features: 'What your team gets',
      dr_tier: '1. Organization size',
      tier_1: 'Up to 15 users (1.0×)',
      tier_2: '16–35 users (1.25×)',
      tier_3: '36+ users (1.5×)',
      dr_editions: '2. Choose edition (one-time)',
      dr_usdt: 'Apply 5% prompt-payment discount (Binance Pay / USDT)',
      dr_total_lbl: 'One-time investment',
      dr_total_note: '0 monthly fees · Full code yours',
      dr_cta_wa: 'Request live demo on WhatsApp',
      dr_cta_gm: 'Open in Gmail',
      dr_cta_copy: 'Copy inquiry',
      users_word: 'users',
      tier_name_1: 'Standard',
      tier_name_2: 'Growing Team',
      tier_name_3: 'Scale',
      split_fmt: 'Milestones: {half} to start · {half} on delivery',
      copied_email: 'Email copied: andrewkrijdjd@gmail.com',
      copied_inquiry: 'Inquiry summary copied to clipboard'
    },
    es: {
      skip_link: 'Saltar al contenido principal',
      nav_platforms: 'Plataformas',
      nav_process: 'Cómo funciona',
      nav_faq: 'Preguntas',
      nav_contact: 'Contacto',
      nav_cta: 'Pedir demo',
      hero_tag: 'Pago único · 100% propiedad del código y tus datos',
      hero_h1: 'Software hecho para tu empresa—sin suscripciones mensuales.',
      hero_lead: 'Reemplazá planillas desordenadas y cuotas caras por usuario con un sistema listo para usar que es realmente tuyo. Probás la demo primero, pagás por hitos y te quedás con todo el código.',
      hero_cta_1: 'Ver los 8 sistemas',
      hero_cta_2: 'Comparar planes y demo',
      m_1: 'Sistemas reales listos hoy',
      m_2: 'Pagos seguros por hitos',
      m_3: 'Cuotas mensuales obligatorias',
      calc_title: 'Comprar vs. Alquilar: Ahorro en 3 años',
      calc_sub: 'Compará cualquier modalidad (Google Sheets, SQL, App Web o Híbrido) contra un SaaS mensual tradicional.',
      calc_ind_lbl: 'Plataforma',
      calc_ed_lbl: 'Modalidad',
      calc_team_lbl: 'Tamaño de tu equipo',
      tick_1: '5–15 (1.0×)',
      tick_2: '16–35 (1.25×)',
      tick_3: '36–60+ (1.5×)',
      calc_saas_lbl: 'SaaS tradicional (36 meses)',
      calc_save_lbl: 'Ahorro estimado en 3 años',
      calc_inspect: 'Ver este plan',
      cat_h2: 'Software real funcionando—listo para tu equipo',
      cat_sub: 'Cada vista previa de abajo es una pantalla real de la aplicación funcionando. Hacé clic en cualquiera para comparar Google Sheets, App Web e Híbrido.',
      f_all: 'Todas (8)',
      f_ops: 'Clínicas y Flotas',
      f_field: 'Obras y Agro',
      f_esg: 'ESG y Auditoría',
      f_edu: 'Educación y ONGs',
      sheets_lbl: 'Google Sheets',
      webapp_lbl: 'App Web Completa',
      view_btn: 'Ver demo y precios',
      cust_h3: '¿Necesitás campos a medida, integraciones o pasar tu planilla a sistema propio?',
      cust_p: 'Adaptamos cualquier plataforma con tu logo, flujo y reportes—o cotizamos un desarrollo dedicado bajo el mismo esquema de pago único.',
      cust_wa: 'Hablar por WhatsApp',
      cust_gm: 'Abrir en Gmail',
      flow_h2: 'Cómo comprar—simple y sin riesgo',
      flow_sub: 'Primero probás la demo real, después aprobás una propuesta PDF cerrada y al finalizar te quedás con el 100% del código.',
      st1_h: 'Probá una demo real primero',
      st1_p: 'Te mostramos el portal web o las planillas funcionando con datos de prueba para que tu equipo valide cada pantalla.',
      st2_h: 'Aprobá tu propuesta PDF cerrada',
      st2_p: 'Recibís alcance exacto, plazos e inversión por pago único por escrito—cero costos ocultos ni renovaciones.',
      st3_h: 'Pagá por hitos y quedate con todo',
      st3_p: 'Pagás 50% al iniciar y 50% al entregar (o 40/30/30 vía Payoneer USD ACH, Escrow o Binance Pay USDT con 5% OFF) y el código es tuyo para siempre.',
      faq_h2: 'Preguntas frecuentes de clientes',
      faq_sub: 'Respuestas claras sobre propiedad, instalación, crecimiento del equipo y pagos.',
      q1_q: '¿Realmente no hay cuotas mensuales después de comprar?',
      q1_a: 'Exacto. Pagás una sola vez y recibís el código fuente completo, la base de datos y las plantillas a nombre de tu empresa. Cero licencias mensuales por usuario.',
      q2_q: '¿El precio varía según el tamaño del equipo?',
      q2_a: 'La implementación inicial se dimensiona por tramo de organización (hasta 15, 16–35 o 36+ usuarios) según complejidad y puesta en marcha. Una vez entregado, no hay cuotas recurrentes por usuario.',
      q3_q: '¿Dónde quedan nuestros datos? ¿Ustedes controlan el servidor?',
      q3_a: 'Tus datos son 100% tuyos. Cada sistema viene listo para levantar en 1 comando en tu propio servidor, nube (AWS, Google Cloud, Render, VPS) o red interna, sin depender de nosotros.',
      q4_q: '¿Cómo se pagan los proyectos internacionalmente?',
      q4_a: 'Se trabaja en hitos seguros (50/50 o 40/30/30). Aceptamos Payoneer (USD ACH), Escrow de plataformas y Binance Pay / USDT (con 5% de descuento inmediato).',
      q5_q: '¿Podemos empezar con Google Sheets y pasar a App Web después?',
      q5_a: 'Sí. Podés arrancar hoy con la Edición Google Sheets y escalar al Portal Web + SQL cuando tu operación lo necesite.',
      ct_pill: 'Trato directo con ingeniería · Respuesta rápida',
      ct_h2: '¿Querés ver tu sistema funcionando en vivo?',
      ct_lead: 'Kreta Software es dirigido por Andrés Francisco Mazzuferi (Ingeniero de Software y Datos · CUIT 20-43812534-6), trabajando en remoto para empresas de EE. UU., Europa y Latinoamérica. Escribinos por WhatsApp o Gmail y te enviamos una demo personalizada y propuesta PDF.',
      ct_btn_wa: 'Escribir por WhatsApp',
      ct_btn_gm: 'Redactar en Gmail',
      ct_btn_copy: 'Copiar email',
      st_card_h: 'Cada entrega de Kreta Software incluye',
      st_l1: '100% propiedad del código fuente y base de datos—sin lock-in',
      st_l2: 'Despliegue Docker en 1 comando + guía clara de puesta en marcha',
      st_l3: 'Calidad verificada (541 pruebas automatizadas y en navegador real)',
      st_l4: 'Hitos seguros · Payoneer ACH · Binance USDT (-5%) · Escrow',
      dr_features: 'Qué resuelve para tu equipo',
      dr_tier: '1. Tamaño de la organización',
      tier_1: 'Hasta 15 usuarios (1.0×)',
      tier_2: '16–35 usuarios (1.25×)',
      tier_3: '36+ usuarios (1.5×)',
      dr_editions: '2. Elegí modalidad (pago único)',
      dr_usdt: 'Aplicar 5% de descuento pronto pago (Binance Pay / USDT)',
      dr_total_lbl: 'Inversión de pago único',
      dr_total_note: '0 cuotas mensuales · Código 100% tuyo',
      dr_cta_wa: 'Pedir demo en vivo por WhatsApp',
      dr_cta_gm: 'Abrir en Gmail',
      dr_cta_copy: 'Copiar consulta',
      users_word: 'usuarios',
      tier_name_1: 'Estándar',
      tier_name_2: 'En crecimiento',
      tier_name_3: 'Escala',
      split_fmt: 'Hitos: {half} al inicio · {half} a la entrega',
      copied_email: 'Email copiado: andrewkrijdjd@gmail.com',
      copied_inquiry: 'Consulta copiada al portapapeles'
    }
  };

  var state = {
    lang: 'en',
    category: 'all',
    calcSku: 'MED',
    calcEdition: 'sql_web',
    calcUsers: 15,
    drawerSku: null,
    drawerEdition: 'sql_web',
    drawerMult: 1,
    drawerUsdt: false,
    lastTrigger: null
  };

  function fmtUSD(amount) {
    return '$' + Math.round(Number(amount)).toLocaleString('en-US') + ' USD';
  }

  function fmtShort(amount) {
    return '$' + Math.round(Number(amount)).toLocaleString('en-US');
  }

  function tierForUsers(u) {
    if (u <= 15) return { mult: 1, key: 'tier_name_1' };
    if (u <= 35) return { mult: 1.25, key: 'tier_name_2' };
    return { mult: 1.5, key: 'tier_name_3' };
  }

  function el(tag, attrs, text) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    }
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function findProduct(sku) {
    return PRODUCTS.find(function (p) { return p.sku === sku; }) || PRODUCTS[0];
  }

  function showToast(message) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 2600);
  }

  function announce(msg) {
    var live = document.getElementById('live-announcer');
    if (live) live.textContent = msg;
  }

  function populateCalcSelects() {
    var prodSel = document.getElementById('calc-product');
    var edSel = document.getElementById('calc-edition');
    if (!prodSel || !edSel) return;

    prodSel.replaceChildren();
    PRODUCTS.forEach(function (p) {
      var opt = el('option', { value: p.sku }, p.name + ' — ' + p.sector[state.lang]);
      if (p.sku === state.calcSku) opt.selected = true;
      prodSel.appendChild(opt);
    });

    var currentProd = findProduct(state.calcSku);
    var hasEd = currentProd.editions.some(function (e) { return e.key === state.calcEdition; });
    if (!hasEd) {
      var pref = currentProd.editions.find(function (e) { return e.key === 'sql_web'; });
      state.calcEdition = pref ? pref.key : currentProd.editions[0].key;
    }

    edSel.replaceChildren();
    currentProd.editions.forEach(function (ed) {
      var label = EDITION_META[ed.key][state.lang][0];
      var opt = el('option', { value: ed.key }, label);
      if (ed.key === state.calcEdition) opt.selected = true;
      edSel.appendChild(opt);
    });
  }

  function updateCalculator() {
    var dict = I18N[state.lang];
    var prod = findProduct(state.calcSku);
    var ed = prod.editions.find(function (e) { return e.key === state.calcEdition; }) || prod.editions[0];
    var tier = tierForUsers(state.calcUsers);

    document.getElementById('calc-users-val').textContent =
      state.calcUsers + ' ' + dict.users_word + ' · ' + dict[tier.key] + ' (' + tier.mult + '×)';

    var kretaCost = Math.round(ed.price * tier.mult);
    var saas3yr = Math.round(state.calcUsers * prod.saasPerUserMonth * 36);
    if (saas3yr < kretaCost * 2.1) saas3yr = Math.round(kretaCost * 2.4);
    var savings = Math.max(0, saas3yr - kretaCost);
    var pct = Math.max(10, Math.min(90, Math.round((kretaCost / saas3yr) * 100)));

    var edShort = EDITION_META[ed.key][state.lang][0];
    document.getElementById('calc-kreta-label').textContent = 'Kreta Software (' + edShort + ')';
    document.getElementById('calc-saas-num').textContent = fmtUSD(saas3yr);
    document.getElementById('calc-kreta-num').textContent = fmtUSD(kretaCost);
    document.getElementById('calc-save-num').textContent = fmtUSD(savings);
    document.getElementById('bar-kreta').style.width = pct + '%';

    var half = fmtShort(Math.round(kretaCost / 2));
    document.getElementById('calc-milestone-note').textContent = dict.split_fmt.replace(/\{half\}/g, half);
  }

  function renderGrid() {
    var grid = document.getElementById('product-grid');
    if (!grid) return;
    var dict = I18N[state.lang];
    grid.replaceChildren();
    var visible = 0;

    PRODUCTS.forEach(function (prod) {
      var show = state.category === 'all' || prod.cat === state.category;
      if (show) visible += 1;

      var card = el('article', {
        class: 'p-card' + (show ? '' : ' hidden'),
        'data-sku': prod.sku,
        'data-cat': prod.cat
      });

      // Browser mockup with REAL working screenshot
      var frame = el('div', { class: 'browser-frame' });
      var bar = el('div', { class: 'browser-bar', 'aria-hidden': 'true' });
      bar.append(el('span', { class: 'b-dot' }), el('span', { class: 'b-dot' }), el('span', { class: 'b-dot' }), el('span', { class: 'b-url' }, prod.demoUrl));
      var shot = el('div', { class: 'browser-shot' });
      var img = el('img', {
        src: 'assets/screens/' + prod.slug + '.png',
        alt: prod.name + ' — ' + prod.sector[state.lang] + ' live interface',
        width: '1280',
        height: '800',
        loading: 'lazy'
      });
      shot.appendChild(img);
      frame.append(bar, shot);

      // Copy body
      var body = el('div', { class: 'p-body' });
      body.append(
        el('span', { class: 'p-sector' }, prod.sector[state.lang]),
        el('h3', null, prod.name),
        el('p', { class: 'p-desc' }, prod.headline[state.lang])
      );
      var ul = el('ul', { class: 'p-bullets' });
      prod.bullets[state.lang].forEach(function (b) { ul.appendChild(el('li', null, b)); });
      body.appendChild(ul);

      // Footer with clear transparent dual pricing (Sheets + Full Web App)
      var sheetsEd = prod.editions.find(function (e) { return e.key === 'sheets'; }) || prod.editions[0];
      var webEd = prod.editions.find(function (e) { return e.key === 'sql_web'; }) || prod.editions[prod.editions.length - 1];

      var foot = el('div', { class: 'p-foot' });
      var prices = el('div', { class: 'p-prices' });
      var t1 = el('div', { class: 'p-tier' });
      t1.append(el('span', { class: 'p-tier-lbl' }, dict.sheets_lbl), el('span', { class: 'p-tier-val tabular' }, fmtShort(sheetsEd.price)));
      var t2 = el('div', { class: 'p-tier' });
      t2.append(el('span', { class: 'p-tier-lbl' }, dict.webapp_lbl), el('span', { class: 'p-tier-val primary tabular' }, fmtShort(webEd.price)));
      prices.append(t1, t2);

      var btn = el('button', { type: 'button', class: 'btn btn-primary btn-sm' }, dict.view_btn);
      btn.addEventListener('click', function () {
        openDrawer(prod.sku, 'sql_web', 1, btn);
      });
      foot.append(prices, btn);

      card.append(frame, body, foot);
      grid.appendChild(card);
    });

    announce(visible + ' platforms displayed');
  }

  function renderDrawer() {
    if (!state.drawerSku) return;
    var prod = findProduct(state.drawerSku);
    var dict = I18N[state.lang];

    document.getElementById('drawer-sector').textContent = prod.sector[state.lang];
    document.getElementById('drawer-title').textContent = prod.name;
    document.getElementById('drawer-desc').textContent = prod.headline[state.lang];

    var img = document.getElementById('drawer-img');
    img.src = 'assets/screens/' + prod.slug + '.png';
    img.alt = prod.name + ' live application screen';

    var featList = document.getElementById('drawer-features');
    featList.replaceChildren();
    prod.bullets[state.lang].forEach(function (item) {
      featList.appendChild(el('li', null, item));
    });

    document.querySelectorAll('.tier-btn').forEach(function (tb) {
      tb.setAttribute('aria-checked', Number(tb.dataset.mult) === state.drawerMult ? 'true' : 'false');
    });

    var hasCurrent = prod.editions.some(function (e) { return e.key === state.drawerEdition; });
    if (!hasCurrent) {
      var pref = prod.editions.find(function (e) { return e.key === 'sql_web'; });
      state.drawerEdition = pref ? pref.key : prod.editions[0].key;
    }

    var edContainer = document.getElementById('drawer-editions');
    edContainer.replaceChildren();
    var selectedPrice = 0;
    var selectedLabel = '';

    prod.editions.forEach(function (ed) {
      var meta = EDITION_META[ed.key][state.lang];
      var scaled = Math.round(ed.price * state.drawerMult);
      var isSel = ed.key === state.drawerEdition;
      if (isSel) {
        selectedPrice = scaled;
        selectedLabel = meta[0];
      }
      var btn = el('button', {
        type: 'button',
        class: 'edition-opt',
        role: 'radio',
        'aria-checked': isSel ? 'true' : 'false'
      });
      var left = el('span');
      left.append(el('span', { class: 'ed-name' }, meta[0]), el('span', { class: 'ed-sub' }, meta[1]));
      var right = el('span', { class: 'ed-price tabular' }, fmtUSD(scaled));
      btn.append(left, right);
      btn.addEventListener('click', function () {
        state.drawerEdition = ed.key;
        renderDrawer();
      });
      edContainer.appendChild(btn);
    });

    var finalTotal = state.drawerUsdt ? Math.round(selectedPrice * 0.95) : selectedPrice;
    var half = fmtShort(Math.round(finalTotal / 2));
    document.getElementById('drawer-total').textContent = fmtUSD(finalTotal);
    document.getElementById('drawer-milestones').textContent = dict.split_fmt.replace(/\{half\}/g, half);

    var tierLabel = state.drawerMult === 1 ? dict.tier_1 : state.drawerMult === 1.25 ? dict.tier_2 : dict.tier_3;
    var msg = (state.lang === 'es'
      ? 'Hola Kreta Software, quiero solicitar una demo en vivo y propuesta PDF cerrada para:\n• Plataforma: ' + prod.name + '\n• Modalidad: ' + selectedLabel + '\n• Tamaño: ' + tierLabel + '\n• Referencia pago único: ' + fmtUSD(finalTotal) + (state.drawerUsdt ? ' (con 5% OFF Binance Pay USDT)' : '')
      : 'Hi Kreta Software, I would like a live demo walkthrough and fixed-scope PDF quote for:\n• Platform: ' + prod.name + '\n• Edition: ' + selectedLabel + '\n• Team tier: ' + tierLabel + '\n• One-time reference: ' + fmtUSD(finalTotal) + (state.drawerUsdt ? ' (incl. 5% Binance Pay USDT discount)' : ''));

    var subj = 'Kreta Software — ' + prod.name + ' (' + selectedLabel + ')';
    document.getElementById('drawer-wa-cta').href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    document.getElementById('drawer-gm-cta').href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + EMAIL + '&su=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(msg);
    document.getElementById('drawer-copy-cta').dataset.copyText = msg;
  }

  function openDrawer(sku, edition, mult, triggerEl) {
    state.drawerSku = sku;
    state.drawerEdition = edition || 'sql_web';
    state.drawerMult = mult || 1;
    state.lastTrigger = triggerEl || document.activeElement;
    renderDrawer();
    var drawer = document.getElementById('product-drawer');
    var backdrop = document.getElementById('drawer-backdrop');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('drawer-close').focus();
  }

  function closeDrawer() {
    var drawer = document.getElementById('product-drawer');
    var backdrop = document.getElementById('drawer-backdrop');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (state.lastTrigger && typeof state.lastTrigger.focus === 'function') {
      state.lastTrigger.focus();
    }
  }

  function applyLang(lang) {
    state.lang = lang === 'es' ? 'es' : 'en';
    var dict = I18N[state.lang];
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var k = node.dataset.i18n;
      if (dict[k]) node.textContent = dict[k];
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === state.lang ? 'true' : 'false');
    });
    populateCalcSelects();
    updateCalculator();
    renderGrid();
    if (state.drawerSku) renderDrawer();
  }

  function applyCategory(cat) {
    state.category = cat;
    document.querySelectorAll('.cat-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.cat === cat ? 'true' : 'false');
    });
    renderGrid();
  }

  // Bindings
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });
  document.querySelectorAll('.cat-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyCategory(b.dataset.cat); });
  });

  document.getElementById('calc-product').addEventListener('change', function (ev) {
    state.calcSku = ev.target.value;
    populateCalcSelects();
    updateCalculator();
  });
  document.getElementById('calc-edition').addEventListener('change', function (ev) {
    state.calcEdition = ev.target.value;
    updateCalculator();
  });
  document.getElementById('calc-users').addEventListener('input', function (ev) {
    state.calcUsers = Number(ev.target.value);
    updateCalculator();
  });

  document.getElementById('calc-inspect-btn').addEventListener('click', function (ev) {
    openDrawer(state.calcSku, state.calcEdition, tierForUsers(state.calcUsers).mult, ev.currentTarget);
  });
  document.getElementById('hero-open-selected').addEventListener('click', function (ev) {
    openDrawer(state.calcSku, state.calcEdition, tierForUsers(state.calcUsers).mult, ev.currentTarget);
  });

  document.querySelectorAll('.tier-btn').forEach(function (tb) {
    tb.addEventListener('click', function () {
      state.drawerMult = Number(tb.dataset.mult);
      renderDrawer();
    });
  });

  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.getElementById('drawer-backdrop').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && document.getElementById('product-drawer').classList.contains('open')) {
      closeDrawer();
    }
  });

  document.getElementById('drawer-usdt').addEventListener('change', function (ev) {
    state.drawerUsdt = !!ev.target.checked;
    renderDrawer();
  });

  document.getElementById('drawer-copy-cta').addEventListener('click', function (ev) {
    var txt = ev.currentTarget.dataset.copyText || '';
    if (navigator.clipboard && txt) {
      navigator.clipboard.writeText(txt).then(function () {
        showToast(I18N[state.lang].copied_inquiry);
      }).catch(function () {
        showToast(I18N[state.lang].copied_inquiry);
      });
    } else {
      showToast(I18N[state.lang].copied_inquiry);
    }
  });

  document.getElementById('copy-email-btn').addEventListener('click', function () {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(function () {
        showToast(I18N[state.lang].copied_email);
      }).catch(function () {
        showToast(I18N[state.lang].copied_email);
      });
    } else {
      showToast(I18N[state.lang].copied_email);
    }
  });

  var params = new URLSearchParams(window.location.search);
  applyLang(params.get('lang') === 'es' ? 'es' : 'en');
})();
