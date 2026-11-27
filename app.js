(function () {
  'use strict';

  const PRODUCTS = [
    {
      slug: 'medflow', img: 'medflow', cat: 'core', name: 'MedFlow / ClinicOps',
      editions: [{ key: 'sheets', price: 790 }, { key: 'sql_web', price: 2490 }, { key: 'hibrido', price: 4290 }],
      prices: { USA: [790, 2490, 4290], EUR: [730, 2290, 3950], LATAM: [550, 1740, 3000], AR: [430, 1370, 2360] },
      en: { desc: 'Multi-provider clinic scheduling, restricted clinical records, and visit billing without per-practitioner SaaS subscriptions.', inv: 'Enforces overlap-free appointments (HTTP 409), role-based medical notes, and instant invoicing.' },
      es: { desc: 'Agenda clínica multi-profesional, historia clínica con roles y facturación de consultas sin abonos mensuales por profesional.', inv: 'Bloqueo estricto de turnos superpuestos (HTTP 409), notas por rol y liquidación inmediata.' },
    },
    {
      slug: 'buildcost', img: 'buildcost', cat: 'core', name: 'BuildCost Pro',
      editions: [{ key: 'sheets', price: 990 }, { key: 'sql_web', price: 3490 }, { key: 'hibrido', price: 5990 }],
      prices: { USA: [990, 3490, 5990], EUR: [910, 3210, 5510], LATAM: [690, 2440, 4190], AR: [545, 1920, 3290] },
      en: { desc: 'Line-item construction job costing, subcontractor variance tracking, and capped progress certifications.', inv: 'Automatically blocks progress draws exceeding budgeted line balances and highlights margin drift.' },
      es: { desc: 'Control presupuestario por rubro de obra, gastos de subcontratistas y certificaciones de avance con tope automático.', inv: 'Bloquea sobrecertificaciones que exceden el presupuesto y detecta desvíos de margen en tiempo real.' },
    },
    {
      slug: 'fleetguard', img: 'fleetguard', cat: 'core', name: 'FleetGuard & LogiTrack',
      editions: [{ key: 'sheets', price: 890 }, { key: 'sql_web', price: 2990 }, { key: 'hibrido', price: 4990 }],
      prices: { USA: [890, 2990, 4990], EUR: [820, 2750, 4590], LATAM: [620, 2090, 3490], AR: [490, 1640, 2740] },
      en: { desc: 'Preventive maintenance schedules, expiring DOT/compliance documents, shop orders, and fuel cost tracking per unit.', inv: 'Validates odometer continuity, flags overdue service intervals, and surfaces fuel anomalies per vehicle.' },
      es: { desc: 'Mantenimiento preventivo, vencimientos de documentación, órdenes de taller y control de combustible por unidad.', inv: 'Valida continuidad de odómetro, alerta services vencidos y detecta desvíos de consumo por vehículo.' },
    },
    {
      slug: 'compliancevault', img: 'compliancevault', cat: 'core', name: 'ComplianceVault ISO/SOC2',
      editions: [{ key: 'sheets', price: 990 }, { key: 'sql_web', price: 2490 }, { key: 'hibrido', price: 4490 }],
      prices: { USA: [990, 2490, 4490], EUR: [910, 2290, 4130], LATAM: [690, 1740, 3140], AR: [545, 1370, 2470] },
      en: { desc: 'Audit-ready control register, risk matrix, regulatory permits, and timestamped evidence packages for ISO 27001 / SOC 2.', inv: 'Generates verifiable SHA-256 audit reports and monitors expiring permits and control ownership.' },
      es: { desc: 'Matriz de controles y riesgos, habilitaciones regulatorias y repositorio de evidencias para auditorías ISO / SOC2.', inv: 'Emite informes de auditoría verificables con SHA-256 y alerta vencimientos críticos.' },
    },
    {
      slug: 'agrofield', img: 'agrofield', cat: 'core', name: 'AgroField & Stock',
      editions: [{ key: 'sheets', price: 690 }, { key: 'sql_web', price: 2640 }, { key: 'hibrido', price: 5720 }],
      prices: { USA: [690, 2640, 5720], EUR: [635, 2510, 5435], LATAM: [485, 1850, 4005], AR: [380, 1450, 3145] },
      en: { desc: 'Agricultural input inventory, field application logs, harvest receipts, and true net margin per lot and season.', inv: 'Links chemical/seed stock directly to field activities and harvest income for per-acre profitability.' },
      es: { desc: 'Control de stock de insumos, labores agrícolas, cartas de porte y margen neto real por lote y campaña.', inv: 'Vincula cada movimiento de insumo y labor con el rinde de cosecha para calcular margen real por hectárea.' },
    },
    {
      slug: 'educampus', img: 'educampus', cat: 'core', name: 'EduCampus & Certify',
      editions: [{ key: 'sheets', price: 590 }, { key: 'sql_web', price: 1240 }, { key: 'hibrido', price: 3990 }],
      prices: { USA: [590, 1240, 3990], EUR: [545, 1180, 3670], LATAM: [415, 870, 2790], AR: [325, 680, 2190] },
      en: { desc: 'Cohort enrollment, attendance eligibility thresholds, scholarship/tuition balances, and QR-verified certificates.', inv: 'Enforces minimum attendance and payment clearance before issuing tamper-evident PDF credentials.' },
      es: { desc: 'Gestión de cohortes, asistencias mínimas, becas/cuotas y emisión de certificados PDF con validación QR pública.', inv: 'Verifica porcentaje mínimo de asistencia y saldo antes de emitir cada certificado verificable.' },
    },
    {
      slug: 'quoteflow', img: 'quoteflow', cat: 'smb', name: 'QuoteFlow',
      prices: { USA: [450, 1290, 2190], EUR: [415, 1185, 2015], LATAM: [315, 905, 1535], AR: [250, 710, 1205] },
      en: { desc: 'Structured B2B quoting with enforced gross-margin floors, approval workflows, and weighted close pipeline.', inv: 'Automatically blocks quotes below minimum margin threshold and exports QR-verified PDF proposals.' },
      es: { desc: 'Cotizador B2B con piso obligatorio de margen bruto, aprobaciones y pipeline ponderado de cierre.', inv: 'Bloquea presupuestos debajo del margen mínimo configurado y emite PDFs con verificación QR.' },
    },
    {
      slug: 'fixflow', img: 'fixflow', cat: 'smb', name: 'FixFlow',
      prices: { USA: [390, 1090, 1890], EUR: [360, 1005, 1740], LATAM: [275, 765, 1325], AR: [215, 600, 1040] },
      en: { desc: 'Repair shop and service workshop work orders, parts markup tracking, SLA turnaround alerts, and pickup receipts.', inv: 'Tracks repair turnaround time (TAT), parts margin, and customer pickup verification via QR.' },
      es: { desc: 'Órdenes de taller mecánico o servicio técnico, margen de repuestos, alertas de plazo SLA y comprobante QR.', inv: 'Mide tiempo de reparación (TAT), controla rentabilidad de repuestos y valida entregas al cliente.' },
    },
    {
      slug: 'rentvault', img: 'rentvault', cat: 'smb', name: 'RentVault',
      prices: { USA: [450, 1290, 2290], EUR: [415, 1185, 2105], LATAM: [315, 905, 1605], AR: [250, 710, 1260] },
      en: { desc: 'Equipment, audiovisual, and event inventory rentals with conflict-free date reservations and asset ROI analytics.', inv: 'Strict date-overlap lock (HTTP 409) prevents double bookings while measuring utilization per asset.' },
      es: { desc: 'Alquiler de equipos, maquinaria y eventos con reservas sin solapamiento y análisis de retorno por activo.', inv: 'Bloqueo estricto de doble reserva por fechas (HTTP 409) y medición real de utilización y ROI.' },
    },
    {
      slug: 'shiftroster', img: 'shiftroster', cat: 'smb', name: 'ShiftRoster',
      prices: { USA: [390, 990, 1790], EUR: [360, 910, 1645], LATAM: [275, 695, 1255], AR: [215, 545, 985] },
      en: { desc: 'Conflict-free employee shift rosters with real-time overtime, weekend, and night-differential cost previews.', inv: 'Prevents overlapping staff assignments (HTTP 409) and calculates payroll surcharge impact upfront.' },
      es: { desc: 'Planificación de turnos sin superposiciones con cálculo inmediato de horas extras y recargos nocturnos.', inv: 'Impide asignar doble turno simultáneo (HTTP 409) y proyecta el costo laboral antes de liquidar.' },
    },
    {
      slug: 'clientpulse', img: 'clientpulse', cat: 'smb', name: 'ClientPulse',
      prices: { USA: [450, 1390, 2390], EUR: [415, 1280, 2200], LATAM: [315, 975, 1675], AR: [250, 765, 1315] },
      en: { desc: 'Agency and studio project portal with formal client deliverable sign-offs before invoicing and scope-creep tracking.', inv: 'Enforces documented client approval gate (HTTP 409) before billing and isolates out-of-scope requests.' },
      es: { desc: 'Portal de proyectos para agencias y estudios con aprobación formal de entregables antes de facturar.', inv: 'Exige conformidad registrada del cliente antes de facturar (HTTP 409) y cuantifica trabajo fuera de alcance.' },
    },
    {
      slug: 'subguard', img: 'subguard', cat: 'smb', name: 'SubGuard',
      prices: { USA: [490, 1490, 2490], EUR: [450, 1370, 2290], LATAM: [345, 1045, 1745], AR: [270, 820, 1370] },
      en: { desc: 'Software license and vendor renewal register that exposes unused seats and 12-month recurring spend leaks.', inv: 'Validates active-vs-paid seat limits and flags upcoming auto-renewals ahead of billing dates.' },
      es: { desc: 'Control centralizado de suscripciones, licencias ociosas y alertas tempranas de renovación anual.', inv: 'Controla licencias activas vs contratadas y anticipa renovaciones automáticas para recortar gasto fijo.' },
    },
    {
      slug: 'propledger', img: 'propledger', cat: 'enterprise', name: 'PropLedger',
      prices: { USA: [790, 2690, 4690], EUR: [725, 2475, 4315], LATAM: [555, 1885, 3285], AR: [435, 1480, 2580] },
      en: { desc: 'Commercial and residential property portfolio ledger with compound rent indexation, NOI, and Cap Rate modeling.', inv: 'Enforces one active lease per unit (HTTP 409) with auditable NOI and escalation schedules.' },
      es: { desc: 'Administración de propiedades y contratos con ajuste compuesto por índice, NOI y Cap Rate auditables.', inv: 'Garantiza un único contrato activo por unidad (HTTP 409) y calcula rentabilidad neta en tiempo real.' },
    },
    {
      slug: 'lablims', img: 'lablims', cat: 'enterprise', name: 'LabLIMS',
      prices: { USA: [990, 3490, 5990], EUR: [910, 3210, 5510], LATAM: [695, 2445, 4195], AR: [545, 1920, 3295] },
      en: { desc: 'Analytical laboratory sample chain of custody, statistical Z-score outlier flags, and instant QR-verified COAs.', inv: 'Tracks every sample handoff, flags statistical anomalies, and generates verifiable PDF Certificates of Analysis.' },
      es: { desc: 'Gestión de laboratorio con cadena de custodia de muestras, alertas de desvíos Z-score y COA PDF con QR.', inv: 'Registra custodia completa, señala anomalías estadísticas y emite certificados de análisis verificables.' },
    },
    {
      slug: 'lottrace', img: 'lottrace', cat: 'enterprise', name: 'LotTrace',
      prices: { USA: [990, 3490, 5990], EUR: [910, 3210, 5510], LATAM: [695, 2445, 4195], AR: [545, 1920, 3295] },
      en: { desc: 'Food, pharma, and cold-chain batch traceability with FEFO expiry ordering, mass balance, and instant recall tree.', inv: 'Enforces First-Expired-First-Out dispatch and traces raw-to-finished batch lineage in seconds.' },
      es: { desc: 'Trazabilidad de lotes para alimentos y farma con despacho FEFO, balance de masa y recall instantáneo.', inv: 'Ordena salidas por vencimiento más próximo y reconstruye la genealogía completa de cualquier lote.' },
    },
    {
      slug: 'caseledger', img: 'caseledger', cat: 'enterprise', name: 'CaseLedger',
      prices: { USA: [890, 2990, 5290], EUR: [820, 2750, 4865], LATAM: [625, 2095, 3705], AR: [490, 1645, 2910] },
      en: { desc: 'Law firm matter docket, fatal court deadline alerts, billable WIP hours, and case risk provisioning.', inv: 'Prioritizes critical statutory deadlines and links attorney WIP time directly to matter billing.' },
      es: { desc: 'Gestión de expedientes jurídicos, alertas de plazos fatales, horas WIP facturables y provisión de riesgo.', inv: 'Prioriza vencimientos procesales críticos y vincula horas trabajadas con la facturación por causa.' },
    },
    {
      slug: 'tradeflow', img: 'tradeflow', cat: 'enterprise', name: 'TradeFlow',
      prices: { USA: [990, 3690, 6290], EUR: [910, 3395, 5785], LATAM: [695, 2585, 4405], AR: [545, 2030, 3460] },
      en: { desc: 'Import/export landed-cost allocation (CIF, freight, duties, brokerage) per SKU with true net margin preview.', inv: 'Prorates shipment duties and logistics fees across every SKU before commercial pricing is locked.' },
      es: { desc: 'Prorrateo exacto de costo nacionalizado (CIF, flete, seguro, aranceles) por SKU y margen neto por embarque.', inv: 'Distribuye costos de importación por artículo antes de fijar listas de precios comerciales.' },
    },
    {
      slug: 'fieldops', img: 'fieldops', cat: 'enterprise', name: 'FieldOps',
      prices: { USA: [890, 2890, 4990], EUR: [820, 2660, 4590], LATAM: [625, 2025, 3495], AR: [490, 1590, 2745] },
      en: { desc: 'Field service dispatch, P1/P2/P3 SLA compliance, MTTR/FTFR metrics, and closeout-verified invoicing.', inv: 'Blocks invoicing until documented field closeout is recorded (HTTP 409) and monitors response SLAs.' },
      es: { desc: 'Despacho de técnicos en campo, control SLA P1/P2/P3, métricas MTTR/FTFR y bloqueo de factura sin cierre.', inv: 'Impide facturar visitas sin parte de cierre conformado (HTTP 409) y audita tiempos de respuesta.' },
    },
    {
      slug: 'ecometrics_suite', img: 'ecometrics', cat: 'impact', name: 'EcoMetrics Suite',
      prices: { USA: [1050, 2895, 3510], EUR: [960, 2630, 3160], LATAM: [695, 2015, 2365], AR: [520, 1485, 1750] },
      en: { desc: 'Auditable Scope 1–3 carbon footprint, industrial sustainability scoring, and SHA-256 environmental certificates.', inv: 'Applies documented emissions factors with full formula transparency and instant PDF certificates.' },
      es: { desc: 'Huella de carbono auditable, índice de sustentabilidad industrial y certificados ambientales con hash SHA-256.', inv: 'Aplica factores de emisión trazables con fórmulas abiertas y emisión inmediata de certificados PDF.' },
    },
    {
      slug: 'voluntarios_db', img: 'voluntariosdb', cat: 'impact', name: 'VoluntariosDB',
      prices: { USA: [610, 2370, 2720], EUR: [570, 2190, 2455], LATAM: [430, 1660, 1840], AR: [340, 1220, 1310] },
      en: { desc: 'Nonprofit volunteer roster, verified shift hours, donor impact reporting, and verifiable service certificates.', inv: 'Centralizes volunteer participation logs and exports donor-ready hours and attendance certificates.' },
      es: { desc: 'Gestión integral de voluntariado, horas verificadas por programa, reportes a donantes y constancias oficiales.', inv: 'Centraliza turnos y horas servidas con trazabilidad completa para rendición de cuentas.' },
    },
  ];

  const FEATURED_SLUGS = ['medflow', 'buildcost', 'quoteflow', 'propledger', 'lablims'];

  const I18N = {
    en: {
      skip_link: 'Skip to main content',
      nav_catalog: 'Catalog (20)',
      nav_demo: 'Interactive Demo',
      nav_savings: 'Own vs. Rent',
      nav_samples: 'PDF Samples',
      nav_process: 'Delivery',
      nav_faq: 'FAQ',
      nav_cta: 'Request Proposal',
      region_label: 'Pricing region',
      hero_pill: '20 production systems ready for deployment',
      hero_h1: 'Operational software built to own, not rent every month.',
      hero_lead: 'Replace fragile spreadsheets and compounding per-seat SaaS subscriptions with a complete operational platform delivered under a single one-time fee. Full source code, SQL database, and Google Sheets editions included.',
      hero_cta_demo: 'Launch 60s Interactive Demo',
      hero_cta_catalog: 'Explore all 20 systems',
      trust_1: '100% source code & data ownership',
      trust_2: 'Safe 50/50 milestone delivery',
      trust_3: 'Zero recurring seat fees',
      hero_try_this: 'Open interactive sandbox',
      proof_1: 'Production-ready vertical systems',
      proof_2: 'Mandatory software subscription fees',
      proof_3: 'Editions: Sheets, Web+SQL, or Hybrid',
      proof_4: 'Milestone payments after live verification',
      cat_h2: 'Complete 20-System Portfolio',
      cat_sub: 'Every preview below is captured directly from the running application. Select your region to view exact one-time ownership pricing across all three editions.',
      search_label: 'Search systems',
      search_ph: 'Search by industry, workflow, or system name…',
      cat_all: 'All (20)',
      cat_core: 'Core Operations (6)',
      cat_smb: 'Fast SMB (6)',
      cat_ent: 'High-Margin Verticals (6)',
      cat_impact: 'ESG & Nonprofits (2)',
      family_core: 'Core Operations',
      family_smb: 'Fast SMB',
      family_enterprise: 'High-Margin',
      family_impact: 'ESG & Nonprofit',
      btn_compare: 'Compare editions',
      btn_demo: 'Live 60s demo',
      price_from_lbl: 'One-time ownership',
      price_zero_lbl: '$0/mo recurring',
      calc_h2: 'Own vs. Rent: 36-Month Total Cost Analysis',
      calc_sub: 'Compare one-time software ownership against typical per-user monthly SaaS subscriptions over three years.',
      calc_prod_lbl: 'Operational System',
      calc_ed_lbl: 'Delivery Edition',
      ed_sheets: 'Google Sheets Automation',
      ed_sqlweb: 'SQL + Web Portal',
      ed_hybrid: 'Hybrid (Web + SQL + Sheets)',
      calc_users_lbl: 'Active team seats',
      calc_seat_lbl: 'Comparable SaaS cost / seat / month',
      calc_bar_saas: 'Typical SaaS (36 months)',
      calc_bar_own: 'Kreta One-Time Ownership',
      calc_save_lbl: 'Projected 3-year net savings',
      calc_btn_demo: 'Try 60s demo',
      calc_btn_inspect: 'Inspect editions',
      samples_h2: 'Verified PDF Deliverables & Audit Artifacts',
      samples_sub: 'Inspect real PDF outputs generated directly by our systems—complete with cryptographic verification hashes and structured executive summaries.',
      smp_1_t: 'Executive Commercial Proposal',
      smp_1_d: 'Sample fixed-scope proposal detailing deliverables, exclusions, acceptance criteria, and 50/50 milestone terms.',
      smp_2_t: 'ComplianceVault ISO/SOC2 Audit Report',
      smp_2_d: 'Control register, risk matrix summary, and timestamped evidence verification log.',
      smp_3_t: 'EcoMetrics Carbon Footprint Certificate',
      smp_3_d: 'Scope 1–3 emissions calculation output with traceable factor disclosure and verification code.',
      smp_4_t: 'EduCampus Verifiable QR Certificate',
      smp_4_d: 'Issued student credential tied to attendance eligibility with public QR verification.',
      smp_open: 'Open PDF sample',
      proc_h2: 'Fixed-Scope Delivery Process',
      proc_sub: 'Clear milestones, live verification before payment, and full code handover.',
      p1_t: 'Interactive Verification',
      p1_d: 'Test the 60-second browser demo or request three sample records tailored to your workflow at no cost before committing.',
      p2_t: 'Scope & Edition Selection',
      p2_d: 'Select Google Sheets, SQL + Web Portal, or Hybrid. Written proposal defines exact scope, acceptance criteria, and one-time fee.',
      p3_t: 'Milestone Build & Customization',
      p3_d: 'Branding, roles, business thresholds, and regional rules are configured and verified against your acceptance checklist (50/50 milestones).',
      p4_t: 'Complete Ownership Handover',
      p4_d: 'Receive the full verified package (source code, SQL schema, Docker setup, SHA-256 manifest, and documentation) with zero recurring fees.',
      faq_h2: 'Frequently Asked Questions',
      q1: 'Is this genuinely a one-time payment with no recurring license fees?',
      a1: 'Yes. Every edition is delivered as a closed fixed-scope project under a single one-time fee (typically split 50/50 across milestones). There are no mandatory monthly subscriptions, per-user seat fees, or automatic renewals.',
      q2: 'Where does the software run and who owns the database?',
      a2: 'You retain 100% ownership of the source code and database. It runs locally, on your own server via Docker, or on any cloud host you contract directly—never locked inside a third-party SaaS vendor.',
      q3: 'Can we start with the Google Sheets edition and upgrade later?',
      a3: 'Yes. Any Google Sheets edition can be upgraded to SQL + Web Portal or Hybrid later with 100% of your initial payment credited toward the upgrade.',
      q4: 'What support or maintenance is available after delivery?',
      a4: 'Each delivery includes a corrective warranty for defects within the agreed scope at zero cost. Optional future changes or maintenance are handled strictly on demand via fixed work orders or a prepaid 5-hour pack valid for 12 months—never recurring retainers.',
      q5: 'Which payment methods are accepted internationally?',
      a5: 'US/EU B2B bank transfer (ACH USD / SEPA EUR via Payoneer/DolarApp), escrow via Upwork/Fiverr, local bank transfer with invoice in Argentina, or USDT / Binance Pay (with a 5% early-payment discount).',
      ct_h2: 'Evaluate a system with your own operational examples.',
      ct_sub: 'Share your industry and current workflow. We can provide direct access to an interactive preview or prepare three sample records tailored to your operation—with no obligation and no sales call required.',
      ct_email: 'Request Demo / Proposal via Email',
      ct_copy: 'Copy Email (andrewkrijdjd@gmail.com)',
      ct_copied: 'Copied: andrewkrijdjd@gmail.com',
      ft_note: 'Fixed-scope operational software · One-time ownership · Zero recurring SaaS fees',
      m_demo: 'Launch 60s Interactive Demo',
      m_quote: 'Request Formal Proposal',
      ed_note_sheets: 'Automated Sheets + scripts · 100% credited on upgrade',
      ed_note_sql: 'Complete web app + SQL + Docker + RBAC + PDF reports',
      ed_note_hyb: 'Full Web + SQL + Sheets sync + priority onboarding',
    },
    es: {
      skip_link: 'Saltar al contenido principal',
      nav_catalog: 'Catálogo (20)',
      nav_demo: 'Demo Interactiva',
      nav_savings: 'Comprar vs. Alquilar',
      nav_samples: 'Muestras PDF',
      nav_process: 'Entrega',
      nav_faq: 'Preguntas',
      nav_cta: 'Solicitar Propuesta',
      region_label: 'Región tarifaria',
      hero_pill: '20 sistemas operativos listos para implementar',
      hero_h1: 'Software operativo diseñado para ser propio, no alquilado mes a mes.',
      hero_lead: 'Reemplace planillas frágiles y suscripciones SaaS por usuario con una plataforma completa entregada bajo un único pago. Incluye código fuente completo, base de datos SQL y modalidad Google Sheets.',
      hero_cta_demo: 'Abrir Demo Interactiva (60s)',
      hero_cta_catalog: 'Explorar los 20 sistemas',
      trust_1: '100% propiedad del código y los datos',
      trust_2: 'Entrega segura por hitos 50/50',
      trust_3: 'Cero cuotas mensuales por usuario',
      hero_try_this: 'Abrir sandbox interactivo',
      proof_1: 'Sistemas verticales listos para operar',
      proof_2: 'Cuotas mensuales obligatorias',
      proof_3: 'Modalidades: Sheets, Web+SQL o Híbrido',
      proof_4: 'Pagos por hitos tras verificación en vivo',
      cat_h2: 'Portafolio Completo de 20 Sistemas',
      cat_sub: 'Cada vista previa corresponde a una captura real del sistema en ejecución. Seleccione su región para consultar las tarifas exactas de pago único en las tres modalidades.',
      search_label: 'Buscar sistemas',
      search_ph: 'Buscar por industria, flujo o nombre del sistema…',
      cat_all: 'Todos (20)',
      cat_core: 'Operaciones Core (6)',
      cat_smb: 'PyME Rápida (6)',
      cat_ent: 'Verticales Alto Margen (6)',
      cat_impact: 'ESG y ONG (2)',
      family_core: 'Operación Core',
      family_smb: 'PyME Rápida',
      family_enterprise: 'Alto Margen',
      family_impact: 'ESG / ONG',
      btn_compare: 'Comparar modalidades',
      btn_demo: 'Demo en vivo (60s)',
      price_from_lbl: 'Licencia pago único',
      price_zero_lbl: '$0/mes recurrente',
      calc_h2: 'Comprar vs. Alquilar: Análisis de Costo a 36 Meses',
      calc_sub: 'Compare la adquisición por pago único frente al costo acumulado de una suscripción SaaS mensual por usuario durante tres años.',
      calc_prod_lbl: 'Sistema Operativo',
      calc_ed_lbl: 'Modalidad de Entrega',
      ed_sheets: 'Automatización Google Sheets',
      ed_sqlweb: 'Portal Web + Base SQL',
      ed_hybrid: 'Híbrido (Web + SQL + Sheets)',
      calc_users_lbl: 'Usuarios activos del equipo',
      calc_seat_lbl: 'Costo SaaS comparable / usuario / mes',
      calc_bar_saas: 'SaaS tradicional (36 meses)',
      calc_bar_own: 'Propiedad Pago Único Kreta',
      calc_save_lbl: 'Ahorro neto estimado en 3 años',
      calc_btn_demo: 'Probar demo 60s',
      calc_btn_inspect: 'Ver modalidades',
      samples_h2: 'Muestras PDF Verificadas y Reportes de Auditoría',
      samples_sub: 'Revise documentos PDF reales generados directamente por nuestros sistemas, con verificación criptográfica y resúmenes ejecutivos.',
      smp_1_t: 'Propuesta Comercial Ejecutiva',
      smp_1_d: 'Ejemplo de propuesta cerrada con alcance, exclusiones, criterios de aceptación y pagos por hitos 50/50.',
      smp_2_t: 'Informe de Auditoría ComplianceVault',
      smp_2_d: 'Registro de controles ISO/SOC2, matriz de riesgos y evidencias con sello temporal.',
      smp_3_t: 'Certificado de Huella EcoMetrics',
      smp_3_d: 'Cálculo de emisiones Alcance 1–3 con factores trazables y código de verificación.',
      smp_4_t: 'Certificado QR Verificable EduCampus',
      smp_4_d: 'Credencial académica emitida según elegibilidad de asistencia con verificación QR pública.',
      smp_open: 'Abrir muestra PDF',
      proc_h2: 'Proceso de Entrega Cerrado',
      proc_sub: 'Hitos claros, verificación previa en vivo y transferencia total del código.',
      p1_t: 'Verificación Interactiva',
      p1_d: 'Pruebe la demo en navegador de 60 segundos o solicite tres casos de ejemplo adaptados a su operación sin cargo.',
      p2_t: 'Alcance y Modalidad',
      p2_d: 'Seleccione Google Sheets, Web + SQL o Híbrido. La propuesta escrita fija alcance, criterios de aceptación y precio único.',
      p3_t: 'Configuración por Hitos',
      p3_d: 'Se adaptan marca, roles, reglas de negocio y umbrales sobre su checklist de aceptación (hitos 50/50).',
      p4_t: 'Entrega en Propiedad Total',
      p4_d: 'Recibe el paquete completo verificado (código fuente, esquema SQL, Docker, manifiesto SHA-256 y documentación) sin cuotas mensuales.',
      faq_h2: 'Preguntas Frecuentes',
      q1: '¿Es realmente un pago único sin cuotas mensuales obligatorias?',
      a1: 'Sí. Cada modalidad se entrega como un proyecto cerrado de pago único (generalmente dividido 50/50 por hitos). No existen suscripciones mensuales, cargos por usuario ni renovaciones automáticas.',
      q2: '¿Dónde se ejecuta el sistema y quién es dueño de los datos?',
      a2: 'Su organización conserva el 100% de la propiedad del código fuente y la base de datos. Funciona en forma local, en su servidor mediante Docker o en el proveedor cloud que usted elija directamente.',
      q3: '¿Podemos comenzar con Google Sheets y actualizar después?',
      a3: 'Sí. Cualquier edición Google Sheets puede actualizarse posteriormente a Portal Web + SQL o Híbrido acreditando el 100% del monto inicial.',
      q4: '¿Qué soporte o mantenimiento existe después de la entrega?',
      a4: 'Cada entrega incluye garantía correctiva sin costo para defectos dentro del alcance acordado. El mantenimiento o mejoras futuras son opcionales bajo demanda por orden puntual o bono prepago de 5 horas (vigencia 12 meses).',
      q5: '¿Qué medios de pago se aceptan?',
      a5: 'Transferencia internacional B2B (ACH USD / SEPA EUR vía Payoneer o DolarApp), escrow en Upwork/Fiverr, transferencia local en Argentina con factura o USDT / Binance Pay (con 5% de descuento por pronto pago).',
      ct_h2: 'Evalúe un sistema con ejemplos reales de su operación.',
      ct_sub: 'Comparta su rubro y flujo actual. Podemos brindarle acceso directo a la vista interactiva o preparar tres registros de ejemplo adaptados a su empresa, sin compromiso ni reunión previa.',
      ct_email: 'Solicitar Demo / Propuesta por Email',
      ct_copy: 'Copiar Email (andrewkrijdjd@gmail.com)',
      ct_copied: 'Copiado: andrewkrijdjd@gmail.com',
      ft_note: 'Software operativo a alcance cerrado · Propiedad por pago único · Cero cuotas mensuales',
      m_demo: 'Abrir Demo Interactiva (60s)',
      m_quote: 'Solicitar Propuesta Formal',
      ed_note_sheets: 'Sheets automatizado + scripts · 100% acreditable al escalar',
      ed_note_sql: 'App Web + SQL + Docker + roles RBAC + reportes PDF',
      ed_note_hyb: 'Web + SQL + sincronización Sheets + puesta en marcha',
    },
  };

  const $ = function (id) { return document.getElementById(id); };
  let lang = (new URLSearchParams(window.location.search).get('lang') || 'en').toLowerCase() === 'es' ? 'es' : 'en';
  let region = 'USA';
  let activeCat = 'all';
  let searchQuery = '';
  let heroSlug = 'medflow';
  let modalSlug = null;

  function fmtMoney(n) {
    return '$' + Number(n).toLocaleString('en-US');
  }
  function getProduct(slug) {
    return PRODUCTS.find(function (p) { return p.slug === slug; }) || PRODUCTS[0];
  }
  function familyLabel(cat) {
    const t = I18N[lang];
    return cat === 'core' ? t.family_core : cat === 'smb' ? t.family_smb : cat === 'enterprise' ? t.family_enterprise : t.family_impact;
  }

  function applyTranslations() {
    const t = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const k = el.getAttribute('data-i18n');
      if (t[k]) el.textContent = t[k];
    });
    const searchEl = $('catalog-search');
    if (searchEl) searchEl.placeholder = t.search_ph;
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    $('nav-demo-link').href = 'demo.html?producto=' + heroSlug + '&lang=' + lang + '&region=' + region;
    $('hero-demo-btn').href = 'demo.html?producto=' + heroSlug + '&lang=' + lang + '&region=' + region;
  }

  function syncRegionUI() {
    if ($('nav-region')) $('nav-region').value = region;
    document.querySelectorAll('#catalog-region-pills .r-pill').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-region') === region));
    });
  }

  function renderHeroShowcase() {
    const tabsEl = $('hero-tabs');
    tabsEl.replaceChildren();
    FEATURED_SLUGS.forEach(function (slug) {
      const p = getProduct(slug);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 's-tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(slug === heroSlug));
      btn.textContent = p.name.split(' ')[0];
      btn.addEventListener('click', function () {
        heroSlug = slug;
        renderHeroShowcase();
      });
      tabsEl.appendChild(btn);
    });

    const cur = getProduct(heroSlug);
    const pr = cur.prices[region];
    $('hero-url').textContent = 'app.kretasoftware.local/' + cur.slug;
    $('hero-screen').src = 'assets/screens/' + lang + '/' + cur.img + '.png';
    $('hero-screen').alt = cur.name + ' UI';
    $('hero-prod-name').textContent = cur.name;
    $('hero-prod-inv').textContent = cur[lang].inv;
    $('hero-prod-price').textContent = fmtMoney(pr[0]) + ' – ' + fmtMoney(pr[2]) + ' USD (' + region + ')';
    const demoHref = 'demo.html?producto=' + cur.slug + '&lang=' + lang + '&region=' + region;
    $('hero-prod-demo').href = demoHref;
    $('hero-demo-btn').href = demoHref;
    $('nav-demo-link').href = demoHref;
  }

  function renderCatalog() {
    const t = I18N[lang];
    const q = searchQuery.trim().toLowerCase();
    const list = PRODUCTS.filter(function (p) {
      if (activeCat !== 'all' && p.cat !== activeCat) return false;
      if (!q) return true;
      const hay = (p.name + ' ' + p.slug + ' ' + p[lang].desc + ' ' + p[lang].inv).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    $('catalog-count').textContent = lang === 'es'
      ? 'Mostrando ' + list.length + ' de 20 sistemas · Tarifas de pago único para región ' + region + (region === 'AR' ? ' (USD o equivalente ARS)' : ' (USD)')
      : 'Showing ' + list.length + ' of 20 systems · Exact one-time ownership pricing for ' + region + ' (USD)';

    const grid = $('product-grid');
    grid.replaceChildren();
    list.forEach(function (p) {
      const pr = p.prices[region];
      const card = document.createElement('article');
      card.className = 'prod-card';

      const media = document.createElement('div');
      media.className = 'prod-media';
      const sw = document.createElement('div');
      sw.className = 'prod-screen-wrap';
      const img = document.createElement('img');
      img.src = 'assets/screens/' + lang + '/' + p.img + '.png';
      img.alt = p.name + ' interface preview';
      img.width = 1280;
      img.height = 800;
      img.loading = 'lazy';
      sw.appendChild(img);
      media.appendChild(sw);

      const body = document.createElement('div');
      body.className = 'prod-body';

      const top = document.createElement('div');
      top.className = 'prod-top';
      const h3 = document.createElement('h3');
      h3.className = 'prod-title';
      h3.textContent = p.name;
      const fam = document.createElement('span');
      fam.className = 'prod-family';
      fam.textContent = familyLabel(p.cat);
      top.appendChild(h3);
      top.appendChild(fam);

      const desc = document.createElement('p');
      desc.className = 'prod-desc';
      desc.textContent = p[lang].desc;

      const inv = document.createElement('div');
      inv.className = 'prod-invariant';
      inv.textContent = p[lang].inv;

      const pricing = document.createElement('div');
      pricing.className = 'prod-pricing';
      const pLeft = document.createElement('div');
      const pf = document.createElement('div');
      pf.className = 'price-from';
      pf.textContent = t.price_from_lbl + ' (' + region + ')';
      const prEl = document.createElement('div');
      prEl.className = 'price-range mono';
      prEl.textContent = fmtMoney(pr[0]) + ' – ' + fmtMoney(pr[2]);
      pLeft.appendChild(pf);
      pLeft.appendChild(prEl);
      const pz = document.createElement('div');
      pz.className = 'price-zero mono';
      pz.textContent = t.price_zero_lbl;
      pricing.appendChild(pLeft);
      pricing.appendChild(pz);

      const acts = document.createElement('div');
      acts.className = 'prod-actions';
      const btnCmp = document.createElement('button');
      btnCmp.type = 'button';
      btnCmp.className = 'btn btn-outline';
      btnCmp.textContent = t.btn_compare;
      btnCmp.addEventListener('click', function () { openModal(p.slug); });

      const btnDemo = document.createElement('a');
      btnDemo.className = 'btn btn-primary';
      btnDemo.href = 'demo.html?producto=' + p.slug + '&lang=' + lang + '&region=' + region;
      btnDemo.textContent = t.btn_demo;

      acts.appendChild(btnCmp);
      acts.appendChild(btnDemo);

      body.appendChild(top);
      body.appendChild(desc);
      body.appendChild(inv);
      body.appendChild(pricing);
      body.appendChild(acts);

      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function populateCalcSelect() {
    const sel = $('calc-product');
    const prev = sel.value || 'medflow';
    sel.replaceChildren();
    PRODUCTS.forEach(function (p) {
      const opt = document.createElement('option');
      opt.value = p.slug;
      opt.textContent = p.name;
      if (p.slug === prev) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  function renderCalculator() {
    const slug = $('calc-product').value || 'medflow';
    const ed = $('calc-edition').value || 'sql_web';
    const users = Number($('calc-users').value);
    const seatCost = Number($('calc-saas-seat').value);
    $('calc-users-val').textContent = String(users);
    $('calc-saas-val').textContent = fmtMoney(seatCost);

    const p = getProduct(slug);
    const idx = ed === 'sheets' ? 0 : ed === 'hibrido' ? 2 : 1;
    const ownCost = p.prices[region][idx];
    const saas36 = users * seatCost * 36;
    const savings = Math.max(0, saas36 - ownCost);
    const payback = Math.max(1, Math.ceil(ownCost / Math.max(1, users * seatCost)));

    $('out-saas-total').textContent = fmtMoney(saas36) + ' USD';
    $('out-own-total').textContent = fmtMoney(ownCost) + ' USD';
    $('out-savings').textContent = fmtMoney(savings) + ' USD';
    $('out-payback').textContent = lang === 'es'
      ? 'Recuperación estimada en ~' + payback + ' meses · 5% de descuento por pronto pago vía USDT'
      : 'Estimated break-even in ~' + payback + ' months · 5% early-payment discount available via USDT';

    const maxV = Math.max(saas36, ownCost, 1);
    $('bar-saas').style.width = Math.max(8, Math.round((saas36 / maxV) * 100)) + '%';
    $('bar-own').style.width = Math.max(8, Math.round((ownCost / maxV) * 100)) + '%';
    $('calc-demo-link').href = 'demo.html?producto=' + slug + '&lang=' + lang + '&region=' + region;
  }

  function openModal(slug) {
    modalSlug = slug;
    const p = getProduct(slug);
    const pr = p.prices[region];
    const t = I18N[lang];
    $('modal-cat').textContent = familyLabel(p.cat) + ' · ' + region;
    $('modal-title').textContent = p.name;
    $('modal-img').src = 'assets/screens/' + lang + '/' + p.img + '.png';
    $('modal-img').alt = p.name + ' UI';
    $('modal-desc').textContent = p[lang].desc;
    $('modal-invariants').textContent = p[lang].inv;

    const edWrap = $('modal-editions');
    edWrap.replaceChildren();
    [
      [t.ed_sheets, pr[0], t.ed_note_sheets, false],
      [t.ed_sqlweb, pr[1], t.ed_note_sql, true],
      [t.ed_hybrid, pr[2], t.ed_note_hyb, false],
    ].forEach(function (item) {
      const box = document.createElement('div');
      box.className = 'edition-box' + (item[3] ? ' is-featured' : '');
      const n = document.createElement('div');
      n.className = 'edition-name';
      n.textContent = item[0];
      const v = document.createElement('div');
      v.className = 'edition-price mono';
      v.textContent = fmtMoney(item[1]) + ' USD';
      const d = document.createElement('div');
      d.className = 'edition-note';
      d.textContent = item[2];
      box.appendChild(n);
      box.appendChild(v);
      box.appendChild(d);
      edWrap.appendChild(box);
    });

    $('modal-demo-btn').href = 'demo.html?producto=' + p.slug + '&lang=' + lang + '&region=' + region;
    const subj = '[KRETA-PROPUESTA] ' + p.name + ' (' + region + ')';
    const body = lang === 'es'
      ? 'Estimado equipo de Kreta Software,\n\nDeseo solicitar una propuesta formal y evaluación para ' + p.name + ' (región ' + region + ').\n\nAtentamente,'
      : 'Dear Kreta Software Team,\n\nI would like to request a formal proposal and evaluation for ' + p.name + ' (' + region + ' region).\n\nKind regards,';
    $('modal-quote-btn').href = 'mailto:andrewkrijdjd@gmail.com?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);

    $('product-modal').hidden = false;
    $('modal-close').focus();
  }

  function closeModal() {
    $('product-modal').hidden = true;
    modalSlug = null;
  }

  function syncContactEmailLink() {
    const btn = $('contact-email-btn');
    if (!btn) return;
    const subj = '[KRETA-DEMO] Evaluation Request (' + region + ')';
    const body = lang === 'es'
      ? 'Estimado equipo de Kreta Software,\n\nDeseo solicitar una evaluación o demostración adaptada a nuestra operación (región ' + region + ').\n\nRubro / Sistema de interés:\n\nAtentamente,'
      : 'Dear Kreta Software Team,\n\nI would like to request an evaluation or tailored demonstration for our operation (' + region + ' region).\n\nIndustry / System of interest:\n\nKind regards,';
    btn.href = 'mailto:andrewkrijdjd@gmail.com?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
  }

  function setRegion(nextReg) {
    region = nextReg;
    syncRegionUI();
    syncContactEmailLink();
    renderHeroShowcase();
    renderCatalog();
    renderCalculator();
    if (modalSlug) openModal(modalSlug);
  }

  function setLang(nextLang) {
    lang = nextLang;
    applyTranslations();
    syncContactEmailLink();
    renderHeroShowcase();
    renderCatalog();
    renderCalculator();
    if (modalSlug) openModal(modalSlug);
  }

  // Event wiring
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });
  $('nav-region').addEventListener('change', function (e) { setRegion(e.target.value); });
  document.querySelectorAll('#catalog-region-pills .r-pill').forEach(function (btn) {
    btn.addEventListener('click', function () { setRegion(btn.getAttribute('data-region')); });
  });
  document.querySelectorAll('#category-filters .filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeCat = btn.getAttribute('data-cat');
      document.querySelectorAll('#category-filters .filter-btn').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      renderCatalog();
    });
  });
  $('catalog-search').addEventListener('input', function (e) {
    searchQuery = e.target.value;
    renderCatalog();
  });
  ['calc-product', 'calc-edition', 'calc-users', 'calc-saas-seat'].forEach(function (id) {
    $(id).addEventListener('input', renderCalculator);
    $(id).addEventListener('change', renderCalculator);
  });
  $('calc-inspect-btn').addEventListener('click', function () {
    openModal($('calc-product').value || 'medflow');
  });
  $('modal-close').addEventListener('click', closeModal);
  $('product-modal').addEventListener('click', function (e) {
    if (e.target === $('product-modal')) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('product-modal').hidden) closeModal();
  });

  if ($('contact-copy-btn')) {
    $('contact-copy-btn').addEventListener('click', function () {
      const btn = $('contact-copy-btn');
      const addr = 'andrewkrijdjd@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).catch(function () {});
      }
      btn.textContent = I18N[lang].ct_copied;
      setTimeout(function () { btn.textContent = I18N[lang].ct_copy; }, 2200);
    });
  }

  populateCalcSelect();
  applyTranslations();
  syncRegionUI();
  syncContactEmailLink();
  renderHeroShowcase();
  renderCatalog();
  renderCalculator();
})();
