// ============================================================
//  DASHBOARD 1 ADDITIONS — equipment-data-extra.js
//  PPH Trolleys, Instrumental Trolleys, Emergency Trolley,
//  Epidural Trolleys, Glucose Monitors, Triage Results
// ============================================================

const EQUIPMENT_DB1_EXTRA = {

  // ── TRIAGE RESULTS CHECK ─────────────────────────────────
  triage_results_am: {
    name: 'Triage Results — Morning Review',
    location: 'Triage',
    image: 'images/triage_results.jpg',
    imageCaption: 'Confirm all outstanding triage results have been reviewed and escalated where needed',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Results Review',
        icon: '📋',
        items: [
          { id: 'triage_am_reviewed', name: 'All outstanding results reviewed', desc: 'Confirm all triage results have been checked this morning', critical: true, image: 'images/triage_results_screen.jpg' },
          { id: 'triage_am_escalated', name: 'Any abnormal results escalated', desc: 'Confirm any results requiring action have been escalated to the appropriate clinician', critical: true, image: 'images/triage_escalation.jpg' },
          { id: 'triage_am_clinician', name: 'Reviewing clinician name recorded', desc: 'Enter name of clinician who reviewed results in the notes field', critical: true, image: 'images/triage_sign_off.jpg' },
          { id: 'triage_am_no_outstanding', name: 'No outstanding results remaining unreviewed', desc: 'Confirm all results have been actioned or handed over', critical: true, image: 'images/triage_results_clear.jpg' },
        ]
      }
    ]
  },

  triage_results_pm: {
    name: 'Triage Results — Evening Review',
    location: 'Triage',
    image: 'images/triage_results.jpg',
    imageCaption: 'Confirm all outstanding triage results have been reviewed and escalated where needed',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Results Review',
        icon: '📋',
        items: [
          { id: 'triage_pm_reviewed', name: 'All outstanding results reviewed', desc: 'Confirm all triage results have been checked this evening', critical: true, image: 'images/triage_results_screen.jpg' },
          { id: 'triage_pm_escalated', name: 'Any abnormal results escalated', desc: 'Confirm any results requiring action have been escalated to the appropriate clinician', critical: true, image: 'images/triage_escalation.jpg' },
          { id: 'triage_pm_clinician', name: 'Reviewing clinician name recorded', desc: 'Enter name of clinician who reviewed results in the notes field', critical: true, image: 'images/triage_sign_off.jpg' },
          { id: 'triage_pm_no_outstanding', name: 'No outstanding results remaining unreviewed', desc: 'Confirm all results have been actioned or handed over to night team', critical: true, image: 'images/triage_results_clear.jpg' },
        ]
      }
    ]
  },

  // ── GLUCOSE MONITORS ─────────────────────────────────────
  glucose_monitor_1: {
    name: 'Glucose Monitor 1 — Daily Calibration',
    location: 'Labour Ward',
    image: 'images/glucose_monitor.jpg',
    imageCaption: 'Run control solution test before recording result — ensure strips match monitor code',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Calibration Check',
        icon: '🩸',
        items: [
          { id: 'gm1_strips_code', name: 'Strip code matches monitor code', desc: 'Confirm the code on the test strip pot matches the code displayed on the monitor', critical: true, image: 'images/gm_strip_code.jpg' },
          { id: 'gm1_control_low', name: 'Low control solution test within range', desc: 'Run low control solution — result within acceptable range shown on pot', critical: true, image: 'images/gm_control_low.jpg' },
          { id: 'gm1_control_high', name: 'High control solution test within range', desc: 'Run high control solution — result within acceptable range shown on pot', critical: true, image: 'images/gm_control_high.jpg' },
          { id: 'gm1_battery', name: 'Battery level adequate', desc: 'Battery indicator shows sufficient charge', critical: false, image: 'images/gm_battery.jpg' },
          { id: 'gm1_strips_expiry', name: 'Test strips not expired', desc: 'Check expiry date on strip pot', critical: true, image: 'images/gm_strips_expiry.jpg' },
          { id: 'gm1_control_expiry', name: 'Control solutions not expired', desc: 'Check expiry on both control solution bottles', critical: true, image: 'images/gm_control_expiry.jpg' },
          { id: 'gm1_lancets', name: 'Lancets present and not expired', desc: 'Adequate supply of lancets in date', critical: false, image: 'images/gm_lancets.jpg' },
        ]
      }
    ]
  },

  glucose_monitor_2: {
    name: 'Glucose Monitor 2 — Daily Calibration',
    location: 'Labour Ward',
    image: 'images/glucose_monitor.jpg',
    imageCaption: 'Run control solution test before recording result — ensure strips match monitor code',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Calibration Check',
        icon: '🩸',
        items: [
          { id: 'gm2_strips_code', name: 'Strip code matches monitor code', desc: 'Confirm the code on the test strip pot matches the code displayed on the monitor', critical: true, image: 'images/gm_strip_code.jpg' },
          { id: 'gm2_control_low', name: 'Low control solution test within range', desc: 'Run low control solution — result within acceptable range shown on pot', critical: true, image: 'images/gm_control_low.jpg' },
          { id: 'gm2_control_high', name: 'High control solution test within range', desc: 'Run high control solution — result within acceptable range shown on pot', critical: true, image: 'images/gm_control_high.jpg' },
          { id: 'gm2_battery', name: 'Battery level adequate', desc: 'Battery indicator shows sufficient charge', critical: false, image: 'images/gm_battery.jpg' },
          { id: 'gm2_strips_expiry', name: 'Test strips not expired', desc: 'Check expiry date on strip pot', critical: true, image: 'images/gm_strips_expiry.jpg' },
          { id: 'gm2_control_expiry', name: 'Control solutions not expired', desc: 'Check expiry on both control solution bottles', critical: true, image: 'images/gm_control_expiry.jpg' },
          { id: 'gm2_lancets', name: 'Lancets present and not expired', desc: 'Adequate supply of lancets in date', critical: false, image: 'images/gm_lancets.jpg' },
        ]
      }
    ]
  },

  // ── PPH TROLLEY 1 ────────────────────────────────────────
  pph_trolley_1_daily: {
    name: 'PPH Trolley 1 — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/pph_trolley.jpg',
    imageCaption: 'Confirm PPH Trolley 1 is present in correct location and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Visual Check',
        icon: '👁',
        items: [
          { id: 'pph1_present', name: 'Trolley present in correct location', desc: 'PPH Trolley 1 is in its designated position', critical: true, image: 'images/pph_trolley_location.jpg' },
          { id: 'pph1_sealed', name: 'Trolley seal intact', desc: 'Tamper seal has not been broken since last check — record seal number if visible', critical: true, image: 'images/pph_trolley_seal.jpg' },
        ]
      }
    ]
  },

  pph_trolley_1_monthly: {
    name: 'PPH Trolley 1 — Monthly Full Check',
    location: 'Labour Ward',
    image: 'images/pph_trolley.jpg',
    imageCaption: 'Full contents check — all drawers, all items present and in date. Replace anything expiring within 30 days.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      {
        name: 'Fridge Drugs',
        icon: '❄',
        items: [
          { id: 'pph1_oxytocin', name: '3 x Oxytocin', desc: 'All 3 present in fridge, in date, not within 30 days of expiry', critical: true, image: 'images/pph_oxytocin.jpg' },
          { id: 'pph1_ergometrine', name: '2 x Ergometrine', desc: 'Both present in fridge, in date, not within 30 days of expiry', critical: true, image: 'images/pph_ergometrine.jpg' },
          { id: 'pph1_haemabate', name: '3 x Haemabate', desc: 'All 3 present in fridge, in date, not within 30 days of expiry', critical: true, image: 'images/pph_haemabate.jpg' },
          { id: 'pph1_syntometrine', name: '3 x Syntometrine', desc: 'All 3 present in fridge, in date, not within 30 days of expiry', critical: true, image: 'images/pph_syntometrine.jpg' },
        ]
      },
      {
        name: 'Drawer 1 — Access & Sampling',
        icon: '💉',
        items: [
          { id: 'pph1_d1_pink_bottles', name: '2 x Pink blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_pink.jpg' },
          { id: 'pph1_d1_purple_bottles', name: '2 x Purple blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_purple.jpg' },
          { id: 'pph1_d1_yellow_bottles', name: '2 x Yellow blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_yellow.jpg' },
          { id: 'pph1_d1_blue_bottles', name: '2 x Blue blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_blue.jpg' },
          { id: 'pph1_d1_grey_cannula', name: '2 x Grey cannulas', desc: 'Present, not expired', critical: false, image: 'images/sep_cannula_grey.jpg' },
          { id: 'pph1_d1_green_cannula', name: '2 x Green cannulas', desc: 'Present, not expired', critical: false, image: 'images/sep_cannula_green.jpg' },
          { id: 'pph1_d1_pink_cannula', name: '2 x Pink cannulas', desc: 'Present, not expired', critical: false, image: 'images/sep_cannula_pink.jpg' },
          { id: 'pph1_d1_octopus', name: '2 x Octopus', desc: 'Both present', critical: false, image: 'images/sep_octopus.jpg' },
          { id: 'pph1_d1_tegerderm', name: '4 x Tegaderm dressings', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
          { id: 'pph1_d1_syringe_20ml', name: '2 x 20ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/pph_syringe_20ml.jpg' },
          { id: 'pph1_d1_syringe_10ml', name: '2 x 10ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
          { id: 'pph1_d1_vacutainer', name: '4 x Vacutainers + green and blue attachments', desc: 'All present, not expired', critical: false, image: 'images/sep_vacutainer.jpg' },
          { id: 'pph1_d1_green_needles', name: '4 x Green needles', desc: 'All present, not expired', critical: false, image: 'images/tb_green_needles.jpg' },
          { id: 'pph1_d1_blue_needles', name: '4 x Blue needles', desc: 'All present, not expired', critical: false, image: 'images/pph_blue_needles.jpg' },
          { id: 'pph1_d1_butterfly', name: '2 x Butterflies', desc: 'Both present, not expired', critical: false, image: 'images/pph_butterfly.jpg' },
          { id: 'pph1_d1_saline_flush', name: '2 x Normal saline flushes', desc: 'Both present, not expired', critical: false, image: 'images/sep_saline_flush.jpg' },
          { id: 'pph1_d1_cotton_wool', name: 'Cotton wool', desc: 'Present', critical: false, image: 'images/sep_cotton_wool.jpg' },
          { id: 'pph1_d1_tape', name: 'Tape', desc: 'Present', critical: false, image: 'images/pph_tape.jpg' },
          { id: 'pph1_d1_alcohol_wipes', name: '10 x Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
          { id: 'pph1_d1_vbg', name: '2 x VBG syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_vbg_needles.jpg' },
          { id: 'pph1_d1_tourniquet', name: 'Tourniquet', desc: 'Present', critical: false, image: 'images/sep_tourniquet.jpg' },
        ]
      },
      {
        name: 'Drawer 2 — IV Fluids',
        icon: '💧',
        items: [
          { id: 'pph1_d2_hartmans', name: '2 x 1L Hartmanns', desc: 'Both present, not expired', critical: true, image: 'images/sep_hartmans.jpg' },
          { id: 'pph1_d2_saline_500', name: '2 x 500ml Normal saline', desc: 'Both present, not expired', critical: false, image: 'images/pph_saline_500.jpg' },
          { id: 'pph1_d2_saline_100', name: '2 x 100ml Saline', desc: 'Both present, not expired', critical: false, image: 'images/pph_saline_100.jpg' },
          { id: 'pph1_d2_baxter_giving', name: '2 x Baxter giving sets', desc: 'Both present, not expired', critical: false, image: 'images/pph_baxter_giving.jpg' },
          { id: 'pph1_d2_normal_giving', name: '2 x Normal giving sets', desc: 'Both present, not expired', critical: false, image: 'images/sep_giving_set.jpg' },
        ]
      },
      {
        name: 'Drawer 3 — Drug Preparation',
        icon: '💊',
        items: [
          { id: 'pph1_d3_additive_labels', name: '5 x Additive labels', desc: 'All present', critical: false, image: 'images/pph_additive_labels.jpg' },
          { id: 'pph1_d3_syringe_2ml', name: '5 x 2ml syringes', desc: 'All present, not expired', critical: false, image: 'images/tb_syringes_2ml.jpg' },
          { id: 'pph1_d3_syringe_5ml', name: '5 x 5ml syringes', desc: 'All present, not expired', critical: false, image: 'images/pph_syringe_5ml.jpg' },
          { id: 'pph1_d3_syringe_10ml', name: '2 x 10ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
          { id: 'pph1_d3_blue_needles', name: '5 x Blue needles', desc: 'All present, not expired', critical: false, image: 'images/pph_blue_needles.jpg' },
          { id: 'pph1_d3_filter_needles', name: '5 x Filter needles', desc: 'All present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
          { id: 'pph1_d3_alcohol_wipes', name: 'Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
          { id: 'pph1_d3_tranexamic', name: '4 x Tranexamic acid', desc: 'All 4 present, not expired', critical: true, image: 'images/pph_tranexamic.jpg' },
        ]
      },
      {
        name: 'Drawer 4 — Catheterisation',
        icon: '🩺',
        items: [
          { id: 'pph1_d4_ve_pack', name: '1 x VE pack', desc: 'Present, not expired', critical: false, image: 'images/pph_ve_pack.jpg' },
          { id: 'pph1_d4_instillagel', name: '2 x Instillagel', desc: 'Both present, not expired', critical: false, image: 'images/pph_instillagel.jpg' },
          { id: 'pph1_d4_inout_cath', name: '2 x In/out catheter', desc: 'Both present, not expired', critical: false, image: 'images/pph_inout_cath.jpg' },
          { id: 'pph1_d4_foley', name: '1 x Foley catheter', desc: 'Present, not expired', critical: false, image: 'images/pph_foley.jpg' },
          { id: 'pph1_d4_urometer', name: '1 x Urometer', desc: 'Present', critical: false, image: 'images/pph_urometer.jpg' },
        ]
      },
      {
        name: 'Drawer 5 — Surgical',
        icon: '🧵',
        items: [
          { id: 'pph1_d5_sterile_gloves', name: 'Sterile gloves', desc: 'Range of sizes present, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
          { id: 'pph1_d5_kidney_dish', name: '1 x Kidney dish', desc: 'Present', critical: false, image: 'images/pph_kidney_dish.jpg' },
          { id: 'pph1_d5_xray_gauze', name: '2 x Large x-ray detectable gauze', desc: 'Both present, not expired', critical: false, image: 'images/pph_xray_gauze.jpg' },
          { id: 'pph1_d5_sims', name: '2 x Sims speculum', desc: 'Both present', critical: false, image: 'images/pph_sims.jpg' },
          { id: 'pph1_d5_artery_forceps', name: '2 x Artery forceps', desc: 'Both present', critical: false, image: 'images/pph_artery_forceps.jpg' },
          { id: 'pph1_d5_sponge_holders', name: '2 x Sponge holders', desc: 'Both present', critical: false, image: 'images/pph_sponge_holders.jpg' },
        ]
      },
      {
        name: 'Drawer 6 — Monitoring & Documentation',
        icon: '📊',
        items: [
          { id: 'pph1_d6_o2_highconc', name: 'High concentrate adult O2 mask', desc: 'Present, in packaging', critical: true, image: 'images/pph_o2_highconc.jpg' },
          { id: 'pph1_d6_o2_eco', name: 'Adult eco light O2 mask', desc: 'Present, in packaging', critical: false, image: 'images/pph_o2_eco.jpg' },
          { id: 'pph1_d6_o2_tubing', name: 'O2 tubing', desc: 'Present', critical: false, image: 'images/pph_o2_tubing.jpg' },
          { id: 'pph1_d6_nasal_cannula', name: 'Nasal cannula', desc: 'Present', critical: false, image: 'images/pph_nasal_cannula.jpg' },
          { id: 'pph1_d6_id_bracelet', name: 'ID bracelet', desc: 'Present', critical: false, image: 'images/pph_id_bracelet.jpg' },
          { id: 'pph1_d6_allergy_bracelet', name: 'Allergy bracelet', desc: 'Present', critical: false, image: 'images/pph_allergy_bracelet.jpg' },
          { id: 'pph1_d6_bp_large', name: 'Large BP cuff', desc: 'Present', critical: false, image: 'images/pph_bp_large.jpg' },
          { id: 'pph1_d6_bp_small', name: 'Small BP cuff', desc: 'Present', critical: false, image: 'images/pph_bp_small.jpg' },
          { id: 'pph1_d6_pressure_bag', name: 'Pressure bag', desc: 'Present', critical: false, image: 'images/pph_pressure_bag.jpg' },
          { id: 'pph1_d6_seal_doc', name: 'Trolley seal documentation (plastic wallet)', desc: 'Present', critical: false, image: 'images/pph_seal_doc.jpg' },
          { id: 'pph1_d6_proforma', name: '2 x Mat Neo + PPH proforma', desc: 'Both present', critical: true, image: 'images/pph_proforma.jpg' },
          { id: 'pph1_d6_mews', name: '3 x 2 MEWS charts', desc: 'All 3 present', critical: false, image: 'images/pph_mews.jpg' },
          { id: 'pph1_d6_continuation', name: '3 x Continuation sheets', desc: 'All 3 present', critical: false, image: 'images/pph_continuation.jpg' },
        ]
      }
    ]
  },

  // ── PPH TROLLEY 2 (identical structure, different IDs) ───
  pph_trolley_2_daily: {
    name: 'PPH Trolley 2 — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/pph_trolley.jpg',
    imageCaption: 'Confirm PPH Trolley 2 is present in correct location and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Visual Check',
        icon: '👁',
        items: [
          { id: 'pph2_present', name: 'Trolley present in correct location', desc: 'PPH Trolley 2 is in its designated position', critical: true, image: 'images/pph_trolley_location.jpg' },
          { id: 'pph2_sealed', name: 'Trolley seal intact', desc: 'Tamper seal has not been broken since last check', critical: true, image: 'images/pph_trolley_seal.jpg' },
        ]
      }
    ]
  },

  pph_trolley_2_monthly: {
    name: 'PPH Trolley 2 — Monthly Full Check',
    location: 'Labour Ward',
    image: 'images/pph_trolley.jpg',
    imageCaption: 'Full contents check — all drawers, all items present and in date. Replace anything expiring within 30 days.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      { name: 'Fridge Drugs', icon: '❄', items: [
        { id: 'pph2_oxytocin', name: '3 x Oxytocin', desc: 'All 3 present in fridge, in date, not within 30 days of expiry', critical: true, image: 'images/pph_oxytocin.jpg' },
        { id: 'pph2_ergometrine', name: '2 x Ergometrine', desc: 'Both present in fridge, in date', critical: true, image: 'images/pph_ergometrine.jpg' },
        { id: 'pph2_haemabate', name: '3 x Haemabate', desc: 'All 3 present in fridge, in date', critical: true, image: 'images/pph_haemabate.jpg' },
        { id: 'pph2_syntometrine', name: '3 x Syntometrine', desc: 'All 3 present in fridge, in date', critical: true, image: 'images/pph_syntometrine.jpg' },
      ]},
      { name: 'Drawer 1 — Access & Sampling', icon: '💉', items: [
        { id: 'pph2_d1_pink_bottles', name: '2 x Pink blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_pink.jpg' },
        { id: 'pph2_d1_purple_bottles', name: '2 x Purple blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_purple.jpg' },
        { id: 'pph2_d1_yellow_bottles', name: '2 x Yellow blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_yellow.jpg' },
        { id: 'pph2_d1_blue_bottles', name: '2 x Blue blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_blue.jpg' },
        { id: 'pph2_d1_grey_cannula', name: '2 x Grey cannulas', desc: 'Present, not expired', critical: false, image: 'images/sep_cannula_grey.jpg' },
        { id: 'pph2_d1_green_cannula', name: '2 x Green cannulas', desc: 'Present, not expired', critical: false, image: 'images/sep_cannula_green.jpg' },
        { id: 'pph2_d1_pink_cannula', name: '2 x Pink cannulas', desc: 'Present, not expired', critical: false, image: 'images/sep_cannula_pink.jpg' },
        { id: 'pph2_d1_octopus', name: '2 x Octopus', desc: 'Both present', critical: false, image: 'images/sep_octopus.jpg' },
        { id: 'pph2_d1_tegerderm', name: '4 x Tegaderm dressings', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
        { id: 'pph2_d1_syringe_20ml', name: '2 x 20ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/pph_syringe_20ml.jpg' },
        { id: 'pph2_d1_syringe_10ml', name: '2 x 10ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
        { id: 'pph2_d1_vacutainer', name: '4 x Vacutainers + attachments', desc: 'All present, not expired', critical: false, image: 'images/sep_vacutainer.jpg' },
        { id: 'pph2_d1_green_needles', name: '4 x Green needles', desc: 'All present, not expired', critical: false, image: 'images/tb_green_needles.jpg' },
        { id: 'pph2_d1_blue_needles', name: '4 x Blue needles', desc: 'All present, not expired', critical: false, image: 'images/pph_blue_needles.jpg' },
        { id: 'pph2_d1_butterfly', name: '2 x Butterflies', desc: 'Both present, not expired', critical: false, image: 'images/pph_butterfly.jpg' },
        { id: 'pph2_d1_saline_flush', name: '2 x Normal saline flushes', desc: 'Both present, not expired', critical: false, image: 'images/sep_saline_flush.jpg' },
        { id: 'pph2_d1_cotton_wool', name: 'Cotton wool', desc: 'Present', critical: false, image: 'images/sep_cotton_wool.jpg' },
        { id: 'pph2_d1_tape', name: 'Tape', desc: 'Present', critical: false, image: 'images/pph_tape.jpg' },
        { id: 'pph2_d1_alcohol_wipes', name: '10 x Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
        { id: 'pph2_d1_vbg', name: '2 x VBG syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_vbg_needles.jpg' },
        { id: 'pph2_d1_tourniquet', name: 'Tourniquet', desc: 'Present', critical: false, image: 'images/sep_tourniquet.jpg' },
      ]},
      { name: 'Drawer 2 — IV Fluids', icon: '💧', items: [
        { id: 'pph2_d2_hartmans', name: '2 x 1L Hartmanns', desc: 'Both present, not expired', critical: true, image: 'images/sep_hartmans.jpg' },
        { id: 'pph2_d2_saline_500', name: '2 x 500ml Normal saline', desc: 'Both present, not expired', critical: false, image: 'images/pph_saline_500.jpg' },
        { id: 'pph2_d2_saline_100', name: '2 x 100ml Saline', desc: 'Both present, not expired', critical: false, image: 'images/pph_saline_100.jpg' },
        { id: 'pph2_d2_baxter_giving', name: '2 x Baxter giving sets', desc: 'Both present, not expired', critical: false, image: 'images/pph_baxter_giving.jpg' },
        { id: 'pph2_d2_normal_giving', name: '2 x Normal giving sets', desc: 'Both present, not expired', critical: false, image: 'images/sep_giving_set.jpg' },
      ]},
      { name: 'Drawer 3 — Drug Preparation', icon: '💊', items: [
        { id: 'pph2_d3_additive_labels', name: '5 x Additive labels', desc: 'All present', critical: false, image: 'images/pph_additive_labels.jpg' },
        { id: 'pph2_d3_syringe_2ml', name: '5 x 2ml syringes', desc: 'All present, not expired', critical: false, image: 'images/tb_syringes_2ml.jpg' },
        { id: 'pph2_d3_syringe_5ml', name: '5 x 5ml syringes', desc: 'All present, not expired', critical: false, image: 'images/pph_syringe_5ml.jpg' },
        { id: 'pph2_d3_syringe_10ml', name: '2 x 10ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
        { id: 'pph2_d3_blue_needles', name: '5 x Blue needles', desc: 'All present, not expired', critical: false, image: 'images/pph_blue_needles.jpg' },
        { id: 'pph2_d3_filter_needles', name: '5 x Filter needles', desc: 'All present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
        { id: 'pph2_d3_alcohol_wipes', name: 'Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
        { id: 'pph2_d3_tranexamic', name: '4 x Tranexamic acid', desc: 'All 4 present, not expired', critical: true, image: 'images/pph_tranexamic.jpg' },
      ]},
      { name: 'Drawer 4 — Catheterisation', icon: '🩺', items: [
        { id: 'pph2_d4_ve_pack', name: '1 x VE pack', desc: 'Present, not expired', critical: false, image: 'images/pph_ve_pack.jpg' },
        { id: 'pph2_d4_instillagel', name: '2 x Instillagel', desc: 'Both present, not expired', critical: false, image: 'images/pph_instillagel.jpg' },
        { id: 'pph2_d4_inout_cath', name: '2 x In/out catheter', desc: 'Both present, not expired', critical: false, image: 'images/pph_inout_cath.jpg' },
        { id: 'pph2_d4_foley', name: '1 x Foley catheter', desc: 'Present, not expired', critical: false, image: 'images/pph_foley.jpg' },
        { id: 'pph2_d4_urometer', name: '1 x Urometer', desc: 'Present', critical: false, image: 'images/pph_urometer.jpg' },
      ]},
      { name: 'Drawer 5 — Surgical', icon: '🧵', items: [
        { id: 'pph2_d5_sterile_gloves', name: 'Sterile gloves', desc: 'Range of sizes present, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        { id: 'pph2_d5_kidney_dish', name: '1 x Kidney dish', desc: 'Present', critical: false, image: 'images/pph_kidney_dish.jpg' },
        { id: 'pph2_d5_xray_gauze', name: '2 x Large x-ray detectable gauze', desc: 'Both present, not expired', critical: false, image: 'images/pph_xray_gauze.jpg' },
        { id: 'pph2_d5_sims', name: '2 x Sims speculum', desc: 'Both present', critical: false, image: 'images/pph_sims.jpg' },
        { id: 'pph2_d5_artery_forceps', name: '2 x Artery forceps', desc: 'Both present', critical: false, image: 'images/pph_artery_forceps.jpg' },
        { id: 'pph2_d5_sponge_holders', name: '2 x Sponge holders', desc: 'Both present', critical: false, image: 'images/pph_sponge_holders.jpg' },
      ]},
      { name: 'Drawer 6 — Monitoring & Documentation', icon: '📊', items: [
        { id: 'pph2_d6_o2_highconc', name: 'High concentrate adult O2 mask', desc: 'Present, in packaging', critical: true, image: 'images/pph_o2_highconc.jpg' },
        { id: 'pph2_d6_o2_eco', name: 'Adult eco light O2 mask', desc: 'Present, in packaging', critical: false, image: 'images/pph_o2_eco.jpg' },
        { id: 'pph2_d6_o2_tubing', name: 'O2 tubing', desc: 'Present', critical: false, image: 'images/pph_o2_tubing.jpg' },
        { id: 'pph2_d6_nasal_cannula', name: 'Nasal cannula', desc: 'Present', critical: false, image: 'images/pph_nasal_cannula.jpg' },
        { id: 'pph2_d6_id_bracelet', name: 'ID bracelet', desc: 'Present', critical: false, image: 'images/pph_id_bracelet.jpg' },
        { id: 'pph2_d6_allergy_bracelet', name: 'Allergy bracelet', desc: 'Present', critical: false, image: 'images/pph_allergy_bracelet.jpg' },
        { id: 'pph2_d6_bp_large', name: 'Large BP cuff', desc: 'Present', critical: false, image: 'images/pph_bp_large.jpg' },
        { id: 'pph2_d6_bp_small', name: 'Small BP cuff', desc: 'Present', critical: false, image: 'images/pph_bp_small.jpg' },
        { id: 'pph2_d6_pressure_bag', name: 'Pressure bag', desc: 'Present', critical: false, image: 'images/pph_pressure_bag.jpg' },
        { id: 'pph2_d6_seal_doc', name: 'Trolley seal documentation (plastic wallet)', desc: 'Present', critical: false, image: 'images/pph_seal_doc.jpg' },
        { id: 'pph2_d6_proforma', name: '2 x Mat Neo + PPH proforma', desc: 'Both present', critical: true, image: 'images/pph_proforma.jpg' },
        { id: 'pph2_d6_mews', name: '3 x 2 MEWS charts', desc: 'All 3 present', critical: false, image: 'images/pph_mews.jpg' },
        { id: 'pph2_d6_continuation', name: '3 x Continuation sheets', desc: 'All 3 present', critical: false, image: 'images/pph_continuation.jpg' },
      ]},
    ]
  },

  // ── INSTRUMENTAL TROLLEYS ────────────────────────────────
  instrumental_trolley_1_daily: {
    name: 'Instrumental Trolley 1 — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/instrumental_trolley.jpg',
    imageCaption: 'Confirm Instrumental Trolley 1 is present and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [{ name: 'Visual Check', icon: '👁', items: [
      { id: 'inst1_present', name: 'Trolley present in correct location', desc: 'Instrumental Trolley 1 in designated position', critical: true, image: 'images/instrumental_trolley_location.jpg' },
      { id: 'inst1_sealed', name: 'Trolley seal intact', desc: 'Tamper seal has not been broken since last check', critical: true, image: 'images/instrumental_trolley_seal.jpg' },
    ]}]
  },

  instrumental_trolley_1_monthly: {
    name: 'Instrumental Trolley 1 — Monthly Full Check',
    location: 'Labour Ward',
    image: 'images/instrumental_trolley.jpg',
    imageCaption: 'Full contents check — top of trolley and all drawers. Replace anything expiring within 30 days.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      { name: 'Top of Trolley', icon: '⬆', items: [
        { id: 'inst1_delivery_peri', name: '1 x Delivery/peri repair pack', desc: 'Present, not expired, sealed', critical: true, image: 'images/inst_delivery_peri.jpg' },
        { id: 'inst1_neville_barnes', name: '1 x Neville Barnes forceps', desc: 'Present', critical: true, image: 'images/inst_neville_barnes.jpg' },
        { id: 'inst1_epi_scissors', name: '1 x Episiotomy scissors (if available)', desc: 'Present if allocated to this trolley', critical: false, image: 'images/inst_epi_scissors.jpg' },
        { id: 'inst1_perineal_suture', name: '1 x Perineal suture pack', desc: 'Present, not expired', critical: true, image: 'images/inst_perineal_suture.jpg' },
        { id: 'inst1_cssd_bag', name: '1 x CSSD candy stripe bag for returns', desc: 'Present', critical: false, image: 'images/inst_cssd_bag.jpg' },
        { id: 'inst1_trolley_seal', name: 'Trolley seal documentation', desc: 'Seal present and documented', critical: true, image: 'images/pph_seal_doc.jpg' },
      ]},
      { name: 'Drawers — Catheterisation & Lubrication', icon: '🩺', items: [
        { id: 'inst1_sterile_gloves', name: 'Sterile gloves S/M/L', desc: 'All three sizes present, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        { id: 'inst1_hibitane', name: '1 x Hibitane (at least half full)', desc: 'Bottle present, at least half full', critical: false, image: 'images/inst_hibitane.jpg' },
        { id: 'inst1_sterile_water', name: '10 x Sterile water sachets', desc: 'All 10 present, not expired', critical: false, image: 'images/inst_sterile_water.jpg' },
        { id: 'inst1_optilube', name: '10 x Optilube sachets', desc: 'All 10 present, not expired', critical: false, image: 'images/inst_optilube.jpg' },
        { id: 'inst1_instillagel', name: '4 x Instillagel', desc: 'All 4 present, not expired', critical: false, image: 'images/pph_instillagel.jpg' },
        { id: 'inst1_inout_cath', name: '3 x In/out catheters', desc: 'All 3 present, not expired', critical: false, image: 'images/pph_inout_cath.jpg' },
        { id: 'inst1_foley', name: '3 x Foley catheters', desc: 'All 3 present, not expired', critical: false, image: 'images/pph_foley.jpg' },
        { id: 'inst1_catheter_bags', name: '2 x Catheter bags', desc: 'Both present', critical: false, image: 'images/inst_catheter_bags.jpg' },
        { id: 'inst1_urometer', name: '1 x Urometer bag', desc: 'Present', critical: false, image: 'images/pph_urometer.jpg' },
      ]},
      { name: 'Drawers — Sutures & Instruments', icon: '🧵', items: [
        { id: 'inst1_vicryl_0', name: 'Vicryl Rapide size 0 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst1_vicryl_1', name: 'Vicryl Rapide size 1 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst1_vicryl_2', name: 'Vicryl Rapide size 2 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst1_vicryl_3', name: 'Vicryl Rapide size 3 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst1_vicryl_4', name: 'Vicryl Rapide size 4 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst1_cord_clamps', name: '4 x Cord clamps', desc: 'All 4 present, in packaging', critical: false, image: 'images/res_cord_clamps.jpg' },
        { id: 'inst1_fse', name: '2 x FSE electrodes', desc: 'Both present, not expired', critical: false, image: 'images/inst_fse.jpg' },
        { id: 'inst1_syringe_20ml', name: '2 x 20ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/pph_syringe_20ml.jpg' },
        { id: 'inst1_pudendal', name: '2 x Pudendal needles', desc: 'Both present, not expired', critical: false, image: 'images/inst_pudendal.jpg' },
        { id: 'inst1_blood_gas', name: '10 x Blood gas syringes', desc: 'All 10 present, not expired', critical: false, image: 'images/inst_blood_gas.jpg' },
        { id: 'inst1_xray_swabs', name: '4 x Packs x-ray detectable swabs (large)', desc: 'All 4 present, not expired', critical: false, image: 'images/pph_xray_gauze.jpg' },
        { id: 'inst1_kiwi', name: '2 x Kiwi cups', desc: 'Both present', critical: true, image: 'images/inst_kiwi.jpg' },
        { id: 'inst1_sims', name: '1 x Sims speculum', desc: 'Present', critical: false, image: 'images/pph_sims.jpg' },
        { id: 'inst1_artery', name: '2 x Artery (Spencer Wells)', desc: 'Both present', critical: false, image: 'images/pph_artery_forceps.jpg' },
      ]},
    ]
  },

  instrumental_trolley_2_daily: {
    name: 'Instrumental Trolley 2 — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/instrumental_trolley.jpg',
    imageCaption: 'Confirm Instrumental Trolley 2 is present and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [{ name: 'Visual Check', icon: '👁', items: [
      { id: 'inst2_present', name: 'Trolley present in correct location', desc: 'Instrumental Trolley 2 in designated position', critical: true, image: 'images/instrumental_trolley_location.jpg' },
      { id: 'inst2_sealed', name: 'Trolley seal intact', desc: 'Tamper seal has not been broken since last check', critical: true, image: 'images/instrumental_trolley_seal.jpg' },
    ]}]
  },

  instrumental_trolley_2_monthly: {
    name: 'Instrumental Trolley 2 — Monthly Full Check',
    location: 'Labour Ward',
    image: 'images/instrumental_trolley.jpg',
    imageCaption: 'Full contents check — top of trolley and all drawers. Replace anything expiring within 30 days.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      { name: 'Top of Trolley', icon: '⬆', items: [
        { id: 'inst2_delivery_peri', name: '1 x Delivery/peri repair pack', desc: 'Present, not expired, sealed', critical: true, image: 'images/inst_delivery_peri.jpg' },
        { id: 'inst2_neville_barnes', name: '1 x Neville Barnes forceps', desc: 'Present', critical: true, image: 'images/inst_neville_barnes.jpg' },
        { id: 'inst2_epi_scissors', name: '1 x Episiotomy scissors (if available)', desc: 'Present if allocated to this trolley', critical: false, image: 'images/inst_epi_scissors.jpg' },
        { id: 'inst2_perineal_suture', name: '1 x Perineal suture pack', desc: 'Present, not expired', critical: true, image: 'images/inst_perineal_suture.jpg' },
        { id: 'inst2_cssd_bag', name: '1 x CSSD candy stripe bag for returns', desc: 'Present', critical: false, image: 'images/inst_cssd_bag.jpg' },
        { id: 'inst2_trolley_seal', name: 'Trolley seal documentation', desc: 'Seal present and documented', critical: true, image: 'images/pph_seal_doc.jpg' },
      ]},
      { name: 'Drawers — Catheterisation & Lubrication', icon: '🩺', items: [
        { id: 'inst2_sterile_gloves', name: 'Sterile gloves S/M/L', desc: 'All three sizes present, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        { id: 'inst2_hibitane', name: '1 x Hibitane (at least half full)', desc: 'Bottle present, at least half full', critical: false, image: 'images/inst_hibitane.jpg' },
        { id: 'inst2_sterile_water', name: '10 x Sterile water sachets', desc: 'All 10 present, not expired', critical: false, image: 'images/inst_sterile_water.jpg' },
        { id: 'inst2_optilube', name: '10 x Optilube sachets', desc: 'All 10 present, not expired', critical: false, image: 'images/inst_optilube.jpg' },
        { id: 'inst2_instillagel', name: '4 x Instillagel', desc: 'All 4 present, not expired', critical: false, image: 'images/pph_instillagel.jpg' },
        { id: 'inst2_inout_cath', name: '3 x In/out catheters', desc: 'All 3 present, not expired', critical: false, image: 'images/pph_inout_cath.jpg' },
        { id: 'inst2_foley', name: '3 x Foley catheters', desc: 'All 3 present, not expired', critical: false, image: 'images/pph_foley.jpg' },
        { id: 'inst2_catheter_bags', name: '2 x Catheter bags', desc: 'Both present', critical: false, image: 'images/inst_catheter_bags.jpg' },
        { id: 'inst2_urometer', name: '1 x Urometer bag', desc: 'Present', critical: false, image: 'images/pph_urometer.jpg' },
      ]},
      { name: 'Drawers — Sutures & Instruments', icon: '🧵', items: [
        { id: 'inst2_vicryl_0', name: 'Vicryl Rapide size 0 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst2_vicryl_1', name: 'Vicryl Rapide size 1 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst2_vicryl_2', name: 'Vicryl Rapide size 2 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst2_vicryl_3', name: 'Vicryl Rapide size 3 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst2_vicryl_4', name: 'Vicryl Rapide size 4 — 4 needles', desc: 'Present, not expired', critical: true, image: 'images/inst_vicryl.jpg' },
        { id: 'inst2_cord_clamps', name: '4 x Cord clamps', desc: 'All 4 present', critical: false, image: 'images/res_cord_clamps.jpg' },
        { id: 'inst2_fse', name: '2 x FSE electrodes', desc: 'Both present, not expired', critical: false, image: 'images/inst_fse.jpg' },
        { id: 'inst2_syringe_20ml', name: '2 x 20ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/pph_syringe_20ml.jpg' },
        { id: 'inst2_pudendal', name: '2 x Pudendal needles', desc: 'Both present, not expired', critical: false, image: 'images/inst_pudendal.jpg' },
        { id: 'inst2_blood_gas', name: '10 x Blood gas syringes', desc: 'All 10 present, not expired', critical: false, image: 'images/inst_blood_gas.jpg' },
        { id: 'inst2_xray_swabs', name: '4 x Packs x-ray detectable swabs (large)', desc: 'All 4 present, not expired', critical: false, image: 'images/pph_xray_gauze.jpg' },
        { id: 'inst2_kiwi', name: '2 x Kiwi cups', desc: 'Both present', critical: true, image: 'images/inst_kiwi.jpg' },
        { id: 'inst2_sims', name: '1 x Sims speculum', desc: 'Present', critical: false, image: 'images/pph_sims.jpg' },
        { id: 'inst2_artery', name: '2 x Artery (Spencer Wells)', desc: 'Both present', critical: false, image: 'images/pph_artery_forceps.jpg' },
      ]},
    ]
  },

  // ── EPIDURAL TROLLEYS ────────────────────────────────────
  epidural_trolley_1_daily: {
    name: 'Epidural Trolley 1 — Daily Full Check',
    location: 'Labour Ward',
    image: 'images/epidural_trolley.jpg',
    imageCaption: 'Daily check of all contents — trolley is not sealed. Check top and all five drawers.',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      { name: 'Top of Trolley', icon: '⬆', items: [
        { id: 'epi1_info_card', name: '1 x Epidural information card', desc: 'Present and legible', critical: false, image: 'images/epi_info_card.jpg' },
        { id: 'epi1_gowns', name: '2 x Gowns', desc: 'Both present', critical: false, image: 'images/epi_gowns.jpg' },
        { id: 'epi1_custom_kit', name: '2 x Epidural custom kits', desc: 'Both present, not expired', critical: true, image: 'images/epi_custom_kit.jpg' },
      ]},
      { name: 'Drawer 1 — PPE & Wristbands', icon: '🧤', items: [
        { id: 'epi1_d1_hats', name: 'Hats', desc: 'Adequate supply', critical: false, image: 'images/epi_hats.jpg' },
        { id: 'epi1_d1_masks', name: 'Masks', desc: 'Adequate supply', critical: false, image: 'images/epi_masks.jpg' },
        { id: 'epi1_d1_gloves', name: 'Sterile gloves', desc: 'Range of sizes present, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        { id: 'epi1_d1_info_cards', name: 'Translated information cards', desc: 'Present', critical: false, image: 'images/epi_translated_cards.jpg' },
        { id: 'epi1_d1_wristbands', name: 'Yellow wristbands', desc: 'Present', critical: false, image: 'images/epi_wristbands.jpg' },
      ]},
      { name: 'Drawer 2 — Emergency Drugs', icon: '💊', items: [
        { id: 'epi1_d2_ephedrine', name: '1 x Box Ephedrine', desc: 'Present, not expired', critical: true, image: 'images/epi_ephedrine.jpg' },
        { id: 'epi1_d2_atropine', name: '1 x Box Atropine', desc: 'Present, not expired', critical: true, image: 'images/epi_atropine.jpg' },
        { id: 'epi1_d2_intralipid', name: '1 x Intralipid', desc: 'Present, not expired', critical: true, image: 'images/epi_intralipid.jpg' },
        { id: 'epi1_d2_nacl', name: '20 x 0.9% NaCl', desc: 'All 20 present, not expired', critical: false, image: 'images/epi_nacl.jpg' },
        { id: 'epi1_d2_stickers', name: 'Epidural use stickers', desc: 'Present', critical: false, image: 'images/epi_stickers.jpg' },
        { id: 'epi1_d2_s2ml', name: '5 x 2ml syringes', desc: 'All present, not expired', critical: false, image: 'images/tb_syringes_2ml.jpg' },
        { id: 'epi1_d2_s5ml', name: '5 x 5ml syringes', desc: 'All present, not expired', critical: false, image: 'images/pph_syringe_5ml.jpg' },
        { id: 'epi1_d2_s10ml', name: '5 x 10ml syringes', desc: 'All present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
        { id: 'epi1_d2_s20ml', name: '5 x 20ml syringes', desc: 'All present, not expired', critical: false, image: 'images/pph_syringe_20ml.jpg' },
      ]},
      { name: 'Drawer 3 — Spinal & Epidural Needles', icon: '🪡', items: [
        { id: 'epi1_d3_spinal_120', name: '2 x 25g spinal needles 120mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_spinal_needle.jpg' },
        { id: 'epi1_d3_spinal_90', name: '2 x 25g spinal needles 90mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_spinal_needle.jpg' },
        { id: 'epi1_d3_touhy_110', name: '2 x 16g Touhy needles 110mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_touhy_needle.jpg' },
        { id: 'epi1_d3_touhy_80', name: '2 x 16g Touhy needles 80mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_touhy_needle.jpg' },
        { id: 'epi1_d3_filter_needles', name: '3 x Blunt drawing up filter needles NRfit', desc: 'All present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
        { id: 'epi1_d3_scissors', name: '1 x Scissors', desc: 'Present', critical: false, image: 'images/res_scissors.jpg' },
        { id: 'epi1_d3_mefix', name: '1 x Box Mefix', desc: 'Present', critical: false, image: 'images/epi_mefix.jpg' },
        { id: 'epi1_d3_transpore', name: '2 x Transpore tape 5cm', desc: 'Both present', critical: false, image: 'images/epi_transpore.jpg' },
        { id: 'epi1_d3_ethyl_chloride', name: '2 x Ethyl chloride spray', desc: 'Both present, not expired', critical: false, image: 'images/epi_ethyl_chloride.jpg' },
      ]},
      { name: 'Drawer 4 — Catheters & Giving Sets', icon: '🔌', items: [
        { id: 'epi1_d4_nrfit_cath', name: '2 x NRfit catheters', desc: 'Both present, not expired', critical: true, image: 'images/epi_nrfit_cath.jpg' },
        { id: 'epi1_d4_lockit', name: '8 x Lock it dressing', desc: 'All present, not expired', critical: false, image: 'images/epi_lockit.jpg' },
        { id: 'epi1_d4_tegaderm', name: '12 x Large Tegaderm', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
        { id: 'epi1_d4_yellow_10ml', name: '8 x 10ml syringes yellow', desc: 'All present, not expired', critical: false, image: 'images/epi_yellow_syringe.jpg' },
        { id: 'epi1_d4_yellow_3ml', name: '8 x 3ml syringes yellow', desc: 'All present, not expired', critical: false, image: 'images/epi_yellow_syringe.jpg' },
        { id: 'epi1_d4_epi_giving', name: '8 x Epidural giving sets', desc: 'All present, not expired', critical: true, image: 'images/epi_giving_set.jpg' },
        { id: 'epi1_d4_nrfit_hub', name: 'Box of NRfit hub caps (yellow bungs)', desc: 'Present', critical: false, image: 'images/epi_nrfit_hub.jpg' },
        { id: 'epi1_d4_alcohol_wipes', name: 'Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
        { id: 'epi1_d4_cannula', name: 'Cannulas various sizes (2 x each)', desc: 'All sizes present, not expired', critical: false, image: 'images/sep_cannula_grey.jpg' },
        { id: 'epi1_d4_cannula_tegaderm', name: '4 x Cannula/small Tegaderm', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
        { id: 'epi1_d4_vacutainers', name: 'Vacutainers and collectors', desc: 'Present, not expired', critical: false, image: 'images/sep_vacutainer.jpg' },
        { id: 'epi1_d4_needles', name: 'Various needles', desc: 'Adequate supply present, not expired', critical: false, image: 'images/pph_blue_needles.jpg' },
      ]},
      { name: 'Drawer 5 — Fluids & Skin Prep', icon: '💧', items: [
        { id: 'epi1_d5_csl', name: '1 x 1L CSL (Hartmanns)', desc: 'Present, not expired', critical: true, image: 'images/sep_hartmans.jpg' },
        { id: 'epi1_d5_chlorhex', name: '1 x Bottle chlorhexidine 0.5%', desc: 'Present, not expired, not expired after opening', critical: true, image: 'images/epi_chlorhex.jpg' },
        { id: 'epi1_d5_custom_kit', name: '1 x Custom epidural kit', desc: 'Present, not expired', critical: true, image: 'images/epi_custom_kit.jpg' },
        { id: 'epi1_d5_spinal_kit', name: '1 x Spinal kit', desc: 'Present, not expired', critical: true, image: 'images/epi_spinal_kit.jpg' },
        { id: 'epi1_d5_scrub_brushes', name: '2 x Scrub brushes', desc: 'Both present', critical: false, image: 'images/epi_scrub_brushes.jpg' },
        { id: 'epi1_d5_blood_giving', name: '2 x Blood giving sets', desc: 'Both present, not expired', critical: false, image: 'images/pph_baxter_giving.jpg' },
      ]},
    ]
  },

  epidural_trolley_2_daily: {
    name: 'Epidural Trolley 2 — Daily Full Check',
    location: 'Labour Ward',
    image: 'images/epidural_trolley.jpg',
    imageCaption: 'Daily check of all contents — trolley is not sealed. Check top and all five drawers.',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      { name: 'Top of Trolley', icon: '⬆', items: [
        { id: 'epi2_info_card', name: '1 x Epidural information card', desc: 'Present and legible', critical: false, image: 'images/epi_info_card.jpg' },
        { id: 'epi2_gowns', name: '2 x Gowns', desc: 'Both present', critical: false, image: 'images/epi_gowns.jpg' },
        { id: 'epi2_custom_kit', name: '2 x Epidural custom kits', desc: 'Both present, not expired', critical: true, image: 'images/epi_custom_kit.jpg' },
      ]},
      { name: 'Drawer 1 — PPE & Wristbands', icon: '🧤', items: [
        { id: 'epi2_d1_hats', name: 'Hats', desc: 'Adequate supply', critical: false, image: 'images/epi_hats.jpg' },
        { id: 'epi2_d1_masks', name: 'Masks', desc: 'Adequate supply', critical: false, image: 'images/epi_masks.jpg' },
        { id: 'epi2_d1_gloves', name: 'Sterile gloves', desc: 'Range of sizes present, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        { id: 'epi2_d1_info_cards', name: 'Translated information cards', desc: 'Present', critical: false, image: 'images/epi_translated_cards.jpg' },
        { id: 'epi2_d1_wristbands', name: 'Yellow wristbands', desc: 'Present', critical: false, image: 'images/epi_wristbands.jpg' },
      ]},
      { name: 'Drawer 2 — Emergency Drugs', icon: '💊', items: [
        { id: 'epi2_d2_ephedrine', name: '1 x Box Ephedrine', desc: 'Present, not expired', critical: true, image: 'images/epi_ephedrine.jpg' },
        { id: 'epi2_d2_atropine', name: '1 x Box Atropine', desc: 'Present, not expired', critical: true, image: 'images/epi_atropine.jpg' },
        { id: 'epi2_d2_intralipid', name: '1 x Intralipid', desc: 'Present, not expired', critical: true, image: 'images/epi_intralipid.jpg' },
        { id: 'epi2_d2_nacl', name: '20 x 0.9% NaCl', desc: 'All 20 present, not expired', critical: false, image: 'images/epi_nacl.jpg' },
        { id: 'epi2_d2_stickers', name: 'Epidural use stickers', desc: 'Present', critical: false, image: 'images/epi_stickers.jpg' },
        { id: 'epi2_d2_s2ml', name: '5 x 2ml syringes', desc: 'All present, not expired', critical: false, image: 'images/tb_syringes_2ml.jpg' },
        { id: 'epi2_d2_s5ml', name: '5 x 5ml syringes', desc: 'All present, not expired', critical: false, image: 'images/pph_syringe_5ml.jpg' },
        { id: 'epi2_d2_s10ml', name: '5 x 10ml syringes', desc: 'All present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
        { id: 'epi2_d2_s20ml', name: '5 x 20ml syringes', desc: 'All present, not expired', critical: false, image: 'images/pph_syringe_20ml.jpg' },
      ]},
      { name: 'Drawer 3 — Spinal & Epidural Needles', icon: '🪡', items: [
        { id: 'epi2_d3_spinal_120', name: '2 x 25g spinal needles 120mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_spinal_needle.jpg' },
        { id: 'epi2_d3_spinal_90', name: '2 x 25g spinal needles 90mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_spinal_needle.jpg' },
        { id: 'epi2_d3_touhy_110', name: '2 x 16g Touhy needles 110mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_touhy_needle.jpg' },
        { id: 'epi2_d3_touhy_80', name: '2 x 16g Touhy needles 80mm', desc: 'Both present, not expired', critical: true, image: 'images/epi_touhy_needle.jpg' },
        { id: 'epi2_d3_filter_needles', name: '3 x Blunt drawing up filter needles NRfit', desc: 'All present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
        { id: 'epi2_d3_scissors', name: '1 x Scissors', desc: 'Present', critical: false, image: 'images/res_scissors.jpg' },
        { id: 'epi2_d3_mefix', name: '1 x Box Mefix', desc: 'Present', critical: false, image: 'images/epi_mefix.jpg' },
        { id: 'epi2_d3_transpore', name: '2 x Transpore tape 5cm', desc: 'Both present', critical: false, image: 'images/epi_transpore.jpg' },
        { id: 'epi2_d3_ethyl_chloride', name: '2 x Ethyl chloride spray', desc: 'Both present, not expired', critical: false, image: 'images/epi_ethyl_chloride.jpg' },
      ]},
      { name: 'Drawer 4 — Catheters & Giving Sets', icon: '🔌', items: [
        { id: 'epi2_d4_nrfit_cath', name: '2 x NRfit catheters', desc: 'Both present, not expired', critical: true, image: 'images/epi_nrfit_cath.jpg' },
        { id: 'epi2_d4_lockit', name: '8 x Lock it dressing', desc: 'All present, not expired', critical: false, image: 'images/epi_lockit.jpg' },
        { id: 'epi2_d4_tegaderm', name: '12 x Large Tegaderm', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
        { id: 'epi2_d4_yellow_10ml', name: '8 x 10ml syringes yellow', desc: 'All present, not expired', critical: false, image: 'images/epi_yellow_syringe.jpg' },
        { id: 'epi2_d4_yellow_3ml', name: '8 x 3ml syringes yellow', desc: 'All present, not expired', critical: false, image: 'images/epi_yellow_syringe.jpg' },
        { id: 'epi2_d4_epi_giving', name: '8 x Epidural giving sets', desc: 'All present, not expired', critical: true, image: 'images/epi_giving_set.jpg' },
        { id: 'epi2_d4_nrfit_hub', name: 'Box of NRfit hub caps (yellow bungs)', desc: 'Present', critical: false, image: 'images/epi_nrfit_hub.jpg' },
        { id: 'epi2_d4_alcohol_wipes', name: 'Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
        { id: 'epi2_d4_cannula', name: 'Cannulas various sizes (2 x each)', desc: 'All sizes present, not expired', critical: false, image: 'images/sep_cannula_grey.jpg' },
        { id: 'epi2_d4_cannula_tegaderm', name: '4 x Cannula/small Tegaderm', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
        { id: 'epi2_d4_vacutainers', name: 'Vacutainers and collectors', desc: 'Present, not expired', critical: false, image: 'images/sep_vacutainer.jpg' },
        { id: 'epi2_d4_needles', name: 'Various needles', desc: 'Adequate supply present, not expired', critical: false, image: 'images/pph_blue_needles.jpg' },
      ]},
      { name: 'Drawer 5 — Fluids & Skin Prep', icon: '💧', items: [
        { id: 'epi2_d5_csl', name: '1 x 1L CSL (Hartmanns)', desc: 'Present, not expired', critical: true, image: 'images/sep_hartmans.jpg' },
        { id: 'epi2_d5_chlorhex', name: '1 x Bottle chlorhexidine 0.5%', desc: 'Present, not expired', critical: true, image: 'images/epi_chlorhex.jpg' },
        { id: 'epi2_d5_custom_kit', name: '1 x Custom epidural kit', desc: 'Present, not expired', critical: true, image: 'images/epi_custom_kit.jpg' },
        { id: 'epi2_d5_spinal_kit', name: '1 x Spinal kit', desc: 'Present, not expired', critical: true, image: 'images/epi_spinal_kit.jpg' },
        { id: 'epi2_d5_scrub_brushes', name: '2 x Scrub brushes', desc: 'Both present', critical: false, image: 'images/epi_scrub_brushes.jpg' },
        { id: 'epi2_d5_blood_giving', name: '2 x Blood giving sets', desc: 'Both present, not expired', critical: false, image: 'images/pph_baxter_giving.jpg' },
      ]},
    ]
  },

  // ── EMERGENCY TROLLEY ────────────────────────────────────
  emergency_trolley_daily: {
    name: 'Emergency Trolley — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/emergency_trolley.jpg',
    imageCaption: 'Confirm emergency trolley is present in correct location and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [{ name: 'Visual Check', icon: '👁', items: [
      { id: 'emg_present', name: 'Trolley present in correct location', desc: 'Emergency trolley in designated position', critical: true, image: 'images/emergency_trolley_location.jpg' },
      { id: 'emg_sealed', name: 'Trolley seal intact', desc: 'Red secure tag seal has not been broken', critical: true, image: 'images/emergency_trolley_seal.jpg' },
    ]}]
  },

  emergency_trolley_monthly: {
    name: 'Emergency Trolley — Monthly Full Check',
    location: 'Labour Ward',
    image: 'images/emergency_trolley.jpg',
    imageCaption: 'Full contents check of all six drawers including specialist drug bags. Replace anything expiring within 30 days.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      { name: 'Drawer 1 — Documentation', icon: '📋', items: [
        { id: 'emg_d1_snapshot', name: '1 x Emergency snapshot folder', desc: 'Present and up to date', critical: true, image: 'images/emg_snapshot.jpg' },
      ]},
      { name: 'Drawer 2 — Access & Sampling', icon: '💉', items: [
        { id: 'emg_d2_baxter_giving', name: '2 x Baxter giving sets', desc: 'Both present, not expired', critical: false, image: 'images/pph_baxter_giving.jpg' },
        { id: 'emg_d2_purple_bottles', name: '2 x Purple blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_purple.jpg' },
        { id: 'emg_d2_yellow_bottles', name: '2 x Yellow blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_yellow.jpg' },
        { id: 'emg_d2_pink_bottles', name: '2 x Pink blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_pink.jpg' },
        { id: 'emg_d2_blue_bottles', name: '2 x Blue blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_blue.jpg' },
        { id: 'emg_d2_grey_bottles', name: '2 x Grey blood bottles', desc: 'Present, not expired', critical: false, image: 'images/sep_bottle_grey.jpg' },
        { id: 'emg_d2_octopus', name: '2 x Octopus', desc: 'Both present', critical: false, image: 'images/sep_octopus.jpg' },
        { id: 'emg_d2_saline_flush', name: '2 x 10ml NaCl saline flush', desc: 'Both present, not expired', critical: false, image: 'images/sep_saline_flush.jpg' },
        { id: 'emg_d2_alcohol_wipes', name: '10 x Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
        { id: 'emg_d2_green_needles', name: '3 x Green needles', desc: 'All present, not expired', critical: false, image: 'images/tb_green_needles.jpg' },
        { id: 'emg_d2_filter_needles', name: '4 x Filter needles', desc: 'All present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
        { id: 'emg_d2_glass_filter', name: '4 x Glass filter needles', desc: 'All present, not expired', critical: false, image: 'images/emg_glass_filter.jpg' },
        { id: 'emg_d2_grey_cannula', name: '3 x Grey cannulas', desc: 'All present, not expired', critical: false, image: 'images/sep_cannula_grey.jpg' },
        { id: 'emg_d2_green_cannula', name: '3 x Green cannulas', desc: 'All present, not expired', critical: false, image: 'images/sep_cannula_green.jpg' },
        { id: 'emg_d2_pink_cannula', name: '3 x Pink cannulas', desc: 'All present, not expired', critical: false, image: 'images/sep_cannula_pink.jpg' },
        { id: 'emg_d2_orange_cannula', name: '3 x Orange cannulas', desc: 'All present, not expired', critical: false, image: 'images/emg_orange_cannula.jpg' },
        { id: 'emg_d2_tourniquet', name: 'Tourniquet', desc: 'Present', critical: false, image: 'images/sep_tourniquet.jpg' },
        { id: 'emg_d2_abg', name: '2 x ABG needles', desc: 'Both present, not expired', critical: false, image: 'images/emg_abg_needle.jpg' },
        { id: 'emg_d2_drug_labels', name: 'Drug additive labels', desc: 'Present', critical: false, image: 'images/pph_additive_labels.jpg' },
        { id: 'emg_d2_vacutainer', name: 'Vacutainer + blue and green attachments', desc: 'Present, not expired', critical: false, image: 'images/sep_vacutainer.jpg' },
        { id: 'emg_d2_tegerderm', name: '3 x Tegaderm', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
        { id: 'emg_d2_pen_torch', name: 'Pen torch', desc: 'Present and working', critical: false, image: 'images/emg_pen_torch.jpg' },
      ]},
      { name: 'Drawer 3 — Specialist Drug Bags', icon: '🔴', items: [
        { id: 'emg_d3_mag_bolus', name: 'Red bag — MgSO4 bolus bag complete', desc: '4g MgSO4 bag, 1 x 20ml syringe, 1 x filter needle all present and in date', critical: true, image: 'images/emg_mag_bolus.jpg' },
        { id: 'emg_d3_mag_infusion', name: 'Red bag — MgSO4 infusion complete', desc: '1 x 50ml syringe, 10g MgSO4, filter needle, spiral giving set — all present and in date', critical: true, image: 'images/emg_mag_infusion.jpg' },
        { id: 'emg_d3_mag_flashcard', name: 'Magnesium sulphate flash card present', desc: 'Laminated dosing flashcard in red bag', critical: true, image: 'images/emg_mag_flashcard.jpg' },
        { id: 'emg_d3_hydral_bolus', name: 'Hydralazine box — bolus bag complete', desc: '1 x 20mg hydralazine ampoule, 1ml syringe, filter needle, 10ml syringe, water for injection, NaCl — all present and in date', critical: true, image: 'images/emg_hydral_bolus.jpg' },
        { id: 'emg_d3_hydral_infusion', name: 'Hydralazine box — infusion complete', desc: '2 x 20mg hydralazine ampoules, 50ml syringe, spiral giving set, syringes, filter needles, NaCl, water for injection — all present and in date', critical: true, image: 'images/emg_hydral_infusion.jpg' },
        { id: 'emg_d3_labetalol', name: 'Labetalol infusion complete', desc: '1 x 250ml NaCl, 2 x 100mg/20ml labetalol vials, Baxter giving set — all present and in date', critical: true, image: 'images/emg_labetalol.jpg' },
      ]},
      { name: 'Drawer 4 — Monitoring', icon: '📊', items: [
        { id: 'emg_d4_o2_mask', name: '1 x Non-rebreathing O2 mask', desc: 'Present, in packaging', critical: true, image: 'images/pph_o2_highconc.jpg' },
        { id: 'emg_d4_bp_all_sizes', name: 'BP cuff — each size present', desc: 'Small, medium and large cuffs all present', critical: false, image: 'images/pph_bp_large.jpg' },
        { id: 'emg_d4_nasal_cannula', name: '1 x Nasal O2 cannula', desc: 'Present, in packaging', critical: false, image: 'images/pph_nasal_cannula.jpg' },
        { id: 'emg_d4_cardiac_connector', name: '1 x 3-lead cardiac connector', desc: 'Present', critical: false, image: 'images/emg_cardiac_connector.jpg' },
        { id: 'emg_d4_arterial_connector', name: '1 x Arterial line connector', desc: 'Present', critical: false, image: 'images/emg_arterial_connector.jpg' },
      ]},
      { name: 'Drawer 5 — Catheterisation', icon: '🩺', items: [
        { id: 'emg_d5_foley', name: '2 x Foley catheters', desc: 'Both present, not expired', critical: false, image: 'images/pph_foley.jpg' },
        { id: 'emg_d5_cath_bag', name: '1 x Catheter bag', desc: 'Present', critical: false, image: 'images/inst_catheter_bags.jpg' },
        { id: 'emg_d5_urometer', name: '1 x Urometer', desc: 'Present', critical: false, image: 'images/pph_urometer.jpg' },
      ]},
      { name: 'Drawer 6 — Documentation & Seals', icon: '📋', items: [
        { id: 'emg_d6_drug_charts', name: '2 x Drug charts', desc: 'Both present', critical: false, image: 'images/emg_drug_chart.jpg' },
        { id: 'emg_d6_mews', name: '2 x EMC MEWS charts', desc: 'Both present', critical: false, image: 'images/pph_mews.jpg' },
        { id: 'emg_d6_red_tags', name: 'Red secure tags', desc: 'New red tags applied after check', critical: true, image: 'images/emg_red_tags.jpg' },
      ]},
    ]
  },

};

if (typeof module !== 'undefined') module.exports = { EQUIPMENT_DB1_EXTRA };
