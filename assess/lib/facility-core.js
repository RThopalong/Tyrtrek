/* Tyrtrek facility (commercial) core library. Generated data; see FORMAT.md. */
(window.TT_LIBS = window.TT_LIBS || []).push({
  "track": "commercial",
  "source": "Structure follows the Common Vulnerabilities Reference Sheet categories (Area through Administrative), with examples written from conventional physical-security practice and themes from the project references: CPTED guidance, the DHS Bomb Threat Checklist and screening guidance, DHS threat assessment team guidance, and workplace violence prevention guidance.",
  "areas": [
    {
      "id": "area",
      "name": "Area",
      "category": "Area",
      "blurb": "The surrounding neighborhood, nearby properties, approach routes, and outside conditions that affect the security of the site.",
      "subs": [
        {
          "name": "Neighborhood & Crime",
          "vulns": [
            {
              "id": "area-crime-elevated",
              "title": "Elevated crime in surrounding area",
              "text": "The area surrounding {subject} has a pattern of reported property crime, including vehicle break-ins, burglary, and vandalism.",
              "risk": "Crime in the surrounding area increases the likelihood that {subject}, its staff, and visitors will be targeted.",
              "mits": [
                "Obtain crime data from the local police department on a regular schedule and review it with facility leadership.",
                "Adjust lighting, patrol frequency, and camera coverage to address the crime types reported nearby.",
                "Share relevant crime trends with staff so they can take reasonable personal precautions."
              ],
              "risks": [
                "theft",
                "vandalism",
                "forced-entry"
              ],
              "cost": "low"
            },
            {
              "id": "area-no-police-liaison",
              "title": "No working relationship with local police",
              "text": "{subject} has no established point of contact or working relationship with the local law enforcement agency.",
              "risk": "Without a relationship with police, {subject} may not receive timely information on nearby threats, and response during an incident may be slower or less informed.",
              "mits": [
                "Designate a staff member to serve as the law enforcement liaison.",
                "Invite local police to tour {subject} and review floor plans, entrances, and emergency procedures.",
                "Ask whether the agency offers a business notification or crime watch program and enroll if available."
              ],
              "risks": [
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "area-loitering",
              "title": "Loitering and transient activity near site",
              "text": "Loitering and transient activity were observed on and near the property, including around entrances, alcoves, and trash enclosures.",
              "risk": "Unaddressed loitering can lead to trespassing, theft, confrontations with staff, and damage to the property.",
              "mits": [
                "Post no-trespassing signage that supports enforcement under local law.",
                "Establish a written procedure for staff and security to report and address loitering.",
                "Remove or secure features that encourage loitering, such as open alcoves, unsecured trash enclosures, and exterior power outlets."
              ],
              "risks": [
                "unauthorized-entry",
                "personal-safety",
                "vandalism"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Adjacent Properties",
          "vulns": [
            {
              "id": "area-vacant-adjacent",
              "title": "Vacant or poorly kept neighboring property",
              "text": "A vacant or poorly maintained property adjoins {subject} and provides cover for people approaching the site unobserved.",
              "risk": "Neighboring properties without oversight can be used for staging, concealment, or unobserved access to {subject}.",
              "mits": [
                "Contact the neighboring property owner to request repairs, lighting, or securing of openings.",
                "Extend camera coverage and lighting toward the shared property line.",
                "Report persistent problems at the neighboring property to code enforcement or police."
              ],
              "risks": [
                "unauthorized-entry",
                "surveillance",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "area-high-risk-neighbor",
              "title": "Nearby site draws crowds or conflict",
              "text": "A nearby business or venue regularly draws crowds, late-night activity, or public controversy that may affect {subject}.",
              "risk": "Activity at a nearby site can spill onto the property, cause disruption, or place {subject} near a target of protest or violence.",
              "mits": [
                "Monitor the event schedule of nearby venues and plan staffing and access accordingly.",
                "Establish contact with the neighboring business to share information about incidents.",
                "Include nearby higher-risk sites in the facility emergency plan, including alternate access routes."
              ],
              "risks": [
                "disruption",
                "violence",
                "personal-safety"
              ],
              "cost": "low"
            },
            {
              "id": "area-overlook",
              "title": "Site can be observed from nearby buildings",
              "text": "Nearby buildings, parking structures, or high ground allow a clear view into the property, entrances, and work areas of {subject}.",
              "risk": "Outside observation points allow someone to study routines, staffing, and security measures without entering the property.",
              "mits": [
                "Apply window film or blinds to windows that face nearby observation points.",
                "Screen sensitive outdoor activities, such as cash or high-value deliveries, from outside view.",
                "Train staff to report people who appear to be watching or photographing the site."
              ],
              "risks": [
                "surveillance"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Approaches & Access Routes",
          "vulns": [
            {
              "id": "area-single-access-road",
              "title": "Single road in and out of site",
              "text": "{subject} is served by a single access road, with no secondary route for emergency vehicles or evacuation.",
              "risk": "If the only access road is blocked, emergency response and evacuation could be delayed.",
              "mits": [
                "Coordinate with local fire and police to identify an alternate access point for emergency use.",
                "Include traffic control and alternate routes in the emergency plan.",
                "Consider a gated secondary access point that can be opened during emergencies."
              ],
              "risks": [
                "delayed-response",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "area-direct-vehicle-approach",
              "title": "Straight vehicle approach toward building",
              "text": "A public road or drive lines up directly with the building entrance or a populated area, allowing a vehicle to build speed toward the building.",
              "risk": "A long, straight approach allows a vehicle, whether by accident or intent, to strike the building or people near the entrance at speed.",
              "mits": [
                "Install crash-rated bollards, planters, or barriers between the approach and the building face.",
                "Add curves, raised crossings, or landscaping features to reduce vehicle speed on the approach.",
                "Keep pedestrian gathering areas away from the end of the straight approach."
              ],
              "risks": [
                "vehicle-attack",
                "life-safety"
              ],
              "cost": "high"
            },
            {
              "id": "area-public-path",
              "title": "Public walkway runs close to building",
              "text": "A public sidewalk or path passes close to the building, allowing anyone to approach windows and doors without entering the property.",
              "risk": "Close public access allows observation of operations, easy approach to openings, and unnoticed loitering next to the building.",
              "mits": [
                "Use landscaping, low fencing, or planters to define the property line and create distance from the building.",
                "Apply privacy film or blinds to ground-floor windows that face the public path.",
                "Include the public path in camera coverage where it passes nearest the building."
              ],
              "risks": [
                "surveillance",
                "unauthorized-entry"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Natural & Environmental Hazards",
          "vulns": [
            {
              "id": "area-flood-weather",
              "title": "Exposure to flooding or severe weather",
              "text": "{subject} is located in an area subject to flooding, severe storms, or other natural hazards, and no hazard-specific plan was found.",
              "risk": "Natural hazards can damage the building, interrupt operations, and endanger occupants if no plan is in place.",
              "mits": [
                "Review local hazard maps and identify the hazards most likely to affect {subject}.",
                "Add hazard-specific procedures, such as severe weather sheltering and flood response, to the emergency plan.",
                "Raise or protect critical equipment located in flood-prone areas."
              ],
              "risks": [
                "natural-hazard",
                "disruption",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "area-hazmat-nearby",
              "title": "Nearby rail, highway, or industrial hazard",
              "text": "{subject} is near a rail line, major highway, pipeline, or industrial site where a hazardous materials release could occur.",
              "risk": "A chemical release or transportation accident nearby could require rapid shelter-in-place or evacuation.",
              "mits": [
                "Add shelter-in-place procedures, including HVAC shutdown steps, to the emergency plan.",
                "Sign up for local emergency alert systems that report nearby hazardous materials incidents.",
                "Identify evacuation routes that lead away from the likely hazard source."
              ],
              "risks": [
                "natural-hazard",
                "life-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Emergency Services",
          "vulns": [
            {
              "id": "area-long-response-time",
              "title": "Long police or fire response time",
              "text": "{subject} is located a significant distance from the nearest police, fire, or emergency medical station.",
              "risk": "Longer response times mean staff and occupants must manage the first minutes of an emergency on their own.",
              "mits": [
                "Confirm expected response times with local police, fire, and EMS.",
                "Train staff in first aid, bleeding control, and initial emergency actions.",
                "Place first aid kits, bleeding control kits, and AEDs in accessible, marked locations."
              ],
              "risks": [
                "delayed-response",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "area-address-not-visible",
              "title": "Address numbers hard to see",
              "text": "The street address and building identifiers at {subject} are missing, small, or not visible from the road, especially at night.",
              "risk": "Emergency responders may lose time locating the correct building or entrance.",
              "mits": [
                "Install large, reflective address numbers visible from the street in both directions.",
                "Label building entrances with numbers or letters that match the site map given to responders.",
                "Provide local responders with a current site map showing entrances and building names."
              ],
              "risks": [
                "delayed-response"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "perimeter",
      "name": "Perimeter",
      "category": "Perimeter",
      "blurb": "Fences, walls, gates, property lines, and the open ground between the property edge and the building.",
      "subs": [
        {
          "name": "Fencing & Walls",
          "vulns": [
            {
              "id": "per-fence-low",
              "title": "Fence too low or easily climbed",
              "text": "The perimeter fence is low enough, or built in a way, that allows a person to climb over it with little effort.",
              "risk": "A fence that is easily climbed provides little delay and does not reliably keep unauthorized people out.",
              "mits": [
                "Raise the fence or replace it with an anti-climb design at higher-risk segments.",
                "Add an outward-angled topping where appropriate and permitted by local code.",
                "Remove objects near the fence, such as pallets, dumpsters, and parked vehicles, that can be used as climbing aids."
              ],
              "risks": [
                "unauthorized-entry",
                "forced-entry"
              ],
              "cost": "high"
            },
            {
              "id": "per-fence-damage",
              "title": "Damaged fence, gaps, or holes",
              "text": "Sections of the perimeter fence are damaged, with holes, loose fabric, or gaps beneath the bottom rail.",
              "risk": "Damaged fencing allows easy entry and signals that the perimeter is not inspected or maintained.",
              "mits": [
                "Repair damaged sections and close gaps beneath the fence line.",
                "Establish a scheduled perimeter inspection with a written checklist.",
                "Assign responsibility for reporting and repairing perimeter damage within a set time."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "per-no-boundary",
              "title": "No defined property boundary",
              "text": "{subject} has no fence, wall, or other feature that marks the property boundary.",
              "risk": "Without a defined boundary, it is difficult to tell authorized users from trespassers, and enforcement is harder.",
              "mits": [
                "Mark the property boundary with fencing, landscaping, curbs, or low walls.",
                "Post signage at entry points identifying the property as private.",
                "Use paving or surface changes to show the transition from public to private space."
              ],
              "risks": [
                "unauthorized-entry",
                "liability"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Gates",
          "vulns": [
            {
              "id": "per-gate-open",
              "title": "Gates left open or unsecured",
              "text": "Perimeter gates were found open, unlocked, or propped open during the assessment.",
              "risk": "An open gate defeats the purpose of the fence and allows vehicles and people to enter without control.",
              "mits": [
                "Establish a written schedule for opening and closing each gate and assign responsibility.",
                "Install automatic closers or operators on gates that are used frequently.",
                "Add gate-position sensors tied to the alarm or camera system to alert when a gate is left open."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "per-gate-hardware",
              "title": "Weak gate locks or hinges",
              "text": "Gate locks, chains, or hinges are of light construction or can be removed from the outside.",
              "risk": "Weak gate hardware can be cut or removed quickly, allowing entry without leaving obvious signs.",
              "mits": [
                "Replace light chains and padlocks with hardened, shrouded locks.",
                "Weld or cap hinge pins so gates cannot be lifted off.",
                "Inspect gate hardware during scheduled perimeter checks."
              ],
              "risks": [
                "forced-entry",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "per-gate-tailgating",
              "title": "Vehicles can follow through gate",
              "text": "The vehicle gate stays open long enough for a second vehicle to follow an authorized vehicle onto the property.",
              "risk": "Vehicles that follow through the gate enter without any check, defeating the access control system.",
              "mits": [
                "Adjust gate close timing to reduce the open period after each vehicle passes.",
                "Install vehicle detection and cameras that record each gate cycle.",
                "Instruct staff to report vehicles that follow them through the gate."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Clear Zones",
          "vulns": [
            {
              "id": "per-clear-zone",
              "title": "Items stored against fence line",
              "text": "Vehicles, equipment, materials, or vegetation are located against the inside or outside of the fence line.",
              "risk": "Objects against the fence provide climbing aids and places to hide, and they block camera and patrol views.",
              "mits": [
                "Keep a clear zone on both sides of the fence free of stored items and vegetation.",
                "Relocate outdoor storage away from the perimeter.",
                "Include the clear zone in routine perimeter inspections."
              ],
              "risks": [
                "unauthorized-entry",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "per-no-standoff",
              "title": "Building wall serves as the perimeter",
              "text": "Portions of the building wall form the property line, with no buffer between public space and the building.",
              "risk": "Without distance from public space, the building face is exposed to direct contact, vehicle impact, and objects placed against the wall.",
              "mits": [
                "Install planters, bollards, or other barriers along exposed building faces where space allows.",
                "Strengthen windows and doors on walls that face public space.",
                "Increase camera coverage along exposed building faces."
              ],
              "risks": [
                "vehicle-attack",
                "explosive-threat",
                "vandalism"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Signage",
          "vulns": [
            {
              "id": "per-no-signage",
              "title": "No trespass or security signage",
              "text": "No-trespassing, private property, or video surveillance signage is missing at property entrances and along the perimeter.",
              "risk": "Missing signage removes a low-cost deterrent and can make trespass enforcement more difficult.",
              "mits": [
                "Post no-trespassing and private property signage at entrances and along the perimeter, consistent with local law.",
                "Post signage advising that the property is under video surveillance where cameras are in use.",
                "Inspect and replace damaged or faded signs during scheduled maintenance."
              ],
              "risks": [
                "unauthorized-entry",
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "per-wayfinding",
              "title": "Visitors cannot find the main entrance",
              "text": "Wayfinding signage does not clearly direct visitors to the main entrance or visitor parking.",
              "risk": "Visitors who cannot find the main entrance may wander the property or enter through unmonitored doors.",
              "mits": [
                "Install directional signs from property entrances to visitor parking and the main entrance.",
                "Mark non-public doors as employee-only or no-entry.",
                "Direct all visitors to a single monitored entrance."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Perimeter Detection",
          "vulns": [
            {
              "id": "per-no-detection",
              "title": "No way to detect perimeter breach",
              "text": "The perimeter has no intrusion detection, camera coverage, or routine patrol that would detect a breach.",
              "risk": "A breach of the perimeter may go unnoticed until damage or theft is discovered later.",
              "mits": [
                "Add camera coverage with motion-based alerts along the perimeter.",
                "Consider fence-mounted sensors or exterior motion detection at higher-risk segments.",
                "Schedule security patrols of the perimeter at irregular intervals."
              ],
              "risks": [
                "delayed-detection",
                "unauthorized-entry"
              ],
              "cost": "med"
            },
            {
              "id": "per-roof-access",
              "title": "Roof reachable from the ground",
              "text": "The roof can be reached from the ground using exterior ladders, stacked items, utility equipment, or adjacent structures.",
              "risk": "Roof access allows entry through hatches, skylights, and rooftop equipment that are often less protected.",
              "mits": [
                "Install locking ladder guards on fixed exterior ladders.",
                "Relocate items that can be used to climb onto the roof.",
                "Secure roof hatches and add alarm contacts to them."
              ],
              "risks": [
                "unauthorized-entry",
                "sabotage"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "doors",
      "name": "Doors",
      "category": "Doors",
      "blurb": "Exterior and interior doors, frames, locks, hardware, keys, and the systems used to control who passes through them.",
      "subs": [
        {
          "name": "Exterior Doors & Frames",
          "vulns": [
            {
              "id": "door-hollow-core",
              "title": "Hollow or light exterior doors",
              "text": "Exterior doors are hollow-core or light-gauge construction that can be breached with hand tools.",
              "risk": "Light doors can be kicked in or cut through quickly, bypassing even good locks.",
              "mits": [
                "Replace exterior doors with solid-core wood or heavier-gauge steel doors.",
                "Install reinforced strike plates and longer anchoring screws on door frames.",
                "Prioritize doors that serve sensitive areas or face low-visibility parts of the site."
              ],
              "risks": [
                "forced-entry",
                "unauthorized-entry"
              ],
              "cost": "med"
            },
            {
              "id": "door-exposed-hinges",
              "title": "Exterior hinge pins can be removed",
              "text": "Exterior doors have hinges on the outside with removable pins.",
              "risk": "A door with removable hinge pins can be lifted out of its frame even when locked.",
              "mits": [
                "Install non-removable hinge pins or hinge security studs.",
                "Replace hinges with security hinges on outward-swinging exterior doors.",
                "Inspect hinges during scheduled door hardware checks."
              ],
              "risks": [
                "forced-entry"
              ],
              "cost": "low"
            },
            {
              "id": "door-gap-latch",
              "title": "Gap allows latch to be pried",
              "text": "There is a gap between the door and frame large enough to reach or pry the latch.",
              "risk": "A pry tool or shim can be used in the gap to release the latch without forcing the door.",
              "mits": [
                "Install latch guards or astragals on affected doors.",
                "Adjust or shim frames to close excess gaps.",
                "Use deadbolts or latches with anti-shim features."
              ],
              "risks": [
                "forced-entry",
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Locks & Hardware",
          "vulns": [
            {
              "id": "door-weak-locks",
              "title": "Low-grade or residential locks",
              "text": "Exterior and sensitive-area doors use low-grade or residential locks.",
              "risk": "Low-grade locks are more easily picked, bumped, or forced, which shortens the time needed to gain entry.",
              "mits": [
                "Install commercial-grade locks rated for heavy use on exterior and sensitive-area doors.",
                "Add deadbolts where the existing lockset has only a spring latch.",
                "Keep a list of door hardware by location to plan replacement."
              ],
              "risks": [
                "forced-entry",
                "unauthorized-entry"
              ],
              "cost": "med"
            },
            {
              "id": "door-propped",
              "title": "Doors propped open",
              "text": "Exterior or controlled doors were observed propped open with wedges, rocks, or other objects.",
              "risk": "A propped door allows anyone to enter without being checked and defeats the access control and alarm systems.",
              "mits": [
                "Install door-held-open alarms on exterior and controlled doors.",
                "Remove door wedges and prohibit propping in written policy.",
                "Address the reason doors are propped, such as heat, deliveries, or smoking, with a supervised alternative."
              ],
              "risks": [
                "unauthorized-entry",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "door-closers",
              "title": "Door closers fail to latch doors",
              "text": "Door closers are missing, broken, or adjusted so that doors do not fully close and latch.",
              "risk": "A door that does not latch can be opened by pulling on it, leaving the area unsecured without anyone noticing.",
              "mits": [
                "Repair or adjust closers so each door closes and latches on its own.",
                "Include closer and latch function in scheduled door inspections.",
                "Add door-position switches so the alarm system reports doors left ajar."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Keys & Key Control",
          "vulns": [
            {
              "id": "door-no-key-control",
              "title": "No key control system",
              "text": "{subject} has no current record of who holds keys and which doors each key opens.",
              "risk": "Without key control, lost or unreturned keys cannot be tracked, and former employees may still have access.",
              "mits": [
                "Create a key control log showing each key, the doors it opens, and who holds it.",
                "Require signed receipt and return of keys at issue and separation.",
                "Conduct an annual audit of all issued keys."
              ],
              "risks": [
                "unauthorized-entry",
                "insider",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "door-unrestricted-keys",
              "title": "Keys can be copied freely",
              "text": "Keys in use are standard keys that can be copied at any hardware store.",
              "risk": "Copied keys allow access that cannot be tracked or revoked.",
              "mits": [
                "Move to a restricted keyway system with patent-protected key blanks.",
                "Mark keys \"Do Not Duplicate\" as an interim step.",
                "Rekey locks after lost keys or unreturned keys from separated employees."
              ],
              "risks": [
                "unauthorized-entry",
                "insider"
              ],
              "cost": "med"
            },
            {
              "id": "door-master-key",
              "title": "Master keys widely issued",
              "text": "Master or grand master keys are issued to more people than necessary.",
              "risk": "A lost master key exposes many doors at once and is costly to recover from.",
              "mits": [
                "Limit master keys to the fewest people needed and record each holder.",
                "Store spare master keys in a locked, monitored key cabinet.",
                "Replace physical master keys with electronic access where practical."
              ],
              "risks": [
                "unauthorized-entry",
                "insider",
                "theft"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Access Control & Credentials",
          "vulns": [
            {
              "id": "door-no-access-control",
              "title": "No electronic access control",
              "text": "Exterior doors rely only on mechanical keys, with no electronic access control.",
              "risk": "Without electronic access control, access cannot be limited by time or person, and entries are not recorded.",
              "mits": [
                "Install electronic access control on main and high-use exterior doors.",
                "Assign access by role and schedule.",
                "Keep access logs and review them after incidents and on a set schedule."
              ],
              "risks": [
                "unauthorized-entry",
                "evidence-gap",
                "insider"
              ],
              "cost": "high"
            },
            {
              "id": "door-shared-codes",
              "title": "Shared or unchanged keypad codes",
              "text": "Keypad codes are shared among many people and have not been changed in a long time.",
              "risk": "Shared codes cannot identify who entered and spread to people who should not have them.",
              "mits": [
                "Assign individual codes or credentials to each user.",
                "Change shared codes on a set schedule and after staff separations.",
                "Move to card or mobile credentials where practical."
              ],
              "risks": [
                "unauthorized-entry",
                "insider",
                "evidence-gap"
              ],
              "cost": "low"
            },
            {
              "id": "door-credential-deactivation",
              "title": "Credentials not removed after separation",
              "text": "Access cards and codes of former employees and contractors are not deactivated promptly.",
              "risk": "Former staff may retain the ability to enter {subject} after they leave.",
              "mits": [
                "Add credential deactivation to the separation checklist, completed on the last day of work.",
                "Audit the active credential list against current staff on a set schedule.",
                "Set contractor credentials to expire on the contract end date."
              ],
              "risks": [
                "insider",
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Emergency Exits",
          "vulns": [
            {
              "id": "door-exit-unalarmed",
              "title": "Emergency exits not alarmed",
              "text": "Emergency exit doors are not alarmed or monitored, and some are used for routine entry and exit.",
              "risk": "Unmonitored exits allow people to enter or leave unseen and to bring items in or out.",
              "mits": [
                "Install local or monitored alarms on emergency exit doors.",
                "Post signage stating that the door is for emergency use only and an alarm will sound.",
                "Add camera coverage of exit doors that lead to low-visibility areas."
              ],
              "risks": [
                "unauthorized-entry",
                "theft",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "door-exit-blocked",
              "title": "Emergency exits blocked or chained",
              "text": "Emergency exit doors were found blocked by stored items or secured with chains or padlocks.",
              "risk": "Blocked or chained exits can trap occupants during a fire or other emergency.",
              "mits": [
                "Remove obstructions and any chains or padlocks from exit doors immediately.",
                "Include exit checks in daily opening and closing routines.",
                "Use code-compliant delayed-egress or alarmed hardware where security of the exit is a concern."
              ],
              "risks": [
                "life-safety",
                "liability"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "windows",
      "name": "Windows",
      "category": "Windows",
      "blurb": "Ground-level and accessible windows, glazing, locks, coverings, and openings such as skylights and vents.",
      "subs": [
        {
          "name": "Glazing & Frames",
          "vulns": [
            {
              "id": "win-ground-glass",
              "title": "Ground-floor glass easily broken",
              "text": "Ground-floor windows and glass doors use standard glass that can be broken quickly.",
              "risk": "Broken glass provides an immediate entry point and can injure people nearby.",
              "mits": [
                "Apply security film to ground-floor and accessible glass.",
                "Replace glazing at higher-risk openings with laminated or impact-resistant glass.",
                "Consider fragment-retention film where blast or flying glass is a concern."
              ],
              "risks": [
                "forced-entry",
                "life-safety"
              ],
              "cost": "med"
            },
            {
              "id": "win-glass-near-locks",
              "title": "Glass panel next to door hardware",
              "text": "Glass panels within reach of door locks or panic hardware allow someone to break the glass and open the door.",
              "risk": "Breaking a small panel may allow the door to be unlocked from the inside within seconds.",
              "mits": [
                "Replace sidelight or door glass near hardware with laminated or impact-resistant glazing.",
                "Install security film on existing glass panels near hardware.",
                "Add a cover or shield over interior hardware where it can be reached through glass."
              ],
              "risks": [
                "forced-entry",
                "unauthorized-entry"
              ],
              "cost": "low"
            },
            {
              "id": "win-upper-accessible",
              "title": "Upper windows reachable from roofs or ledges",
              "text": "Upper-floor windows can be reached from adjoining roofs, canopies, or ledges and are not secured.",
              "risk": "Upper windows are often left unlocked and unalarmed because they are assumed to be out of reach.",
              "mits": [
                "Lock and add alarm contacts to upper windows reachable from roofs or ledges.",
                "Install security film on these windows.",
                "Limit access to the roofs and canopies that lead to them."
              ],
              "risks": [
                "unauthorized-entry",
                "forced-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Locks & Hardware",
          "vulns": [
            {
              "id": "win-no-locks",
              "title": "Windows lack working locks",
              "text": "Accessible windows have missing, broken, or easily defeated latches.",
              "risk": "Windows that cannot be secured can be opened from outside with little effort.",
              "mits": [
                "Repair or replace window latches on accessible windows.",
                "Add secondary locks or pins to operable windows.",
                "Check window locks during closing routines."
              ],
              "risks": [
                "unauthorized-entry",
                "forced-entry"
              ],
              "cost": "low"
            },
            {
              "id": "win-left-open",
              "title": "Windows left open after hours",
              "text": "Windows were found open or unlocked outside of business hours.",
              "risk": "An open window allows entry without force and may not trigger the alarm.",
              "mits": [
                "Add window checks to the end-of-day closing checklist.",
                "Install alarm contacts on accessible operable windows.",
                "Fix windows that cannot be closed or locked."
              ],
              "risks": [
                "unauthorized-entry",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "win-ac-units",
              "title": "Window air units allow entry",
              "text": "Window-mounted air conditioning units or removable panels on accessible windows can be pushed in or pulled out from outside.",
              "risk": "Removing the unit creates an opening large enough for a person to enter without breaking glass.",
              "mits": [
                "Secure window units with brackets or bolts that cannot be removed from outside.",
                "Replace window units with through-wall or central systems where practical.",
                "Add alarm contacts or motion detection covering these windows."
              ],
              "risks": [
                "forced-entry",
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Visibility & Coverings",
          "vulns": [
            {
              "id": "win-view-into-sensitive",
              "title": "Sensitive areas visible through windows",
              "text": "Sensitive areas, valuable equipment, or cash handling are visible through exterior windows.",
              "risk": "Visible valuables and activities invite theft and allow outsiders to study routines.",
              "mits": [
                "Apply privacy film or install blinds on windows into sensitive areas.",
                "Relocate valuables and sensitive work away from exterior windows.",
                "Close blinds at the end of each day."
              ],
              "risks": [
                "theft",
                "surveillance"
              ],
              "cost": "low"
            },
            {
              "id": "win-signage-blocks-view",
              "title": "Window signs block view outward",
              "text": "Window signage, posters, or coverings block staff from seeing outside the building.",
              "risk": "Staff cannot see approaching people or activity in front of the building, which reduces natural surveillance.",
              "mits": [
                "Limit window signage to a small portion of each window.",
                "Keep the view from reception and service counters clear.",
                "Place signs above or below eye level where they are needed."
              ],
              "risks": [
                "delayed-detection",
                "surveillance"
              ],
              "cost": "low"
            },
            {
              "id": "win-no-coverings-night",
              "title": "Interior lit and visible at night",
              "text": "Windows have no blinds or coverings, so lit interiors are fully visible from outside at night.",
              "risk": "Outsiders can see staff, layout, and valuables while staff cannot see out.",
              "mits": [
                "Install blinds or shades and close them after dark.",
                "Apply privacy film to windows into work areas.",
                "Arrange workstations so staff do not sit with their backs to uncovered windows."
              ],
              "risks": [
                "surveillance",
                "personal-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Other Openings",
          "vulns": [
            {
              "id": "win-skylights-vents",
              "title": "Skylights, vents, or hatches unsecured",
              "text": "Skylights, large vents, and roof or wall openings are large enough for a person to pass through and are not secured.",
              "risk": "These openings are often less protected than doors and windows and may not be alarmed.",
              "mits": [
                "Install bars or grilles on openings larger than a person can pass through.",
                "Add alarm contacts or motion detection covering these openings.",
                "Secure the roof and other areas that provide access to them."
              ],
              "risks": [
                "unauthorized-entry",
                "forced-entry"
              ],
              "cost": "med"
            },
            {
              "id": "win-basement-wells",
              "title": "Basement or below-grade windows hidden",
              "text": "Basement or below-grade windows are hidden from view by window wells or vegetation.",
              "risk": "Hidden windows allow forced entry to take place unseen.",
              "mits": [
                "Install grates or locking covers over window wells.",
                "Trim vegetation that hides the windows.",
                "Add alarm contacts or glass-break detectors to these windows."
              ],
              "risks": [
                "forced-entry",
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Detection",
          "vulns": [
            {
              "id": "win-no-glass-break",
              "title": "No glass-break detection",
              "text": "The alarm system does not include glass-break detection at accessible windows and glass doors.",
              "risk": "A person can enter through broken glass without opening a protected door or window and may not be detected.",
              "mits": [
                "Install glass-break detectors covering accessible glass.",
                "Add interior motion detection in rooms with large glass areas.",
                "Test glass-break detectors on a set schedule."
              ],
              "risks": [
                "delayed-detection",
                "forced-entry"
              ],
              "cost": "med"
            },
            {
              "id": "win-no-camera-view",
              "title": "Accessible windows outside camera view",
              "text": "Ground-floor windows on the sides and rear of the building are not covered by cameras.",
              "risk": "Forced entry through these windows would not be recorded.",
              "mits": [
                "Extend camera coverage to the sides and rear of the building.",
                "Add lighting to these areas to support camera images at night.",
                "Include these windows in patrol routes."
              ],
              "risks": [
                "evidence-gap",
                "delayed-detection"
              ],
              "cost": "med"
            }
          ]
        }
      ]
    },
    {
      "id": "parking",
      "name": "Parking",
      "category": "Parking",
      "blurb": "Parking lots and structures, vehicle access, assigned spaces, and the walk between vehicles and the building.",
      "subs": [
        {
          "name": "Lot Access & Control",
          "vulns": [
            {
              "id": "park-open-lot",
              "title": "Parking open to the public",
              "text": "The parking area is open to the public, with no control over who parks or how long vehicles remain.",
              "risk": "Open parking makes it hard to identify vehicles that do not belong and allows unknown vehicles close to the building.",
              "mits": [
                "Post signage limiting parking to staff and visitors of {subject}.",
                "Establish a procedure for identifying and removing unauthorized or abandoned vehicles.",
                "Consider gated or permit-controlled parking for staff."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "park-no-permits",
              "title": "No vehicle permit or registration",
              "text": "Staff vehicles are not registered and display no permit or decal.",
              "risk": "Without registration, security cannot quickly tell staff vehicles from outside vehicles or contact owners.",
              "mits": [
                "Register staff vehicles and issue parking permits or decals.",
                "Keep a vehicle list that security can check during patrols.",
                "Update the list when staff join, leave, or change vehicles."
              ],
              "risks": [
                "unauthorized-entry",
                "evidence-gap"
              ],
              "cost": "low"
            },
            {
              "id": "park-abandoned",
              "title": "Abandoned vehicles left in lot",
              "text": "Vehicles have been left in the parking area for long periods with no known owner.",
              "risk": "Abandoned vehicles can hide criminal activity, be used for storage of stolen items, or pose a threat near the building.",
              "mits": [
                "Establish a procedure to identify, tag, and remove abandoned vehicles consistent with local law.",
                "Record plates of vehicles that remain after hours.",
                "Coordinate with police on suspicious vehicles."
              ],
              "risks": [
                "unauthorized-entry",
                "explosive-threat"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Vehicle Standoff",
          "vulns": [
            {
              "id": "park-near-building",
              "title": "Vehicles park close to the building",
              "text": "Vehicles can park or stop immediately next to the building or main entrance.",
              "risk": "Vehicles close to the building increase the effect of a vehicle-borne explosive or vehicle ramming and block emergency access.",
              "mits": [
                "Move parking away from the building where space allows, or limit spaces nearest the building to known, registered vehicles.",
                "Install bollards or planters between parking and the building face.",
                "Prohibit unattended vehicles in drop-off and fire lanes."
              ],
              "risks": [
                "vehicle-attack",
                "explosive-threat"
              ],
              "cost": "high"
            },
            {
              "id": "park-no-barriers-entrance",
              "title": "No barriers between drive and entrance",
              "text": "There are no barriers preventing a vehicle from driving onto the sidewalk or into the main entrance.",
              "risk": "A vehicle, by accident or intent, could strike people at the entrance or enter the building.",
              "mits": [
                "Install crash-rated bollards or planters at the main entrance and pedestrian gathering areas.",
                "Use curbs and raised walkways to separate vehicles from pedestrians.",
                "Review the vehicle approach to each entrance during site planning."
              ],
              "risks": [
                "vehicle-attack",
                "life-safety"
              ],
              "cost": "high"
            }
          ]
        },
        {
          "name": "Lot Visibility & Patrol",
          "vulns": [
            {
              "id": "park-poor-visibility",
              "title": "Parking not visible from building",
              "text": "The parking area cannot be seen from occupied parts of the building.",
              "risk": "Crimes in the lot are less likely to be noticed or reported while they are happening.",
              "mits": [
                "Extend camera coverage to all parking areas.",
                "Include the parking lot in scheduled security patrols.",
                "Trim vegetation and remove obstructions that block views of the lot."
              ],
              "risks": [
                "theft",
                "personal-safety",
                "delayed-detection"
              ],
              "cost": "med"
            },
            {
              "id": "park-no-escort",
              "title": "No escort for staff after dark",
              "text": "No escort or check-in option is available for staff walking to vehicles after dark.",
              "risk": "Staff walking alone to vehicles at night are at greater risk of robbery or assault.",
              "mits": [
                "Offer security or buddy escorts to vehicles on request.",
                "Encourage staff to leave in groups after dark.",
                "Assign late-shift parking closest to the building exit."
              ],
              "risks": [
                "personal-safety",
                "violence"
              ],
              "cost": "low"
            },
            {
              "id": "park-no-call-stations",
              "title": "No emergency call stations in lot",
              "text": "The parking area has no emergency call stations or clearly posted security phone number.",
              "risk": "People in trouble in the lot may have no fast way to call for help.",
              "mits": [
                "Install emergency call stations in larger or isolated parking areas.",
                "Post the security or emergency phone number throughout the lot.",
                "Cover call stations with cameras."
              ],
              "risks": [
                "personal-safety",
                "delayed-response"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Parking Structures",
          "vulns": [
            {
              "id": "park-garage-stairwells",
              "title": "Garage stairwells and elevators unmonitored",
              "text": "Parking garage stairwells and elevators are enclosed and have no camera coverage or emergency call stations.",
              "risk": "Enclosed areas with no monitoring allow assaults or theft to occur unseen, with no way for victims to call for help.",
              "mits": [
                "Install cameras in garage stairwells and elevator lobbies.",
                "Add emergency call stations on each garage level.",
                "Use glass-backed or open stairwell designs during renovation."
              ],
              "risks": [
                "personal-safety",
                "violence",
                "delayed-response"
              ],
              "cost": "med"
            },
            {
              "id": "park-garage-under-building",
              "title": "Parking located under the building",
              "text": "Vehicles can park directly beneath occupied parts of the building.",
              "risk": "A vehicle parked under the building places any vehicle-borne threat in contact with the structure.",
              "mits": [
                "Limit under-building parking to registered staff vehicles.",
                "Screen or inspect vehicles entering under-building parking during elevated threat periods.",
                "Prohibit visitor and delivery vehicles from under-building parking."
              ],
              "risks": [
                "explosive-threat",
                "vehicle-attack"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Reserved & Executive Parking",
          "vulns": [
            {
              "id": "park-named-spaces",
              "title": "Reserved spaces display names or titles",
              "text": "Reserved parking spaces are marked with names or job titles of executives or key staff.",
              "risk": "Named spaces tell outsiders which vehicle belongs to which person and when they are present.",
              "mits": [
                "Replace names and titles on reserved spaces with numbers.",
                "Keep the list of space assignments internal.",
                "Vary the location of reserved parking for at-risk staff where practical."
              ],
              "risks": [
                "surveillance",
                "personal-safety"
              ],
              "cost": "low"
            },
            {
              "id": "park-predictable-routine",
              "title": "Key staff arrival is predictable",
              "text": "Executives and key staff arrive and leave at the same times through the same entrance every day.",
              "risk": "Predictable routines make it easier for a person to plan an approach or confrontation.",
              "mits": [
                "Encourage key staff to vary arrival times and routes when practical.",
                "Provide a secure or monitored parking option for at-risk staff.",
                "Brief key staff on reporting suspicious vehicles or people near their parking area."
              ],
              "risks": [
                "personal-safety",
                "surveillance"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "landscaping",
      "name": "Landscaping",
      "category": "Landscaping",
      "blurb": "Trees, shrubs, ground cover, site features, and how the grounds support or block visibility and control of the property.",
      "subs": [
        {
          "name": "Concealment & Sightlines",
          "vulns": [
            {
              "id": "land-overgrown-shrubs",
              "title": "Overgrown shrubs near doors and windows",
              "text": "Shrubs near doors, windows, and walkways are overgrown and tall enough to hide a person.",
              "risk": "Overgrown landscaping provides concealment for someone waiting near entrances or attempting forced entry.",
              "mits": [
                "Trim shrubs near the building and walkways to a low height.",
                "Trim tree canopies up from the ground so the area beneath is visible.",
                "Add landscape trimming to a recurring maintenance schedule."
              ],
              "risks": [
                "delayed-detection",
                "personal-safety",
                "forced-entry"
              ],
              "cost": "low"
            },
            {
              "id": "land-blocks-cameras",
              "title": "Trees block cameras and lights",
              "text": "Trees and vegetation block camera views and light fixtures.",
              "risk": "Blocked cameras and lights leave areas unmonitored and dark, even though equipment is installed.",
              "mits": [
                "Trim trees and vegetation that block cameras or lights.",
                "Review camera views after each trimming cycle and seasonal growth.",
                "Relocate cameras or lights where vegetation cannot be cleared."
              ],
              "risks": [
                "delayed-detection",
                "evidence-gap"
              ],
              "cost": "low"
            },
            {
              "id": "land-berms-walls",
              "title": "Berms or low walls hide approaches",
              "text": "Earth berms, low walls, or grade changes near the building hide people approaching from parts of the site.",
              "risk": "Hidden approaches allow someone to get close to the building without being seen.",
              "mits": [
                "Lower or reshape berms and walls where they hide approaches to entrances.",
                "Add camera coverage of areas hidden by grade changes.",
                "Add lighting to areas behind walls and berms."
              ],
              "risks": [
                "delayed-detection",
                "surveillance"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Territorial Definition",
          "vulns": [
            {
              "id": "land-no-transition",
              "title": "No clear line between public and private",
              "text": "Landscaping does not show where public space ends and the property of {subject} begins.",
              "risk": "Without a visible boundary, people are more likely to cut across or remain on the property without reason.",
              "mits": [
                "Use landscaping, low hedges, or decorative fencing to define the property line.",
                "Use changes in paving or ground cover to mark entry to private areas.",
                "Post private property signage at points where the boundary is crossed."
              ],
              "risks": [
                "unauthorized-entry",
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "land-poor-maintenance",
              "title": "Grounds appear poorly maintained",
              "text": "The grounds show signs of neglect, such as litter, dead plants, graffiti, or damaged features.",
              "risk": "A neglected property suggests that no one is watching and can invite further vandalism and trespass.",
              "mits": [
                "Establish a regular grounds maintenance schedule.",
                "Remove litter and graffiti promptly after it is found.",
                "Repair damaged site features as soon as practical."
              ],
              "risks": [
                "vandalism",
                "reputational"
              ],
              "cost": "low"
            },
            {
              "id": "land-shortcuts",
              "title": "Worn paths show people cutting across site",
              "text": "Worn paths through landscaping show that people regularly cut across the property.",
              "risk": "Regular cut-through traffic brings people onto the property without a reason to be there and close to the building.",
              "mits": [
                "Block worn paths with plantings, fencing, or landscape features.",
                "Post private property signage where paths enter the site.",
                "Provide a defined walkway if the route serves a legitimate need."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Site Features & Materials",
          "vulns": [
            {
              "id": "land-loose-rocks",
              "title": "Loose rocks or landscape stone near glass",
              "text": "Landscaping uses loose rocks, bricks, or stones that could be thrown through windows.",
              "risk": "Loose material close to the building provides a ready tool for breaking glass.",
              "mits": [
                "Replace loose rock near the building with mulch, plantings, or fixed material.",
                "Set decorative stones in mortar where they are retained.",
                "Keep landscape material away from glass entrances."
              ],
              "risks": [
                "vandalism",
                "forced-entry"
              ],
              "cost": "low"
            },
            {
              "id": "land-climbing-aids",
              "title": "Trees or features help reach roof or windows",
              "text": "Trees, trellises, or landscape walls near the building allow a person to climb to upper windows or the roof.",
              "risk": "Climbing aids give access to openings that are often left unlocked or unalarmed.",
              "mits": [
                "Trim or remove tree limbs that reach the building.",
                "Relocate or modify trellises and walls next to the building.",
                "Secure upper windows and roof openings that cannot be isolated."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Barriers & Hardscape",
          "vulns": [
            {
              "id": "land-planters-not-rated",
              "title": "Planters and features not built to stop vehicles",
              "text": "Planters, benches, and other site features near entrances are light or decorative and are not built to stop a vehicle.",
              "risk": "Light features may give a false sense of protection and could become debris in a vehicle strike.",
              "mits": [
                "Replace key features with crash-rated planters or bollards at higher-risk entrances.",
                "Have a qualified professional review the placement and rating of vehicle barriers.",
                "Use landscaping and grade changes to slow or redirect vehicles on approaches."
              ],
              "risks": [
                "vehicle-attack",
                "life-safety"
              ],
              "cost": "high"
            },
            {
              "id": "land-trash-enclosure",
              "title": "Trash enclosure provides cover",
              "text": "The trash enclosure is unlocked, poorly lit, or located against the building.",
              "risk": "Enclosures provide a hiding place, a place to hide stolen items, and a fire risk next to the building.",
              "mits": [
                "Lock trash enclosures and move them away from the building where practical.",
                "Light the enclosure and include it in camera coverage.",
                "Keep the enclosure clean and doors closed."
              ],
              "risks": [
                "theft",
                "delayed-detection",
                "natural-hazard"
              ],
              "cost": "low"
            },
            {
              "id": "land-seating-near-entry",
              "title": "Benches and seating draw loitering at doors",
              "text": "Benches, ledges, or seating are placed immediately next to entrances or windows.",
              "risk": "Seating near entrances invites loitering and gives people a reason to remain close to doors.",
              "mits": [
                "Move seating away from entrances and windows.",
                "Place seating in areas that staff can see.",
                "Use designs that discourage lying down or long stays where loitering is a problem."
              ],
              "risks": [
                "unauthorized-entry",
                "personal-safety"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "lighting",
      "name": "Lighting",
      "category": "Lighting",
      "blurb": "Exterior and interior lighting, coverage of entrances, parking, and walkways, and how lighting is controlled and maintained.",
      "subs": [
        {
          "name": "Coverage",
          "vulns": [
            {
              "id": "light-dark-areas",
              "title": "Dark areas around building and lot",
              "text": "Portions of the building exterior, parking area, and walkways are poorly lit or completely dark at night.",
              "risk": "Dark areas provide concealment, increase the risk to people walking at night, and reduce camera effectiveness.",
              "mits": [
                "Add or upgrade lighting to cover dark areas identified during the night assessment.",
                "Light entrances, walkways, and parking areas evenly to reduce shadows.",
                "Conduct a night lighting survey at least once a year."
              ],
              "risks": [
                "personal-safety",
                "delayed-detection",
                "theft"
              ],
              "cost": "med"
            },
            {
              "id": "light-entrances",
              "title": "Entrances poorly lit",
              "text": "Entrances and exit doors are not lit well enough to see a person's face.",
              "risk": "Poor entrance lighting makes it hard to identify people and allows someone to wait near the door unseen.",
              "mits": [
                "Install lighting at each entrance that lights faces and the door area.",
                "Light secondary and emergency exits as well as the main entrance.",
                "Coordinate entrance lighting with camera placement."
              ],
              "risks": [
                "personal-safety",
                "unauthorized-entry",
                "evidence-gap"
              ],
              "cost": "med"
            },
            {
              "id": "light-perimeter-dark",
              "title": "Fence line and rear of site unlit",
              "text": "The fence line, rear of the building, and service areas have little or no lighting.",
              "risk": "Dark perimeter areas allow someone to approach, cut a fence, or force entry unseen.",
              "mits": [
                "Add lighting along the fence line and at the rear of the building.",
                "Use motion-activated lighting where constant lighting is not practical.",
                "Coordinate perimeter lighting with camera coverage."
              ],
              "risks": [
                "delayed-detection",
                "forced-entry"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Maintenance & Outages",
          "vulns": [
            {
              "id": "light-burned-out",
              "title": "Burned-out or damaged fixtures",
              "text": "Several exterior light fixtures were burned out, damaged, or covered with debris.",
              "risk": "Failed fixtures create unplanned dark areas and suggest the property is not maintained.",
              "mits": [
                "Repair or replace failed fixtures promptly.",
                "Assign staff to check exterior lighting at least weekly after dark.",
                "Keep spare lamps and parts on hand."
              ],
              "risks": [
                "personal-safety",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "light-vulnerable-fixtures",
              "title": "Light fixtures can be easily disabled",
              "text": "Exterior fixtures are within reach and could be broken or unscrewed.",
              "risk": "Lights that can be disabled easily allow someone to darken an area before acting.",
              "mits": [
                "Install vandal-resistant fixtures or move them out of reach.",
                "Protect fixtures with cages or covers where they must remain low.",
                "Add an alarm or camera alert for lighting failures in critical areas."
              ],
              "risks": [
                "vandalism",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "light-no-schedule",
              "title": "No schedule for checking exterior lights",
              "text": "{subject} has no schedule or assigned person for checking exterior lighting.",
              "risk": "Failed lights may remain out for long periods before anyone notices.",
              "mits": [
                "Assign responsibility for a weekly after-dark lighting check.",
                "Record outages and repair dates.",
                "Include lighting in security patrol checklists."
              ],
              "risks": [
                "delayed-detection",
                "personal-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Controls & Timing",
          "vulns": [
            {
              "id": "light-manual-control",
              "title": "Exterior lighting switched by hand",
              "text": "Exterior lighting relies on manual switches and is often left off.",
              "risk": "Lighting that depends on someone remembering to switch it on is unreliable.",
              "mits": [
                "Install photocells or timers to control exterior lighting automatically.",
                "Check timer settings when daylight saving time changes.",
                "Add motion-activated lighting in low-use areas."
              ],
              "risks": [
                "delayed-detection",
                "personal-safety"
              ],
              "cost": "low"
            },
            {
              "id": "light-controls-exposed",
              "title": "Lighting controls accessible from outside",
              "text": "Exterior lighting switches or electrical panels are accessible from outside the building.",
              "risk": "Anyone can turn off the lights before attempting entry.",
              "mits": [
                "Move lighting controls to a secured interior location.",
                "Lock exterior electrical panels.",
                "Add camera coverage of any controls that cannot be relocated."
              ],
              "risks": [
                "sabotage",
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Light Quality & Glare",
          "vulns": [
            {
              "id": "light-glare",
              "title": "Glare blinds cameras or guards",
              "text": "Light fixtures create glare that blinds cameras or makes it hard for guards and staff to see.",
              "risk": "Glare reduces the ability to identify people and can hide activity behind the light source.",
              "mits": [
                "Aim or shield fixtures to reduce glare toward cameras and observation points.",
                "Use lighting that renders colors accurately to aid identification.",
                "Review camera images at night after lighting changes."
              ],
              "risks": [
                "evidence-gap",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "light-uneven",
              "title": "Uneven lighting creates deep shadows",
              "text": "Lighting levels vary widely, with bright areas next to deep shadows.",
              "risk": "The eye and cameras adjust poorly between bright and dark areas, making people in shadows harder to see.",
              "mits": [
                "Add fixtures to fill gaps between existing lights.",
                "Use more fixtures at lower output rather than a few very bright ones.",
                "Have a lighting professional measure light levels and recommend changes."
              ],
              "risks": [
                "delayed-detection",
                "personal-safety"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Interior & Emergency Lighting",
          "vulns": [
            {
              "id": "light-no-emergency",
              "title": "Emergency lighting missing or not tested",
              "text": "Emergency lighting in corridors, stairwells, and exits is missing, not working, or not tested.",
              "risk": "A power failure during an emergency could leave occupants unable to find exits.",
              "mits": [
                "Repair or install emergency lighting along exit routes.",
                "Test emergency lighting on the schedule required by the local fire code and keep records.",
                "Include emergency lighting in fire inspection walkthroughs."
              ],
              "risks": [
                "life-safety",
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "light-interior-after-hours",
              "title": "No interior lighting after hours",
              "text": "The building interior is fully dark after hours, so activity inside cannot be seen from outside or by cameras.",
              "risk": "Interior darkness allows an intruder to move without being seen by passing patrols.",
              "mits": [
                "Leave selected interior lights on after hours, especially near entrances and valuables.",
                "Add motion-activated interior lighting in key areas.",
                "Confirm interior cameras can record in low light."
              ],
              "risks": [
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "alarm-systems",
      "name": "Alarm Systems",
      "category": "Alarm Systems",
      "blurb": "Intrusion, duress, and fire alarm systems, their sensors, monitoring, testing, and how alarms are answered.",
      "subs": [
        {
          "name": "Intrusion Detection Coverage",
          "vulns": [
            {
              "id": "alarm-no-system",
              "title": "No intrusion alarm system",
              "text": "{subject} has no intrusion alarm system.",
              "risk": "Without an alarm, a break-in after hours may not be discovered until staff arrive.",
              "mits": [
                "Install a monitored intrusion alarm system covering exterior doors and accessible windows.",
                "Add interior motion detection in key areas and along likely paths.",
                "Post alarm signage as an added deterrent."
              ],
              "risks": [
                "delayed-detection",
                "forced-entry",
                "theft"
              ],
              "cost": "high"
            },
            {
              "id": "alarm-partial-coverage",
              "title": "Alarm does not cover all openings",
              "text": "The alarm system covers only some exterior doors and windows, leaving other openings unprotected.",
              "risk": "An intruder can enter through an unprotected opening without causing an alarm.",
              "mits": [
                "Add door and window contacts to all exterior openings.",
                "Add motion detection to cover areas between protected openings.",
                "Map alarm zones and review the map for gaps."
              ],
              "risks": [
                "delayed-detection",
                "unauthorized-entry"
              ],
              "cost": "med"
            },
            {
              "id": "alarm-no-interior",
              "title": "No interior motion detection",
              "text": "The alarm system relies only on door contacts, with no interior motion detection.",
              "risk": "Entry through walls, roofs, or glass will not cause an alarm if only doors are protected.",
              "mits": [
                "Install motion detectors in hallways, sensitive rooms, and likely paths.",
                "Place detectors so they cover rooms with large windows or roof access.",
                "Test detectors after any change to room layout."
              ],
              "risks": [
                "delayed-detection"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Monitoring & Response",
          "vulns": [
            {
              "id": "alarm-local-only",
              "title": "Alarm sounds locally only",
              "text": "The alarm sounds only on site and is not monitored by a central station.",
              "risk": "A local alarm with no monitoring may be ignored, and no one may respond if the building is empty.",
              "mits": [
                "Contract with a central station to monitor the alarm system at all hours.",
                "Provide an up-to-date call list to the monitoring company.",
                "Confirm the monitoring company's procedure for dispatching police."
              ],
              "risks": [
                "delayed-response",
                "delayed-detection"
              ],
              "cost": "med"
            },
            {
              "id": "alarm-outdated-call-list",
              "title": "Alarm call list out of date",
              "text": "The alarm company's contact list includes former employees or incorrect phone numbers.",
              "risk": "The monitoring company may be unable to reach anyone during an alarm, delaying response.",
              "mits": [
                "Review and update the alarm call list at least quarterly.",
                "Assign a staff member to own the list.",
                "Include at least two current contacts who can respond on site."
              ],
              "risks": [
                "delayed-response"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Duress & Panic Alarms",
          "vulns": [
            {
              "id": "alarm-no-panic",
              "title": "No duress or panic alarms",
              "text": "Reception, cash handling, and other public-facing areas have no duress or panic buttons.",
              "risk": "Staff facing a threat cannot quietly call for help.",
              "mits": [
                "Install duress buttons at reception, cash handling, and other higher-risk stations.",
                "Train staff on when and how to use duress buttons.",
                "Test duress buttons on a set schedule with the monitoring company."
              ],
              "risks": [
                "violence",
                "delayed-response",
                "personal-safety"
              ],
              "cost": "med"
            },
            {
              "id": "alarm-panic-untested",
              "title": "Panic buttons not tested",
              "text": "Duress or panic buttons are installed but have not been tested, and staff are unsure what happens when they are pressed.",
              "risk": "Untested buttons may not work, and staff may not use them if they are unsure of the response.",
              "mits": [
                "Test all duress buttons with the monitoring company on a set schedule.",
                "Write and share the response procedure for a duress alarm.",
                "Include duress alarm use in staff training."
              ],
              "risks": [
                "delayed-response",
                "violence"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Maintenance & Testing",
          "vulns": [
            {
              "id": "alarm-false-alarms",
              "title": "Frequent false alarms",
              "text": "The alarm system has frequent false alarms.",
              "risk": "Frequent false alarms lead staff and responders to ignore real ones and may result in fines or reduced police response.",
              "mits": [
                "Identify and fix the cause of repeat false alarms, such as faulty sensors or user error.",
                "Retrain users on arming and disarming procedures.",
                "Schedule routine service of the alarm system."
              ],
              "risks": [
                "delayed-response",
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "alarm-no-testing",
              "title": "Alarm system not tested",
              "text": "The alarm system has no record of regular testing or inspection.",
              "risk": "Failed sensors or communication paths may go unnoticed until an incident.",
              "mits": [
                "Test the alarm system and communication path on a set schedule and keep records.",
                "Have the system inspected by a licensed alarm company each year.",
                "Replace backup batteries on the manufacturer's schedule."
              ],
              "risks": [
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "User Codes & Arming",
          "vulns": [
            {
              "id": "alarm-shared-code",
              "title": "Shared alarm codes",
              "text": "Many staff share a single alarm code.",
              "risk": "Shared codes prevent identifying who armed or disarmed the system and are hard to revoke.",
              "mits": [
                "Assign individual alarm codes to each user.",
                "Remove codes of departing staff on their last day.",
                "Review alarm open and close reports for unusual activity."
              ],
              "risks": [
                "insider",
                "evidence-gap"
              ],
              "cost": "low"
            },
            {
              "id": "alarm-not-armed",
              "title": "Alarm not consistently armed",
              "text": "Records or staff interviews show the alarm system is not consistently armed at closing.",
              "risk": "An unarmed system provides no protection.",
              "mits": [
                "Assign responsibility for arming the system at closing.",
                "Set up automatic notifications if the system is not armed by a set time.",
                "Include arming in the written closing checklist."
              ],
              "risks": [
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "cameras",
      "name": "Cameras",
      "category": "Cameras",
      "blurb": "Video surveillance coverage, camera quality, recording and storage, monitoring, and system security.",
      "subs": [
        {
          "name": "Coverage",
          "vulns": [
            {
              "id": "cam-gaps",
              "title": "Gaps in camera coverage",
              "text": "Camera coverage does not include all entrances, parking areas, and key interior areas.",
              "risk": "Incidents in uncovered areas will not be recorded and may not be detected.",
              "mits": [
                "Map current camera views and identify gaps at entrances, parking, and sensitive areas.",
                "Add cameras to cover identified gaps, starting with entrances and exits.",
                "Review coverage after any change in building layout or use."
              ],
              "risks": [
                "evidence-gap",
                "delayed-detection"
              ],
              "cost": "med"
            },
            {
              "id": "cam-no-entrance-face",
              "title": "Entrance cameras cannot capture faces",
              "text": "Cameras at entrances are mounted too high or too far away to capture a clear image of faces.",
              "risk": "Recorded images may not be usable to identify a suspect.",
              "mits": [
                "Add cameras at entrances mounted at a height and angle to capture faces.",
                "Use separate cameras for overview and identification at key entrances.",
                "Test image quality by reviewing recorded footage of known staff."
              ],
              "risks": [
                "evidence-gap"
              ],
              "cost": "med"
            },
            {
              "id": "cam-blocked",
              "title": "Camera views blocked or misaimed",
              "text": "Some cameras are blocked by signs, vegetation, or stored items, or are aimed away from their intended area.",
              "risk": "Blocked or misaimed cameras record nothing useful.",
              "mits": [
                "Clear obstructions and re-aim cameras to their intended views.",
                "Check camera views on a set schedule and after maintenance.",
                "Lock camera mounts to keep them from being moved."
              ],
              "risks": [
                "evidence-gap",
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Image Quality",
          "vulns": [
            {
              "id": "cam-low-res",
              "title": "Low-resolution or outdated cameras",
              "text": "Cameras are older, low-resolution models that produce unclear images.",
              "risk": "Low-quality images may not support identification or investigation.",
              "mits": [
                "Replace outdated cameras with current higher-resolution models, starting with entrances.",
                "Confirm that recording settings preserve full image quality.",
                "Plan camera replacement on a set life cycle."
              ],
              "risks": [
                "evidence-gap"
              ],
              "cost": "high"
            },
            {
              "id": "cam-night",
              "title": "Cameras unusable at night",
              "text": "Cameras do not produce usable images at night because of poor lighting or lack of low-light capability.",
              "risk": "Most after-hours incidents happen in darkness and will not be captured clearly.",
              "mits": [
                "Add lighting in camera views or use cameras with infrared or low-light capability.",
                "Review night footage to confirm usable images.",
                "Avoid placing cameras where lights shine directly into them."
              ],
              "risks": [
                "evidence-gap",
                "delayed-detection"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Recording & Retention",
          "vulns": [
            {
              "id": "cam-short-retention",
              "title": "Recordings kept too short a time",
              "text": "Video recordings are overwritten after a short period.",
              "risk": "Footage may be lost before an incident is discovered or reported.",
              "mits": [
                "Increase storage to retain video for a period that fits the needs of {subject} and any legal requirements.",
                "Establish a procedure to save and export footage of incidents promptly.",
                "Check the recording system each week to confirm it is recording all cameras."
              ],
              "risks": [
                "evidence-gap"
              ],
              "cost": "med"
            },
            {
              "id": "cam-recorder-exposed",
              "title": "Recorder kept in an unsecured area",
              "text": "The video recorder is kept in an unlocked or public area.",
              "risk": "An intruder could steal or damage the recorder and destroy evidence.",
              "mits": [
                "Move the recorder to a locked room or cabinet.",
                "Back up video off site or to a cloud service.",
                "Add an alarm sensor to the recorder location."
              ],
              "risks": [
                "evidence-gap",
                "sabotage"
              ],
              "cost": "low"
            },
            {
              "id": "cam-no-export",
              "title": "No one trained to export footage",
              "text": "No staff member knows how to search or export video footage.",
              "risk": "Footage may be lost or delayed when police or investigators need it.",
              "mits": [
                "Train at least two staff members to search and export footage.",
                "Write a short step-by-step guide for exporting video.",
                "Keep a log of footage requests and exports."
              ],
              "risks": [
                "evidence-gap"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Monitoring",
          "vulns": [
            {
              "id": "cam-not-monitored",
              "title": "Cameras not monitored live",
              "text": "Cameras are recorded but not viewed live by anyone.",
              "risk": "Unmonitored cameras support investigation after the fact but do not support a real-time response.",
              "mits": [
                "Assign staff or security to view key cameras during operating hours.",
                "Use motion-based alerts on cameras covering after-hours areas.",
                "Consider remote video monitoring for after-hours coverage."
              ],
              "risks": [
                "delayed-detection",
                "delayed-response"
              ],
              "cost": "med"
            },
            {
              "id": "cam-public-view-monitor",
              "title": "Camera monitors visible to the public",
              "text": "Camera monitors are visible to visitors at reception or public areas.",
              "risk": "Visitors can learn camera locations, blind spots, and security activity.",
              "mits": [
                "Move monitors out of public view or angle them away from visitors.",
                "Use a separate public-view monitor showing only entrance cameras if a deterrent display is wanted.",
                "Lock monitor screens when unattended."
              ],
              "risks": [
                "surveillance",
                "info-compromise"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "System Security",
          "vulns": [
            {
              "id": "cam-default-passwords",
              "title": "Camera system uses default passwords",
              "text": "The camera system uses default or shared passwords, and software is not kept up to date.",
              "risk": "An outside party could access the system to view, delete, or disable video.",
              "mits": [
                "Change default passwords and assign individual user accounts.",
                "Update camera and recorder software on a set schedule.",
                "Place the camera system on a separate network from public or guest access."
              ],
              "risks": [
                "info-compromise",
                "sabotage",
                "evidence-gap"
              ],
              "cost": "low"
            },
            {
              "id": "cam-no-health-check",
              "title": "No alerts when cameras fail",
              "text": "The system does not alert anyone when a camera goes offline or stops recording.",
              "risk": "A camera failure may go unnoticed until footage is needed.",
              "mits": [
                "Enable system health alerts for camera and recorder failures.",
                "Assign a staff member to check camera status each day.",
                "Repair failed cameras within a set time."
              ],
              "risks": [
                "evidence-gap",
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "critical-infrastructure",
      "name": "Critical Infrastructure",
      "category": "Critical Infrastructure",
      "blurb": "Utilities, power, HVAC, water, communications, IT systems, and other building systems that operations depend on.",
      "subs": [
        {
          "name": "Electrical & Backup Power",
          "vulns": [
            {
              "id": "ci-electrical-exposed",
              "title": "Electrical service accessible from outside",
              "text": "The main electrical service, meters, or panels are outdoors and unprotected.",
              "risk": "Someone could cut power to the building, disabling lighting, alarms, and cameras.",
              "mits": [
                "Enclose exterior electrical equipment in locked cages or enclosures, coordinating with the utility provider.",
                "Add camera coverage of exterior electrical equipment.",
                "Confirm that alarms and cameras have battery backup."
              ],
              "risks": [
                "sabotage",
                "disruption",
                "delayed-detection"
              ],
              "cost": "med"
            },
            {
              "id": "ci-no-backup-power",
              "title": "No backup power for security systems",
              "text": "Security systems, emergency lighting, and critical equipment have no backup power source.",
              "risk": "A power outage would disable security systems and could halt operations.",
              "mits": [
                "Install battery backup for alarm, camera, and access control systems.",
                "Consider a generator for critical operations, sized to the essential load.",
                "Test backup power on a set schedule and keep records."
              ],
              "risks": [
                "disruption",
                "delayed-detection",
                "life-safety"
              ],
              "cost": "high"
            },
            {
              "id": "ci-generator-exposed",
              "title": "Generator and fuel unprotected",
              "text": "The backup generator and its fuel supply are accessible and not protected from tampering or vehicle impact.",
              "risk": "A damaged generator would fail when it is needed most.",
              "mits": [
                "Enclose the generator with fencing and locked gates.",
                "Install barriers to protect it from vehicles.",
                "Test the generator under load on a set schedule."
              ],
              "risks": [
                "sabotage",
                "disruption"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "HVAC & Air Intakes",
          "vulns": [
            {
              "id": "ci-air-intake-low",
              "title": "Air intakes at ground level",
              "text": "Building air intakes are located at ground level or in publicly accessible areas.",
              "risk": "A harmful substance introduced into a ground-level intake could spread through the building.",
              "mits": [
                "Restrict access to air intakes with fencing or enclosures.",
                "Consider relocating or extending intakes to a higher, less accessible point during renovation.",
                "Add camera coverage of intakes that cannot be secured."
              ],
              "risks": [
                "life-safety",
                "sabotage"
              ],
              "cost": "med"
            },
            {
              "id": "ci-no-hvac-shutdown",
              "title": "No quick HVAC shutdown procedure",
              "text": "{subject} has no written procedure or clearly marked control to shut down the HVAC system quickly.",
              "risk": "Without a quick shutdown, an outside chemical release or internal contamination could spread through the building.",
              "mits": [
                "Write a procedure for emergency HVAC shutdown and post it near the controls.",
                "Train designated staff to perform the shutdown.",
                "Include HVAC shutdown in shelter-in-place drills."
              ],
              "risks": [
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "ci-rooftop-unsecured",
              "title": "Rooftop equipment unprotected",
              "text": "Rooftop HVAC and communications equipment is accessible and has no protection or monitoring.",
              "risk": "Damage or tampering could disrupt building systems and go unnoticed.",
              "mits": [
                "Restrict roof access with locked hatches and ladder guards.",
                "Add alarm contacts to roof access points.",
                "Inspect rooftop equipment regularly for tampering."
              ],
              "risks": [
                "sabotage",
                "disruption"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Water, Gas & Fuel",
          "vulns": [
            {
              "id": "ci-utility-shutoffs",
              "title": "Utility shutoffs unsecured or unmarked",
              "text": "Water, gas, and fuel shutoffs are unsecured, unmarked, or unknown to staff.",
              "risk": "Unsecured shutoffs can be tampered with, and unmarked ones slow emergency response.",
              "mits": [
                "Lock or enclose exterior utility shutoffs where permitted by the utility provider.",
                "Label shutoffs and mark their locations on the site plan.",
                "Train key staff on the location and use of shutoffs."
              ],
              "risks": [
                "sabotage",
                "life-safety",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "ci-fuel-storage",
              "title": "Fuel or chemical storage unprotected",
              "text": "Fuel tanks or stored chemicals are accessible and not protected from tampering or vehicle impact.",
              "risk": "Damage or tampering could cause a fire, spill, or release.",
              "mits": [
                "Secure fuel and chemical storage with fencing and locks.",
                "Install barriers to protect tanks from vehicle impact.",
                "Keep an up-to-date inventory and safety data sheets for stored hazardous materials."
              ],
              "risks": [
                "life-safety",
                "natural-hazard",
                "sabotage"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Telecommunications & IT",
          "vulns": [
            {
              "id": "ci-telecom-exposed",
              "title": "Telephone and data lines exposed",
              "text": "Telephone and data lines enter the building through exposed, unprotected points.",
              "risk": "Cut lines could disable alarm monitoring, phones, and internet service.",
              "mits": [
                "Protect entry points for telecom lines with conduit and locked enclosures.",
                "Add a cellular backup path for alarm monitoring.",
                "Identify alternate communication methods in the emergency plan."
              ],
              "risks": [
                "sabotage",
                "disruption",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "ci-server-room-unsecured",
              "title": "Server or network room unsecured",
              "text": "Server rooms or network closets are unlocked or shared with general storage.",
              "risk": "Unrestricted access could allow theft, damage, or tampering with systems that operations rely on.",
              "mits": [
                "Lock server rooms and network closets and limit access to IT staff.",
                "Remove unrelated storage from these rooms.",
                "Log access and add a camera at the door."
              ],
              "risks": [
                "info-compromise",
                "sabotage",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "ci-no-it-backup",
              "title": "No offsite backup of critical data",
              "text": "Critical business data is not backed up to an offsite or separate location.",
              "risk": "A fire, theft, or cyber incident could result in permanent loss of data.",
              "mits": [
                "Back up critical data on a regular schedule to an offsite or cloud location.",
                "Test restoration from backup at least once a year.",
                "Protect backups from the same threats as primary systems."
              ],
              "risks": [
                "disruption",
                "info-compromise"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Building Systems Access",
          "vulns": [
            {
              "id": "ci-mech-rooms-unlocked",
              "title": "Mechanical rooms left unlocked",
              "text": "Mechanical, electrical, and utility rooms are left unlocked.",
              "risk": "Unrestricted access allows tampering with building systems and provides hiding places.",
              "mits": [
                "Lock mechanical and utility rooms and restrict keys.",
                "Install alarm contacts on these doors.",
                "Inspect these rooms during routine security rounds."
              ],
              "risks": [
                "sabotage",
                "unauthorized-entry"
              ],
              "cost": "low"
            },
            {
              "id": "ci-no-system-map",
              "title": "No current map of critical systems",
              "text": "{subject} has no current map or list of critical systems and their locations.",
              "risk": "Responders and staff may lose time locating equipment during an emergency.",
              "mits": [
                "Create a map showing utility shutoffs, panels, and critical equipment.",
                "Keep copies in the emergency plan and in a location responders can reach.",
                "Update the map after renovations or equipment changes."
              ],
              "risks": [
                "delayed-response",
                "disruption"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "protected-areas",
      "name": "Protected/Controlled Areas",
      "category": "Protected/Controlled Areas",
      "blurb": "Areas that need added protection, such as cash rooms, records, executive offices, pharmacies, storage of high-value items, and other restricted spaces.",
      "subs": [
        {
          "name": "Restricted Area Designation",
          "vulns": [
            {
              "id": "pca-no-designation",
              "title": "Restricted areas not identified",
              "text": "{subject} has not identified which areas require restricted access.",
              "risk": "Without identifying restricted areas, protection cannot be focused where it is needed most.",
              "mits": [
                "Identify areas that hold valuables, sensitive information, or critical operations.",
                "Mark restricted areas with signage and limit access by role.",
                "Include restricted areas in the access control plan."
              ],
              "risks": [
                "unauthorized-entry",
                "theft",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "pca-no-zones",
              "title": "No separation between public and staff areas",
              "text": "Public areas open directly into staff work areas, with no locked door or checkpoint between them.",
              "risk": "Visitors can walk into work areas without being stopped, creating risk to staff and property.",
              "mits": [
                "Install locked doors between public and staff areas.",
                "Route visitors through a reception point before they reach work areas.",
                "Post signage marking staff-only areas."
              ],
              "risks": [
                "unauthorized-entry",
                "violence",
                "theft"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Access to Sensitive Rooms",
          "vulns": [
            {
              "id": "pca-unlocked-sensitive",
              "title": "Sensitive rooms left unlocked",
              "text": "Rooms holding cash, records, medication, or high-value items were found unlocked.",
              "risk": "Unlocked sensitive rooms invite theft and tampering by staff or visitors.",
              "mits": [
                "Lock sensitive rooms when not in use.",
                "Install electronic access control to record entry.",
                "Restrict keys and credentials to those who need access."
              ],
              "risks": [
                "theft",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "pca-no-access-log",
              "title": "No record of who enters sensitive areas",
              "text": "There is no log or electronic record of who enters sensitive areas.",
              "risk": "Without records, losses cannot be traced to a time or person.",
              "mits": [
                "Use electronic access control or a sign-in log for sensitive areas.",
                "Review access records on a set schedule and after losses.",
                "Add cameras at the entrance to sensitive areas."
              ],
              "risks": [
                "evidence-gap",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "pca-cleaning-access",
              "title": "Cleaning crews have unrestricted access",
              "text": "After-hours cleaning crews have keys or codes to all areas, including sensitive rooms.",
              "risk": "Sensitive areas are open to people with little supervision when the building is empty.",
              "mits": [
                "Limit cleaning crew access to areas that need cleaning.",
                "Have sensitive rooms cleaned only while staff are present.",
                "Review access records for cleaning crew activity."
              ],
              "risks": [
                "insider",
                "theft",
                "info-compromise"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Cash & Valuables",
          "vulns": [
            {
              "id": "pca-cash-handling",
              "title": "Cash handling visible or unprotected",
              "text": "Cash is counted or handled in view of the public or in an unsecured area.",
              "risk": "Visible cash handling increases the risk of robbery and internal theft.",
              "mits": [
                "Move cash handling to a private, locked room.",
                "Use a drop safe and limit the amount of cash kept on hand.",
                "Require two people for cash counts and deposits."
              ],
              "risks": [
                "theft",
                "violence",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "pca-no-safe",
              "title": "No secure safe for valuables",
              "text": "{subject} has no rated safe, or the safe is not anchored.",
              "risk": "Valuables and cash can be removed easily during a burglary.",
              "mits": [
                "Install a burglary-rated safe anchored to the floor.",
                "Limit safe combinations to a few people and change them after staff separations.",
                "Locate the safe in an alarmed and camera-covered area."
              ],
              "risks": [
                "theft",
                "forced-entry"
              ],
              "cost": "med"
            },
            {
              "id": "pca-deposit-routine",
              "title": "Bank deposits made on a fixed routine",
              "text": "Bank deposits are made by one person at the same time and by the same route each day.",
              "risk": "A predictable deposit routine increases the risk of robbery.",
              "mits": [
                "Vary deposit times and routes.",
                "Use two people or an armored car service for larger deposits.",
                "Carry deposits in unmarked bags."
              ],
              "risks": [
                "theft",
                "violence",
                "personal-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Records & Information",
          "vulns": [
            {
              "id": "pca-records-unsecured",
              "title": "Sensitive records unsecured",
              "text": "Personnel, financial, and client records are stored in unlocked cabinets or open areas.",
              "risk": "Unsecured records can be stolen, viewed, or altered, which can create legal liability.",
              "mits": [
                "Store sensitive records in locked cabinets in a restricted room.",
                "Adopt a clean-desk policy for sensitive documents.",
                "Shred sensitive documents before disposal."
              ],
              "risks": [
                "info-compromise",
                "liability",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "pca-shred-disposal",
              "title": "Sensitive documents placed in open trash",
              "text": "Documents with sensitive information are discarded in regular trash or open recycling bins.",
              "risk": "Discarded documents can be retrieved and used for fraud or targeting.",
              "mits": [
                "Provide locked shred bins for sensitive documents.",
                "Contract with a document destruction service.",
                "Train staff on what documents must be shredded."
              ],
              "risks": [
                "info-compromise"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Executive & Key Personnel Areas",
          "vulns": [
            {
              "id": "pca-exec-accessible",
              "title": "Executive offices easily reached",
              "text": "Executive offices are close to public areas and can be reached without passing a checkpoint.",
              "risk": "Easy access increases the risk of confrontation or harm to leadership.",
              "mits": [
                "Place a reception point or locked door between public areas and executive offices.",
                "Install a duress button in executive offices.",
                "Brief executive assistants on screening unscheduled visitors."
              ],
              "risks": [
                "violence",
                "personal-safety"
              ],
              "cost": "med"
            },
            {
              "id": "pca-no-safe-room",
              "title": "No designated secure room for staff",
              "text": "{subject} has no designated room where staff can lock themselves in during a violent incident.",
              "risk": "Staff may have no protected place to go during an active threat.",
              "mits": [
                "Identify rooms with solid doors and locks that can serve as secure rooms.",
                "Make sure those doors can be locked from the inside quickly.",
                "Include these rooms in lockdown training."
              ],
              "risks": [
                "violence",
                "life-safety"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "deliveries",
      "name": "Deliveries",
      "category": "Deliveries",
      "blurb": "Loading docks, shipping and receiving, mail and package handling, vendors, and contractors who deliver to the site.",
      "subs": [
        {
          "name": "Loading Dock & Receiving",
          "vulns": [
            {
              "id": "del-dock-open",
              "title": "Loading dock doors left open",
              "text": "Loading dock doors are left open and unattended for long periods.",
              "risk": "An open, unattended dock allows anyone to enter the building and remove property.",
              "mits": [
                "Keep dock doors closed when not actively in use.",
                "Assign staff to supervise the dock whenever doors are open.",
                "Add camera coverage of the dock and receiving area."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "del-dock-interior-access",
              "title": "Dock leads directly into the building",
              "text": "The loading dock opens directly into the main building, with no locked door between receiving and work areas.",
              "risk": "Delivery drivers and others at the dock can walk into the rest of the building.",
              "mits": [
                "Install a locked door between the receiving area and the main building.",
                "Keep delivery personnel within the receiving area.",
                "Post signage limiting entry beyond the dock."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "med"
            },
            {
              "id": "del-dock-no-camera",
              "title": "Dock and receiving not on camera",
              "text": "The loading dock and receiving area are not covered by cameras.",
              "risk": "Losses and disputes over deliveries cannot be investigated.",
              "mits": [
                "Install cameras covering dock doors, the receiving area, and vehicle positions.",
                "Record vehicle plates and driver faces where practical.",
                "Retain receiving footage long enough to resolve delivery disputes."
              ],
              "risks": [
                "evidence-gap",
                "theft"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Delivery Verification",
          "vulns": [
            {
              "id": "del-no-verification",
              "title": "Deliveries accepted without checking",
              "text": "Deliveries are accepted without verifying the driver, the company, or whether the delivery was expected.",
              "risk": "Unverified deliveries can be used to gain entry or introduce dangerous items.",
              "mits": [
                "Establish a procedure to confirm expected deliveries against orders or schedules.",
                "Check driver identification and company information for unexpected deliveries.",
                "Refuse or hold unexpected deliveries until verified."
              ],
              "risks": [
                "unauthorized-entry",
                "explosive-threat",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "del-no-schedule",
              "title": "No delivery schedule",
              "text": "Deliveries arrive at any time with no schedule or advance notice.",
              "risk": "Without a schedule, staff cannot tell a normal delivery from an unusual one.",
              "mits": [
                "Set delivery windows with regular vendors.",
                "Require advance notice for large or unusual deliveries.",
                "Keep a log of delivery arrivals and departures."
              ],
              "risks": [
                "unauthorized-entry",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "del-driver-waiting",
              "title": "Drivers wait inside unescorted",
              "text": "Delivery drivers wait inside the building or move to other areas while paperwork is processed.",
              "risk": "Drivers moving freely inside can see sensitive areas or remove property.",
              "mits": [
                "Provide a waiting area within the receiving area.",
                "Keep drivers in view of receiving staff.",
                "Process paperwork at a window or counter at the dock."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Mail & Package Screening",
          "vulns": [
            {
              "id": "del-mail-no-screening",
              "title": "Mail and packages not screened",
              "text": "Mail and packages are delivered directly to recipients without any screening or central handling.",
              "risk": "A suspicious or dangerous package could reach staff without anyone noticing warning signs.",
              "mits": [
                "Route all mail and packages through a central point.",
                "Train mail handling staff to recognize suspicious items.",
                "Post a written procedure for isolating and reporting a suspicious package."
              ],
              "risks": [
                "explosive-threat",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "del-mail-room-location",
              "title": "Mail room in a central or crowded area",
              "text": "Mail is sorted in a central or busy area of the building.",
              "risk": "A dangerous item opened in a busy area would affect more people.",
              "mits": [
                "Move mail handling to an area away from crowded spaces.",
                "Consider a separate ventilation shutoff for the mail room.",
                "Keep protective gloves and isolation bags available for staff."
              ],
              "risks": [
                "explosive-threat",
                "life-safety"
              ],
              "cost": "med"
            },
            {
              "id": "del-mail-training",
              "title": "Mail staff not trained on suspicious items",
              "text": "Staff who handle mail have not been trained on the signs of a suspicious letter or package.",
              "risk": "Staff may open or pass along a dangerous item without recognizing the warning signs.",
              "mits": [
                "Train mail handling staff on the signs of a suspicious item, using guidance such as DHS and USPS materials.",
                "Post a suspicious mail poster in the mail area.",
                "Practice the procedure for isolating a suspicious item."
              ],
              "risks": [
                "explosive-threat",
                "life-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Vendors & Contractors",
          "vulns": [
            {
              "id": "del-vendor-unescorted",
              "title": "Vendors move through building unescorted",
              "text": "Vendors, contractors, and service workers move through the building without an escort or identification.",
              "risk": "Unescorted outsiders could access sensitive areas, steal property, or observe security measures.",
              "mits": [
                "Require vendors to sign in, show identification, and wear a visitor badge.",
                "Escort vendors in sensitive areas.",
                "Keep a list of approved vendors and their staff."
              ],
              "risks": [
                "unauthorized-entry",
                "theft",
                "surveillance"
              ],
              "cost": "low"
            },
            {
              "id": "del-contractor-keys",
              "title": "Contractors hold keys or codes",
              "text": "Contractors have been given keys or access codes and keep them between jobs.",
              "risk": "Contractor keys and codes are hard to track and may be shared or lost.",
              "mits": [
                "Issue keys or codes to contractors only for the length of the job.",
                "Record all keys and codes issued to contractors.",
                "Change codes after contractor work is complete."
              ],
              "risks": [
                "unauthorized-entry",
                "insider"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Package Storage",
          "vulns": [
            {
              "id": "del-packages-unsecured",
              "title": "Packages left in open areas",
              "text": "Received packages are left in hallways, lobbies, or other open areas.",
              "risk": "Unattended packages may be stolen or tampered with.",
              "mits": [
                "Store received packages in a locked area until picked up.",
                "Keep a log of packages received and released.",
                "Notify recipients promptly when packages arrive."
              ],
              "risks": [
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "del-unattended-items",
              "title": "No procedure for unattended items",
              "text": "{subject} has no procedure for handling unattended bags or packages found on site.",
              "risk": "Staff may move or open a suspicious item, or ignore it entirely.",
              "mits": [
                "Write a procedure for reporting and handling unattended items.",
                "Train staff not to touch or move suspicious items and to report them right away.",
                "Coordinate the procedure with local law enforcement."
              ],
              "risks": [
                "explosive-threat",
                "life-safety"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "guard-force",
      "name": "Guard Force",
      "category": "Guard Force",
      "blurb": "Security officers, whether in-house or contract, including staffing, post orders, patrols, training, equipment, and supervision.",
      "subs": [
        {
          "name": "Staffing & Coverage",
          "vulns": [
            {
              "id": "guard-none",
              "title": "No security officers on site",
              "text": "{subject} has no security officers, and no staff member is assigned security duties.",
              "risk": "Without assigned security, no one is responsible for watching for and responding to problems.",
              "mits": [
                "Assess whether a security officer presence is needed based on risk and operating hours.",
                "Assign security duties to a designated staff member as an interim step.",
                "Consider periodic mobile patrols from a contract security provider."
              ],
              "risks": [
                "delayed-response",
                "delayed-detection"
              ],
              "cost": "med"
            },
            {
              "id": "guard-coverage-gaps",
              "title": "Gaps in guard coverage",
              "text": "Security officers are not present during all operating hours or during periods of higher risk.",
              "risk": "Incidents may occur during uncovered hours with no one in place to respond.",
              "mits": [
                "Adjust guard schedules to cover higher-risk times.",
                "Arrange coverage for breaks and shift changes.",
                "Use cameras and alarms to supplement coverage when no officer is present."
              ],
              "risks": [
                "delayed-response"
              ],
              "cost": "med"
            },
            {
              "id": "guard-other-duties",
              "title": "Officers assigned unrelated duties",
              "text": "Security officers are routinely assigned tasks unrelated to security, such as reception or errands.",
              "risk": "Officers busy with other tasks may miss incidents or be away from their posts.",
              "mits": [
                "Define which tasks officers may perform without affecting security duties.",
                "Provide coverage when officers must leave their post.",
                "Review officer duties during contract reviews."
              ],
              "risks": [
                "delayed-detection",
                "delayed-response"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Post Orders",
          "vulns": [
            {
              "id": "guard-no-post-orders",
              "title": "No written post orders",
              "text": "Security officers have no written post orders describing their duties.",
              "risk": "Without written orders, duties may be performed inconsistently or missed.",
              "mits": [
                "Write post orders for each security post that describe duties, patrol routes, and response actions.",
                "Review post orders with each officer and keep a signed acknowledgment.",
                "Update post orders at least once a year."
              ],
              "risks": [
                "liability",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "guard-outdated-orders",
              "title": "Post orders out of date",
              "text": "Post orders exist but do not reflect current operations, contacts, or procedures.",
              "risk": "Officers may follow outdated instructions during an incident.",
              "mits": [
                "Review and update post orders after changes in layout, staffing, or procedures.",
                "Date each revision and remove old copies.",
                "Confirm officers have read the current version."
              ],
              "risks": [
                "liability",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "guard-no-incident-reporting",
              "title": "Officers do not write incident reports",
              "text": "Officers do not complete written reports for incidents they handle.",
              "risk": "Without reports, incidents cannot be tracked or used in legal proceedings.",
              "mits": [
                "Require officers to write a report for every incident.",
                "Use a standard report form or electronic reporting system.",
                "Have supervisors review reports for completeness."
              ],
              "risks": [
                "evidence-gap",
                "liability"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Patrols",
          "vulns": [
            {
              "id": "guard-predictable-patrol",
              "title": "Patrols follow a predictable pattern",
              "text": "Patrols follow the same route and times each day.",
              "risk": "A predictable patrol is easy for someone to observe and avoid.",
              "mits": [
                "Vary patrol routes and times.",
                "Use a patrol tracking system to confirm patrols are completed.",
                "Include exterior areas and parking in patrols."
              ],
              "risks": [
                "surveillance",
                "delayed-detection"
              ],
              "cost": "low"
            },
            {
              "id": "guard-no-patrol-record",
              "title": "No record of patrols",
              "text": "Patrols are not recorded, so there is no way to confirm they occurred.",
              "risk": "Without records, missed patrols go unnoticed and patrol quality cannot be measured.",
              "mits": [
                "Use a patrol tracking system or written log.",
                "Have supervisors review patrol records.",
                "Record and follow up on findings from each patrol."
              ],
              "risks": [
                "evidence-gap",
                "liability"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Training & Qualifications",
          "vulns": [
            {
              "id": "guard-training",
              "title": "Officers lack training for their duties",
              "text": "Security officers have not received training specific to {subject} and its procedures.",
              "risk": "Untrained officers may not recognize threats or may respond in ways that increase risk or liability.",
              "mits": [
                "Provide site-specific training on procedures, emergency response, and reporting.",
                "Confirm officers meet state licensing requirements.",
                "Keep training records for each officer."
              ],
              "risks": [
                "liability",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "guard-use-of-force",
              "title": "No use-of-force or de-escalation guidance",
              "text": "Officers have no written guidance on use of force or de-escalation.",
              "risk": "Unclear guidance increases the chance of injury and legal liability.",
              "mits": [
                "Provide written use-of-force guidance consistent with law and company policy.",
                "Train officers in de-escalation techniques.",
                "Review incidents involving force with supervisors."
              ],
              "risks": [
                "liability",
                "violence"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Supervision & Contract",
          "vulns": [
            {
              "id": "guard-no-supervision",
              "title": "Officers not supervised",
              "text": "Security officers are not checked by a supervisor during their shift.",
              "risk": "Unsupervised officers may not perform duties as expected.",
              "mits": [
                "Require supervisory checks during each shift.",
                "Set performance measures for the guard contract.",
                "Meet with the security provider regularly to review performance."
              ],
              "risks": [
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "guard-equipment",
              "title": "Officers lack radios or equipment",
              "text": "Officers do not have radios, phones, or other equipment needed to communicate and respond.",
              "risk": "Without communication tools, officers cannot call for help or coordinate a response.",
              "mits": [
                "Provide radios or phones to all officers on duty.",
                "Provide flashlights, first aid supplies, and other equipment suited to their duties.",
                "Check equipment at the start of each shift."
              ],
              "risks": [
                "delayed-response"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "emergency-plans",
      "name": "Emergency Plans",
      "category": "Emergency Plans",
      "blurb": "Written plans and procedures for emergencies such as fire, severe weather, medical events, violence, bomb threats, and evacuation.",
      "subs": [
        {
          "name": "Plan Development",
          "vulns": [
            {
              "id": "ep-no-plan",
              "title": "No written emergency plan",
              "text": "{subject} has no written emergency plan.",
              "risk": "Without a plan, staff may respond inconsistently or not at all during an emergency.",
              "mits": [
                "Develop a written emergency plan that covers the hazards most likely to affect {subject}.",
                "Assign roles and responsibilities for emergency response.",
                "Coordinate the plan with local police, fire, and EMS."
              ],
              "risks": [
                "life-safety",
                "liability",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "ep-plan-outdated",
              "title": "Emergency plan out of date",
              "text": "The emergency plan exists but has not been reviewed or updated in several years.",
              "risk": "An outdated plan may list former staff, wrong phone numbers, or procedures that no longer fit the building.",
              "mits": [
                "Review and update the emergency plan at least once a year.",
                "Update the plan after renovations, staffing changes, or incidents.",
                "Record the date of each review."
              ],
              "risks": [
                "life-safety",
                "liability"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Evacuation & Shelter",
          "vulns": [
            {
              "id": "ep-no-assembly",
              "title": "No evacuation routes or assembly points",
              "text": "Evacuation routes and assembly points are not posted or known to staff.",
              "risk": "Staff and visitors may be confused during an evacuation, and missing people may not be identified.",
              "mits": [
                "Post evacuation maps showing routes and assembly points.",
                "Designate a primary and a secondary assembly point.",
                "Assign staff to account for people at the assembly point."
              ],
              "risks": [
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "ep-no-shelter",
              "title": "No shelter-in-place or severe weather plan",
              "text": "There is no designated shelter area or procedure for severe weather or outside hazards.",
              "risk": "Staff may not know where to go when it is unsafe to leave the building.",
              "mits": [
                "Identify interior shelter areas away from windows.",
                "Write and post shelter-in-place procedures.",
                "Include shelter procedures in drills."
              ],
              "risks": [
                "life-safety",
                "natural-hazard"
              ],
              "cost": "low"
            },
            {
              "id": "ep-mobility",
              "title": "No plan for people needing assistance",
              "text": "The plan does not address evacuation of people with disabilities or others who need help.",
              "risk": "People who need help evacuating may be left behind or delayed.",
              "mits": [
                "Identify staff who may need help and plan their evacuation with them.",
                "Assign assistants and identify areas of refuge.",
                "Provide evacuation equipment where needed."
              ],
              "risks": [
                "life-safety",
                "liability"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Violent Incidents",
          "vulns": [
            {
              "id": "ep-no-lockdown",
              "title": "No lockdown or active threat procedure",
              "text": "{subject} has no procedure for responding to an active threat or violent intruder.",
              "risk": "Without a procedure, staff may not know how to protect themselves and others during an attack.",
              "mits": [
                "Write a lockdown and active threat procedure.",
                "Train staff on options to evacuate, hide, or defend as a last resort.",
                "Make sure doors in occupied rooms can be locked from the inside."
              ],
              "risks": [
                "violence",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "ep-no-mass-notification",
              "title": "No way to alert all occupants quickly",
              "text": "{subject} has no system to alert all occupants at once during an emergency.",
              "risk": "Delayed warnings mean some people may not learn of a threat until it reaches them.",
              "mits": [
                "Install a mass notification method, such as a public address system or text alert service.",
                "Write standard messages for common emergencies.",
                "Test the notification system during drills."
              ],
              "risks": [
                "life-safety",
                "delayed-response",
                "violence"
              ],
              "cost": "med"
            }
          ]
        },
        {
          "name": "Bomb Threats & Suspicious Items",
          "vulns": [
            {
              "id": "ep-no-bomb-procedure",
              "title": "No bomb threat procedure",
              "text": "{subject} has no written bomb threat procedure, and staff do not have a bomb threat checklist.",
              "risk": "Staff receiving a threat may not collect important information or know how to respond.",
              "mits": [
                "Adopt a written bomb threat procedure.",
                "Place a bomb threat checklist, such as the DHS Bomb Threat Checklist, at each phone and reception point.",
                "Train staff who answer phones on the checklist."
              ],
              "risks": [
                "explosive-threat",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "ep-no-search-plan",
              "title": "No plan for searching after a threat",
              "text": "There is no plan for who searches which areas after a threat, or how the decision to evacuate is made.",
              "risk": "Without a plan, searches may be incomplete and evacuation decisions may be delayed.",
              "mits": [
                "Assign search areas to staff familiar with each area.",
                "Define who decides whether to evacuate.",
                "Coordinate the search plan with local law enforcement."
              ],
              "risks": [
                "explosive-threat",
                "delayed-response"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Medical Emergencies",
          "vulns": [
            {
              "id": "ep-no-medical",
              "title": "No medical equipment or trained staff",
              "text": "{subject} has no AED, bleeding control kit, or staff trained in first aid.",
              "risk": "Medical emergencies may become more serious while waiting for EMS.",
              "mits": [
                "Place AEDs, first aid kits, and bleeding control kits in marked locations.",
                "Train staff in CPR, AED use, and bleeding control.",
                "Inspect supplies and replace expired items on a set schedule."
              ],
              "risks": [
                "life-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Drills & Continuity",
          "vulns": [
            {
              "id": "ep-no-drills",
              "title": "No emergency drills",
              "text": "{subject} does not conduct regular emergency drills.",
              "risk": "Without practice, staff may not follow the plan under stress.",
              "mits": [
                "Conduct regular drills for fire, shelter, and lockdown.",
                "Review each drill and record lessons learned.",
                "Update the plan based on drill results."
              ],
              "risks": [
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "ep-no-continuity",
              "title": "No plan to continue operations",
              "text": "{subject} has no plan for continuing critical operations after an emergency.",
              "risk": "A long disruption could cause financial loss and harm to those who depend on {subject}.",
              "mits": [
                "Identify critical operations and how they would continue after a disruption.",
                "Identify alternate locations, suppliers, and communication methods.",
                "Review the continuity plan with leadership each year."
              ],
              "risks": [
                "disruption",
                "reputational"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "screening",
      "name": "Screening Procedures",
      "category": "Screening Procedures",
      "blurb": "Visitor management, identification, bag and item checks, and pre-employment and contractor screening.",
      "subs": [
        {
          "name": "Visitor Management",
          "vulns": [
            {
              "id": "scr-no-visitor-log",
              "title": "No visitor sign-in",
              "text": "Visitors enter without signing in or showing identification.",
              "risk": "Without a record, {subject} cannot know who is in the building during an emergency or investigation.",
              "mits": [
                "Require visitors to sign in and show identification.",
                "Use a visitor log or electronic visitor management system.",
                "Keep visitor records for a set period."
              ],
              "risks": [
                "unauthorized-entry",
                "evidence-gap"
              ],
              "cost": "low"
            },
            {
              "id": "scr-no-badges",
              "title": "Visitors not badged",
              "text": "Visitors are not given badges, so staff cannot tell visitors from employees.",
              "risk": "Staff cannot easily spot people who should not be in an area.",
              "mits": [
                "Issue dated visitor badges that must be worn and returned.",
                "Require employees to wear identification badges.",
                "Encourage staff to greet and offer help to unbadged people."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            },
            {
              "id": "scr-no-host-escort",
              "title": "Visitors not escorted by a host",
              "text": "Visitors move through the building alone after checking in.",
              "risk": "Visitors can enter areas they have no reason to be in.",
              "mits": [
                "Require a host to meet and escort visitors.",
                "Limit visitor badges to specific areas or floors.",
                "Collect visitor badges when visitors leave."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Reception & Entry Control",
          "vulns": [
            {
              "id": "scr-no-reception",
              "title": "No staffed reception point",
              "text": "The main entrance has no reception desk or staff member to greet and check visitors.",
              "risk": "Visitors can enter and move about the building without being noticed.",
              "mits": [
                "Place a staffed reception point at the main entrance.",
                "Use a door entry intercom with camera where staffing is not possible.",
                "Limit public entry to the main entrance."
              ],
              "risks": [
                "unauthorized-entry",
                "violence"
              ],
              "cost": "med"
            },
            {
              "id": "scr-reception-exposed",
              "title": "Reception staff have no barrier or exit",
              "text": "Reception staff have no barrier between them and visitors and no exit route away from the public area.",
              "risk": "Reception staff are the first to meet an angry or violent visitor.",
              "mits": [
                "Install a counter or barrier between reception and visitors.",
                "Provide a duress button and a secondary exit route.",
                "Train reception staff in de-escalation."
              ],
              "risks": [
                "violence",
                "personal-safety"
              ],
              "cost": "med"
            },
            {
              "id": "scr-banned-list",
              "title": "No process for barred individuals",
              "text": "{subject} has no list or process for identifying people who are not allowed on the premises, such as those under protective orders or trespass warnings.",
              "risk": "A barred person could enter without staff knowing they pose a risk.",
              "mits": [
                "Keep a confidential list of barred individuals, with photos where available.",
                "Share the list with reception and security.",
                "Write a procedure for responding when a barred person arrives."
              ],
              "risks": [
                "violence",
                "personal-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Bag & Item Screening",
          "vulns": [
            {
              "id": "scr-no-bag-check",
              "title": "No screening of bags at higher-risk events",
              "text": "{subject} does not screen bags or items at events or entrances where the risk calls for it.",
              "risk": "Prohibited items could be brought into the building without notice.",
              "mits": [
                "Assess where and when bag checks are needed based on risk.",
                "Establish a clear bag policy and post it at entrances.",
                "Train staff who conduct checks on consistent procedures, using guidance such as the DHS screening guidance."
              ],
              "risks": [
                "violence",
                "explosive-threat"
              ],
              "cost": "med"
            },
            {
              "id": "scr-no-prohibited-list",
              "title": "No posted prohibited items list",
              "text": "{subject} has no written or posted list of items not allowed on the premises.",
              "risk": "Without a posted policy, enforcement is inconsistent and harder to justify.",
              "mits": [
                "Write a prohibited items policy consistent with state and local law.",
                "Post the policy at entrances.",
                "Train staff on how to respond when a prohibited item is found."
              ],
              "risks": [
                "violence",
                "liability"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Pre-Employment Screening",
          "vulns": [
            {
              "id": "scr-no-background",
              "title": "No background checks for staff",
              "text": "{subject} does not conduct background checks on new employees.",
              "risk": "Hiring without screening increases the risk of theft, violence, and liability.",
              "mits": [
                "Conduct background checks appropriate to each position, consistent with applicable law.",
                "Check references and verify employment history.",
                "Use a reputable screening provider."
              ],
              "risks": [
                "insider",
                "liability",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "scr-no-rescreen",
              "title": "No re-screening for sensitive roles",
              "text": "Employees in sensitive positions are not re-screened after hire.",
              "risk": "Changes in a person's circumstances after hire will not be identified.",
              "mits": [
                "Re-screen employees in sensitive roles on a set schedule, consistent with applicable law.",
                "Require employees to report arrests or convictions where permitted by law.",
                "Document the re-screening policy."
              ],
              "risks": [
                "insider"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Contractor & Vendor Screening",
          "vulns": [
            {
              "id": "scr-contractor-unscreened",
              "title": "Contractors not screened",
              "text": "Contractors and vendor staff working on site have not been screened.",
              "risk": "Unscreened outside workers may have access to sensitive areas and information.",
              "mits": [
                "Require contractors to screen their staff to a standard equal to that of {subject}.",
                "Include screening requirements in contracts.",
                "Verify identity of contractor staff on arrival."
              ],
              "risks": [
                "insider",
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            },
            {
              "id": "scr-contractor-id",
              "title": "Contractor identity not verified on arrival",
              "text": "Contractor and vendor staff are admitted based on their company name or uniform without checking identity.",
              "risk": "Uniforms and company names can be used by someone posing as a service worker.",
              "mits": [
                "Check photo identification against a list provided by the contractor.",
                "Call the contractor company to confirm unexpected service visits.",
                "Issue dated badges to contractor staff."
              ],
              "risks": [
                "unauthorized-entry",
                "theft"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "training",
      "name": "Training",
      "category": "Training",
      "blurb": "Security awareness and emergency training for staff, supervisors, and leadership.",
      "subs": [
        {
          "name": "Security Awareness",
          "vulns": [
            {
              "id": "trn-no-awareness",
              "title": "No security awareness training",
              "text": "Staff have not received security awareness training.",
              "risk": "Staff may not recognize or report suspicious behavior or security problems.",
              "mits": [
                "Provide security awareness training for all staff at hire and each year.",
                "Cover reporting procedures, door security, and suspicious behavior.",
                "Keep training records."
              ],
              "risks": [
                "delayed-detection",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "trn-no-reporting",
              "title": "Staff unsure how to report concerns",
              "text": "Staff are unsure how or to whom to report security concerns.",
              "risk": "Concerns that are not reported cannot be acted on.",
              "mits": [
                "Establish a clear process for reporting security concerns.",
                "Offer an anonymous reporting option.",
                "Respond to reports and let staff know they were addressed."
              ],
              "risks": [
                "delayed-detection",
                "violence"
              ],
              "cost": "low"
            },
            {
              "id": "trn-tailgating",
              "title": "Staff allow others to follow them in",
              "text": "Staff hold doors for others or allow people to follow them through access-controlled doors.",
              "risk": "Following through doors defeats access control and allows unknown people inside.",
              "mits": [
                "Train staff not to allow others to follow them through controlled doors.",
                "Post reminders at controlled doors.",
                "Consider turnstiles or other measures at high-traffic controlled entrances."
              ],
              "risks": [
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Emergency Response Training",
          "vulns": [
            {
              "id": "trn-no-emergency-training",
              "title": "Staff not trained on emergency plan",
              "text": "Staff have not been trained on the emergency plan.",
              "risk": "Staff may not know what to do during an emergency.",
              "mits": [
                "Train all staff on the emergency plan at hire and each year.",
                "Train staff with emergency roles on their specific duties.",
                "Include visitors and contractors in emergency instructions."
              ],
              "risks": [
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "trn-no-active-threat",
              "title": "No active threat training",
              "text": "Staff have not received training on responding to an active threat.",
              "risk": "Staff who are not trained may freeze or act in ways that increase their risk.",
              "mits": [
                "Provide active threat response training for all staff.",
                "Coordinate training with local law enforcement.",
                "Follow training with drills."
              ],
              "risks": [
                "violence",
                "life-safety"
              ],
              "cost": "low"
            },
            {
              "id": "trn-bomb-threat",
              "title": "Phone staff not trained on threat calls",
              "text": "Staff who answer phones have not been trained on how to handle a bomb threat or threatening call.",
              "risk": "Staff may not collect key information or may handle the call in a way that delays response.",
              "mits": [
                "Train phone staff using a bomb threat checklist, such as the DHS checklist.",
                "Keep the checklist at every phone that receives outside calls.",
                "Include threat calls in drills."
              ],
              "risks": [
                "explosive-threat",
                "delayed-response"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Workplace Violence Prevention",
          "vulns": [
            {
              "id": "trn-no-wpv",
              "title": "No workplace violence prevention training",
              "text": "Staff and supervisors have not been trained to recognize warning signs of workplace violence.",
              "risk": "Warning signs may be missed or not reported.",
              "mits": [
                "Provide workplace violence prevention training to staff and supervisors.",
                "Train supervisors on how to respond to concerning behavior.",
                "Connect the training with the threat management process."
              ],
              "risks": [
                "violence",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "trn-no-deescalation",
              "title": "No de-escalation training for front-line staff",
              "text": "Front-line staff have not been trained to de-escalate angry or upset people.",
              "risk": "Situations that could have been calmed may escalate to violence.",
              "mits": [
                "Provide de-escalation training for staff who deal with the public.",
                "Include practice scenarios in training.",
                "Review incidents to improve training."
              ],
              "risks": [
                "violence",
                "personal-safety"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Training Records",
          "vulns": [
            {
              "id": "trn-no-records",
              "title": "No record of training completed",
              "text": "{subject} keeps no record of security or emergency training.",
              "risk": "Without records, {subject} cannot show who has been trained or plan refresher training.",
              "mits": [
                "Keep records of all security and emergency training.",
                "Track refresher dates and send reminders.",
                "Review training completion each year."
              ],
              "risks": [
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "trn-no-refresher",
              "title": "No refresher training",
              "text": "Training is provided only at hire, with no refresher training.",
              "risk": "Knowledge fades over time, and procedures change.",
              "mits": [
                "Provide refresher training at least each year.",
                "Update training after plan changes or incidents.",
                "Use short drills and briefings to reinforce training."
              ],
              "risks": [
                "life-safety",
                "liability"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    },
    {
      "id": "administrative",
      "name": "Administrative",
      "category": "Administrative",
      "blurb": "Security policies, governance, incident reporting, threat management, information security, and records.",
      "subs": [
        {
          "name": "Policies & Governance",
          "vulns": [
            {
              "id": "adm-no-policies",
              "title": "No written security policies",
              "text": "{subject} has no written security policies.",
              "risk": "Without policies, security practices are inconsistent and staff do not know what is expected.",
              "mits": [
                "Develop written security policies covering access, keys, visitors, and incident reporting.",
                "Assign responsibility for security to a named person.",
                "Review policies each year."
              ],
              "risks": [
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "adm-no-owner",
              "title": "No one responsible for security",
              "text": "No one at {subject} is responsible for security.",
              "risk": "Without a responsible person, security issues are not tracked or addressed.",
              "mits": [
                "Designate a security coordinator.",
                "Give the coordinator authority and time to carry out the role.",
                "Report security matters to leadership regularly."
              ],
              "risks": [
                "liability",
                "delayed-response"
              ],
              "cost": "low"
            },
            {
              "id": "adm-no-budget",
              "title": "No budget for security improvements",
              "text": "{subject} has no budget set aside for security improvements.",
              "risk": "Identified vulnerabilities may remain unaddressed for lack of funds.",
              "mits": [
                "Include security improvements in the annual budget process.",
                "Prioritize recommendations by risk and cost.",
                "Seek grants or insurance incentives where available."
              ],
              "risks": [
                "liability"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Incident Reporting & Records",
          "vulns": [
            {
              "id": "adm-no-incident-reports",
              "title": "Incidents not documented",
              "text": "Security incidents are not documented in a consistent way.",
              "risk": "Without records, patterns cannot be identified and evidence may be lost.",
              "mits": [
                "Use a standard incident report form.",
                "Store reports securely and review them for trends.",
                "Share relevant trends with leadership."
              ],
              "risks": [
                "evidence-gap",
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "adm-no-trend-review",
              "title": "Incident data not reviewed",
              "text": "Incident reports are filed but not reviewed for patterns.",
              "risk": "Repeat problems may continue because no one looks at the overall picture.",
              "mits": [
                "Review incident data at a set interval.",
                "Use findings to adjust security measures.",
                "Report trends to leadership."
              ],
              "risks": [
                "delayed-detection"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Threat Management",
          "vulns": [
            {
              "id": "adm-no-threat-team",
              "title": "No threat assessment process",
              "text": "{subject} has no process or team for assessing and managing threats of violence.",
              "risk": "Concerning behavior may not be evaluated or managed before it leads to violence.",
              "mits": [
                "Form a threat assessment team with members from leadership, human resources, and security.",
                "Write a process for receiving, assessing, and managing reported threats.",
                "Train the team using established guidance, such as DHS guidance on threat assessment teams."
              ],
              "risks": [
                "violence",
                "insider"
              ],
              "cost": "low"
            },
            {
              "id": "adm-termination",
              "title": "No security procedure for terminations",
              "text": "{subject} has no security procedure for involuntary terminations.",
              "risk": "Terminations can lead to anger, retaliation, or retained access.",
              "mits": [
                "Write a termination procedure that includes timing, location, and access removal.",
                "Coordinate with security for higher-risk terminations.",
                "Collect keys, badges, and equipment at the meeting."
              ],
              "risks": [
                "violence",
                "insider"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Information Security",
          "vulns": [
            {
              "id": "adm-info-shared",
              "title": "Security information shared too widely",
              "text": "Floor plans, security details, and schedules are shared openly or posted online.",
              "risk": "Shared details help someone plan an attack or theft.",
              "mits": [
                "Limit distribution of floor plans and security details.",
                "Review public websites and social media for sensitive information.",
                "Mark sensitive documents and control copies."
              ],
              "risks": [
                "info-compromise",
                "surveillance"
              ],
              "cost": "low"
            },
            {
              "id": "adm-social-engineering",
              "title": "Staff not trained on social engineering",
              "text": "Staff have not been trained to recognize phone, email, or in-person attempts to obtain information.",
              "risk": "Staff may give out information that helps someone gain access.",
              "mits": [
                "Train staff to recognize and report social engineering attempts.",
                "Establish procedures to verify the identity of callers and visitors.",
                "Test awareness with periodic exercises."
              ],
              "risks": [
                "info-compromise",
                "unauthorized-entry"
              ],
              "cost": "low"
            }
          ]
        },
        {
          "name": "Assessment & Review",
          "vulns": [
            {
              "id": "adm-no-assessment",
              "title": "No regular security assessment",
              "text": "{subject} has not had a security assessment in several years.",
              "risk": "Changes in threats, staff, and the building may have created new vulnerabilities.",
              "mits": [
                "Conduct a security assessment at a set interval, or after major changes or incidents.",
                "Track recommendations to completion.",
                "Report progress to leadership."
              ],
              "risks": [
                "liability"
              ],
              "cost": "low"
            },
            {
              "id": "adm-no-insurance-review",
              "title": "Insurance not reviewed for security risks",
              "text": "Insurance coverage has not been reviewed against identified security risks.",
              "risk": "Gaps in coverage may leave {subject} exposed to loss.",
              "mits": [
                "Review insurance coverage with a broker against the assessment findings.",
                "Consider coverage for workplace violence, cyber incidents, and business interruption.",
                "Share relevant improvements with the insurer."
              ],
              "risks": [
                "liability"
              ],
              "cost": "low"
            }
          ]
        }
      ]
    }
  ],
  "risks": {
    "unauthorized-entry": {
      "title": "Unauthorized entry",
      "text": "People without a legitimate reason to be present could enter {subject} or its restricted areas without being stopped or identified.",
      "mits": [
        "Establish clear boundaries and control points that separate public and private areas.",
        "Use locks, access control, and visitor procedures to limit entry to authorized people.",
        "Train staff to greet, question, or report people who do not appear to belong.",
        "Monitor entry points with cameras and alarms."
      ]
    },
    "forced-entry": {
      "title": "Forced entry",
      "text": "An intruder could break through doors, windows, gates, or other barriers to gain entry to {subject}.",
      "mits": [
        "Strengthen doors, frames, locks, and glazing at accessible openings.",
        "Install intrusion detection on exterior openings and interior paths.",
        "Light and monitor areas where forced entry is most likely.",
        "Inspect and repair barriers and hardware on a set schedule."
      ]
    },
    "theft": {
      "title": "Theft",
      "text": "Property, equipment, cash, or information belonging to {subject}, its staff, or visitors could be stolen by outsiders or insiders.",
      "mits": [
        "Secure valuables in locked, monitored areas.",
        "Control keys and access credentials and audit them regularly.",
        "Keep inventory records of high-value items.",
        "Use camera coverage and alarms to deter and record theft.",
        "Report and investigate losses promptly."
      ]
    },
    "vandalism": {
      "title": "Vandalism",
      "text": "The property and building of {subject} could be damaged or defaced, causing repair costs and signaling a lack of oversight.",
      "mits": [
        "Maintain the grounds and repair damage promptly.",
        "Light and monitor exterior areas.",
        "Use durable, vandal-resistant materials and fixtures.",
        "Post signage and enforce trespass rules."
      ]
    },
    "violence": {
      "title": "Workplace violence",
      "text": "Staff, visitors, or others at {subject} could be threatened, assaulted, or harmed by an outsider, a current or former employee, or a person known to staff.",
      "mits": [
        "Establish a workplace violence prevention policy and a threat management process.",
        "Control access to work areas and provide duress alarms in higher-risk locations.",
        "Train staff to recognize warning signs, de-escalate, and report concerns.",
        "Write and practice lockdown and active threat procedures.",
        "Coordinate with local law enforcement."
      ]
    },
    "vehicle-attack": {
      "title": "Vehicle impact or ramming",
      "text": "A vehicle, through accident or intent, could strike the building of {subject} or people at entrances and gathering areas.",
      "mits": [
        "Place crash-rated bollards, planters, or barriers at entrances and gathering areas.",
        "Increase distance between vehicle areas and the building.",
        "Use site layout and traffic calming to reduce vehicle speed on approaches.",
        "Restrict unattended vehicles near the building."
      ]
    },
    "explosive-threat": {
      "title": "Explosive or bomb threat",
      "text": "{subject} could receive a bomb threat or be targeted with an explosive device delivered by vehicle, package, or person.",
      "mits": [
        "Adopt a written bomb threat procedure and place threat checklists at phones.",
        "Screen mail and packages through a central point.",
        "Increase distance between vehicles and the building.",
        "Train staff to recognize and report suspicious items without touching them.",
        "Coordinate search and evacuation plans with local law enforcement."
      ]
    },
    "delayed-detection": {
      "title": "Delayed detection",
      "text": "A security breach or incident at {subject} might not be noticed until well after it has occurred, giving an intruder more time and reducing the chance of a response.",
      "mits": [
        "Install intrusion detection and camera coverage at key areas.",
        "Keep sightlines clear and lighting adequate.",
        "Conduct regular patrols and inspections.",
        "Encourage staff to report unusual activity."
      ]
    },
    "delayed-response": {
      "title": "Delayed response",
      "text": "Staff, security, or emergency services may be slow to respond to an incident at {subject} because of gaps in communication, staffing, or planning.",
      "mits": [
        "Keep alarm call lists and emergency contacts current.",
        "Provide reliable communication tools for staff and security.",
        "Coordinate with local police, fire, and EMS on site layout and procedures.",
        "Practice response through drills and exercises."
      ]
    },
    "life-safety": {
      "title": "Life safety",
      "text": "Occupants of {subject} could be injured or killed during a fire, medical emergency, severe weather, or violent incident if planning, equipment, or exits are not adequate.",
      "mits": [
        "Keep exits clear, marked, and functional.",
        "Maintain fire alarms, emergency lighting, and medical equipment.",
        "Write and practice emergency plans for likely hazards.",
        "Train staff in first aid and emergency roles."
      ]
    },
    "evidence-gap": {
      "title": "Loss of evidence",
      "text": "{subject} may lack the records, video, or documentation needed to investigate an incident, identify those involved, or support legal action.",
      "mits": [
        "Maintain camera coverage that can identify people at entrances.",
        "Retain video and access records for an appropriate period.",
        "Document incidents using a standard report form.",
        "Train staff to preserve and export evidence."
      ]
    },
    "liability": {
      "title": "Legal liability",
      "text": "Gaps in security policies, practices, or documentation could expose {subject} to legal claims or regulatory action following an incident.",
      "mits": [
        "Write and follow security policies and procedures.",
        "Keep records of training, inspections, and incidents.",
        "Address known hazards promptly and document the action taken.",
        "Review insurance coverage against identified risks."
      ]
    },
    "disruption": {
      "title": "Operational disruption",
      "text": "An incident or system failure could interrupt the operations of {subject}, causing financial loss and affecting those who depend on it.",
      "mits": [
        "Identify critical operations and the systems they rely on.",
        "Provide backup power, communications, and data storage.",
        "Develop a business continuity plan.",
        "Test recovery procedures regularly."
      ]
    },
    "sabotage": {
      "title": "Sabotage or tampering",
      "text": "Someone could deliberately damage or tamper with utilities, building systems, or security equipment at {subject}.",
      "mits": [
        "Secure utility equipment, panels, and mechanical rooms.",
        "Limit access to building systems to authorized staff.",
        "Monitor critical equipment with cameras and alarms.",
        "Inspect systems regularly for signs of tampering."
      ]
    },
    "info-compromise": {
      "title": "Information compromise",
      "text": "Sensitive information held by {subject}, such as records, floor plans, or security details, could be accessed, stolen, or disclosed.",
      "mits": [
        "Store sensitive records in locked, restricted areas.",
        "Shred sensitive documents before disposal.",
        "Limit who receives security details and floor plans.",
        "Secure security and IT systems with individual accounts and current software.",
        "Train staff to recognize social engineering."
      ]
    },
    "surveillance": {
      "title": "Hostile surveillance",
      "text": "A person planning a crime or attack could observe {subject} to learn routines, security measures, and weak points.",
      "mits": [
        "Limit outside views into sensitive areas.",
        "Vary patrols and routines where practical.",
        "Train staff to recognize and report people watching or photographing the site.",
        "Limit public release of security details."
      ]
    },
    "personal-safety": {
      "title": "Personal safety",
      "text": "Staff and visitors at {subject} could be at risk of robbery, assault, or harassment, particularly in isolated or poorly lit areas.",
      "mits": [
        "Light parking areas, walkways, and entrances.",
        "Offer escorts to vehicles after dark.",
        "Provide duress alarms and emergency call stations in isolated areas.",
        "Train staff in personal safety practices."
      ]
    },
    "insider": {
      "title": "Insider threat",
      "text": "A current or former employee, contractor, or other trusted person could misuse authorized access to {subject} to steal, cause harm, or disclose information.",
      "mits": [
        "Screen employees and contractors before granting access.",
        "Grant access based on need and remove it promptly at separation.",
        "Audit keys, credentials, and access records.",
        "Provide a confidential way to report concerns.",
        "Separate duties for sensitive tasks such as cash handling."
      ]
    },
    "natural-hazard": {
      "title": "Natural and environmental hazard",
      "text": "Severe weather, flooding, fire, or a nearby hazardous materials release could damage {subject} and endanger occupants.",
      "mits": [
        "Identify the hazards most likely to affect {subject}.",
        "Write hazard-specific procedures, including shelter-in-place and evacuation.",
        "Protect critical equipment from flooding and weather.",
        "Sign up for local emergency alerts."
      ]
    },
    "reputational": {
      "title": "Reputational harm",
      "text": "A security incident or visible neglect could damage public trust in {subject} and its leadership.",
      "mits": [
        "Maintain the property and address visible problems promptly.",
        "Prepare a communication plan for incidents.",
        "Act on known security concerns and document the action taken.",
        "Review security measures after incidents and share improvements with stakeholders."
      ]
    }
  }
});
