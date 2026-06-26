// ============================================================
//  STOKE MANDEVILLE HOSPITAL — LABOUR WARD
//  Equipment Check System — Equipment Definitions
//  Dashboard 1: Emergency Equipment
// ============================================================

const EQUIPMENT_DB1 = {

  // ── CPR TROLLEY ──────────────────────────────────────────
  cpr_trolley_daily: {
    name: 'CPR Trolley — Daily Sign-off',
    location: 'Labour Ward',
    image: 'images/cpr_trolley.jpg',
    imageCaption: 'Confirm paper checklist is signed and dated before submitting',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Daily Paper Check',
        icon: '📋',
        items: [
          { id: 'cpr_paper_signed', name: 'Paper checklist signed and dated', desc: 'Physical paper checklist on trolley is signed and dated by checking clinician', critical: true, image: 'images/cpr_paper_checklist.jpg' },
          { id: 'cpr_trolley_present', name: 'Trolley present in correct location', desc: 'CPR trolley is in its designated position and accessible', critical: true, image: 'images/cpr_trolley_location.jpg' },
          { id: 'cpr_seal_intact', name: 'Seal intact (if applicable)', desc: 'Confirm tamper seal has not been broken since last check', critical: false, image: 'images/cpr_seal.jpg' },
        ]
      }
    ]
  },

  cpr_trolley_weekly: {
    name: 'CPR Trolley — Weekly Full Check',
    location: 'Labour Ward',
    image: 'images/cpr_trolley.jpg',
    imageCaption: 'Full 7-day contents check — check all items against resus department paper list',
    frequency: 'weekly',
    afterEmergency: true,
    categories: [
      {
        name: 'Full Contents Check',
        icon: '✅',
        items: [
          { id: 'cpr_full_contents', name: 'All contents present and checked', desc: 'Check all items against the resus department paper checklist', critical: true, image: 'images/cpr_contents.jpg' },
          { id: 'cpr_full_signed', name: 'Paper checklist signed and dated', desc: 'Sign and date the physical paper checklist', critical: true, image: 'images/cpr_paper_checklist.jpg' },
          { id: 'cpr_expiry_checked', name: 'Expiry dates checked on all applicable items', desc: 'Check all drugs and consumables for expiry — replace anything expiring within 30 days', critical: true, image: 'images/cpr_expiry.jpg' },
          { id: 'cpr_resealed', name: 'Trolley resealed with new seal', desc: 'New tamper seal applied and number recorded', critical: true, image: 'images/cpr_seal.jpg' },
        ]
      }
    ]
  },

  // ── TRANSFER BAG — HANDOVER ROOM ─────────────────────────
  transfer_bag_handover_daily: {
    name: 'Transfer Bag — Handover Room (Daily)',
    location: 'Handover Room',
    image: 'images/transfer_bag.jpg',
    imageCaption: 'Confirm bag is present in handover room and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Visual Check',
        icon: '👁',
        items: [
          { id: 'tbh_present', name: 'Transfer bag present in handover room', desc: 'Bag is in its designated location', critical: true, image: 'images/transfer_bag_location_handover.jpg' },
          { id: 'tbh_sealed', name: 'Bag seal intact', desc: 'Tamper seal has not been broken since last check', critical: true, image: 'images/transfer_bag_seal.jpg' },
        ]
      }
    ]
  },

  transfer_bag_handover_monthly: {
    name: 'Transfer Bag — Handover Room (Monthly)',
    location: 'Handover Room',
    image: 'images/transfer_bag.jpg',
    imageCaption: 'Full contents check — all items present, in date and not expiring within 30 days. Replace anything due to expire.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      {
        name: 'Baby Equipment',
        icon: '👶',
        items: [
          { id: 'tbh_hat_large', name: '1 x Hat (large)', desc: 'Present, clean, in date', critical: false, image: 'images/tb_hat_large.jpg' },
          { id: 'tbh_hat_small', name: '1 x Hat (small)', desc: 'Present, clean, in date', critical: false, image: 'images/tb_hat_small.jpg' },
          { id: 'tbh_towels', name: '2 x Towels', desc: 'Both present, clean', critical: false, image: 'images/tb_towels.jpg' },
          { id: 'tbh_blanket', name: '1 x Blanket', desc: 'Present, clean', critical: false, image: 'images/tb_blanket.jpg' },
          { id: 'tbh_transwarmer', name: '1 x Transwarmer', desc: 'Present and in date — check expiry', critical: true, image: 'images/tb_transwarmer.jpg' },
          { id: 'tbh_plastic_bag', name: '1 x Plastic bag', desc: 'Present', critical: false, image: 'images/tb_plastic_bag.jpg' },
          { id: 'tbh_baby_labels', name: '2 x Baby labels', desc: 'Both present', critical: false, image: 'images/tb_baby_labels.jpg' },
          { id: 'tbh_inco_sheets', name: 'Inco sheets', desc: 'Present and adequate supply', critical: false, image: 'images/tb_inco_sheets.jpg' },
        ]
      },
      {
        name: 'Airway',
        icon: '💨',
        items: [
          { id: 'tbh_mask_0', name: '1 x Size 0 mask', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_mask_0.jpg' },
          { id: 'tbh_mask_1', name: '1 x Size 1 mask', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_mask_1.jpg' },
          { id: 'tbh_ambu_bag', name: '1 x Paed ambu bag', desc: 'Present and intact', critical: true, image: 'images/tb_ambu_bag.jpg' },
          { id: 'tbh_igel', name: '1 x I-gel', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_igel.jpg' },
          { id: 'tbh_laryngoscope', name: '1 x Laryngoscope with size 0 and size 1 blades', desc: 'Present, light working, both blades attached', critical: true, image: 'images/tb_laryngoscope.jpg' },
          { id: 'tbh_spare_batteries', name: 'Spare batteries for laryngoscope', desc: 'Present and correct size', critical: false, image: 'images/tb_batteries.jpg' },
          { id: 'tbh_neohelp', name: '1 x Neo help small', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_neohelp.jpg' },
        ]
      },
      {
        name: 'Delivery Kit',
        icon: '✂',
        items: [
          { id: 'tbh_scissors', name: '2 x Scissors', desc: 'Both present', critical: false, image: 'images/tb_scissors.jpg' },
          { id: 'tbh_cord_clamps', name: '2 x Cord clamps', desc: 'Both present, in packaging', critical: true, image: 'images/tb_cord_clamps.jpg' },
          { id: 'tbh_syringes_2ml', name: '2 x 2ml syringes', desc: 'Both present, in packaging, not expired', critical: false, image: 'images/tb_syringes_2ml.jpg' },
          { id: 'tbh_filter_needles', name: '2 x Filter needles', desc: 'Both present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
          { id: 'tbh_green_needles', name: '2 x Green needles', desc: 'Both present, not expired', critical: false, image: 'images/tb_green_needles.jpg' },
          { id: 'tbh_sterile_gloves', name: 'Sterile gloves', desc: 'Present, correct sizes, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        ]
      },
      {
        name: 'Transfer Drugs (Fridge)',
        icon: '❄',
        items: [
          { id: 'tbh_synto', name: '1 x Syntocinon 10IU', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/tb_syntocinon.jpg' },
          { id: 'tbh_syntometrine', name: '1 x Syntometrine', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/tb_syntometrine.jpg' },
          { id: 'tbh_ergometrine', name: '1 x Ergometrine', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/tb_ergometrine.jpg' },
        ]
      }
    ]
  },

  // ── TRANSFER BAG — TRIAGE ────────────────────────────────
  transfer_bag_triage_daily: {
    name: 'Transfer Bag — Triage (Daily)',
    location: 'Triage',
    image: 'images/transfer_bag.jpg',
    imageCaption: 'Confirm bag is present in triage and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Visual Check',
        icon: '👁',
        items: [
          { id: 'tbt_present', name: 'Transfer bag present in triage', desc: 'Bag is in its designated location', critical: true, image: 'images/transfer_bag_location_triage.jpg' },
          { id: 'tbt_sealed', name: 'Bag seal intact', desc: 'Tamper seal has not been broken since last check', critical: true, image: 'images/transfer_bag_seal.jpg' },
        ]
      }
    ]
  },

  transfer_bag_triage_monthly: {
    name: 'Transfer Bag — Triage (Monthly)',
    location: 'Triage',
    image: 'images/transfer_bag.jpg',
    imageCaption: 'Full contents check — all items present, in date and not expiring within 30 days. Replace anything due to expire.',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      {
        name: 'Baby Equipment',
        icon: '👶',
        items: [
          { id: 'tbt_hat_large', name: '1 x Hat (large)', desc: 'Present, clean, in date', critical: false, image: 'images/tb_hat_large.jpg' },
          { id: 'tbt_hat_small', name: '1 x Hat (small)', desc: 'Present, clean, in date', critical: false, image: 'images/tb_hat_small.jpg' },
          { id: 'tbt_towels', name: '2 x Towels', desc: 'Both present, clean', critical: false, image: 'images/tb_towels.jpg' },
          { id: 'tbt_blanket', name: '1 x Blanket', desc: 'Present, clean', critical: false, image: 'images/tb_blanket.jpg' },
          { id: 'tbt_transwarmer', name: '1 x Transwarmer', desc: 'Present and in date — check expiry', critical: true, image: 'images/tb_transwarmer.jpg' },
          { id: 'tbt_plastic_bag', name: '1 x Plastic bag', desc: 'Present', critical: false, image: 'images/tb_plastic_bag.jpg' },
          { id: 'tbt_baby_labels', name: '2 x Baby labels', desc: 'Both present', critical: false, image: 'images/tb_baby_labels.jpg' },
          { id: 'tbt_inco_sheets', name: 'Inco sheets', desc: 'Present and adequate supply', critical: false, image: 'images/tb_inco_sheets.jpg' },
        ]
      },
      {
        name: 'Airway',
        icon: '💨',
        items: [
          { id: 'tbt_mask_0', name: '1 x Size 0 mask', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_mask_0.jpg' },
          { id: 'tbt_mask_1', name: '1 x Size 1 mask', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_mask_1.jpg' },
          { id: 'tbt_ambu_bag', name: '1 x Paed ambu bag', desc: 'Present and intact', critical: true, image: 'images/tb_ambu_bag.jpg' },
          { id: 'tbt_igel', name: '1 x I-gel', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_igel.jpg' },
          { id: 'tbt_laryngoscope', name: '1 x Laryngoscope with size 0 and size 1 blades', desc: 'Present, light working, both blades attached', critical: true, image: 'images/tb_laryngoscope.jpg' },
          { id: 'tbt_spare_batteries', name: 'Spare batteries for laryngoscope', desc: 'Present and correct size', critical: false, image: 'images/tb_batteries.jpg' },
          { id: 'tbt_neohelp', name: '1 x Neo help small', desc: 'Present, in packaging, not expired', critical: true, image: 'images/tb_neohelp.jpg' },
        ]
      },
      {
        name: 'Delivery Kit',
        icon: '✂',
        items: [
          { id: 'tbt_scissors', name: '2 x Scissors', desc: 'Both present', critical: false, image: 'images/tb_scissors.jpg' },
          { id: 'tbt_cord_clamps', name: '2 x Cord clamps', desc: 'Both present, in packaging', critical: true, image: 'images/tb_cord_clamps.jpg' },
          { id: 'tbt_syringes_2ml', name: '2 x 2ml syringes', desc: 'Both present, in packaging, not expired', critical: false, image: 'images/tb_syringes_2ml.jpg' },
          { id: 'tbt_filter_needles', name: '2 x Filter needles', desc: 'Both present, not expired', critical: false, image: 'images/tb_filter_needles.jpg' },
          { id: 'tbt_green_needles', name: '2 x Green needles', desc: 'Both present, not expired', critical: false, image: 'images/tb_green_needles.jpg' },
          { id: 'tbt_sterile_gloves', name: 'Sterile gloves', desc: 'Present, correct sizes, not expired', critical: false, image: 'images/tb_sterile_gloves.jpg' },
        ]
      },
      {
        name: 'Transfer Drugs (Fridge)',
        icon: '❄',
        items: [
          { id: 'tbt_synto', name: '1 x Syntocinon 10IU', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/tb_syntocinon.jpg' },
          { id: 'tbt_syntometrine', name: '1 x Syntometrine', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/tb_syntometrine.jpg' },
          { id: 'tbt_ergometrine', name: '1 x Ergometrine', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/tb_ergometrine.jpg' },
        ]
      }
    ]
  },

  // ── SEPSIS BOX ───────────────────────────────────────────
  sepsis_box_daily: {
    name: 'Sepsis Box — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/sepsis_box.jpg',
    imageCaption: 'Confirm sepsis box is present in correct location and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Visual Check',
        icon: '👁',
        items: [
          { id: 'sep_present', name: 'Sepsis box present in correct location', desc: 'Box is in its designated position', critical: true, image: 'images/sepsis_box_location.jpg' },
          { id: 'sep_sealed', name: 'Seal intact', desc: 'Tamper seal tags present and unbroken', critical: true, image: 'images/sepsis_box_seal.jpg' },
        ]
      }
    ]
  },

  sepsis_box_monthly: {
    name: 'Sepsis Box — Monthly Full Check',
    location: 'Labour Ward',
    image: 'images/sepsis_box.jpg',
    imageCaption: 'Full contents check — all items present, in date and not expiring within 30 days',
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      {
        name: 'Access & Sampling',
        icon: '💉',
        items: [
          { id: 'sep_tourniquet', name: '1 x Tourniquet', desc: 'Present and in good condition', critical: false, image: 'images/sep_tourniquet.jpg' },
          { id: 'sep_cotton_wool', name: 'Cotton wool', desc: 'Present and adequate supply', critical: false, image: 'images/sep_cotton_wool.jpg' },
          { id: 'sep_alcohol_wipes', name: 'Alcohol wipes', desc: 'Present, not expired', critical: false, image: 'images/sep_alcohol_wipes.jpg' },
          { id: 'sep_syringes_10ml', name: '2 x 10ml syringes', desc: 'Both present, not expired', critical: false, image: 'images/sep_syringes_10ml.jpg' },
          { id: 'sep_vacutainer', name: '2 x Vacutainer and attachments', desc: 'Both present, not expired', critical: false, image: 'images/sep_vacutainer.jpg' },
          { id: 'sep_vbg_needles', name: '2 x VBG needles', desc: 'Both present, not expired', critical: false, image: 'images/sep_vbg_needles.jpg' },
          { id: 'sep_giving_set', name: '1 x Giving set', desc: 'Present, not expired', critical: false, image: 'images/sep_giving_set.jpg' },
          { id: 'sep_octopus', name: '2 x Octopus', desc: 'Both present', critical: false, image: 'images/sep_octopus.jpg' },
          { id: 'sep_cannula_grey', name: '2 x Grey cannula', desc: 'Both present, not expired', critical: false, image: 'images/sep_cannula_grey.jpg' },
          { id: 'sep_cannula_green', name: '2 x Green cannula', desc: 'Both present, not expired', critical: false, image: 'images/sep_cannula_green.jpg' },
          { id: 'sep_cannula_pink', name: '2 x Pink cannula', desc: 'Both present, not expired', critical: false, image: 'images/sep_cannula_pink.jpg' },
        ]
      },
      {
        name: 'Blood Bottles',
        icon: '🩸',
        items: [
          { id: 'sep_pink_bottles', name: '2 x Pink blood bottles', desc: 'Both present, not expired', critical: false, image: 'images/sep_bottle_pink.jpg' },
          { id: 'sep_purple_bottles', name: '2 x Purple blood bottles', desc: 'Both present, not expired', critical: false, image: 'images/sep_bottle_purple.jpg' },
          { id: 'sep_yellow_bottles', name: '2 x Yellow blood bottles', desc: 'Both present, not expired', critical: false, image: 'images/sep_bottle_yellow.jpg' },
          { id: 'sep_blue_bottles', name: '2 x Blue blood bottles', desc: 'Both present, not expired', critical: false, image: 'images/sep_bottle_blue.jpg' },
          { id: 'sep_grey_bottles', name: '2 x Grey blood bottles', desc: 'Both present, not expired', critical: false, image: 'images/sep_bottle_grey.jpg' },
          { id: 'sep_blood_culture', name: 'Blood culture bottles', desc: 'Present, not expired', critical: true, image: 'images/sep_blood_culture.jpg' },
        ]
      },
      {
        name: 'Fluids & Dressings',
        icon: '💧',
        items: [
          { id: 'sep_hartmans', name: '1 x 1L Hartmanns', desc: 'Present, not expired', critical: true, image: 'images/sep_hartmans.jpg' },
          { id: 'sep_saline_flush', name: '2 x Normal saline flush', desc: 'Both present, not expired', critical: false, image: 'images/sep_saline_flush.jpg' },
          { id: 'sep_tegerderm', name: '4 x Tegaderm dressing', desc: 'All present, not expired', critical: false, image: 'images/sep_tegerderm.jpg' },
          { id: 'sep_urine_pot', name: '1 x Urine pot', desc: 'Present', critical: false, image: 'images/sep_urine_pot.jpg' },
          { id: 'sep_charcoal_swabs', name: '2 x Charcoal swabs', desc: 'Both present, not expired', critical: false, image: 'images/sep_charcoal_swabs.jpg' },
        ]
      },
      {
        name: 'Documentation & Seals',
        icon: '📋',
        items: [
          { id: 'sep_proforma', name: 'Sepsis six proforma', desc: 'Present and adequate supply', critical: true, image: 'images/sep_proforma.jpg' },
          { id: 'sep_seal_tags', name: 'Seal tags', desc: 'New seal tags applied after check', critical: true, image: 'images/sep_seal_tags.jpg' },
        ]
      }
    ]
  },

  // ── HYPO BOX ─────────────────────────────────────────────
  hypo_box_daily: {
    name: 'Hypo Box — Daily Visual Check',
    location: 'Labour Ward',
    image: 'images/hypo_box.jpg',
    imageCaption: 'Confirm hypo box is present and seal is intact',
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Visual Check',
        icon: '👁',
        items: [
          { id: 'hypo_present', name: 'Hypo box present in correct location', desc: 'Box is in its designated position', critical: true, image: 'images/hypo_box_location.jpg' },
          { id: 'hypo_sealed', name: 'Box seal intact', desc: 'Tamper seal has not been broken', critical: true, image: 'images/hypo_box_seal.jpg' },
        ]
      }
    ]
  },

  hypo_box_weekly: {
    name: 'Hypo Box — Weekly Full Check',
    location: 'Labour Ward',
    image: 'images/hypo_box.jpg',
    imageCaption: 'Full contents check — all items present and in date',
    frequency: 'weekly',
    afterEmergency: true,
    categories: [
      {
        name: 'Fridge Item',
        icon: '❄',
        items: [
          { id: 'hypo_glucagon', name: '1 x Glucagon 1mg injection (fridge)', desc: 'Present in fridge, not expired, not within 30 days of expiry', critical: true, image: 'images/hypo_glucagon.jpg' },
        ]
      },
      {
        name: 'Box Contents',
        icon: '📦',
        items: [
          { id: 'hypo_algorithm', name: '1 x Hypoglycaemia treatment algorithm (laminated)', desc: 'Present and legible', critical: true, image: 'images/hypo_algorithm.jpg' },
          { id: 'hypo_glucotabs', name: '2 x Glucotabs / dextrose tabs / lift fast acting tubes', desc: 'Both present, not expired', critical: true, image: 'images/hypo_glucotabs.jpg' },
          { id: 'hypo_polycal', name: '2 x Polycal', desc: 'Both present, not expired', critical: true, image: 'images/hypo_polycal.jpg' },
          { id: 'hypo_biscuits', name: '1 x Mini pack of biscuits', desc: 'Present, not expired', critical: false, image: 'images/hypo_biscuits.jpg' },
          { id: 'hypo_glucose_10', name: '1 x Glucose 10% (500ml)', desc: 'Present, not expired', critical: true, image: 'images/hypo_glucose10.jpg' },
          { id: 'hypo_venflon_green', name: '2 x Green venflon (21G)', desc: 'Both present, not expired', critical: false, image: 'images/hypo_venflon_green.jpg' },
          { id: 'hypo_venflon_grey', name: '2 x Grey venflon (16G)', desc: 'Both present, not expired', critical: false, image: 'images/hypo_venflon_grey.jpg' },
          { id: 'hypo_giving_set', name: '1 x Giving set', desc: 'Present, not expired', critical: false, image: 'images/hypo_giving_set.jpg' },
          { id: 'hypo_audit_form', name: '2 x Hypoglycaemic sticker/audit form', desc: 'Both present', critical: false, image: 'images/hypo_audit_form.jpg' },
          { id: 'hypo_box_seal', name: 'Box seal', desc: 'New seal applied after check', critical: true, image: 'images/hypo_box_seal.jpg' },
        ]
      }
    ]
  },

  // ── CONTROLLED DRUGS ─────────────────────────────────────
  cd_labour_ward_am: {
    name: 'Controlled Drugs Check — Labour Ward (AM)',
    location: 'Labour Ward',
    image: 'images/cd_cupboard.jpg',
    imageCaption: 'Confirm CD book check has been completed and signed this morning',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Morning CD Check',
        icon: '🔐',
        items: [
          { id: 'cd_lw_am_book', name: 'CD book check completed and signed', desc: 'Two staff signatures present in CD book for this check', critical: true, image: 'images/cd_book.jpg' },
          { id: 'cd_lw_am_cupboard', name: 'CD cupboard locked and secure', desc: 'Cupboard locked, key returned to correct location', critical: true, image: 'images/cd_cupboard_locked.jpg' },
          { id: 'cd_lw_am_count', name: 'Stock count matches CD register', desc: 'Confirm physical count matches book', critical: true, image: 'images/cd_register.jpg' },
        ]
      }
    ]
  },

  cd_labour_ward_pm: {
    name: 'Controlled Drugs Check — Labour Ward (PM)',
    location: 'Labour Ward',
    image: 'images/cd_cupboard.jpg',
    imageCaption: 'Confirm CD book check has been completed and signed this evening',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Evening CD Check',
        icon: '🔐',
        items: [
          { id: 'cd_lw_pm_book', name: 'CD book check completed and signed', desc: 'Two staff signatures present in CD book for this check', critical: true, image: 'images/cd_book.jpg' },
          { id: 'cd_lw_pm_cupboard', name: 'CD cupboard locked and secure', desc: 'Cupboard locked, key returned to correct location', critical: true, image: 'images/cd_cupboard_locked.jpg' },
          { id: 'cd_lw_pm_count', name: 'Stock count matches CD register', desc: 'Confirm physical count matches book', critical: true, image: 'images/cd_register.jpg' },
        ]
      }
    ]
  },

  cd_birth_centre_am: {
    name: 'Controlled Drugs Check — Birth Centre (AM)',
    location: 'Birth Centre',
    image: 'images/cd_cupboard.jpg',
    imageCaption: 'Confirm CD book check has been completed and signed this morning',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Morning CD Check',
        icon: '🔐',
        items: [
          { id: 'cd_bc_am_book', name: 'CD book check completed and signed', desc: 'Two staff signatures present in CD book for this check', critical: true, image: 'images/cd_book.jpg' },
          { id: 'cd_bc_am_cupboard', name: 'CD cupboard locked and secure', desc: 'Cupboard locked, key returned to correct location', critical: true, image: 'images/cd_cupboard_locked.jpg' },
          { id: 'cd_bc_am_count', name: 'Stock count matches CD register', desc: 'Confirm physical count matches book', critical: true, image: 'images/cd_register.jpg' },
        ]
      }
    ]
  },

  cd_birth_centre_pm: {
    name: 'Controlled Drugs Check — Birth Centre (PM)',
    location: 'Birth Centre',
    image: 'images/cd_cupboard.jpg',
    imageCaption: 'Confirm CD book check has been completed and signed this evening',
    frequency: 'daily',
    afterEmergency: false,
    categories: [
      {
        name: 'Evening CD Check',
        icon: '🔐',
        items: [
          { id: 'cd_bc_pm_book', name: 'CD book check completed and signed', desc: 'Two staff signatures present in CD book for this check', critical: true, image: 'images/cd_book.jpg' },
          { id: 'cd_bc_pm_cupboard', name: 'CD cupboard locked and secure', desc: 'Cupboard locked, key returned to correct location', critical: true, image: 'images/cd_cupboard_locked.jpg' },
          { id: 'cd_bc_pm_count', name: 'Stock count matches CD register', desc: 'Confirm physical count matches book', critical: true, image: 'images/cd_register.jpg' },
        ]
      }
    ]
  },

};

// ── GENERATE RESUSCITAIRES 1-9 ────────────────────────────
for (let i = 1; i <= 9; i++) {
  EQUIPMENT_DB1[`resuscitaire_${i}_daily`] = {
    name: `Resuscitaire ${i} — Daily Top Check`,
    location: 'Labour Ward',
    image: `images/resuscitaire_top.jpg`,
    imageCaption: `Check all items on top of Resuscitaire ${i} are present and ready for immediate use`,
    frequency: 'daily',
    afterEmergency: true,
    categories: [
      {
        name: 'Top of Resuscitaire',
        icon: '👶',
        items: [
          { id: `res${i}_mattress`, name: 'Mattress covered', desc: 'Clean cover in place', critical: true, image: 'images/res_mattress.jpg' },
          { id: `res${i}_towels`, name: 'Towels present', desc: 'Adequate supply of clean towels', critical: true, image: 'images/res_towels.jpg' },
          { id: `res${i}_o2_supply`, name: 'Oxygen supply and tubing attached', desc: 'O2 connected, tubing in place, flow confirmed', critical: true, image: 'images/res_o2.jpg' },
          { id: `res${i}_suction`, name: 'Suction working — tubing and yankauer attached', desc: 'Suction on, yankauer connected, functioning', critical: true, image: 'images/res_suction.jpg' },
          { id: `res${i}_neopeep`, name: 'NeoPeep with size 1 mask attached', desc: 'NeoPeep present and size 1 mask fitted', critical: true, image: 'images/res_neopeep.jpg' },
          { id: `res${i}_hat`, name: 'Hat present', desc: 'Neonatal hat available on top', critical: false, image: 'images/res_hat.jpg' },
          { id: `res${i}_laryngoscope`, name: 'Laryngoscope present', desc: 'Laryngoscope on top, light working', critical: true, image: 'images/res_laryngoscope.jpg' },
          { id: `res${i}_stethoscope`, name: 'Stethoscope present', desc: 'Neonatal stethoscope in place', critical: false, image: 'images/res_stethoscope.jpg' },
          { id: `res${i}_cord_clamps`, name: '2 x Cord clamps', desc: 'Both present on top of resuscitaire', critical: true, image: 'images/res_cord_clamps.jpg' },
          { id: `res${i}_scissors`, name: '1 x Scissors', desc: 'Present on top', critical: false, image: 'images/res_scissors.jpg' },
          { id: `res${i}_sats_probe`, name: '1 x Sats probe and Posey', desc: 'Neonatal sats probe and Posey wrap present', critical: true, image: 'images/res_sats_probe.jpg' },
          { id: `res${i}_ambu_bag`, name: '1 x Paed ambu bag', desc: 'Present and intact', critical: true, image: 'images/res_ambu_bag.jpg' },
          { id: `res${i}_proforma`, name: 'Newborn resus proforma', desc: 'Present and adequate supply', critical: true, image: 'images/res_proforma.jpg' },
          { id: `res${i}_cover`, name: 'Covered with protective bag', desc: 'Clean protective cover in place', critical: false, image: 'images/res_cover.jpg' },
        ]
      }
    ]
  };

  EQUIPMENT_DB1[`resuscitaire_${i}_monthly`] = {
    name: `Resuscitaire ${i} — Monthly Full Check`,
    location: 'Labour Ward',
    image: `images/resuscitaire_top.jpg`,
    imageCaption: `Full check of Resuscitaire ${i} — top and all sealed drawers`,
    frequency: 'monthly',
    afterEmergency: true,
    categories: [
      {
        name: 'Top of Resuscitaire',
        icon: '⬆',
        items: [
          { id: `res${i}m_mattress`, name: 'Mattress covered', desc: 'Clean cover in place', critical: true, image: 'images/res_mattress.jpg' },
          { id: `res${i}m_towels`, name: 'Towels present', desc: 'Adequate supply of clean towels', critical: true, image: 'images/res_towels.jpg' },
          { id: `res${i}m_o2`, name: 'Oxygen supply and tubing attached', desc: 'O2 connected, tubing in place', critical: true, image: 'images/res_o2.jpg' },
          { id: `res${i}m_suction`, name: 'Suction working — tubing and yankauer attached', desc: 'Suction on, yankauer connected', critical: true, image: 'images/res_suction.jpg' },
          { id: `res${i}m_neopeep`, name: 'NeoPeep with size 1 mask attached', desc: 'NeoPeep present and size 1 mask fitted', critical: true, image: 'images/res_neopeep.jpg' },
          { id: `res${i}m_hat`, name: 'Hat present', desc: 'Neonatal hat available', critical: false, image: 'images/res_hat.jpg' },
          { id: `res${i}m_laryngoscope_top`, name: 'Laryngoscope present', desc: 'Light working', critical: true, image: 'images/res_laryngoscope.jpg' },
          { id: `res${i}m_stethoscope`, name: 'Stethoscope present', desc: 'In place', critical: false, image: 'images/res_stethoscope.jpg' },
          { id: `res${i}m_cord_clamps_top`, name: '2 x Cord clamps', desc: 'Both present', critical: true, image: 'images/res_cord_clamps.jpg' },
          { id: `res${i}m_scissors_top`, name: '1 x Scissors', desc: 'Present', critical: false, image: 'images/res_scissors.jpg' },
          { id: `res${i}m_sats_top`, name: '1 x Sats probe and Posey', desc: 'Present', critical: true, image: 'images/res_sats_probe.jpg' },
          { id: `res${i}m_ambu_top`, name: '1 x Paed ambu bag', desc: 'Present and intact', critical: true, image: 'images/res_ambu_bag.jpg' },
          { id: `res${i}m_proforma`, name: 'Newborn resus proforma', desc: 'Present', critical: true, image: 'images/res_proforma.jpg' },
          { id: `res${i}m_cover`, name: 'Protective cover in place', desc: 'Clean cover fitted', critical: false, image: 'images/res_cover.jpg' },
        ]
      },
      {
        name: 'Sealed Drawers',
        icon: '🔒',
        items: [
          { id: `res${i}m_laryngoscope_drawer`, name: 'Laryngoscope and blades size 0 and 1', desc: 'Both blades present, light working on both', critical: true, image: 'images/res_laryngoscope_blades.jpg' },
          { id: `res${i}m_mask_05`, name: 'Round mask size 0.5', desc: 'Present, in packaging', critical: true, image: 'images/res_mask_05.jpg' },
          { id: `res${i}m_mask_1`, name: 'Round mask size 1', desc: 'Present, in packaging', critical: true, image: 'images/res_mask_1.jpg' },
          { id: `res${i}m_cord_clamps_drawer`, name: '2 x Cord clamps', desc: 'Both present, in packaging', critical: true, image: 'images/res_cord_clamps.jpg' },
          { id: `res${i}m_scissors_drawer`, name: '2 x Scissors', desc: 'Both present', critical: false, image: 'images/res_scissors.jpg' },
          { id: `res${i}m_pedicap`, name: '1 x Pedicap', desc: 'Present, not expired', critical: false, image: 'images/res_pedicap.jpg' },
          { id: `res${i}m_igel`, name: '2 x I-Gel', desc: 'Both present, not expired', critical: true, image: 'images/res_igel.jpg' },
          { id: `res${i}m_lube_gel`, name: '2 x Lubricating gel sachets', desc: 'Both present, not expired', critical: false, image: 'images/res_lube_gel.jpg' },
          { id: `res${i}m_sats_drawer`, name: '2 x Sats probes and Posey', desc: 'Both present', critical: false, image: 'images/res_sats_probe.jpg' },
          { id: `res${i}m_et_25`, name: '2 x ET tube size 2.5', desc: 'Both present, not expired', critical: true, image: 'images/res_et_25.jpg' },
          { id: `res${i}m_et_30`, name: '2 x ET tube size 3.0', desc: 'Both present, not expired', critical: true, image: 'images/res_et_30.jpg' },
          { id: `res${i}m_et_35`, name: '2 x ET tube size 3.5', desc: 'Both present, not expired', critical: true, image: 'images/res_et_35.jpg' },
          { id: `res${i}m_et_40`, name: '2 x ET tube size 4.0', desc: 'Both present, not expired', critical: true, image: 'images/res_et_40.jpg' },
          { id: `res${i}m_stylets`, name: '2 x Intubation stylets', desc: 'Both present', critical: false, image: 'images/res_stylets.jpg' },
          { id: `res${i}m_et_holders`, name: '2 x ET tube holders/clamps', desc: 'Both present', critical: false, image: 'images/res_et_holders.jpg' },
          { id: `res${i}m_suction_6`, name: '5 x Suction catheters size 6', desc: 'All 5 present, not expired', critical: false, image: 'images/res_suction_cath_6.jpg' },
          { id: `res${i}m_suction_10`, name: '5 x Suction catheters size 10', desc: 'All 5 present, not expired', critical: false, image: 'images/res_suction_cath_10.jpg' },
          { id: `res${i}m_batteries`, name: 'Spare laryngoscope batteries', desc: 'Present and correct size', critical: false, image: 'images/res_batteries.jpg' },
          { id: `res${i}m_seal_ties`, name: 'Spare seal ties', desc: 'New seal ties applied after check', critical: true, image: 'images/res_seal_ties.jpg' },
        ]
      }
    ]
  };
}

// ── GENERATE ROOM CHECKS ──────────────────────────────────
const ROOMS_ALL = [
  { id: 'triage', name: 'Triage', hasDropDown: false },
  { id: 'room_6', name: 'Room 6', hasDropDown: true },
  { id: 'room_7', name: 'Room 7', hasDropDown: true },
  { id: 'room_8', name: 'Room 8', hasDropDown: true },
  { id: 'room_9', name: 'Room 9', hasDropDown: true },
  { id: 'room_10', name: 'Room 10', hasDropDown: true },
  { id: 'room_11', name: 'Room 11', hasDropDown: true },
  { id: 'room_12', name: 'Room 12', hasDropDown: true },
  { id: 'room_14', name: 'Room 14', hasDropDown: true },
  { id: 'room_15', name: 'Room 15', hasDropDown: false },
  { id: 'room_18', name: 'Room 18', hasDropDown: true },
  { id: 'primrose', name: 'Primrose', hasDropDown: false },
  { id: 'obs_1', name: 'Obs 1', hasDropDown: false },
  { id: 'obs_2', name: 'Obs 2', hasDropDown: false },
  { id: 'obs_3', name: 'Obs 3', hasDropDown: false },
  { id: 'obs_4', name: 'Obs 4', hasDropDown: false },
  { id: 'bc_1', name: 'Birth Centre 1', hasDropDown: true },
  { id: 'bc_3', name: 'Birth Centre 3', hasDropDown: true },
  { id: 'bc_4', name: 'Birth Centre 4', hasDropDown: true },
];

ROOMS_ALL.forEach(room => {
  const cats = [
    {
      name: 'Oxygen & Suction',
      icon: '💨',
      items: [
        { id: `${room.id}_o2_present`, name: 'Oxygen supply present and working', desc: 'Wall oxygen connected, flow confirmed', critical: true, image: 'images/room_o2.jpg' },
        { id: `${room.id}_o2_mask`, name: 'Oxygen mask fitted and ready', desc: 'Appropriate mask fitted to tubing, ready for use', critical: true, image: 'images/room_o2_mask.jpg' },
        { id: `${room.id}_suction_working`, name: 'Suction working', desc: 'Wall suction on and generating adequate pressure', critical: true, image: 'images/room_suction.jpg' },
        { id: `${room.id}_yankauer`, name: 'Yankauer sucker attached', desc: 'Yankauer connected to suction tubing', critical: true, image: 'images/room_yankauer.jpg' },
      ]
    }
  ];

  if (room.hasDropDown) {
    cats.push({
      name: 'Drop-down Resuscitaire',
      icon: '👶',
      items: [
        { id: `${room.id}_heat`, name: 'Heat and light source working', desc: 'Overhead heater functional, light working', critical: true, image: 'images/res_heat.jpg' },
        { id: `${room.id}_med_air`, name: 'Medical air and oxygen supply connected', desc: 'Both gases connected and flowing', critical: true, image: 'images/res_med_air.jpg' },
        { id: `${room.id}_res_suction`, name: 'Suction tubing with yankauer attachment', desc: 'Suction connected, yankauer in place', critical: true, image: 'images/res_suction.jpg' },
        { id: `${room.id}_res_mattress`, name: 'Mattress covered', desc: 'Clean cover in place', critical: false, image: 'images/res_mattress.jpg' },
        { id: `${room.id}_res_neopeep`, name: 'NeoPeep with size 1 mask attached', desc: 'NeoPeep present and size 1 mask fitted', critical: true, image: 'images/res_neopeep.jpg' },
        { id: `${room.id}_res_mask_05`, name: 'Round mask size 0.5', desc: 'Present on resuscitaire', critical: true, image: 'images/res_mask_05.jpg' },
        { id: `${room.id}_res_mask_1`, name: 'Round mask size 1', desc: 'Present on resuscitaire', critical: true, image: 'images/res_mask_1.jpg' },
        { id: `${room.id}_res_scissors`, name: '2 x Scissors', desc: 'Both present', critical: false, image: 'images/res_scissors.jpg' },
        { id: `${room.id}_res_cord_clamps`, name: '2 x Cord clamps', desc: 'Both present', critical: true, image: 'images/res_cord_clamps.jpg' },
        { id: `${room.id}_res_hat`, name: 'Hat present', desc: 'Neonatal hat present', critical: false, image: 'images/res_hat.jpg' },
        { id: `${room.id}_res_pedicap`, name: '1 x Pedicap', desc: 'Present, not expired', critical: false, image: 'images/res_pedicap.jpg' },
        { id: `${room.id}_res_igel`, name: '2 x I-Gel', desc: 'Both present, not expired', critical: true, image: 'images/res_igel.jpg' },
        { id: `${room.id}_res_lube_gel`, name: '2 x Lubricating gel sachets', desc: 'Both present', critical: false, image: 'images/res_lube_gel.jpg' },
        { id: `${room.id}_res_laryngoscope`, name: 'Laryngoscope with disposable blades size 0 and 1', desc: 'Laryngoscope present, both blade sizes present', critical: true, image: 'images/res_laryngoscope_blades.jpg' },
        { id: `${room.id}_res_batteries`, name: 'Spare batteries for laryngoscope', desc: 'Correct size batteries present', critical: false, image: 'images/res_batteries.jpg' },
        { id: `${room.id}_res_suction_cath`, name: '2 x Suction catheters size 10', desc: 'Both present', critical: false, image: 'images/res_suction_cath_10.jpg' },
        { id: `${room.id}_res_yankauer_spare`, name: 'Spare yankauer', desc: 'Spare present', critical: false, image: 'images/room_yankauer.jpg' },
        { id: `${room.id}_res_stethoscope`, name: 'Stethoscope present', desc: 'Neonatal stethoscope in place', critical: false, image: 'images/res_stethoscope.jpg' },
        { id: `${room.id}_res_o2_analyser`, name: 'Oxygen analyser present', desc: 'Oxygen analyser in place and functional', critical: false, image: 'images/res_o2_analyser.jpg' },
        { id: `${room.id}_res_spo2`, name: 'SpO2 sensor and Posey present', desc: 'Neonatal SpO2 sensor and Posey wrap present', critical: true, image: 'images/res_sats_probe.jpg' },
        { id: `${room.id}_res_proforma`, name: 'Resus proforma present', desc: 'Adequate supply of resus proformas', critical: true, image: 'images/res_proforma.jpg' },
      ]
    });
  }

  EQUIPMENT_DB1[`room_check_${room.id}`] = {
    name: `${room.name} — Daily Room Check`,
    location: room.name,
    image: `images/room_${room.id}.jpg`,
    imageCaption: `Check oxygen, suction${room.hasDropDown ? ' and drop-down resuscitaire' : ''} are ready for immediate emergency use`,
    frequency: 'daily',
    afterEmergency: true,
    categories: cats
  };
});

// ── TEMPERATURE CHECKS ────────────────────────────────────
const TEMP_AREAS = [
  { id: 'temp_bc_drug_room', name: 'Birth Centre Drug Room', location: 'Birth Centre' },
  { id: 'temp_lw_iv_room', name: 'Labour Ward IV Room', location: 'Labour Ward' },
  { id: 'temp_lw_drug_prep', name: 'Labour Ward Drug Preparation Area', location: 'Labour Ward' },
];

TEMP_AREAS.forEach(area => {
  EQUIPMENT_DB1[area.id] = {
    name: `${area.name} — Temperature Check`,
    location: area.location,
    image: `images/thermometer_room.jpg`,
    imageCaption: 'Record current temperature. Acceptable range is below 25°C. If 25°C or above follow escalation steps.',
    frequency: 'daily',
    afterEmergency: false,
    temperatureCheck: true,
    tempMax: 25,
    tempUnit: '°C',
    escalation: {
      inHours: 'IN HOURS: 1. Inform Ward Sister / Matron immediately. 2. Contact Estates to discuss options to cool the room without compromising medicine security. 3. Contact Pharmacy between 9am and 5pm — your ward pharmacist or Medicines Resource Centre (MRC).',
      outOfHours: 'OUT OF HOURS: Contact the on-call pharmacist via switchboard.',
      further: 'See flow chart for further actions and Health & Safety folder in your location.'
    },
    categories: [
      {
        name: 'Temperature Recording',
        icon: '🌡',
        items: [
          { id: `${area.id}_temp_recorded`, name: 'Temperature recorded', desc: 'Enter current temperature reading below', critical: true, image: 'images/thermometer_room.jpg' },
          { id: `${area.id}_temp_acceptable`, name: 'Temperature below 25°C', desc: 'Confirm temperature is within acceptable range', critical: true, image: 'images/temp_chart.jpg' },
          { id: `${area.id}_escalation_taken`, name: 'Escalation action taken (if required)', desc: 'If temperature is 25°C or above, confirm escalation steps have been followed', critical: false, image: 'images/temp_escalation.jpg' },
        ]
      }
    ]
  };
});


// ── HCID ISOLATION BOX ───────────────────────────────────
EQUIPMENT_DB1['hcid_box_monthly'] = {
  name: 'HCID Isolation Box — Monthly Full Check',
  location: 'Labour Ward',
  image: 'images/hcid_box.jpg',
  imageCaption: 'Full contents check of the HCID isolation box',
  frequency: 'monthly',
  afterEmergency: false,
  categories: [
    {
      name: 'Signage & Documentation',
      icon: '📋',
      items: [
        { id: 'hcid_m_log', name: 'Isolation room access log', desc: 'Access log present outside room', critical: true, image: 'images/hcid_access_log.jpg' },
        { id: 'hcid_m_sign', name: 'Do not enter sign', desc: 'Do not enter sign present and legible', critical: true, image: 'images/hcid_do_not_enter.jpg' },
        { id: 'hcid_m_instructions', name: 'Laminated donning and doffing instructions', desc: 'Instructions present and legible', critical: true, image: 'images/hcid_donning_doffing.jpg' },
      ]
    },
    {
      name: 'PPE',
      icon: '🧤',
      items: [
        { id: 'hcid_m_pens', name: 'Box of pens', desc: 'Box of pens present for documentation', critical: false, image: 'images/hcid_pens.jpg' },
        { id: 'hcid_m_ffp3', name: 'FFP3 non-valved masks (fit tested)', desc: 'FFP3 masks present — fit tested only', critical: true, image: 'images/hcid_ffp3.jpg' },
        { id: 'hcid_m_visor', name: 'Full face visor or goggles', desc: 'Full face visor or goggles present', critical: true, image: 'images/hcid_visor.jpg' },
        { id: 'hcid_m_coveralls', name: 'Fluid resistant coveralls (long gown)', desc: 'Fluid resistant coveralls present', critical: true, image: 'images/hcid_coveralls.jpg' },
        { id: 'hcid_m_gloves_s', name: 'Long cuff gloves — small', desc: 'Long cuff gloves size small present', critical: true, image: 'images/hcid_gloves.jpg' },
        { id: 'hcid_m_gloves_m', name: 'Long cuff gloves — medium', desc: 'Long cuff gloves size medium present', critical: true, image: 'images/hcid_gloves.jpg' },
        { id: 'hcid_m_gloves_l', name: 'Long cuff gloves — large', desc: 'Long cuff gloves size large present', critical: true, image: 'images/hcid_gloves.jpg' },
        { id: 'hcid_m_aprons', name: '1 x Green roll aprons', desc: 'Green roll aprons present', critical: true, image: 'images/hcid_aprons.jpg' },
        { id: 'hcid_m_wellies', name: 'Wellington boots available in Room 5', desc: 'Wellington boots in various sizes available in Room 5', critical: false, image: 'images/hcid_wellies.jpg' },
      ]
    },
    {
      name: 'Consumables',
      icon: '🧴',
      items: [
        { id: 'hcid_m_sanitiser', name: '1 x Hand sanitiser', desc: 'Hand sanitiser present and not empty', critical: true, image: 'images/hcid_sanitiser.jpg' },
        { id: 'hcid_m_biohazard_bags', name: 'Large biohazard specimen bags', desc: 'Biohazard specimen bags present', critical: true, image: 'images/hcid_biohazard_bags.jpg' },
        { id: 'hcid_m_sharps', name: 'Sharps bin', desc: 'Sharps bin present and not above fill line', critical: true, image: 'images/hcid_sharps.jpg' },
        { id: 'hcid_m_waste_bags', name: '1 x Roll of spare clinical waste bags', desc: 'Clinical waste bags present', critical: true, image: 'images/hcid_waste_bags.jpg' },
        { id: 'hcid_m_tristel', name: 'Tristel Fuse container', desc: 'Tristel Fuse present and in date', critical: true, image: 'images/hcid_tristel.jpg' },
        { id: 'hcid_m_clinell', name: 'Clinell wipes', desc: 'Clinell wipes present and in date', critical: true, image: 'images/hcid_clinell.jpg' },
        { id: 'hcid_m_spill_wipes', name: 'Spill kit — spill wipes', desc: 'Spill wipes present', critical: true, image: 'images/hcid_spill_kit.jpg' },
        { id: 'hcid_m_vernagel', name: 'Vernagel granules', desc: 'Vernagel granules present for spill management', critical: true, image: 'images/hcid_vernagel.jpg' },
      ]
    },
    {
      name: 'Patient PPE',
      icon: '🏥',
      items: [
        { id: 'hcid_m_pt_gown', name: 'Patient gown', desc: 'Gown present for patient use', critical: true, image: 'images/hcid_pt_gown.jpg' },
        { id: 'hcid_m_pt_gloves', name: 'Patient gloves', desc: 'Gloves present for patient use', critical: true, image: 'images/hcid_gloves.jpg' },
        { id: 'hcid_m_pt_ffp3', name: 'Patient non-valved FFP3 mask', desc: 'Non-valved FFP3 mask present for patient', critical: true, image: 'images/hcid_ffp3.jpg' },
      ]
    },
    {
      name: 'Phlebotomy Tray',
      icon: '🩸',
      items: [
        { id: 'hcid_m_tourniquet', name: 'Disposable tourniquets', desc: 'Disposable tourniquets present', critical: true, image: 'images/sep_tourniquet.jpg' },
        { id: 'hcid_m_alc_wipes', name: 'Alcohol wipes', desc: 'Alcohol wipes present', critical: true, image: 'images/sep_alcohol_wipes.jpg' },
        { id: 'hcid_m_butterfly', name: 'Butterfly needle', desc: 'Butterfly needle present', critical: true, image: 'images/pph_butterfly.jpg' },
        { id: 'hcid_m_vacutainer_blue', name: 'Vacutainer with blue attachment', desc: 'Vacutainer with blue needle attachment present', critical: true, image: 'images/delivery_vacutainers.jpg' },
        { id: 'hcid_m_vacutainer_green', name: 'Vacutainer with green attachment', desc: 'Vacutainer with green needle attachment present', critical: true, image: 'images/delivery_vacutainers.jpg' },
        { id: 'hcid_m_cannulas', name: 'Cannulas — all sizes', desc: 'Cannulas of all sizes present', critical: true, image: 'images/sep_cannula_grey.jpg' },
        { id: 'hcid_m_saline_flush', name: 'Saline syringe flush', desc: 'Saline flush present', critical: true, image: 'images/sep_saline_flush.jpg' },
        { id: 'hcid_m_cotton_wool', name: 'Cotton wool', desc: 'Cotton wool present', critical: true, image: 'images/sep_cotton_wool.jpg' },
        { id: 'hcid_m_micropore', name: 'Micropore tape', desc: 'Micropore tape present', critical: false, image: 'images/pph_tape.jpg' },
        { id: 'hcid_m_tegaderm', name: 'Tegaderm cannula dressing', desc: 'Tegaderm dressing present', critical: true, image: 'images/sep_tegerderm.jpg' },
        { id: 'hcid_m_bucket', name: '1 x White bucket for sample transportation', desc: 'White bucket for transporting samples present', critical: true, image: 'images/hcid_bucket.jpg' },
      ]
    },
    {
      name: 'Blood Bottles & Specimens',
      icon: '🔬',
      items: [
        { id: 'hcid_m_culture', name: '1 x Blood culture bottles', desc: 'Blood culture bottles present', critical: true, image: 'images/sep_blood_culture.jpg' },
        { id: 'hcid_m_purple', name: '3 x Purple blood bottles', desc: '3 purple blood bottles present', critical: true, image: 'images/sep_bottle_purple.jpg' },
        { id: 'hcid_m_pink', name: '2 x Pink blood bottles', desc: '2 pink blood bottles present', critical: true, image: 'images/sep_bottle_pink.jpg' },
        { id: 'hcid_m_yellow', name: '2 x Yellow blood bottles', desc: '2 yellow blood bottles present', critical: true, image: 'images/sep_bottle_yellow.jpg' },
        { id: 'hcid_m_blue', name: '2 x Blue blood bottles', desc: '2 blue blood bottles present', critical: true, image: 'images/sep_bottle_blue.jpg' },
        { id: 'hcid_m_grey', name: '1 x Grey blood bottle', desc: '1 grey blood bottle present', critical: true, image: 'images/sep_bottle_grey.jpg' },
        { id: 'hcid_m_throat_swabs', name: '2 x Viral throat swabs', desc: '2 viral throat swabs present', critical: true, image: 'images/hcid_throat_swabs.jpg' },
        { id: 'hcid_m_spec_bags', name: 'Biohazardous specimen bags', desc: 'Biohazardous specimen bags present', critical: true, image: 'images/hcid_biohazard_bags.jpg' },
        { id: 'hcid_m_urine', name: '2 x Urine pots', desc: '2 urine pots present', critical: true, image: 'images/sep_urine_pot.jpg' },
      ]
    }
  ]
};

// Export for use in check.html and dashboard
if (typeof module !== 'undefined') module.exports = { EQUIPMENT_DB1, ROOMS_ALL };
