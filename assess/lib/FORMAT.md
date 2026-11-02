# Tyrtrek assessment library format

Each library file is a plain browser script (no modules, no imports) that registers one part:

```js
(window.TT_LIBS = window.TT_LIBS || []).push({
  track: 'commercial',            // 'commercial' (facility) or 'residential'
  source: 'Short note on sources used for this part',
  areas: [
    {
      id: 'perimeter',            // kebab-case, unique within the track
      name: 'Perimeter',          // shown in the app
      category: 'Perimeter',      // EXACT report-builder category name (see list below)
      blurb: 'One plain sentence on what this area covers.',
      subs: [
        {
          name: 'Fencing & Walls',  // short sub-area name, 1-5 words
          vulns: [
            {
              id: 'per-fence-low',        // kebab-case, unique within the track
              title: 'Fence too low or easily defeated',   // 3-9 words, scannable in a list
              text: 'Observed vulnerability written as a finding: 1-2 plain sentences.',
              risk: 'Why this specific condition matters: 1-2 sentences.',
              mits: [                     // 2-5 discrete, actionable mitigation sentences
                'Upgrade fencing at higher-risk segments to a height and material matched to the threat.',
                'Document the risk basis used to select the fence standard.'
              ],
              risks: ['unauthorized-entry', 'delayed-detection'],   // 1-4 ids from the risk catalog
              cost: 'low'                 // optional: rough cost of the first mitigation: 'low' | 'med' | 'high'
            }
          ]
        }
      ]
    }
  ],
  risks: {
    // Only include risk ids this part introduces or needs to define.
    // Each id: a title, a reusable boilerplate risk paragraph, and general mitigations.
    'unauthorized-entry': {
      title: 'Unauthorized entry',
      text: 'One or two professional, plain-language sentences describing this risk for the {subject}.',
      mits: ['General mitigation sentence', 'General mitigation sentence', 'General mitigation sentence']
    }
  }
});
```

`{subject}` in any text is replaced by the app with "the Facility" or "the household" / "the Residence" as appropriate. Use it instead of hard-coding.

## Standard risk ids (use these; define any you use in your file's `risks` object unless noted)

unauthorized-entry, forced-entry, theft, vandalism, violence, vehicle-attack, explosive-threat,
delayed-detection, delayed-response, life-safety, evidence-gap, liability, disruption, sabotage,
info-compromise, surveillance, personal-safety, insider, natural-hazard, reputational

Custody/judicial parts may add: escape, contraband, protectee-harm, in-custody-harm, witness-intimidation.
Residential parts may add: home-invasion, package-theft, child-safety, identity-theft, targeting.

If two files both define the same risk id, the first one loaded wins — keep definitions general.

## Report-builder category names (must match exactly)

Facility (commercial): Area, Perimeter, Doors, Windows, Parking, Landscaping, Lighting, Alarm Systems,
Cameras, Critical Infrastructure, Protected/Controlled Areas, Deliveries, Guard Force, Emergency Plans,
Screening Procedures. New facility categories allowed: Training, Administrative,
Judicial & Courthouse Security, Custody & Prisoner Movement, Law Enforcement Facility.

Residential: Neighborhood & Area Study, Perimeter & Property Boundary, Doors, Windows,
Garage & Vehicle Storage, "Driveway, Parking & Approach", Landscaping & Exterior Concealment,
Exterior Lighting, Alarm & Monitored Security Systems, "Cameras, Video Doorbells & Home Network Security",
Safe Room / Panic Room & Valuables Storage, "Deliveries, Mail & Package Security",
"Household Staff, Guests & Service Provider Screening", Family Emergency & Fire/Life Safety Planning,
"Pool, Outdoor Amenities & Attractive Nuisance", Administrative & Documentation,
Enhanced / Estate-Level Considerations.

## Writing rules

- Professional, plain language a property owner or facility manager can follow. Avoid jargon; when a
  technical term is needed (e.g. "UL 752 Level III"), add a few plain words explaining it.
- No mannered prose: no metaphors or flourishes ("weak link", "eyes on the street" only if quoted CPTED terms),
  say what you mean literally.
- Recommendations are non-binding suggestions offered in good faith: write mitigations as options
  ("Install…", "Consider…", "Establish…"), never as guarantees.
- Each vulnerability's `text` must stand alone as a finding sentence that could be pasted into a report.
- Do not invent statistics, code section numbers, or quotations. Cite a standard only if you are sure it exists.
