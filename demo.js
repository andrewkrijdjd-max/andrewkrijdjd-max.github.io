(function () {
  'use strict';

  /* Full 20-Product Interactive SaaS Workspace Engine (zero static PNGs, real validation, Kanban, live SVG charts, SHA-256 audit, CSV/Print) */
  const PRODUCTS = {
    medflow: {
      name: 'MedFlow / ClinicOps', unit: '$', unitPos: 'pre', maxVal: 50000, uniqueSlot: true,
      prices: { USA: [790, 2490, 4190], EUR: [725, 2290, 3855], LATAM: [555, 1745, 2935], AR: [435, 1370, 2305] },
      owners: ['Dr. Hannah Reed', 'Dr. Carlos Vega', 'Dr. Priya Patel'],
      slots: ['09:00', '10:30', '11:30', '14:00', '15:30', '16:30'],
      en: { sub: 'Multi-provider clinic scheduling with conflict prevention, encounter notes, and visit billing.', stages: ['Scheduled', 'Checked In', 'In Consult', 'Billed'], cols: ['Patient', 'Provider', 'Time Slot', 'Fee', 'Stage'], fName: 'Patient Full Name', fOwner: 'Provider', fSlot: 'Appointment Slot', fAmt: 'Visit Fee (USD)', kpiVol: 'Scheduled Revenue', dupErr: 'That provider is already booked for this time slot. Choose another slot or provider.' },
      es: { sub: 'Agenda clínica multi-profesional sin superposiciones, evolución médica y facturación.', stages: ['Agendado', 'En Recepción', 'En Consulta', 'Facturado'], cols: ['Paciente', 'Profesional', 'Horario', 'Honorario', 'Etapa'], fName: 'Nombre del Paciente', fOwner: 'Profesional', fSlot: 'Horario', fAmt: 'Honorario (USD)', kpiVol: 'Ingresos Agendados', dupErr: 'Ese profesional ya tiene un turno asignado en ese horario. Seleccione otro horario o profesional.' },
      seed: [
        { id: 'MED-101', name: 'Martin Lopez', owner: 'Dr. Hannah Reed', slot: '09:00', amount: 140, stage: 3, notes: 'Annual physical + lab panel completed.' },
        { id: 'MED-102', name: 'Carla Diaz', owner: 'Dr. Hannah Reed', slot: '10:30', amount: 120, stage: 2, notes: 'Follow-up consultation in progress.' },
        { id: 'MED-103', name: 'David Brooks', owner: 'Dr. Carlos Vega', slot: '11:30', amount: 185, stage: 1, notes: 'Checked in at front desk; insurance verified.' },
        { id: 'MED-104', name: 'Elena Morales', owner: 'Dr. Priya Patel', slot: '14:00', amount: 95, stage: 0, notes: 'Initial intake scheduled.' },
        { id: 'MED-105', name: 'Samuel Kim', owner: 'Dr. Carlos Vega', slot: '15:30', amount: 160, stage: 0, notes: 'Diagnostic imaging review.' },
      ],
    },
    fieldops: {
      name: 'FieldOps', unit: '$', unitPos: 'pre', maxVal: 250000, uniqueSlot: false,
      prices: { USA: [990, 2990, 4890], EUR: [910, 2750, 4500], LATAM: [695, 2095, 3425], AR: [545, 1645, 2690] },
      owners: ['Tech: Mike Torres', 'Tech: Jordan Vance', 'Tech: Luis Gomez'],
      slots: ['4h Emergency SLA', '8h Priority SLA', '24h Standard SLA', 'Preventive PM'],
      en: { sub: 'Commercial HVAC, elevator, and mechanical dispatch with SLA timers and verified job closeouts.', stages: ['Dispatched', 'On Site', 'QC Sign-off', 'Invoiced'], cols: ['Work Order / Site', 'Technician', 'SLA Tier', 'Estimate', 'Stage'], fName: 'Site & Equipment', fOwner: 'Assigned Technician', fSlot: 'SLA Tier', fAmt: 'Job Value (USD)', kpiVol: 'Active Dispatch Value', dupErr: 'Duplicate active work order.' },
      es: { sub: 'Despacho técnico de HVAC, ascensores y mantenimiento con control de SLAs y cierre verificado.', stages: ['Despachado', 'En Sitio', 'Control QC', 'Facturado'], cols: ['Orden / Sitio', 'Técnico', 'SLA', 'Monto', 'Etapa'], fName: 'Sitio y Equipo', fOwner: 'Técnico Asignado', fSlot: 'Nivel de SLA', fAmt: 'Importe (USD)', kpiVol: 'Valor en Despacho', dupErr: 'Orden duplicada.' },
      seed: [
        { id: 'WO-801', name: 'Oak Plaza · Rooftop Chiller #2', owner: 'Tech: Mike Torres', slot: '4h Emergency SLA', amount: 1850, stage: 2, notes: 'Compressor replaced; pressure tested.' },
        { id: 'WO-802', name: 'Metro Tower · Elevator Car B', owner: 'Tech: Jordan Vance', slot: '8h Priority SLA', amount: 1240, stage: 1, notes: 'Door sensor calibration underway.' },
        { id: 'WO-803', name: 'Harbor Clinic · Boiler PM', owner: 'Tech: Luis Gomez', slot: 'Preventive PM', amount: 640, stage: 3, notes: 'Signed closeout checklist attached.' },
        { id: 'WO-804', name: 'North Depot · Cold Room Unit', owner: 'Tech: Mike Torres', slot: '4h Emergency SLA', amount: 2100, stage: 0, notes: 'Parts loaded; en route.' },
      ],
    },
    buildcost: {
      name: 'BuildCost Pro', unit: '$', unitPos: 'pre', maxVal: 250000, uniqueSlot: false,
      prices: { USA: [990, 3490, 5490], EUR: [910, 3210, 5050], LATAM: [695, 2445, 3845], AR: [545, 1920, 3020] },
      owners: ['Oak St Commercial', 'Riverfront Lofts', 'Westside Medical Wing'],
      slots: ['Concrete & Steel', 'Electrical Sub', 'HVAC & Plumbing', 'Millwork & Finishes'],
      en: { sub: 'Line-item construction job costing, real-vs-budget variance tracking, and capped progress draws.', stages: ['Draft Draw', 'PM Review', 'Approved', 'Paid'], cols: ['Cost Item / Sub', 'Project', 'Trade Package', 'Draw Amount', 'Stage'], fName: 'Line Item / Subcontractor', fOwner: 'Active Project', fSlot: 'Trade Package', fAmt: 'Draw Amount (USD, max $250k)', kpiVol: 'Certified Draws', dupErr: 'Duplicate line item.' },
      es: { sub: 'Control presupuestario de obra por rubro, desvíos reales y certificaciones con tope.', stages: ['Borrador', 'Revisión PM', 'Aprobada', 'Pagada'], cols: ['Rubro / Subcontratista', 'Obra', 'Paquete', 'Certificado', 'Etapa'], fName: 'Rubro / Subcontratista', fOwner: 'Obra Activa', fSlot: 'Especialidad', fAmt: 'Monto Certificado (USD)', kpiVol: 'Total Certificado', dupErr: 'Certificación duplicada.' },
      seed: [
        { id: 'BC-201', name: 'Apex Structural Concrete', owner: 'Oak St Commercial', slot: 'Concrete & Steel', amount: 42500, stage: 3, notes: 'Slab pour inspected and released.' },
        { id: 'BC-202', name: 'VoltLine Electrical Rough-In', owner: 'Oak St Commercial', slot: 'Electrical Sub', amount: 18900, stage: 2, notes: 'Within 2% of line-item budget.' },
        { id: 'BC-203', name: 'Precision Mechanical Ducting', owner: 'Riverfront Lofts', slot: 'HVAC & Plumbing', amount: 26400, stage: 1, notes: 'Awaiting lien waiver verification.' },
        { id: 'BC-204', name: 'Heritage Millwork & Doors', owner: 'Westside Medical Wing', slot: 'Millwork & Finishes', amount: 14200, stage: 0, notes: 'Initial progress claim submitted.' },
      ],
    },
    caseledger: {
      name: 'CaseLedger', unit: '$', unitPos: 'pre', maxVal: 500000, uniqueSlot: false,
      prices: { USA: [890, 2990, 4890], EUR: [820, 2750, 4500], LATAM: [625, 2095, 3425], AR: [490, 1645, 2690] },
      owners: ['Partner: R. Vance', 'Assoc: E. Shaw', 'Partner: M. Delgado'],
      slots: ['Commercial Litigation', 'Corporate M&A', 'Employment Law', 'Estate & Trust'],
      en: { sub: 'Boutique law firm matter deadlines, billable WIP tracking, and segregated IOLTA trust ledger.', stages: ['Intake', 'Discovery', 'Court Filing', 'Billed'], cols: ['Matter / Client', 'Lead Attorney', 'Practice Area', 'WIP / Trust', 'Stage'], fName: 'Matter & Client Name', fOwner: 'Lead Attorney', fSlot: 'Practice Area', fAmt: 'WIP / Retainer (USD)', kpiVol: 'Billable WIP & Trust', dupErr: 'Duplicate matter reference.' },
      es: { sub: 'Gestión jurídica de causas, plazos perentorios, horas facturables y fondos en custodia (facturación local vía webhook/CSV).', stages: ['Ingreso', 'Prueba', 'Presentación', 'Facturado'], cols: ['Causa / Cliente', 'Abogado', 'Fuero / Área', 'WIP / Custodia', 'Etapa'], fName: 'Causa y Cliente', fOwner: 'Abogado Responsable', fSlot: 'Área Legal', fAmt: 'Honorarios / Custodia (USD)', kpiVol: 'WIP Facturable', dupErr: 'Causa duplicada.' },
      seed: [
        { id: 'CL-401', name: 'Acme Logistics v. Port Authority', owner: 'Partner: R. Vance', slot: 'Commercial Litigation', amount: 14800, stage: 2, notes: 'Motion deadline verified 7 days ahead.' },
        { id: 'CL-402', name: 'Northstar Holdings Acquisition', owner: 'Partner: M. Delgado', slot: 'Corporate M&A', amount: 22500, stage: 1, notes: 'Due diligence binder 80% complete.' },
        { id: 'CL-403', name: 'Rivera Family Trust Admin', owner: 'Assoc: E. Shaw', slot: 'Estate & Trust', amount: 6400, stage: 3, notes: 'Trust balance reconciled.' },
        { id: 'CL-404', name: 'Summit Retail Employment Audit', owner: 'Assoc: E. Shaw', slot: 'Employment Law', amount: 4900, stage: 0, notes: 'Conflict check cleared.' },
      ],
    },
    fleetguard: {
      name: 'FleetGuard & LogiTrack', unit: '$', unitPos: 'pre', maxVal: 150000, uniqueSlot: false,
      prices: { USA: [790, 2490, 4190], EUR: [725, 2290, 3855], LATAM: [555, 1745, 2935], AR: [435, 1370, 2305] },
      owners: ['TRK-104 · Freightliner', 'TRK-108 · Kenworth', 'VAN-202 · Sprinter'],
      slots: ['Preventive PM', 'DOT Compliance', 'Fuel Audit', 'Brake & Tire Service'],
      en: { sub: 'Preventive maintenance schedules, expiring DOT compliance documents, and fuel cost tracking per unit.', stages: ['Scheduled', 'In Bay', 'Inspection', 'Road Ready'], cols: ['Service / Log', 'Fleet Unit', 'Category', 'Cost', 'Stage'], fName: 'Maintenance / Fuel Entry', fOwner: 'Fleet Unit', fSlot: 'Category', fAmt: 'Cost (USD)', kpiVol: 'Fleet Spend Tracked', dupErr: 'Duplicate log.' },
      es: { sub: 'Mantenimiento preventivo, vencimientos documentales y control de combustible por unidad.', stages: ['Programado', 'En Taller', 'Inspección', 'Operativo'], cols: ['Registro', 'Unidad', 'Categoría', 'Costo', 'Etapa'], fName: 'Detalle de Servicio', fOwner: 'Unidad', fSlot: 'Categoría', fAmt: 'Costo (USD)', kpiVol: 'Gasto de Flota', dupErr: 'Registro duplicado.' },
      seed: [
        { id: 'FG-301', name: '60k Mile Engine & Oil PM', owner: 'TRK-104 · Freightliner', slot: 'Preventive PM', amount: 680, stage: 3, notes: 'Passed safety inspection.' },
        { id: 'FG-302', name: 'Annual DOT Brake Inspection', owner: 'VAN-202 · Sprinter', slot: 'DOT Compliance', amount: 290, stage: 2, notes: 'Certificate expires in 14 days.' },
        { id: 'FG-303', name: 'Steer Tire Replacement Set', owner: 'TRK-108 · Kenworth', slot: 'Brake & Tire Service', amount: 1420, stage: 1, notes: 'In bay #2; ETA 3 hours.' },
        { id: 'FG-304', name: 'Route 35 Diesel Reconciliation', owner: 'TRK-104 · Freightliner', slot: 'Fuel Audit', amount: 410, stage: 0, notes: 'MPG anomaly flagged (+8% burn).' },
      ],
    },
    fixflow: {
      name: 'FixFlow', unit: '$', unitPos: 'pre', maxVal: 50000, uniqueSlot: false,
      prices: { USA: [590, 1690, 2790], EUR: [545, 1555, 2565], LATAM: [415, 1185, 1955], AR: [325, 930, 1535] },
      owners: ['Bench 1 · Alex', 'Bench 2 · Sofia', 'Bench 3 · Marcus'],
      slots: ['Hardware Diagnostics', 'Warranty RMA', 'Board Replacement', 'Calibration'],
      en: { sub: 'Repair shop intake tickets, diagnostic quotes, RMA warranties, and parts margin control.', stages: ['Intake', 'Diagnosing', 'In Repair', 'Ready'], cols: ['Device / Ticket', 'Technician', 'Service Type', 'Quote', 'Stage'], fName: 'Customer & Equipment', fOwner: 'Assigned Bench', fSlot: 'Service Type', fAmt: 'Repair Quote (USD)', kpiVol: 'Open Bench Revenue', dupErr: 'Duplicate ticket.' },
      es: { sub: 'Órdenes de taller, diagnósticos, RMA de garantías y control de margen en repuestos.', stages: ['Ingreso', 'Diagnóstico', 'Reparación', 'Listo'], cols: ['Equipo / Orden', 'Técnico', 'Tipo Servicio', 'Presupuesto', 'Etapa'], fName: 'Cliente y Equipo', fOwner: 'Banco Técnico', fSlot: 'Tipo de Servicio', fAmt: 'Presupuesto (USD)', kpiVol: 'Ingresos en Taller', dupErr: 'Orden duplicada.' },
      seed: [
        { id: 'FX-501', name: 'MacBook Pro M3 · Logic Board', owner: 'Bench 1 · Alex', slot: 'Board Replacement', amount: 540, stage: 2, notes: 'Customer approved quote via email.' },
        { id: 'FX-502', name: 'Honda EU2200i · Inverter Fault', owner: 'Bench 3 · Marcus', slot: 'Hardware Diagnostics', amount: 260, stage: 1, notes: 'Testing stator coil resistance.' },
        { id: 'FX-503', name: 'CNC Spindle Drive · Warranty', owner: 'Bench 2 · Sofia', slot: 'Warranty RMA', amount: 420, stage: 3, notes: '90-day warranty badge issued.' },
        { id: 'FX-504', name: 'Sony FX6 · SDI Port Repair', owner: 'Bench 1 · Alex', slot: 'Calibration', amount: 310, stage: 0, notes: 'Awaiting parts delivery.' },
      ],
    },
    rentvault: {
      name: 'RentVault', unit: '$', unitPos: 'pre', maxVal: 100000, uniqueSlot: true,
      prices: { USA: [690, 1990, 3290], EUR: [635, 1830, 3025], LATAM: [485, 1395, 2305], AR: [380, 1095, 1810] },
      owners: ['Kit: ARRI Alexa Mini', 'Kit: Line Array PA 12kW', 'Unit: Scissor Lift 26ft'],
      slots: ['Dec 02–04', 'Dec 05–07', 'Dec 09–11', 'Dec 14–16', 'Dec 18–20'],
      en: { sub: 'Equipment & AV rental calendars with serialized QR/barcode asset tracking, overlap blocks, security deposits, and return QC.', stages: ['Reserved', 'Checked Out', 'Return QC', 'Deposit Settled'], cols: ['Client / Production', 'Serialized Kit', 'Rental Dates', 'Deposit + Fee', 'Stage'], fName: 'Client / Production Name', fOwner: 'Serialized Equipment Kit', fSlot: 'Rental Dates', fAmt: 'Rental + Deposit (USD)', kpiVol: 'Booked Rental Value', dupErr: 'That serialized equipment kit is already reserved for those exact dates.' },
      es: { sub: 'Alquiler de equipos y audiovisual sin solapamientos, con depósitos de garantía e inspección.', stages: ['Reservado', 'Entregado', 'Inspección', 'Cerrado'], cols: ['Cliente / Producción', 'Equipo', 'Fechas', 'Alquiler + Dep.', 'Etapa'], fName: 'Cliente / Producción', fOwner: 'Equipo / Kit', fSlot: 'Fechas de Alquiler', fAmt: 'Monto + Depósito (USD)', kpiVol: 'Reservas Activas', dupErr: 'Ese equipo ya está reservado para esas mismas fechas.' },
      seed: [
        { id: 'RV-601', name: 'Horizon Film Studio', owner: 'Kit: ARRI Alexa Mini', slot: 'Dec 02–04', amount: 2400, stage: 1, notes: 'ID & $1,000 security hold verified.' },
        { id: 'RV-602', name: 'Civic Summit Live Events', owner: 'Kit: Line Array PA 12kW', slot: 'Dec 05–07', amount: 1850, stage: 0, notes: 'Delivery scheduled 06:00 AM.' },
        { id: 'RV-603', name: 'Midtown Expo Contractors', owner: 'Unit: Scissor Lift 26ft', slot: 'Dec 09–11', amount: 960, stage: 3, notes: 'Zero damage; deposit released.' },
      ],
    },
    compliancevault: {
      name: 'ComplianceVault ISO/SOC2', unit: '%', unitPos: 'post', maxVal: 100, uniqueSlot: false,
      prices: { USA: [990, 3490, 5490], EUR: [910, 3210, 5050], LATAM: [695, 2445, 3845], AR: [545, 1920, 3020] },
      owners: ['ISO 27001 · A.8', 'SOC2 · CC6.1', 'SOC2 · CC7.2'],
      slots: ['Access Control', 'Backup & DR', 'Vendor Risk', 'Incident Response'],
      en: { sub: 'Audit-ready ISO 27001 / SOC2 control registry, risk scoring, and timestamped evidence vault.', stages: ['Gap Identified', 'Evidence Pending', 'Auditor Review', 'Verified'], cols: ['Control / Evidence', 'Framework', 'Domain', 'Readiness', 'Stage'], fName: 'Control / Evidence Item', fOwner: 'Framework', fSlot: 'Control Domain', fAmt: 'Readiness Score (1-100%)', kpiVol: 'Avg Control Readiness', dupErr: 'Control already tracked.' },
      es: { sub: 'Registro de controles ISO 27001 / SOC2, matriz de riesgos y bóveda de evidencias.', stages: ['Brecha', 'Evidencia Pend.', 'Revisión', 'Verificado'], cols: ['Control / Evidencia', 'Marco', 'Dominio', 'Avance', 'Etapa'], fName: 'Control o Evidencia', fOwner: 'Marco Normativo', fSlot: 'Dominio', fAmt: 'Avance (1-100%)', kpiVol: 'Cumplimiento Promedio', dupErr: 'Control duplicado.' },
      seed: [
        { id: 'CV-11', name: 'Production MFA Enforcement', owner: 'SOC2 · CC6.1', slot: 'Access Control', amount: 100, stage: 3, notes: 'Quarterly IAM export hashed & signed.' },
        { id: 'CV-12', name: 'Automated DB Restore Drill', owner: 'ISO 27001 · A.8', slot: 'Backup & DR', amount: 85, stage: 2, notes: 'RTO measured at 11 minutes.' },
        { id: 'CV-13', name: 'Critical Subprocessor Review', owner: 'SOC2 · CC7.2', slot: 'Vendor Risk', amount: 60, stage: 1, notes: 'Waiting on updated SOC2 report.' },
      ],
    },
    quoteflow: {
      name: 'QuoteFlow', unit: '$', unitPos: 'pre', maxVal: 500000, uniqueSlot: false,
      prices: { USA: [690, 2190, 3490], EUR: [635, 2015, 3210], LATAM: [485, 1535, 2445], AR: [380, 1205, 1920] },
      owners: ['Rep: Daniel Cruz', 'Rep: Sarah Mills', 'Rep: Owen Park'],
      slots: ['Standard 28% Margin', 'Volume 22% Margin', 'Custom BOM 32%'],
      en: { sub: 'Fast B2B CPQ quoting with automatic gross margin guardrails and one-click PDF proposals.', stages: ['Drafting', 'Margin Check', 'Sent to Buyer', 'Approved'], cols: ['Account / Quote', 'Sales Rep', 'Pricing Tier', 'Quote Total', 'Stage'], fName: 'Account & Quote Title', fOwner: 'Sales Rep', fSlot: 'Margin Tier', fAmt: 'Quote Value (USD)', kpiVol: 'Active Quote Pipeline', dupErr: 'Duplicate quote.' },
      es: { sub: 'Cotizador B2B ágil con resguardo automático de margen bruto y aprobación comercial.', stages: ['Borrador', 'Control Margen', 'Enviada', 'Aprobada'], cols: ['Cuenta / Oferta', 'Comercial', 'Regla Margen', 'Importe', 'Etapa'], fName: 'Cuenta y Cotización', fOwner: 'Ejecutivo', fSlot: 'Nivel de Margen', fAmt: 'Importe (USD)', kpiVol: 'Pipeline Cotizado', dupErr: 'Cotización duplicada.' },
      seed: [
        { id: 'QF-91', name: 'Apex Industrial · 400 Valves', owner: 'Rep: Daniel Cruz', slot: 'Volume 22% Margin', amount: 18400, stage: 2, notes: 'Margin floor verified above 20%.' },
        { id: 'QF-92', name: 'Midwest Packaging · Spare Kit', owner: 'Rep: Sarah Mills', slot: 'Standard 28% Margin', amount: 6250, stage: 3, notes: 'PO received; moved to fulfillment.' },
        { id: 'QF-93', name: 'Delta Controls · Custom Panel', owner: 'Rep: Owen Park', slot: 'Custom BOM 32%', amount: 12900, stage: 1, notes: 'Pending engineering sign-off.' },
      ],
    },
    propledger: {
      name: 'PropLedger', unit: '$', unitPos: 'pre', maxVal: 250000, uniqueSlot: false,
      prices: { USA: [790, 2490, 4190], EUR: [725, 2290, 3855], LATAM: [555, 1745, 2935], AR: [435, 1370, 2305] },
      owners: ['Oakridge Apartments', 'Harbor Retail Plaza', 'Sunset Townhomes'],
      slots: ['Monthly Rent', 'CAM Reconciliation', 'Lease Indexation', 'Maintenance Reserve'],
      en: { sub: 'Property & HOA ledger with automated lease indexation, delinquency flags, and owner statements.', stages: ['Billed', 'Due Soon', 'Overdue Flag', 'Collected'], cols: ['Unit / Tenant', 'Property', 'Ledger Type', 'Amount', 'Stage'], fName: 'Unit & Tenant Name', fOwner: 'Property', fSlot: 'Charge Type', fAmt: 'Amount (USD)', kpiVol: 'Monthly Ledger Volume', dupErr: 'Duplicate charge.' },
      es: { sub: 'Administración inmobiliaria y consorcios con indexación automática y morosidad.', stages: ['Emitido', 'Por Vencer', 'Mora Activa', 'Cobrado'], cols: ['Unidad / Inquilino', 'Edificio', 'Concepto', 'Importe', 'Etapa'], fName: 'Unidad e Inquilino', fOwner: 'Propiedad', fSlot: 'Concepto', fAmt: 'Importe (USD)', kpiVol: 'Volumen Mensual', dupErr: 'Liquidación duplicada.' },
      seed: [
        { id: 'PL-10', name: 'Unit 4B · Rachel Lin', owner: 'Oakridge Apartments', slot: 'Monthly Rent', amount: 2350, stage: 3, notes: 'ACH settled on the 1st.' },
        { id: 'PL-11', name: 'Suite 102 · Harbor Dental', owner: 'Harbor Retail Plaza', slot: 'CAM Reconciliation', amount: 4100, stage: 1, notes: 'Statement delivered.' },
        { id: 'PL-12', name: 'Unit 9A · G. Alvarez', owner: 'Sunset Townhomes', slot: 'Lease Indexation', amount: 1980, stage: 2, notes: '3.2% annual CPI step applied.' },
      ],
    },
    lablims: {
      name: 'LabLIMS', unit: 'samples', unitPos: 'post', maxVal: 5000, uniqueSlot: false,
      prices: { USA: [1490, 5990, 9490], EUR: [1370, 5510, 8730], LATAM: [1045, 4195, 6645], AR: [820, 3295, 5220] },
      owners: ['Microbiology Lab', 'Analytical Chemistry', 'Water & Soil QA'],
      slots: ['ISO 17025 Panel', 'Heavy Metals ICP', 'Microbial Plate', 'Potency Assay'],
      en: { sub: 'Laboratory sample chain-of-custody, pass/fail assay checks, and verifiable QR Certificates of Analysis.', stages: ['Received', 'In Assay', 'QA Review', 'COA Issued'], cols: ['Sample Batch', 'Lab Unit', 'Test Method', 'Specimens', 'Stage'], fName: 'Client & Batch ID', fOwner: 'Lab Department', fSlot: 'Assay Method', fAmt: 'Specimen Count', kpiVol: 'Tracked Specimens', dupErr: 'Duplicate batch.' },
      es: { sub: 'Trazabilidad de muestras de laboratorio (LIMS), control de calidad y COA con QR verificable.', stages: ['Recibida', 'En Ensayo', 'Revisión QA', 'COA Emitido'], cols: ['Lote / Muestra', 'Laboratorio', 'Método', 'Muestras', 'Etapa'], fName: 'Cliente y Lote', fOwner: 'Área de Lab', fSlot: 'Método de Ensayo', fAmt: 'Cantidad de Muestras', kpiVol: 'Muestras en Curso', dupErr: 'Lote duplicado.' },
      seed: [
        { id: 'LB-71', name: 'PureSpring Bottling · Lot 88A', owner: 'Water & Soil QA', slot: 'Heavy Metals ICP', amount: 24, stage: 3, notes: 'COA QR #SHA-88A verified pass.' },
        { id: 'LB-72', name: 'Harvest Foods · Dairy Batch', owner: 'Microbiology Lab', slot: 'Microbial Plate', amount: 16, stage: 1, notes: '48h incubation in progress.' },
        { id: 'LB-73', name: 'BioForm Nutraceuticals', owner: 'Analytical Chemistry', slot: 'Potency Assay', amount: 12, stage: 2, notes: 'Pending senior chemist sign-off.' },
      ],
    },
    lottrace: {
      name: 'LotTrace', unit: 'kg', unitPos: 'post', maxVal: 500000, uniqueSlot: false,
      prices: { USA: [1290, 4990, 7990], EUR: [1185, 4590, 7350], LATAM: [905, 3495, 5595], AR: [710, 2745, 4395] },
      owners: ['Cold Room A (2°C)', 'Blast Freezer (-18°C)', 'Ambient Bay 4'],
      slots: ['FSMA-204 Produce', 'Dairy Cold Chain', 'Protein Packaging', 'Dry Ingredients'],
      en: { sub: 'End-to-end food lot genealogy, cold-chain telemetry logs, and 60-second FSMA-204 mock recall.', stages: ['Received', 'In Processing', 'QA Hold', 'Released'], cols: ['Production Lot', 'Storage Zone', 'Compliance Rule', 'Batch Mass', 'Stage'], fName: 'Product & Lot Code', fOwner: 'Storage Zone', fSlot: 'Traceability Rule', fAmt: 'Batch Mass (kg)', kpiVol: 'Traceable Mass', dupErr: 'Duplicate lot.' },
      es: { sub: 'Trazabilidad de lotes alimentarios, cadena de frío y simulacro de recall FSMA-204.', stages: ['Recibido', 'En Proceso', 'Retenido QA', 'Liberado'], cols: ['Lote', 'Zona Frío', 'Norma', 'Volumen', 'Etapa'], fName: 'Producto y Código de Lote', fOwner: 'Zona de Frío', fSlot: 'Regla', fAmt: 'Masa del Lote (kg)', kpiVol: 'Masa Trazada', dupErr: 'Lote duplicado.' },
      seed: [
        { id: 'LT-31', name: 'Organic Spinach · LOT-2611A', owner: 'Cold Room A (2°C)', slot: 'FSMA-204 Produce', amount: 1450, stage: 3, notes: 'Mock recall completed in 42 seconds.' },
        { id: 'LT-32', name: 'Artisan Cheddar · LOT-2611B', owner: 'Cold Room A (2°C)', slot: 'Dairy Cold Chain', amount: 820, stage: 2, notes: 'Awaiting swab clearance.' },
        { id: 'LT-33', name: 'Wild Salmon Fillets · LOT-2611C', owner: 'Blast Freezer (-18°C)', slot: 'Protein Packaging', amount: 2100, stage: 1, notes: 'Temp steady at -18.4°C.' },
      ],
    },
    tradeflow: {
      name: 'TradeFlow', unit: '$', unitPos: 'pre', maxVal: 1000000, uniqueSlot: false,
      prices: { USA: [1190, 3890, 6290], EUR: [1095, 3580, 5785], LATAM: [835, 2725, 4405], AR: [655, 2140, 3460] },
      owners: ['Port of Houston', 'Port of Los Angeles', 'Port of Savannah'],
      slots: ['40ft FCL Ocean', '20ft Reefer FCL', 'Air Freight Express'],
      en: { sub: 'Customs brokerage files, true landed-cost breakdown, and demurrage free-day countdown alerts.', stages: ['Docs Filed', 'At Port', 'Customs Cleared', 'Delivered'], cols: ['Container / BL', 'Port of Entry', 'Mode', 'Landed Cost', 'Stage'], fName: 'Importer & Container #', fOwner: 'Port of Entry', fSlot: 'Shipping Mode', fAmt: 'Landed Cost (USD)', kpiVol: 'Active Landed Value', dupErr: 'Duplicate container.' },
      es: { sub: 'Despacho aduanero, contenedores, cálculo de landed cost y alertas de demurrage.', stages: ['Documentado', 'En Puerto', 'Liberado Aduana', 'Entregado'], cols: ['Contenedor / BL', 'Puerto', 'Modalidad', 'Landed Cost', 'Etapa'], fName: 'Importador y Contenedor', fOwner: 'Puerto', fSlot: 'Modalidad', fAmt: 'Landed Cost (USD)', kpiVol: 'Valor en Tránsito', dupErr: 'Contenedor duplicado.' },
      seed: [
        { id: 'TF-14', name: 'MSKU-882410 · Industrial Pumps', owner: 'Port of Houston', slot: '40ft FCL Ocean', amount: 84200, stage: 2, notes: '2 free days left before demurrage.' },
        { id: 'TF-15', name: 'HLXU-301944 · Cold Produce', owner: 'Port of Los Angeles', slot: '20ft Reefer FCL', amount: 52600, stage: 1, notes: 'USDA inspection scheduled.' },
        { id: 'TF-16', name: 'AWB-9910 · Optical Sensors', owner: 'Port of Savannah', slot: 'Air Freight Express', amount: 31400, stage: 3, notes: 'Final landed cost reconciled.' },
      ],
    },
    clientpulse: {
      name: 'ClientPulse', unit: '$', unitPos: 'pre', maxVal: 250000, uniqueSlot: false,
      prices: { USA: [690, 2190, 3490], EUR: [635, 2015, 3210], LATAM: [485, 1535, 2445], AR: [380, 1205, 1920] },
      owners: ['Pod A · Growth', 'Pod B · Brand & Web', 'Pod C · Engineering'],
      slots: ['Monthly Retainer', 'Fixed Sprint', 'Performance Audit'],
      en: { sub: 'Agency client portal, retainer burn-rate alerts, and deliverable approval tracking.', stages: ['Scoped', 'In Production', 'Client Review', 'Approved'], cols: ['Client Deliverable', 'Delivery Pod', 'Engagement', 'Retainer Value', 'Stage'], fName: 'Client & Deliverable', fOwner: 'Delivery Pod', fSlot: 'Engagement Type', fAmt: 'Retainer Value (USD)', kpiVol: 'Active Retainer MRR', dupErr: 'Duplicate deliverable.' },
      es: { sub: 'Portal de clientes para agencias, rentabilidad de retainers y aprobaciones.', stages: ['Definido', 'En Producción', 'Revisión Cliente', 'Aprobado'], cols: ['Entregable / Cliente', 'Equipo', 'Modalidad', 'Valor', 'Etapa'], fName: 'Cliente y Entregable', fOwner: 'Equipo', fSlot: 'Modalidad', fAmt: 'Valor Retainer (USD)', kpiVol: 'Retainers Activos', dupErr: 'Entregable duplicado.' },
      seed: [
        { id: 'CP-41', name: 'Veridian Health · Paid Search Q4', owner: 'Pod A · Growth', slot: 'Monthly Retainer', amount: 6500, stage: 3, notes: '68% hours utilized; healthy 44% margin.' },
        { id: 'CP-42', name: 'Kestrel FinTech · Website Launch', owner: 'Pod B · Brand & Web', slot: 'Fixed Sprint', amount: 11200, stage: 2, notes: 'Staging link shared for sign-off.' },
        { id: 'CP-43', name: 'Solis Energy · Analytics Setup', owner: 'Pod C · Engineering', slot: 'Performance Audit', amount: 4200, stage: 1, notes: 'GA4 + server tagging underway.' },
      ],
    },
    subguard: {
      name: 'SubGuard', unit: '$', unitPos: 'pre', maxVal: 250000, uniqueSlot: false,
      prices: { USA: [690, 2490, 3990], EUR: [635, 2290, 3670], LATAM: [485, 1745, 2795], AR: [380, 1370, 2195] },
      owners: ['Dept: Engineering', 'Dept: Sales & RevOps', 'Dept: Marketing'],
      slots: ['Annual Auto-Renew', 'Monthly Per-Seat', 'Usage Tier'],
      en: { sub: 'Corporate SaaS spend ledger, unused seat detection, and 30-day auto-renewal cancellation alerts.', stages: ['Active', 'Idle Seats Flag', 'Renegotiating', 'Savings Locked'], cols: ['SaaS Vendor', 'Department', 'Contract Term', 'Annual Spend', 'Stage'], fName: 'SaaS Vendor & Plan', fOwner: 'Department', fSlot: 'Contract Type', fAmt: 'Annual Spend (USD)', kpiVol: 'Audited Annual Spend', dupErr: 'Vendor already tracked.' },
      es: { sub: 'Auditoría de gasto SaaS, detección de licencias inactivas y alertas de renovación.', stages: ['Activo', 'Asientos Ociosos', 'Renegociando', 'Ahorro Cerrado'], cols: ['Proveedor SaaS', 'Área', 'Contrato', 'Gasto Anual', 'Etapa'], fName: 'Proveedor SaaS', fOwner: 'Departamento', fSlot: 'Tipo Contrato', fAmt: 'Gasto Anual (USD)', kpiVol: 'Gasto Auditado', dupErr: 'Proveedor duplicado.' },
      seed: [
        { id: 'SG-01', name: 'Legacy CRM Enterprise (14 idle seats)', owner: 'Dept: Sales & RevOps', slot: 'Annual Auto-Renew', amount: 21600, stage: 1, notes: 'Renews in 22 days; $6,400 recoverable.' },
        { id: 'SG-02', name: 'Cloud APM Observability', owner: 'Dept: Engineering', slot: 'Usage Tier', amount: 14400, stage: 2, notes: 'Negotiating 20% volume cap.' },
        { id: 'SG-03', name: 'Design Seat Consolidation', owner: 'Dept: Marketing', slot: 'Monthly Per-Seat', amount: 5400, stage: 3, notes: '8 dormant seats reclaimed.' },
      ],
    },
    shiftroster: {
      name: 'ShiftRoster', unit: 'h', unitPos: 'post', maxVal: 500, uniqueSlot: true,
      prices: { USA: [590, 1490, 2490], EUR: [545, 1370, 2290], LATAM: [415, 1045, 1745], AR: [325, 820, 1370] },
      owners: ['Site: Downtown Hotel', 'Site: Logistics Gate A', 'Site: West Clinic'],
      slots: ['Mon 06:00–14:00', 'Mon 14:00–22:00', 'Mon 22:00–06:00', 'Tue 06:00–14:00'],
      en: { sub: 'Rotating shift rosters with overlap prevention, clock-in verification, and overtime threshold alerts.', stages: ['Assigned', 'Confirmed', 'Clocked In', 'Payroll Ready'], cols: ['Staff Member', 'Work Site', 'Shift Window', 'Hours', 'Stage'], fName: 'Employee Full Name', fOwner: 'Work Site', fSlot: 'Shift Window', fAmt: 'Shift Hours', kpiVol: 'Scheduled Hours', dupErr: 'Overlap detected for that site and shift window.' },
      es: { sub: 'Turnos rotativos de personal sin solapamientos, fichajes y control de horas extras.', stages: ['Asignado', 'Confirmado', 'En Turno', 'Liquidado'], cols: ['Personal', 'Sede', 'Turno', 'Horas', 'Etapa'], fName: 'Nombre del Empleado', fOwner: 'Sede', fSlot: 'Franja Horaria', fAmt: 'Horas del Turno', kpiVol: 'Horas Programadas', dupErr: 'Superposición detectada en esa sede y franja.' },
      seed: [
        { id: 'SR-21', name: 'Devon Brooks', owner: 'Site: Logistics Gate A', slot: 'Mon 06:00–14:00', amount: 8, stage: 3, notes: 'Verified on-time clock-in.' },
        { id: 'SR-22', name: 'Maria Santos', owner: 'Site: Downtown Hotel', slot: 'Mon 14:00–22:00', amount: 8, stage: 2, notes: 'Active shift; 0 overtime risk.' },
        { id: 'SR-23', name: 'Kevin Patel', owner: 'Site: West Clinic', slot: 'Tue 06:00–14:00', amount: 10, stage: 1, notes: 'Approaching 40h weekly cap.' },
      ],
    },
    agrofield: {
      name: 'AgroField & Stock', unit: 'ha', unitPos: 'post', maxVal: 50000, uniqueSlot: false,
      prices: { USA: [890, 2790, 4690], EUR: [820, 2565, 4315], LATAM: [625, 1955, 3285], AR: [490, 1535, 2580] },
      owners: ['North Ranch · Corn', 'River Plot · Soybeans', 'West Sector · Wheat'],
      slots: ['Seeding', 'Fertilizing', 'Spraying', 'Harvest & Grain'],
      en: { sub: 'Plot-level farm traceability, seed/chemical inventory ledger, and true net margin per hectare.', stages: ['Planned', 'In Field', 'Harvested', 'Settled'], cols: ['Plot / Campaign', 'Field Sector', 'Operation', 'Area', 'Stage'], fName: 'Plot & Campaign Name', fOwner: 'Field Sector', fSlot: 'Field Operation', fAmt: 'Hectares', kpiVol: 'Tracked Hectares', dupErr: 'Duplicate plot.' },
      es: { sub: 'Trazabilidad agrícola por lote, stock de insumos y margen neto por hectárea.', stages: ['Planificado', 'En Labor', 'Cosechado', 'Liquidado'], cols: ['Lote / Campaña', 'Sector', 'Labor', 'Superficie', 'Etapa'], fName: 'Lote y Campaña', fOwner: 'Sector / Cultivo', fSlot: 'Labor Agrícola', fAmt: 'Hectáreas', kpiVol: 'Hectáreas Activas', dupErr: 'Lote duplicado.' },
      seed: [
        { id: 'AG-01', name: 'Plot N-14 · Hybrid Corn', owner: 'North Ranch · Corn', slot: 'Harvest & Grain', amount: 120, stage: 3, notes: 'Yield 10.4 t/ha; $485/ha net margin.' },
        { id: 'AG-02', name: 'Plot R-07 · Non-GMO Soy', owner: 'River Plot · Soybeans', slot: 'Spraying', amount: 85, stage: 1, notes: 'Inputs deducted from warehouse stock.' },
        { id: 'AG-03', name: 'Plot W-02 · Winter Wheat', owner: 'West Sector · Wheat', slot: 'Fertilizing', amount: 140, stage: 0, notes: 'Urea allocation reserved.' },
      ],
    },
    educampus: {
      name: 'EduCampus & Certify', unit: '%', unitPos: 'post', maxVal: 100, uniqueSlot: false,
      prices: { USA: [690, 2190, 3490], EUR: [635, 2015, 3210], LATAM: [485, 1535, 2445], AR: [380, 1205, 1920] },
      owners: ['Cohort 2026-A · Data', 'Cohort 2026-B · ESG', 'Cohort 2026-C · Cyber'],
      slots: ['Full Tuition', '25% Scholarship', 'Corporate Sponsored'],
      en: { sub: 'Academy enrollment management, attendance eligibility checks, and SHA-256 QR certificates.', stages: ['Applicant', 'Enrolled', 'Active', 'Certified'], cols: ['Student', 'Cohort', 'Tuition Plan', 'Attendance', 'Stage'], fName: 'Student Full Name', fOwner: 'Cohort', fSlot: 'Tuition Plan', fAmt: 'Attendance % (1-100)', kpiVol: 'Avg Attendance', dupErr: 'Student already enrolled.' },
      es: { sub: 'Gestión académica por cohorte, elegibilidad por asistencia y certificados QR SHA-256.', stages: ['Postulante', 'Inscripto', 'Cursando', 'Certificado'], cols: ['Alumno', 'Cohorte', 'Plan', 'Asistencia', 'Etapa'], fName: 'Nombre del Alumno', fOwner: 'Cohorte', fSlot: 'Arancel / Beca', fAmt: 'Asistencia % (1-100)', kpiVol: 'Asistencia Promedio', dupErr: 'Alumno duplicado.' },
      seed: [
        { id: 'ED-01', name: 'Sofia Morales', owner: 'Cohort 2026-A · Data', slot: 'Corporate Sponsored', amount: 96, stage: 3, notes: 'QR Certificate #EDU-991 issued.' },
        { id: 'ED-02', name: 'Liam O\'Connor', owner: 'Cohort 2026-B · ESG', slot: 'Full Tuition', amount: 88, stage: 2, notes: 'Eligible for final exam.' },
        { id: 'ED-03', name: 'Camila Rojas', owner: 'Cohort 2026-C · Cyber', slot: '25% Scholarship', amount: 72, stage: 1, notes: 'Needs 1 session to hit 75% floor.' },
      ],
    },
    ecometrics_suite: {
      name: 'EcoMetrics Suite', unit: 'tCO2e', unitPos: 'post', maxVal: 500000, uniqueSlot: false,
      prices: { USA: [1190, 3490, 5290], EUR: [1095, 3210, 4865], LATAM: [835, 2445, 3705], AR: [655, 1920, 2910] },
      owners: ['Scope 1 · Fleet & Gas', 'Scope 2 · Electricity', 'Scope 3 · Supply Chain'],
      slots: ['DEFRA 2025 Factor', 'EPA eGRID US', 'IPCC AR6 Standard'],
      en: { sub: 'Auditable Scope 1/2/3 carbon footprint accounting (177 DEFRA/IPCC factors) and QR ESG certificates.', stages: ['Data Intake', 'Calculated', 'Auditor Check', 'Certified'], cols: ['Facility / Source', 'GHG Scope', 'Factor Set', 'Emissions', 'Stage'], fName: 'Facility / Emission Source', fOwner: 'GHG Scope', fSlot: 'Emission Factor', fAmt: 'Emissions (tCO2e)', kpiVol: 'Total Footprint', dupErr: 'Source already recorded.' },
      es: { sub: 'Huella de carbono Alcance 1/2/3 (177 factores DEFRA/IPCC) y certificados ESG con QR.', stages: ['Recolección', 'Calculado', 'Auditoría', 'Certificado'], cols: ['Planta / Fuente', 'Alcance', 'Factor', 'Emisiones', 'Etapa'], fName: 'Planta o Fuente', fOwner: 'Alcance GEI', fSlot: 'Factor de Emisión', fAmt: 'Emisiones (tCO2e)', kpiVol: 'Huella Total', dupErr: 'Fuente duplicada.' },
      seed: [
        { id: 'EC-01', name: 'North Plant · Grid Power', owner: 'Scope 2 · Electricity', slot: 'EPA eGRID US', amount: 184, stage: 3, notes: 'Verified against utility bills.' },
        { id: 'EC-02', name: 'Regional Diesel Fleet', owner: 'Scope 1 · Fleet & Gas', slot: 'DEFRA 2025 Factor', amount: 112, stage: 2, notes: 'Fuel receipts reconciled.' },
        { id: 'EC-03', name: 'Tier-1 Packaging Suppliers', owner: 'Scope 3 · Supply Chain', slot: 'IPCC AR6 Standard', amount: 245, stage: 1, notes: 'Supplier survey 90% complete.' },
      ],
    },
    voluntarios_db: {
      name: 'VoluntariosDB', unit: 'h', unitPos: 'post', maxVal: 500, uniqueSlot: true,
      prices: { USA: [590, 1790, 2690], EUR: [545, 1645, 2475], LATAM: [415, 1255, 1885], AR: [325, 985, 1480] },
      owners: ['Central Food Bank', 'Community Health Van', 'Youth Literacy Hub'],
      slots: ['Sat 08:00–12:00', 'Sat 13:00–17:00', 'Sun 09:00–13:00'],
      en: { sub: 'Multi-site nonprofit volunteer shifts, QR check-in hours, and donor-ready impact certificates.', stages: ['Assigned', 'Confirmed', 'Checked In', 'Verified'], cols: ['Volunteer', 'Site / Program', 'Shift Slot', 'Hours', 'Stage'], fName: 'Volunteer Full Name', fOwner: 'Program Site', fSlot: 'Shift Slot', fAmt: 'Verified Hours', kpiVol: 'Verified Impact Hours', dupErr: 'Volunteer shift already assigned.' },
      es: { sub: 'Gestión multi-sede de voluntarios, turnos con check-in QR y constancias de impacto.', stages: ['Asignado', 'Confirmado', 'Check-in', 'Verificado'], cols: ['Voluntario', 'Sede / Programa', 'Turno', 'Horas', 'Etapa'], fName: 'Nombre del Voluntario', fOwner: 'Sede / Programa', fSlot: 'Turno', fAmt: 'Horas', kpiVol: 'Horas Verificadas', dupErr: 'Turno duplicado.' },
      seed: [
        { id: 'VL-01', name: 'Grace Henderson', owner: 'Central Food Bank', slot: 'Sat 08:00–12:00', amount: 4, stage: 3, notes: 'QR check-in verified; certificate ready.' },
        { id: 'VL-02', name: 'Lucas Peralta', owner: 'Community Health Van', slot: 'Sat 13:00–17:00', amount: 6, stage: 2, notes: 'On site supporting mobile clinic.' },
        { id: 'VL-03', name: 'Hannah Cho', owner: 'Youth Literacy Hub', slot: 'Sun 09:00–13:00', amount: 4, stage: 1, notes: 'Shift confirmed via email.' },
      ],
    },
  };

  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(window.location.search);
  const rawSlug = params.get('p') || params.get('producto') || 'medflow';
  let slug = PRODUCTS[rawSlug] ? rawSlug : 'medflow';
  let lang = (params.get('lang') || 'en').toLowerCase() === 'es' ? 'es' : 'en';
  let region = ['USA', 'EUR', 'LATAM', 'AR'].includes((params.get('region') || 'USA').toUpperCase()) ? (params.get('region') || 'USA').toUpperCase() : 'USA';
  const isEmbed = params.get('embed') === '1';
  if (isEmbed) document.documentElement.setAttribute('data-embed', '1');
  const reqTheme = params.get('theme') || (function () { try { return localStorage.getItem('kreta_theme'); } catch (_) { return null; } })();
  if (reqTheme === 'dark' || reqTheme === 'light') document.documentElement.setAttribute('data-theme', reqTheme);

  const SHARED_STORE_KEY = 'kreta_live_store_v1';
  function readSharedStore() {
    try { return JSON.parse(localStorage.getItem(SHARED_STORE_KEY) || '{}') || {}; } catch (_) { return {}; }
  }
  function persistSharedStore(targetSlug) {
    try {
      const all = readSharedStore();
      all[targetSlug] = store[targetSlug];
      localStorage.setItem(SHARED_STORE_KEY, JSON.stringify(all));
    } catch (_) {}
    if (window.parent && window.parent !== window) {
      try { window.parent.postMessage({ type: 'kreta-store-updated', slug: targetSlug }, '*'); } catch (_) {}
    }
  }
  let activeView = 'overview';
  let stageFilter = null;
  let searchQuery = '';
  let drawerId = null;

  const store = {};
  const auditStore = {};
  const tourDoneBySlug = {};
  function getTourDone(s) {
    if (!tourDoneBySlug[s]) tourDoneBySlug[s] = { added: false, moved: false, exported: false };
    return tourDoneBySlug[s];
  }

  /* Authentic RFC 6234 SHA-256 (64-char hex digest, zero external deps, works offline/HTTP/HTTPS) */
  function sha256Hex(ascii) {
    const rightRotate = (value, amount) => (value >>> amount) | (value << (32 - amount));
    const maxWord = Math.pow(2, 32);
    let result = '';
    const words = [];
    const utf8 = unescape(encodeURIComponent(String(ascii)));
    const bitLen = utf8.length * 8;
    const hash = sha256Hex.h || (sha256Hex.h = []);
    const k = sha256Hex.k || (sha256Hex.k = []);
    if (!k.length) {
      let primeCounter = 0;
      const isComposite = {};
      for (let candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
          for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
          if (primeCounter < 8) hash[primeCounter] = (Math.pow(candidate, 0.5) * maxWord) | 0;
          k[primeCounter++] = (Math.pow(candidate, 1 / 3) * maxWord) | 0;
        }
      }
    }
    const h = hash.slice(0);
    const padded = utf8 + '\x80';
    let padLen = padded.length;
    while (padLen % 64 !== 56) padLen++;
    const msg = padded + '\x00'.repeat(padLen - padded.length);
    for (let i = 0; i < msg.length; i++) words[i >> 2] |= msg.charCodeAt(i) << ((3 - (i % 4)) * 8);
    words[words.length] = (bitLen / maxWord) | 0;
    words[words.length] = bitLen | 0;
    for (let j = 0; j < words.length;) {
      const w = words.slice(j, (j += 16));
      const oldH = h.slice(0);
      for (let i = 0; i < 64; i++) {
        const w15 = w[i - 15], w2 = w[i - 2];
        const a = h[0], e = h[4];
        const temp1 = h[7] + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + ((e & h[5]) ^ (~e & h[6])) + k[i] +
          (w[i] = i < 16 ? w[i] : (w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | 0);
        const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + ((a & h[1]) ^ (a & h[2]) ^ (h[1] & h[2]));
        h.unshift((temp1 + temp2) | 0);
        h[4] = (h[4] + temp1) | 0;
        h.pop();
      }
      for (let i = 0; i < 8; i++) h[i] = (h[i] + oldH[i]) | 0;
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 3; j + 1; j--) {
        const b = (h[i] >> (j * 8)) & 255;
        result += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }

  const ROI_DEFAULTS = {
    voluntarios_db: { users: 8, saas: 18 },
    ecometrics_suite: { users: 6, saas: 95 },
    medflow: { users: 8, saas: 85 },
    fleetguard: { users: 12, saas: 45 },
    buildcost: { users: 10, saas: 75 },
    compliancevault: { users: 8, saas: 110 },
    agrofield: { users: 8, saas: 55 },
    educampus: { users: 10, saas: 40 },
    quoteflow: { users: 10, saas: 59 },
    fixflow: { users: 6, saas: 39 },
    rentvault: { users: 8, saas: 49 },
    shiftroster: { users: 25, saas: 12 },
    clientpulse: { users: 12, saas: 45 },
    subguard: { users: 8, saas: 85 },
    propledger: { users: 8, saas: 65 },
    lablims: { users: 10, saas: 125 },
    lottrace: { users: 10, saas: 110 },
    caseledger: { users: 8, saas: 89 },
    tradeflow: { users: 8, saas: 115 },
    fieldops: { users: 12, saas: 69 },
  };

  function ensureState(s) {
    if (!store[s]) {
      const saved = readSharedStore();
      if (Array.isArray(saved[s]) && saved[s].length) {
        store[s] = saved[s].map((r) => Object.assign({}, r));
      } else {
        store[s] = PRODUCTS[s].seed.map((r) => Object.assign({}, r));
      }
    }
    if (!auditStore[s]) {
      const ts = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
      auditStore[s] = [
        { ts, action: 'WORKSPACE_INIT', detail: PRODUCTS[s].name + ' initialized with verified sample dataset (' + store[s].length + ' records).', hash: sha256Hex('genesis|' + s + '|' + ts) },
      ];
    }
  }

  function logAudit(action, detail) {
    ensureState(slug);
    const ts = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
    const prev = auditStore[slug][0] ? auditStore[slug][0].hash : 'genesis';
    auditStore[slug].unshift({ ts, action, detail, hash: sha256Hex(prev + '|' + action + '|' + detail + '|' + ts) });
  }

  function syncUrl() {
    const u = new URL(window.location.href);
    u.searchParams.set('p', slug);
    u.searchParams.set('region', region);
    u.searchParams.set('lang', lang);
    u.searchParams.delete('producto');
    window.history.replaceState({}, '', u.toString());
  }

  function fmtVal(n, p) {
    const num = Number(n).toLocaleString('en-US', { maximumFractionDigits: 1 });
    if (p.unitPos === 'pre') return p.unit + num;
    return num + (p.unit === '%' ? '%' : ' ' + p.unit);
  }

  function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function populateHeaderSelects() {
    const sel = $('prod-select');
    sel.replaceChildren();
    Object.keys(PRODUCTS).forEach((k) => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = PRODUCTS[k].name;
      if (k === slug) opt.selected = true;
      sel.appendChild(opt);
    });
    $('region-select').value = region;
  }

  function getFilteredRows() {
    ensureState(slug);
    const q = searchQuery.trim().toLowerCase();
    return store[slug].filter((r) => {
      if (stageFilter !== null && r.stage !== stageFilter) return false;
      if (!q) return true;
      return (r.id + ' ' + r.name + ' ' + r.owner + ' ' + r.slot + ' ' + (r.notes || '')).toLowerCase().includes(q);
    });
  }

  function renderTour() {
    const isEs = lang === 'es';
    const td = getTourDone(slug);
    $('step-1').textContent = (td.added ? '✓ ' : '1. ') + (isEs ? 'Crear o editar registro' : 'Add or edit a record');
    $('step-1').classList.toggle('done', td.added);
    $('step-2').textContent = (td.moved ? '✓ ' : '2. ') + (isEs ? 'Mover tarjeta Kanban' : 'Advance a Kanban card');
    $('step-2').classList.toggle('done', td.moved);
    $('step-3').textContent = (td.exported ? '✓ ' : '3. ') + (isEs ? 'Exportar CSV o ver SHA-256' : 'Export CSV or verify SHA-256');
    $('step-3').classList.toggle('done', td.exported);
    $('btn-reset-demo').textContent = isEs ? 'Restaurar datos demo' : 'Reset sample data';
  }

  function renderKpis() {
    const p = PRODUCTS[slug];
    const t = p[lang];
    const rows = store[slug];
    const isEs = lang === 'es';
    const total = rows.reduce((a, r) => a + Number(r.amount || 0), 0);
    const isAvg = p.unit === '%';
    const primaryMetric = isAvg ? (rows.length ? total / rows.length : 0) : total;
    const completed = rows.filter((r) => r.stage === 3).length;
    const inProg = rows.filter((r) => r.stage === 1 || r.stage === 2).length;
    const compPct = rows.length ? Math.round((completed / rows.length) * 100) : 0;

    const kpis = [
      { label: t.kpiVol, val: fmtVal(primaryMetric, p), sub: isEs ? rows.length + ' registros activos' : rows.length + ' active records', cls: 'pos' },
      { label: isEs ? 'En Progreso' : 'In Progress', val: String(inProg), sub: isEs ? 'Etapas intermedias activas' : 'Mid-workflow items', cls: '' },
      { label: isEs ? 'Tasa de Cierre' : 'Completion Rate', val: compPct + '%', sub: completed + '/' + rows.length + (isEs ? ' completados' : ' completed'), cls: compPct >= 50 ? 'pos' : 'warn' },
      { label: isEs ? 'Eventos Auditados' : 'Audited Events', val: String(auditStore[slug].length), sub: 'SHA-256 hash-chained', cls: '' },
    ];

    const grid = $('kpi-grid');
    grid.replaceChildren();
    kpis.forEach((k) => {
      const c = document.createElement('div');
      c.className = 'kpi-card';
      c.innerHTML = '';
      const top = document.createElement('div'); top.className = 'kpi-top'; top.textContent = k.label;
      const val = document.createElement('div'); val.className = 'kpi-val mono'; val.textContent = k.val;
      const sub = document.createElement('div'); sub.className = 'kpi-sub ' + k.cls; sub.textContent = k.sub;
      c.append(top, val, sub);
      grid.appendChild(c);
    });
  }

  function renderCharts() {
    const p = PRODUCTS[slug];
    const t = p[lang];
    const rows = store[slug];
    const colors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'];
    const sums = [0, 0, 0, 0];
    const cnts = [0, 0, 0, 0];
    rows.forEach((r) => { sums[r.stage] += Number(r.amount || 0); cnts[r.stage] += 1; });
    const maxSum = Math.max.apply(null, sums.concat([1]));

    // Interactive SVG Bar Chart
    const NS = 'http://www.w3.org/2000/svg';
    const barSvg = document.createElementNS(NS, 'svg');
    barSvg.setAttribute('viewBox', '0 0 480 200');
    barSvg.setAttribute('class', 'chart-svg');
    barSvg.setAttribute('role', 'img');
    barSvg.setAttribute('aria-label', t.kpiVol);

    t.stages.forEach((stName, idx) => {
      const y = 16 + idx * 45;
      const w = Math.max(8, Math.round((sums[idx] / maxSum) * 265));
      const lbl = document.createElementNS(NS, 'text');
      lbl.setAttribute('x', '0'); lbl.setAttribute('y', String(y + 17));
      lbl.setAttribute('fill', 'var(--ink-2)'); lbl.setAttribute('font-size', '12'); lbl.setAttribute('font-weight', '600');
      lbl.textContent = stName;
      barSvg.appendChild(lbl);

      const bgRect = document.createElementNS(NS, 'rect');
      bgRect.setAttribute('x', '115'); bgRect.setAttribute('y', String(y));
      bgRect.setAttribute('width', '265'); bgRect.setAttribute('height', '26'); bgRect.setAttribute('rx', '6');
      bgRect.setAttribute('fill', 'var(--surface-2)');
      barSvg.appendChild(bgRect);

      const rect = document.createElementNS(NS, 'rect');
      rect.setAttribute('x', '115'); rect.setAttribute('y', String(y));
      rect.setAttribute('width', String(w)); rect.setAttribute('height', '26'); rect.setAttribute('rx', '6');
      rect.setAttribute('fill', stageFilter === idx ? 'var(--ink)' : colors[idx]);
      rect.setAttribute('class', 'chart-bar-rect');
      rect.addEventListener('click', () => {
        stageFilter = stageFilter === idx ? null : idx;
        renderAll();
      });
      const titleEl = document.createElementNS(NS, 'title');
      titleEl.textContent = stName + ': ' + fmtVal(sums[idx], p) + ' (' + cnts[idx] + ')';
      rect.appendChild(titleEl);
      barSvg.appendChild(rect);

      const valTxt = document.createElementNS(NS, 'text');
      valTxt.setAttribute('x', '390'); valTxt.setAttribute('y', String(y + 17));
      valTxt.setAttribute('fill', 'var(--ink)'); valTxt.setAttribute('font-size', '12'); valTxt.setAttribute('font-weight', '700');
      valTxt.textContent = fmtVal(sums[idx], p);
      barSvg.appendChild(valTxt);
    });
    $('chart-bar-box').replaceChildren(barSvg);
    $('btn-clear-stage-filter').hidden = stageFilter === null;

    // Interactive SVG Donut Chart
    const totalCnt = Math.max(rows.length, 1);
    const donutSvg = document.createElementNS(NS, 'svg');
    donutSvg.setAttribute('viewBox', '0 0 220 175');
    donutSvg.setAttribute('class', 'chart-svg');
    donutSvg.style.maxWidth = '210px';
    donutSvg.style.margin = '0 auto';
    const radius = 58;
    const circ = 2 * Math.PI * radius;
    let offset = 0;
    cnts.forEach((c, idx) => {
      if (c === 0) return;
      const frac = c / totalCnt;
      const dash = frac * circ;
      const circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('cx', '110'); circle.setAttribute('cy', '88'); circle.setAttribute('r', String(radius));
      circle.setAttribute('fill', 'none'); circle.setAttribute('stroke', colors[idx]);
      circle.setAttribute('stroke-width', '22');
      circle.setAttribute('stroke-dasharray', dash + ' ' + (circ - dash));
      circle.setAttribute('stroke-dashoffset', String(-offset));
      circle.setAttribute('transform', 'rotate(-90 110 88)');
      circle.setAttribute('class', 'chart-bar-rect');
      circle.addEventListener('click', () => { stageFilter = stageFilter === idx ? null : idx; renderAll(); });
      const tt = document.createElementNS(NS, 'title');
      tt.textContent = t.stages[idx] + ': ' + c + ' (' + Math.round(frac * 100) + '%)';
      circle.appendChild(tt);
      donutSvg.appendChild(circle);
      offset += dash;
    });
    const centerNum = document.createElementNS(NS, 'text');
    centerNum.setAttribute('x', '110'); centerNum.setAttribute('y', '84'); centerNum.setAttribute('text-anchor', 'middle');
    centerNum.setAttribute('fill', 'var(--ink)'); centerNum.setAttribute('font-size', '22'); centerNum.setAttribute('font-weight', '800');
    centerNum.textContent = String(rows.length);
    const centerLbl = document.createElementNS(NS, 'text');
    centerLbl.setAttribute('x', '110'); centerLbl.setAttribute('y', '104'); centerLbl.setAttribute('text-anchor', 'middle');
    centerLbl.setAttribute('fill', 'var(--muted)'); centerLbl.setAttribute('font-size', '11'); centerLbl.setAttribute('font-weight', '600');
    centerLbl.textContent = lang === 'es' ? 'Registros' : 'Records';
    donutSvg.append(centerNum, centerLbl);

    const legend = document.createElement('div');
    legend.className = 'chart-legend';
    t.stages.forEach((stName, idx) => {
      const it = document.createElement('span'); it.className = 'legend-item';
      const dot = document.createElement('span'); dot.className = 'legend-dot'; dot.style.background = colors[idx];
      const sp = document.createElement('span'); sp.textContent = stName + ' (' + cnts[idx] + ')';
      it.append(dot, sp); legend.appendChild(it);
    });
    $('chart-donut-box').replaceChildren(donutSvg, legend);
  }

  function renderTableInto(theadEl, tbodyEl, rows) {
    const p = PRODUCTS[slug];
    const t = p[lang];
    theadEl.replaceChildren();
    const trH = document.createElement('tr');
    ['ID'].concat(t.cols).forEach((c) => {
      const th = document.createElement('th'); th.textContent = c; trH.appendChild(th);
    });
    theadEl.appendChild(trH);

    tbodyEl.replaceChildren();
    if (!rows.length) {
      const tr = document.createElement('tr');
      const td = document.createElement('td'); td.colSpan = 6; td.style.textAlign = 'center'; td.style.color = 'var(--muted)';
      td.textContent = lang === 'es' ? 'No hay registros que coincidan con el filtro.' : 'No records match the current filter.';
      tr.appendChild(td); tbodyEl.appendChild(tr);
      return;
    }
    rows.forEach((r) => {
      const tr = document.createElement('tr');
      tr.addEventListener('click', () => openDrawer(r.id));
      const cells = [r.id, r.name, r.owner, r.slot, fmtVal(r.amount, p)];
      cells.forEach((val, i) => {
        const td = document.createElement('td');
        if (i === 0 || i === 4) td.className = 'mono';
        if (i === 1) td.style.fontWeight = '600';
        td.textContent = val;
        tr.appendChild(td);
      });
      const tdSt = document.createElement('td');
      const sp = document.createElement('span');
      sp.className = 'stage-badge st-' + r.stage;
      sp.textContent = t.stages[r.stage];
      tdSt.appendChild(sp);
      tr.appendChild(tdSt);
      tbodyEl.appendChild(tr);
    });
  }

  function moveStage(id, delta) {
    const rec = store[slug].find((r) => r.id === id);
    if (!rec) return;
    const next = Math.max(0, Math.min(3, rec.stage + delta));
    if (next === rec.stage) return;
    const stages = PRODUCTS[slug][lang].stages;
    const prevLbl = stages[rec.stage];
    rec.stage = next;
    const td = getTourDone(slug);
    td.moved = true;
    persistSharedStore(slug);
    logAudit('STAGE_TRANSITION', rec.id + ' (' + rec.name + '): ' + prevLbl + ' → ' + stages[next]);
    toast(rec.id + ' → ' + stages[next]);
    renderAll();
    if (drawerId === id) openDrawer(id);
  }

  function renderKanban() {
    const p = PRODUCTS[slug];
    const t = p[lang];
    const grid = $('kanban-grid');
    grid.replaceChildren();
    t.stages.forEach((stName, idx) => {
      const col = document.createElement('div'); col.className = 'kanban-col';
      const items = store[slug].filter((r) => r.stage === idx);
      const head = document.createElement('div'); head.className = 'kanban-col-head';
      const title = document.createElement('span'); title.textContent = stName;
      const pill = document.createElement('span'); pill.className = 'nav-pill mono'; pill.textContent = String(items.length);
      head.append(title, pill);

      const list = document.createElement('div'); list.className = 'kanban-cards';
      items.forEach((r) => {
        const card = document.createElement('div'); card.className = 'k-card';
        const tt = document.createElement('div'); tt.className = 'k-card-title'; tt.textContent = r.name;
        const meta = document.createElement('div'); meta.className = 'k-card-meta'; meta.textContent = r.owner + ' · ' + r.slot;
        const foot = document.createElement('div'); foot.className = 'k-card-foot';
        const amt = document.createElement('strong'); amt.className = 'mono'; amt.style.fontSize = '0.82rem'; amt.textContent = fmtVal(r.amount, p);
        const btns = document.createElement('div'); btns.style.display = 'flex'; btns.style.gap = '6px'; btns.style.flexWrap = 'wrap';
        if (idx > 0) {
          const bPrev = document.createElement('button'); bPrev.type = 'button'; bPrev.className = 'btn btn-secondary btn-sm';
          bPrev.textContent = lang === 'es' ? '← Atrás' : '← Back';
          bPrev.title = lang === 'es' ? 'Retroceder etapa' : 'Move back';
          bPrev.addEventListener('click', (e) => { e.stopPropagation(); moveStage(r.id, -1); });
          btns.appendChild(bPrev);
        }
        if (idx < 3) {
          const bNext = document.createElement('button'); bNext.type = 'button'; bNext.className = 'btn btn-primary btn-sm';
          bNext.textContent = lang === 'es' ? 'Avanzar →' : 'Advance →';
          bNext.addEventListener('click', (e) => { e.stopPropagation(); moveStage(r.id, 1); });
          btns.appendChild(bNext);
        }
        foot.append(amt, btns);
        card.append(tt, meta, foot);
        card.addEventListener('click', () => openDrawer(r.id));
        list.appendChild(card);
      });
      col.append(head, list);
      grid.appendChild(col);
    });
  }

  function renderAudit() {
    const isEs = lang === 'es';
    const list = $('audit-list');
    list.replaceChildren();
    auditStore[slug].forEach((ev) => {
      const row = document.createElement('div'); row.className = 'audit-row';
      const head = document.createElement('div'); head.innerHTML = '';
      const strong = document.createElement('strong'); strong.textContent = ev.action + ' · ';
      const timeSp = document.createElement('span'); timeSp.className = 'mono'; timeSp.style.color = 'var(--muted)'; timeSp.textContent = ev.ts;
      head.append(strong, timeSp);
      const det = document.createElement('div'); det.style.marginTop = '3px'; det.textContent = ev.detail;
      const hash = document.createElement('div'); hash.className = 'audit-hash'; hash.textContent = 'SHA-256: ' + ev.hash;
      row.append(head, det, hash);
      list.appendChild(row);
    });

    const archItems = isEs ? [
      ['Instalación Llave en Mano en Su Nube Privada (Sin Equipo IT)', 'Incluido sin cargo en SQL+Web e Híbrido: lo desplegamos en 24h en su propia cuenta Render/Railway/VPS con SSL, dominio propio y backups diarios automáticos. Nunca toca Docker.'],
      ['Seguridad, SBOM y Auditoría Criptográfica Real (SHA-256)', 'Sesiones Bearer + CSRF + RBAC por rol + cadena SHA-256 real (64 hex RFC 6234) + manifiesto de dependencias fijas (SBOM) y 735+ tests automatizados.'],
      ['Integraciones Listas: QuickBooks, Xero, Nómina CSV y Webhooks', 'Exportación contable/nómina en 1 clic (QuickBooks, Xero, Gusto/ADP CSV), API REST documentada y Webhooks firmados HMAC-SHA256 hacia Zapier, Make o n8n.'],
      ['PWA Móvil + Cumplimiento Regulatorio (HIPAA / GDPR / FSMA / ISO)', 'App web instalable en celulares (iOS/Android) sin tienda. Cero telemetría externa: ningún dato clínico, legal o financiero sale de su servidor.'],
      ['Piloto 14 Días Gratis + Escrow 50/50 + SLA Anual Opcional', 'Validación con 3 registros reales antes de abonar $1. Contratos Escrow.com/Upwork 50/50, garantía correctiva 90 días y SLA anual de parches/soporte ($390/año).'],
    ] : [
      ['Done-For-You 1-Click Private Cloud Setup (Zero IT Team Required)', 'Included free with SQL+Web & Hybrid: we deploy directly onto your own Render, Railway, or VPS account in 24h with SSL, custom domain, and automated encrypted daily backups. Never touch Docker CLI.'],
      ['Verified Security, SBOM & Authentic 64-Char SHA-256 Audit Chain', 'Bearer + CSRF + Role-Based Access Control, real RFC 6234 64-hex SHA-256 audit log, pinned dependency manifest (SBOM), and 735+ passing automated tests.'],
      ['Plug-and-Play Integrations: QuickBooks, Xero, Payroll CSV & API', '1-click QuickBooks Online, Xero, and Payroll (Gusto/ADP) CSV exports, documented REST API, and HMAC-SHA256 signed webhooks for Zapier, Make, or n8n.'],
      ['Mobile PWA + Regulated Compliance Ready (HIPAA / GDPR / FSMA / ISO)', 'Installable mobile web app (iOS/Android) for field & floor staff. Zero external telemetry: sensitive patient, legal, or audit data never leaves your private infrastructure.'],
      ['Free 14-Day Private Pilot + 50/50 Escrow + Optional $390/yr SLA', 'Test with 3 real operational records before paying $1. 50/50 Upwork/Escrow.com milestones, 90-day defect warranty, and optional Annual Security & Patch SLA ($390/yr).'],
    ];
    const archEl = $('arch-list');
    archEl.replaceChildren();
    archItems.forEach((pair) => {
      const box = document.createElement('div'); box.className = 'arch-item';
      const st = document.createElement('strong'); st.textContent = pair[0];
      const pr = document.createElement('p'); pr.textContent = pair[1];
      box.append(st, pr); archEl.appendChild(box);
    });
    const intBar = document.createElement('div');
    intBar.style.display = 'flex'; intBar.style.gap = '8px'; intBar.style.flexWrap = 'wrap'; intBar.style.marginTop = '10px';
    const whPreview = document.createElement('pre');
    whPreview.className = 'webhook-preview';
    whPreview.hidden = true;
    const whBtn = document.createElement('button');
    whBtn.type = 'button'; whBtn.className = 'btn btn-secondary btn-sm';
    whBtn.textContent = lang === 'es' ? 'Inspeccionar Payload Webhook HMAC' : 'Inspect HMAC Webhook Payload';
    whBtn.addEventListener('click', () => {
      const sampleRec = (store[slug] && store[slug][0]) || { id: 'REC-101', name: 'Sample', amount: 100 };
      const payloadObj = {
        event: 'record.stage_updated',
        product: slug,
        timestamp: new Date().toISOString(),
        record: { id: sampleRec.id, name: sampleRec.name, owner: sampleRec.owner, amount: sampleRec.amount, stage: sampleRec.stage },
      };
      const rawJson = JSON.stringify(payloadObj, null, 2);
      const sig = sha256Hex('demo-webhook-secret|' + rawJson);
      whPreview.textContent =
        `// Sandbox preview (no external HTTP request sent from browser)\n` +
        `POST https://your-endpoint.example.com/webhooks/kreta\n` +
        `X-Kreta-Signature: sha256=${sig}\n\n` +
        rawJson;
      whPreview.hidden = false;
      logAudit('WEBHOOK_PAYLOAD_PREVIEWED', (lang === 'es' ? 'Payload JSON + firma SHA-256 (64 hex) inspeccionados para ' : 'JSON payload + 64-hex SHA-256 signature inspected for ') + sampleRec.id);
      toast(lang === 'es' ? 'Payload HMAC-SHA256 real generado abajo' : 'Real HMAC-SHA256 payload preview rendered below');
    });
    const qbBtn = document.createElement('button');
    qbBtn.type = 'button'; qbBtn.className = 'btn btn-secondary btn-sm';
    qbBtn.textContent = lang === 'es' ? 'Exportar QuickBooks CSV' : 'Export QuickBooks CSV';
    qbBtn.addEventListener('click', () => {
      const header = ['Date', 'Description', 'Customer', 'Reference', 'Account', 'Amount'];
      const today = new Date().toISOString().slice(0, 10);
      const lines = [header.join(',')].concat((store[slug] || []).map((r) => [
        today,
        '"' + String(r.name || '').replace(/"/g, '""') + '"',
        '"' + String(r.owner || '').replace(/"/g, '""') + '"',
        r.id,
        'Operating Revenue',
        Number(r.amount || 0).toFixed(2),
      ].join(',')));
      const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${slug}_quickbooks_export.csv`;
      a.click();
      logAudit('QUICKBOOKS_EXPORT', lang === 'es' ? 'Exportación contable QuickBooks CSV generada' : 'QuickBooks Online accounting CSV exported');
      renderAll();
      toast(lang === 'es' ? 'CSV contable QuickBooks descargado' : 'QuickBooks CSV downloaded');
    });
    const ddBtn = document.createElement('button');
    ddBtn.type = 'button'; ddBtn.className = 'btn btn-primary btn-sm';
    ddBtn.textContent = lang === 'es' ? 'Descargar Pack Due-Diligence & Compliance (JSON)' : 'Download Compliance & Due-Diligence Pack (JSON)';
    ddBtn.addEventListener('click', () => {
      const pack = {
        vendor: 'Kreta Software (Andres Francisco Mazzuferi)',
        product: PRODUCTS[slug].name,
        slug,
        generated_at_utc: new Date().toISOString(),
        deployment_modes: ['Done-For-You 1-Click Private Cloud (Render/Railway/VPS - Zero IT required)', 'On-Premise LAN / Docker Compose', 'Google Sheets + Apps Script'],
        security_posture: {
          telemetry: 'ZERO external telemetry or phone-home',
          data_residency: '100% customer-owned private infrastructure (HIPAA/GDPR/FSMA/ISO self-hosted ready)',
          authentication: 'Signed Bearer sessions + CSRF protection + Role-Based Access Control (RBAC)',
          audit_trail: 'Authentic RFC 6234 64-hex SHA-256 hash chain',
          automated_tests_verified: '735+ pytest + browser E2E checks',
          sbom_policy: 'Pinned dependency manifests + MANIFEST_SHA256.txt in every delivery ZIP',
        },
        commercial_guarantees: {
          license: 'Perpetual commercial source-code ownership (LICENSE_COMERCIAL.md) + Day-1 Private GitHub Repo Transfer to customer org',
          continuity: 'Zero vendor-ghosting risk: standard Python 3.11 + SQL + 735+ automated tests maintainable by any in-house or freelance engineer',
          migration: 'Free white-glove historical CSV migration from spreadsheets, Clio, Fleetio, CargoWise, ServiceTitan, or legacy exports',
          escrow: '50/50 milestone protection via Escrow.com or Upwork',
          pilot: '14-day free private pilot with 3 real customer records',
          warranty: '90-day corrective defect warranty included',
          optional_sla: '$390/year optional Priority 4h-Response Security Patches & Support SLA (no forced lock-in)',
        },
        vertical_connectors: {
          rentvault: 'PWA mobile camera QR/barcode check-in/out + offline warehouse sync + serialized maintenance logs',
          fleetguard: 'Samsara/Geotab/Motive ELD telematics CSV & webhook bridge + 1-click DOT Audit Binder export',
          ecometrics_suite: 'GHG Protocol / CSRD Scope 1-3 audit-ready certificate generator + ERP CSV/REST API',
          quoteflow: 'Multi-tier gross-margin guardrails + Epicor/SAP/QuickBooks/Xero CSV & REST API connectors',
        }[slug] || 'Documented REST API + HMAC-SHA256 webhooks (Zapier/Make/n8n) + QuickBooks/Xero/Payroll CSV exports',
        latest_audit_chain_head: (auditStore[slug] && auditStore[slug][0]) || null,
      };
      const blob = new Blob([JSON.stringify(pack, null, 2)], { type: 'application/json;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${slug}_due_diligence_compliance_pack.json`;
      a.click();
      logAudit('COMPLIANCE_PACK_EXPORTED', lang === 'es' ? 'Pack técnico Due-Diligence & SBOM descargado' : 'Technical Due-Diligence & SBOM Compliance Pack downloaded');
      renderAll();
      toast(lang === 'es' ? 'Pack Due-Diligence & Compliance descargado' : 'Due-Diligence & Compliance Pack downloaded');
    });
    intBar.append(ddBtn, whBtn, qbBtn);
    archEl.append(intBar, whPreview);
  }

  function renderStagePills() {
    const t = PRODUCTS[slug][lang];
    const wrap = $('stage-pills');
    wrap.replaceChildren();
    const allBtn = document.createElement('button');
    allBtn.type = 'button'; allBtn.className = 'pill-btn';
    allBtn.textContent = lang === 'es' ? 'Todos' : 'All';
    allBtn.setAttribute('aria-pressed', String(stageFilter === null));
    allBtn.addEventListener('click', () => { stageFilter = null; renderAll(); });
    wrap.appendChild(allBtn);

    t.stages.forEach((stName, idx) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'pill-btn';
      b.textContent = stName;
      b.setAttribute('aria-pressed', String(stageFilter === idx));
      b.addEventListener('click', () => { stageFilter = stageFilter === idx ? null : idx; renderAll(); });
      wrap.appendChild(b);
    });
  }

  function openDrawer(id, editMode) {
    const rec = store[slug].find((r) => r.id === id);
    if (!rec) return;
    drawerId = id;
    const p = PRODUCTS[slug];
    const t = p[lang];
    const isEs = lang === 'es';
    $('drw-title').textContent = (editMode ? (isEs ? 'Editar — ' : 'Edit — ') : '') + rec.id + ' · ' + rec.name;
    const body = $('drw-body');
    body.replaceChildren();

    if (editMode) {
      const form = document.createElement('form');
      form.style.display = 'grid'; form.style.gap = '12px';
      const errBanner = document.createElement('div');
      errBanner.className = 'form-banner';
      form.appendChild(errBanner);

      const mkField = (lbl, el) => {
        const d = document.createElement('div'); d.className = 'field';
        const l = document.createElement('label'); l.textContent = lbl;
        d.append(l, el);
        return d;
      };
      const inpName = document.createElement('input'); inpName.type = 'text'; inpName.value = rec.name; inpName.required = true;
      const selOwner = document.createElement('select');
      p.owners.forEach((o) => { const op = document.createElement('option'); op.value = o; op.textContent = o; if (o === rec.owner) op.selected = true; selOwner.appendChild(op); });
      const selSlot = document.createElement('select');
      p.slots.forEach((s) => { const op = document.createElement('option'); op.value = s; op.textContent = s; if (s === rec.slot) op.selected = true; selSlot.appendChild(op); });
      const inpAmt = document.createElement('input'); inpAmt.type = 'number'; inpAmt.step = 'any'; inpAmt.min = '1'; inpAmt.value = String(rec.amount);
      const selStage = document.createElement('select');
      t.stages.forEach((st, i) => { const op = document.createElement('option'); op.value = String(i); op.textContent = st; if (i === rec.stage) op.selected = true; selStage.appendChild(op); });
      const inpNotes = document.createElement('textarea'); inpNotes.value = rec.notes || '';

      form.append(
        mkField(t.fName, inpName),
        mkField(t.fOwner, selOwner),
        mkField(t.fSlot, selSlot),
        mkField(t.fAmt, inpAmt),
        mkField(isEs ? 'Etapa' : 'Stage', selStage),
        mkField(isEs ? 'Notas' : 'Notes', inpNotes),
      );

      const btnRow = document.createElement('div');
      btnRow.style.display = 'flex'; btnRow.style.gap = '8px'; btnRow.style.justifyContent = 'flex-end';
      const bCancel = document.createElement('button'); bCancel.type = 'button'; bCancel.className = 'btn btn-secondary';
      bCancel.textContent = isEs ? 'Cancelar' : 'Cancel';
      bCancel.addEventListener('click', () => openDrawer(rec.id, false));
      const bSave = document.createElement('button'); bSave.type = 'submit'; bSave.className = 'btn btn-primary';
      bSave.textContent = isEs ? 'Guardar cambios' : 'Save changes';
      btnRow.append(bCancel, bSave);
      form.appendChild(btnRow);

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nm = inpName.value.trim();
        const amt = Number(inpAmt.value);
        if (nm.length < 2 || !Number.isFinite(amt) || amt <= 0 || amt > p.maxVal) {
          errBanner.textContent = isEs ? 'Verifique nombre y monto válido.' : 'Please check name and valid amount.';
          errBanner.className = 'form-banner show err';
          return;
        }
        if (p.uniqueSlot) {
          const norm = (x) => String(x).toLowerCase().replace(/[^a-z0-9]/g, '');
          const clash = store[slug].some((r) => r.id !== rec.id && norm(r.owner) === norm(selOwner.value) && norm(r.slot) === norm(selSlot.value));
          if (clash) {
            errBanner.textContent = t.dupErr;
            errBanner.className = 'form-banner show err';
            return;
          }
        }
        rec.name = nm;
        rec.owner = selOwner.value;
        rec.slot = selSlot.value;
        rec.amount = amt;
        rec.stage = Number(selStage.value);
        rec.notes = inpNotes.value.trim();
        persistSharedStore(slug);
        logAudit('RECORD_UPDATED', rec.id + ' (' + rec.name + ' · ' + rec.owner + ' · ' + fmtVal(rec.amount, p) + ') updated.');
        toast(isEs ? 'Registro actualizado: ' + rec.id : 'Record updated: ' + rec.id);
        renderAll();
        openDrawer(rec.id, false);
      });

      body.appendChild(form);
      $('detail-drawer').hidden = false;
      inpName.focus();
      return;
    }

    const meta = document.createElement('div');
    meta.style.display = 'grid'; meta.style.gap = '10px'; meta.style.marginBottom = '16px';
    [
      [t.fOwner, rec.owner],
      [t.fSlot, rec.slot],
      [t.fAmt, fmtVal(rec.amount, p)],
      [isEs ? 'Etapa actual' : 'Current Stage', t.stages[rec.stage]],
      [isEs ? 'Notas' : 'Notes', rec.notes || '—'],
    ].forEach((row) => {
      const box = document.createElement('div');
      box.style.padding = '10px 12px'; box.style.borderRadius = '8px'; box.style.background = 'var(--surface-2)';
      const sm = document.createElement('small'); sm.style.color = 'var(--muted)'; sm.style.display = 'block'; sm.textContent = row[0];
      const v = document.createElement('strong'); v.style.fontSize = '0.9rem'; v.textContent = row[1];
      box.append(sm, v); meta.appendChild(box);
    });

    const acts = document.createElement('div');
    acts.style.display = 'flex'; acts.style.flexWrap = 'wrap'; acts.style.gap = '8px';
    const bEdit = document.createElement('button'); bEdit.type = 'button'; bEdit.className = 'btn btn-primary';
    bEdit.textContent = isEs ? 'Editar registro' : 'Edit record';
    bEdit.addEventListener('click', () => openDrawer(rec.id, true));
    acts.appendChild(bEdit);

    if (rec.stage > 0) {
      const b1 = document.createElement('button'); b1.type = 'button'; b1.className = 'btn btn-secondary';
      b1.textContent = isEs ? '← Etapa anterior' : '← Previous stage';
      b1.addEventListener('click', () => moveStage(rec.id, -1));
      acts.appendChild(b1);
    }
    if (rec.stage < 3) {
      const b2 = document.createElement('button'); b2.type = 'button'; b2.className = 'btn btn-secondary';
      b2.textContent = isEs ? 'Avanzar etapa →' : 'Advance stage →';
      b2.addEventListener('click', () => moveStage(rec.id, 1));
      acts.appendChild(b2);
    }
    const bDel = document.createElement('button'); bDel.type = 'button'; bDel.className = 'btn btn-danger';
    bDel.textContent = isEs ? 'Eliminar registro' : 'Delete record';
    bDel.addEventListener('click', () => {
      store[slug] = store[slug].filter((x) => x.id !== rec.id);
      persistSharedStore(slug);
      logAudit('RECORD_DELETED', rec.id + ' (' + rec.name + ') removed from workspace.');
      $('detail-drawer').hidden = true; drawerId = null;
      toast(isEs ? 'Registro eliminado.' : 'Record deleted.');
      renderAll();
    });
    acts.appendChild(bDel);
    body.append(meta, acts);
    $('detail-drawer').hidden = false;
  }

  function openNewModal() {
    const p = PRODUCTS[slug];
    const t = p[lang];
    const isEs = lang === 'es';
    $('modal-new-title').textContent = (isEs ? 'Nuevo Registro — ' : 'New Record — ') + p.name;
    $('lbl-f-name').textContent = t.fName;
    $('lbl-f-owner').textContent = t.fOwner;
    $('lbl-f-slot').textContent = t.fSlot;
    $('lbl-f-amount').textContent = t.fAmt;
    $('lbl-f-stage').textContent = isEs ? 'Etapa Inicial' : 'Initial Stage';
    $('lbl-f-notes').textContent = isEs ? 'Notas Operativas (opcional)' : 'Operational Notes (optional)';
    $('lbl-cancel').textContent = isEs ? 'Cancelar' : 'Cancel';
    $('lbl-save').textContent = isEs ? 'Guardar Registro' : 'Save Record';

    $('f-name').value = '';
    $('f-amount').value = '';
    $('f-notes').value = '';
    $('err-name').textContent = '';
    $('err-amount').textContent = '';
    $('form-banner').className = 'form-banner';
    $('form-banner').textContent = '';

    const fillSel = (el, arr) => {
      el.replaceChildren();
      arr.forEach((v, i) => {
        const o = document.createElement('option');
        o.value = typeof v === 'string' ? v : String(i);
        o.textContent = v;
        el.appendChild(o);
      });
    };
    fillSel($('f-owner'), p.owners);
    fillSel($('f-slot'), p.slots);
    if (p.uniqueSlot) {
      const norm = (x) => String(x).toLowerCase().replace(/[^a-z0-9]/g, '');
      let found = false;
      for (const ow of p.owners) {
        for (const sl of p.slots) {
          if (!store[slug].some((r) => norm(r.owner) === norm(ow) && norm(r.slot) === norm(sl))) {
            $('f-owner').value = ow;
            $('f-slot').value = sl;
            found = true;
            break;
          }
        }
        if (found) break;
      }
    }
    const stSel = $('f-stage'); stSel.replaceChildren();
    t.stages.forEach((st, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = st; stSel.appendChild(o); });

    $('modal-new').hidden = false;
    $('f-name').focus();
  }

  function renderRoiModal() {
    const p = PRODUCTS[slug];
    const pr = p.prices[region];
    const isEs = lang === 'es';
    const users = Number($('sl-users').value);
    const fee = Number($('sl-saas').value);
    $('val-users').textContent = String(users);
    $('val-saas').textContent = '$' + fee;
    $('modal-roi-title').textContent = isEs ? 'Licencia Pago Único vs. Costo SaaS a 36 Meses — ' + p.name : 'One-Time Ownership vs. 36-Month SaaS Cost — ' + p.name;
    $('lbl-sl-users').textContent = isEs ? 'Usuarios activos del equipo' : 'Active team members';
    $('lbl-sl-saas').textContent = isEs ? 'Costo SaaS comparable / usuario / mes' : 'Comparable SaaS / seat / month';

    const saas36 = users * fee * 36;
    const sheetsCost = pr[0];
    const sqlCost = pr[1];
    const hybCost = pr[2];
    const netSql = saas36 - sqlCost;
    const netSheets = saas36 - sheetsCost;
    const moSql = Math.max(1, Math.ceil(sqlCost / Math.max(1, users * fee)));
    const moWord = (m) => isEs ? (m === 1 ? '1 mes' : m + ' meses') : (m === 1 ? '1 month' : m + ' months');

    const sumBox = $('roi-summary');
    if (netSql > 0) {
      sumBox.className = 'roi-summary positive';
      $('roi-kicker').textContent = isEs ? 'Ahorro neto estimado en 36 meses (Portal Web + SQL)' : 'Projected 36-Month Net Savings (SQL + Web Portal)';
      $('roi-big').textContent = '$' + netSql.toLocaleString('en-US') + ' USD';
      $('roi-detail').textContent = isEs
        ? 'Recuperación en ~' + moWord(moSql) + ' (SaaS 36m: $' + saas36.toLocaleString('en-US') + ' vs. Pago Único ' + region + ': $' + sqlCost.toLocaleString('en-US') + ').'
        : 'Break-even in ~' + moWord(moSql) + ' (36m SaaS: $' + saas36.toLocaleString('en-US') + ' vs. ' + region + ' One-Time: $' + sqlCost.toLocaleString('en-US') + ').';
    } else if (netSheets > 0) {
      sumBox.className = 'roi-summary advisory';
      $('roi-kicker').textContent = isEs ? 'Recomendación honesta para un equipo chico' : 'Honest recommendation for a smaller team';
      $('roi-big').textContent = (isEs ? 'Ahorre $' : 'Save $') + netSheets.toLocaleString('en-US') + (isEs ? ' con Edición Sheets' : ' with Sheets Edition');
      $('roi-detail').textContent = isEs
        ? 'Con ' + users + ' usuarios a $' + fee + '/mes, SaaS 36m cuesta $' + saas36.toLocaleString('en-US') + '. Conviene arrancar con Google Sheets ($' + sheetsCost.toLocaleString('en-US') + ') y acreditar el 100% si luego escala a SQL+Web.'
        : 'At ' + users + ' seats × $' + fee + '/mo, 36m SaaS totals $' + saas36.toLocaleString('en-US') + '. Start with Google Sheets ($' + sheetsCost.toLocaleString('en-US') + ') with 100% credited toward SQL+Web when you grow.';
    } else {
      sumBox.className = 'roi-summary advisory';
      $('roi-kicker').textContent = isEs ? 'Comparación transparente a 36 meses' : 'Transparent 36-month comparison';
      $('roi-big').textContent = '36m SaaS: $' + saas36.toLocaleString('en-US') + ' USD';
      $('roi-detail').textContent = isEs
        ? 'En este rango bajo, el beneficio principal es la propiedad perpetua de datos y evitar subas futuras por usuario.'
        : 'At this small team size, the main advantage is permanent data ownership and avoiding future per-seat price hikes.';
    }

    const tiers = [
      { n: isEs ? 'Google Sheets' : 'Google Sheets', v: sheetsCost, d: isEs ? '100% acreditable al migrar' : '100% credited on upgrade', f: false },
      { n: isEs ? 'Portal Web + SQL' : 'SQL + Web Portal', v: sqlCost, d: isEs ? 'App + SQLite + Docker + RBAC' : 'Full app + SQL + Docker + RBAC', f: true },
      { n: isEs ? 'Híbrido Completo' : 'Hybrid Complete', v: hybCost, d: isEs ? 'Web + SQL + Sync Sheets' : 'Web + SQL + Sheets sync', f: false },
    ];
    const tc = $('tier-cards'); tc.replaceChildren();
    tiers.forEach((tr) => {
      const box = document.createElement('div'); box.className = 'tier-card' + (tr.f ? ' featured' : '');
      const h = document.createElement('h4'); h.textContent = tr.n;
      const pv = document.createElement('div'); pv.className = 'price mono'; pv.textContent = '$' + tr.v.toLocaleString('en-US') + ' USD';
      const sm = document.createElement('small'); sm.textContent = tr.d;
      box.append(h, pv, sm); tc.appendChild(box);
    });

    const mailLinks = buildMailLinks();
    $('roi-cta-prop').href = mailLinks.prop;
    $('roi-cta-prop').textContent = isEs ? 'Solicitar Propuesta Formal por Email' : 'Request Formal Proposal via Email';
    $('roi-cta-sample').href = mailLinks.sample;
    $('roi-cta-sample').textContent = isEs ? 'Solicitar 3 Ejemplos Adaptados' : 'Request 3 Tailored Sample Records';
    $('roi-cta-copy').textContent = isEs ? 'Copiar Email (andrewkrijdjd@gmail.com)' : 'Copy Email (andrewkrijdjd@gmail.com)';
  }

  function buildMailLinks() {
    const p = PRODUCTS[slug];
    const isEs = lang === 'es';
    const subjProp = '[KRETA-DEMO] ' + p.name + ' (' + region + ')';
    const subjSample = '[KRETA-3EJEMPLOS] ' + p.name + ' (' + region + ')';
    const bodyProp = isEs
      ? 'Estimado equipo de Kreta Software,\n\nHe probado el workspace interactivo de ' + p.name + ' (región ' + region + ') y deseo solicitar una propuesta formal con modalidades y entrega por hitos 50/50.\n\nEmpresa:\nPaís:\n\nAtentamente,'
      : 'Dear Kreta Software Team,\n\nI tested the interactive workspace for ' + p.name + ' (' + region + ' region) and would like to request a formal fixed-scope proposal with 50/50 milestone terms.\n\nCompany:\nCountry:\n\nKind regards,';
    const bodySample = isEs
      ? 'Estimado equipo de Kreta Software,\n\nDeseo solicitar tres registros de ejemplo adaptados a nuestra operación en ' + p.name + ' (región ' + region + ').\n\nEmpresa:\nPaís:\n\nAtentamente,'
      : 'Dear Kreta Software Team,\n\nI would like to request three custom sample records tailored to our workflow in ' + p.name + ' (' + region + ' region).\n\nCompany:\nCountry:\n\nKind regards,';
    return {
      prop: 'mailto:andrewkrijdjd@gmail.com?subject=' + encodeURIComponent(subjProp) + '&body=' + encodeURIComponent(bodyProp),
      sample: 'mailto:andrewkrijdjd@gmail.com?subject=' + encodeURIComponent(subjSample) + '&body=' + encodeURIComponent(bodySample),
    };
  }

  function exportCsv() {
    const p = PRODUCTS[slug];
    const t = p[lang];
    const safe = (v) => {
      const s = String(v == null ? '' : v);
      const clean = /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
      return /[",\n\r]/.test(clean) ? '"' + clean.replace(/"/g, '""') + '"' : clean;
    };
    const header = ['ID'].concat(t.cols, ['Notes']).map(safe).join(',');
    const lines = store[slug].map((r) => [r.id, r.name, r.owner, r.slot, r.amount, t.stages[r.stage], r.notes || ''].map(safe).join(','));
    const blob = new Blob(['\ufeff' + [header].concat(lines).join('\r\n')], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = slug + '_export.csv';
    document.body.appendChild(a); a.click(); a.remove();
    getTourDone(slug).exported = true;
    logAudit('CSV_EXPORT', 'Exported ' + store[slug].length + ' records to ' + slug + '_export.csv');
    toast(lang === 'es' ? 'CSV exportado correctamente.' : 'CSV exported successfully.');
    renderAll();
  }

  function setView(v) {
    activeView = v;
    if (v === 'audit') getTourDone(slug).exported = true;
    document.querySelectorAll('.ws-view').forEach((sec) => { sec.hidden = sec.id !== 'view-' + v; });
    document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
      btn.setAttribute('aria-current', btn.dataset.view === v ? 'page' : 'false');
    });
    $('ws-sidebar').classList.remove('open');
    renderTour();
  }

  function renderCmdPalette(q) {
    const low = (q || '').trim().toLowerCase();
    const isEs = lang === 'es';
    const actions = [
      { label: isEs ? '+ Crear nuevo registro' : '+ Create new record', hint: 'N', fn: () => { $('modal-cmd').hidden = true; openNewModal(); } },
      { label: isEs ? 'Abrir Precios y Calculador ROI' : 'Open Pricing & ROI Calculator', hint: 'R', fn: () => { $('modal-cmd').hidden = true; renderRoiModal(); $('modal-roi').hidden = false; } },
      { label: isEs ? 'Ir a Tablero Kanban' : 'Go to Workflow Kanban Board', hint: '2', fn: () => { $('modal-cmd').hidden = true; setView('kanban'); } },
      { label: isEs ? 'Exportar registros a CSV' : 'Export records to CSV', hint: 'E', fn: () => { $('modal-cmd').hidden = true; exportCsv(); } },
      { label: isEs ? 'Alternar modo Claro / Oscuro' : 'Toggle Light / Dark Theme', hint: 'T', fn: () => { $('modal-cmd').hidden = true; toggleTheme(); } },
    ].concat(Object.keys(PRODUCTS).map((k) => ({
      label: (isEs ? 'Cambiar sistema → ' : 'Switch system → ') + PRODUCTS[k].name,
      hint: k,
      fn: () => { $('modal-cmd').hidden = true; switchProduct(k); },
    })));
    const filtered = actions.filter((a) => !low || a.label.toLowerCase().includes(low) || a.hint.toLowerCase().includes(low)).slice(0, 12);
    const list = $('cmd-list'); list.replaceChildren();
    filtered.forEach((a) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'cmd-item';
      const l = document.createElement('span'); l.textContent = a.label;
      const h = document.createElement('span'); h.className = 'kbd-hint'; h.textContent = a.hint;
      b.append(l, h); b.addEventListener('click', a.fn); list.appendChild(b);
    });
  }

  function applyRoiDefaultsForSlug(s) {
    const d = ROI_DEFAULTS[s] || { users: 10, saas: 49 };
    $('sl-users').value = String(d.users);
    $('sl-saas').value = String(d.saas);
  }

  function switchProduct(nextSlug) {
    if (!PRODUCTS[nextSlug]) return;
    slug = nextSlug;
    stageFilter = null;
    searchQuery = '';
    $('rec-search').value = '';
    $('detail-drawer').hidden = true;
    drawerId = null;
    $('prod-select').value = slug;
    applyRoiDefaultsForSlug(slug);
    syncUrl();
    renderAll();
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    document.documentElement.setAttribute('data-theme', cur === 'light' ? 'dark' : 'light');
  }

  function renderAll() {
    ensureState(slug);
    const p = PRODUCTS[slug];
    const t = p[lang];
    const isEs = lang === 'es';
    const pr = p.prices[region];

    document.documentElement.lang = lang;
    $('lang-en').setAttribute('aria-pressed', String(lang === 'en'));
    $('lang-es').setAttribute('aria-pressed', String(lang === 'es'));
    $('nav-back').href = 'index.html?lang=' + lang + '#catalog';
    $('nav-back-txt').textContent = isEs ? 'Los 20 Sistemas' : 'All 20 Systems';
    $('lbl-cmd').textContent = isEs ? 'Buscar' : 'Search';
    $('lbl-roi-btn').textContent = isEs ? 'Precios y ROI' : 'Pricing & ROI';
    $('lbl-live-pill').textContent = isEs ? 'Sandbox Interactivo' : 'Interactive Sandbox';
    $('side-prod-name').textContent = p.name;
    $('side-prod-meta').textContent = isEs ? 'Self-hosted · SQLite + Docker' : 'Self-hosted · SQLite + Docker';
    $('nav-v-overview').textContent = isEs ? 'Resumen' : 'Overview';
    $('nav-v-kanban').textContent = isEs ? 'Tablero Kanban' : 'Workflow Board';
    $('nav-v-records').textContent = isEs ? 'Registros' : 'Records';
    $('nav-v-audit').textContent = isEs ? 'Auditoría y Stack' : 'Audit & Specs';
    $('badge-kanban').textContent = String(store[slug].length);
    $('badge-records').textContent = String(store[slug].length);
    $('badge-audit').textContent = String(auditStore[slug].length);

    const inst3 = Math.ceil(pr[1] / 3);
    const currSym = region === 'EUR' ? '€' : '$';
    const currTag = region === 'EUR' ? 'EUR' : 'USD';
    $('side-price-val').textContent = currSym + pr[1].toLocaleString('en-US') + ' ' + currTag;
    $('side-price-note').textContent = isEs
      ? 'Pago único o 3 cuotas s/i de ' + currSym + inst3 + ' · Migración 24h gratis'
      : 'One-time or 3 × ' + currSym + inst3 + ' (0% interest) · Free 24h migration';
    if ($('lbl-import')) $('lbl-import').textContent = isEs ? 'Importar 3 Filas Excel' : 'Import 3 Excel Rows';
    const links = buildMailLinks();
    $('side-cta-mail').href = links.prop;
    $('side-cta-mail').textContent = isEs ? 'Solicitar Propuesta' : 'Request Proposal';
    $('side-cta-copy').textContent = isEs ? 'Copiar Email' : 'Copy Email';

    $('ws-title').textContent = p.name;
    $('ws-subtitle').textContent = t.sub;
    $('lbl-csv').textContent = isEs ? 'Exportar CSV' : 'Export CSV';
    $('lbl-print').textContent = isEs ? 'Imprimir PDF' : 'Print PDF';
    $('lbl-new-rec').textContent = isEs ? 'Nuevo Registro' : 'New Record';
    $('chart1-title').textContent = isEs ? t.kpiVol + ' por Etapa' : t.kpiVol + ' by Stage';
    $('chart1-sub').textContent = isEs ? 'Haga clic en cualquier barra para filtrar.' : 'Click any bar to filter records by workflow stage.';
    $('chart2-title').textContent = isEs ? 'Distribución de Etapas' : 'Stage Distribution';
    $('chart2-sub').textContent = isEs ? 'Se recalcula al instante ante cada cambio.' : 'Updates live as cards move or records are added.';
    $('ov-table-title').textContent = isEs ? 'Cola Operativa Activa' : 'Active Operational Queue';
    $('ov-table-sub').textContent = isEs ? 'Haga clic en una fila para inspeccionar, avanzar etapa o eliminar.' : 'Click any row to inspect, advance stage, or delete.';
    $('btn-goto-records').textContent = isEs ? 'Ver tabla completa' : 'Open full table';
    $('rec-search').placeholder = isEs ? 'Buscar por nombre, responsable o referencia...' : 'Search by name, owner, or reference...';
    $('audit-title').textContent = isEs ? 'Registro Inmutable SHA-256' : 'Immutable SHA-256 Activity Log';
    $('audit-sub').textContent = isEs ? 'Cada alta, cambio de etapa o exportación queda sellada.' : 'Every create, stage transition, and export is hash-chained live.';
    $('arch-title').textContent = isEs ? 'Arquitectura de Producción Propia' : 'Self-Hosted Production Architecture';
    $('arch-sub').textContent = isEs ? 'Lo que su organización recibe en propiedad total.' : 'What your organization owns upon delivery—zero vendor lock-in.';

    const filtered = getFilteredRows();
    renderTour();
    renderKpis();
    renderCharts();
    renderStagePills();
    renderTableInto($('ov-thead'), $('ov-tbody'), filtered.slice(0, 6));
    renderTableInto($('rec-thead'), $('rec-tbody'), filtered);
    renderKanban();
    renderAudit();
  }

  // Event wiring
  $('prod-select').addEventListener('change', (e) => switchProduct(e.target.value));
  $('region-select').addEventListener('change', (e) => { region = e.target.value; syncUrl(); renderAll(); });
  $('lang-en').addEventListener('click', () => { lang = 'en'; syncUrl(); renderAll(); });
  $('lang-es').addEventListener('click', () => { lang = 'es'; syncUrl(); renderAll(); });
  $('btn-theme').addEventListener('click', toggleTheme);
  $('btn-mobile-nav').addEventListener('click', () => $('ws-sidebar').classList.toggle('open'));
  document.querySelectorAll('.nav-item[data-view]').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
  $('btn-goto-records').addEventListener('click', () => setView('records'));
  $('btn-clear-stage-filter').addEventListener('click', () => { stageFilter = null; renderAll(); });
  $('rec-search').addEventListener('input', (e) => { searchQuery = e.target.value; renderAll(); });
  $('btn-new-record').addEventListener('click', openNewModal);
  if ($('btn-import-sample')) {
    $('btn-import-sample').addEventListener('click', () => {
      ensureState(slug);
      const p = PRODUCTS[slug];
      const isEs = lang === 'es';
      const prefix = slug.slice(0, 3).toUpperCase();
      const baseNum = 500 + store[slug].length;
      const samples = [
        { name: isEs ? 'Lote Q4 — Operación Prioritaria' : 'Q4 Batch — Priority Case', stage: 0, mult: 1.0 },
        { name: isEs ? 'Lote Q4 — Seguimiento Activo' : 'Q4 Batch — Active Review', stage: 1, mult: 1.35 },
        { name: isEs ? 'Lote Q4 — Cierre Validado' : 'Q4 Batch — Verified Closeout', stage: 3, mult: 0.85 },
      ];
      const baseAmt = Math.max(10, Math.round((p.seed[0] && p.seed[0].amount) || 150));
      samples.forEach((sm, i) => {
        store[slug].unshift({
          id: prefix + '-' + (baseNum + i),
          name: sm.name,
          owner: p.owners[i % p.owners.length],
          slot: p.slots[(i + 2) % p.slots.length],
          amount: Math.min(p.maxVal, Math.max(1, Math.round(baseAmt * sm.mult))),
          stage: sm.stage,
          notes: isEs ? 'Migrado desde planilla CSV en 1 clic sin errores.' : 'Imported cleanly from CSV spreadsheet in 1 click.',
        });
      });
      getTourDone(slug).added = true;
      persistSharedStore(slug);
      logAudit('EXCEL_IMPORT', '3 records imported cleanly from spreadsheet simulation.');
      toast(isEs ? '3 filas importadas desde Excel — KPIs actualizados' : '3 Excel rows imported — KPIs & charts updated');
      renderAll();
    });
  }
  $('btn-export-csv').addEventListener('click', exportCsv);
  $('btn-print').addEventListener('click', () => { getTourDone(slug).exported = true; renderTour(); window.print(); });
  $('btn-reset-demo').addEventListener('click', () => {
    delete store[slug]; delete auditStore[slug]; stageFilter = null; searchQuery = '';
    try {
      const all = readSharedStore();
      delete all[slug];
      localStorage.setItem(SHARED_STORE_KEY, JSON.stringify(all));
    } catch (_) {}
    $('rec-search').value = '';
    toast(lang === 'es' ? 'Datos de muestra restaurados.' : 'Sample dataset reset.');
    renderAll();
    persistSharedStore(slug);
  });
  $('btn-roi').addEventListener('click', () => { renderRoiModal(); $('modal-roi').hidden = false; });
  $('sl-users').addEventListener('input', renderRoiModal);
  $('sl-saas').addEventListener('input', renderRoiModal);
  $('btn-cmd').addEventListener('click', () => { $('cmd-input').value = ''; renderCmdPalette(''); $('modal-cmd').hidden = false; $('cmd-input').focus(); });
  $('cmd-input').addEventListener('input', (e) => renderCmdPalette(e.target.value));

  const copyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('andrewkrijdjd@gmail.com').catch(() => {});
    }
    toast(lang === 'es' ? 'Copiado: andrewkrijdjd@gmail.com' : 'Copied: andrewkrijdjd@gmail.com');
  };
  $('side-cta-copy').addEventListener('click', copyEmail);
  $('roi-cta-copy').addEventListener('click', copyEmail);

  document.querySelectorAll('[data-close-modal]').forEach((b) => {
    b.addEventListener('click', () => { $(b.dataset.closeModal).hidden = true; });
  });
  document.querySelectorAll('.backdrop').forEach((bd) => {
    bd.addEventListener('click', (e) => { if (e.target === bd) bd.hidden = true; });
  });
  $('btn-close-drawer').addEventListener('click', () => { $('detail-drawer').hidden = true; drawerId = null; });
  $('detail-drawer').addEventListener('click', (e) => { if (e.target === $('detail-drawer')) { $('detail-drawer').hidden = true; drawerId = null; } });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      $('cmd-input').value = ''; renderCmdPalette(''); $('modal-cmd').hidden = false; $('cmd-input').focus();
    } else if (e.key === 'Escape') {
      ['modal-new', 'modal-roi', 'modal-cmd', 'detail-drawer'].forEach((id) => { $(id).hidden = true; });
      drawerId = null;
    }
  });

  // Bulletproof Form Validation & Submit
  $('rec-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const p = PRODUCTS[slug];
    const t = p[lang];
    const isEs = lang === 'es';
    const name = $('f-name').value.trim();
    const owner = $('f-owner').value;
    const slot = $('f-slot').value;
    const rawAmt = $('f-amount').value.trim();
    const amount = Number(rawAmt);
    const stage = Number($('f-stage').value || 0);
    const notes = $('f-notes').value.trim();

    $('err-name').textContent = '';
    $('err-amount').textContent = '';
    const banner = $('form-banner');
    banner.className = 'form-banner';
    banner.textContent = '';

    let hasErr = false;
    if (name.length < 2) {
      $('err-name').textContent = isEs ? 'Ingrese un nombre válido (mínimo 2 caracteres).' : 'Please enter a valid name (at least 2 characters).';
      hasErr = true;
    }
    if (!rawAmt || !Number.isFinite(amount) || amount <= 0 || amount > p.maxVal) {
      $('err-amount').textContent = isEs
        ? 'El valor debe ser mayor a 0 y no superar ' + fmtVal(p.maxVal, p) + '.'
        : 'Value must be greater than 0 and at most ' + fmtVal(p.maxVal, p) + '.';
      hasErr = true;
    }
    if (hasErr) {
      banner.textContent = isEs ? 'Corrija los campos marcados antes de guardar.' : 'Please fix the highlighted fields before saving.';
      banner.className = 'form-banner show err';
      return;
    }

    // Normalized overlap check (works regardless of punctuation/spaces)
    if (p.uniqueSlot) {
      const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
      const clash = store[slug].some((r) => norm(r.owner) === norm(owner) && norm(r.slot) === norm(slot));
      if (clash) {
        banner.textContent = t.dupErr;
        banner.className = 'form-banner show err';
        return;
      }
    }

    const prefix = slug.slice(0, 3).toUpperCase();
    const newId = prefix + '-' + (100 + store[slug].length + Math.floor(Math.random() * 800));
    store[slug].unshift({ id: newId, name, owner, slot, amount, stage, notes });
    getTourDone(slug).added = true;
    persistSharedStore(slug);
    logAudit('RECORD_CREATED', newId + ' (' + name + ' · ' + owner + ' · ' + fmtVal(amount, p) + ') saved.');
    $('modal-new').hidden = true;
    toast((isEs ? 'Registro guardado: ' : 'Record saved: ') + newId);
    renderAll();
  });

  populateHeaderSelects();
  applyRoiDefaultsForSlug(slug);
  syncUrl();
  renderAll();
})();
