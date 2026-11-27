(function () {
  'use strict';

  const PRODUCTS = {
    voluntarios_db: {
      name: 'VoluntariosDB', img: 'voluntariosdb', prices: { USA: 2370, EUR: 2190, LATAM: 1660, AR: 1220 }, rule: 'unique_ref',
      es: { tag: 'Turnos, horas verificadas y constancias oficiales para organizaciones sin planillas dispersas.', cols: ['Voluntario', 'Turno / Fecha', 'Horas', 'Estado'], p1: 'Nombre del voluntario', p2: '2026-12-04 09:00', p3: 'Horas (ej. 4)', err: 'Operación bloqueada: ese turno o código ya se encuentra registrado.' },
      en: { tag: 'Volunteer shifts, verified hours, and donor-ready certificates without scattered spreadsheets.', cols: ['Volunteer', 'Shift / Date', 'Hours', 'Status'], p1: 'Volunteer name', p2: '2026-12-04 09:00', p3: 'Hours (e.g. 4)', err: 'Blocked: duplicate shift reference detected.' },
      rows: [['Sofía Méndez', '2026-12-01 09:00', 4, 'Verified'], ['Lucas Peralta', '2026-12-02 14:00', 6, 'Verified'], ['Ana Gómez', '2026-12-03 10:00', 3, 'Pending']],
    },
    ecometrics_suite: {
      name: 'EcoMetrics Suite', img: 'ecometrics', prices: { USA: 2895, EUR: 2630, LATAM: 2015, AR: 1485 }, rule: 'positive',
      es: { tag: 'Cálculo auditable de huella de carbono y reportes ESG listos para auditoría.', cols: ['Planta / Fuente', 'Período', 'tCO2e', 'Estado'], p1: 'Planta o fuente', p2: '2026-Q4', p3: 'tCO2e (ej. 14.5)', err: 'Operación bloqueada: el valor de emisiones debe ser mayor a 0.' },
      en: { tag: 'Auditable carbon footprint calculations and ESG reports exported in seconds.', cols: ['Site / Source', 'Period', 'tCO2e', 'Status'], p1: 'Facility or source', p2: '2026-Q4', p3: 'tCO2e (e.g. 14.5)', err: 'Blocked: emissions reading must exceed 0.' },
      rows: [['North Plant · Electricity', '2026-Q3', 18.4, 'Audited'], ['Fleet · Diesel', '2026-Q3', 11.2, 'Audited'], ['Central Depot · Gas', '2026-Q4', 6.8, 'Under Review']],
    },
    medflow: {
      name: 'MedFlow / ClinicOps', img: 'medflow', prices: { USA: 2490, EUR: 2290, LATAM: 1740, AR: 1370 }, rule: 'unique_ref',
      es: { tag: 'Agenda multi-profesional sin superposiciones, historia clínica por rol y facturación.', cols: ['Paciente', 'Profesional · Horario', 'Importe ($)', 'Estado'], p1: 'Nombre del paciente', p2: 'Dra. Ruiz · 10:30', p3: 'Importe (ej. 55)', err: 'Bloqueado (HTTP 409): ese horario ya está asignado a ese profesional.' },
      en: { tag: 'Overlap-free multi-provider scheduling, clinical notes, and visit billing.', cols: ['Patient', 'Provider · Slot', 'Fee ($)', 'Status'], p1: 'Patient name', p2: 'Dr. Reed · 10:30', p3: 'Fee (e.g. 120)', err: 'Blocked (HTTP 409): overlapping appointment slot detected.' },
      rows: [['Martin Lopez', 'Dr. Reed · 09:00', 120, 'Confirmed'], ['Carla Diaz', 'Dr. Reed · 10:30', 120, 'Confirmed'], ['Diego Silva', 'Dr. Vega · 11:00', 95, 'Pending']],
    },
    fleetguard: {
      name: 'FleetGuard & LogiTrack', img: 'fleetguard', prices: { USA: 2990, EUR: 2750, LATAM: 2090, AR: 1640 }, rule: 'min_val', min: 1,
      es: { tag: 'Mantenimiento preventivo, vencimientos documentales y control de combustible por unidad.', cols: ['Unidad / Patente', 'Tipo de registro', 'Importe ($)', 'Estado'], p1: 'Unidad (ej. TRK-112)', p2: 'Service 60k / Carga', p3: 'Importe $ (ej. 320)', err: 'Bloqueado: el valor debe ser positivo y consistente con el odómetro.' },
      en: { tag: 'Preventive maintenance schedules, expiring DOT documents, and fuel cost tracking.', cols: ['Unit / Plate', 'Log Type', 'Amount ($)', 'Status'], p1: 'Unit (e.g. TRK-14)', p2: '60k PM / Fuel', p3: 'Amount (e.g. 410)', err: 'Blocked: amount must be positive and valid.' },
      rows: [['TRK-104 · Freightliner', '90-Day PM', 480, 'Compliant'], ['TRK-108 · Kenworth', 'Fuel Fill', 310, 'Alert: High Burn'], ['VAN-202 · Sprinter', 'DOT Inspection', 140, 'Expiring 12d']],
    },
    buildcost: {
      name: 'BuildCost Pro', img: 'buildcost', prices: { USA: 3490, EUR: 3210, LATAM: 2440, AR: 1920 }, rule: 'max_cap', max: 100000,
      es: { tag: 'Control presupuestario por rubro de obra, gastos de subcontratistas y certificaciones con tope.', cols: ['Rubro / Subcontratista', 'Obra / Período', 'Certificado ($)', 'Estado'], p1: 'Rubro (ej. Hormigón)', p2: 'Torre Sur · Nov', p3: 'Monto $ (tope 100k)', err: 'Bloqueado (HTTP 409): la certificación supera el saldo presupuestado.' },
      en: { tag: 'Line-item job costing, real-vs-budget variance, and capped progress draws.', cols: ['Line Item / Sub', 'Project / Period', 'Draw ($)', 'Status'], p1: 'Line item (e.g. Framing)', p2: 'Oak St · Nov', p3: 'Amount $ (cap 100k)', err: 'Blocked (HTTP 409): draw exceeds remaining budgeted balance.' },
      rows: [['Structural Concrete', 'Oak St · Oct', 24500, 'On Budget'], ['Electrical Sub', 'Oak St · Nov', 12800, 'Alert +6%'], ['Millwork & Doors', 'Lake House · Nov', 9400, 'Approved']],
    },
    compliancevault: {
      name: 'ComplianceVault ISO/SOC2', img: 'compliancevault', prices: { USA: 2490, EUR: 2290, LATAM: 1740, AR: 1370 }, rule: 'unique_ref',
      es: { tag: 'Controles ISO/SOC2, matriz de riesgos y evidencias verificables para auditoría.', cols: ['Control / Evidencia', 'Código', 'Riesgo (1-25)', 'Estado'], p1: 'Evidencia o control', p2: 'ISO-A.8.12', p3: 'Nivel riesgo (1-25)', err: 'Bloqueado: ese código de control ya existe en el registro.' },
      en: { tag: 'ISO/SOC2 controls, risk matrix, and timestamped audit evidence in one place.', cols: ['Control / Evidence', 'Code', 'Risk (1-25)', 'Status'], p1: 'Control or evidence', p2: 'SOC2-CC6.1', p3: 'Risk score (1-25)', err: 'Blocked: duplicate control code in register.' },
      rows: [['Encrypted Backup Check', 'ISO-A.8.13', 4, 'Compliant'], ['Quarterly Access Review', 'ISO-A.5.18', 9, 'In Progress'], ['Facility Permit', 'REG-2026', 16, 'Expiring 15d']],
    },
    agrofield: {
      name: 'AgroField & Stock', img: 'agrofield', prices: { USA: 2640, EUR: 2510, LATAM: 1850, AR: 1450 }, rule: 'positive',
      es: { tag: 'Stock de insumos, labores de campo y margen real por lote y campaña.', cols: ['Lote / Labor', 'Campaña', 'Importe ($)', 'Estado'], p1: 'Lote (ej. Lote 4 Soja)', p2: 'Campaña 26/27', p3: 'Importe USD (ej. 1850)', err: 'Bloqueado: el monto debe ser mayor a 0.' },
      en: { tag: 'Input inventory, field applications, and real per-field margin by season.', cols: ['Field / Activity', 'Season', 'Amount ($)', 'Status'], p1: 'Field (e.g. North 80)', p2: '2026 Season', p3: 'USD Amount (e.g. 2100)', err: 'Blocked: amount must exceed 0.' },
      rows: [['Lot 1 · Corn Seeding', '26/27', 4200, 'Closed'], ['Lot 2 · Fertilizer Run', '26/27', 2950, 'Applied'], ['Lot 3 · Harvest Receipt', '26/27', 11800, 'Settled']],
    },
    educampus: {
      name: 'EduCampus & Certify', img: 'educampus', prices: { USA: 1240, EUR: 1180, LATAM: 870, AR: 680 }, rule: 'min_val', min: 75,
      es: { tag: 'Asistencia por cohorte, becas/pagos y certificados PDF con validación QR.', cols: ['Alumno', 'Cohorte', 'Asistencia %', 'Estado'], p1: 'Nombre del alumno', p2: 'Cohorte 2026-B', p3: 'Asistencia % (mín 75)', err: 'Bloqueado: asistencia inferior al 75% requerido para emitir certificado.' },
      en: { tag: 'Cohort attendance tracking, tuition balances, and QR-verified certificates.', cols: ['Student', 'Cohort', 'Attendance %', 'Status'], p1: 'Student name', p2: '2026-B Cohort', p3: 'Attendance % (min 75)', err: 'Blocked: attendance below 75% certificate threshold.' },
      rows: [['Valentina Cruz', 'Full-Stack 26A', 94, 'QR Issued'], ['Tomas Herrera', 'Data 26B', 88, 'Eligible'], ['Lucia Paredes', 'UX 26B', 78, 'Paid']],
    },
    quoteflow: {
      name: 'QuoteFlow', img: 'quoteflow', prices: { USA: 1290, EUR: 1185, LATAM: 905, AR: 710 }, rule: 'min_val', min: 20,
      es: { tag: 'Cotizaciones B2B con piso obligatorio de margen bruto y pipeline ponderado.', cols: ['Cliente / Oferta', 'Ref. Presupuesto', 'Margen %', 'Estado'], p1: 'Cliente B2B', p2: 'COT-2026-044', p3: 'Margen % (piso 20%)', err: 'Bloqueado (HTTP 409): margen inferior al piso del 20% configurado.' },
      en: { tag: 'B2B quoting with enforced gross-margin floors and weighted pipeline tracking.', cols: ['Account / Deal', 'Quote Ref', 'Margin %', 'Status'], p1: 'Customer name', p2: 'QT-2026-044', p3: 'Margin % (floor 20%)', err: 'Blocked (HTTP 409): quote violates the 20% gross margin floor.' },
      rows: [['South Supply Co.', 'QT-041', 31, 'Approved'], ['Delta Industrial', 'QT-042', 24, 'Sent'], ['Central Hardware', 'QT-043', 28, 'Closed Won']],
    },
    fixflow: {
      name: 'FixFlow', img: 'fixflow', prices: { USA: 1090, EUR: 1005, LATAM: 765, AR: 600 }, rule: 'positive',
      es: { tag: 'Órdenes de taller, control de repuestos, tiempos SLA y comprobante QR.', cols: ['Equipo / Vehículo', 'Orden #', 'Total ($)', 'Estado'], p1: 'Equipo o patente', p2: 'OT-1045', p3: 'Importe $ (ej. 180)', err: 'Bloqueado: el presupuesto de orden debe ser mayor a 0.' },
      en: { tag: 'Repair shop work orders, parts markup tracking, SLA turnaround, and pickup receipts.', cols: ['Asset / Vehicle', 'Ticket #', 'Total ($)', 'Status'], p1: 'Device or vehicle', p2: 'WO-1045', p3: 'Amount $ (e.g. 240)', err: 'Blocked: work order amount must exceed 0.' },
      rows: [['Ford F-150 · Brakes', 'WO-1041', 340, 'Ready'], ['MacBook Pro · Board', 'WO-1042', 210, 'In Bench'], ['5HP Compressor', 'WO-1043', 490, 'Alert: SLA Risk']],
    },
    rentvault: {
      name: 'RentVault', img: 'rentvault', prices: { USA: 1290, EUR: 1185, LATAM: 905, AR: 710 }, rule: 'unique_ref',
      es: { tag: 'Alquiler de equipos y eventos con bloqueo automático de doble reserva.', cols: ['Cliente / Evento', 'Equipo · Fecha', 'Tarifa ($)', 'Estado'], p1: 'Cliente o evento', p2: 'Consola X32 · 12-Dic', p3: 'Tarifa $ (ej. 450)', err: 'Bloqueado (HTTP 409): ese equipo ya se encuentra reservado en esa fecha.' },
      en: { tag: 'Equipment and event rentals with automatic double-booking prevention and ROI.', cols: ['Client / Event', 'Item · Date', 'Rate ($)', 'Status'], p1: 'Client or event', p2: 'PA Rig · Dec-12', p3: 'Rate $ (e.g. 550)', err: 'Blocked (HTTP 409): equipment already booked for that date.' },
      rows: [['Design Expo', 'LED Wall 4x3 · Dec-05', 950, 'Confirmed'], ['North Prod', 'X32 Mixer · Dec-12', 420, 'Reserved'], ['Route 9 Site', '50kVA Gen · Dec-14', 780, 'Dispatched']],
    },
    shiftroster: {
      name: 'ShiftRoster', img: 'shiftroster', prices: { USA: 990, EUR: 910, LATAM: 695, AR: 545 }, rule: 'unique_ref',
      es: { tag: 'Grillas de turnos sin superposiciones con cálculo de recargos y horas extras.', cols: ['Empleado', 'Turno · Fecha', 'Horas', 'Estado'], p1: 'Nombre del empleado', p2: 'Noche · 05-Dic', p3: 'Horas (ej. 8)', err: 'Bloqueado (HTTP 409): conflicto de doble turno detectado.' },
      en: { tag: 'Conflict-free staff shift schedules with automatic overtime and night differentials.', cols: ['Staff Member', 'Shift · Date', 'Hours', 'Status'], p1: 'Staff name', p2: 'Night · Dec-05', p3: 'Hours (e.g. 8)', err: 'Blocked (HTTP 409): overlapping staff shift detected.' },
      rows: [['John Morales', 'Morning · Dec-04', 8, 'Covered'], ['Elena Rios', 'Night · Dec-05', 10, 'Alert: +2h OT'], ['Marco Paz', 'Evening · Dec-05', 8, 'Covered']],
    },
    clientpulse: {
      name: 'ClientPulse', img: 'clientpulse', prices: { USA: 1390, EUR: 1280, LATAM: 975, AR: 765 }, rule: 'positive',
      es: { tag: 'Aprobaciones formales de entregables antes de facturar y control de alcance.', cols: ['Cliente / Entregable', 'Hito', 'Monto ($)', 'Estado'], p1: 'Cliente y entregable', p2: 'Hito 2 · Diseño', p3: 'Importe $ (ej. 1200)', err: 'Bloqueado: el importe del entregable debe ser mayor a 0.' },
      en: { tag: 'Client deliverable sign-off gates before billing and early scope-creep detection.', cols: ['Client / Deliverable', 'Milestone', 'Value ($)', 'Status'], p1: 'Client & deliverable', p2: 'M2 · Launch', p3: 'Value $ (e.g. 1500)', err: 'Blocked: deliverable value must exceed 0.' },
      rows: [['Aura Brand · Web', 'Milestone 1', 1400, 'Approved'], ['Studio K · Identity', 'Milestone 2', 1900, 'Awaiting Sign-off'], ['Retail X · Add-on', 'Extra #1', 650, 'Alert: Scope Creep']],
    },
    subguard: {
      name: 'SubGuard', img: 'subguard', prices: { USA: 1490, EUR: 1370, LATAM: 1045, AR: 820 }, rule: 'positive',
      es: { tag: 'Control de renovaciones SaaS, licencias ociosas y visibilidad de gasto anual.', cols: ['Herramienta SaaS', 'Renovación', 'Costo/mes ($)', 'Estado'], p1: 'Aplicación (ej. CRM)', p2: 'Renueva 15-Dic', p3: 'USD/mes (ej. 420)', err: 'Bloqueado: el costo mensual debe ser mayor a 0.' },
      en: { tag: 'SaaS renewal alerts, unused seat detection, and 12-month spend visibility.', cols: ['SaaS Vendor', 'Renewal', 'Monthly ($)', 'Status'], p1: 'App (e.g. Legacy CRM)', p2: 'Renews Dec-15', p3: 'USD/mo (e.g. 420)', err: 'Blocked: monthly cost must exceed 0.' },
      rows: [['Legacy CRM (14 seats)', 'Dec-10', 680, 'Alert: 4 Idle Seats'], ['Support Desk', 'Dec-22', 390, 'Review'], ['Cloud Storage Pro', 'Jan-02', 240, 'Optimal']],
    },
    propledger: {
      name: 'PropLedger', img: 'propledger', prices: { USA: 2690, EUR: 2475, LATAM: 1885, AR: 1480 }, rule: 'unique_ref',
      es: { tag: 'Contratos de alquiler, ajuste compuesto por índice, NOI y Cap Rate auditables.', cols: ['Unidad / Inquilino', 'Contrato Activo', 'Alquiler/mes ($)', 'Estado'], p1: 'Unidad e inquilino', p2: 'UNI-3B', p3: 'Alquiler $ (ej. 950)', err: 'Bloqueado (HTTP 409): ya existe un contrato activo para esa unidad.' },
      en: { tag: 'Active lease guard, compound rent escalations, live NOI, and Cap Rate modeling.', cols: ['Unit / Tenant', 'Active Lease', 'Monthly ($)', 'Status'], p1: 'Unit & tenant', p2: 'UNIT-3B', p3: 'Rent $ (e.g. 1850)', err: 'Blocked (HTTP 409): unit already holds an active lease.' },
      rows: [['Unit 2A · M. Costa', 'UNI-2A', 1450, 'Current'], ['Retail PB · Sol Cafe', 'UNI-PB', 3200, 'Alert: CPI Escalation'], ['Suite 4C · Studio V', 'UNI-4C', 2150, 'Current']],
    },
    lablims: {
      name: 'LabLIMS', img: 'lablims', prices: { USA: 3490, EUR: 3210, LATAM: 2445, AR: 1920 }, rule: 'unique_ref',
      es: { tag: 'Cadena de custodia de muestras, alertas estadísticas Z-score y COA PDF con QR.', cols: ['Muestra / Cliente', 'Código LIMS', 'Resultado', 'Estado'], p1: 'Descripción muestra', p2: 'LAB-26-091', p3: 'Medición (ej. 7.12)', err: 'Bloqueado: código de muestra duplicado en cadena de custodia.' },
      en: { tag: 'Sample chain of custody, statistical outlier flags, and instant QR-verified COAs.', cols: ['Sample / Client', 'LIMS Code', 'Result', 'Status'], p1: 'Sample description', p2: 'LAB-26-091', p3: 'Reading (e.g. 7.12)', err: 'Blocked: duplicate sample code in custody log.' },
      rows: [['Water · Plant 2', 'LAB-26-088', 7.1, 'COA Issued'], ['Soil South · pH', 'LAB-26-089', 6.4, 'Testing'], ['Industrial Oil · Visc.', 'LAB-26-090', 98.2, 'Alert: Outlier Z>2']],
    },
    lottrace: {
      name: 'LotTrace', img: 'lottrace', prices: { USA: 3490, EUR: 3210, LATAM: 2445, AR: 1920 }, rule: 'unique_ref',
      es: { tag: 'Trazabilidad FEFO por vencimiento, balance de masa y recall en segundos.', cols: ['Producto / Lote', 'Lote # · Vence', 'Unidades / Kg', 'Estado'], p1: 'Producto', p2: 'LOT-405 · 2027-03', p3: 'Cantidad (ej. 500)', err: 'Bloqueado: código de lote duplicado.' },
      en: { tag: 'FEFO expiry ordering, mass-balance validation, and instant batch recall tracing.', cols: ['Product / Batch', 'Lot # · Expiry', 'Units / Kg', 'Status'], p1: 'Product name', p2: 'LOT-405 · 2027-03', p3: 'Quantity (e.g. 500)', err: 'Blocked: duplicate lot code detected.' },
      rows: [['Organic Mix 500g', 'LOT-401 · 2027-01', 1200, 'FEFO #1'], ['Olive Oil 1L', 'LOT-402 · 2027-06', 850, 'Traced'], ['Whole Flour 25kg', 'LOT-403 · 2027-02', 400, 'Released']],
    },
    caseledger: {
      name: 'CaseLedger', img: 'caseledger', prices: { USA: 2990, EUR: 2750, LATAM: 2095, AR: 1645 }, rule: 'unique_ref',
      es: { tag: 'Vencimientos fatales de expedientes, horas WIP facturables y riesgo por causa.', cols: ['Carátula / Cliente', 'Expediente #', 'Horas WIP', 'Estado'], p1: 'Carátula o cliente', p2: 'EXP-2026-119', p3: 'Horas (ej. 6.5)', err: 'Bloqueado: número de expediente duplicado.' },
      en: { tag: 'Fatal court deadlines, billable WIP hours, and case risk tracking for law firms.', cols: ['Matter / Client', 'Docket #', 'WIP Hours', 'Status'], p1: 'Matter or client', p2: 'MAT-2026-119', p3: 'Hours (e.g. 6.5)', err: 'Blocked: duplicate docket number.' },
      rows: [['Navarro Estate', 'MAT-114', 12.5, 'Alert: Due 4d'], ['Commercial Contract', 'MAT-115', 8.0, 'Billable'], ['Employment Claim #8', 'MAT-116', 19.0, 'Hearing Set']],
    },
    tradeflow: {
      name: 'TradeFlow', img: 'tradeflow', prices: { USA: 3690, EUR: 3395, LATAM: 2585, AR: 2030 }, rule: 'positive',
      es: { tag: 'Prorrateo automático de costo nacionalizado (CIF, flete, arancel) por SKU.', cols: ['Embarque / Proveedor', 'BL / Ref', 'Valor CIF ($)', 'Estado'], p1: 'Proveedor o SKU', p2: 'IMP-2026-33', p3: 'Valor CIF USD (ej. 18500)', err: 'Bloqueado: el valor CIF debe ser mayor a 0.' },
      en: { tag: 'Automated landed-cost allocation (CIF, duties, freight) per SKU before pricing.', cols: ['Shipment / Vendor', 'BL / Ref', 'CIF Value ($)', 'Status'], p1: 'Vendor or SKU', p2: 'IMP-2026-33', p3: 'CIF USD (e.g. 18500)', err: 'Blocked: CIF value must exceed 0.' },
      rows: [['Shenzhen Parts', 'IMP-26-30', 22400, 'Cleared'], ['EU Medical Supply', 'IMP-26-31', 15900, 'At Customs'], ['Light Machinery', 'IMP-26-32', 31200, 'In Transit']],
    },
    fieldops: {
      name: 'FieldOps', img: 'fieldops', prices: { USA: 2890, EUR: 2660, LATAM: 2025, AR: 1590 }, rule: 'unique_ref',
      es: { tag: 'Órdenes técnicas en campo, control SLA P1/P2/P3 y bloqueo de factura sin cierre.', cols: ['Cliente / Sitio', 'Orden #', 'SLA (hs)', 'Estado'], p1: 'Cliente o sucursal', p2: 'FS-884', p3: 'Horas SLA (ej. 4)', err: 'Bloqueado: número de orden de servicio duplicado.' },
      en: { tag: 'Field tech dispatch, P1/P2/P3 SLA tracking, and closeout-verified invoicing.', cols: ['Account / Site', 'Ticket #', 'SLA (hrs)', 'Status'], p1: 'Customer or site', p2: 'FS-884', p3: 'SLA hrs (e.g. 4)', err: 'Blocked: duplicate field ticket number.' },
      rows: [['Central Clinic · Chiller', 'FS-881', 2, 'Closeout Verified'], ['South Plant · Panel', 'FS-882', 4, 'Tech En Route'], ['Plaza Hotel · HVAC', 'FS-883', 6, 'Scheduled']],
    },
  };

  const $ = function (id) { return document.getElementById(id); };
  const params = new URLSearchParams(window.location.search);
  let lang = (params.get('lang') || 'en').toLowerCase() === 'es' ? 'es' : 'en';
  let region = ['USA', 'EUR', 'LATAM', 'AR'].indexOf((params.get('region') || 'USA').toUpperCase()) !== -1 ? (params.get('region') || 'USA').toUpperCase() : 'USA';
  const rawSlug = params.get('producto') || params.get('p');
  let slug = PRODUCTS[rawSlug] ? rawSlug : 'medflow';
  const stateRows = {};

  function getRows() {
    if (!stateRows[slug]) {
      stateRows[slug] = PRODUCTS[slug].rows.map(function (r) { return r.slice(); });
    }
    return stateRows[slug];
  }

  function populateSelect() {
    const sel = $('prod-select');
    sel.replaceChildren();
    Object.keys(PRODUCTS).forEach(function (k) {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = PRODUCTS[k].name;
      if (k === slug) opt.selected = true;
      sel.appendChild(opt);
    });
    $('region-select').value = region;
  }

  function showAlert(msg, ok) {
    const el = $('demo-alert');
    el.textContent = msg;
    el.className = 's-alert show ' + (ok ? 'ok' : 'err');
  }

  function clearAlert() {
    const el = $('demo-alert');
    el.textContent = '';
    el.className = 's-alert';
  }

  function renderSimulator() {
    const users = Number($('sl-users').value);
    const saasMo = Number($('sl-saas').value);
    $('val-users').textContent = String(users);
    $('val-saas').textContent = '$' + saasMo;
    const saas36 = users * saasMo * 36;
    const ownCost = PRODUCTS[slug].prices[region];
    const savings = Math.max(0, saas36 - ownCost);
    const paybackMo = Math.max(1, Math.ceil(ownCost / Math.max(1, users * saasMo)));
    $('sim-savings').textContent = '$' + savings.toLocaleString('en-US') + ' USD';
    $('sim-payback').textContent = lang === 'es'
      ? 'Recuperación estimada en ~' + paybackMo + ' meses (SaaS 36m: $' + saas36.toLocaleString('en-US') + ' vs Pago único ' + region + ': $' + ownCost.toLocaleString('en-US') + ').'
      : 'Break-even in ~' + paybackMo + ' months (36m SaaS: $' + saas36.toLocaleString('en-US') + ' vs ' + region + ' One-Time: $' + ownCost.toLocaleString('en-US') + ').';
  }

  function render() {
    const p = PRODUCTS[slug];
    const t = p[lang];
    const rows = getRows();

    document.documentElement.lang = lang;
    $('lang-es').setAttribute('aria-pressed', String(lang === 'es'));
    $('lang-en').setAttribute('aria-pressed', String(lang === 'en'));
    $('nav-back').textContent = lang === 'es' ? 'Volver al portafolio (20 sistemas)' : 'Back to 20-System Portfolio';
    $('nav-back').href = 'index.html?lang=' + lang + '#platforms';
    $('lbl-badge').textContent = lang === 'es' ? 'Evaluación interactiva en navegador (60 segundos) · Sin instalación' : 'Interactive 60-second browser evaluation · No installation';
    $('demo-title').textContent = p.name;
    $('demo-tagline').textContent = t.tag;
    $('sec-live-title').textContent = lang === 'es' ? 'Validación de Registros y Reglas de Negocio en Vivo' : 'Live Record Validation & Business Rule Test';
    $('sec-live-sub').textContent = lang === 'es'
      ? 'Ingrese un registro de prueba o intente cargar un duplicado/fuera de rango para comprobar el control en tiempo real.'
      : 'Add a record below or enter a duplicate/out-of-bounds value to observe the enforced business invariant in real time.';
    $('f-col1').placeholder = t.p1;
    $('f-col2').placeholder = t.p2;
    $('f-col3').placeholder = t.p3;
    $('btn-add').textContent = lang === 'es' ? 'Agregar y Validar Registro' : 'Add & Validate Record';
    $('sim-heading').textContent = lang === 'es' ? 'Ahorro Proyectado a 36 Meses' : '36-Month Ownership Savings';
    $('sim-sub').textContent = lang === 'es'
      ? 'Compare la tarifa de pago único para su región frente a una suscripción SaaS mensual por usuario.'
      : 'Compare one-time ownership pricing for your region against recurring monthly SaaS fees.';
    $('lbl-users').textContent = lang === 'es' ? 'Usuarios activos del equipo' : 'Active team seats';
    $('lbl-saas').textContent = lang === 'es' ? 'Costo SaaS mensual / usuario (USD)' : 'Monthly SaaS fee / seat (USD)';
    $('lbl-save-title').textContent = lang === 'es' ? 'Ahorro neto estimado en 36 meses:' : 'Projected 36-month net savings:';
    $('lbl-own').textContent = lang === 'es'
      ? 'Entrega a alcance cerrado · Pagos por hitos 50/50 · Cero cuotas mensuales · Propiedad total del código y base de datos.'
      : 'Fixed-scope delivery · 50/50 milestone payments · Zero monthly SaaS fees · Complete source code and database ownership.';

    const totalNum = rows.reduce(function (acc, r) { return acc + (Number(r[2]) || 0); }, 0);
    const kpiData = lang === 'es'
      ? [['Registros activos', String(rows.length)], ['Volumen acumulado', totalNum.toLocaleString('en-US', { maximumFractionDigits: 1 })], ['Cuota SaaS mensual', '$0 / mes']]
      : [['Active records', String(rows.length)], ['Tracked volume', totalNum.toLocaleString('en-US', { maximumFractionDigits: 1 })], ['Monthly SaaS fee', '$0 / mo']];
    const kpisEl = $('demo-kpis');
    kpisEl.replaceChildren();
    kpiData.forEach(function (pair) {
      const box = document.createElement('div');
      box.className = 's-kpi';
      const sm = document.createElement('small');
      sm.textContent = pair[0];
      const st = document.createElement('strong');
      st.className = 'mono';
      st.textContent = pair[1];
      box.appendChild(sm);
      box.appendChild(st);
      kpisEl.appendChild(box);
    });

    const thead = $('demo-thead');
    thead.replaceChildren();
    t.cols.forEach(function (c) {
      const th = document.createElement('th');
      th.textContent = c;
      thead.appendChild(th);
    });

    const tbody = $('demo-tbody');
    tbody.replaceChildren();
    rows.forEach(function (r) {
      const tr = document.createElement('tr');
      r.forEach(function (cell, idx) {
        const td = document.createElement('td');
        if (idx === 2) td.className = 'mono';
        if (idx === 3) {
          const span = document.createElement('span');
          const low = String(cell).toLowerCase();
          span.className = /alert|risk|expir|due|await|review|pend/.test(low) ? 'tag-warn' : 'tag-ok';
          span.textContent = String(cell);
          td.appendChild(span);
        } else {
          td.textContent = String(cell);
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    $('demo-screen').src = 'assets/screens/' + lang + '/' + p.img + '.png';
    $('demo-screen').alt = p.name + ' live application interface';

    const formalMsg = lang === 'es'
      ? 'Estimado equipo de Kreta Software,\n\nHe evaluado la demostración interactiva de ' + p.name + ' (región ' + region + ') y deseo solicitar una propuesta formal o evaluación detallada para nuestra operación.\n\nEmpresa / Organización:\nPaís:\n\nAtentamente,'
      : 'Dear Kreta Software Team,\n\nI have reviewed the interactive demonstration of ' + p.name + ' (' + region + ' region) and would like to request a formal proposal or tailored evaluation for our operation.\n\nCompany / Organization:\nCountry:\n\nKind regards,';
    const sampleMsg = lang === 'es'
      ? 'Estimado equipo de Kreta Software,\n\nDeseo solicitar tres registros de ejemplo adaptados a nuestra operación en ' + p.name + ' (región ' + region + ').\n\nEmpresa / Organización:\nPaís:\n\nAtentamente,'
      : 'Dear Kreta Software Team,\n\nI would like to request three custom sample records tailored to our workflow in ' + p.name + ' (' + region + ' region).\n\nCompany / Organization:\nCountry:\n\nKind regards,';
    const subjDemo = '[KRETA-DEMO] ' + p.name + ' (' + region + ')';
    const subjSample = '[KRETA-3EJEMPLOS] ' + p.name + ' (' + region + ')';
    $('cta-mail').href = 'mailto:andrewkrijdjd@gmail.com?subject=' + encodeURIComponent(subjDemo) + '&body=' + encodeURIComponent(formalMsg);
    $('cta-mail').textContent = lang === 'es' ? 'Solicitar Demo / Propuesta por Email' : 'Request Formal Demo / Proposal via Email';
    $('cta-sample').href = 'mailto:andrewkrijdjd@gmail.com?subject=' + encodeURIComponent(subjSample) + '&body=' + encodeURIComponent(sampleMsg);
    $('cta-sample').textContent = lang === 'es' ? 'Solicitar 3 Ejemplos Adaptados por Email' : 'Request Custom 3-Record Preview via Email';
    if ($('cta-copy')) {
      $('cta-copy').textContent = lang === 'es' ? 'Copiar Email (andrewkrijdjd@gmail.com)' : 'Copy Email (andrewkrijdjd@gmail.com)';
    }

    renderSimulator();
  }

  if ($('cta-copy')) {
    $('cta-copy').addEventListener('click', function () {
      const btn = $('cta-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('andrewkrijdjd@gmail.com').catch(function () {});
      }
      btn.textContent = lang === 'es' ? 'Copiado: andrewkrijdjd@gmail.com' : 'Copied: andrewkrijdjd@gmail.com';
      setTimeout(function () {
        btn.textContent = lang === 'es' ? 'Copiar Email (andrewkrijdjd@gmail.com)' : 'Copy Email (andrewkrijdjd@gmail.com)';
      }, 2200);
    });
  }

  $('prod-select').addEventListener('change', function (e) { slug = e.target.value; clearAlert(); render(); });
  $('region-select').addEventListener('change', function (e) { region = e.target.value; render(); });
  $('lang-es').addEventListener('click', function () { lang = 'es'; clearAlert(); render(); });
  $('lang-en').addEventListener('click', function () { lang = 'en'; clearAlert(); render(); });
  $('sl-users').addEventListener('input', renderSimulator);
  $('sl-saas').addEventListener('input', renderSimulator);

  $('demo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const p = PRODUCTS[slug];
    const t = p[lang];
    const c1 = $('f-col1').value.trim();
    const c2 = $('f-col2').value.trim();
    const c3 = Number($('f-col3').value);
    const rows = getRows();

    if (p.rule === 'unique_ref' && rows.some(function (r) { return String(r[1]).toLowerCase() === c2.toLowerCase(); })) {
      showAlert(t.err, false);
      return;
    }
    if (p.rule === 'positive' && !(c3 > 0)) { showAlert(t.err, false); return; }
    if (p.rule === 'min_val' && !(c3 >= (p.min || 0))) { showAlert(t.err, false); return; }
    if (p.rule === 'max_cap' && (!(c3 > 0) || c3 > (p.max || 100000))) { showAlert(t.err, false); return; }

    rows.unshift([c1, c2, c3, lang === 'es' ? 'Validado' : 'Validated']);
    $('demo-form').reset();
    showAlert(lang === 'es' ? 'Registro validado y agregado correctamente en vivo.' : 'Record validated and recorded live.', true);
    render();
  });

  populateSelect();
  render();
})();
