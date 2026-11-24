(function () {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  // Exact official frozen pricing matrix (-12% vs market median, matching Sales_Studio/catalogo_productos.json)
  var PRODUCTS = [
    {
      sku: 'MED',
      cat: 'ops',
      saasPerUserMonth: 40,
      name: 'MedFlow / ClinicOps',
      sector: { en: 'Clinics & Medical Practices', es: 'Clínicas y Consultorios' },
      summary: {
        en: 'Conflict-free multi-provider scheduling, patient records, role-restricted clinical notes, and line-item billing.',
        es: 'Agenda médica sin solapamientos, pacientes, notas clínicas restringidas por rol y facturación por líneas.'
      },
      features: {
        en: [
          'Multi-provider calendar with automatic double-booking prevention',
          'Strict RBAC clinical notes accessible only to clinicians & admins',
          'Line-item invoicing, reminder outbox, and CSV/Sheets export',
          '1-command Docker Compose deployment + SQLite/SQL ownership'
        ],
        es: [
          'Agenda multi-profesional con bloqueo automático de solapamientos',
          'Notas clínicas bajo RBAC estricto (solo profesional y admin)',
          'Facturación por líneas, outbox de recordatorios y export CSV/Sheets',
          'Despliegue Docker en 1 comando y propiedad total del código y SQL'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 790, EUR: 730, LATAM: 550, AR: 430 } },
        { key: 'sql_web', prices: { USA: 2490, EUR: 2290, LATAM: 1740, AR: 1370 } },
        { key: 'hibrido', prices: { USA: 4290, EUR: 3950, LATAM: 3000, AR: 2360 } }
      ]
    },
    {
      sku: 'FLT',
      cat: 'ops',
      saasPerUserMonth: 45,
      name: 'FleetGuard & LogiTrack',
      sector: { en: 'Trucking & Commercial Fleets', es: 'Flotas y Logística' },
      summary: {
        en: 'Fuel consumption analytics, monotonic odometer checks, in-house shop orders, and 30-day compliance alerts.',
        es: 'Control de combustible, odómetro no decreciente, órdenes de taller y alertas automáticas a 30 días.'
      },
      features: {
        en: [
          'Fuel fill logs with automatic L/100km and cost-per-distance calculation',
          'Monotonic odometer validation preventing rollback errors',
          'Workshop maintenance orders + 30-day inspection & mileage service alerts',
          'Immutable audit trail, Sheets export, and 1-command Docker'
        ],
        es: [
          'Cargas de combustible con cálculo automático de consumo y costo/km',
          'Validación de odómetro no decreciente para evitar errores de carga',
          'Órdenes de taller + alertas automáticas de VTV/seguro y service por km',
          'Auditoría inmutable, exportación a Sheets y Docker en 1 comando'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 890, EUR: 820, LATAM: 620, AR: 490 } },
        { key: 'sql_web', prices: { USA: 2990, EUR: 2750, LATAM: 2090, AR: 1640 } },
        { key: 'hibrido', prices: { USA: 4990, EUR: 4590, LATAM: 3490, AR: 2740 } }
      ]
    },
    {
      sku: 'BLD',
      cat: 'field',
      saasPerUserMonth: 55,
      name: 'BuildCost Control',
      sector: { en: 'Construction & Remodeling', es: 'Constructoras y Obras' },
      summary: {
        en: 'Line-item job budgets, progress certifications capped at 100%, subcontractor bills, and live cost-overrun alerts.',
        es: 'Presupuestos por partidas, certificaciones bloqueadas al 100%, gastos reales y alertas de desvío.'
      },
      features: {
        en: [
          'Structured work-item budgets automatically totaling project value',
          'Hard certification cap blocking over-billing past planned quantities',
          'Subcontractor expense logging + live budget-vs-actual variance report',
          'CSV/Google Sheets sync + 1-command Docker deployment'
        ],
        es: [
          'Presupuesto por partidas con recálculo automático total de obra',
          'Bloqueo estricto de sobre-certificación por encima del 100%',
          'Registro de subcontratistas + reporte en vivo de desvío real',
          'Sincronización CSV/Sheets + despliegue Docker en 1 comando'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 990, EUR: 910, LATAM: 690, AR: 545 } },
        { key: 'sql_web', prices: { USA: 3490, EUR: 3210, LATAM: 2440, AR: 1920 } },
        { key: 'hibrido', prices: { USA: 5990, EUR: 5510, LATAM: 4190, AR: 3290 } }
      ]
    },
    {
      sku: 'CMP',
      cat: 'esg',
      saasPerUserMonth: 50,
      name: 'ComplianceVault ISO/SOC2',
      sector: { en: 'Audits, Risk & Security', es: 'Auditoría ISO / SOC2' },
      summary: {
        en: 'Control coverage tracking, risk matrices, immutable SHA-256 evidence storage, and one-click audit PDF reports.',
        es: 'Cobertura de controles, matriz de riesgos, evidencias SHA-256 inmutables y reporte PDF de auditoría.'
      },
      features: {
        en: [
          'ISO 27001 / SOC 2 control catalog and probability × impact risk register',
          'Tamper-evident SQLite triggers protecting SHA-256 hashed evidence',
          'One-click vector PDF audit report ready for external assessors',
          'Role-based access (admin, operator, read-only auditor) + Docker'
        ],
        es: [
          'Catálogo de controles ISO 27001 / SOC 2 y matriz probabilidad × impacto',
          'Triggers SQLite anti-alteración protegiendo evidencias con hash SHA-256',
          'Reporte PDF vectorial en 1 clic listo para auditores externos',
          'Roles admin / operador / auditor de solo lectura + Docker'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 990, EUR: 910, LATAM: 690, AR: 545 } },
        { key: 'sql_web', prices: { USA: 2490, EUR: 2290, LATAM: 1740, AR: 1370 } },
        { key: 'hibrido', prices: { USA: 4490, EUR: 4130, LATAM: 3140, AR: 2470 } }
      ]
    },
    {
      sku: 'ECO',
      cat: 'esg',
      saasPerUserMonth: 42,
      name: 'EcoMetrics Suite',
      sector: { en: 'ESG & Carbon Accounting', es: 'ESG y Huella de Carbono' },
      summary: {
        en: 'White-label Scope 1–3 carbon, industrial sustainability, and ecosystem calculators backed by 177 cited DEFRA/IEA/IPCC factors.',
        es: 'Calculadoras white-label de Huella de Carbono (Alcances 1–3), sostenibilidad industrial e índice ecosistémico con 177 factores.'
      },
      features: {
        en: [
          '177 documented IPCC, DEFRA, and IEA emission factors with full provenance',
          'White-label Next.js 15 web portal + Python API + Google Sheets workbook',
          'Cryptographic SHA-256 certificates with public QR integrity check',
          '100% custom brand config via environment variables + Docker'
        ],
        es: [
          '177 factores documentados IPCC, DEFRA e IEA con trazabilidad completa',
          'Portal web white-label Next.js 15 + API Python + planilla Google Sheets',
          'Certificados PDF con verificación pública QR y hash SHA-256',
          'Marca 100% configurable por variables de entorno + Docker'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 1050, EUR: 960, LATAM: 695, AR: 520 } },
        { key: 'sql', prices: { USA: 1750, EUR: 1575, LATAM: 1135, AR: 870 } },
        { key: 'sheets_web', prices: { USA: 2370, EUR: 2190, LATAM: 1660, AR: 1220 } },
        { key: 'sql_web', prices: { USA: 2895, EUR: 2630, LATAM: 2015, AR: 1485 } },
        { key: 'hibrido', prices: { USA: 3510, EUR: 3160, LATAM: 2365, AR: 1750 } }
      ]
    },
    {
      sku: 'AGR',
      cat: 'field',
      saasPerUserMonth: 35,
      name: 'AgroField ERP',
      sector: { en: 'Farms & Agronomy', es: 'Agro y Acopios' },
      summary: {
        en: 'Field parcel tracking, zero-negative input inventory, seasonal operations, harvest tickets, and live net margin per area.',
        es: 'Trazabilidad por lote, stock de insumos sin negativos, labores, cartas de porte y margen neto USD/ha.'
      },
      features: {
        en: [
          'Strict input inventory validation blocking negative stock or unit mismatches',
          'Seasonal field activity costs linked directly to each parcel',
          'Harvest delivery tickets & automated net profit calculation per area',
          'Google Sheets field templates + 1-command Docker deployment'
        ],
        es: [
          'Control estricto de stock impidiendo negativos o errores de unidad',
          'Costos de labores agrícolas asociados directamente a cada lote',
          'Cartas de porte de cosecha y cálculo automático de margen USD/ha',
          'Plantillas de campo en Google Sheets + despliegue Docker en 1 comando'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 690, EUR: 635, LATAM: 485, AR: 380 } },
        { key: 'sql_web', prices: { USA: 2640, EUR: 2510, LATAM: 1850, AR: 1450 } },
        { key: 'hibrido', prices: { USA: 5720, EUR: 5435, LATAM: 4005, AR: 3145 } }
      ]
    },
    {
      sku: 'EDU',
      cat: 'edu',
      saasPerUserMonth: 28,
      name: 'EduCampus & Certify',
      sector: { en: 'Academies & Continuing Ed', es: 'Instituciones Educativas' },
      summary: {
        en: 'Student cohorts, attendance minimums, scholarship-adjusted payments, and QR-verifiable PDF diplomas.',
        es: 'Cohortes, asistencias mínimas, becas/pagos con control de saldo y diplomas PDF verificables por QR.'
      },
      features: {
        en: [
          'Blocks certificate issuance automatically if attendance or passing grade is unmet',
          'Vector PDF diploma generator with SHA-256 integrity hash',
          'Public /verificar verification page exposing zero personal PII',
          'Scholarship balance validation + CSV/Sheets export + Docker'
        ],
        es: [
          'Bloquea emisión de certificado si no cumple asistencia o aprobación',
          'Generador de diplomas PDF vectoriales con hash SHA-256',
          'Verificador público /verificar sin exponer datos personales (PII)',
          'Control de becas y saldos + exportación CSV/Sheets + Docker'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 590, EUR: 545, LATAM: 415, AR: 325 } },
        { key: 'sql_web', prices: { USA: 1240, EUR: 1180, LATAM: 870, AR: 680 } },
        { key: 'hibrido', prices: { USA: 3990, EUR: 3670, LATAM: 2790, AR: 2190 } }
      ]
    },
    {
      sku: 'VOL',
      cat: 'edu',
      saasPerUserMonth: 26,
      name: 'VoluntariosDB',
      sector: { en: 'Nonprofits & Universities', es: 'ONGs y Universidades' },
      summary: {
        en: 'Volunteer directories, event capacities, QR attendance check-in, automatic hour rollups, and RLS medical isolation.',
        es: 'Directorio de voluntarios, cupos por evento, asistencia QR, suma automática de horas y aislamiento RLS.'
      },
      features: {
        en: [
          'Dual architecture: instant SQLite/RBAC web portal + PostgreSQL 16 with RLS',
          'QR attendance scanning with SQL triggers automatically totaling hours',
          'Google Sheets + Apps Script edition for lightweight teams',
          'Verifiable service-hour certificates + 1-command Docker'
        ],
        es: [
          'Arquitectura dual: portal web SQLite/RBAC inmediato + PostgreSQL 16 con RLS',
          'Registro de asistencia QR con triggers SQL que suman horas automáticamente',
          'Edición Google Sheets + Apps Script para equipos livianos',
          'Certificados verificables de horas + despliegue Docker en 1 comando'
        ]
      },
      editions: [
        { key: 'sheets', prices: { USA: 610, EUR: 570, LATAM: 430, AR: 340 } },
        { key: 'sql', prices: { USA: 1050, EUR: 960, LATAM: 695, AR: 520 } },
        { key: 'sheets_web', prices: { USA: 1930, EUR: 1750, LATAM: 1310, AR: 960 } },
        { key: 'sql_web', prices: { USA: 2370, EUR: 2190, LATAM: 1660, AR: 1220 } },
        { key: 'hibrido', prices: { USA: 2720, EUR: 2455, LATAM: 1840, AR: 1310 } }
      ]
    }
  ];

  var EDITION_META = {
    sheets: {
      en: ['Google Sheets Edition', 'Apps Script automation & structured templates'],
      es: ['Edición Google Sheets', 'Automatización Apps Script y plantillas pro']
    },
    sql: {
      en: ['SQL Base Edition', 'PostgreSQL schema, triggers, views & REST API'],
      es: ['Edición SQL Base', 'Esquema PostgreSQL, triggers, vistas y API REST']
    },
    sheets_web: {
      en: ['Sheets + Web Portal', 'Branded web frontend synced with Google Sheets'],
      es: ['Sheets + Portal Web', 'Portal web propio conectado con Google Sheets']
    },
    sql_web: {
      en: ['SQL + Web Portal (Recommended)', 'Full web app, RBAC, SQL database & Docker'],
      es: ['SQL + Portal Web (Recomendada)', 'App web completa, RBAC, base SQL y Docker']
    },
    hibrido: {
      en: ['Hybrid Full Stack', 'SQL + Web Portal + Google Sheets sync + full package'],
      es: ['Paquete Híbrido Completo', 'SQL + Portal Web + sincronización Sheets completa']
    }
  };

  var REGION_LABELS = {
    USA: 'USA / Canada',
    EUR: 'Europe',
    LATAM: 'Latin America',
    AR: 'Argentina'
  };

  var I18N = {
    en: {
      skip_link: 'Skip to main content',
      nav_platforms: 'Platforms',
      nav_process: 'How it works',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      nav_cta: 'Request demo',
      hero_tag: 'One-time ownership · Zero monthly SaaS fees',
      hero_h1: 'Business software you pay for once, and own forever.',
      hero_lead: 'Stop renting critical operations software every month. Kreta Software delivers complete, ready-to-deploy web portals, SQL databases, and Google Sheets automations with 100% source code ownership.',
      hero_cta_1: 'Explore 8 platforms',
      hero_cta_2: 'View pricing & sample',
      m_1: 'Production platforms ready',
      m_2: 'Automated tests passing',
      m_3: 'Mandatory license fees',
      calc_title: 'Own vs. Rent: 3-Year Cost Comparison',
      calc_sub: 'Pick your industry and team size to compare typical SaaS subscriptions against a one-time Kreta Software license.',
      calc_ind_lbl: 'Industry / Platform',
      calc_team_lbl: 'Active team members',
      calc_saas_lbl: 'Typical SaaS (36 months)',
      calc_kreta_lbl: 'Kreta Software (SQL + Web · One-time)',
      calc_save_lbl: 'Estimated 3-year savings',
      calc_inspect: 'Inspect platform',
      cat_h2: 'Choose a platform built for your operation',
      cat_sub: 'Click any system to compare editions (Google Sheets, SQL + Web, or Hybrid), check regional pricing, and request a live synthetic demo.',
      reg_lbl: 'Pricing region',
      f_all: 'All platforms (8)',
      f_ops: 'Clinics & Fleets',
      f_field: 'Construction & Agro',
      f_esg: 'ESG & Compliance',
      f_edu: 'Education & Nonprofits',
      from_lbl: 'One-time from',
      view_btn: 'Details & pricing',
      flow_h2: 'Simple, zero-risk delivery in 3 steps',
      flow_sub: 'You see the working software before paying a dollar, approve a closed PDF proposal, and keep 100% ownership on handover.',
      st1_h: 'Test a live synthetic demo',
      st1_p: 'Try the real web portal and spreadsheet templates with safe synthetic data to verify the exact workflow fits your team.',
      st2_h: 'Approve a fixed-scope PDF quote',
      st2_p: 'Receive a clear proposal with exact modules, explicit exclusions, 30-day validity, and one-time pricing with zero hidden fees.',
      st3_h: 'Milestone delivery & full ownership',
      st3_p: 'Pay in 50/50 or 40/30/30 milestones (Payoneer USD ACH, Binance Pay USDT -5%, or Escrow) and take full ownership of source code, SQL database, and Docker setup.',
      faq_h2: 'Common questions from buyers',
      faq_sub: 'Clear answers on ownership, hosting, customization, and payments—no fine print.',
      q1_q: 'Are there really zero monthly license fees?',
      q1_a: 'Yes. Every Kreta Software package is sold as a one-time delivery. You receive the complete source code, SQL schema, Docker files, and spreadsheet assets under your ownership—no per-seat renewals or vendor lock-in.',
      q2_q: 'Where does the software run? Do you charge for hosting?',
      q2_a: 'No—we never resell or lock you into proprietary hosting. Each platform ships with a 1-command Docker Compose setup so you can run it on your own server, cloud account (AWS, GCP, Render, VPS), or local network, paying your provider directly.',
      q3_q: 'Can we add our logo, fields, or custom reports?',
      q3_a: 'Yes. Branding and configuration variables are built in, and any extra workflows or custom integrations are quoted transparently up front as a fixed-scope project.',
      q4_q: 'How do international payments and milestones work?',
      q4_a: 'Projects are billed in milestones (50/50 or 40/30/30). We accept Payoneer (USD ACH), platform Escrow (Upwork/Freelancer), and Binance Pay / USDT (which includes an automatic 5% prompt-payment discount).',
      q5_q: 'What happens if we need changes or support after delivery?',
      q5_a: 'Every system includes a corrective warranty period after delivery. Optional post-delivery support is strictly on-demand (single work order or prepaid 5-hour pack)—never an automatic recurring subscription.',
      ct_pill: 'Direct engineering contact · No sales layers',
      ct_h2: 'Ready to see a platform running with your workflow?',
      ct_lead: 'Kreta Software is led by Andrés Francisco Mazzuferi (Software & Data Engineer · Tax ID CUIT 20-43812534-6), partnering remotely with organizations across the US, Europe, and Latin America. Tell us what you currently manage in spreadsheets and we will send a synthetic sample walkthrough.',
      ct_btn_mail: 'Email andrewkrijdjd@gmail.com',
      ct_btn_copy: 'Copy email address',
      st_card_h: 'Kreta Software — Delivery Standards',
      st_l1: 'Full source code + PostgreSQL / SQLite schema ownership',
      st_l2: '1-command Docker Compose deployment + SHA-256 package manifest',
      st_l3: 'Verified by 541 automated tests (Pytest, Vitest, Chrome E2E)',
      st_l4: 'Payoneer USD ACH · Binance Pay USDT (-5%) · Escrow',
      dr_features: 'Key capabilities included',
      dr_editions: 'Select edition (one-time payment)',
      dr_usdt: 'Apply 5% prompt-payment discount (Binance Pay / USDT only)',
      dr_total_lbl: 'Selected one-time total',
      dr_total_note: '0 monthly fees · Full code & SQL yours',
      dr_cta_mail: 'Request demo & PDF quote by email',
      dr_cta_copy: 'Copy inquiry summary',
      users_word: 'users',
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
      hero_tag: 'Pago único · Cero suscripciones mensuales',
      hero_h1: 'Software empresarial que pagás una vez y es tuyo para siempre.',
      hero_lead: 'Dejá de alquilar herramientas críticas todos los meses. Kreta Software entrega portales web, bases SQL y automatizaciones en Google Sheets listas para operar con 100% propiedad del código.',
      hero_cta_1: 'Explorar 8 plataformas',
      hero_cta_2: 'Ver precios y muestra',
      m_1: 'Plataformas listas',
      m_2: 'Pruebas automatizadas',
      m_3: 'Cuotas obligatorias',
      calc_title: 'Comprar vs. Alquilar: Ahorro a 3 años',
      calc_sub: 'Elegí tu rubro y tamaño de equipo para comparar un SaaS tradicional contra una licencia de pago único de Kreta Software.',
      calc_ind_lbl: 'Rubro / Plataforma',
      calc_team_lbl: 'Usuarios activos en tu equipo',
      calc_saas_lbl: 'SaaS tradicional (36 meses)',
      calc_kreta_lbl: 'Kreta Software (SQL + Web · Pago único)',
      calc_save_lbl: 'Ahorro estimado en 3 años',
      calc_inspect: 'Ver esta plataforma',
      cat_h2: 'Elegí la plataforma pensada para tu operación',
      cat_sub: 'Hacé clic en cualquier sistema para comparar modalidades (Google Sheets, SQL + Web o Híbrido), ver precios por región y pedir una demo con datos sintéticos.',
      reg_lbl: 'Región de precios',
      f_all: 'Todas (8)',
      f_ops: 'Clínicas y Flotas',
      f_field: 'Obras y Agro',
      f_esg: 'ESG y Auditoría',
      f_edu: 'Educación y ONGs',
      from_lbl: 'Pago único desde',
      view_btn: 'Ver detalle',
      flow_h2: 'Entrega simple y sin riesgo en 3 pasos',
      flow_sub: 'Primero probás la demo real, después aprobás una propuesta PDF cerrada y al finalizar te quedás con el 100% del código.',
      st1_h: 'Probá una demo real con datos sintéticos',
      st1_p: 'Evaluá el portal web y las planillas con datos de prueba para confirmar que resuelve exactamente el flujo de tu equipo.',
      st2_h: 'Aprobá una propuesta PDF cerrada',
      st2_p: 'Recibís alcance exacto, exclusiones claras, validez de 30 días y precio cerrado por pago único sin sorpresas.',
      st3_h: 'Entrega por hitos y propiedad total',
      st3_p: 'Pagás en hitos 50/50 o 40/30/30 (Payoneer USD ACH, Binance Pay USDT -5% o Escrow) y recibís código fuente, base SQL y Docker.',
      faq_h2: 'Preguntas frecuentes de clientes',
      faq_sub: 'Respuestas directas sobre propiedad, hosting, personalización y medios de cobro.',
      q1_q: '¿Realmente no hay ninguna cuota mensual obligatoria?',
      q1_a: 'Exacto. Cada sistema de Kreta Software se entrega por pago único. Te quedás con todo el código fuente, el esquema SQL, los archivos Docker y las plantillas sin renovaciones ni lock-in.',
      q2_q: '¿Dónde corre el sistema? ¿Cobran hosting?',
      q2_a: 'No revendemos ni atamos a hosting propio. Cada producto incluye Docker Compose en 1 comando para desplegarlo en tu propio servidor, nube (AWS, GCP, Render, VPS) o red local.',
      q3_q: '¿Se puede adaptar con nuestro logo, campos o reportes?',
      q3_a: 'Sí. El branding y la configuración ya vienen preparados, y cualquier flujo o integración adicional se cotiza por adelantado con alcance cerrado.',
      q4_q: '¿Cómo funcionan los pagos internacionales y los hitos?',
      q4_a: 'Se trabaja por hitos (50/50 o 40/30/30). Aceptamos Payoneer (USD ACH), Escrow de plataformas y Binance Pay / USDT (con 5% de descuento por pronto pago).',
      q5_q: '¿Qué pasa si necesitamos soporte después de la entrega?',
      q5_a: 'Cada entrega incluye garantía correctiva. El soporte evolutivo posterior es 100% opcional a demanda (orden puntual o bono prepago de 5 horas), nunca una mensualidad automática.',
      ct_pill: 'Trato directo con ingeniería · Sin intermediarios',
      ct_h2: '¿Querés ver una plataforma funcionando para tu flujo?',
      ct_lead: 'Kreta Software es dirigido por Andrés Francisco Mazzuferi (Ingeniero de Software y Datos · CUIT 20-43812534-6), trabajando en remoto con clientes de EE. UU., Europa y Latinoamérica. Contanos qué llevás hoy en planillas y te enviamos una muestra.',
      ct_btn_mail: 'Escribir a andrewkrijdjd@gmail.com',
      ct_btn_copy: 'Copiar dirección de email',
      st_card_h: 'Kreta Software — Estándar de Entrega',
      st_l1: 'Propiedad total del código fuente y base PostgreSQL / SQLite',
      st_l2: 'Docker Compose en 1 comando + manifiesto de integridad SHA-256',
      st_l3: 'Verificado con 541 tests automatizados (Pytest, Vitest, Chrome E2E)',
      st_l4: 'Payoneer USD ACH · Binance Pay USDT (-5%) · Escrow',
      dr_features: 'Capacidades clave incluidas',
      dr_editions: 'Elegí modalidad (pago único)',
      dr_usdt: 'Aplicar 5% de descuento pronto pago (solo Binance Pay / USDT)',
      dr_total_lbl: 'Total pago único seleccionado',
      dr_total_note: '0 cuotas mensuales · Código y SQL 100% tuyos',
      dr_cta_mail: 'Pedir demo y presupuesto PDF por email',
      dr_cta_copy: 'Copiar resumen de consulta',
      users_word: 'usuarios',
      copied_email: 'Email copiado: andrewkrijdjd@gmail.com',
      copied_inquiry: 'Resumen copiado al portapapeles'
    }
  };

  var state = {
    lang: 'en',
    region: 'USA',
    category: 'all',
    drawerSku: null,
    drawerEdition: 'sql_web',
    drawerUsdt: false,
    lastTrigger: null
  };

  function fmtUSD(amount) {
    return 'USD ' + Number(amount).toLocaleString('en-US');
  }

  function el(tag, attrs, text) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    }
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function svgEl(tag, attrs) {
    var node = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, String(attrs[k])); });
    }
    return node;
  }

  function buildProductVisual(sku) {
    var svg = svgEl('svg', { width: 220, height: 68, viewBox: '0 0 220 68', fill: 'none', 'aria-hidden': 'true' });
    if (sku === 'MED') {
      // Calendar slots + RBAC shield bar
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('rect', { x: 18, y: 18, width: 54, height: 14, rx: 4, fill: '#DBEAFE' }),
        svgEl('rect', { x: 78, y: 18, width: 64, height: 14, rx: 4, fill: '#1D4ED8' }),
        svgEl('rect', { x: 148, y: 18, width: 54, height: 14, rx: 4, fill: '#ECFDF5' }),
        svgEl('rect', { x: 18, y: 38, width: 92, height: 12, rx: 4, fill: '#F1F5F9' }),
        svgEl('rect', { x: 118, y: 38, width: 84, height: 12, rx: 4, fill: '#047857' })
      );
    } else if (sku === 'FLT') {
      // Fuel efficiency bars + alert pill
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('rect', { x: 22, y: 34, width: 16, height: 18, rx: 3, fill: '#CBD5E1' }),
        svgEl('rect', { x: 44, y: 26, width: 16, height: 26, rx: 3, fill: '#93C5FD' }),
        svgEl('rect', { x: 66, y: 20, width: 16, height: 32, rx: 3, fill: '#1D4ED8' }),
        svgEl('rect', { x: 88, y: 30, width: 16, height: 22, rx: 3, fill: '#60A5FA' }),
        svgEl('rect', { x: 120, y: 20, width: 78, height: 12, rx: 6, fill: '#FEF3C7' }),
        svgEl('rect', { x: 120, y: 38, width: 60, height: 10, rx: 5, fill: '#ECFDF5' })
      );
    } else if (sku === 'BLD') {
      // Budget vs Actual progress bars
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('rect', { x: 20, y: 20, width: 180, height: 8, rx: 4, fill: '#E2E8F0' }),
        svgEl('rect', { x: 20, y: 20, width: 140, height: 8, rx: 4, fill: '#1D4ED8' }),
        svgEl('rect', { x: 20, y: 34, width: 180, height: 8, rx: 4, fill: '#E2E8F0' }),
        svgEl('rect', { x: 20, y: 34, width: 112, height: 8, rx: 4, fill: '#047857' }),
        svgEl('rect', { x: 20, y: 48, width: 180, height: 5, rx: 2.5, fill: '#F1F5F9' })
      );
    } else if (sku === 'CMP') {
      // Risk matrix + SHA-256 verified badge
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('rect', { x: 20, y: 16, width: 16, height: 16, rx: 3, fill: '#ECFDF5' }),
        svgEl('rect', { x: 40, y: 16, width: 16, height: 16, rx: 3, fill: '#FEF3C7' }),
        svgEl('rect', { x: 20, y: 36, width: 16, height: 16, rx: 3, fill: '#DBEAFE' }),
        svgEl('rect', { x: 40, y: 36, width: 16, height: 16, rx: 3, fill: '#1D4ED8' }),
        svgEl('rect', { x: 72, y: 20, width: 126, height: 10, rx: 5, fill: '#E2E8F0' }),
        svgEl('rect', { x: 72, y: 36, width: 88, height: 12, rx: 6, fill: '#047857' })
      );
    } else if (sku === 'ECO') {
      // Scope 1-2-3 carbon rings
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('circle', { cx: 46, cy: 34, r: 18, stroke: '#D1FAE5', 'stroke-width': 6 }),
        svgEl('circle', { cx: 46, cy: 34, r: 18, stroke: '#047857', 'stroke-width': 6, 'stroke-dasharray': '76 40' }),
        svgEl('rect', { x: 82, y: 20, width: 112, height: 8, rx: 4, fill: '#1D4ED8' }),
        svgEl('rect', { x: 82, y: 33, width: 84, height: 8, rx: 4, fill: '#047857' }),
        svgEl('rect', { x: 82, y: 46, width: 62, height: 6, rx: 3, fill: '#94A3B8' })
      );
    } else if (sku === 'AGR') {
      // Field parcels grid
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('rect', { x: 20, y: 16, width: 52, height: 36, rx: 5, fill: '#D1FAE5', stroke: '#047857' }),
        svgEl('rect', { x: 78, y: 16, width: 42, height: 36, rx: 5, fill: '#ECFDF5', stroke: '#10B981' }),
        svgEl('rect', { x: 128, y: 20, width: 70, height: 10, rx: 5, fill: '#047857' }),
        svgEl('rect', { x: 128, y: 36, width: 52, height: 8, rx: 4, fill: '#CBD5E1' })
      );
    } else if (sku === 'EDU') {
      // QR diploma card
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('rect', { x: 20, y: 18, width: 104, height: 9, rx: 4, fill: '#0B1220' }),
        svgEl('rect', { x: 20, y: 32, width: 78, height: 7, rx: 3.5, fill: '#94A3B8' }),
        svgEl('rect', { x: 20, y: 44, width: 56, height: 7, rx: 3.5, fill: '#047857' }),
        svgEl('rect', { x: 158, y: 16, width: 36, height: 36, rx: 6, fill: '#EFF6FF', stroke: '#1D4ED8' }),
        svgEl('rect', { x: 165, y: 23, width: 9, height: 9, rx: 1.5, fill: '#1D4ED8' }),
        svgEl('rect', { x: 178, y: 23, width: 9, height: 9, rx: 1.5, fill: '#1D4ED8' }),
        svgEl('rect', { x: 165, y: 36, width: 9, height: 9, rx: 1.5, fill: '#1D4ED8' })
      );
    } else {
      // Volunteer roster + hours pills
      svg.append(
        svgEl('rect', { x: 8, y: 8, width: 204, height: 52, rx: 8, fill: '#FFFFFF', stroke: '#D8E0EC' }),
        svgEl('circle', { cx: 30, cy: 25, r: 7, fill: '#1D4ED8' }),
        svgEl('rect', { x: 44, y: 21, width: 92, height: 8, rx: 4, fill: '#CBD5E1' }),
        svgEl('rect', { x: 146, y: 19, width: 52, height: 12, rx: 6, fill: '#ECFDF5' }),
        svgEl('circle', { cx: 30, cy: 45, r: 7, fill: '#047857' }),
        svgEl('rect', { x: 44, y: 41, width: 76, height: 8, rx: 4, fill: '#E2E8F0' }),
        svgEl('rect', { x: 146, y: 39, width: 52, height: 12, rx: 6, fill: '#DBEAFE' })
      );
    }
    return svg;
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

      var top = el('div');
      var vis = el('div', { class: 'p-visual' });
      vis.appendChild(buildProductVisual(prod.sku));
      var sector = el('span', { class: 'p-sector' }, prod.sector[state.lang]);
      var title = el('h3', null, prod.name);
      var desc = el('p', { class: 'p-desc' }, prod.summary[state.lang]);
      top.append(vis, el('div', { style: 'margin-top:12px' }));
      top.lastChild.append(sector, title, desc);

      var minPrice = prod.editions[0].prices[state.region];
      var foot = el('div', { class: 'p-foot' });
      var pw = el('div', { class: 'p-price-wrap' });
      pw.append(
        el('span', { class: 'p-price-from' }, dict.from_lbl),
        el('span', { class: 'p-price-val tabular' }, fmtUSD(minPrice))
      );
      var btn = el('button', { type: 'button', class: 'btn btn-outline btn-sm' }, dict.view_btn);
      btn.addEventListener('click', function () { openDrawer(prod.sku, btn); });
      foot.append(pw, btn);

      card.append(top, foot);
      grid.appendChild(card);
    });

    announce(visible + ' platforms displayed for ' + state.region);
  }

  function updateCalculator() {
    var sel = document.getElementById('calc-product');
    var range = document.getElementById('calc-users');
    if (!sel || !range) return;
    var prod = findProduct(sel.value);
    var users = Number(range.value);
    var dict = I18N[state.lang];

    document.getElementById('calc-users-val').textContent = users + ' ' + dict.users_word;

    var sqlEd = prod.editions.find(function (e) { return e.key === 'sql_web'; }) || prod.editions[0];
    var kretaCost = sqlEd.prices[state.region];
    // Adjust typical SaaS benchmark softly by region factor so savings remain realistic everywhere
    var regScale = state.region === 'USA' ? 1 : state.region === 'EUR' ? 0.92 : state.region === 'LATAM' ? 0.72 : 0.6;
    var saas3yr = Math.round(users * prod.saasPerUserMonth * 36 * regScale);
    if (saas3yr < kretaCost * 2) saas3yr = Math.round(kretaCost * 2.6);
    var savings = Math.max(0, saas3yr - kretaCost);
    var pct = Math.max(10, Math.min(92, Math.round((kretaCost / saas3yr) * 100)));

    document.getElementById('calc-saas-num').textContent = fmtUSD(saas3yr);
    document.getElementById('calc-kreta-num').textContent = fmtUSD(kretaCost);
    document.getElementById('calc-save-num').textContent = fmtUSD(savings);
    document.getElementById('bar-kreta').style.width = pct + '%';
  }

  function renderDrawer() {
    if (!state.drawerSku) return;
    var prod = findProduct(state.drawerSku);
    var dict = I18N[state.lang];

    document.getElementById('drawer-sector').textContent = prod.sector[state.lang];
    document.getElementById('drawer-title').textContent = prod.name;
    document.getElementById('drawer-desc').textContent = prod.summary[state.lang];
    document.getElementById('drawer-region-badge').textContent = REGION_LABELS[state.region];

    var prev = document.getElementById('drawer-preview');
    prev.replaceChildren(buildProductVisual(prod.sku));

    var featList = document.getElementById('drawer-features');
    featList.replaceChildren();
    prod.features[state.lang].forEach(function (item) {
      featList.appendChild(el('li', null, item));
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
      var price = ed.prices[state.region];
      var isSel = ed.key === state.drawerEdition;
      if (isSel) {
        selectedPrice = price;
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
      var right = el('span', { class: 'ed-price tabular' }, fmtUSD(price));
      btn.append(left, right);
      btn.addEventListener('click', function () {
        state.drawerEdition = ed.key;
        renderDrawer();
      });
      edContainer.appendChild(btn);
    });

    var finalTotal = state.drawerUsdt ? Math.round(selectedPrice * 0.95) : selectedPrice;
    document.getElementById('drawer-total').textContent = fmtUSD(finalTotal);

    var subj = encodeURIComponent('Kreta Software — ' + prod.name + ' (' + selectedLabel + ' · ' + state.region + ')');
    var bodyText = (state.lang === 'es'
      ? 'Hola Kreta Software,\n\nQuisiera solicitar una demo sintética y propuesta PDF para:\n- Plataforma: ' + prod.name + '\n- Modalidad: ' + selectedLabel + '\n- Región: ' + REGION_LABELS[state.region] + '\n- Referencia pago único: ' + fmtUSD(finalTotal) + (state.drawerUsdt ? ' (con 5% OFF Binance Pay USDT)' : '') + '\n\nGracias.'
      : 'Hello Kreta Software,\n\nI would like to request a synthetic live demo and fixed-scope PDF quote for:\n- Platform: ' + prod.name + '\n- Edition: ' + selectedLabel + '\n- Region: ' + REGION_LABELS[state.region] + '\n- One-time reference: ' + fmtUSD(finalTotal) + (state.drawerUsdt ? ' (incl. 5% Binance Pay USDT discount)' : '') + '\n\nBest regards.');

    document.getElementById('drawer-mail-cta').href = 'mailto:andrewkrijdjd@gmail.com?subject=' + subj + '&body=' + encodeURIComponent(bodyText);
    document.getElementById('drawer-copy-cta').dataset.copyText = bodyText;
  }

  function openDrawer(sku, triggerEl) {
    state.drawerSku = sku;
    state.drawerEdition = 'sql_web';
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
    renderGrid();
    updateCalculator();
    if (state.drawerSku) renderDrawer();
  }

  function applyRegion(reg) {
    if (!REGION_LABELS[reg]) return;
    state.region = reg;
    document.querySelectorAll('.reg-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.reg === reg ? 'true' : 'false');
    });
    renderGrid();
    updateCalculator();
    if (state.drawerSku) renderDrawer();
  }

  function applyCategory(cat) {
    state.category = cat;
    document.querySelectorAll('.cat-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.cat === cat ? 'true' : 'false');
    });
    renderGrid();
  }

  // Event bindings
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });
  document.querySelectorAll('.reg-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyRegion(b.dataset.reg); });
  });
  document.querySelectorAll('.cat-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyCategory(b.dataset.cat); });
  });

  document.getElementById('calc-product').addEventListener('change', updateCalculator);
  document.getElementById('calc-users').addEventListener('input', updateCalculator);
  document.getElementById('calc-inspect-btn').addEventListener('click', function (ev) {
    openDrawer(document.getElementById('calc-product').value, ev.currentTarget);
  });
  document.getElementById('hero-open-selected').addEventListener('click', function (ev) {
    openDrawer(document.getElementById('calc-product').value, ev.currentTarget);
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
      navigator.clipboard.writeText('andrewkrijdjd@gmail.com').then(function () {
        showToast(I18N[state.lang].copied_email);
      }).catch(function () {
        showToast(I18N[state.lang].copied_email);
      });
    } else {
      showToast(I18N[state.lang].copied_email);
    }
  });

  // Init from query params
  var params = new URLSearchParams(window.location.search);
  if (params.get('reg') && REGION_LABELS[params.get('reg')]) state.region = params.get('reg');
  applyRegion(state.region);
  applyLang(params.get('lang') === 'es' ? 'es' : 'en');
})();
