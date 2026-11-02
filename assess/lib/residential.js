/* Tyrtrek residential assessment library (track: residential).
   Plain browser script; registers one part on window.TT_LIBS. */
(window.TT_LIBS = window.TT_LIBS || []).push({
  track: "residential",
  source: "Drawn from general CPTED guidance (natural surveillance, natural access control, territorial reinforcement, maintenance), FEMA P-320 safe room guidance, Ready.gov family emergency planning, NFPA home smoke alarm and escape planning guidance, CPSC residential pool barrier guidance, FBI/CISA/FTC home router and IoT security guidance, USPS mail security guidance, and ANSI/BHMA door hardware grading.",
  areas: [
    {
      id: "res-neighborhood",
      name: "Neighborhood & Area Study",
      category: "Neighborhood & Area Study",
      blurb: "The surroundings of the residence: local crime patterns, neighbors, traffic, emergency services, and natural hazards.",
      subs: [
        {
          name: "Local Crime Awareness",
          vulns: [
            {
              id: "res-nbr-crime-unknown",
              title: "Household unaware of local crime patterns",
              text: "The household has not reviewed recent crime reports or trends for the neighborhood and surrounding area.",
              risk: "Without knowing which crimes are common nearby (for example, vehicle break-ins, package theft, or burglary), the household cannot prioritize the protective measures that matter most for this location.",
              mits: [
                "Review publicly available crime maps or reports from the local police department at least twice a year.",
                "Request a residential security briefing or crime prevention visit from the local police department if one is offered.",
                "Note the most common local crime types and use them to set priorities for the recommendations in this report."
              ],
              risks: ["theft", "delayed-detection"],
              cost: "low"
            },
            {
              id: "res-nbr-no-contact-le",
              title: "No relationship with local law enforcement",
              text: "The household does not know the local police district, non-emergency number, or community liaison officer for the area.",
              risk: "Suspicious activity may go unreported or be reported slowly, and the household may miss crime alerts that police share with residents.",
              mits: [
                "Record the police non-emergency number and district information in the household emergency contact list.",
                "Sign up for any police or city alert service that covers the neighborhood.",
                "Consider attending a community police meeting to learn about local concerns."
              ],
              risks: ["delayed-response", "delayed-detection"],
              cost: "low"
            }
          ]
        },
        {
          name: "Neighbors & Community Watch",
          vulns: [
            {
              id: "res-nbr-no-watch",
              title: "No neighborhood watch or neighbor communication",
              text: "The household has no regular communication with neighbors and there is no active neighborhood watch or resident group.",
              risk: "Neighbors who know each other are more likely to notice and report unusual activity, check on an empty house, and share information about recent incidents.",
              mits: [
                "Exchange contact information with immediate neighbors on each side and across the street.",
                "Join or help organize a neighborhood watch or resident communication group.",
                "Agree with trusted neighbors to watch each other's homes during travel."
              ],
              risks: ["delayed-detection", "theft"],
              cost: "low"
            },
            {
              id: "res-nbr-vacant-adjacent",
              title: "Vacant or poorly maintained adjacent property",
              text: "An adjacent or nearby property is vacant, abandoned, or visibly neglected.",
              risk: "Vacant properties can attract loitering, trespassing, and criminal activity, and can provide a concealed approach route to the residence.",
              mits: [
                "Report vacant or neglected properties to the city code enforcement office.",
                "Increase lighting and camera coverage on the side of the residence facing the vacant property.",
                "Ask neighbors to report unusual activity at the vacant property to police."
              ],
              risks: ["unauthorized-entry", "vandalism", "delayed-detection"],
              cost: "low"
            }
          ]
        },
        {
          name: "Traffic & Access Routes",
          vulns: [
            {
              id: "res-nbr-cut-through",
              title: "Residence near cut-through or heavy foot traffic",
              text: "The residence sits near a cut-through street, trail, alley, or path that brings non-residents close to the property.",
              risk: "Regular non-resident traffic makes it harder to tell when someone is watching the home or looking for an opportunity, and gives offenders an easy route in and out.",
              mits: [
                "Strengthen the property boundary on the side facing the cut-through with fencing or dense planting.",
                "Position a camera to cover the path or alley closest to the home.",
                "Work with the homeowners association or city on traffic calming or path lighting if appropriate."
              ],
              risks: ["unauthorized-entry", "surveillance"],
              cost: "med"
            },
            {
              id: "res-nbr-single-route",
              title: "Only one route in and out of neighborhood",
              text: "The neighborhood has a single entry and exit road, and the household has not planned an alternate route for emergencies.",
              risk: "A single route can be blocked by an accident, flooding, wildfire, or other emergency, delaying evacuation or emergency response.",
              mits: [
                "Identify and drive any alternate routes, including those that require walking or passing through gates.",
                "Include the alternate routes in the family emergency plan.",
                "Keep vehicles fueled or charged during periods of severe weather risk."
              ],
              risks: ["life-safety", "delayed-response"],
              cost: "low"
            }
          ]
        },
        {
          name: "Emergency Services Proximity",
          vulns: [
            {
              id: "res-nbr-response-time",
              title: "Emergency response times not known",
              text: "The household does not know the location of the nearest fire station, police station, or hospital, or the expected response time to the address.",
              risk: "Longer response times, common in rural or edge-of-town areas, mean the household may need to rely on its own measures for longer during an emergency.",
              mits: [
                "Identify the nearest fire station, police station, and emergency room and record them in the emergency plan.",
                "If response times are long, place more emphasis on delay measures, first aid supplies, and a safe room.",
                "Confirm the house number is clearly visible from the street so responders can find it quickly."
              ],
              risks: ["delayed-response", "life-safety"],
              cost: "low"
            },
            {
              id: "res-nbr-address-not-visible",
              title: "House number not visible from street",
              text: "The house number is missing, small, faded, or hidden by plants or shadows, and cannot be read from the street at night.",
              risk: "Police, fire, and medical responders may lose time locating the home during an emergency.",
              mits: [
                "Install house numbers at least several inches tall in a contrasting color near the front door and at the curb.",
                "Consider lighted or reflective numbers that can be read at night.",
                "Trim plants that block the numbers."
              ],
              risks: ["delayed-response", "life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Natural Hazards",
          vulns: [
            {
              id: "res-nbr-hazard-unassessed",
              title: "Local natural hazards not assessed",
              text: "The household has not identified the natural hazards that affect the area, such as tornadoes, floods, wildfire, hurricanes, or winter storms.",
              risk: "Without knowing which hazards apply, the household may not have the right shelter location, supplies, or insurance coverage.",
              mits: [
                "Review local hazard information from the county emergency management office or Ready.gov.",
                "Check the property flood zone on the FEMA flood map service.",
                "Use the hazard list to guide the family emergency plan and insurance review."
              ],
              risks: ["natural-hazard", "life-safety"],
              cost: "low"
            },
            {
              id: "res-nbr-no-alerts",
              title: "No emergency alert subscriptions",
              text: "Household members are not signed up for local emergency alerts and there is no weather alert radio in the home.",
              risk: "Severe weather and other emergencies can occur overnight or while phones are silenced, leaving little time to take shelter.",
              mits: [
                "Sign up for county or city emergency alerts on each adult's phone.",
                "Confirm Wireless Emergency Alerts are turned on in each phone's settings.",
                "Place a battery-backed NOAA weather radio where it can be heard from the bedrooms."
              ],
              risks: ["natural-hazard", "life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Area Features & Attractors",
          vulns: [
            {
              id: "res-nbr-nearby-attractors",
              title: "Nearby businesses or venues draw transient traffic",
              text: "The residence is near a business, park, school, transit stop, or venue that draws transient visitors at various hours.",
              risk: "Transient traffic increases the number of people passing the home who have no connection to the neighborhood, which can raise the chance of opportunistic crime.",
              mits: [
                "Keep vehicles, garages, and side gates locked at all times, not only at night.",
                "Increase lighting and camera coverage on the side facing the venue.",
                "Note event schedules or peak hours and take extra care during those times."
              ],
              risks: ["theft", "unauthorized-entry"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-perimeter",
      name: "Perimeter & Property Boundary",
      category: "Perimeter & Property Boundary",
      blurb: "The property edge, assessed using CPTED (Crime Prevention Through Environmental Design) principles: natural surveillance, natural access control, territorial reinforcement, and maintenance.",
      subs: [
        {
          name: "Territorial Reinforcement",
          vulns: [
            {
              id: "res-per-boundary-undefined",
              title: "Property boundary not clearly defined",
              text: "The edge of the property is not clearly marked by fencing, hedges, edging, or a change in ground surface, so it is unclear where public space ends and private space begins.",
              risk: "CPTED guidance notes that a clearly defined boundary signals ownership and makes trespassers more noticeable. Without it, a person can stand on or cross the property without appearing out of place.",
              mits: [
                "Define the property edge with low fencing, hedges, edging, or a change in paving or ground cover.",
                "Use features that mark the boundary without blocking views from the house or street.",
                "Consider small signs such as a security system or private property sign at entry points."
              ],
              risks: ["unauthorized-entry", "delayed-detection"],
              cost: "low"
            },
            {
              id: "res-per-front-semi-public",
              title: "Front yard reads as open public space",
              text: "The front yard has no transition features, such as a walkway gate, planter, or low wall, between the sidewalk and the front door.",
              risk: "Without a visible transition, visitors and strangers can walk directly to windows and doors without passing a clear sign that they are entering private property.",
              mits: [
                "Add a low gate, planter line, or walkway feature that marks the entry from the sidewalk.",
                "Keep the main walkway as the obvious route to the front door.",
                "Use personal touches such as maintained plantings to show the property is cared for."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Natural Access Control",
          vulns: [
            {
              id: "res-per-side-yard-open",
              title: "Side yards open to the street",
              text: "One or both side yards can be entered from the street without passing a gate or fence.",
              risk: "Open side yards give direct, low-visibility access to the backyard, rear doors, and windows, which are common entry points for burglary.",
              mits: [
                "Install fencing and a gate across each side yard, set back no further than the front corner of the house.",
                "Fit side gates with a lock that can be operated from inside the yard.",
                "Keep side gates closed and locked when not in use."
              ],
              risks: ["unauthorized-entry", "forced-entry", "theft"],
              cost: "med"
            },
            {
              id: "res-per-gate-unlocked",
              title: "Gates left unlocked or without locks",
              text: "Perimeter gates have no lock, a latch that can be reached from outside, or are routinely left unlocked.",
              risk: "An unlocked gate removes the delay and warning the fence is meant to provide, and allows easy access to the backyard and pool area.",
              mits: [
                "Fit each gate with a keyed or combination lock, or a padlock on a hardened hasp.",
                "Install a shield or relocate the latch so it cannot be reached by reaching over or through the gate.",
                "Add gate checks to the household nightly lock-up routine."
              ],
              risks: ["unauthorized-entry", "child-safety"],
              cost: "low"
            },
            {
              id: "res-per-climb-aids",
              title: "Climbing aids next to fence",
              text: "Items such as trash bins, woodpiles, furniture, ladders, or tree branches are placed against or near the fence line.",
              risk: "These items make it easy to climb over the fence and reduce the delay the fence provides.",
              mits: [
                "Move bins, furniture, and stored items several feet away from the fence.",
                "Store ladders locked inside the garage or shed.",
                "Trim tree limbs that overhang or touch the fence."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Fencing & Walls",
          vulns: [
            {
              id: "res-per-fence-low",
              title: "Fence too low or easily climbed",
              text: "The backyard fence is low or has horizontal rails or gaps that make it easy to climb.",
              risk: "A fence that can be climbed quickly provides little delay and does not stop children, intruders, or animals.",
              mits: [
                "Consider replacing low segments with a taller fence matched to the household's needs and local rules.",
                "Choose fencing with the smooth side facing out and no horizontal footholds.",
                "Check homeowners association and city rules on fence height before making changes."
              ],
              risks: ["unauthorized-entry", "child-safety"],
              cost: "high"
            },
            {
              id: "res-per-fence-damaged",
              title: "Fence damaged or in poor repair",
              text: "Sections of the fence are leaning, broken, missing boards, or have gaps at the bottom.",
              risk: "Damaged fencing allows easy entry and signals to passersby that the property is not closely maintained, which CPTED guidance links to higher crime.",
              mits: [
                "Repair or replace damaged boards, posts, and panels.",
                "Close gaps beneath the fence with gravel boards, edging, or wire.",
                "Walk the fence line every few months to check for new damage."
              ],
              risks: ["unauthorized-entry", "vandalism"],
              cost: "med"
            }
          ]
        },
        {
          name: "Natural Surveillance",
          vulns: [
            {
              id: "res-per-blind-areas",
              title: "Areas of yard not visible from house",
              text: "Parts of the yard, including the area behind a shed, garage, or dense planting, cannot be seen from any window of the residence or from the street.",
              risk: "Blind areas allow a person to hide, wait, or work on a door or window without being seen.",
              mits: [
                "Trim or relocate plantings that create hiding places.",
                "Add lighting and a camera to cover areas that cannot be opened up.",
                "Consider a motion-activated light in each blind area."
              ],
              risks: ["unauthorized-entry", "delayed-detection"],
              cost: "low"
            },
            {
              id: "res-per-solid-front-fence",
              title: "Solid front fence blocks street view",
              text: "A tall solid fence or wall in the front yard blocks the view of the front of the house from the street and from neighbors.",
              risk: "Solid barriers can give an intruder privacy once they are inside the barrier. CPTED guidance favors see-through fencing in front yards so neighbors and passersby can see the entry.",
              mits: [
                "Consider see-through fencing, such as ornamental metal, where privacy is not required.",
                "If a solid barrier is kept, make sure the gate and entry are well lit and covered by a camera.",
                "Keep the gate locked so the barrier is not easily passed."
              ],
              risks: ["delayed-detection", "unauthorized-entry"],
              cost: "med"
            }
          ]
        },
        {
          name: "Maintenance & Image",
          vulns: [
            {
              id: "res-per-unkempt",
              title: "Property shows signs of neglect",
              text: "The exterior shows signs of neglect, such as overgrown grass, accumulated debris, peeling paint, or broken fixtures.",
              risk: "CPTED maintenance principles hold that a cared-for property signals active ownership. A neglected appearance can suggest the home is empty or that problems will go unnoticed.",
              mits: [
                "Set a regular schedule for lawn care and exterior cleanup.",
                "Repair broken fixtures, fences, and lights promptly.",
                "Arrange lawn care during extended travel so the home does not appear vacant."
              ],
              risks: ["unauthorized-entry", "vandalism"],
              cost: "low"
            }
          ]
        },
        {
          name: "Signage",
          vulns: [
            {
              id: "res-per-no-signage",
              title: "No security signage displayed",
              text: "No signs or decals indicate that the residence has an alarm system or camera coverage.",
              risk: "Security signs and decals can discourage some offenders from choosing the home, though they work best when the systems are real and in use.",
              mits: [
                "Place alarm company or camera signs near the front walkway and on rear and side doors or windows.",
                "Use generic signs rather than ones that name a specific model or weakness.",
                "Keep signs clean, visible, and current."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-per-sign-too-detailed",
              title: "Signage reveals system details",
              text: "Signs, stickers, or yard decorations reveal details such as specific system brand, absence of monitoring, or that dogs are kept outside.",
              risk: "Overly specific signs can tell an offender what equipment to defeat or when the home is likely unprotected.",
              mits: [
                "Replace detailed signs with general ones that state the property is monitored.",
                "Avoid signs that suggest when the household is away or how many people live there."
              ],
              risks: ["targeting", "info-compromise"],
              cost: "low"
            }
          ]
        },
        {
          name: "Outbuildings & Sheds",
          vulns: [
            {
              id: "res-per-shed-unsecured",
              title: "Shed or outbuilding unlocked",
              text: "A shed, workshop, or outbuilding is unlocked or secured with a light padlock and exposed hinge screws.",
              risk: "Outbuildings often hold tools, ladders, and equipment that can be stolen or used to break into the main house.",
              mits: [
                "Fit the outbuilding door with a hasp and a hardened padlock, using carriage bolts or security screws.",
                "Store ladders and pry tools inside a locked space.",
                "Consider an alarm sensor or camera covering the outbuilding door."
              ],
              risks: ["theft", "forced-entry"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-doors",
      name: "Doors",
      category: "Doors",
      blurb: "Exterior doors, frames, locks, and related hardware, including sliding and French doors.",
      subs: [
        {
          name: "Door Construction",
          vulns: [
            {
              id: "res-dor-hollow-core",
              title: "Hollow-core exterior door installed",
              text: "One or more exterior doors are hollow-core wood doors intended for interior use.",
              risk: "Hollow-core doors can be broken through with a few kicks or blows, regardless of the lock installed.",
              mits: [
                "Replace hollow-core exterior doors with solid-core wood, steel, or fiberglass doors.",
                "Prioritize doors that are out of view of the street, such as rear and garage entry doors.",
                "Install the new door in a reinforced frame so the frame is not the weak point."
              ],
              risks: ["forced-entry", "home-invasion"],
              cost: "med"
            },
            {
              id: "res-dor-glass-near-lock",
              title: "Glass within reach of door lock",
              text: "An exterior door has a glass panel in or beside the door within arm's reach of the lock.",
              risk: "An intruder can break the glass and reach through to unlock the door, often in seconds.",
              mits: [
                "Apply security film to glass within reach of the lock to slow breakage.",
                "Consider replacing the glass with laminated or polycarbonate glazing.",
                "Where local fire code and household safety allow, use a lock that cannot be opened by simply reaching through the glass, and keep the key accessible nearby for exit."
              ],
              risks: ["forced-entry", "home-invasion"],
              cost: "low"
            }
          ]
        },
        {
          name: "Frames & Strike Plates",
          vulns: [
            {
              id: "res-dor-short-strike-screws",
              title: "Strike plate secured with short screws",
              text: "Deadbolt and latch strike plates (the metal plates on the frame that receive the bolt) are held with short screws that reach only the thin door trim.",
              risk: "Kicked-in doors most often fail at the frame, where short screws pull out of the soft trim wood. This is a common burglary method.",
              mits: [
                "Replace strike plate screws with 3-inch screws that reach the wall framing behind the door frame.",
                "Install a heavy-duty or box strike plate on each exterior door.",
                "Consider a full-length frame reinforcement kit on doors out of public view."
              ],
              risks: ["forced-entry", "home-invasion"],
              cost: "low"
            },
            {
              id: "res-dor-hinge-short-screws",
              title: "Door hinges held by short screws",
              text: "Exterior door hinges are attached to the frame with the short screws supplied with the hinges.",
              risk: "Short hinge screws allow the hinge side of the door to be forced even when the lock side holds.",
              mits: [
                "Replace at least one screw in each hinge leaf on the frame side with a 3-inch screw.",
                "On outward-swinging doors, install non-removable hinge pins or hinge security studs."
              ],
              risks: ["forced-entry"],
              cost: "low"
            },
            {
              id: "res-dor-frame-gap",
              title: "Gap between door and frame",
              text: "There is a visible gap between the door edge and the frame near the lock, or the frame is cracked, split, or soft from rot.",
              risk: "Gaps allow a pry bar to be inserted, and damaged frames give little resistance to kicking or prying.",
              mits: [
                "Repair or replace damaged or rotted frame sections.",
                "Install a latch guard plate on doors where a gap cannot be closed.",
                "Adjust or rehang the door so it fits tightly."
              ],
              risks: ["forced-entry"],
              cost: "med"
            }
          ]
        },
        {
          name: "Locks & Deadbolts",
          vulns: [
            {
              id: "res-dor-no-deadbolt",
              title: "Exterior door has no deadbolt",
              text: "One or more exterior doors rely only on a knob lock or lever lock with a spring latch and have no deadbolt.",
              risk: "Spring latches can often be opened by slipping a card or tool between the door and frame and give little resistance to force.",
              mits: [
                "Install a single-cylinder deadbolt with at least a 1-inch throw (how far the bolt extends) on each exterior door.",
                "Choose a deadbolt rated ANSI/BHMA Grade 1 or Grade 2 (industry strength and durability grades; Grade 1 is highest).",
                "Install the deadbolt with a reinforced strike plate and long screws."
              ],
              risks: ["forced-entry", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-dor-low-grade-lock",
              title: "Low-grade lock hardware installed",
              text: "Exterior locks are low-cost builder-grade hardware rated ANSI/BHMA Grade 3 or not rated.",
              risk: "Lower-grade locks are more easily defeated by force or manipulation and wear out faster.",
              mits: [
                "Upgrade exterior deadbolts to ANSI/BHMA Grade 1 or Grade 2 hardware.",
                "Consider lock cylinders resistant to picking and bumping, such as those listed to UL 437 (a high-security lock cylinder standard), for primary doors.",
                "Keep lock models consistent so a single key can serve several doors if preferred."
              ],
              risks: ["forced-entry", "unauthorized-entry"],
              cost: "med"
            },
            {
              id: "res-dor-deadbolt-not-used",
              title: "Deadbolts not routinely locked",
              text: "Household members report that deadbolts are often left unlocked, including at night or when the home is empty.",
              risk: "A deadbolt only provides protection when it is engaged. Many residential burglaries involve an unlocked door.",
              mits: [
                "Make locking all exterior doors part of the household nightly and departure routine.",
                "Consider smart deadbolts that can auto-lock after a set time and report lock status to a phone.",
                "Assign one adult to do a final lock check at bedtime."
              ],
              risks: ["unauthorized-entry", "home-invasion"],
              cost: "low"
            }
          ]
        },
        {
          name: "Sliding & French Doors",
          vulns: [
            {
              id: "res-dor-slider-liftable",
              title: "Sliding door can be lifted off track",
              text: "A sliding glass door has no anti-lift device and can be lifted out of its track while locked.",
              risk: "Many sliding doors can be lifted out of the frame from outside, bypassing the latch entirely.",
              mits: [
                "Install anti-lift blocks or screws in the upper track to limit upward movement.",
                "Add a secondary lock such as a foot lock or pin lock through both door frames.",
                "Check that the door rollers are adjusted so the panel sits fully in the track."
              ],
              risks: ["forced-entry", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-dor-slider-weak-latch",
              title: "Sliding door relies on factory latch only",
              text: "The sliding door is secured only by its factory latch, with no bar, dowel, or auxiliary lock.",
              risk: "Factory latches on sliding doors are often light and can be forced or jimmied.",
              mits: [
                "Place a security bar or cut dowel in the lower track when the door is closed.",
                "Install a keyed auxiliary lock or a sliding door pin lock.",
                "Consider an alarm contact or glass-break sensor covering the door."
              ],
              risks: ["forced-entry"],
              cost: "low"
            },
            {
              id: "res-dor-french-no-bolts",
              title: "French door inactive leaf not secured",
              text: "On a pair of French doors, the inactive leaf (the door that normally stays closed) has short or missing top and bottom bolts.",
              risk: "If the inactive leaf is not firmly bolted, both doors can be pushed open together even when the deadbolt is locked.",
              mits: [
                "Install heavy-duty flush bolts at the top and bottom of the inactive leaf, extending well into the frame and floor.",
                "Add an astragal (a metal strip covering the gap between the doors) to block prying."
              ],
              risks: ["forced-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Garage Entry Door",
          vulns: [
            {
              id: "res-dor-garage-interior-weak",
              title: "Door from garage to house weakly secured",
              text: "The door between the attached garage and the living space is a light door, has no deadbolt, or is routinely left unlocked.",
              risk: "Once inside the garage, an intruder is out of sight and can work on this door without being seen.",
              mits: [
                "Treat the garage-to-house door as an exterior door, with a solid-core door, deadbolt, and reinforced strike.",
                "Keep it locked at night and when the home is empty.",
                "Check local code for fire-rated and self-closing requirements before replacing this door."
              ],
              risks: ["forced-entry", "home-invasion"],
              cost: "med"
            }
          ]
        },
        {
          name: "Door Viewing & Visitor Control",
          vulns: [
            {
              id: "res-dor-no-viewer",
              title: "No way to see visitors before opening",
              text: "The front door has no peephole, side window, or video doorbell that allows residents to see who is at the door without opening it.",
              risk: "Residents may open the door to strangers without knowing who they are, which is a common method in home-invasion incidents.",
              mits: [
                "Install a wide-angle door viewer or video doorbell.",
                "Establish a household rule that the door is not opened until the visitor is identified.",
                "Teach children not to open the door to anyone without an adult's approval."
              ],
              risks: ["home-invasion", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-dor-chain-false-security",
              title: "Door chain relied on for visitor control",
              text: "Residents use a door chain to partly open the door to visitors.",
              risk: "Standard door chains are attached with short screws and can be broken with a firm push, giving a false sense of security.",
              mits: [
                "Speak to visitors through the closed door, an intercom, or a video doorbell instead of partly opening it.",
                "If a restraint is wanted, consider a heavy-duty door guard anchored with long screws."
              ],
              risks: ["home-invasion"],
              cost: "low"
            }
          ]
        },
        {
          name: "Keys & Access Credentials",
          vulns: [
            {
              id: "res-dor-hidden-key",
              title: "Spare key hidden outside",
              text: "A spare key is hidden outside the home, such as under a mat, in a planter, or in a fake rock.",
              risk: "Offenders know common hiding spots and look for them first. A hidden key allows entry without force or noise.",
              mits: [
                "Remove spare keys hidden outdoors.",
                "Leave a spare key with a trusted neighbor or use a lockbox in a concealed location with a combination that is changed periodically.",
                "Consider a keypad or smart lock so physical spare keys are not needed."
              ],
              risks: ["unauthorized-entry", "theft"],
              cost: "low"
            },
            {
              id: "res-dor-keys-uncontrolled",
              title: "Unknown number of keys in circulation",
              text: "The household does not know how many keys exist or who holds them, including keys given to former staff, contractors, or previous owners.",
              risk: "Any key not accounted for allows quiet entry that may not be noticed.",
              mits: [
                "Rekey all exterior locks after moving in, after losing a key, or after staff or contractors leave.",
                "Keep a written list of who holds each key.",
                "Consider restricted keyways that require authorization to duplicate."
              ],
              risks: ["unauthorized-entry", "insider"],
              cost: "low"
            },
            {
              id: "res-dor-shared-codes",
              title: "Keypad or smart lock codes widely shared",
              text: "A keypad or smart lock uses one shared code that has been given to several people and has not been changed.",
              risk: "Shared codes cannot be traced to individuals and stay valid for people who no longer need access.",
              mits: [
                "Assign a separate code to each person who needs access.",
                "Use temporary or scheduled codes for contractors and guests.",
                "Remove codes promptly when access is no longer needed and review the code list quarterly."
              ],
              risks: ["unauthorized-entry", "insider"],
              cost: "low"
            }
          ]
        },
        {
          name: "Pet Doors & Secondary Openings",
          vulns: [
            {
              id: "res-dor-pet-door",
              title: "Pet door allows reach-in or entry",
              text: "A pet door is installed in an exterior door or wall and is large enough for a person to reach through or crawl through.",
              risk: "Large pet doors can allow a person, especially a small adult or child, to enter, or allow someone to reach the lock.",
              mits: [
                "Fit the pet door with a locking cover and lock it at night and when the home is empty.",
                "Consider a smaller door or one that opens only for a pet's microchip or collar tag.",
                "Avoid installing pet doors within arm's reach of a lock."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-windows",
      name: "Windows",
      category: "Windows",
      blurb: "Windows, skylights, and basement openings: locks, glazing, visibility into the home, and emergency escape.",
      subs: [
        {
          name: "Window Locks",
          vulns: [
            {
              id: "res-win-weak-latch",
              title: "Window latches weak or broken",
              text: "Ground-floor windows have broken, missing, or light sash latches (the small locks where the two window panels meet).",
              risk: "Ground-floor windows are a frequent burglary entry point, and a weak latch can be forced or slipped from outside.",
              mits: [
                "Repair or replace broken latches on all ground-floor and easily reached windows.",
                "Add keyed or pin-style auxiliary locks to windows out of public view.",
                "Confirm every window is latched as part of the nightly lock-up routine."
              ],
              risks: ["forced-entry", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-win-left-open",
              title: "Windows left open or unlatched",
              text: "Windows are routinely left open or unlatched for ventilation, including when the home is empty or at night.",
              risk: "An open or unlatched window allows quiet entry without force and may not trigger an alarm contact.",
              mits: [
                "Close and latch ground-floor windows when the home is empty and at night.",
                "Install ventilation stops that let the window open only a few inches and lock in that position.",
                "Consider alarm contacts that allow a limited open position while staying armed."
              ],
              risks: ["unauthorized-entry", "home-invasion"],
              cost: "low"
            },
            {
              id: "res-win-casement-cranks",
              title: "Casement or awning window cranks accessible",
              text: "Casement or awning windows (windows that swing outward on a crank) have loose locking handles or can be pried open from outside.",
              risk: "Loose or worn locking handles allow the sash to be pried open enough to reach in.",
              mits: [
                "Tighten or replace worn locking handles and multi-point locks.",
                "Remove crank handles from windows that are rarely used, keeping them nearby for emergency exit."
              ],
              risks: ["forced-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Glazing & Glass Strength",
          vulns: [
            {
              id: "res-win-standard-glass",
              title: "Standard glass in vulnerable ground-floor windows",
              text: "Ground-floor windows out of public view use standard annealed glass with no film or laminated layer.",
              risk: "Standard glass breaks quickly and allows entry in seconds once broken.",
              mits: [
                "Apply security window film to ground-floor windows out of view of the street.",
                "Consider laminated glass for high-risk windows when replacing them.",
                "Pair film or laminated glass with glass-break sensors so the alarm sounds during an attempt."
              ],
              risks: ["forced-entry", "delayed-detection"],
              cost: "med"
            },
            {
              id: "res-win-film-unanchored",
              title: "Security film not anchored to frame",
              text: "Security film is installed but is not attached to the window frame with an anchoring system.",
              risk: "Unanchored film can hold broken glass together but may allow the whole pane to be pushed out of the frame.",
              mits: [
                "Have a qualified installer add a frame attachment system to filmed windows.",
                "Confirm the film manufacturer and rating when renewing film."
              ],
              risks: ["forced-entry"],
              cost: "med"
            }
          ]
        },
        {
          name: "Visibility into the Home",
          vulns: [
            {
              id: "res-win-valuables-visible",
              title: "Valuables visible through windows",
              text: "Electronics, jewelry, firearms, safes, or other valuables are visible from the street or yard through uncovered windows.",
              risk: "Visible valuables give an offender a reason to choose this home and tell them where to go once inside.",
              mits: [
                "Move valuables out of direct view from windows.",
                "Use blinds, curtains, or privacy film on windows that face the street or neighbors.",
                "Close window coverings at night when interior lights make the inside easy to see."
              ],
              risks: ["theft", "targeting"],
              cost: "low"
            },
            {
              id: "res-win-routine-visible",
              title: "Household routines visible from outside",
              text: "Uncovered windows allow people outside to see who is home, which rooms are occupied, and when residents go to bed.",
              risk: "Observing routines lets an offender plan entry for a time when residents are away or asleep.",
              mits: [
                "Close coverings on bedroom and living area windows after dark.",
                "Use timers on interior lights to vary the appearance of occupancy."
              ],
              risks: ["surveillance", "targeting", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Basement & Below-Grade Openings",
          vulns: [
            {
              id: "res-win-basement-unsecured",
              title: "Basement windows easily removed or opened",
              text: "Basement or below-grade windows are small, low, and hidden from view, with weak latches or frames.",
              risk: "These windows are often hidden by plants or window wells, allowing an intruder to work on them unseen.",
              mits: [
                "Install secure latches or locks on basement windows.",
                "Consider window well covers that can be opened from inside for emergency escape.",
                "Keep plants around window wells trimmed low."
              ],
              risks: ["forced-entry", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-win-well-no-escape",
              title: "Basement bedroom lacks usable escape window",
              text: "A basement room used for sleeping has no window large enough or low enough to climb out, or the window well has no ladder or steps.",
              risk: "If the stairway is blocked by fire or smoke, occupants of the basement may have no way out.",
              mits: [
                "Have a qualified contractor review whether the room meets local code for an emergency escape opening.",
                "Install a ladder or steps in deep window wells.",
                "Move sleeping areas to rooms with two ways out if an escape window cannot be added."
              ],
              risks: ["life-safety"],
              cost: "high"
            }
          ]
        },
        {
          name: "Upper-Floor Windows & Access",
          vulns: [
            {
              id: "res-win-upper-reachable",
              title: "Upper windows reachable from roof or structures",
              text: "Second-floor windows can be reached from a porch roof, deck, trellis, tree, or stored ladder, and are left unlatched.",
              risk: "Upper-floor windows are often left unlocked because they seem out of reach, making them an easy entry point when they are not.",
              mits: [
                "Latch upper windows that can be reached from roofs, decks, or trees.",
                "Trim tree limbs that give access to upper windows or roofs.",
                "Add alarm contacts to reachable upper-floor windows."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-win-child-fall",
              title: "No fall protection on upper windows",
              text: "Upper-floor windows in rooms used by young children have no window guards or opening control devices.",
              risk: "Young children can fall from open windows, and insect screens are not strong enough to prevent a fall.",
              mits: [
                "Install window opening control devices that limit opening to a few inches and can be released by an adult for emergency exit.",
                "Move furniture that children can climb away from windows.",
                "Confirm that any device installed still allows the window to be used as an emergency exit."
              ],
              risks: ["child-safety", "life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Security Bars & Emergency Egress",
          vulns: [
            {
              id: "res-win-bars-no-release",
              title: "Window bars without quick-release",
              text: "Security bars or grilles are installed on bedroom windows without an inside quick-release mechanism.",
              risk: "Fixed bars can trap occupants inside during a fire. Fire safety guidance warns that bars on sleeping room windows must open quickly from inside.",
              mits: [
                "Replace fixed bars on sleeping room windows with bars that have a quick-release latch operable from inside without a key or tool.",
                "Show every household member how to operate the release and include it in fire drills.",
                "Consider film, laminated glass, or alarm sensors as alternatives to bars."
              ],
              risks: ["life-safety"],
              cost: "med"
            }
          ]
        },
        {
          name: "Window Alarm Coverage",
          vulns: [
            {
              id: "res-win-no-sensors",
              title: "Windows not covered by alarm sensors",
              text: "Ground-floor windows have no opening contacts or glass-break sensors connected to the alarm system.",
              risk: "An intruder entering through a window may not set off the alarm until they reach an interior motion sensor, if one exists.",
              mits: [
                "Add opening contacts to ground-floor and reachable windows.",
                "Add glass-break sensors in rooms with large or multiple windows.",
                "Test window sensors when the system is tested."
              ],
              risks: ["delayed-detection"],
              cost: "med"
            }
          ]
        }
      ]
    },
    {
      id: "res-garage",
      name: "Garage & Vehicle Storage",
      category: "Garage & Vehicle Storage",
      blurb: "Attached and detached garages, garage door openers, and how vehicles and their contents are kept.",
      subs: [
        {
          name: "Garage Door Practices",
          vulns: [
            {
              id: "res-gar-door-left-open",
              title: "Garage door frequently left open",
              text: "The overhead garage door is often left open during the day or overnight.",
              risk: "An open garage shows its contents to passersby and gives direct, concealed access to the house entry door, tools, and vehicles.",
              mits: [
                "Close the garage door whenever no one is actively working in the garage.",
                "Install a smart garage controller that alerts a phone when the door is left open or closes it on a timer.",
                "Add a garage door check to the nightly lock-up routine."
              ],
              risks: ["theft", "unauthorized-entry", "home-invasion"],
              cost: "low"
            },
            {
              id: "res-gar-emergency-release",
              title: "Emergency release can be pulled from outside",
              text: "The garage door opener's emergency release cord hangs where it can be hooked through the gap at the top of the door with a wire or coat hanger.",
              risk: "This method can open a closed garage door in seconds without damage.",
              mits: [
                "Install a release shield or zip tie the release lever so it cannot be pulled by a hook from outside, while still working by hand from inside.",
                "Shorten the release cord and remove the handle so it cannot be easily grabbed."
              ],
              risks: ["forced-entry", "unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Openers & Remotes",
          vulns: [
            {
              id: "res-gar-remote-in-car",
              title: "Garage remote left in parked vehicles",
              text: "Garage door remotes are kept clipped to visors in vehicles parked outside.",
              risk: "A thief who breaks into the car gains the remote and, if a registration or document shows the address, access to the home.",
              mits: [
                "Use a keychain remote that leaves with the driver, or a phone app for the opener.",
                "Do not leave registration or mail with the home address in a vehicle parked outside.",
                "Lock the garage-to-house door so a stolen remote does not give access to the living space."
              ],
              risks: ["theft", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-gar-old-opener",
              title: "Older opener with fixed code",
              text: "The garage door opener is an older model that uses a fixed code rather than a rolling code (a code that changes with each use).",
              risk: "Fixed-code openers can be copied or guessed with inexpensive equipment.",
              mits: [
                "Replace older openers with a model that uses rolling-code technology.",
                "Reset or reprogram remotes when one is lost or a vehicle is sold."
              ],
              risks: ["unauthorized-entry"],
              cost: "med"
            }
          ]
        },
        {
          name: "Garage Windows & Side Doors",
          vulns: [
            {
              id: "res-gar-windows-visible",
              title: "Garage contents visible through windows",
              text: "Windows in the garage door or walls allow people outside to see whether vehicles are present and what is stored inside.",
              risk: "Seeing an empty garage tells an offender the household is away, and visible tools or equipment invite theft.",
              mits: [
                "Apply frosted or privacy film to garage windows.",
                "Store high-value items out of view."
              ],
              risks: ["theft", "surveillance"],
              cost: "low"
            },
            {
              id: "res-gar-side-door-weak",
              title: "Garage side door weakly secured",
              text: "The garage service door (the regular door into the garage from the yard) is hollow-core, lacks a deadbolt, or is left unlocked.",
              risk: "This door is usually out of street view and leads to tools and the house entry door.",
              mits: [
                "Install a solid door, deadbolt, and reinforced strike on the garage side door.",
                "Add an alarm contact to the side door."
              ],
              risks: ["forced-entry", "theft"],
              cost: "med"
            }
          ]
        },
        {
          name: "Vehicle Security",
          vulns: [
            {
              id: "res-gar-cars-unlocked",
              title: "Vehicles left unlocked in driveway",
              text: "Household vehicles parked in the driveway or street are sometimes left unlocked, or keys or key fobs are left inside.",
              risk: "Theft from unlocked vehicles is a common neighborhood crime, and keys or fobs left inside allow theft of the vehicle.",
              mits: [
                "Lock every vehicle and take keys and fobs inside each night.",
                "Remove valuables, bags, and electronics from vehicles or keep them out of sight.",
                "Park in the garage when space allows."
              ],
              risks: ["theft"],
              cost: "low"
            },
            {
              id: "res-gar-fob-near-door",
              title: "Keyless fobs stored near exterior door",
              text: "Keyless entry fobs are kept on a hook or table just inside the front door.",
              risk: "Some vehicle thefts use devices that relay the signal from a fob inside the home to unlock and start the car outside.",
              mits: [
                "Store fobs away from exterior walls and doors.",
                "Consider a signal-blocking pouch or box for fobs overnight.",
                "Check whether the vehicle allows keyless entry to be turned off when not needed."
              ],
              risks: ["theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Detached Garages & Carports",
          vulns: [
            {
              id: "res-gar-detached-uncovered",
              title: "Detached garage lacks alarm or camera coverage",
              text: "A detached garage or carport is not covered by the alarm system, cameras, or lighting.",
              risk: "Detached structures are often targeted because activity there is unlikely to be heard or seen from the house.",
              mits: [
                "Extend alarm coverage or add a standalone alarm to the detached garage.",
                "Add a motion light and camera covering the garage doors.",
                "Secure doors with deadbolts and hardened padlocks."
              ],
              risks: ["theft", "delayed-detection"],
              cost: "med"
            }
          ]
        }
      ]
    },
    {
      id: "res-driveway",
      name: "Driveway, Parking & Approach",
      category: "Driveway, Parking & Approach",
      blurb: "How people and vehicles approach the residence, and how visible and controlled that approach is.",
      subs: [
        {
          name: "Approach Visibility",
          vulns: [
            {
              id: "res-drv-approach-hidden",
              title: "Approach to residence not visible",
              text: "The driveway and front walk cannot be seen from inside the home because of plantings, walls, or the layout of the house.",
              risk: "Residents cannot see who is approaching before they reach the door, and arrivals and departures happen out of neighbors' view.",
              mits: [
                "Trim or remove plantings that block the view of the driveway from main living areas.",
                "Add a camera covering the driveway with notifications to a phone.",
                "Consider a driveway alert sensor that chimes when a vehicle or person enters."
              ],
              risks: ["delayed-detection", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-drv-long-driveway",
              title: "Long driveway with no detection",
              text: "The residence sits at the end of a long driveway with no gate, sensor, or camera to alert residents to arrivals.",
              risk: "Vehicles and people can reach the house without warning, which shortens the time residents have to respond.",
              mits: [
                "Install a wireless driveway sensor near the road that alerts inside the home.",
                "Place a camera at the driveway entrance able to capture vehicle details.",
                "Consider a gate if the threat level and budget support it."
              ],
              risks: ["delayed-detection", "home-invasion"],
              cost: "med"
            }
          ]
        },
        {
          name: "Arrivals & Departures",
          vulns: [
            {
              id: "res-drv-arrival-routine",
              title: "Arrival routine leaves residents exposed",
              text: "Residents park in the driveway and walk to the door in the dark, searching for keys, without checking the area first.",
              risk: "The time spent getting out of the car and unlocking the door is when residents are most likely to be approached.",
              mits: [
                "Have keys or phone ready before leaving the vehicle.",
                "Use lighting that turns on when a vehicle arrives.",
                "Look around before getting out, and drive away if something seems wrong."
              ],
              risks: ["personal-safety", "home-invasion"],
              cost: "low"
            },
            {
              id: "res-drv-garage-close-wait",
              title: "Garage door not watched until closed",
              text: "Drivers pull into the garage and enter the house before the garage door has fully closed.",
              risk: "A person can follow a vehicle into the garage and gain access before the door closes.",
              mits: [
                "Stay in the vehicle with doors locked until the garage door fully closes.",
                "Check mirrors for anyone on foot before opening and closing the door."
              ],
              risks: ["home-invasion", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Street Parking & Visitors",
          vulns: [
            {
              id: "res-drv-unknown-vehicles",
              title: "Unfamiliar vehicles not noticed or reported",
              text: "The household has no habit of noting unfamiliar vehicles parked near the home for long periods.",
              risk: "People planning a crime may watch a residence from a parked vehicle. Noticing and reporting such vehicles can interrupt that planning.",
              mits: [
                "Note the description and plate of vehicles that park near the home repeatedly without an obvious reason.",
                "Share concerns with neighbors and report suspicious activity to the police non-emergency line.",
                "Keep driveway camera footage long enough to review vehicle patterns."
              ],
              risks: ["surveillance", "targeting"],
              cost: "low"
            }
          ]
        },
        {
          name: "Gates & Vehicle Barriers",
          vulns: [
            {
              id: "res-drv-gate-left-open",
              title: "Driveway gate left open or slow to close",
              text: "A driveway gate is left open for long periods or closes slowly enough that another vehicle can follow through.",
              risk: "A gate that is open or easy to follow through provides little control over who enters.",
              mits: [
                "Set the gate to close automatically after a short delay.",
                "Watch the mirror to make sure no one follows the vehicle through the gate.",
                "Add a camera at the gate to record entries."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-drv-gate-code-shared",
              title: "Gate code shared and never changed",
              text: "The driveway or community gate code has been given to delivery drivers, contractors, and guests and has not been changed.",
              risk: "A widely known code allows anyone who has learned it to enter without the household's knowledge.",
              mits: [
                "Change the gate code on a regular schedule and after staff or contractors leave.",
                "Use separate or temporary codes for vendors if the gate system allows it."
              ],
              risks: ["unauthorized-entry", "insider"],
              cost: "low"
            }
          ]
        },
        {
          name: "Approach Lighting",
          vulns: [
            {
              id: "res-drv-unlit",
              title: "Driveway and walkway poorly lit",
              text: "The driveway and walkway to the front door are dark at night or lit only by the porch light.",
              risk: "Dark approaches hide people waiting near the door and increase the chance of trips and falls.",
              mits: [
                "Add path lights along the walkway and a fixture covering the driveway.",
                "Use dusk-to-dawn or motion-activated lights so the area is lit when residents arrive."
              ],
              risks: ["personal-safety", "liability"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-landscaping",
      name: "Landscaping & Exterior Concealment",
      category: "Landscaping & Exterior Concealment",
      blurb: "Plantings, trees, and yard features that can hide a person or provide access, and how they affect visibility.",
      subs: [
        {
          name: "Shrubs & Hedges",
          vulns: [
            {
              id: "res-lnd-shrubs-high",
              title: "Shrubs near windows and doors too tall",
              text: "Shrubs next to windows and doors are taller than about three feet and can hide a person standing beside the house.",
              risk: "CPTED guidance recommends keeping shrubs low near the house so a person cannot work on a window or door unseen.",
              mits: [
                "Trim shrubs near windows and doors to about three feet or lower.",
                "Choose low-growing plants for beds next to the house.",
                "Set a trimming schedule during the growing season."
              ],
              risks: ["unauthorized-entry", "delayed-detection"],
              cost: "low"
            },
            {
              id: "res-lnd-no-thorny",
              title: "Vulnerable windows lack deterrent plantings",
              text: "Ground-floor windows out of public view have no plantings to discourage someone from standing beneath them.",
              risk: "Open, soft ground beneath a hidden window makes it easy to stand and work at the window.",
              mits: [
                "Plant low thorny shrubs beneath vulnerable ground-floor windows.",
                "Consider gravel beds that make noise when walked on."
              ],
              risks: ["unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Trees",
          vulns: [
            {
              id: "res-lnd-tree-canopy-low",
              title: "Low tree canopy blocks views and lights",
              text: "Tree canopies hang low enough to block views of the yard or to block light from exterior fixtures.",
              risk: "Low canopies create shadows and hiding places and reduce the benefit of lighting and cameras.",
              mits: [
                "Trim lower tree limbs to about six to eight feet above the ground, consistent with CPTED guidance on clear sight lines.",
                "Check that lights and cameras are not blocked after trees leaf out in spring."
              ],
              risks: ["delayed-detection"],
              cost: "low"
            },
            {
              id: "res-lnd-tree-roof-access",
              title: "Tree limbs provide roof or window access",
              text: "Tree limbs reach the roof, balcony, or upper-floor windows.",
              risk: "Climbable limbs give access to upper levels, which are often less protected, and can damage the roof during storms.",
              mits: [
                "Trim limbs back from the roof, balconies, and upper windows.",
                "Have a certified arborist assess large trees near the house for storm risk."
              ],
              risks: ["unauthorized-entry", "natural-hazard"],
              cost: "med"
            }
          ]
        },
        {
          name: "Yard Structures & Features",
          vulns: [
            {
              id: "res-lnd-structures-hide",
              title: "Yard structures create hiding places",
              text: "Sheds, playsets, privacy screens, or stacked materials create areas where a person could hide near the house.",
              risk: "Hiding places near entries allow a person to wait for residents or to work unseen.",
              mits: [
                "Relocate or open up structures that create hiding spots near doors and windows.",
                "Light and cover remaining hidden areas with a camera."
              ],
              risks: ["personal-safety", "delayed-detection"],
              cost: "low"
            },
            {
              id: "res-lnd-tools-loose",
              title: "Loose tools and objects available outside",
              text: "Tools, landscaping rocks, bricks, or other heavy objects are left in the yard.",
              risk: "Loose heavy objects and tools can be used to break windows or force doors.",
              mits: [
                "Store tools in a locked shed or garage.",
                "Secure or remove loose decorative stones and bricks near windows and doors."
              ],
              risks: ["forced-entry", "vandalism"],
              cost: "low"
            }
          ]
        },
        {
          name: "Landscape Maintenance",
          vulns: [
            {
              id: "res-lnd-overgrown",
              title: "Landscaping overgrown and unmaintained",
              text: "Beds, lawns, and borders are overgrown, with plants spreading across walkways and in front of fixtures.",
              risk: "Overgrowth reduces visibility, blocks lights and cameras, and suggests the property is not closely watched.",
              mits: [
                "Set a regular maintenance schedule or service contract.",
                "Recheck sight lines from windows, lights, and cameras after each major trim."
              ],
              risks: ["delayed-detection", "vandalism"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-lighting",
      name: "Exterior Lighting",
      category: "Exterior Lighting",
      blurb: "Lighting on entries, yards, driveways, and paths, including controls, coverage, and maintenance.",
      subs: [
        {
          name: "Entry Lighting",
          vulns: [
            {
              id: "res-lgt-entries-dark",
              title: "Exterior doors not lit",
              text: "One or more exterior doors, often rear, side, or garage doors, have no light fixture.",
              risk: "Unlit doors let a person try the lock or force the door without being seen, and make it hard to identify visitors.",
              mits: [
                "Install a light fixture at every exterior door.",
                "Use dusk-to-dawn sensors so lights come on automatically.",
                "Choose fixtures that light the face of a person at the door, not only the ground."
              ],
              risks: ["unauthorized-entry", "delayed-detection"],
              cost: "low"
            },
            {
              id: "res-lgt-manual-only",
              title: "Exterior lights depend on manual switching",
              text: "Exterior lights are controlled only by indoor switches and are often left off or forgotten.",
              risk: "Lighting that depends on someone remembering to switch it on is often off when it is needed, especially when the household is away.",
              mits: [
                "Fit dusk-to-dawn sensors, timers, or smart controls to exterior lights.",
                "Use motion sensors on lights in side and rear yards."
              ],
              risks: ["delayed-detection"],
              cost: "low"
            }
          ]
        },
        {
          name: "Yard & Perimeter Lighting",
          vulns: [
            {
              id: "res-lgt-yard-dark",
              title: "Side and rear yards unlit",
              text: "The side yards and backyard have no lighting.",
              risk: "Dark yards hide approach to rear doors and windows, where many burglaries begin.",
              mits: [
                "Install motion-activated floodlights covering side yards and the backyard.",
                "Position lights high enough that they cannot be easily reached and unscrewed."
              ],
              risks: ["unauthorized-entry", "delayed-detection"],
              cost: "low"
            }
          ]
        },
        {
          name: "Light Quality & Glare",
          vulns: [
            {
              id: "res-lgt-glare",
              title: "Lights create glare or deep shadows",
              text: "Exterior lights are aimed outward or are very bright and unshielded, creating glare toward the street and deep shadows close to the house.",
              risk: "Glare can stop residents, neighbors, and cameras from seeing a person standing near the light, and can bother neighbors.",
              mits: [
                "Aim fixtures downward and toward the areas to be lit.",
                "Use shielded fixtures and even, moderate lighting rather than a single very bright light.",
                "Check camera images at night to make sure lights do not wash out the picture."
              ],
              risks: ["delayed-detection", "evidence-gap"],
              cost: "low"
            }
          ]
        },
        {
          name: "Maintenance & Backup",
          vulns: [
            {
              id: "res-lgt-burned-out",
              title: "Exterior bulbs burned out or broken",
              text: "Several exterior fixtures have burned-out bulbs or broken lenses.",
              risk: "Unrepaired lights leave dark areas and can suggest that the property is not closely maintained.",
              mits: [
                "Replace burned-out bulbs promptly, using long-life LED bulbs.",
                "Check all exterior lights monthly after dark.",
                "Use tamper-resistant fixtures where lights have been damaged before."
              ],
              risks: ["delayed-detection", "vandalism"],
              cost: "low"
            },
            {
              id: "res-lgt-no-backup",
              title: "No lighting during power outage",
              text: "The household has no exterior or path lighting that works during a power outage.",
              risk: "Outages leave the property dark and can make evacuation or movement at night unsafe.",
              mits: [
                "Keep flashlights or battery lanterns in each bedroom and near exits.",
                "Consider solar or battery-backed lights at key entries and paths."
              ],
              risks: ["life-safety", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Occupancy Appearance",
          vulns: [
            {
              id: "res-lgt-vacant-look",
              title: "Home appears empty during travel",
              text: "When the household travels, interior and exterior lights stay either fully off or on all the time.",
              risk: "Unchanging lights are an easy sign that no one is home.",
              mits: [
                "Use timers or smart lighting to turn interior lights on and off at varied times.",
                "Keep exterior lights on dusk-to-dawn sensors rather than leaving them on all day."
              ],
              risks: ["targeting", "theft"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-alarm",
      name: "Alarm & Monitored Security Systems",
      category: "Alarm & Monitored Security Systems",
      blurb: "Intrusion alarm equipment, monitoring, sensor coverage, and how the household uses the system day to day.",
      subs: [
        {
          name: "System Presence & Monitoring",
          vulns: [
            {
              id: "res-alm-none",
              title: "No intrusion alarm system installed",
              text: "The residence has no intrusion alarm system.",
              risk: "Without an alarm, a break-in may go unnoticed until residents return or wake, and no one is alerted to call for help.",
              mits: [
                "Install an intrusion alarm system covering all exterior doors and a main interior path.",
                "Consider professional monitoring so a central station can call police when an alarm occurs.",
                "If professional monitoring is not chosen, use a self-monitored system that sends alerts to several household phones."
              ],
              risks: ["delayed-detection", "delayed-response", "theft"],
              cost: "med"
            },
            {
              id: "res-alm-unmonitored",
              title: "Alarm sounds locally but is not monitored",
              text: "The alarm system sounds a siren but is not connected to a monitoring service or to household phones.",
              risk: "A local siren may be ignored by neighbors and does not ensure that anyone calls for help, especially when the household is away.",
              mits: [
                "Add professional central station monitoring (a staffed center that reviews alarms and dispatches help).",
                "At minimum, connect the system to an app that alerts several household members.",
                "Give the monitoring company a current call list with at least two contacts."
              ],
              risks: ["delayed-response"],
              cost: "low"
            },
            {
              id: "res-alm-not-used",
              title: "Alarm installed but rarely armed",
              text: "Household members report that the alarm is often not armed when they are away or asleep.",
              risk: "An alarm that is not armed provides no detection, and the household may still believe it is protected.",
              mits: [
                "Arm the system every time the home is empty and at bedtime using the home or stay mode.",
                "Use scheduled arming or reminders from the system app if available.",
                "Address the reasons the system is not used, such as false alarms or confusion about codes."
              ],
              risks: ["delayed-detection", "home-invasion"],
              cost: "low"
            }
          ]
        },
        {
          name: "Sensor Coverage",
          vulns: [
            {
              id: "res-alm-doors-uncovered",
              title: "Some exterior doors lack alarm contacts",
              text: "Not every exterior door, including garage, basement, and patio doors, has an opening contact on the alarm system.",
              risk: "Any door without a contact can be used to enter without setting off the alarm right away.",
              mits: [
                "Add contacts to every exterior door and the garage-to-house door.",
                "Consider a tilt sensor on the overhead garage door."
              ],
              risks: ["delayed-detection", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-alm-no-interior",
              title: "No interior motion or glass-break detection",
              text: "The system relies only on door contacts and has no interior motion detectors or glass-break sensors.",
              risk: "An intruder who enters through a window or by breaking glass may not be detected at all.",
              mits: [
                "Add motion detectors covering the main hallways and stairs that an intruder would need to pass through.",
                "Add glass-break sensors in rooms with large windows or sliding doors.",
                "Choose pet-tolerant motion detectors if the household has animals."
              ],
              risks: ["delayed-detection"],
              cost: "med"
            },
            {
              id: "res-alm-no-env-sensors",
              title: "No smoke, heat, or water sensors monitored",
              text: "The alarm system does not include monitored smoke, heat, carbon monoxide, or water leak sensors.",
              risk: "A fire or leak while the household is away or asleep may grow for a long time before anyone is alerted.",
              mits: [
                "Add monitored smoke and carbon monoxide detectors to the alarm system, in addition to standard household alarms.",
                "Add water leak sensors near water heaters, washing machines, and under sinks.",
                "Consider low-temperature sensors in homes at risk of frozen pipes."
              ],
              risks: ["life-safety", "natural-hazard"],
              cost: "low"
            }
          ]
        },
        {
          name: "Keypads & Codes",
          vulns: [
            {
              id: "res-alm-default-code",
              title: "Default or easily guessed alarm code",
              text: "The alarm uses the installer's default code or an obvious code such as the street number, a birthday, or 1234.",
              risk: "Easily guessed codes allow an intruder or former visitor to disarm the system.",
              mits: [
                "Change the master code and all user codes to codes that are not easily guessed.",
                "Give each household member and trusted helper a separate code.",
                "Delete codes for people who no longer need access."
              ],
              risks: ["unauthorized-entry", "insider"],
              cost: "low"
            },
            {
              id: "res-alm-keypad-visible",
              title: "Keypad status visible from outside",
              text: "The alarm keypad can be seen through a window or glass door, showing whether the system is armed.",
              risk: "An outsider can see when the system is disarmed or watch residents enter their code.",
              mits: [
                "Relocate the keypad or cover nearby glass with privacy film.",
                "Shield the keypad when entering the code."
              ],
              risks: ["surveillance", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-alm-no-duress",
              title: "No duress code set up",
              text: "The household has not set up a duress code (a special code that disarms the system while silently calling for help).",
              risk: "If a resident is forced to disarm the system, there is no way to call for help without the intruder knowing.",
              mits: [
                "Ask the alarm provider to set up a duress code if the system supports it.",
                "Teach adult household members when and how to use it.",
                "Confirm with the monitoring company how they respond to a duress signal."
              ],
              risks: ["home-invasion", "delayed-response"],
              cost: "low"
            }
          ]
        },
        {
          name: "Panic & Emergency Buttons",
          vulns: [
            {
              id: "res-alm-no-panic",
              title: "No panic button available",
              text: "The household has no panic button or app function to call for help quickly during an intrusion or medical emergency.",
              risk: "During a home invasion or medical emergency, finding and dialing a phone can take valuable time.",
              mits: [
                "Install panic buttons near the master bedroom and main living area, or carry a wireless panic pendant.",
                "Confirm that the system app includes a panic or emergency function and that household members know how to use it.",
                "Test panic signals with the monitoring company during scheduled tests."
              ],
              risks: ["home-invasion", "delayed-response", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Communication Path & Power",
          vulns: [
            {
              id: "res-alm-single-path",
              title: "Alarm communicates over one path only",
              text: "The alarm system sends signals only over a landline or only over home internet, with no cellular backup.",
              risk: "If the phone line or internet is cut or goes down, the system cannot report an alarm.",
              mits: [
                "Add a cellular communicator as a primary or backup path.",
                "Ask the monitoring company whether they receive a trouble signal when the communication path fails."
              ],
              risks: ["delayed-response", "sabotage"],
              cost: "low"
            },
            {
              id: "res-alm-battery-old",
              title: "Alarm backup battery old or failing",
              text: "The alarm panel's backup battery is several years old or the panel shows a low-battery trouble condition.",
              risk: "A weak battery may let the system shut down during a power outage, which is when it may be most needed.",
              mits: [
                "Replace the panel backup battery according to the manufacturer's schedule, commonly every few years.",
                "Replace wireless sensor batteries when low-battery warnings appear."
              ],
              risks: ["delayed-detection"],
              cost: "low"
            },
            {
              id: "res-alm-panel-exposed",
              title: "Alarm control panel easily reached",
              text: "The alarm control panel or main hub is located near the entry door or in an open, unlocked closet.",
              risk: "An intruder who finds the panel quickly may be able to damage it before it sends an alarm signal.",
              mits: [
                "Relocate the control panel or hub to a less obvious, interior location.",
                "Ask the provider about tamper alarms and crash-and-smash protection (a feature that reports an alarm even if the keypad is destroyed)."
              ],
              risks: ["sabotage", "delayed-response"],
              cost: "med"
            }
          ]
        },
        {
          name: "Testing & False Alarms",
          vulns: [
            {
              id: "res-alm-not-tested",
              title: "Alarm system not tested regularly",
              text: "The alarm system and its monitoring connection have not been tested in the past year.",
              risk: "Failed sensors, dead batteries, or communication problems may not be found until a real event.",
              mits: [
                "Test the system with the monitoring company at least once a year, and monthly if the system allows self-testing.",
                "Walk-test each sensor and confirm that each one reports correctly.",
                "Keep a short log of test dates and results."
              ],
              risks: ["delayed-detection", "delayed-response"],
              cost: "low"
            },
            {
              id: "res-alm-false-alarms",
              title: "Frequent false alarms",
              text: "The system has had repeated false alarms caused by pets, drafts, user error, or faulty sensors.",
              risk: "Frequent false alarms lead households to stop using the system and may result in local fines or reduced police response.",
              mits: [
                "Have the provider inspect and adjust or replace sensors that cause false alarms.",
                "Review arming and disarming steps with every user.",
                "Check whether the city requires an alarm permit and register the system if so."
              ],
              risks: ["delayed-response", "liability"],
              cost: "low"
            }
          ]
        },
        {
          name: "Contact List & Permits",
          vulns: [
            {
              id: "res-alm-call-list-old",
              title: "Monitoring call list out of date",
              text: "The monitoring company's call list includes old phone numbers, former residents, or only one contact.",
              risk: "The monitoring center may be unable to reach anyone, which can delay or prevent dispatch.",
              mits: [
                "Review and update the call list at least once a year and after any household change.",
                "Include at least two reachable contacts and a nearby keyholder.",
                "Confirm the verbal passcode each contact uses with the monitoring center."
              ],
              risks: ["delayed-response"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-cameras",
      name: "Cameras, Video Doorbells & Home Network Security",
      category: "Cameras, Video Doorbells & Home Network Security",
      blurb: "Home cameras and video doorbells, how video is stored and accessed, and the security of the home Wi-Fi and connected devices.",
      subs: [
        {
          name: "Camera Coverage",
          vulns: [
            {
              id: "res-cam-no-coverage",
              title: "No exterior camera coverage",
              text: "The residence has no exterior cameras or video doorbell.",
              risk: "Without video, the household cannot see who is at the door, cannot review suspicious activity, and has little evidence to give police after an incident.",
              mits: [
                "Install a video doorbell at the front door.",
                "Add cameras covering the driveway, rear yard, and any side gates.",
                "Choose equipment that records continuously or on motion and stores recordings for at least several days."
              ],
              risks: ["evidence-gap", "delayed-detection"],
              cost: "med"
            },
            {
              id: "res-cam-gaps",
              title: "Cameras miss key entry points",
              text: "Existing cameras cover the front of the home but not rear doors, side gates, or the backyard.",
              risk: "Many burglaries begin at rear or side entries that are out of public view and out of current camera coverage.",
              mits: [
                "Add cameras covering rear doors, sliding doors, and side gates.",
                "Walk the property and note every entry point to confirm each is in view of at least one camera."
              ],
              risks: ["evidence-gap", "delayed-detection"],
              cost: "med"
            },
            {
              id: "res-cam-poor-faces",
              title: "Cameras placed too high to identify faces",
              text: "Cameras are mounted high or at wide angles, showing the area but not producing images that could identify a person's face.",
              risk: "Video that shows only the tops of heads or distant figures is of limited use to police.",
              mits: [
                "Place at least one camera at each main entry at about head height or slightly above, aimed at the approach.",
                "Check sample footage in daylight and at night to confirm faces can be recognized."
              ],
              risks: ["evidence-gap"],
              cost: "low"
            }
          ]
        },
        {
          name: "Recording & Storage",
          vulns: [
            {
              id: "res-cam-no-recording",
              title: "Cameras view live but do not record",
              text: "Cameras or doorbells provide live view but are not set up to record, or the household has no recording subscription.",
              risk: "Events that are not watched live are lost.",
              mits: [
                "Enable recording through a subscription or local storage device.",
                "Confirm the retention period and set it to at least several days."
              ],
              risks: ["evidence-gap"],
              cost: "low"
            },
            {
              id: "res-cam-recorder-exposed",
              title: "Video recorder easily found and removed",
              text: "The local video recorder or storage device sits in an open, easily found location with no backup copy.",
              risk: "An intruder can take or destroy the recorder and with it all recorded evidence.",
              mits: [
                "Place the recorder in a concealed or locked location.",
                "Enable cloud backup of key camera footage if available."
              ],
              risks: ["evidence-gap", "sabotage"],
              cost: "low"
            },
            {
              id: "res-cam-no-export",
              title: "Household unable to export footage",
              text: "No household member knows how to find, save, and share a video clip from the camera system.",
              risk: "Footage may be overwritten before it is saved, or police may be unable to get a usable copy.",
              mits: [
                "Practice locating and downloading a clip from each camera.",
                "Write short instructions for exporting footage and keep them with household documents."
              ],
              risks: ["evidence-gap"],
              cost: "low"
            }
          ]
        },
        {
          name: "Camera Accounts & Privacy",
          vulns: [
            {
              id: "res-cam-weak-account",
              title: "Camera account lacks strong password and 2FA",
              text: "The camera or doorbell account uses a reused or weak password and does not have two-factor authentication (a second login step such as a code sent to a phone).",
              risk: "Camera accounts that are taken over allow others to watch the household, learn routines, and delete footage.",
              mits: [
                "Set a unique, strong password for every camera and doorbell account.",
                "Turn on two-factor authentication for each account.",
                "Review the list of users and devices with access to the account and remove any that are not recognized."
              ],
              risks: ["info-compromise", "surveillance", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-cam-indoor-exposure",
              title: "Indoor cameras record private areas",
              text: "Indoor cameras view bedrooms, bathrooms, or other private living areas and are always on.",
              risk: "If accessed by someone else, indoor video exposes private family life and routines. Recording others in private areas may also raise legal issues.",
              mits: [
                "Limit indoor cameras to entry areas and common spaces.",
                "Use privacy modes or schedules that turn indoor cameras off when the household is home.",
                "Inform guests and household staff of any indoor cameras as local law requires."
              ],
              risks: ["info-compromise", "liability", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-cam-shared-access",
              title: "Former users still have camera access",
              text: "Camera and doorbell accounts are still shared with former staff, former partners, or people who no longer live in the home.",
              risk: "People who no longer need access can continue to watch the home and its occupants.",
              mits: [
                "Remove shared access for anyone who no longer needs it.",
                "Change account passwords after removing shared users.",
                "Review shared access quarterly."
              ],
              risks: ["insider", "surveillance", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Video Doorbell Use",
          vulns: [
            {
              id: "res-cam-doorbell-not-used",
              title: "Doorbell alerts ignored or turned off",
              text: "The video doorbell is installed but motion alerts are turned off or routinely ignored.",
              risk: "Residents may not notice people approaching or loitering near the door.",
              mits: [
                "Adjust motion zones and sensitivity so alerts are useful rather than constant.",
                "Use the two-way talk feature to speak to visitors instead of opening the door."
              ],
              risks: ["delayed-detection", "home-invasion"],
              cost: "low"
            }
          ]
        },
        {
          name: "Home Router & Wi-Fi",
          vulns: [
            {
              id: "res-net-default-router",
              title: "Router uses default administrator password",
              text: "The home router's administrator login is still the default username and password printed on the device.",
              risk: "Default router logins are widely published. Someone on or near the network could change settings, watch traffic, or lock out the household.",
              mits: [
                "Change the router administrator password to a strong, unique password.",
                "Turn off remote administration unless it is needed.",
                "Store the router login with other household records."
              ],
              risks: ["info-compromise", "identity-theft"],
              cost: "low"
            },
            {
              id: "res-net-weak-wifi",
              title: "Wi-Fi uses weak or outdated encryption",
              text: "The home Wi-Fi uses an outdated security setting or a short, easily guessed password.",
              risk: "Weak Wi-Fi security allows nearby people to join the network and reach cameras, computers, and smart devices.",
              mits: [
                "Set Wi-Fi security to WPA3 or, if not available, WPA2 with AES.",
                "Use a long Wi-Fi password that is not shared publicly.",
                "Change the Wi-Fi password after staff or long-term guests leave."
              ],
              risks: ["info-compromise"],
              cost: "low"
            },
            {
              id: "res-net-firmware-old",
              title: "Router firmware out of date",
              text: "The home router is running old firmware (the device's built-in software) or is a model the manufacturer no longer supports.",
              risk: "Federal guidance from CISA and the FBI notes that out-of-date and unsupported routers are commonly attacked because their security flaws are known and not fixed.",
              mits: [
                "Turn on automatic firmware updates if the router supports them.",
                "Replace routers that no longer receive security updates.",
                "Check for updates at least every few months if automatic updates are not available."
              ],
              risks: ["info-compromise"],
              cost: "low"
            }
          ]
        },
        {
          name: "Smart Home & IoT Devices",
          vulns: [
            {
              id: "res-net-iot-same-network",
              title: "Smart devices share network with computers",
              text: "Cameras, smart speakers, thermostats, and other connected devices are on the same Wi-Fi network as the household's computers and phones.",
              risk: "If one device is compromised, the attacker may be able to reach other devices on the same network.",
              mits: [
                "Put smart home devices on a separate guest or device network if the router allows.",
                "Keep work and personal computers on the main network only."
              ],
              risks: ["info-compromise"],
              cost: "low"
            },
            {
              id: "res-net-iot-defaults",
              title: "Smart devices use default settings and passwords",
              text: "Smart locks, cameras, and other connected devices still have default passwords or have never been updated.",
              risk: "Default settings are widely known and can allow outsiders to control locks, view cameras, or use the device to attack the network.",
              mits: [
                "Change default passwords on every connected device.",
                "Turn on automatic updates for each device.",
                "Remove or turn off devices that are no longer used."
              ],
              risks: ["info-compromise", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "res-net-no-inventory",
              title: "No list of connected devices",
              text: "The household does not have a list of devices connected to the home network.",
              risk: "Unknown devices cannot be updated or secured, and an unauthorized device may go unnoticed.",
              mits: [
                "Review the router's list of connected devices and identify each one.",
                "Keep a simple list of devices, their accounts, and their update status.",
                "Remove any device that cannot be identified and change the Wi-Fi password."
              ],
              risks: ["info-compromise"],
              cost: "low"
            }
          ]
        },
        {
          name: "Accounts & Personal Devices",
          vulns: [
            {
              id: "res-net-no-2fa",
              title: "Key accounts lack two-factor authentication",
              text: "Household email, banking, and smart home accounts do not use two-factor authentication.",
              risk: "Email accounts are often used to reset other passwords, so a single stolen password can expose many accounts.",
              mits: [
                "Turn on two-factor authentication for email, banking, and smart home accounts.",
                "Use an authenticator app rather than text messages where offered.",
                "Use a password manager to create and store unique passwords."
              ],
              risks: ["identity-theft", "info-compromise"],
              cost: "low"
            },
            {
              id: "res-net-kids-devices",
              title: "Children's devices lack controls and location limits",
              text: "Children's phones, tablets, and game systems have no parental controls and share location or allow contact from strangers.",
              risk: "Children may share location, photos, or routines with strangers or be contacted by people seeking to harm them.",
              mits: [
                "Turn on parental controls and limit contact to approved people.",
                "Review location sharing settings on each child's device.",
                "Talk with children about not sharing their address, school, or schedule online."
              ],
              risks: ["child-safety", "info-compromise"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-saferoom",
      name: "Safe Room / Panic Room & Valuables Storage",
      category: "Safe Room / Panic Room & Valuables Storage",
      blurb: "A designated room for sheltering during an intrusion or severe weather, and how valuables, documents, and firearms are stored.",
      subs: [
        {
          name: "Designated Safe Room",
          vulns: [
            {
              id: "res-sfr-none",
              title: "No designated safe room",
              text: "The household has not designated an interior room to retreat to during a home invasion.",
              risk: "Without a planned retreat location, household members may scatter or confront an intruder instead of moving to a secure place and calling for help.",
              mits: [
                "Designate an interior room, often the primary bedroom or a walk-in closet, as the household safe room.",
                "Upgrade its door to a solid-core door with a deadbolt and reinforced frame.",
                "Agree on how each family member will reach the room from their bedroom."
              ],
              risks: ["home-invasion", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-sfr-unequipped",
              title: "Safe room lacks phone and supplies",
              text: "The designated safe room has no charged phone, flashlight, first aid kit, or list of emergency numbers.",
              risk: "Residents who reach the room may be unable to call for help or treat injuries.",
              mits: [
                "Keep a charged cell phone or a phone that can call 911 in the room.",
                "Store a flashlight, first aid kit, water, and a list of emergency contacts.",
                "Consider a panic button or alarm keypad inside the room."
              ],
              risks: ["delayed-response", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-sfr-not-practiced",
              title: "Safe room plan not practiced",
              text: "Household members, including children, have not practiced moving to the safe room.",
              risk: "Under stress, people follow what they have practiced. An unpracticed plan may not be used.",
              mits: [
                "Walk through the safe room plan with all household members, using calm, age-appropriate language for children.",
                "Review the plan when household members or the floor plan changes."
              ],
              risks: ["home-invasion", "child-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Severe Weather Shelter",
          vulns: [
            {
              id: "res-sfr-no-storm-shelter",
              title: "No tornado or high-wind shelter identified",
              text: "In an area with tornado or hurricane risk, the household has no shelter built to FEMA P-320 guidance and has not identified the best interior refuge.",
              risk: "FEMA P-320 explains that standard homes are not built to withstand extreme winds. Without a safe room or a planned interior refuge, occupants are more exposed to injury.",
              mits: [
                "Identify the best available refuge, such as a basement or small interior room on the lowest floor without windows.",
                "Consider a safe room designed and built to FEMA P-320 and ICC 500 (the national standard for storm shelters).",
                "Check whether state or local programs offer safe room grants or rebates."
              ],
              risks: ["natural-hazard", "life-safety"],
              cost: "high"
            }
          ]
        },
        {
          name: "Safes & Valuables",
          vulns: [
            {
              id: "res-sfr-no-safe",
              title: "Valuables kept without a safe",
              text: "Jewelry, cash, passports, and other valuables are kept in dresser drawers, closets, or other common hiding places.",
              risk: "Burglars typically search the primary bedroom first, and these locations are quickly checked.",
              mits: [
                "Store valuables in a safe rated for burglary resistance and, for documents, fire resistance.",
                "Consider a bank safe deposit box for items that are rarely needed."
              ],
              risks: ["theft", "identity-theft"],
              cost: "med"
            },
            {
              id: "res-sfr-safe-unanchored",
              title: "Safe not bolted down",
              text: "A small or medium safe is not bolted to the floor or wall.",
              risk: "An unanchored safe can be carried away and opened later.",
              mits: [
                "Bolt the safe to the floor or wall according to the manufacturer's instructions.",
                "Place the safe in a less obvious location than the primary bedroom closet if possible."
              ],
              risks: ["theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Firearm Storage",
          vulns: [
            {
              id: "res-sfr-firearms-unsecured",
              title: "Firearms stored unlocked",
              text: "Firearms in the home are stored unlocked or loaded in locations that children or visitors could reach.",
              risk: "Unsecured firearms present a risk of accidental injury, especially to children, and are a high-value target for burglars.",
              mits: [
                "Store firearms unloaded in a locked safe or lockbox when not in use.",
                "Store ammunition separately and locked.",
                "Use cable or trigger locks as an added measure.",
                "Review state laws on safe storage and child access."
              ],
              risks: ["child-safety", "theft", "liability"],
              cost: "low"
            }
          ]
        },
        {
          name: "Important Documents",
          vulns: [
            {
              id: "res-sfr-docs-unprotected",
              title: "Key documents unprotected from fire and theft",
              text: "Passports, birth certificates, Social Security cards, deeds, and insurance papers are kept in an unlocked file or drawer with no copies elsewhere.",
              risk: "Loss of these documents to theft or fire creates a risk of identity theft and delays recovery.",
              mits: [
                "Store originals in a fire-resistant safe or a safe deposit box.",
                "Keep encrypted digital copies in a secure cloud account or with a trusted person.",
                "Shred old documents that contain personal information."
              ],
              risks: ["identity-theft", "theft"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-deliveries",
      name: "Deliveries, Mail & Package Security",
      category: "Deliveries, Mail & Package Security",
      blurb: "How mail, packages, and food or service deliveries reach the household and how they are protected.",
      subs: [
        {
          name: "Package Deliveries",
          vulns: [
            {
              id: "res-dlv-porch-visible",
              title: "Packages left in view on porch",
              text: "Packages are regularly left on the front porch in plain view of the street for hours before anyone collects them.",
              risk: "Packages visible from the street are easy targets for theft and show when the household is away.",
              mits: [
                "Use a locking package box or a delivery locker for regular deliveries.",
                "Ship packages to a carrier pickup location, a workplace, or a trusted neighbor when no one will be home.",
                "Use carrier delivery instructions to place packages out of view."
              ],
              risks: ["package-theft", "theft"],
              cost: "low"
            },
            {
              id: "res-dlv-no-tracking",
              title: "Deliveries not tracked or confirmed",
              text: "The household does not use delivery notifications and is often unaware when a package has arrived.",
              risk: "Packages may sit outside unnoticed, and stolen packages may not be reported in time for the seller or carrier to help.",
              mits: [
                "Enable delivery notifications from carriers and retailers.",
                "Sign up for USPS Informed Delivery to see incoming mail and packages in advance.",
                "Require a signature for high-value shipments."
              ],
              risks: ["package-theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Mailbox Security",
          vulns: [
            {
              id: "res-dlv-mailbox-unlocked",
              title: "Mailbox unlocked and at the curb",
              text: "Mail is delivered to an unlocked curbside mailbox and may sit there for hours.",
              risk: "Mail contains bank statements, checks, and personal details that can be used for identity theft and fraud.",
              mits: [
                "Install a locking mailbox that meets USPS requirements.",
                "Collect mail promptly each day.",
                "Use online statements and electronic payments to reduce sensitive mail."
              ],
              risks: ["identity-theft", "theft"],
              cost: "low"
            },
            {
              id: "res-dlv-outgoing-flag",
              title: "Outgoing payments left in mailbox",
              text: "Outgoing checks and bill payments are placed in the curbside mailbox with the flag raised.",
              risk: "A raised flag signals outgoing mail, and checks can be stolen and altered. USPS advises depositing outgoing mail inside a post office or handing it to a carrier.",
              mits: [
                "Mail checks and sensitive items inside a post office or hand them to a carrier.",
                "Use electronic bill pay when possible."
              ],
              risks: ["identity-theft", "theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Delivery Personnel at the Door",
          vulns: [
            {
              id: "res-dlv-door-opened",
              title: "Door opened to unverified delivery persons",
              text: "Household members open the door to anyone who says they have a delivery, without checking first.",
              risk: "Posing as a delivery driver is a known method used to get a resident to open the door.",
              mits: [
                "Check video or a viewer before opening the door, and ask unexpected drivers to leave packages outside.",
                "Teach children never to open the door for deliveries.",
                "Use a secondary door or package box so the main door does not need to be opened."
              ],
              risks: ["home-invasion", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-dlv-instructions-reveal",
              title: "Delivery instructions reveal access details",
              text: "Delivery app notes or instructions include gate codes, garage codes, or statements that no one is home.",
              risk: "Delivery instructions may be seen by many drivers and by anyone with access to the account.",
              mits: [
                "Remove access codes and occupancy details from delivery instructions.",
                "Use temporary codes for delivery access if the gate or lock supports it."
              ],
              risks: ["unauthorized-entry", "info-compromise"],
              cost: "low"
            }
          ]
        },
        {
          name: "Suspicious Packages & Mail",
          vulns: [
            {
              id: "res-dlv-no-suspicious-plan",
              title: "No guidance on suspicious mail or packages",
              text: "The household has no guidance on what to do if a package or letter arrives that is unexpected, unusual, or threatening.",
              risk: "Handling or opening a suspicious item can put household members at risk and destroy evidence.",
              mits: [
                "Agree that unexpected or unusual items are not opened and are left where they are.",
                "Move people away from the item and call 911 if it appears dangerous.",
                "Report threatening mail to the U.S. Postal Inspection Service and local police."
              ],
              risks: ["explosive-threat", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Travel & Mail Holds",
          vulns: [
            {
              id: "res-dlv-no-hold",
              title: "Mail and deliveries pile up during travel",
              text: "When the household travels, mail and packages are not held or collected and accumulate at the home.",
              risk: "Piled-up mail and packages are a clear sign that the home is empty.",
              mits: [
                "Request a USPS mail hold for trips.",
                "Pause deliveries and subscriptions while away.",
                "Ask a trusted neighbor to collect anything that arrives."
              ],
              risks: ["targeting", "package-theft"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-staff",
      name: "Household Staff, Guests & Service Provider Screening",
      category: "Household Staff, Guests & Service Provider Screening",
      blurb: "Nannies, housekeepers, contractors, and guests who are given access to the home, and how that access is screened and controlled.",
      subs: [
        {
          name: "Hiring & Background Checks",
          vulns: [
            {
              id: "res-stf-no-screening",
              title: "Household staff not screened before hire",
              text: "Nannies, housekeepers, caregivers, or other regular staff were hired without reference checks or a background check.",
              risk: "Staff have regular, unsupervised access to the home, the family's schedule, and often children. Lack of screening leaves the household unaware of relevant history.",
              mits: [
                "Check references and verify past employment before hiring.",
                "Conduct a background check through a reputable screening company, with the applicant's written consent and in line with federal and state law.",
                "For childcare staff, check state registries where available."
              ],
              risks: ["insider", "theft", "child-safety"],
              cost: "low"
            },
            {
              id: "res-stf-agency-unverified",
              title: "Agency screening practices not confirmed",
              text: "Staff were placed by an agency, and the household has not confirmed what screening the agency performs.",
              risk: "Agency screening varies widely, and the household may assume checks were done that were not.",
              mits: [
                "Ask the agency in writing what screening is done and how often it is repeated.",
                "Request confirmation that the agency carries insurance and bonding for placed staff."
              ],
              risks: ["insider", "liability"],
              cost: "low"
            }
          ]
        },
        {
          name: "Access Control for Staff",
          vulns: [
            {
              id: "res-stf-full-access",
              title: "Staff given full, permanent access",
              text: "Household staff have keys, alarm codes, and access to all areas of the home at all times.",
              risk: "Unlimited access increases the chance of theft or misuse and makes it hard to know who entered when.",
              mits: [
                "Give staff individual codes that work only during their working hours.",
                "Lock offices, safes, and other private areas staff do not need to enter.",
                "Review alarm or smart lock logs periodically."
              ],
              risks: ["insider", "theft"],
              cost: "low"
            },
            {
              id: "res-stf-no-offboarding",
              title: "No process when staff leave",
              text: "There is no checklist for collecting keys, removing codes, and changing passwords when a staff member leaves.",
              risk: "Former staff may keep access to the home, cameras, or Wi-Fi.",
              mits: [
                "Create a departure checklist covering keys, alarm codes, gate codes, camera and smart home access, and Wi-Fi passwords.",
                "Rekey locks if keys cannot be recovered."
              ],
              risks: ["insider", "unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Contractors & Service Providers",
          vulns: [
            {
              id: "res-stf-contractors-unsupervised",
              title: "Contractors left alone in the home",
              text: "Repair workers, cleaners, and other service providers are left alone in the home with access to all rooms.",
              risk: "Unsupervised workers can see where valuables are kept, learn the layout, or take items.",
              mits: [
                "Have an adult present when service providers are in the home when practical.",
                "Secure valuables, documents, and medications before visits.",
                "Use established, licensed, and insured companies."
              ],
              risks: ["theft", "insider"],
              cost: "low"
            },
            {
              id: "res-stf-unverified-arrivals",
              title: "Unannounced workers allowed in",
              text: "People claiming to be from a utility, city office, or service company have been let into the home without verifying their identity.",
              risk: "Posing as a utility worker or inspector is a known method used to enter homes, especially homes of older adults.",
              mits: [
                "Do not admit unscheduled workers. Call the company using a number from a bill or its website, not one the visitor provides.",
                "Ask to see identification and confirm the work order before opening the door."
              ],
              risks: ["home-invasion", "theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Guests & Short-Term Visitors",
          vulns: [
            {
              id: "res-stf-guest-codes",
              title: "Guests given permanent codes or keys",
              text: "Visiting family, house sitters, or short-term rental guests were given permanent codes or keys.",
              risk: "Access given for a short visit often remains active long after it is needed.",
              mits: [
                "Use temporary codes that expire after the visit.",
                "Recover keys and change any shared codes after guests leave."
              ],
              risks: ["unauthorized-entry", "insider"],
              cost: "low"
            }
          ]
        },
        {
          name: "Confidentiality & Information Sharing",
          vulns: [
            {
              id: "res-stf-overshare",
              title: "Staff share household details publicly",
              text: "Household staff have not been asked to avoid sharing the family's schedule, location, travel, or photos of the home online or with others.",
              risk: "Information about routines, travel, and the home's interior can be used to plan a crime or target the family.",
              mits: [
                "Explain to staff, in writing, what information should not be shared.",
                "Ask staff not to post photos of the home, children, or family activities.",
                "Consider a written confidentiality agreement for long-term staff."
              ],
              risks: ["info-compromise", "targeting"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-emergency",
      name: "Family Emergency & Fire/Life Safety Planning",
      category: "Family Emergency & Fire/Life Safety Planning",
      blurb: "Smoke and carbon monoxide alarms, fire escape plans, emergency supplies, communication plans, and household response to emergencies.",
      subs: [
        {
          name: "Smoke Alarms",
          vulns: [
            {
              id: "res-emg-smoke-missing",
              title: "Smoke alarms missing from required locations",
              text: "Smoke alarms are not installed inside each bedroom, outside each sleeping area, and on every level of the home.",
              risk: "NFPA guidance calls for smoke alarms in each of these locations. Missing alarms can delay warning of a fire, especially at night.",
              mits: [
                "Install smoke alarms inside every bedroom, outside each sleeping area, and on every level including the basement.",
                "Consider interconnected alarms so that when one sounds, all sound.",
                "Follow the manufacturer's guidance on placement away from kitchens and bathrooms to reduce nuisance alarms."
              ],
              risks: ["life-safety"],
              cost: "low"
            },
            {
              id: "res-emg-smoke-untested",
              title: "Smoke alarms not tested or expired",
              text: "Smoke alarms have not been tested recently, have missing batteries, or are more than ten years old.",
              risk: "NFPA advises testing alarms monthly and replacing them every ten years. An expired or untested alarm may not work in a fire.",
              mits: [
                "Test every smoke alarm monthly using the test button.",
                "Replace any smoke alarm that is more than ten years old, based on the date on the back.",
                "Replace batteries according to the manufacturer's instructions."
              ],
              risks: ["life-safety"],
              cost: "low"
            },
            {
              id: "res-emg-hearing-impaired",
              title: "Alarms not suited to all occupants",
              text: "A household member who is deaf or hard of hearing, or a deep sleeper such as a young child, may not be woken by standard smoke alarms.",
              risk: "Not everyone wakes to a standard alarm sound, which can delay escape.",
              mits: [
                "Install alarms with strobe lights or bed shakers for household members who are deaf or hard of hearing.",
                "Assign an adult to wake young children during an alarm and practice this in drills."
              ],
              risks: ["life-safety", "child-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Carbon Monoxide & Fire Equipment",
          vulns: [
            {
              id: "res-emg-no-co",
              title: "No carbon monoxide alarms installed",
              text: "The home has gas appliances, a fireplace, or an attached garage but no carbon monoxide alarms.",
              risk: "Carbon monoxide has no smell or color and can cause illness or death without warning.",
              mits: [
                "Install carbon monoxide alarms outside each sleeping area and on every level.",
                "Have fuel-burning appliances and chimneys inspected each year.",
                "Never run vehicles, generators, or grills in the garage or indoors."
              ],
              risks: ["life-safety"],
              cost: "low"
            },
            {
              id: "res-emg-no-extinguisher",
              title: "No fire extinguisher or not usable",
              text: "The home has no fire extinguisher, or extinguishers are expired, discharged, or stored where they cannot be quickly reached.",
              risk: "A small fire that could be put out quickly may grow if no extinguisher is at hand.",
              mits: [
                "Keep a multi-purpose extinguisher in the kitchen, garage, and on each level.",
                "Check gauges monthly and replace extinguishers as the label directs.",
                "Show adults how to use an extinguisher and remind everyone that getting out comes first."
              ],
              risks: ["life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Fire Escape Plan",
          vulns: [
            {
              id: "res-emg-no-escape-plan",
              title: "No home fire escape plan",
              text: "The household has no fire escape plan showing two ways out of each room and an outside meeting place.",
              risk: "NFPA guidance stresses that a home fire can leave only a few minutes to escape. Without a plan, occupants may lose time or go back inside.",
              mits: [
                "Draw a floor plan marking two exits from every room and a meeting place outside.",
                "Make sure windows and doors on escape routes open easily.",
                "Teach everyone to get out, stay out, and call 911 from outside."
              ],
              risks: ["life-safety"],
              cost: "low"
            },
            {
              id: "res-emg-no-drills",
              title: "Fire drills not practiced",
              text: "The household has not practiced a fire drill in the past year.",
              risk: "Children and adults who have practiced are more likely to leave quickly and correctly.",
              mits: [
                "Practice a home fire drill at least twice a year, including once at night.",
                "Practice using second exits, such as windows, where it is safe to do so."
              ],
              risks: ["life-safety", "child-safety"],
              cost: "low"
            },
            {
              id: "res-emg-upper-no-ladder",
              title: "Upper-floor bedrooms lack escape ladders",
              text: "Upper-floor bedrooms have no escape ladder for use if the stairs are blocked.",
              risk: "If the stairway fills with smoke, occupants of upper floors may have no second way out.",
              mits: [
                "Keep a listed escape ladder in each upper-floor bedroom.",
                "Show household members how to set up the ladder, without climbing it during practice unless safe."
              ],
              risks: ["life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Family Communication Plan",
          vulns: [
            {
              id: "res-emg-no-comm-plan",
              title: "No family emergency communication plan",
              text: "The household has no written plan for how members will contact each other and where they will meet if separated during an emergency.",
              risk: "Ready.gov notes that families may not be together when an emergency happens, and phone networks may be overloaded.",
              mits: [
                "Create a written family communication plan using the Ready.gov template or similar.",
                "Choose an out-of-area contact everyone can call or text.",
                "Name a meeting place near home and one outside the neighborhood."
              ],
              risks: ["life-safety", "delayed-response"],
              cost: "low"
            },
            {
              id: "res-emg-school-pickup",
              title: "School and childcare pickup plan not set",
              text: "The household has not confirmed school and childcare emergency procedures or who is authorized to pick up the children.",
              risk: "In an emergency, children may be released only to authorized adults, and confusion can delay reunion.",
              mits: [
                "Review the emergency and reunification plans of each school and childcare provider.",
                "Keep the authorized pickup list current and include a backup adult.",
                "Tell children who will pick them up in an emergency."
              ],
              risks: ["child-safety"],
              cost: "low"
            },
            {
              id: "res-emg-contacts-only-phone",
              title: "Emergency contacts stored only in phones",
              text: "Emergency phone numbers are kept only in mobile phones, and children do not know key numbers.",
              risk: "If a phone is lost, broken, or out of power, the household may be unable to reach each other.",
              mits: [
                "Keep a printed contact card in each wallet, backpack, and vehicle.",
                "Have children memorize at least one parent's number."
              ],
              risks: ["delayed-response", "child-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Emergency Supplies",
          vulns: [
            {
              id: "res-emg-no-kit",
              title: "No emergency supply kit",
              text: "The household has no emergency kit with water, food, medications, lights, and a radio.",
              risk: "After a storm or other disaster, the household may need to stay home without power or services for several days.",
              mits: [
                "Assemble an emergency kit based on the Ready.gov list, including water, food, light, radio, and first aid.",
                "Include several days of prescription medications and copies of key documents.",
                "Check and refresh the kit every six months."
              ],
              risks: ["natural-hazard", "life-safety"],
              cost: "low"
            },
            {
              id: "res-emg-no-first-aid",
              title: "No trained first aid responder in household",
              text: "No adult in the household has current first aid, CPR, or bleeding control training.",
              risk: "Injuries from accidents, falls, or violence may need immediate care before responders arrive.",
              mits: [
                "Have adults take a first aid and CPR course from a recognized provider.",
                "Consider a Stop the Bleed course for bleeding control.",
                "Keep a well-stocked first aid kit in the home and each vehicle."
              ],
              risks: ["life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Utilities & Shutoffs",
          vulns: [
            {
              id: "res-emg-shutoffs-unknown",
              title: "Utility shutoffs not known or labeled",
              text: "Adults in the household do not know where to shut off the water, gas, and electricity, or the shutoffs are blocked.",
              risk: "Being unable to quickly shut off utilities can increase damage from leaks, gas odors, or electrical hazards.",
              mits: [
                "Locate and label the main water valve, gas shutoff, and electrical panel.",
                "Keep any needed shutoff tool next to the gas meter.",
                "Show all adults how to shut off each utility, and call the gas company before turning gas back on."
              ],
              risks: ["life-safety", "natural-hazard"],
              cost: "low"
            },
            {
              id: "res-emg-generator-unsafe",
              title: "Portable generator used unsafely",
              text: "A portable generator is used in or near the garage, or near open windows and doors.",
              risk: "Generator exhaust contains carbon monoxide that can build up quickly indoors.",
              mits: [
                "Run portable generators outdoors only, well away from doors, windows, and vents.",
                "Install carbon monoxide alarms on every level.",
                "Use a licensed electrician to connect any generator to the home's wiring."
              ],
              risks: ["life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Medical & Special Needs",
          vulns: [
            {
              id: "res-emg-medical-info",
              title: "Medical information not available in emergency",
              text: "Medical conditions, medications, and allergies of household members are not written down for responders.",
              risk: "Responders treating an unconscious or distressed person may lack key information.",
              mits: [
                "Keep a medical information sheet for each household member with the emergency kit.",
                "Fill in the medical ID feature on each smartphone."
              ],
              risks: ["life-safety"],
              cost: "low"
            },
            {
              id: "res-emg-special-needs",
              title: "Plan does not cover members with special needs",
              text: "The emergency plan does not address household members who have limited mobility, rely on powered medical equipment, or have pets.",
              risk: "These members may need extra time, help, or supplies to shelter or evacuate safely.",
              mits: [
                "Assign a specific adult to assist each person who needs help during an evacuation.",
                "Plan backup power for medical equipment and register with the utility's medical needs program if offered.",
                "Include pets and their supplies in the evacuation plan."
              ],
              risks: ["life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Home Invasion Response",
          vulns: [
            {
              id: "res-emg-no-intrusion-plan",
              title: "No plan for intruder in the home",
              text: "The household has not discussed what to do if an intruder enters while family members are home.",
              risk: "Without a plan, family members may confront the intruder or become separated rather than moving to safety and calling for help.",
              mits: [
                "Agree on a plan: move to the safe room, lock the door, call 911, and stay until police arrive.",
                "Decide who will gather the children and how.",
                "Discuss what to tell the 911 dispatcher, including the address and where family members are located."
              ],
              risks: ["home-invasion", "personal-safety"],
              cost: "low"
            },
            {
              id: "res-emg-children-home-alone",
              title: "No rules for children home alone",
              text: "Children who are sometimes home alone have no clear rules about answering the door, the phone, or what to do in an emergency.",
              risk: "Children may open the door to strangers or not know how to get help.",
              mits: [
                "Set rules that children do not open the door or tell callers they are alone.",
                "Practice calling 911 and stating the home address.",
                "Identify a trusted neighbor children can go to for help."
              ],
              risks: ["child-safety", "home-invasion"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-pool",
      name: "Pool, Outdoor Amenities & Attractive Nuisance",
      category: "Pool, Outdoor Amenities & Attractive Nuisance",
      blurb: "Pools, spas, trampolines, playsets, and other features that can draw children or visitors and create injury or liability concerns.",
      subs: [
        {
          name: "Pool Barriers",
          vulns: [
            {
              id: "res-pol-no-barrier",
              title: "Pool not fully enclosed by barrier",
              text: "The pool or spa is not separated from the house and yard by a fence or barrier on all sides.",
              risk: "CPSC pool safety guidance identifies a barrier on all sides of the pool as a key layer of protection against child drowning. Without it, a child can reach the water directly from the house or yard.",
              mits: [
                "Install a fence on all four sides of the pool, separating it from the house and yard, following CPSC barrier guidance and local code.",
                "Choose a design that is difficult for children to climb, with no handholds or footholds.",
                "Check local building code requirements for pool barrier height and gate hardware."
              ],
              risks: ["child-safety", "life-safety", "liability"],
              cost: "high"
            },
            {
              id: "res-pol-gate-not-self-closing",
              title: "Pool gate not self-closing and self-latching",
              text: "The pool gate does not close and latch by itself, or the latch is low enough for a child to reach.",
              risk: "A gate that is left open or easily opened by a child removes the protection the fence provides.",
              mits: [
                "Install self-closing, self-latching hardware on every pool gate, with the latch placed out of children's reach.",
                "Make sure gates open outward, away from the pool.",
                "Test the gate closing and latching regularly."
              ],
              risks: ["child-safety", "life-safety"],
              cost: "low"
            },
            {
              id: "res-pol-house-door-direct",
              title: "House doors open directly to pool",
              text: "Doors from the house open directly into the pool area with no alarm or barrier between them and the water.",
              risk: "Children can leave the house and reach the pool quickly without adults noticing.",
              mits: [
                "Install door alarms that sound when doors leading to the pool are opened.",
                "Add self-closing hardware and high latches to these doors.",
                "Consider a removable mesh fence or power safety cover as an added layer."
              ],
              risks: ["child-safety", "life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Pool Alarms, Covers & Drains",
          vulns: [
            {
              id: "res-pol-no-alarm-cover",
              title: "No pool alarm or safety cover",
              text: "The pool has no water alarm, gate alarm, or safety cover.",
              risk: "CPSC guidance recommends layers of protection. Alarms and covers provide warning or a barrier if other layers fail.",
              mits: [
                "Install a pool alarm that sounds when something enters the water.",
                "Consider a safety cover that meets the ASTM standard for pool safety covers when the pool is not in use.",
                "Add alarms to gates and doors leading to the pool."
              ],
              risks: ["child-safety", "life-safety"],
              cost: "med"
            },
            {
              id: "res-pol-drain-covers",
              title: "Pool or spa drain covers not confirmed compliant",
              text: "The household cannot confirm that pool and spa drain covers are anti-entrapment covers that meet current federal safety requirements.",
              risk: "Older or broken drain covers can trap hair, limbs, or bodies under strong suction.",
              mits: [
                "Have a pool professional confirm that drain covers meet the Virginia Graeme Baker Pool and Spa Safety Act requirements.",
                "Replace broken, loose, or missing drain covers before using the pool.",
                "Teach children to stay away from drains."
              ],
              risks: ["child-safety", "life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Supervision & Water Safety",
          vulns: [
            {
              id: "res-pol-no-watcher",
              title: "No designated adult watching swimmers",
              text: "When children swim, no specific adult is assigned to watch the water without distraction.",
              risk: "Drowning can happen quickly and quietly. CPSC's Pool Safely campaign recommends a designated water watcher.",
              mits: [
                "Assign a water watcher, an adult who watches swimmers without phones or other distractions, and rotate the role.",
                "Keep a phone and rescue equipment, such as a ring buoy or reaching pole, at the pool.",
                "Encourage swim lessons for children and adults."
              ],
              risks: ["child-safety", "life-safety"],
              cost: "low"
            },
            {
              id: "res-pol-no-cpr",
              title: "No CPR-trained adult for pool use",
              text: "No adult who regularly supervises the pool has current CPR training.",
              risk: "CPR given immediately can make a critical difference while waiting for emergency responders.",
              mits: [
                "Have adults who supervise swimming complete a CPR course that includes child and infant CPR.",
                "Post CPR instructions and the home address near the pool."
              ],
              risks: ["life-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Play Equipment & Attractive Nuisances",
          vulns: [
            {
              id: "res-pol-trampoline",
              title: "Trampoline or playset unprotected",
              text: "A trampoline or playset is accessible to neighborhood children without supervision and lacks netting, padding, or a soft landing surface.",
              risk: "Unsupervised play equipment can cause serious injuries and may create liability for the household if visiting children are hurt.",
              mits: [
                "Install safety netting and padding on trampolines and a soft surface beneath playsets.",
                "Keep the backyard gated so equipment cannot be used without permission.",
                "Check homeowners insurance coverage for trampolines and similar equipment."
              ],
              risks: ["child-safety", "liability"],
              cost: "low"
            },
            {
              id: "res-pol-hazards-yard",
              title: "Hazardous items accessible in yard",
              text: "Hot tubs without locked covers, fire pits, pond areas, or stored chemicals are accessible to children or visitors.",
              risk: "Children are drawn to these features and may not recognize the danger.",
              mits: [
                "Keep hot tub covers locked when not in use.",
                "Store pool chemicals, fuels, and garden chemicals in a locked cabinet.",
                "Fence or cover ponds and water features where young children visit."
              ],
              risks: ["child-safety", "liability"],
              cost: "low"
            }
          ]
        },
        {
          name: "Outdoor Equipment Security",
          vulns: [
            {
              id: "res-pol-equipment-theft",
              title: "Outdoor equipment unsecured",
              text: "Bicycles, grills, patio furniture, and outdoor power equipment are left unlocked in the yard or driveway.",
              risk: "Unsecured outdoor items are easy to steal and their presence can draw attention to the property.",
              mits: [
                "Store bicycles and equipment in a locked garage or shed.",
                "Lock high-value outdoor items to fixed anchors.",
                "Record serial numbers and photos of valuable outdoor equipment."
              ],
              risks: ["theft"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-admin",
      name: "Administrative & Documentation",
      category: "Administrative & Documentation",
      blurb: "Records, insurance, inventories, and household routines that support security and recovery after an incident.",
      subs: [
        {
          name: "Home Inventory",
          vulns: [
            {
              id: "res-adm-no-inventory",
              title: "No home inventory of possessions",
              text: "The household has no list, photos, or video of its possessions and their value.",
              risk: "After a theft or fire, it is difficult to report what was lost to police or insurers, which can delay or reduce recovery.",
              mits: [
                "Create a photo or video inventory of each room, including closets and the garage.",
                "Record serial numbers, models, and receipts for electronics, jewelry, and other valuables.",
                "Store a copy of the inventory outside the home or in secure cloud storage, and update it yearly."
              ],
              risks: ["evidence-gap", "theft"],
              cost: "low"
            },
            {
              id: "res-adm-items-unmarked",
              title: "Valuables not marked or photographed",
              text: "High-value items such as electronics, tools, and art are not engraved, marked, or individually photographed.",
              risk: "Unmarked items are harder for police to identify and return if recovered.",
              mits: [
                "Engrave or mark items with an identifying number where appropriate.",
                "Photograph unique items, such as jewelry and art, against a plain background."
              ],
              risks: ["evidence-gap"],
              cost: "low"
            }
          ]
        },
        {
          name: "Insurance Review",
          vulns: [
            {
              id: "res-adm-insurance-gaps",
              title: "Insurance coverage not reviewed",
              text: "The household's homeowners insurance has not been reviewed recently for coverage limits, high-value items, flood, or liability.",
              risk: "Standard policies often limit coverage for jewelry, art, and firearms and do not include flood. Gaps may only be found after a loss.",
              mits: [
                "Review coverage with an insurance agent at least every few years and after major purchases.",
                "Add scheduled coverage for high-value items.",
                "Ask whether flood insurance or added liability coverage is advisable.",
                "Ask whether alarm monitoring or other security measures qualify for a discount."
              ],
              risks: ["liability", "natural-hazard"],
              cost: "low"
            }
          ]
        },
        {
          name: "Security Records & Contacts",
          vulns: [
            {
              id: "res-adm-no-security-records",
              title: "Security system details not documented",
              text: "Alarm account numbers, camera logins, lock codes, and vendor contacts are not recorded in one secure place.",
              risk: "When a system fails or an incident occurs, time is lost locating account details and contacts.",
              mits: [
                "Keep a secure record of security accounts, providers, and service contacts in a password manager or locked file.",
                "Name a backup adult who can access the record in an emergency."
              ],
              risks: ["delayed-response"],
              cost: "low"
            },
            {
              id: "res-adm-no-incident-log",
              title: "Suspicious events not recorded",
              text: "The household does not record suspicious events such as attempted entries, unknown visitors, or threatening messages.",
              risk: "Without records, patterns may be missed and police may have little to work with if a problem grows.",
              mits: [
                "Keep a simple log with dates, times, descriptions, and any photos or video of suspicious events.",
                "Report events to police and note the report number in the log."
              ],
              risks: ["evidence-gap", "targeting"],
              cost: "low"
            }
          ]
        },
        {
          name: "Routines & Checklists",
          vulns: [
            {
              id: "res-adm-no-lockup",
              title: "No nightly lock-up routine",
              text: "The household has no standard routine for checking doors, windows, garage, and alarm at night.",
              risk: "Without a routine, an open door or window can be missed.",
              mits: [
                "Create a short nightly checklist covering exterior doors, the garage door, ground-floor windows, and arming the alarm.",
                "Assign responsibility for the check to a specific adult."
              ],
              risks: ["unauthorized-entry", "home-invasion"],
              cost: "low"
            },
            {
              id: "res-adm-no-travel-checklist",
              title: "No pre-travel security checklist",
              text: "The household has no checklist to prepare the home before travel.",
              risk: "Missed steps, such as stopping mail or setting light timers, can signal that the home is empty.",
              mits: [
                "Create a pre-travel checklist covering mail hold, deliveries, lights, alarm, water shutoff, and neighbor notification.",
                "Leave a contact number and itinerary with a trusted neighbor or relative.",
                "Avoid posting travel plans on social media until after returning."
              ],
              risks: ["targeting", "theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Identity & Financial Records",
          vulns: [
            {
              id: "res-adm-no-shredding",
              title: "Sensitive papers discarded without shredding",
              text: "Bank statements, pre-approved credit offers, and medical papers are placed in household trash or recycling without shredding.",
              risk: "Discarded papers can be used to commit identity theft and fraud.",
              mits: [
                "Shred documents containing account numbers or personal information with a cross-cut shredder.",
                "Opt out of pre-screened credit offers through the official consumer opt-out service."
              ],
              risks: ["identity-theft"],
              cost: "low"
            },
            {
              id: "res-adm-no-credit-freeze",
              title: "Credit not frozen or monitored",
              text: "Household members have not placed a credit freeze or set up account monitoring.",
              risk: "The FTC notes that a credit freeze makes it harder for someone to open new accounts in your name.",
              mits: [
                "Place a free credit freeze with each of the three national credit bureaus for each adult, and consider one for children.",
                "Review credit reports at least once a year.",
                "Turn on transaction alerts for bank and credit card accounts."
              ],
              risks: ["identity-theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Reassessment",
          vulns: [
            {
              id: "res-adm-no-review",
              title: "No schedule to review home security",
              text: "The household has no plan to review its security measures after changes such as renovations, new staff, or local crime increases.",
              risk: "Security measures can fall out of date as the home, household, and neighborhood change.",
              mits: [
                "Review this assessment and its recommendations at least once a year.",
                "Repeat the assessment after major renovations, a move, a security incident, or a change in household members."
              ],
              risks: ["delayed-detection"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "res-estate",
      name: "Enhanced / Estate-Level Considerations",
      category: "Enhanced / Estate-Level Considerations",
      blurb: "Added measures for households with higher public profiles, significant assets, or specific threats, including staff, digital exposure, travel, and crisis planning.",
      subs: [
        {
          name: "Staff Confidentiality & Vendor Vetting",
          vulns: [
            {
              id: "res-est-no-nda",
              title: "Household staff lack confidentiality agreements",
              text: "Long-term household staff, such as nannies, drivers, house managers, and assistants, have not signed confidentiality agreements.",
              risk: "Staff know the family's schedules, travel, finances, and home layout. Without clear written expectations, this information may be shared, intentionally or not.",
              mits: [
                "Have an attorney prepare confidentiality agreements suited to each staff role and state law.",
                "Explain in plain terms what information is confidential, including social media posts.",
                "Review and re-sign agreements when roles change."
              ],
              risks: ["insider", "info-compromise", "targeting"],
              cost: "low"
            },
            {
              id: "res-est-vendor-vetting",
              title: "Vendors not vetted before access",
              text: "Recurring vendors, such as landscapers, pool services, security installers, and IT providers, are not vetted before being given access to the property or systems.",
              risk: "Vendors may have physical access, codes, and network access, and their staff can change without notice.",
              mits: [
                "Confirm licensing, insurance, and references for each vendor.",
                "Ask vendors how they screen their own employees and require notice when staff change.",
                "Limit vendor access to the areas, times, and systems they need."
              ],
              risks: ["insider", "unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Digital Footprint & Online Exposure",
          vulns: [
            {
              id: "res-est-address-public",
              title: "Home address and family details easily found online",
              text: "The principal's home address, family members' names, and photos of the residence can be found through property records, people-search websites, and social media.",
              risk: "Easily found personal information allows people to locate, track, or target the family.",
              mits: [
                "Request removal from people-search and data broker websites, or use a removal service.",
                "Ask whether the county offers address confidentiality or allows property to be held in a trust or LLC, with advice from an attorney.",
                "Search the principal and family members' names periodically to see what is public."
              ],
              risks: ["targeting", "identity-theft", "personal-safety"],
              cost: "med"
            },
            {
              id: "res-est-social-media",
              title: "Family social media reveals routines and location",
              text: "Family members post real-time locations, travel plans, photos of the home, vehicles, or children's schools on public social media.",
              risk: "Posts can tell others where the family is, when the home is empty, and where children can be found.",
              mits: [
                "Set social media accounts to private and review followers.",
                "Post travel and event photos after returning, not in real time.",
                "Remove location tags and avoid photos showing the house number, vehicle plates, or school names."
              ],
              risks: ["targeting", "child-safety", "surveillance"],
              cost: "low"
            },
            {
              id: "res-est-photo-metadata",
              title: "Shared photos contain location data",
              text: "Photos shared online or by message may contain embedded location data (GPS coordinates stored in the image file).",
              risk: "Location data in photos can reveal the exact location of the home or other places the family visits.",
              mits: [
                "Turn off location tagging in phone camera settings.",
                "Check that sharing apps remove location data before posting."
              ],
              risks: ["targeting", "info-compromise"],
              cost: "low"
            }
          ]
        },
        {
          name: "Surveillance Detection Awareness",
          vulns: [
            {
              id: "res-est-no-sd-awareness",
              title: "Family and staff not trained to notice surveillance",
              text: "Family members, drivers, and staff have not been shown how to recognize signs that someone is watching the home or following them.",
              risk: "People planning an attack or crime often watch the target first. Noticing this early gives time to change routines and contact police.",
              mits: [
                "Provide a short awareness briefing for family and staff on signs of surveillance, such as the same person or vehicle appearing repeatedly.",
                "Set a simple way to report observations to one person who keeps a log.",
                "Report repeated or concerning observations to local police."
              ],
              risks: ["surveillance", "targeting"],
              cost: "low"
            },
            {
              id: "res-est-predictable",
              title: "Daily routines highly predictable",
              text: "The principal and family follow the same routes and times for work, school, and activities every day.",
              risk: "Predictable routines make it easy for someone to plan where and when to approach a family member.",
              mits: [
                "Vary departure times and routes when practical.",
                "Limit how many people know detailed schedules."
              ],
              risks: ["targeting", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Travel Security",
          vulns: [
            {
              id: "res-est-no-travel-plan",
              title: "No security planning for travel",
              text: "The household does not research destination risks, share itineraries with a designated contact, or plan for emergencies when traveling.",
              risk: "Travelers face unfamiliar risks and may have no one tracking their whereabouts if something goes wrong.",
              mits: [
                "Review destination advice from the U.S. State Department before international travel and enroll in its Smart Traveler Enrollment Program.",
                "Share itineraries only with a designated contact who checks in at set times.",
                "Carry copies of passports and a list of emergency contacts, kept separate from the originals."
              ],
              risks: ["personal-safety", "targeting"],
              cost: "low"
            },
            {
              id: "res-est-travel-devices",
              title: "Personal devices unprotected while traveling",
              text: "Family members use public Wi-Fi and carry devices with full access to financial and work accounts while traveling.",
              risk: "Devices used on unknown networks or lost while traveling can expose personal and financial information.",
              mits: [
                "Use a trusted VPN (a service that encrypts internet traffic) or a personal hotspot instead of public Wi-Fi.",
                "Turn on device encryption, screen locks, and remote wipe.",
                "Consider travel devices that carry only the information needed for the trip."
              ],
              risks: ["info-compromise", "identity-theft"],
              cost: "low"
            }
          ]
        },
        {
          name: "Technical Surveillance Countermeasures (TSCM)",
          vulns: [
            {
              id: "res-est-no-tscm",
              title: "No checks for hidden listening or tracking devices",
              text: "The residence, vehicles, and private offices have never been checked for hidden listening devices, cameras, or GPS trackers, despite the household's profile or known concerns.",
              risk: "Hidden devices can capture private conversations, financial information, and movements without the family knowing.",
              mits: [
                "Consider a professional TSCM inspection (a sweep by trained specialists for hidden cameras, microphones, and trackers) of the home, vehicles, and offices.",
                "Schedule inspections after renovations, staff departures, or disputes, and before sensitive meetings.",
                "Use a reputable, insured TSCM provider and arrange the inspection from a phone or location away from the home."
              ],
              risks: ["surveillance", "info-compromise"],
              cost: "high"
            },
            {
              id: "res-est-tracker-alerts",
              title: "Phones not set to alert on unknown trackers",
              text: "Family members' phones are not set to warn about unknown item trackers (small Bluetooth tags) traveling with them.",
              risk: "Small trackers can be hidden in bags or vehicles to follow a person's movements.",
              mits: [
                "Enable unknown tracker alerts on each family member's phone.",
                "Report any unknown tracker found to police and keep it for evidence."
              ],
              risks: ["surveillance", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Residential Security Staffing",
          vulns: [
            {
              id: "res-est-staffing-unassessed",
              title: "Need for security staff not assessed",
              text: "The household has not assessed whether its profile or threat level calls for security staff, such as a residential security officer or executive protection.",
              risk: "For higher-profile households, technical systems alone may not provide adequate detection and response, particularly during events or travel.",
              mits: [
                "Have a qualified security professional assess whether staffing is warranted and at what level.",
                "If staff are used, select a licensed company and define written post orders (written duties and procedures for each post).",
                "Check that security staff hold any state licenses required for their role."
              ],
              risks: ["delayed-response", "personal-safety"],
              cost: "high"
            },
            {
              id: "res-est-staff-no-orders",
              title: "Security staff lack written procedures",
              text: "Security personnel at the residence work without written procedures for visitor control, alarm response, emergencies, and reporting.",
              risk: "Without written procedures, responses vary by person and shift, and important steps may be missed.",
              mits: [
                "Write post orders covering daily duties, visitor screening, alarm response, emergencies, and reporting.",
                "Review post orders with staff and update them when the household's needs change.",
                "Hold periodic drills with security staff and family."
              ],
              risks: ["delayed-response", "liability"],
              cost: "low"
            }
          ]
        },
        {
          name: "Kidnap, Ransom & Extortion Planning",
          vulns: [
            {
              id: "res-est-no-kre-plan",
              title: "No kidnap, ransom, or extortion response plan",
              text: "The household has no plan for responding to a kidnapping, a ransom demand, or an extortion threat, including virtual kidnapping calls (scam calls claiming a family member has been taken).",
              risk: "Such events are rare but move quickly. Without a plan, family members may act on panic, send money, or delay contacting law enforcement.",
              mits: [
                "Prepare a written response plan with a security professional, including who to call and immediate steps.",
                "Agree on a family code word to confirm a member's safety during a suspicious call.",
                "Know to contact the local FBI field office and local police immediately in a kidnapping or extortion event.",
                "Ask an insurance advisor whether kidnap and ransom coverage is appropriate."
              ],
              risks: ["personal-safety", "targeting", "child-safety"],
              cost: "low"
            },
            {
              id: "res-est-proof-of-life",
              title: "No proof-of-life information prepared",
              text: "The household has not prepared private identifying information and recent photos for each family member for use in an emergency.",
              risk: "Responders need current photos and identifying details quickly when a family member is missing.",
              mits: [
                "Keep a secure file with a recent photo, physical description, and medical information for each family member.",
                "Record private questions and answers known only to each person, stored securely, for confirming identity."
              ],
              risks: ["personal-safety", "child-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Secure Arrival & Departure",
          vulns: [
            {
              id: "res-est-arrival-exposed",
              title: "Arrivals and departures exposed to the street",
              text: "The principal and family arrive and depart through an entrance that is visible from the street, without a controlled gate or covered garage.",
              risk: "Arrival and departure are times when a person is most predictable and least protected.",
              mits: [
                "Use a covered or enclosed garage for arrivals and departures when possible.",
                "Have the driver or a family member check the area before stopping, and have a plan to drive past if something seems wrong.",
                "Keep the gate or garage door closed until the vehicle is ready to enter or leave."
              ],
              risks: ["personal-safety", "targeting"],
              cost: "med"
            },
            {
              id: "res-est-no-call-ahead",
              title: "No call-ahead procedure for arrivals",
              text: "There is no routine for the principal, driver, or staff to confirm the area around the home is clear before arrival.",
              risk: "Arriving without warning prevents staff or family from checking for and reporting concerns.",
              mits: [
                "Establish a call-ahead or message before arrival so staff can check cameras and the approach.",
                "Agree on a simple signal that means do not come home and go to a safe location."
              ],
              risks: ["personal-safety", "home-invasion"],
              cost: "low"
            }
          ]
        }
      ]
    }
  ],
  risks: {
    "unauthorized-entry": {
      title: "Unauthorized entry",
      text: "A person without permission may enter the property or residence, which can lead to theft, damage, or harm to occupants of {subject}.",
      mits: [
        "Keep exterior doors, windows, and gates locked when not in use.",
        "Control and track who holds keys and access codes.",
        "Use lighting, cameras, and alarms to detect and discourage entry.",
        "Review access controls after staff, guest, or contractor changes."
      ]
    },
    "forced-entry": {
      title: "Forced entry",
      text: "An intruder may break through a door, window, or other opening by force to enter {subject}.",
      mits: [
        "Use solid doors, reinforced frames, and long-screw strike plates.",
        "Install quality deadbolts and secondary locks on sliding doors and windows.",
        "Strengthen vulnerable glass with security film or laminated glazing.",
        "Connect entry points to a monitored alarm system."
      ]
    },
    "theft": {
      title: "Theft",
      text: "Property, vehicles, or valuables belonging to {subject} may be stolen.",
      mits: [
        "Keep valuables out of view and stored in a secured safe.",
        "Lock vehicles, garages, and outbuildings.",
        "Maintain a home inventory with photos and serial numbers.",
        "Use cameras and alarms to discourage and record theft."
      ]
    },
    "vandalism": {
      title: "Vandalism",
      text: "The property of {subject} may be deliberately damaged or defaced.",
      mits: [
        "Maintain the property and repair damage promptly.",
        "Use lighting and cameras to cover exposed areas.",
        "Report vandalism to police and keep records of each event.",
        "Coordinate with neighbors on watching the area."
      ]
    },
    "delayed-detection": {
      title: "Delayed detection",
      text: "An intrusion, fire, or other emergency at {subject} may go unnoticed long enough to allow serious loss or harm.",
      mits: [
        "Install alarms that cover all entry points and key interior areas.",
        "Use cameras and motion lighting on approaches and entries.",
        "Remove hiding places and keep sight lines clear.",
        "Test detection equipment on a regular schedule."
      ]
    },
    "delayed-response": {
      title: "Delayed response",
      text: "Help from police, fire, or medical responders, or from the household itself, may arrive later than needed at {subject}.",
      mits: [
        "Use professional alarm monitoring with current contact lists.",
        "Keep the house number clearly visible from the street.",
        "Prepare written emergency plans and practice them.",
        "Keep phones, panic buttons, and emergency numbers readily available."
      ]
    },
    "life-safety": {
      title: "Life safety",
      text: "Conditions at {subject} may put the lives or health of occupants and visitors at risk during a fire, medical emergency, or disaster.",
      mits: [
        "Install and test smoke and carbon monoxide alarms.",
        "Maintain a fire escape plan with two ways out of every room.",
        "Keep emergency supplies, first aid kits, and fire extinguishers.",
        "Practice emergency drills with all household members."
      ]
    },
    "evidence-gap": {
      title: "Evidence gap",
      text: "After an incident, {subject} may lack the video, records, or documentation needed by police or insurers.",
      mits: [
        "Install cameras that record and retain footage for several days or more.",
        "Keep a home inventory and an incident log.",
        "Know how to export and share video clips.",
        "Store records in a secure location outside the home."
      ]
    },
    "liability": {
      title: "Liability",
      text: "Conditions at the property may cause injury to visitors or others and expose {subject} to legal or financial claims.",
      mits: [
        "Correct hazards such as poor lighting, unprotected pools, and unsafe equipment.",
        "Review homeowners and umbrella insurance coverage.",
        "Follow local codes for pools, fences, and safety equipment.",
        "Seek legal advice on staff, camera, and privacy matters as needed."
      ]
    },
    "sabotage": {
      title: "Sabotage of security systems",
      text: "An intruder may disable alarms, cameras, communications, or power to defeat the security measures at {subject}.",
      mits: [
        "Use backup communication paths such as cellular alarm communicators.",
        "Place control panels and recorders in concealed locations.",
        "Enable tamper and trouble alerts.",
        "Back up video to the cloud where practical."
      ]
    },
    "info-compromise": {
      title: "Information compromise",
      text: "Personal, financial, or security information belonging to {subject} may be exposed through weak accounts, devices, or careless sharing.",
      mits: [
        "Use unique strong passwords and two-factor authentication.",
        "Keep routers and connected devices updated and change default settings.",
        "Limit what is shared about the household online and by staff.",
        "Remove access for people who no longer need it."
      ]
    },
    "surveillance": {
      title: "Hostile surveillance",
      text: "Someone may watch {subject} in person or through technology to learn routines and plan a crime.",
      mits: [
        "Train family and staff to recognize and report signs of surveillance.",
        "Limit visibility into the home and of household routines.",
        "Secure camera and smart home accounts.",
        "Report repeated suspicious observations to police."
      ]
    },
    "personal-safety": {
      title: "Personal safety",
      text: "Members of {subject} may be approached, threatened, or harmed at or near the home or while traveling.",
      mits: [
        "Identify visitors before opening the door.",
        "Use well-lit, controlled approaches and arrival routines.",
        "Prepare and practice a safe room and emergency plan.",
        "Carry a phone and know how to call for help quickly."
      ]
    },
    "insider": {
      title: "Insider risk",
      text: "Staff, contractors, guests, or former household members with legitimate access may misuse that access against {subject}.",
      mits: [
        "Screen staff and vendors before giving access.",
        "Give individual, time-limited access codes and keys.",
        "Remove access promptly when it is no longer needed.",
        "Secure valuables and private areas from routine access."
      ]
    },
    "natural-hazard": {
      title: "Natural hazards",
      text: "Severe weather, floods, wildfire, or other natural hazards may damage the residence or endanger {subject}.",
      mits: [
        "Identify local hazards and sign up for emergency alerts.",
        "Prepare an emergency kit and a family communication plan.",
        "Identify or build an appropriate shelter.",
        "Review insurance for flood and other hazard coverage."
      ]
    },
    "explosive-threat": {
      title: "Suspicious items and explosive threats",
      text: "A suspicious package, letter, or device may be delivered to or left at the residence of {subject}.",
      mits: [
        "Do not handle or open unexpected suspicious items.",
        "Move people away from the item and call 911.",
        "Report threatening mail to postal inspectors and police.",
        "Brief household members and staff on these steps."
      ]
    },
    "home-invasion": {
      title: "Home invasion",
      text: "An intruder may enter while members of {subject} are home, creating a risk of confrontation, injury, or hostage-taking.",
      mits: [
        "Keep doors locked even when the household is home.",
        "Identify visitors before opening the door.",
        "Designate and equip a safe room and practice the plan.",
        "Use an alarm with panic and duress functions."
      ]
    },
    "package-theft": {
      title: "Package and mail theft",
      text: "Packages and mail delivered to {subject} may be stolen before they are collected.",
      mits: [
        "Use a locking package box or pickup location.",
        "Track deliveries and collect them promptly.",
        "Use a locking mailbox and hold mail during travel.",
        "Cover the delivery area with a camera."
      ]
    },
    "child-safety": {
      title: "Child safety",
      text: "Children in or visiting {subject} may be exposed to hazards such as drowning, falls, unsecured firearms, or contact from strangers.",
      mits: [
        "Install layered barriers and alarms around pools and other water.",
        "Store firearms, chemicals, and medications locked and out of reach.",
        "Teach children household safety rules and practice emergency plans.",
        "Use parental controls and limit sharing of children's information."
      ]
    },
    "identity-theft": {
      title: "Identity theft and fraud",
      text: "Personal and financial information belonging to {subject} may be stolen and used to open accounts or commit fraud.",
      mits: [
        "Use locking mailboxes and shred sensitive papers.",
        "Place credit freezes and monitor accounts.",
        "Protect accounts with strong passwords and two-factor authentication.",
        "Store key documents in a safe and keep secure copies."
      ]
    },
    "targeting": {
      title: "Targeting",
      text: "Information about {subject}, such as its address, routines, wealth, or travel, may lead someone to select the household for crime or harassment.",
      mits: [
        "Limit public information about the household online and in public records where possible.",
        "Avoid real-time posting of travel and locations.",
        "Keep valuables and routines out of public view.",
        "Vary routines and report suspicious attention to police."
      ]
    }
  }
});
