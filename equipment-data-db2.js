// ============================================================
//  STOKE MANDEVILLE — DASHBOARD 2
//  Ward Housekeeping, Cleaning & Environmental Checks
// ============================================================

const EQUIPMENT_DB2 = {};

// ── CTG ROOM CHECKS (daily) ──────────────────────────────
const CTG_ROOMS = [
  { id: 'room_6', name: 'Room 6' },
  { id: 'room_7', name: 'Room 7' },
  { id: 'room_8', name: 'Room 8' },
  { id: 'room_9', name: 'Room 9' },
  { id: 'room_10', name: 'Room 10' },
  { id: 'room_11', name: 'Room 11' },
  { id: 'room_12', name: 'Room 12' },
  { id: 'room_14', name: 'Room 14' },
  { id: 'room_15', name: 'Room 15' },
  { id: 'room_18', name: 'Room 18' },
  { id: 'obs_bay', name: 'Obs Bay' },
  { id: 'triage', name: 'Triage' },
];

CTG_ROOMS.forEach(room => {
  EQUIPMENT_DB2[`ctg_${room.id}`] = {
    name: `CTG Equipment — ${room.name}`,
    location: room.name,
    image: 'images/ctg_machine.jpg',
    imageCaption: `Confirm all CTG equipment is present and ready for use in ${room.name}`,
    frequency: 'daily',
    afterEmergency: false,
    dashboard: 2,
    categories: [{
      name: 'CTG Equipment',
      icon: '📈',
      items: [
        { id: `ctg_${room.id}_sats_probe`, name: 'Sats probe present', desc: 'Maternal SpO2 probe present and functioning', critical: true, image: 'images/ctg_sats_probe.jpg' },
        { id: `ctg_${room.id}_transducer`, name: 'Transducer present', desc: 'CTG ultrasound transducer present, no cracks', critical: true, image: 'images/ctg_transducer.jpg' },
        { id: `ctg_${room.id}_toco`, name: 'Toco present', desc: 'Toco transducer present and intact', critical: true, image: 'images/ctg_toco.jpg' },
        { id: `ctg_${room.id}_bp_small`, name: 'Small BP cuff present', desc: 'Small BP cuff present and labelled', critical: true, image: 'images/ctg_bp_small.jpg' },
        { id: `ctg_${room.id}_bp_medium`, name: 'Medium BP cuff present', desc: 'Medium BP cuff present and labelled', critical: true, image: 'images/ctg_bp_medium.jpg' },
        { id: `ctg_${room.id}_bp_large`, name: 'Large BP cuff present', desc: 'Large BP cuff present and labelled', critical: true, image: 'images/ctg_bp_large.jpg' },
        { id: `ctg_${room.id}_belts`, name: 'CTG belts present (x2)', desc: 'Both belts present, hooks intact, not frayed', critical: false, image: 'images/ctg_belts.jpg' },
        { id: `ctg_${room.id}_paper`, name: 'CTG paper loaded', desc: 'Paper loaded correctly and adequate supply', critical: false, image: 'images/ctg_paper.jpg' },
      ]
    }]
  };
});

// ── TRISTEL BOTTLE (daily) ───────────────────────────────
EQUIPMENT_DB2['tristel_bottle'] = {
  name: 'Tristel Bottle — Daily Check',
  location: 'Labour Ward',
  image: 'images/tristel_bottle.jpg',
  imageCaption: 'Confirm Tristel bottle is correctly dated, signed, and returned to the locked sluice after use',
  frequency: 'daily',
  afterEmergency: false,
  dashboard: 2,
  tristelCheck: true,
  categories: [{
    name: 'Tristel Bottle Check',
    icon: '🧴',
    items: [
      { id: 'tristel_dated', name: 'Bottle clearly dated today', desc: 'Date written clearly on bottle — must be changed daily', critical: true, image: 'images/tristel_date.jpg' },
      { id: 'tristel_signed', name: 'Bottle signed by staff member', desc: 'Staff name or initials written on bottle alongside date', critical: true, image: 'images/tristel_signed.jpg' },
      { id: 'tristel_locked_sluice', name: 'Bottle kept in locked sluice when not in use', desc: 'Confirm bottle is stored in locked sluice between uses — not left in rooms', critical: true, image: 'images/tristel_sluice.jpg' },
      { id: 'tristel_level', name: 'Adequate solution level in bottle', desc: 'Bottle has sufficient Tristel solution for the shift', critical: false, image: 'images/tristel_level.jpg' },
    ]
  }]
};

// ── FRIDGE TEMPERATURES (twice daily) ───────────────────
const FRIDGES = [
  { id: 'fridge_staff', name: 'Staff Fridge', location: 'Labour Ward' },
  { id: 'fridge_patient', name: 'Patient Fridge', location: 'Labour Ward' },
  { id: 'fridge_lw_drug', name: 'Labour Ward Drug Fridge', location: 'Labour Ward' },
  { id: 'fridge_bc_drug', name: 'Birth Centre Drug Fridge', location: 'Birth Centre' },
  { id: 'fridge_primrose', name: 'Primrose Fridge', location: 'Primrose' },
  { id: 'fridge_primrose_annex', name: 'Primrose Annex Fridge', location: 'Primrose Annex' },
];

FRIDGES.forEach(fridge => {
  EQUIPMENT_DB2[fridge.id] = {
    name: `${fridge.name} — Temperature Check`,
    location: fridge.location,
    image: 'images/fridge.jpg',
    imageCaption: 'Record current, minimum and maximum temperatures. Acceptable range is 2–8°C. If outside range follow escalation steps immediately.',
    frequency: 'daily',
    afterEmergency: false,
    dashboard: 2,
    fridgeCheck: true,
    tempMin: 2,
    tempMax: 8,
    tempUnit: '°C',
    pharmacyNumber: '01494 425355',
    escalation: {
      immediate: 'Report any reading outside stated limits to a senior midwife/manager IMMEDIATELY.',
      resetSteps: 'Reset the thermometer and recheck in 10 minutes. If the temperature returns to normal range, no further action is required.',
      outOfRange: 'If temperature remains outside 2–8°C: 1. Label the fridge "DO NOT USE UNTIL FURTHER NOTICE". 2. Label and quarantine all medication to prevent use. 3. Do NOT dispose of any medication until you have spoken to the pharmacist — some medications (e.g. insulin) can be kept at room temperature for a period of time.',
      contactPharmacy: 'Contact the supplying pharmacist on 01494 425355 (Mon–Fri 9am–5pm). Provide: last temperature reading (max and minimum), date and time, medications involved including strength and form.',
      disposal: 'If informed medication is not suitable for use, dispose of it in line with the Medicine Management Policy.',
      outOfHours: 'Out of hours: contact the on-call pharmacist via switchboard.'
    },
    categories: [{
      name: 'Temperature Recording',
      icon: '🌡',
      items: [
        { id: `${fridge.id}_current_temp`, name: 'Current temperature recorded', desc: 'Enter current temperature reading from the thermometer display', critical: true, image: 'images/fridge_thermometer.jpg' },
        { id: `${fridge.id}_min_temp`, name: 'Minimum temperature recorded', desc: 'Enter the minimum temperature shown on the thermometer', critical: true, image: 'images/fridge_min_temp.jpg' },
        { id: `${fridge.id}_max_temp`, name: 'Maximum temperature recorded', desc: 'Enter the maximum temperature shown on the thermometer', critical: true, image: 'images/fridge_max_temp.jpg' },
        { id: `${fridge.id}_thermometer_reset`, name: 'Thermometer reset after recording', desc: 'Confirm the thermometer min/max has been reset', critical: false, image: 'images/fridge_thermometer_reset.jpg' },
        { id: `${fridge.id}_in_range`, name: 'All readings within 2–8°C range', desc: 'Confirm current, min and max are all within acceptable range', critical: true, image: 'images/fridge_range.jpg' },
        { id: `${fridge.id}_escalation`, name: 'Escalation taken if out of range', desc: 'If any reading was outside 2–8°C confirm escalation steps have been followed', critical: false, image: 'images/fridge_escalation.jpg' },
      ]
    }]
  };
});

// ── INSTRUMENT WASHERS (daily) ───────────────────────────
EQUIPMENT_DB2['washer_labour_ward'] = {
  name: 'Instrument Washer — Labour Ward',
  location: 'Labour Ward',
  image: 'images/instrument_washer.jpg',
  imageCaption: 'Complete all checks before running the washer. Temperature and steam leakage are critical failures.',
  frequency: 'daily',
  afterEmergency: false,
  dashboard: 2,
  categories: [{
    name: 'Washer Check',
    icon: '🔧',
    items: [
      { id: 'washer_lw_chamber', name: 'Chamber is clean', desc: 'Interior chamber free from debris and residue', critical: false, image: 'images/washer_chamber.jpg' },
      { id: 'washer_lw_spray_arms', name: 'Spray arms clean and moving freely', desc: 'Both spray arms spin freely, no blockages', critical: false, image: 'images/washer_spray_arms.jpg' },
      { id: 'washer_lw_nozzles', name: 'Spray nozzles clear of blockage', desc: 'Check each nozzle is clear — use a pin to clear if blocked', critical: false, image: 'images/washer_nozzles.jpg' },
      { id: 'washer_lw_detergent', name: 'Detergent level checked and level marked on bottle', desc: 'Mark the bottle with today\'s date and level before use', critical: false, image: 'images/washer_detergent.jpg' },
      { id: 'washer_lw_temperature', name: 'Temperature reaches 90°C or above during cycle', desc: 'Check temperature display or printout confirms 90°C reached', critical: true, image: 'images/washer_temp.jpg' },
      { id: 'washer_lw_steam', name: 'No steam leakage detected', desc: 'Inspect door seal and body for steam leakage during cycle', critical: true, image: 'images/washer_steam.jpg' },
    ]
  }]
};

EQUIPMENT_DB2['washer_birth_centre'] = {
  name: 'Instrument Washer — Birth Centre',
  location: 'Birth Centre',
  image: 'images/instrument_washer.jpg',
  imageCaption: 'Complete all checks before running the washer. Temperature and steam leakage are critical failures.',
  frequency: 'daily',
  afterEmergency: false,
  dashboard: 2,
  categories: [{
    name: 'Washer Check',
    icon: '🔧',
    items: [
      { id: 'washer_bc_chamber', name: 'Chamber is clean', desc: 'Interior chamber free from debris and residue', critical: false, image: 'images/washer_chamber.jpg' },
      { id: 'washer_bc_spray_arms', name: 'Spray arms clean and moving freely', desc: 'Both spray arms spin freely, no blockages', critical: false, image: 'images/washer_spray_arms.jpg' },
      { id: 'washer_bc_nozzles', name: 'Spray nozzles clear of blockage', desc: 'Check each nozzle is clear', critical: false, image: 'images/washer_nozzles.jpg' },
      { id: 'washer_bc_detergent', name: 'Detergent level checked and marked on bottle', desc: 'Mark bottle with today\'s date and level', critical: false, image: 'images/washer_detergent.jpg' },
      { id: 'washer_bc_temperature', name: 'Temperature reaches 90°C or above during cycle', desc: 'Check temperature display or printout confirms 90°C reached', critical: true, image: 'images/washer_temp.jpg' },
      { id: 'washer_bc_steam', name: 'No steam leakage detected', desc: 'Inspect door seal and body for steam leakage during cycle', critical: true, image: 'images/washer_steam.jpg' },
    ]
  }]
};

// ── WEEKLY CLEANING ──────────────────────────────────────
// Resuscitaires 1-9
for (let i = 1; i <= 9; i++) {
  EQUIPMENT_DB2[`clean_resuscitaire_${i}`] = {
    name: `Resuscitaire ${i} — Weekly Clean`,
    location: 'Labour Ward',
    image: 'images/resuscitaire_cleaning.jpg',
    imageCaption: 'Clean all surfaces using approved decontamination wipes. See cleaning instruction image below.',
    frequency: 'weekly',
    afterEmergency: false,
    dashboard: 2,
    cleaningInstructions: 'images/resuscitaire_cleaning_instructions.jpg',
    categories: [{
      name: 'Cleaning Check',
      icon: '🧹',
      items: [
        { id: `clean_res${i}_surfaces`, name: 'All external surfaces cleaned', desc: 'Wipe all hard surfaces with approved decontamination wipes', critical: true, image: 'images/clean_surfaces.jpg' },
        { id: `clean_res${i}_mattress`, name: 'Mattress and cover cleaned', desc: 'Wipe mattress cover with approved wipes, replace if damaged', critical: true, image: 'images/clean_mattress.jpg' },
        { id: `clean_res${i}_overhead`, name: 'Overhead heater and light cleaned', desc: 'Wipe overhead unit carefully — ensure dry before use', critical: false, image: 'images/clean_overhead.jpg' },
        { id: `clean_res${i}_drawers`, name: 'Drawer exteriors cleaned', desc: 'All drawer handles and exteriors wiped', critical: false, image: 'images/clean_drawers.jpg' },
        { id: `clean_res${i}_wheels`, name: 'Wheels and base cleaned', desc: 'Wipe base and wheels — clear any debris', critical: false, image: 'images/clean_wheels.jpg' },
        { id: `clean_res${i}_signature`, name: 'Cleaning label completed', desc: 'Sign and date the cleaning label on the resuscitaire', critical: true, image: 'images/clean_label.jpg' },
      ]
    }]
  };
}

// USS Machines 1-2
for (let i = 1; i <= 2; i++) {
  EQUIPMENT_DB2[`clean_uss_${i}`] = {
    name: `USS Machine ${i} — Weekly Clean`,
    location: 'Labour Ward',
    image: 'images/uss_machine.jpg',
    imageCaption: 'Clean all surfaces and probe. See cleaning instruction label on machine.',
    frequency: 'weekly',
    afterEmergency: false,
    dashboard: 2,
    cleaningInstructions: 'images/uss_cleaning_instructions.jpg',
    categories: [{
      name: 'Cleaning Check',
      icon: '🧹',
      items: [
        { id: `clean_uss${i}_screen`, name: 'Screen cleaned', desc: 'Wipe screen with approved screen-safe wipe', critical: false, image: 'images/clean_screen.jpg' },
        { id: `clean_uss${i}_body`, name: 'Machine body cleaned', desc: 'All surfaces wiped with approved decontamination wipes', critical: true, image: 'images/clean_surfaces.jpg' },
        { id: `clean_uss${i}_probe`, name: 'Probe cleaned and stored correctly', desc: 'Probe wiped and hung in correct storage position', critical: true, image: 'images/uss_probe.jpg' },
        { id: `clean_uss${i}_cable`, name: 'Cable wiped and stored safely', desc: 'Cable wiped and coiled without kinking', critical: false, image: 'images/uss_cable.jpg' },
        { id: `clean_uss${i}_gel`, name: 'Gel bottle wiped externally', desc: 'Outside of gel bottle wiped clean', critical: false, image: 'images/uss_gel.jpg' },
        { id: `clean_uss${i}_signature`, name: 'Cleaning label completed', desc: 'Sign and date cleaning label on machine', critical: true, image: 'images/clean_label.jpg' },
      ]
    }]
  };
}

// Batch clean items (weekly)
const BATCH_CLEANS = [
  { id: 'clean_epidural_pumps', name: 'Epidural Pumps — Weekly Clean', image: 'images/epidural_pump.jpg', instructions: 'images/epidural_pump_cleaning_instructions.jpg' },
  { id: 'clean_ecg_machine', name: 'ECG Machine — Weekly Clean', image: 'images/ecg_machine.jpg', instructions: 'images/ecg_cleaning_instructions.jpg' },
  { id: 'clean_baxter_pumps', name: 'Baxter Pumps — Weekly Clean', image: 'images/baxter_pump.jpg', instructions: 'images/baxter_pump_cleaning_instructions.jpg' },
  { id: 'clean_syringe_drivers', name: 'Syringe Drivers — Weekly Clean', image: 'images/syringe_driver.jpg', instructions: 'images/syringe_driver_cleaning_instructions.jpg' },
];

BATCH_CLEANS.forEach(item => {
  EQUIPMENT_DB2[item.id] = {
    name: item.name,
    location: 'Labour Ward',
    image: item.image,
    imageCaption: 'Confirm all units have been cleaned using approved decontamination wipes. See cleaning instruction image.',
    frequency: 'weekly',
    afterEmergency: false,
    dashboard: 2,
    cleaningInstructions: item.instructions,
    categories: [{
      name: 'Batch Clean Confirmation',
      icon: '🧹',
      items: [
        { id: `${item.id}_all_cleaned`, name: 'All units cleaned with approved wipes', desc: 'Every unit has been wiped down with approved decontamination wipes', critical: true, image: 'images/clean_surfaces.jpg' },
        { id: `${item.id}_screens`, name: 'Screens and displays cleaned', desc: 'All screens wiped with screen-safe wipes', critical: false, image: 'images/clean_screen.jpg' },
        { id: `${item.id}_cables`, name: 'Cables and leads wiped', desc: 'All attached cables wiped down', critical: false, image: 'images/clean_cables.jpg' },
        { id: `${item.id}_stored`, name: 'All units stored correctly after cleaning', desc: 'Units returned to correct storage location', critical: false, image: 'images/clean_stored.jpg' },
      ]
    }]
  };
});

// ── MONTHLY TROLLEY CLEANING ─────────────────────────────
const TROLLEY_CLEANS = [
  { id: 'clean_pph_trolley_1', name: 'PPH Trolley 1 — Monthly Clean', img: 'images/pph_trolley.jpg' },
  { id: 'clean_pph_trolley_2', name: 'PPH Trolley 2 — Monthly Clean', img: 'images/pph_trolley.jpg' },
  { id: 'clean_epidural_trolley_1', name: 'Epidural Trolley 1 — Monthly Clean', img: 'images/epidural_trolley.jpg' },
  { id: 'clean_epidural_trolley_2', name: 'Epidural Trolley 2 — Monthly Clean', img: 'images/epidural_trolley.jpg' },
  { id: 'clean_instrumental_trolley_1', name: 'Instrumental Trolley 1 — Monthly Clean', img: 'images/instrumental_trolley.jpg' },
  { id: 'clean_instrumental_trolley_2', name: 'Instrumental Trolley 2 — Monthly Clean', img: 'images/instrumental_trolley.jpg' },
];

TROLLEY_CLEANS.forEach(t => {
  EQUIPMENT_DB2[t.id] = {
    name: t.name,
    location: 'Labour Ward',
    image: t.img,
    imageCaption: 'Clean all surfaces, drawers and wheels using approved decontamination solution. See cleaning instructions image.',
    frequency: 'monthly',
    afterEmergency: false,
    dashboard: 2,
    cleaningInstructions: 'images/trolley_cleaning_instructions.jpg',
    categories: [{
      name: 'Trolley Clean',
      icon: '🧹',
      items: [
        { id: `${t.id}_top`, name: 'Top surface cleaned', desc: 'Top of trolley wiped with approved decontamination solution', critical: true, image: 'images/clean_surfaces.jpg' },
        { id: `${t.id}_drawers_ext`, name: 'Drawer exteriors cleaned', desc: 'All drawer fronts, handles and sides wiped', critical: true, image: 'images/clean_drawers.jpg' },
        { id: `${t.id}_drawers_int`, name: 'Drawer interiors cleaned', desc: 'Inside of each drawer wiped and dried before restocking', critical: true, image: 'images/clean_drawers_inside.jpg' },
        { id: `${t.id}_frame`, name: 'Frame and legs cleaned', desc: 'All frame surfaces and legs wiped down', critical: false, image: 'images/clean_frame.jpg' },
        { id: `${t.id}_wheels`, name: 'Wheels cleaned', desc: 'Wheels wiped and checked for debris', critical: false, image: 'images/clean_wheels.jpg' },
        { id: `${t.id}_restocked`, name: 'Trolley restocked after cleaning', desc: 'Confirm all items have been replaced correctly after cleaning', critical: true, image: 'images/clean_restocked.jpg' },
        { id: `${t.id}_signature`, name: 'Cleaning label completed and dated', desc: 'Sign and date the cleaning record label', critical: true, image: 'images/clean_label.jpg' },
      ]
    }]
  };
});

// ── MATTRESS AUDIT (monthly) ─────────────────────────────
EQUIPMENT_DB2['mattress_audit'] = {
  name: 'Mattress Audit — Monthly',
  location: 'Labour Ward',
  image: 'images/mattress.jpg',
  imageCaption: 'Check all available soft mattresses including inside the zip. Condemn any with damage.',
  frequency: 'monthly',
  afterEmergency: false,
  dashboard: 2,
  mattressAudit: true,
  categories: [{
    name: 'Mattress Inspection',
    icon: '🛏',
    items: [
      { id: 'mattress_all_checked', name: 'All available mattresses fully checked', desc: 'Every soft mattress on the ward has been inspected including inside the zip', critical: true, image: 'images/mattress_check.jpg' },
      { id: 'mattress_zip_checked', name: 'Inside zip inspected on all mattresses', desc: 'Zip opened and interior checked for damage, staining or moisture', critical: true, image: 'images/mattress_zip.jpg' },
      { id: 'mattress_no_damage', name: 'No rips, tears, leaks or stains found (or condemned if found)', desc: 'Any damaged mattresses have been condemned and removed from use', critical: true, image: 'images/mattress_damage.jpg' },
      { id: 'mattress_condemned_process', name: 'Condemned mattresses bagged and collection arranged', desc: 'Any condemned mattresses placed in yellow mattress bag and collection arranged via Help Desk', critical: false, image: 'images/mattress_condemned.jpg' },
    ]
  }]
};

if (typeof module !== 'undefined') module.exports = { EQUIPMENT_DB2, CTG_ROOMS, FRIDGES };
