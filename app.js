(function () {
  'use strict';

  const EMAIL = 'andrewkrijdjd@gmail.com';
  const TAG_DEMO = '[KRETA-DEMO]';
  const TAG_PROPUESTA = '[KRETA-PROPUESTA]';

  const PRODUCTS = [
    {
      slug: 'medflow', img: 'medflow', cat: 'core', flagship: true, name: 'MedFlow / ClinicOps',
      prices: { USA: [790, 2490, 4190], EUR: [725, 2290, 3855], LATAM: [555, 1745, 2935], AR: [435, 1370, 2305] },
      en: { desc: 'Multi-provider clinic scheduling, role-restricted clinical records, and visit billing with zero per-practitioner subscriptions.', rule: 'Blocks double-booked provider slots automatically, isolates clinical notes by role, and links visits directly to billing.' },
      es: { desc: 'Agenda clínica multi-profesional, historia clínica con roles y facturación de consultas sin abonos mensuales por profesional.', rule: 'Bloquea turnos superpuestos automáticamente, separa notas clínicas por rol y vincula cada consulta con facturación.' },
    },
    {
      slug: 'buildcost', img: 'buildcost', cat: 'core', flagship: true, name: 'BuildCost Pro',
      prices: { USA: [990, 3490, 5490], EUR: [910, 3210, 5050], LATAM: [695, 2445, 3845], AR: [545, 1920, 3020] },
      en: { desc: 'Line-item construction job costing, subcontractor variance control, and capped progress certifications.', rule: 'Blocks progress draws exceeding budgeted line balances and flags cost-overrun drift before payment.' },
      es: { desc: 'Control presupuestario por rubro de obra, gastos de subcontratistas y certificaciones de avance con tope automático.', rule: 'Bloquea certificaciones que superan el saldo del rubro y alerta desvíos de margen antes de pagar.' },
    },
    {
      slug: 'fleetguard', img: 'fleetguard', cat: 'core', flagship: true, name: 'FleetGuard & LogiTrack',
      prices: { USA: [790, 2490, 4190], EUR: [725, 2290, 3855], LATAM: [555, 1745, 2935], AR: [435, 1370, 2305] },
      en: { desc: 'Preventive maintenance schedules, expiring DOT/compliance documents, shop orders, and fuel cost tracking per vehicle.', rule: 'Validates odometer continuity, surfaces overdue service intervals, and isolates fuel cost anomalies per unit.' },
      es: { desc: 'Mantenimiento preventivo, vencimientos documentales, órdenes de taller y control de combustible por unidad.', rule: 'Valida continuidad de odómetro, alerta mantenimientos vencidos y detecta desvíos de consumo por vehículo.' },
    },
    {
      slug: 'compliancevault', img: 'compliancevault', cat: 'core', flagship: false, name: 'ComplianceVault ISO/SOC2',
      prices: { USA: [990, 3490, 5490], EUR: [910, 3210, 5050], LATAM: [695, 2445, 3845], AR: [545, 1920, 3020] },
      en: { desc: 'Audit-ready control register, risk matrix, regulatory permits, and timestamped evidence packages for ISO 27001 / SOC 2.', rule: 'Generates SHA-256 verifiable audit reports and tracks expiring permits and control ownership.' },
      es: { desc: 'Matriz de controles y riesgos, habilitaciones regulatorias y repositorio de evidencias para auditorías ISO / SOC2.', rule: 'Emite reportes de auditoría verificables con SHA-256 y monitorea vencimientos críticos.' },
    },
    {
      slug: 'agrofield', img: 'agrofield', cat: 'core', flagship: false, name: 'AgroField & Stock',
      prices: { USA: [890, 2790, 4690], EUR: [820, 2565, 4315], LATAM: [625, 1955, 3285], AR: [490, 1535, 2580] },
      en: { desc: 'Agricultural input inventory, field application logs, harvest receipts, and true net margin per lot and season.', rule: 'Links seed/chemical stock directly to field applications and harvest receipts for true per-acre profitability.' },
      es: { desc: 'Control de stock de insumos, labores agrícolas, cartas de porte y margen neto real por lote y campaña.', rule: 'Vincula insumos y labores con el rinde de cosecha para calcular rentabilidad real por hectárea.' },
    },
    {
      slug: 'educampus', img: 'educampus', cat: 'core', flagship: false, name: 'EduCampus & Certify',
      prices: { USA: [690, 2190, 3490], EUR: [635, 2015, 3210], LATAM: [485, 1535, 2445], AR: [380, 1205, 1920] },
      en: { desc: 'Cohort enrollment, attendance eligibility rules, tuition/scholarship balances, and QR-verified PDF certificates.', rule: 'Enforces minimum attendance and balance clearance before issuing tamper-evident credentials.' },
      es: { desc: 'Gestión de cohortes, asistencias mínimas, becas/cuotas y emisión de certificados PDF con validación QR.', rule: 'Exige asistencia mínima y saldo regularizado antes de emitir cada credencial verificable.' },
    },
    {
      slug: 'quoteflow', img: 'quoteflow', cat: 'smb', flagship: false, name: 'QuoteFlow',
      prices: { USA: [690, 2190, 3490], EUR: [635, 2015, 3210], LATAM: [485, 1535, 2445], AR: [380, 1205, 1920] },
      en: { desc: 'Structured B2B quoting with enforced gross-margin floors, approval workflows, and weighted close pipeline.', rule: 'Blocks quotes below minimum gross-margin floor and exports QR-verified PDF proposals.' },
      es: { desc: 'Cotizador B2B con piso obligatorio de margen bruto, aprobaciones y pipeline ponderado de cierre.', rule: 'Bloquea presupuestos debajo del margen mínimo configurado y exporta PDFs con verificación QR.' },
    },
    {
      slug: 'fixflow', img: 'fixflow', cat: 'smb', flagship: false, name: 'FixFlow',
      prices: { USA: [590, 1690, 2790], EUR: [545, 1555, 2565], LATAM: [415, 1185, 1955], AR: [325, 930, 1535] },
      en: { desc: 'Repair workshop work orders, parts markup tracking, SLA turnaround alerts, and customer pickup receipts.', rule: 'Tracks repair turnaround time (TAT), parts margin, and customer pickup verification.' },
      es: { desc: 'Órdenes de taller y servicio técnico, margen de repuestos, alertas de plazo SLA y comprobantes de entrega.', rule: 'Mide tiempo de reparación (TAT), controla margen de repuestos y registra entregas conformadas.' },
    },
    {
      slug: 'rentvault', img: 'rentvault', cat: 'smb', flagship: false, name: 'RentVault',
      prices: { USA: [690, 1990, 3290], EUR: [635, 1830, 3025], LATAM: [485, 1395, 2305], AR: [380, 1095, 1810] },
      en: { desc: 'Equipment, audiovisual, and event inventory rentals with conflict-free date reservations and asset ROI analytics.', rule: 'Strict date-overlap lock prevents double bookings while measuring utilization and ROI per asset.' },
      es: { desc: 'Alquiler de equipos, maquinaria y eventos con reservas sin solapamiento y análisis de retorno por activo.', rule: 'Bloqueo estricto de doble reserva por fechas y medición real de utilización y retorno por activo.' },
    },
    {
      slug: 'shiftroster', img: 'shiftroster', cat: 'smb', flagship: false, name: 'ShiftRoster',
      prices: { USA: [590, 1490, 2490], EUR: [545, 1370, 2290], LATAM: [415, 1045, 1745], AR: [325, 820, 1370] },
      en: { desc: 'Conflict-free employee shift rosters with real-time overtime, weekend, and night-differential payroll previews.', rule: 'Prevents overlapping staff shifts and calculates surcharge impact before payroll runs.' },
      es: { desc: 'Planificación de turnos sin superposiciones con cálculo inmediato de horas extras y recargos nocturnos.', rule: 'Impide asignar doble turno simultáneo y proyecta el costo laboral antes de liquidar.' },
    },
    {
      slug: 'clientpulse', img: 'clientpulse', cat: 'smb', flagship: false, name: 'ClientPulse',
      prices: { USA: [690, 2190, 3490], EUR: [635, 2015, 3210], LATAM: [485, 1535, 2445], AR: [380, 1205, 1920] },
      en: { desc: 'Agency and studio project portal with formal client deliverable sign-offs before invoicing and scope-creep logs.', rule: 'Enforces documented client sign-off before invoicing and isolates out-of-scope change requests.' },
      es: { desc: 'Portal de proyectos para agencias y estudios con aprobación formal de entregables antes de facturar.', rule: 'Exige conformidad registrada del cliente antes de facturar y cuantifica trabajo fuera de alcance.' },
    },
    {
      slug: 'subguard', img: 'subguard', cat: 'smb', flagship: false, name: 'SubGuard',
      prices: { USA: [690, 2490, 3990], EUR: [635, 2290, 3670], LATAM: [485, 1745, 2795], AR: [380, 1370, 2195] },
      en: { desc: 'Software license and vendor renewal register that exposes unused seats and 12-month recurring spend leaks.', rule: 'Validates active-vs-paid seat counts and alerts upcoming auto-renewals ahead of billing dates.' },
      es: { desc: 'Control centralizado de suscripciones, licencias ociosas y alertas tempranas de renovación anual.', rule: 'Controla licencias activas vs contratadas y anticipa renovaciones automáticas para recortar gasto.' },
    },
    {
      slug: 'propledger', img: 'propledger', cat: 'enterprise', flagship: false, name: 'PropLedger',
      prices: { USA: [790, 2490, 4190], EUR: [725, 2290, 3855], LATAM: [555, 1745, 2935], AR: [435, 1370, 2305] },
      en: { desc: 'Commercial and residential property ledger with compound rent indexation, NOI, and Cap Rate modeling.', rule: 'Enforces one active lease per unit with auditable NOI and escalation schedules.' },
      es: { desc: 'Administración de propiedades y contratos con ajuste compuesto por índice, NOI y Cap Rate auditables.', rule: 'Garantiza un único contrato activo por unidad y calcula rentabilidad neta en tiempo real.' },
    },
    {
      slug: 'lablims', img: 'lablims', cat: 'enterprise', flagship: true, name: 'LabLIMS',
      prices: { USA: [1490, 5990, 9490], EUR: [1370, 5510, 8730], LATAM: [1045, 4195, 6645], AR: [820, 3295, 5220] },
      en: { desc: 'Analytical lab sample chain of custody, statistical Z-score outlier flags, and QR-verified Certificates of Analysis.', rule: 'Tracks every sample handoff, flags statistical anomalies, and generates verifiable PDF COAs.' },
      es: { desc: 'Gestión de laboratorio con cadena de custodia de muestras, alertas Z-score y certificados COA PDF con QR.', rule: 'Registra custodia completa, señala desvíos estadísticos y emite certificados de análisis verificables.' },
    },
    {
      slug: 'lottrace', img: 'lottrace', cat: 'enterprise', flagship: false, name: 'LotTrace',
      prices: { USA: [1290, 4990, 7990], EUR: [1185, 4590, 7350], LATAM: [905, 3495, 5595], AR: [710, 2745, 4395] },
      en: { desc: 'Food, pharma, and cold-chain batch traceability with FEFO expiry ordering, mass balance, and instant recall tree.', rule: 'Enforces First-Expired-First-Out dispatch and traces raw-to-finished batch lineage in seconds.' },
      es: { desc: 'Trazabilidad de lotes para alimentos y farma con despacho FEFO, balance de masa y recall instantáneo.', rule: 'Ordena salidas por vencimiento más próximo y reconstruye la genealogía completa de cualquier lote.' },
    },
    {
      slug: 'caseledger', img: 'caseledger', cat: 'enterprise', flagship: true, name: 'CaseLedger',
      prices: { USA: [890, 2990, 4890], EUR: [820, 2750, 4500], LATAM: [625, 2095, 3425], AR: [490, 1645, 2690] },
      en: { desc: 'Law firm matter docket, fatal statutory deadline alerts, billable WIP hours, and case exposure provisioning.', rule: 'Prioritizes critical statutory deadlines and links attorney WIP time directly to matter billing.' },
      es: { desc: 'Gestión de expedientes jurídicos, alertas de plazos fatales, horas WIP facturables y provisión de riesgo.', rule: 'Prioriza vencimientos procesales críticos y vincula horas trabajadas con la facturación por causa.' },
    },
    {
      slug: 'tradeflow', img: 'tradeflow', cat: 'enterprise', flagship: false, name: 'TradeFlow',
      prices: { USA: [1190, 3890, 6290], EUR: [1095, 3580, 5785], LATAM: [835, 2725, 4405], AR: [655, 2140, 3460] },
      en: { desc: 'Import/export landed-cost allocation (CIF, freight, duties, brokerage) per SKU with true net margin preview.', rule: 'Prorates shipment duties and logistics fees across every SKU before commercial pricing is locked.' },
      es: { desc: 'Prorrateo exacto de costo nacionalizado (CIF, flete, seguro, aranceles) por SKU y margen neto por embarque.', rule: 'Distribuye costos de importación por artículo antes de fijar listas de precios comerciales.' },
    },
    {
      slug: 'fieldops', img: 'fieldops', cat: 'enterprise', flagship: true, name: 'FieldOps',
      prices: { USA: [990, 2990, 4890], EUR: [910, 2750, 4500], LATAM: [695, 2095, 3425], AR: [545, 1645, 2690] },
      en: { desc: 'Field service dispatch, P1/P2/P3 SLA compliance, MTTR/FTFR metrics, and closeout-verified invoicing.', rule: 'Blocks invoicing until documented field closeout is recorded and tracks response SLAs live.' },
      es: { desc: 'Despacho de técnicos en campo, control SLA P1/P2/P3, métricas MTTR/FTFR y bloqueo de factura sin cierre.', rule: 'Impide facturar visitas sin parte de cierre conformado y audita tiempos de respuesta en vivo.' },
    },
    {
      slug: 'ecometrics_suite', img: 'ecometrics', cat: 'impact', flagship: false, name: 'EcoMetrics Suite',
      prices: { USA: [1190, 3490, 5290], EUR: [1095, 3210, 4865], LATAM: [835, 2445, 3705], AR: [655, 1920, 2910] },
      en: { desc: 'Auditable Scope 1–3 carbon footprint, sustainability scoring, and SHA-256 environmental certificates.', rule: 'Applies documented emissions factors with open formulas and instant tamper-evident PDF certificates.' },
      es: { desc: 'Huella de carbono auditable, índice de sustentabilidad industrial y certificados ambientales con hash SHA-256.', rule: 'Aplica factores de emisión trazables con fórmulas abiertas y emisión inmediata de certificados PDF.' },
    },
    {
      slug: 'voluntarios_db', img: 'voluntariosdb', cat: 'impact', flagship: false, name: 'VoluntariosDB',
      prices: { USA: [590, 1790, 2690], EUR: [545, 1645, 2475], LATAM: [415, 1255, 1885], AR: [325, 985, 1480] },
      en: { desc: 'Nonprofit volunteer roster, verified shift hours, donor impact reports, and verifiable service certificates.', rule: 'Centralizes volunteer participation logs and exports donor-ready hours and signed attendance records.' },
      es: { desc: 'Gestión integral de voluntariado, horas verificadas por programa, reportes a donantes y constancias oficiales.', rule: 'Centraliza turnos y horas servidas con trazabilidad completa para rendición de cuentas.' },
    },
  ];

  // Live Interactive Hero Sandbox data (4 flagship operational workflows)
  const SANDBOX_DATA = {
    medflow: {
      stages: { en: ['Scheduled', 'Checked In', 'In Consult', 'Invoiced'], es: ['Agendado', 'Recepcionado', 'En Consulta', 'Facturado'] },
      guardMsg: {
        en: 'Conflict Guard blocked double booking: Dr. Morales · 09:00 is already assigned to Sofia Alvarez.',
        es: 'Guardia de conflicto bloqueó doble turno: Dra. Morales · 09:00 ya está asignado a Sofía Álvarez.',
      },
      rows: [
        { id: 'APT-401', title: 'Sofia Alvarez — Cardiology Consult', meta: 'Dr. Morales · 09:00', val: 165, stage: 1 },
        { id: 'APT-402', title: 'Marcus Chen — Post-Op Follow-Up', meta: 'Dr. Patel · 10:30', val: 210, stage: 2 },
        { id: 'APT-403', title: 'Elena Rossi — Preventive Panel', meta: 'Dr. Morales · 11:15', val: 145, stage: 0 },
      ],
      metricUnit: '$',
    },
    buildcost: {
      stages: { en: ['Budgeted', 'In Field', 'Certifying', 'Approved'], es: ['Presupuestado', 'En Obra', 'Certificando', 'Aprobado'] },
      guardMsg: {
        en: 'Budget Cap Guard blocked draw: Structural Steel certification ($148,000) exceeds remaining $132,500 cap.',
        es: 'Tope presupuestario bloqueado: Acero Estructural ($148,000) supera el saldo disponible de $132,500.',
      },
      rows: [
        { id: 'CST-108', title: 'North Tower — Structural Concrete', meta: 'Apex Contractors · Cap $185k', val: 42800, stage: 2 },
        { id: 'CST-109', title: 'HVAC Mechanical Rough-In', meta: 'Boreal MEP · Cap $94k', val: 26400, stage: 1 },
        { id: 'CST-110', title: 'Site Electrical Sub-Panel', meta: 'VoltGrid LLC · Cap $62k', val: 19200, stage: 0 },
      ],
      metricUnit: '$',
    },
    fieldops: {
      stages: { en: ['Dispatched', 'On Site', 'Closeout', 'Invoiced'], es: ['Despachado', 'En Sitio', 'Cierre', 'Facturado'] },
      guardMsg: {
        en: 'Closeout Gate blocked early invoice: Ticket #WO-882 requires signed field closeout before billing.',
        es: 'Control de cierre bloqueó factura: Orden #WO-882 exige parte técnico firmado antes de facturar.',
      },
      rows: [
        { id: 'WO-882', title: 'Chiller Compressor P1 Emergency', meta: 'Tech J. Ortiz · SLA 2h', val: 1840, stage: 1 },
        { id: 'WO-883', title: 'Warehouse Dock Leveler PM', meta: 'Tech K. Singh · SLA 8h', val: 620, stage: 2 },
        { id: 'WO-884', title: 'Generator Transfer Switch Test', meta: 'Tech R. Diaz · SLA 24h', val: 940, stage: 0 },
      ],
      metricUnit: '$',
    },
    caseledger: {
      stages: { en: ['Intake', 'Discovery', 'Filing Ready', 'Closed'], es: ['Ingreso', 'Prueba', 'Listo Escrito', 'Cerrado'] },
      guardMsg: {
        en: 'Fatal Deadline Guard alerted: Matter #CL-214 statutory brief due in 48 hours — escalated to Managing Partner.',
        es: 'Alerta de plazo fatal: Causa #CL-214 vence en 48 horas — escalada automáticamente a Socio Director.',
      },
      rows: [
        { id: 'CL-214', title: 'Mercer Logistics Contract Dispute', meta: 'Fatal filing: 48h · 18.5h WIP', val: 6475, stage: 2 },
        { id: 'CL-215', title: 'Helios IP Licensing Review', meta: 'Partner M. Vance · 11.0h WIP', val: 3850, stage: 1 },
        { id: 'CL-216', title: 'Commercial Lease Arbitration', meta: 'Assoc. L. Vega · 7.5h WIP', val: 2400, stage: 0 },
      ],
      metricUnit: '$',
    },
  };

  const CODE_SNIPPETS = {
    docker: `# Single-command private deployment — runs offline or on your VPS
services:
  kreta-app:
    build: .
    ports: ["127.0.0.1:8000:8000"]
    environment:
      - APP_ENV=production
      - SESSION_SECRET=\${KRETA_SESSION_SECRET}
      - DB_PATH=/data/operations.db
    volumes:
      - ./data:/data
      - ./backups:/backups
    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://localhost:8000/api/health"]
      interval: 30s
      retries: 3`,
    sql: `-- Server-side domain integrity enforced at database + API layer
CREATE TABLE IF NOT EXISTS appointments (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  provider_id  INTEGER NOT NULL REFERENCES providers(id),
  slot_iso     TEXT NOT NULL,
  patient_name TEXT NOT NULL,
  status       TEXT NOT NULL CHECK (status IN ('scheduled','checked_in','done','invoiced')),
  fee_cents    INTEGER NOT NULL CHECK (fee_cents > 0),
  UNIQUE(provider_id, slot_iso) -- Zero double bookings possible
);

CREATE TABLE IF NOT EXISTS audit_chain (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  actor      TEXT NOT NULL,
  action     TEXT NOT NULL,
  prev_hash  TEXT NOT NULL,
  entry_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);`,
    webhooks: `# Built-in Zapier/Make/n8n HMAC-SHA256 webhooks + QuickBooks/Xero export
from platform_core.integrations import sign_webhook_payload, export_accounting_csv

# 1. Push any record change to Zapier / Make / Slack / ERP automatically
envelope = sign_webhook_payload(WEBHOOK_SECRET, {"event": "record.completed", "id": "REC-104", "amount": 2490})
# Header: X-Kreta-Signature: sha256=...

# 2. Export accounting-ready QuickBooks Online or Xero CSV in 1 click
qb_csv = export_accounting_csv(records, fmt="quickbooks")
xero_csv = export_accounting_csv(records, fmt="xero")`,
    audit: `# Tamper-evident SHA-256 chain written on every state mutation
import hashlib, json

def append_audit(conn, actor: str, action: str, payload: dict) -> str:
    prev = conn.execute(
        "SELECT entry_hash FROM audit_chain ORDER BY id DESC LIMIT 1"
    ).fetchone()
    prev_hash = prev[0] if prev else "GENESIS"
    raw = json.dumps(
        {"prev": prev_hash, "actor": actor, "action": action, "payload": payload},
        sort_keys=True,
    ).encode("utf-8")
    entry_hash = hashlib.sha256(raw).hexdigest()
    conn.execute(
        "INSERT INTO audit_chain(actor, action, prev_hash, entry_hash) VALUES (?,?,?,?)",
        (actor, action, prev_hash, entry_hash),
    )
    return entry_hash`,
    manifest: `# Delivered with every release package for independent verification
PACKAGE: MedFlow_ClinicOps_SQL_Web_v4.2.zip
DELIVERY_MODE: Fixed-Scope One-Time Ownership (Zero Recurring Fees)
WARRANTY: 90-Day Corrective Defect Warranty Included

SHA-256 CHECKSUMS:
7a9c4e10b2d3f4a1...  app.py
4f218c90e1a7b5c3...  schema.sql
9e0b1d74a3c8f6e2...  Dockerfile
c51d8a32f9e0b4a7...  docker-compose.yml
2b7e6f19d4c0a8e5...  docs/RUNBOOK_DEPLOY.md`,
  };

  const I18N = {
    en: {
      skip_link: 'Skip to main content',
      nav_flagships: 'Flagships',
      nav_catalog: 'All 20',
      nav_arch: 'Architecture',
      nav_savings: 'ROI',
      nav_samples: 'Samples',
      nav_faq: 'FAQ',
      nav_demo: 'Live Demo',
      nav_cta: 'Request Proposal',
      region_label: 'Pricing region',
      hero_pill: 'Self-hosted operational software · 20 vertical systems',
      hero_h1: 'Own your operational software outright. Zero per-seat SaaS rent.',
      hero_lead: 'Deploy a complete vertical system—database, web workspace, role permissions, cryptographic audit trail, and PDF deliverables—on your own server or Google Workspace for a single one-time fee.',
      hero_cta_demo: 'Open Full 4-View Workspace',
      hero_cta_catalog: 'Browse all 20 systems',
      trust_1: '100% source code & SQL database ownership',
      trust_2: '50/50 milestone delivery · Escrow available',
      trust_3: 'Runs offline, in Docker, or your private cloud',
      trust_4: 'Free 3-record custom workflow proof before paying',
      sb_live: 'Live Sandbox',
      sb_open_full: 'Open Full Workspace →',
      proof_1: 'Vertical production systems with live 4-view demos',
      proof_2: 'Mandatory software seat fees after handover',
      proof_3: 'Google Sheets, Self-Hosted SQL+Web, or Hybrid',
      proof_4: 'Milestone payments via ACH, SEPA, Escrow, or USDT',
      flag_kicker: 'Most Requested Deployments',
      flag_h2: '6 Flagship Operational Systems',
      flag_sub: 'Every card below is a real working mini-dashboard—click any row to advance its stage and watch KPIs & charts recalculate live. Zero static screenshots.',
      flag_see_all: 'See all 20 systems ↓',
      cat_kicker: 'Complete Portfolio',
      cat_h2: 'All 20 Production Systems',
      cat_sub: 'Filter by vertical, search by workflow, and compare exact one-time ownership pricing for your region across Google Sheets, SQL + Web Portal, and Hybrid editions.',
      cat_all: 'All 20',
      cat_core: 'Core Operations (6)',
      cat_smb: 'SMB Workflows (6)',
      cat_ent: 'Regulated & Enterprise (6)',
      cat_imp: 'Impact & ESG (2)',
      view_table: 'Table',
      view_cards: 'Cards',
      arch_kicker: 'Verifiable Engineering',
      arch_h2: 'Inspect what you actually own on day one.',
      arch_sub: 'No black-box multi-tenant vendor lock-in. Every delivery ships as a clean, documented repository your IT team or any developer can run, audit, and back up locally.',
      t1_t: '1-Click Cloud or Offline Self-Host',
      t1_d: 'Zero Docker CLI required: deploy in 5 minutes to your private Render/Railway/VPS cloud, run offline on local LAN, or add optional turnkey managed hosting ($49/mo).',
      t2_t: 'RBAC, SSO & SHA-256 Audit Chain',
      t2_d: 'Signed role sessions (Admin, Operator, Auditor), Google Workspace SSO ready, strict server-side domain guards, and append-only SHA-256 activity logs.',
      t3_t: 'REST API, Webhooks & QuickBooks/Xero',
      t3_d: 'Connect to Zapier, Make, or n8n via HMAC-signed webhooks, export 1-click QuickBooks Online / Xero accounting CSVs, and keep full SQLite/PostgreSQL ownership.',
      t4_t: '14-Day Pilot, Escrow & Optional SLA',
      t4_d: 'Approve 3 real records in a free 14-day pilot before paying $1. 50/50 Upwork/Escrow milestones, 90-day free warranty, plus optional Annual SLA Support ($390/yr).',
      code_foot: 'Included in every SQL + Web Portal and Hybrid package',
      code_try: 'Inspect Live Audit Trail →',
      roi_kicker: 'Transparent Total Cost of Ownership',
      roi_h2: 'Own vs. Rent: Honest 36-Month Calculator',
      roi_sub: 'Compare per-seat SaaS renewals against a single one-time ownership fee. If a smaller team spends less on SaaS than SQL + Web, the calculator tells you honestly and recommends the Google Sheets edition.',
      roi_sys: 'System to evaluate',
      roi_seats: 'Active team seats',
      roi_price: 'Current SaaS price per seat / month',
      roi_saas_lbl: '36-Month SaaS Subscription',
      roi_try: 'Open Live Demo →',
      roi_req: 'Request Written Proposal',
      smp_kicker: 'Actual System Output',
      smp_h2: 'Inspect Real PDF Deliverables',
      smp_sub: 'Generated directly by our production engines—including SHA-256 verification stamps, audit matrices, and executive scope proposals.',
      smp_1_t: 'Executive Scope Proposal',
      smp_1_d: 'Sample fixed-scope proposal with acceptance checklist, milestone breakdown, and handover terms.',
      smp_2_t: 'ComplianceVault Audit Report',
      smp_2_d: 'ISO 27001 / SOC 2 control register export with risk ratings and cryptographic hash verification.',
      smp_3_t: 'EcoMetrics SHA-256 Certificate',
      smp_3_d: 'Scope 1–3 carbon emissions report with traceable emission factors and tamper-evident seal.',
      smp_4_t: 'EduCampus QR Credential',
      smp_4_d: 'Attendance-verified diploma generated automatically once eligibility rules pass.',
      smp_open: 'Open PDF sample →',
      proc_kicker: 'Zero-Risk Procurement',
      proc_h2: '4-Stage Fixed-Scope Delivery',
      proc_sub: 'Verify the system with your own workflow data before committing budget.',
      p1_t: 'Interactive Demo + Free 24h Custom Migration',
      p1_d: 'Test any live dashboard right now, then send us your messy Excel/Sheets—we map your custom columns with zero data loss into a free 14-day private pilot.',
      p2_t: 'Fixed Written Scope + 3 Interest-Free Installments',
      p2_d: 'Choose Google Sheets, SQL + Web Portal, or Hybrid. Pay once or split into 3 interest-free monthly installments (0% APR).',
      p3_t: '50/50 Escrow + Free 30-Min Team Onboarding',
      p3_d: 'We configure your roles, thresholds, mobile-ready layout, and walk your staff through a live 30-minute onboarding call before you release Milestone 2.',
      p4_t: 'Full Ownership + 30-Day Guarantee & 90-Day Warranty',
      p4_d: 'Receive 100% source code, SQL database, SHA-256 manifest, 30-day satisfaction guarantee, and 90-day free defect warranty. Optional $390/yr SLA.',
      faq_h2: 'Technical & Procurement Questions',
      q1: 'Is this genuinely a one-time payment with zero recurring license fees?',
      a1: 'Yes. Every edition is delivered as a closed fixed-scope project under a single one-time fee (50% kick-off, 50% upon live acceptance). There are no mandatory monthly subscriptions, per-seat fees, or auto-renewals.',
      q2: 'How do HIPAA, GDPR, or internal IT security reviews work with self-hosting?',
      a2: 'Because you deploy the SQL + Web Portal on your own local server, VPC, or office machine via Docker Compose, Kreta Software never stores, touches, or has access to your production data. You control encryption at rest, backups, firewall rules, and user access.',
      q3: 'Can we import our existing spreadsheets and start with Google Sheets first?',
      a3: 'Yes. Every system supports clean CSV import/export out of the box. And if you start with the Google Sheets edition, 100% of your initial payment is credited if you upgrade to SQL + Web Portal or Hybrid later.',
      q4: 'What warranty and post-delivery support are included?',
      a4: 'Every delivery includes a 90-day corrective defect warranty within the agreed scope at zero cost. Future feature additions are handled strictly on demand via fixed work orders or a prepaid 5-hour pack valid for 12 months—never forced retainers.',
      q5: 'Which international payment and escrow options are available?',
      a5: 'US ACH (USD) and EU SEPA (EUR) bank transfers, milestone escrow via Upwork/Escrow.com, local bank transfer with invoice in Argentina, or USDT / Binance Pay (with a 5% early-payment discount).',
      ct_h2: 'Test a system with 3 real records from your operation.',
      ct_sub: 'Email your industry and workflow—we will configure a live preview or send a written fixed-scope proposal within 24 hours. No obligation and no forced sales call.',
      ct_email: 'Request Demo / Proposal via Email',
      ct_copy: 'Copy Email (andrewkrijdjd@gmail.com)',
      ft_note: 'Self-hosted operational software · One-time ownership · Zero recurring seat fees',
      mtab_live: 'Live Interactive App',
      mtab_editions: 'Editions & 3 Installments',
      modal_open_demo: 'Open Full Screen Workspace →',
      modal_proposal: 'Start Free 14-Day Pilot',
      modal_copy: 'Copy Email Text',
      btn_try: 'Open Live App',
      btn_editions: 'Editions',
      ed_sheets: 'Google Sheets',
      ed_sql: 'SQL + Web Portal',
      ed_hyb: 'Hybrid Bundle',
      ed_sheets_d: 'Structured spreadsheet automation, Apps Script rules, and dashboard.',
      ed_sql_d: 'Private self-hosted Web app, SQLite/Postgres DB, RBAC, Docker, PDF & audit log.',
      ed_hyb_d: 'Full SQL + Web Portal plus synchronized Google Sheets executive reporting.',
      cat_names: { core: 'Core Ops', smb: 'SMB', enterprise: 'Enterprise', impact: 'Impact' },
    },
    es: {
      skip_link: 'Saltar al contenido principal',
      nav_flagships: 'Destacados',
      nav_catalog: 'Los 20',
      nav_arch: 'Arquitectura',
      nav_savings: 'ROI',
      nav_samples: 'PDFs',
      nav_faq: 'FAQ',
      nav_demo: 'Demo Viva',
      nav_cta: 'Solicitar Propuesta',
      region_label: 'Región de precios',
      hero_pill: 'Software operativo propio · 20 sistemas verticales',
      hero_h1: 'Sea dueño de su software operativo. Cero abonos mensuales por usuario.',
      hero_lead: 'Implemente un sistema vertical completo —base de datos, portal web, permisos por rol, auditoría criptográfica y PDFs verificables— en su propio servidor o Google Workspace con un único pago.',
      hero_cta_demo: 'Abrir Workspace Completo (4 Vistas)',
      hero_cta_catalog: 'Explorar los 20 sistemas',
      trust_1: '100% propiedad del código fuente y base SQL',
      trust_2: 'Entrega por hitos 50/50 · Escrow disponible',
      trust_3: 'Corre local, en Docker o en su nube privada',
      trust_4: 'Prueba gratis con 3 registros reales antes de pagar',
      sb_live: 'Sandbox Vivo',
      sb_open_full: 'Abrir Workspace Completo →',
      proof_1: 'Sistemas verticales con demos interactivas de 4 vistas',
      proof_2: 'Abonos mensuales obligatorios por usuario tras la entrega',
      proof_3: 'Google Sheets, Portal Web + SQL o Híbrido',
      proof_4: 'Pagos por hitos vía ACH, SEPA, Escrow o USDT',
      flag_kicker: 'Implementaciones Más Solicitadas',
      flag_h2: '6 Sistemas Operativos Destacados',
      flag_sub: 'Cada tarjeta es un mini-dashboard real funcionando en vivo: haga clic en cualquier fila para avanzar su etapa y ver recalcular KPIs y gráficos al instante. Cero capturas estáticas.',
      flag_see_all: 'Ver los 20 sistemas ↓',
      cat_kicker: 'Catálogo Completo',
      cat_h2: 'Los 20 Sistemas en Producción',
      cat_sub: 'Filtre por vertical, busque por proceso y compare los precios exactos de pago único para su región en Google Sheets, Portal Web + SQL e Híbrido.',
      cat_all: 'Los 20',
      cat_core: 'Operación Central (6)',
      cat_smb: 'Gestión PyME (6)',
      cat_ent: 'Regulados y Empresas (6)',
      cat_imp: 'Impacto y ESG (2)',
      view_table: 'Tabla',
      view_cards: 'Tarjetas',
      arch_kicker: 'Ingeniería Verificable',
      arch_h2: 'Inspeccione exactamente lo que recibe el día uno.',
      arch_sub: 'Sin cajas negras ni dependencia de un proveedor SaaS. Cada entrega incluye un repositorio limpio y documentado que su equipo puede auditar, alojar y respaldar localmente.',
      t1_t: 'Nube en 1 Clic o Autoalojado Local',
      t1_d: 'Sin tocar Docker: despliegue en 5 min en su nube privada (Render/Railway/VPS), corra offline en oficina o sume hosting administrado opcional ($49/mes).',
      t2_t: 'Roles RBAC, SSO y Cadena SHA-256',
      t2_d: 'Sesiones firmadas por rol, listo para Google Workspace SSO, reglas de negocio en servidor y auditoría SHA-256 inalterable.',
      t3_t: 'API REST, Webhooks y QuickBooks/Xero',
      t3_d: 'Conecte Zapier, Make o n8n con webhooks firmados HMAC, exporte CSV contable QuickBooks/Xero en 1 clic y conserve su base SQL.',
      t4_t: 'Piloto 14 Días, Escrow y SLA Opcional',
      t4_d: 'Valide 3 registros reales en piloto gratis antes de pagar $1. Hitos 50/50 con Escrow/Upwork, 90 días de garantía y plan SLA anual opcional ($390/año).',
      code_foot: 'Incluido en cada paquete SQL + Portal Web e Híbrido',
      code_try: 'Ver Auditoría en Vivo →',
      roi_kicker: 'Costo Total de Propiedad Transparente',
      roi_h2: 'Propiedad vs. Alquiler: Calculadora Honesta a 36 Meses',
      roi_sub: 'Compare abonos SaaS por usuario contra un único pago de propiedad. Si su equipo gasta menos en SaaS que la edición SQL + Web, se lo indicamos con transparencia y recomendamos Google Sheets.',
      roi_sys: 'Sistema a evaluar',
      roi_seats: 'Usuarios activos del equipo',
      roi_price: 'Precio SaaS actual por usuario / mes',
      roi_saas_lbl: 'Suscripción SaaS a 36 Meses',
      roi_try: 'Abrir Demo Viva →',
      roi_req: 'Solicitar Propuesta Escrita',
      smp_kicker: 'Salida Real del Sistema',
      smp_h2: 'Inspeccione Entregables PDF Reales',
      smp_sub: 'Generados directamente por nuestros motores de producción: sellos SHA-256, matrices de auditoría y propuestas ejecutivas de alcance cerrado.',
      smp_1_t: 'Propuesta Ejecutiva de Alcance',
      smp_1_d: 'Ejemplo de propuesta cerrada con checklist de aceptación, hitos y condiciones de entrega.',
      smp_2_t: 'Informe de Auditoría ComplianceVault',
      smp_2_d: 'Registro de controles ISO 27001 / SOC 2 con evaluación de riesgo y verificación criptográfica.',
      smp_3_t: 'Certificado SHA-256 EcoMetrics',
      smp_3_d: 'Reporte de huella de carbono Alcance 1–3 con factores de emisión trazables y sello inalterable.',
      smp_4_t: 'Credencial QR EduCampus',
      smp_4_d: 'Certificado emitido automáticamente al cumplirse las reglas mínimas de asistencia y saldo.',
      smp_open: 'Abrir muestra PDF →',
      proc_kicker: 'Contratación Sin Riesgo',
      proc_h2: 'Proceso de Entrega en 4 Etapas',
      proc_sub: 'Verifique el sistema con datos de su propia operación antes de comprometer presupuesto.',
      p1_t: 'Demo Viva + Migración Gratis 24h Sin Pérdidas',
      p1_d: 'Pruebe cualquier tablero ahora mismo y envíenos sus planillas actuales: mapeamos sus columnas sin pérdida de datos en un piloto privado de 14 días gratis.',
      p2_t: 'Alcance Cerrado + 3 Cuotas Sin Interés',
      p2_d: 'Elija Google Sheets, Portal Web + SQL o Híbrido. Abone en pago único o en 3 cuotas mensuales sin interés (0% recargo).',
      p3_t: 'Escrow 50/50 + Capacitación de 30 Min Gratis',
      p3_d: 'Configuramos roles, alertas y vista móvil, y capacitamos en vivo a su equipo (30 min incluidos) antes de liberar el segundo 50%.',
      p4_t: 'Propiedad Total + Garantía 30 Días y 90 Días',
      p4_d: 'Recibe código fuente, base SQL, manifiesto SHA-256, garantía de satisfacción de 30 días y 90 días de garantía correctiva. SLA anual opcional.',
      faq_h2: 'Preguntas Técnicas y de Contratación',
      q1: '¿Es realmente un único pago sin abonos mensuales obligatorios?',
      a1: 'Sí. Cada edición se entrega como proyecto cerrado bajo un único monto (50% al inicio y 50% al validar la entrega). No existen suscripciones obligatorias ni cargos por usuario.',
      q2: '¿Cómo funciona la privacidad y cumplimiento (HIPAA, GDPR, auditoría IT) con autoalojamiento?',
      a2: 'Al instalar el Portal Web + SQL en su propio servidor, VPS privado o equipo de oficina con Docker Compose, Kreta Software jamás almacena ni accede a sus datos productivos. Usted controla cifrado, respaldos y accesos.',
      q3: '¿Podemos importar nuestras planillas actuales o empezar por Google Sheets?',
      a3: 'Sí. Todos los sistemas incluyen importación y exportación CSV. Además, si comienza con Google Sheets, el 100% de ese pago se bonifica si luego actualiza a Portal Web + SQL o Híbrido.',
      q4: '¿Qué garantía y soporte posterior se incluyen?',
      a4: 'Cada entrega incluye 90 días de garantía correctiva sin cargo dentro del alcance acordado. Mejoras futuras se cotizan por orden de trabajo cerrada o pack prepago de 5 horas válido 12 meses.',
      q5: '¿Qué medios de pago y custodia (escrow) aceptan?',
      a5: 'Transferencia bancaria internacional ACH (USD) / SEPA (EUR), custodia por hitos en Upwork/Escrow.com, transferencia bancaria local con factura en Argentina, o USDT / Binance Pay (5% de descuento).',
      ct_h2: 'Evalúe un sistema con 3 registros reales de su operación.',
      ct_sub: 'Escríbanos indicando su rubro y flujo actual: preparamos una vista interactiva o propuesta cerrada en 24 horas, sin compromiso ni llamadas obligatorias.',
      ct_email: 'Solicitar Demo / Propuesta por Email',
      ct_copy: 'Copiar Email (andrewkrijdjd@gmail.com)',
      ft_note: 'Software operativo autoalojado · Propiedad por pago único · Cero abonos por usuario',
      mtab_live: 'App Interactiva Viva',
      mtab_editions: 'Ediciones y 3 Cuotas',
      modal_open_demo: 'Abrir en Pantalla Completa →',
      modal_proposal: 'Iniciar Piloto Gratis 14 Días',
      modal_copy: 'Copiar Texto del Email',
      btn_try: 'Probar App Aquí',
      btn_editions: 'Ediciones',
      ed_sheets: 'Google Sheets',
      ed_sql: 'Portal Web + SQL',
      ed_hyb: 'Paquete Híbrido',
      ed_sheets_d: 'Automatización estructurada en Google Sheets, Apps Script y tablero operativo.',
      ed_sql_d: 'Aplicación Web privada, base SQLite/Postgres, roles RBAC, Docker, PDF y auditoría.',
      ed_hyb_d: 'Portal Web + SQL completo más tablero sincronizado en Google Sheets.',
      cat_names: { core: 'Central', smb: 'PyME', enterprise: 'Empresa', impact: 'Impacto' },
    },
  };

  const state = {
    lang: (new URLSearchParams(location.search).get('lang') === 'es' || localStorage.getItem('kreta_lang') === 'es') ? 'es' : 'en',
    region: localStorage.getItem('kreta_region') || 'USA',
    theme: localStorage.getItem('kreta_theme') || 'light',
    cat: 'all',
    search: '',
    view: (typeof window !== 'undefined' && window.innerWidth <= 768) ? 'cards' : 'table',
    sbSlug: 'medflow',
    sbSearch: '',
    sbStageFilter: null,
    sbRows: JSON.parse(JSON.stringify(SANDBOX_DATA)),
    sbAlert: false,
    sbNote: '',
    codeTab: 'docker',
    modalSlug: null,
    modalTab: 'live',
  };

  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key; }
  function currSymbol() { return state.region === 'EUR' ? '€' : '$'; }
  function currCode() { return state.region === 'EUR' ? 'EUR' : 'USD'; }
  function fmtMoney(n) { return currSymbol() + Math.round(n).toLocaleString('en-US'); }
  function getProduct(slug) { return PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0]; }
  function pricesFor(p) { return p.prices[state.region] || p.prices.USA; }

  function mailtoUrl(tag, productName) {
    const cleanTag = tag.startsWith('[') ? tag : `[${tag}]`;
    const subj = `${cleanTag} ${productName || 'Kreta Software'} (${state.region})`;
    const body = state.lang === 'es'
      ? `Estimado equipo de Kreta Software,\n\nDeseo evaluar ${productName || 'uno de sus sistemas'} para nuestra operación (${state.region}).\n- Rubro / equipo:\n- Edición de interés (Google Sheets / SQL+Web / Híbrido):\n\nSaludos cordiales,`
      : `Hello Kreta Software team,\n\nI would like to evaluate ${productName || 'your operational software'} for our team (${state.region}).\n- Industry / team size:\n- Preferred edition (Google Sheets / SQL+Web / Hybrid):\n\nBest regards,`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  }

  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { el.hidden = true; }, 2600);
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('kreta_theme', state.theme);
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    localStorage.setItem('kreta_lang', state.lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (I18N[state.lang][k]) el.textContent = I18N[state.lang][k];
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === state.lang));
    });
    const search = document.getElementById('catalog-search');
    if (search) {
      search.placeholder = state.lang === 'es'
        ? 'Buscar clínica, flota, obras, LIMS...'
        : 'Search clinic, fleet, quotes, LIMS...';
    }
    const contactBtn = document.getElementById('contact-email-btn');
    if (contactBtn) contactBtn.href = mailtoUrl('KRETA-DEMO', 'Evaluation Request');
    const mobileProp = document.getElementById('mobile-proposal-btn');
    if (mobileProp) mobileProp.href = mailtoUrl('KRETA-PROPUESTA', 'Evaluation');
  }

  const SHARED_STORE_KEY = 'kreta_live_store_v1';
  const DEFAULT_STAGES = {
    en: ['Queued', 'In Progress', 'Review', 'Completed'],
    es: ['Pendiente', 'En Curso', 'Revisión', 'Completado'],
  };
  const PRODUCT_META = {
    medflow: { stages: { en: ['Scheduled', 'Checked In', 'In Consult', 'Billed'], es: ['Agendado', 'Recepción', 'Consulta', 'Facturado'] }, seed: [
      { id: 'MED-101', name: 'Martin Lopez', owner: 'Dr. Hannah Reed', slot: '09:00', amount: 140, stage: 3, notes: 'Annual physical completed.' },
      { id: 'MED-102', name: 'Carla Diaz', owner: 'Dr. Hannah Reed', slot: '10:30', amount: 120, stage: 2, notes: 'Follow-up consult.' },
      { id: 'MED-103', name: 'David Brooks', owner: 'Dr. Carlos Vega', slot: '11:30', amount: 185, stage: 1, notes: 'Checked in at front desk.' },
      { id: 'MED-104', name: 'Elena Morales', owner: 'Dr. Priya Patel', slot: '14:00', amount: 95, stage: 0, notes: 'Initial intake.' },
    ] },
    buildcost: { stages: { en: ['Draft Draw', 'PM Review', 'Approved', 'Paid'], es: ['Borrador', 'Revisión', 'Aprobada', 'Pagada'] }, seed: [
      { id: 'BC-201', name: 'Apex Structural Concrete', owner: 'Oak St Commercial', slot: 'Concrete & Steel', amount: 42500, stage: 3, notes: 'Slab pour inspected.' },
      { id: 'BC-202', name: 'VoltLine Electrical', owner: 'Oak St Commercial', slot: 'Electrical Sub', amount: 18900, stage: 2, notes: 'Within 2% budget.' },
      { id: 'BC-203', name: 'Precision Mechanical', owner: 'Riverfront Lofts', slot: 'HVAC & Plumbing', amount: 26400, stage: 1, notes: 'Awaiting lien waiver.' },
      { id: 'BC-204', name: 'Summit Millwork', owner: 'Westside Wing', slot: 'Finishes', amount: 14200, stage: 0, notes: 'Submitted.' },
    ] },
    fleetguard: { stages: { en: ['Scheduled', 'In Shop', 'QC Check', 'Cleared'], es: ['Programado', 'En Taller', 'Control QC', 'Liberado'] }, seed: [
      { id: 'FL-301', name: 'Truck #14 — Freightliner M2', owner: 'Fleet Bay A', slot: 'DOT Annual', amount: 1450, stage: 2, notes: 'Brake pads replaced.' },
      { id: 'FL-302', name: 'Van #08 — Ford Transit', owner: 'Fleet Bay B', slot: 'PM-B 15k mi', amount: 480, stage: 1, notes: 'Fluids & filters.' },
      { id: 'FL-303', name: 'Truck #22 — Isuzu NPR', owner: 'Fleet Bay A', slot: 'Tire & Align', amount: 920, stage: 3, notes: 'Cleared for dispatch.' },
    ] },
    lablims: { stages: { en: ['Logged', 'In Assay', 'QA Review', 'COA Issued'], es: ['Ingresada', 'En Ensayo', 'Revisión QA', 'COA Emitido'] }, seed: [
      { id: 'LB-401', name: 'Water Batch #884 — Metals', owner: 'Chem Lab 1', slot: 'ICP-MS Panel', amount: 640, stage: 2, notes: 'Z-score within 0.4 SD.' },
      { id: 'LB-402', name: 'Dairy Lot #312 — Micro', owner: 'Bio Lab 2', slot: 'Pathogen Screen', amount: 420, stage: 1, notes: 'Incubation 18h.' },
      { id: 'LB-403', name: 'Soil Core #119 — NPK', owner: 'Ag Lab 1', slot: 'Nutrient Suite', amount: 310, stage: 3, notes: 'QR COA signed.' },
    ] },
    caseledger: { stages: { en: ['Intake', 'Discovery', 'Filing Ready', 'Closed'], es: ['Ingreso', 'Prueba', 'Escrito Listo', 'Cerrado'] }, seed: [
      { id: 'CL-214', name: 'Mercer Logistics Dispute', owner: 'Partner M. Vance', slot: '48h Fatal Brief', amount: 6475, stage: 2, notes: '18.5h WIP logged.' },
      { id: 'CL-215', name: 'Helios IP Licensing', owner: 'Assoc. L. Vega', slot: 'Contract Review', amount: 3850, stage: 1, notes: 'Redlines sent.' },
      { id: 'CL-216', name: 'Commercial Lease Arb.', owner: 'Partner M. Vance', slot: 'Mediation', amount: 2400, stage: 3, notes: 'Settled & billed.' },
    ] },
    fieldops: { stages: { en: ['Dispatched', 'On Site', 'QC Sign-off', 'Invoiced'], es: ['Despachado', 'En Sitio', 'Control QC', 'Facturado'] }, seed: [
      { id: 'WO-801', name: 'Oak Plaza · Rooftop Chiller', owner: 'Tech Mike Torres', slot: '4h Emergency', amount: 1850, stage: 2, notes: 'Compressor replaced.' },
      { id: 'WO-802', name: 'Metro Tower · Elevator B', owner: 'Tech Jordan Vance', slot: '8h Priority', amount: 1240, stage: 1, notes: 'Door sensor calibrated.' },
      { id: 'WO-803', name: 'Harbor Clinic · Boiler PM', owner: 'Tech Luis Gomez', slot: 'Preventive PM', amount: 640, stage: 3, notes: 'Closeout signed.' },
    ] },
  };

  function readSharedStore() {
    try { return JSON.parse(localStorage.getItem(SHARED_STORE_KEY) || '{}') || {}; } catch (_) { return {}; }
  }
  function saveSharedRows(slug, rows) {
    try {
      const all = readSharedStore();
      all[slug] = rows;
      localStorage.setItem(SHARED_STORE_KEY, JSON.stringify(all));
    } catch (_) {}
  }
  function getLiveRows(slug) {
    const saved = readSharedStore();
    if (Array.isArray(saved[slug]) && saved[slug].length) return saved[slug];
    if (PRODUCT_META[slug]) return PRODUCT_META[slug].seed.map((r) => Object.assign({}, r));
    const p = getProduct(slug);
    const pfx = slug.slice(0, 3).toUpperCase();
    const base = pricesFor(p)[0];
    return [
      { id: `${pfx}-101`, name: `${p.name} — Priority Account A`, owner: 'Ops Lead', slot: 'Today 09:30', amount: Math.round(base * 0.6), stage: 2, notes: 'Active workflow.' },
      { id: `${pfx}-102`, name: `${p.name} — Active Order B`, owner: 'Team Lead', slot: 'Today 11:00', amount: Math.round(base * 0.45), stage: 1, notes: 'In progress.' },
      { id: `${pfx}-103`, name: `${p.name} — Verified Record C`, owner: 'Supervisor', slot: 'Today 14:15', amount: Math.round(base * 0.8), stage: 3, notes: 'Completed.' },
    ];
  }
  function getStagesFor(slug) {
    return (PRODUCT_META[slug] && PRODUCT_META[slug].stages[state.lang]) || DEFAULT_STAGES[state.lang];
  }

  function populateSandboxSelect() {
    const sel = document.getElementById('sb-product-select');
    if (!sel) return;
    sel.innerHTML = PRODUCTS.map((p) => `<option value="${p.slug}">${p.name}</option>`).join('');
    sel.value = state.sbSlug;
  }

  function renderSandbox() {
    const p = getProduct(state.sbSlug);
    const rows = getLiveRows(state.sbSlug);
    const [shPrice, sqlPrice] = pricesFor(p);
    const stages = getStagesFor(state.sbSlug);
    const inst3 = Math.ceil(sqlPrice / 3);

    document.querySelectorAll('.sandbox-tab').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.sb === state.sbSlug));
    });
    const sbSel = document.getElementById('sb-product-select');
    if (sbSel) sbSel.value = state.sbSlug;

    document.getElementById('sb-title').textContent = p.name;
    document.getElementById('sb-sub').textContent = state.lang === 'es'
      ? 'Pruebe cualquiera de los 20 sistemas aquí: agregue registros, filtre o avance etapas en vivo.'
      : 'Test any of the 20 systems right here: add a record, filter, or advance stages live.';
    document.getElementById('sb-price').textContent = state.lang === 'es'
      ? `SQL+Web ${fmtMoney(sqlPrice)} (3× ${fmtMoney(inst3)}) · Sheets ${fmtMoney(shPrice)}`
      : `SQL+Web ${fmtMoney(sqlPrice)} (3× ${fmtMoney(inst3)}) · Sheets ${fmtMoney(shPrice)}`;

    const totalVal = rows.reduce((s, r) => s + Number(r.amount || 0), 0);
    const completed = rows.filter((r) => r.stage === 3).length;
    const active = rows.length - completed;
    document.getElementById('sb-kpis').innerHTML = `
      <div class="sandbox-kpi"><div class="sandbox-kpi-lbl">${state.lang === 'es' ? 'Valor Activo' : 'Active Value'}</div><div class="sandbox-kpi-val mono">$${totalVal.toLocaleString('en-US')}</div></div>
      <div class="sandbox-kpi"><div class="sandbox-kpi-lbl">${state.lang === 'es' ? 'En Curso' : 'In Progress'}</div><div class="sandbox-kpi-val mono">${active}</div></div>
      <div class="sandbox-kpi"><div class="sandbox-kpi-lbl">${state.lang === 'es' ? 'Completados' : 'Completed'}</div><div class="sandbox-kpi-val mono">${completed} / ${rows.length}</div></div>
    `;

    // Reactive 4-stage bar strip (click to filter!)
    const cnts = [0, 0, 0, 0];
    rows.forEach((r) => { cnts[r.stage] = (cnts[r.stage] || 0) + 1; });
    const maxCnt = Math.max(1, ...cnts);
    const chartEl = document.getElementById('sb-chart');
    if (chartEl) {
      chartEl.innerHTML = stages.map((st, idx) => {
        const pct = Math.round((cnts[idx] / maxCnt) * 100);
        const pressed = state.sbStageFilter === idx;
        return `
          <button type="button" class="sb-stage-bar" data-sb-stage="${idx}" aria-pressed="${pressed}">
            <div class="sb-stage-bar-top"><span>${st}</span><span class="mono">${cnts[idx]}</span></div>
            <div class="sb-stage-track"><div class="sb-stage-fill" style="width:${Math.max(8, pct)}%"></div></div>
          </button>
        `;
      }).join('');
    }

    const q = (state.sbSearch || '').trim().toLowerCase();
    const visible = rows.filter((r) => {
      if (state.sbStageFilter !== null && r.stage !== state.sbStageFilter) return false;
      if (!q) return true;
      return `${r.id} ${r.name} ${r.owner} ${r.slot}`.toLowerCase().includes(q);
    }).slice(0, 4);

    const listEl = document.getElementById('sb-list');
    listEl.innerHTML = visible.length ? visible.map((r) => {
      const stageName = stages[r.stage] || stages[0];
      const nextLbl = r.stage < 3
        ? (state.lang === 'es' ? 'Avanzar →' : 'Advance →')
        : (state.lang === 'es' ? 'Reiniciar ↺' : 'Reset ↺');
      return `
        <div class="sandbox-row">
          <div style="min-width:0">
            <div class="sandbox-row-title">${r.name}</div>
            <div class="sandbox-row-meta mono">${r.id} · ${r.owner} · ${r.slot} · $${Number(r.amount || 0).toLocaleString('en-US')}</div>
          </div>
          <span class="stage-pill stage-${r.stage}">${stageName}</span>
          <button type="button" class="sandbox-adv-btn" data-sb-id="${r.id}">${nextLbl}</button>
        </div>
      `;
    }).join('') : `<div style="padding:12px;text-align:center;font-size:12.5px;color:var(--muted)">${state.lang === 'es' ? 'Sin registros para ese filtro.' : 'No matching records for this filter.'}</div>`;

    const fb = document.getElementById('sb-feedback');
    fb.classList.toggle('is-alert', state.sbAlert);
    const defaultNote = state.lang === 'es'
      ? `SQL + Web: ${fmtMoney(sqlPrice)} (o 3x ${fmtMoney(inst3)} s/i) · Los cambios se guardan al abrir el workspace.`
      : `SQL + Web: ${fmtMoney(sqlPrice)} (or 3x ${fmtMoney(inst3)} 0% APR) · Changes sync into the full workspace.`;
    document.getElementById('sb-feedback-text').textContent = state.sbNote || defaultNote;
    document.getElementById('sb-test-rule').textContent = state.lang === 'es' ? 'Probar Regla' : 'Test Guard';

    const demoUrl = `demo.html?p=${p.slug}&lang=${state.lang}&region=${state.region}&theme=${state.theme}`;
    document.getElementById('sb-launch-full').href = demoUrl;
    document.getElementById('hero-demo-cta').href = demoUrl;
  }

  function renderFlagships() {
    const mount = document.getElementById('flagship-grid');
    const flags = PRODUCTS.filter((p) => p.flagship);
    const catNames = t('cat_names');
    const barColors = ['#1D4ED8', '#0F766E', '#D97706', '#7C3AED'];
    mount.innerHTML = flags.map((p) => {
      const copy = p[state.lang];
      const [sh, sql] = pricesFor(p);
      const inst3 = Math.ceil(sql / 3);
      const rows = getLiveRows(p.slug);
      const stages = getStagesFor(p.slug);
      const totalVal = rows.reduce((s, r) => s + Number(r.amount || 0), 0);
      const done = rows.filter((r) => r.stage === 3).length;
      const pctDone = rows.length ? Math.round((done / rows.length) * 100) : 0;
      const cnts = [0, 0, 0, 0];
      rows.forEach((r) => { cnts[r.stage] = (cnts[r.stage] || 0) + 1; });
      let xOff = 0;
      const svgSegs = cnts.map((c, idx) => {
        const w = rows.length ? (c / rows.length) * 280 : 70;
        const rect = `<rect x="${xOff.toFixed(1)}" y="4" width="${Math.max(0, w - 2).toFixed(1)}" height="12" rx="4" fill="${barColors[idx]}" />`;
        xOff += w;
        return rect;
      }).join('');

      return `
        <article class="flag-card">
          <div class="live-dash-wrap" aria-label="${p.name} live mini dashboard">
            <div class="live-dash-chrome">
              <span class="live-dot-pill">${state.lang === 'es' ? 'Mini-CRM Vivo' : 'Live Mini-CRM'}</span>
              <span class="mono">${rows.length} ${state.lang === 'es' ? 'registros' : 'records'}</span>
            </div>
            <div class="live-dash-kpis">
              <div class="live-kpi"><div class="live-kpi-lbl">${state.lang === 'es' ? 'Volumen' : 'Volume'}</div><div class="live-kpi-val mono">$${totalVal.toLocaleString('en-US')}</div></div>
              <div class="live-kpi"><div class="live-kpi-lbl">${state.lang === 'es' ? 'Activos' : 'Active'}</div><div class="live-kpi-val mono">${rows.length - done}</div></div>
              <div class="live-kpi"><div class="live-kpi-lbl">${state.lang === 'es' ? 'Cierre' : 'Done'}</div><div class="live-kpi-val mono">${pctDone}%</div></div>
            </div>
            <svg class="live-dash-svg" viewBox="0 0 280 20" role="img" aria-label="Live stage mix">${svgSegs}</svg>
            <div class="live-dash-rows">
              ${rows.slice(0, 3).map((r) => `
                <div class="live-row">
                  <span class="live-row-name">${r.name}</span>
                  <span class="stage-pill stage-${r.stage}">${stages[r.stage]}</span>
                  <button type="button" class="live-row-btn" data-flag-slug="${p.slug}" data-flag-id="${r.id}" title="${state.lang === 'es' ? 'Avanzar etapa' : 'Advance stage'}">→</button>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="flag-body">
            <div class="flag-title-row">
              <h3>${p.name}</h3>
              <span class="flag-price mono">${fmtMoney(sh)} – ${fmtMoney(sql)}</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
              <span class="tbl-cat">${catNames[p.cat]}</span>
              <span class="mono" style="font-size:11.5px;color:var(--muted)">${state.lang === 'es' ? `o 3x ${fmtMoney(inst3)} s/i` : `or 3x ${fmtMoney(inst3)} 0% APR`}</span>
            </div>
            <p class="flag-desc">${copy.desc}</p>
            <div class="flag-rule">${copy.rule}</div>
            <div class="flag-actions">
              <button type="button" class="btn btn-primary btn-sm" data-modal="${p.slug}" data-mtab="live">${t('btn_try')} →</button>
              <button type="button" class="btn btn-secondary btn-sm" data-modal="${p.slug}" data-mtab="editions">${t('btn_editions')}</button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderCatalog() {
    if (typeof window !== 'undefined' && window.innerWidth <= 768 && state.view === 'table' && !state.userPickedView) {
      state.view = 'cards';
    }
    document.querySelectorAll('[data-view]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.view === state.view));
    });
    document.querySelectorAll('#screens-gallery img[data-screen]').forEach((img) => {
      const sc = img.dataset.screen;
      if (sc) img.src = `assets/screens/${state.lang}/${sc}.png`;
    });
    const mount = document.getElementById('catalog-mount');
    const q = state.search.trim().toLowerCase();
    const catNames = t('cat_names');
    const list = PRODUCTS.filter((p) => {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (!q) return true;
      const hay = `${p.name} ${p.slug} ${p.en.desc} ${p.es.desc} ${p.en.rule}`.toLowerCase();
      return hay.includes(q);
    });

    if (!list.length) {
      mount.innerHTML = `<div style="padding:28px;text-align:center;color:var(--muted);background:var(--surface);border:1px solid var(--border);border-radius:12px">${state.lang === 'es' ? 'No se encontraron sistemas para esa búsqueda.' : 'No systems match that search filter.'}</div>`;
      return;
    }

    if (state.view === 'table') {
      mount.innerHTML = `
        <div class="catalog-table-wrap">
          <table class="catalog-table">
            <thead>
              <tr>
                <th>${state.lang === 'es' ? 'Sistema y Flujo Operativo' : 'System & Operational Workflow'}</th>
                <th>${state.lang === 'es' ? 'Vertical' : 'Vertical'}</th>
                <th>${t('ed_sheets')}</th>
                <th>${t('ed_sql')}</th>
                <th>${t('ed_hyb')}</th>
                <th style="text-align:right">${state.lang === 'es' ? 'Acciones' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              ${list.map((p) => {
                const [sh, sql, hyb] = pricesFor(p);
                const demoUrl = `demo.html?p=${p.slug}&lang=${state.lang}&region=${state.region}`;
                return `
                  <tr>
                    <td>
                      <span class="tbl-name">${p.name}</span>
                      <span class="tbl-desc">${p[state.lang].desc}</span>
                    </td>
                    <td><span class="tbl-cat">${catNames[p.cat]}</span></td>
                    <td class="tbl-price mono">${fmtMoney(sh)}</td>
                    <td class="tbl-price mono" style="color:var(--accent)">${fmtMoney(sql)}</td>
                    <td class="tbl-price mono">${fmtMoney(hyb)}</td>
                    <td>
                      <div class="tbl-actions">
                        <button type="button" class="btn btn-primary btn-sm" data-modal="${p.slug}" data-mtab="live">${t('btn_try')}</button>
                        <button type="button" class="btn btn-secondary btn-sm" data-modal="${p.slug}" data-mtab="editions">${t('btn_editions')}</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      mount.innerHTML = `
        <div class="catalog-cards">
          ${list.map((p) => {
            const [sh, sql, hyb] = pricesFor(p);
            const demoUrl = `demo.html?p=${p.slug}&lang=${state.lang}&region=${state.region}`;
            return `
              <article class="mini-card">
                <div class="mini-card-head">
                  <h3>${p.name}</h3>
                  <span class="tbl-cat">${catNames[p.cat]}</span>
                </div>
                <p>${p[state.lang].desc}</p>
                <div class="mini-card-prices mono">
                  <span>Sheets: <strong>${fmtMoney(sh)}</strong></span>
                  <span>SQL: <strong style="color:var(--accent)">${fmtMoney(sql)}</strong></span>
                  <span>Hyb: <strong>${fmtMoney(hyb)}</strong></span>
                </div>
                <div class="mini-card-actions">
                  <button type="button" class="btn btn-primary btn-sm" data-modal="${p.slug}" data-mtab="live">${t('btn_try')}</button>
                  <button type="button" class="btn btn-secondary btn-sm" data-modal="${p.slug}" data-mtab="editions">${t('btn_editions')}</button>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `;
    }
  }

  function renderCodeInspector() {
    document.querySelectorAll('.code-tab').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.code === state.codeTab));
    });
    document.getElementById('code-body').textContent = CODE_SNIPPETS[state.codeTab] || CODE_SNIPPETS.docker;
  }

  function populateRoiSelect() {
    const sel = document.getElementById('roi-product');
    const prev = sel.value || 'medflow';
    sel.innerHTML = PRODUCTS.map((p) => `<option value="${p.slug}">${p.name}</option>`).join('');
    sel.value = prev;
  }

  function renderRoi() {
    const sel = document.getElementById('roi-product');
    const p = getProduct(sel.value || 'medflow');
    const seats = Number(document.getElementById('roi-seats').value) || 1;
    const perSeat = Number(document.getElementById('roi-per-seat').value) || 10;
    const [sheetsPrice, sqlPrice] = pricesFor(p);

    const saas36 = seats * perSeat * 36;
    const monthlySaas = seats * perSeat;

    document.getElementById('roi-seats-val').textContent = state.lang === 'es'
      ? `${seats} ${seats === 1 ? 'usuario' : 'usuarios'}`
      : `${seats} ${seats === 1 ? 'seat' : 'seats'}`;
    document.getElementById('roi-per-seat-val').textContent = `${fmtMoney(perSeat)} / ${state.lang === 'es' ? 'mes' : 'mo'}`;
    document.getElementById('roi-saas-total').textContent = `${fmtMoney(saas36)} ${currCode()}`;
    document.getElementById('roi-own-lbl').textContent = `${p.name} — ${t('ed_sql')} (${state.lang === 'es' ? 'Pago Único' : 'One-Time'})`;
    document.getElementById('roi-own-total').textContent = `${fmtMoney(sqlPrice)} ${currCode()}`;

    const maxBar = Math.max(saas36, sqlPrice, 1);
    document.getElementById('roi-bar-saas').style.width = Math.max(4, Math.round((saas36 / maxBar) * 100)) + '%';
    document.getElementById('roi-bar-own').style.width = Math.max(4, Math.round((sqlPrice / maxBar) * 100)) + '%';

    const verdictEl = document.getElementById('roi-verdict');
    const numEl = document.getElementById('roi-verdict-num');
    const subEl = document.getElementById('roi-verdict-sub');

    const diff = saas36 - sqlPrice;
    if (diff > 0) {
      const beMonths = Math.max(1, Math.ceil(sqlPrice / Math.max(1, monthlySaas)));
      const mWord = state.lang === 'es' ? (beMonths === 1 ? 'mes' : 'meses') : (beMonths === 1 ? 'month' : 'months');
      verdictEl.classList.remove('is-honest');
      numEl.textContent = state.lang === 'es'
        ? `${fmtMoney(diff)} ${currCode()} ahorrados en 36 meses`
        : `${fmtMoney(diff)} ${currCode()} saved over 36 months`;
      subEl.textContent = state.lang === 'es'
        ? `Recupera la inversión en ${beMonths} ${mWord}. Luego sumar nuevos usuarios cuesta $0/mes.`
        : `Break-even in ${beMonths} ${mWord}. After that, every additional user costs $0/month.`;
    } else if (saas36 > sheetsPrice) {
      const shDiff = saas36 - sheetsPrice;
      verdictEl.classList.add('is-honest');
      numEl.textContent = state.lang === 'es'
        ? `Recomendación honesta: Edición Google Sheets (${fmtMoney(sheetsPrice)})`
        : `Honest recommendation: Google Sheets Edition (${fmtMoney(sheetsPrice)})`;
      subEl.textContent = state.lang === 'es'
        ? `Para ${seats} ${seats === 1 ? 'usuario' : 'usuarios'}, SQL + Web cuesta más que 36 meses de SaaS. Con Google Sheets ahorra ${fmtMoney(shDiff)} y el 100% se bonifica si escala luego.`
        : `For ${seats} ${seats === 1 ? 'seat' : 'seats'}, SQL + Web costs more than 36 months of SaaS. Start with Google Sheets to save ${fmtMoney(shDiff)}—100% credited if you upgrade later.`;
    } else {
      verdictEl.classList.add('is-honest');
      numEl.textContent = state.lang === 'es'
        ? `Para este tamaño, su SaaS actual es más económico en efectivo`
        : `At this team size, your current SaaS costs less in cash`;
      subEl.textContent = state.lang === 'es'
        ? `Propiedad solo conviene aquí si prioriza privacidad offline/autoalojada, cero lock-in o planea crecer en usuarios.`
        : `Ownership makes sense at this size only if you prioritize private self-hosting, zero vendor lock-in, or upcoming headcount growth.`;
    }

    document.getElementById('roi-launch-demo').href = `demo.html?p=${p.slug}&lang=${state.lang}&region=${state.region}`;
    document.getElementById('roi-proposal-link').href = mailtoUrl('KRETA-PROPUESTA', p.name);
  }

  function setModalTab(tab) {
    state.modalTab = tab === 'editions' ? 'editions' : 'live';
    document.querySelectorAll('.modal-tab').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.mtab === state.modalTab));
    });
    document.getElementById('modal-tab-live').hidden = state.modalTab !== 'live';
    document.getElementById('modal-tab-editions').hidden = state.modalTab !== 'editions';
  }

  function openModal(slug, tab) {
    const p = getProduct(slug);
    state.modalSlug = p.slug;
    const [sh, sql, hyb] = pricesFor(p);
    document.getElementById('modal-cat').textContent = t('cat_names')[p.cat];
    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-desc').textContent = p[state.lang].desc;
    document.getElementById('modal-rule').textContent = p[state.lang].rule;

    const instNote = (v) => state.lang === 'es'
      ? `o 3 cuotas s/i de ${fmtMoney(Math.ceil(v / 3))}`
      : `or 3 × ${fmtMoney(Math.ceil(v / 3))} (0% APR)`;

    document.getElementById('modal-editions').innerHTML = `
      <div class="edition-box">
        <div class="edition-name">${t('ed_sheets')}</div>
        <div class="edition-price mono">${fmtMoney(sh)}</div>
        <div class="mono" style="font-size:11.5px;color:var(--teal);font-weight:600">${instNote(sh)}</div>
        <div class="edition-desc">${t('ed_sheets_d')}</div>
      </div>
      <div class="edition-box is-recommended">
        <div class="edition-name">${t('ed_sql')}</div>
        <div class="edition-price mono">${fmtMoney(sql)}</div>
        <div class="mono" style="font-size:11.5px;color:var(--accent);font-weight:600">${instNote(sql)}</div>
        <div class="edition-desc">${t('ed_sql_d')}</div>
      </div>
      <div class="edition-box">
        <div class="edition-name">${t('ed_hyb')}</div>
        <div class="edition-price mono">${fmtMoney(hyb)}</div>
        <div class="mono" style="font-size:11.5px;color:var(--teal);font-weight:600">${instNote(hyb)}</div>
        <div class="edition-desc">${t('ed_hyb_d')}</div>
      </div>
    `;

    const embedUrl = `demo.html?p=${p.slug}&embed=1&lang=${state.lang}&region=${state.region}&theme=${state.theme}`;
    const fullUrl = `demo.html?p=${p.slug}&lang=${state.lang}&region=${state.region}&theme=${state.theme}`;
    const frame = document.getElementById('modal-demo-frame');
    if (frame) frame.src = embedUrl;
    document.getElementById('modal-demo-link').href = fullUrl;
    document.getElementById('modal-proposal-link').href = mailtoUrl('KRETA-PROPUESTA', p.name);
    setModalTab(tab || 'live');
    document.getElementById('product-modal').hidden = false;
  }

  function closeModal() {
    document.getElementById('product-modal').hidden = true;
    const frame = document.getElementById('modal-demo-frame');
    if (frame) frame.src = 'about:blank';
    state.modalSlug = null;
    renderSandbox();
    renderFlagships();
  }

  function setDrawer(open) {
    const d = document.getElementById('mobile-drawer');
    const b = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobile-menu-btn');
    d.hidden = !open;
    b.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  }

  function renderAll() {
    applyTheme();
    applyI18n();
    document.getElementById('region-select').value = state.region;
    document.getElementById('region-select-mobile').value = state.region;
    renderSandbox();
    renderFlagships();
    renderCatalog();
    renderCodeInspector();
    renderRoi();
  }

  function bindEvents() {
    // Region selects
    ['region-select', 'region-select-mobile'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', (e) => {
        state.region = e.target.value;
        localStorage.setItem('kreta_region', state.region);
        renderAll();
      });
    });

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.lang = btn.dataset.lang === 'es' ? 'es' : 'en';
        state.sbNote = '';
        state.sbAlert = false;
        renderAll();
      });
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
    });

    // Mobile drawer
    document.getElementById('mobile-menu-btn').addEventListener('click', () => setDrawer(true));
    document.getElementById('mobile-close-btn').addEventListener('click', () => setDrawer(false));
    document.getElementById('mobile-backdrop').addEventListener('click', () => setDrawer(false));
    document.querySelectorAll('.mobile-drawer-links a').forEach((a) => a.addEventListener('click', () => setDrawer(false)));

    // Hero Sandbox tabs, 20-system selector, search, quick-add & stage advance
    document.querySelectorAll('.sandbox-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.sbSlug = tab.dataset.sb;
        state.sbStageFilter = null;
        state.sbAlert = false;
        state.sbNote = '';
        renderSandbox();
      });
    });

    const sbProdSel = document.getElementById('sb-product-select');
    if (sbProdSel) {
      sbProdSel.addEventListener('change', (e) => {
        state.sbSlug = e.target.value;
        state.sbStageFilter = null;
        state.sbAlert = false;
        state.sbNote = '';
        renderSandbox();
      });
    }

    const sbSearchEl = document.getElementById('sb-search');
    if (sbSearchEl) {
      sbSearchEl.addEventListener('input', (e) => {
        state.sbSearch = e.target.value;
        renderSandbox();
      });
    }

    const sbToggleAdd = document.getElementById('sb-toggle-add');
    const sbAddForm = document.getElementById('sb-add-form');
    if (sbToggleAdd && sbAddForm) {
      sbToggleAdd.addEventListener('click', () => {
        sbAddForm.hidden = !sbAddForm.hidden;
        if (!sbAddForm.hidden) document.getElementById('sb-add-name').focus();
      });
      sbAddForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sb-add-name').value.trim();
        const amt = Number(document.getElementById('sb-add-amount').value);
        if (name.length < 2 || !Number.isFinite(amt) || amt <= 0) {
          state.sbAlert = true;
          state.sbNote = state.lang === 'es'
            ? 'Ingrese un nombre válido y un monto mayor a 0.'
            : 'Please enter a valid name and an amount greater than 0.';
          renderSandbox();
          return;
        }
        const rows = getLiveRows(state.sbSlug);
        const pfx = state.sbSlug.slice(0, 3).toUpperCase();
        const newId = `${pfx}-${300 + rows.length}`;
        rows.unshift({ id: newId, name, owner: 'Live Evaluator', slot: 'Today', amount: amt, stage: 0, notes: 'Created in Hero Mini-CRM' });
        saveSharedRows(state.sbSlug, rows);
        sbAddForm.reset();
        sbAddForm.hidden = true;
        state.sbAlert = false;
        state.sbNote = state.lang === 'es'
          ? `${newId} agregado y sincronizado con el workspace completo.`
          : `${newId} added & synced to the full 4-view workspace.`;
        renderSandbox();
        renderFlagships();
      });
    }

    const sbChartEl = document.getElementById('sb-chart');
    if (sbChartEl) {
      sbChartEl.addEventListener('click', (e) => {
        const b = e.target.closest('[data-sb-stage]');
        if (!b) return;
        const idx = Number(b.dataset.sbStage);
        state.sbStageFilter = state.sbStageFilter === idx ? null : idx;
        renderSandbox();
      });
    }

    document.getElementById('sb-list').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-sb-id]');
      if (!btn) return;
      const rows = getLiveRows(state.sbSlug);
      const row = rows.find((r) => r.id === btn.dataset.sbId);
      if (!row) return;
      row.stage = (row.stage + 1) % 4;
      saveSharedRows(state.sbSlug, rows);
      const stageName = getStagesFor(state.sbSlug)[row.stage];
      state.sbAlert = false;
      state.sbNote = state.lang === 'es'
        ? `${row.id} movido a "${stageName}" — KPIs y workspace sincronizados.`
        : `${row.id} moved to "${stageName}" — KPIs & full workspace synced.`;
      renderSandbox();
      renderFlagships();
    });

    document.getElementById('sb-test-rule').addEventListener('click', () => {
      state.sbAlert = true;
      const rows = getLiveRows(state.sbSlug);
      const ref = rows[0];
      const dynamicMsg = ref
        ? (state.lang === 'es'
          ? `Guardia activa: se bloqueó duplicado sobre ${ref.id} (${ref.owner} · ${ref.slot} ya asignado a ${ref.name}).`
          : `Conflict Guard active: blocked duplicate overlap on ${ref.id} (${ref.owner} · ${ref.slot} already assigned to ${ref.name}).`)
        : (state.lang === 'es'
          ? 'Guardia activa: bloqueo automático de duplicados y límites de negocio verificado.'
          : 'Rule Guard active: duplicate overlap and business limit protection verified.');
      state.sbNote = dynamicMsg;
      renderSandbox();
    });

    // Live Flagship Mini-Dashboard stage advances (zero static PNGs!)
    document.getElementById('flagship-grid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-flag-slug]');
      if (!btn) return;
      const fSlug = btn.dataset.flagSlug;
      const fId = btn.dataset.flagId;
      const rows = getLiveRows(fSlug);
      const row = rows.find((r) => r.id === fId);
      if (!row) return;
      row.stage = (row.stage + 1) % 4;
      saveSharedRows(fSlug, rows);
      renderFlagships();
      if (state.sbSlug === fSlug) renderSandbox();
    });

    // Modal tabs + postMessage sync from embedded demo.html
    document.querySelectorAll('.modal-tab').forEach((b) => {
      b.addEventListener('click', () => setModalTab(b.dataset.mtab));
    });
    window.addEventListener('message', (ev) => {
      if (ev.data && ev.data.type === 'kreta-store-updated') {
        renderSandbox();
        renderFlagships();
      }
    });

    // Catalog filters, search & view toggle
    document.querySelectorAll('.filter-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.cat = btn.dataset.cat;
        document.querySelectorAll('.filter-pill').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        renderCatalog();
      });
    });

    document.getElementById('catalog-search').addEventListener('input', (e) => {
      state.search = e.target.value;
      renderCatalog();
    });

    document.querySelectorAll('.view-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.view = btn.dataset.view;
        document.querySelectorAll('.view-btn').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        renderCatalog();
      });
    });

    // Delegate modal opens
    document.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-modal]');
      if (mBtn) openModal(mBtn.dataset.modal, mBtn.dataset.mtab || 'live');
    });
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('product-modal').addEventListener('click', (e) => {
      if (e.target.id === 'product-modal') closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        setDrawer(false);
      }
    });

    // Code inspector tabs
    document.querySelectorAll('.code-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.codeTab = tab.dataset.code;
        renderCodeInspector();
      });
    });

    // ROI inputs
    ['roi-product', 'roi-seats', 'roi-per-seat'].forEach((id) => {
      document.getElementById(id).addEventListener('input', renderRoi);
    });

    // Copy email buttons
    document.getElementById('contact-copy-btn').addEventListener('click', () => {
      navigator.clipboard?.writeText(EMAIL).catch(() => {});
      showToast(state.lang === 'es' ? `Copiado: ${EMAIL}` : `Copied: ${EMAIL}`);
    });
    document.getElementById('modal-copy-email').addEventListener('click', () => {
      const p = getProduct(state.modalSlug || 'medflow');
      const txt = `To: ${EMAIL}\nSubject: [KRETA-PROPUESTA] ${p.name} (${state.region})`;
      navigator.clipboard?.writeText(txt).catch(() => {});
      showToast(state.lang === 'es' ? 'Texto de solicitud copiado' : 'Proposal email template copied');
    });
  }

  populateSandboxSelect();
  populateRoiSelect();
  bindEvents();
  renderAll();
})();
