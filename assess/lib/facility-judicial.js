/* Tyrtrek assessment library: judicial, custody and law enforcement facility add-on (commercial track). */
(window.TT_LIBS = window.TT_LIBS || []).push({
  group: 'Courts, Custody & Law Enforcement',
  track: "commercial",
  source: "National Center for State Courts (NCSC), Steps to Best Practices for Court Building Security and Best Practices for Court Building Security; NCSC Courthouse Planning pages on prisoner handling and circulation, court floor holding and sally ports; U.S. Courts Design Guide, Ch. 14 Courthouse Security; Interagency Security Committee (ISC) Risk Management Process; Texas Commission on Jail Standards rules (37 TAC Part 9, incl. 275.1 observation); PREA standards on sight and sound separation of youthful detainees; FBI CJIS Security Policy (plain-language summary); UL 752 ballistic ratings.",
  areas: [
    {
      id: "judicial",
      name: "Judicial & Courthouse Security",
      category: "Judicial & Courthouse Security",
      blurb: "Security of the court building, courtrooms, judges, jurors, court staff and the public, including entrance screening, restricted areas, the command center and threat reporting.",
      subs: [
        {
          name: "Public Entrance Screening",
          vulns: [
            {
              id: "jud-scr-not-universal",
              title: "Screening not applied to everyone entering",
              text: "Not every person entering the building passes through security screening; some staff, contractors, vendors or visitors enter without passing through the magnetometer and x-ray.",
              risk: "Any group that is not screened is a route for a weapon into the building, whether carried by that person or passed to someone else inside.",
              mits: [
                "Consider adopting a universal screening policy under which everyone entering the building is screened, including staff, contractors and vendors.",
                "Limit the carrying of weapons inside the building to law enforcement officers performing court security duties, and provide secure lockboxes for other armed visitors.",
                "Screen deliveries and packages before they are brought into the building.",
                "Put the screening policy in writing and have it adopted by the court security committee."
              ],
              risks: ["unauthorized-entry", "violence", "contraband"],
              cost: "med"
            },
            {
              id: "jud-scr-equipment-untested",
              title: "Screening equipment not tested daily",
              text: "The walk-through magnetometer and x-ray machine are not tested at the start of each day, and no test results are recorded.",
              risk: "Equipment that has drifted out of adjustment or failed can pass weapons without anyone noticing until after an incident.",
              mits: [
                "Establish a daily operational test of each magnetometer and x-ray machine using standard test objects before the public is admitted.",
                "Record each test, the result and the officer's name in a log kept at the screening station.",
                "Arrange scheduled maintenance and calibration by a qualified vendor and keep the service records.",
                "Write a procedure for screening by hand-held wand and physical bag search whenever a machine is out of service."
              ],
              risks: ["unauthorized-entry", "violence", "evidence-gap"],
              cost: "low"
            },
            {
              id: "jud-scr-understaffed",
              title: "Screening station staffed by one officer",
              text: "The public screening station is staffed by a single officer who must operate the x-ray, watch the magnetometer and conduct secondary searches at the same time.",
              risk: "One officer cannot watch the x-ray monitor, the walk-through and the person being searched at once, and has no backup if someone becomes violent at the checkpoint.",
              mits: [
                "Staff each screening lane with enough officers to cover the x-ray, the magnetometer and secondary searches; NCSC best practice is three officers per station, at least two of them court security officers.",
                "Assign a supervisor where more than one screening lane operates.",
                "Close a lane rather than run it below minimum staffing during peak periods.",
                "Position a camera on the screening station that is monitored from the command center."
              ],
              risks: ["unauthorized-entry", "violence", "delayed-response"],
              cost: "high"
            },
            {
              id: "jud-scr-unprotected-queue",
              title: "Screening area lacks ballistic protection",
              text: "Screening officers have no ballistic protection, and people waiting to be screened stand in an open, crowded area at the entrance.",
              risk: "The screening point is where an armed attacker is first confronted, so officers and people in line are the most exposed to gunfire at that location.",
              mits: [
                "Consider a bullet-resistant screening station or barrier rated to UL 752 Level III (a test standard for stopping several rounds from a .44 Magnum handgun), which the U.S. Courts Design Guide specifies for federal entrance screening.",
                "Lay out the queue so people wait inside a vestibule or a defined line rather than in front of open doors.",
                "Place cameras on the approach and the queue, monitored from the command center.",
                "Post signs stating that all persons and items are subject to search and listing prohibited items."
              ],
              risks: ["violence", "explosive-threat", "personal-safety"],
              cost: "high"
            },
            {
              id: "jud-scr-multiple-entrances",
              title: "More than one public entrance in use",
              text: "The building has more than one public entrance open during business hours, which splits screening staff and equipment or leaves an entrance with reduced screening.",
              risk: "Each additional public entrance requires its own full screening setup; an entrance with weaker screening becomes the easiest route into the building.",
              mits: [
                "Consider consolidating public access to a single screened entrance.",
                "Convert other doors to emergency exit only, with local alarms and camera coverage, working with the fire marshal to keep required exits available.",
                "Post signs at closed entrances directing visitors to the public entrance.",
                "Review exit-only doors daily to confirm they are closed and secured."
              ],
              risks: ["unauthorized-entry", "violence"],
              cost: "med"
            }
          ]
        },
        {
          name: "Courtrooms",
          vulns: [
            {
              id: "jud-crt-no-sweep",
              title: "Courtrooms not swept before and after sessions",
              text: "Courtrooms are not searched for weapons and suspicious items before proceedings begin and again at the end of the day.",
              risk: "A weapon or other item hidden in the courtroom overnight or during a recess can be retrieved by a defendant, a gallery member or someone who entered without screening.",
              mits: [
                "Establish a documented sweep of each courtroom before the first session and at the end of the day, including the bench, counsel tables, jury box, gallery seating and holding area.",
                "Consider sweeps with a trained detection dog for high-visibility trials.",
                "Record each sweep with the time, the officer and anything found.",
                "Lock the courtroom after the end-of-day sweep."
              ],
              risks: ["violence", "contraband", "explosive-threat"],
              cost: "low"
            },
            {
              id: "jud-crt-bench-not-ballistic",
              title: "Bench and workstations not bullet-resistant",
              text: "The judge's bench, clerk station and court reporter station are not built with bullet-resistant materials.",
              risk: "The judge and courtroom staff have no protected position to take cover behind if shots are fired in the courtroom.",
              mits: [
                "Consider retrofitting the bench and courtroom workstations with bullet-resistant panels; NCSC best practice points to UL 752 Level III (rated to stop several rounds from a .44 Magnum handgun).",
                "Include ballistic protection in the design of any new or renovated courtroom.",
                "Train judges and staff on where to take cover and how to exit the courtroom through the restricted door."
              ],
              risks: ["protectee-harm", "violence"],
              cost: "high"
            },
            {
              id: "jud-crt-unlocked",
              title: "Courtrooms left open when not in use",
              text: "Courtrooms are left unlocked and unattended during recesses, lunch breaks and after hours.",
              risk: "An unattended courtroom lets a person hide a weapon, tamper with exhibits or wait for the judge's return without being noticed.",
              mits: [
                "Clear and lock each courtroom during recesses and whenever it is not in use.",
                "Assign responsibility for locking and unlocking courtrooms to court security staff.",
                "Sweep the courtroom again before it reopens after a recess if it was not locked and attended."
              ],
              risks: ["unauthorized-entry", "contraband", "violence"],
              cost: "low"
            },
            {
              id: "jud-crt-loose-items",
              title: "Items that could be used as weapons",
              text: "Loose items that could be thrown or used as weapons, such as glass pitchers, staplers, scissors and light chairs, are within reach of the defendant and gallery.",
              risk: "Assaults in courtrooms often involve whatever objects are within reach of a defendant or an upset party.",
              mits: [
                "Remove or replace items within reach of the defendant and the gallery with non-breakable, lightweight alternatives such as paper cups.",
                "Secure counsel table and gallery seating to the floor or use heavy furniture that cannot be easily lifted.",
                "Include a check for loose items in the courtroom sweep."
              ],
              risks: ["violence", "protectee-harm"],
              cost: "low"
            },
            {
              id: "jud-crt-exhibit-weapons",
              title: "Weapon exhibits not rendered inoperable",
              text: "Firearms, knives and other weapons entered as exhibits are not confirmed as made safe, and ammunition is not stored separately from the weapons.",
              risk: "A working weapon or live ammunition in the courtroom can be seized and used by a defendant or spectator.",
              mits: [
                "Establish a procedure under which every firearm exhibit is checked and made inoperable (for example with a cable or trigger lock) by a qualified officer before it enters the courtroom.",
                "Store ammunition exhibits in sealed evidence bags kept apart from the firearms.",
                "Keep weapon exhibits out of reach of the defendant and gallery and return them to secure storage at each recess.",
                "Document the chain of custody for weapon exhibits while they are in the court's control."
              ],
              risks: ["violence", "evidence-gap"],
              cost: "low"
            }
          ]
        },
        {
          name: "Judges' Chambers & Restricted Circulation",
          vulns: [
            {
              id: "jud-chm-public-access",
              title: "Chambers reachable from public corridors",
              text: "Judges' chambers can be reached directly from public hallways, and visitors can walk to chambers doors without passing a controlled point.",
              risk: "A person with a grievance against a judge can reach the judge's office without being stopped or announced.",
              mits: [
                "Place chambers within a restricted area entered only through access-controlled doors.",
                "Require visitors to chambers to be met at a reception point and escorted.",
                "Keep chambers doors locked, especially when the judge is out and overnight.",
                "Install a duress alarm in each chambers suite, monitored by the command center."
              ],
              risks: ["protectee-harm", "unauthorized-entry"],
              cost: "med"
            },
            {
              id: "jud-chm-windows",
              title: "Chambers windows expose judges to view",
              text: "Chambers windows allow the judge to be seen from outside the building, and window coverings are left open.",
              risk: "A visible judge at a known window can be watched, photographed or targeted from outside.",
              mits: [
                "Keep blinds or film adjusted so activity inside chambers cannot be seen from outside.",
                "Arrange furniture so the judge does not sit directly in front of a window and the exit is never blocked.",
                "Where the risk assessment supports it, consider ballistic glazing; NCSC guidance points to UL 752 Level IV (rated against a single rifle round) for chambers windows."
              ],
              risks: ["protectee-harm", "surveillance"],
              cost: "med"
            },
            {
              id: "jud-chm-restricted-doors",
              title: "Restricted corridor doors not controlled",
              text: "Doors between public and restricted areas are propped open, held by unsecured key locks, or opened by keys and cards that are not tracked.",
              risk: "Restricted corridors only protect judges and staff if their doors stay closed and only authorized people can open them.",
              mits: [
                "Install electronic access control on doors between public and restricted areas and review access lists at least twice a year.",
                "Add door-held-open alarms reporting to the command center.",
                "Recover keys and cards from departing employees on their last day and disable cards immediately.",
                "Place cameras at restricted corridor entry doors."
              ],
              risks: ["unauthorized-entry", "protectee-harm", "insider"],
              cost: "med"
            },
            {
              id: "jud-chm-cleaning-crews",
              title: "Unsupervised after-hours cleaning in chambers",
              text: "Cleaning and maintenance contractors work in chambers and restricted areas after hours without supervision or background checks.",
              risk: "Unsupervised workers have access to judges' offices, case files and personal information, and could leave items behind.",
              mits: [
                "Schedule cleaning of chambers during business hours under staff supervision where possible.",
                "Require background checks for contractors with access to restricted areas.",
                "Log contractor entry and exit times through access control.",
                "Lock sensitive files and personal information before contractors enter."
              ],
              risks: ["insider", "info-compromise", "unauthorized-entry"],
              cost: "low"
            }
          ]
        },
        {
          name: "Judges' Parking & Arrival/Departure",
          vulns: [
            {
              id: "jud-prk-named-signs",
              title: "Reserved parking signs identify judges",
              text: "Reserved parking spaces are marked with judges' names or titles.",
              risk: "Named signs tell anyone watching which vehicle belongs to which judge and when the judge arrives and leaves.",
              mits: [
                "Replace name and title signs with numbered spaces only.",
                "Keep the space assignment list confidential and limited to security and facilities staff.",
                "Review the parking area for any other markings that identify judges' vehicles."
              ],
              risks: ["protectee-harm", "surveillance"],
              cost: "low"
            },
            {
              id: "jud-prk-unenclosed",
              title: "Judges' parking open and unmonitored",
              text: "Judges park in an open lot that is visible from the street, has no fencing or gate, and is not covered by cameras.",
              risk: "Parking areas and the walk to the building are where judges are most predictable and least protected.",
              mits: [
                "Consider enclosing judges' parking with a gate and opaque fencing, or add privacy slats to existing chain-link fence.",
                "Install lighting, cameras monitored by the command center, and a call box or duress button in the lot.",
                "Have court security officers patrol the lot at arrival and departure times.",
                "Best practice is covered, secure parking with a direct route into a restricted entrance without crossing public areas."
              ],
              risks: ["protectee-harm", "vehicle-attack", "surveillance"],
              cost: "high"
            },
            {
              id: "jud-prk-no-escort",
              title: "No escort option for judges",
              text: "Judges who park in unsecured areas or leave after dark have no option to request an escort to their vehicle.",
              risk: "A judge walking alone through a public area or open lot after a contentious hearing has no protection and no quick way to call for help.",
              mits: [
                "Offer escorts by court security officers to judges parking in unsecured areas, and publicize how to request one.",
                "Provide extra escort coverage after high-threat or emotional proceedings.",
                "Encourage judges to vary arrival and departure times where practical."
              ],
              risks: ["protectee-harm", "personal-safety"],
              cost: "low"
            },
            {
              id: "jud-prk-staff-tailgating",
              title: "Judge and staff entrance allows tailgating",
              text: "The judges' and staff entrance allows a second person to follow an authorized person inside, and the entrance has no camera, intercom or duress device.",
              risk: "An unscreened person following a judge through the restricted entrance bypasses public screening entirely.",
              mits: [
                "Train judges and staff not to hold the door for anyone and to report tailgating.",
                "Install a camera, intercom and duress alarm at the entrance, monitored by the command center, as the U.S. Courts Design Guide describes for the judges' entry route.",
                "Consider a vestibule or anti-tailgating door, and screening equipment at this entrance under a universal screening policy."
              ],
              risks: ["unauthorized-entry", "protectee-harm"],
              cost: "med"
            }
          ]
        },
        {
          name: "Jury Areas",
          vulns: [
            {
              id: "jud-jur-shared-circulation",
              title: "Jurors share hallways with parties",
              text: "Jurors move between the assembly room, deliberation room and courtroom through public hallways where they meet defendants, witnesses, family members and the public.",
              risk: "Contact in hallways and elevators gives parties a chance to approach, influence or threaten jurors, which can lead to mistrials.",
              mits: [
                "Route jurors through restricted corridors from the deliberation room to the courtroom where the building allows it.",
                "Where restricted routes are not available, have a court security officer escort jurors as a group.",
                "Place the deliberation room so it can be reached without crossing public areas."
              ],
              risks: ["witness-intimidation", "disruption"],
              cost: "med"
            },
            {
              id: "jud-jur-deliberation-unsecured",
              title: "Deliberation room not secured",
              text: "The jury deliberation room is not locked when empty, has no duress alarm, and can be overheard or seen into from public areas.",
              risk: "An unsecured deliberation room exposes jurors to approach and their deliberations to eavesdropping.",
              mits: [
                "Lock the deliberation room when jurors are not present and control access to it.",
                "Install a duress alarm in the deliberation room and jury assembly room.",
                "Add sound insulation and window coverings so deliberations cannot be seen or heard from outside the room.",
                "Assign a court security officer to remain with the jury throughout the trial and deliberation, as NCSC guidance recommends."
              ],
              risks: ["witness-intimidation", "info-compromise"],
              cost: "med"
            },
            {
              id: "jud-jur-identity-exposed",
              title: "Juror identities exposed in public view",
              text: "Juror names and personal details are visible on lists, badges or screens that the public and parties can see.",
              risk: "Exposed juror identities allow parties or associates to find, contact or intimidate jurors outside the courthouse.",
              mits: [
                "Identify jurors by number rather than name in open court and on badges.",
                "Keep juror lists out of public view and limit access to court staff with a need to know.",
                "Establish a procedure for sequestered or anonymous juries in high-threat cases."
              ],
              risks: ["witness-intimidation", "info-compromise"],
              cost: "low"
            }
          ]
        },
        {
          name: "Clerk & Public Counters",
          vulns: [
            {
              id: "jud-clk-open-counter",
              title: "Public counters lack a barrier",
              text: "Clerk and public service counters are open, with no barrier between the public and staff, and staff can be reached across the counter.",
              risk: "Public counters handle people in stressful matters such as protective orders, fines and evictions, and staff can be assaulted across an open counter.",
              mits: [
                "Install transaction barriers such as glazing with a pass-through slot at public counters; NCSC guidance includes enclosures at all public counters.",
                "Raise and deepen counters so staff cannot easily be reached.",
                "Provide a staff exit from behind the counter to a restricted area."
              ],
              risks: ["violence", "personal-safety"],
              cost: "med"
            },
            {
              id: "jud-clk-no-duress",
              title: "No duress alarm at counters",
              text: "Clerk and public counters have no duress alarm, or alarms are present but not tested or linked to a camera.",
              risk: "Counter staff facing a threatening person have no quiet way to call for help, and responders would not know what is happening.",
              mits: [
                "Install at least one duress alarm at each public counter, reporting to the command center.",
                "Link each duress alarm to a camera so the command center can see the location when the alarm sounds.",
                "Test duress alarms at least monthly and record the results.",
                "Train counter staff on when and how to use the alarm."
              ],
              risks: ["violence", "delayed-response"],
              cost: "low"
            },
            {
              id: "jud-clk-cash-handling",
              title: "Cash carried by one person",
              text: "Fines and fees collected at the counter are counted and carried to the bank or another office by one staff member without an escort.",
              risk: "A predictable cash run by a single employee invites robbery and leaves no witness if money is lost.",
              mits: [
                "Use two people for cash transport, one of them an armed court security officer, as NCSC guidance recommends.",
                "Store cash in a safe and use an armored car service for bank deposits where volume justifies it.",
                "Place a camera over the cash-handling area and vary the time of deposits."
              ],
              risks: ["theft", "personal-safety", "insider"],
              cost: "low"
            }
          ]
        },
        {
          name: "Security Command Center",
          vulns: [
            {
              id: "jud-cmd-not-staffed",
              title: "Command center not staffed full-time",
              text: "The security command center is not staffed at all times when the public is in the building, or the operator leaves to respond to incidents.",
              risk: "Duress alarms and cameras only help if someone is watching them and can direct responders while an incident is under way.",
              mits: [
                "Staff the command center whenever the building is open to the public.",
                "Keep command center operators separate from responding officers so they can direct the response and track events.",
                "In smaller buildings, place a monitoring station at the screening desk staffed at all times.",
                "Write post orders for the command center describing alarm response steps."
              ],
              risks: ["delayed-response", "delayed-detection"],
              cost: "high"
            },
            {
              id: "jud-cmd-alarm-no-camera",
              title: "Alarms not linked to cameras",
              text: "Duress and door alarms appear at the command center without an automatic camera view of the location, and some alarms report only to a local sounder.",
              risk: "Operators must guess what is happening and may send responders without knowing the threat.",
              mits: [
                "Program each duress and door alarm to call up the nearest camera view automatically.",
                "Bring all duress alarms in the building to one monitored point.",
                "Keep an up-to-date map of alarm and camera locations at the command center."
              ],
              risks: ["delayed-response", "evidence-gap"],
              cost: "med"
            },
            {
              id: "jud-cmd-no-comms",
              title: "No direct communication with courtrooms",
              text: "The command center has no direct phone, intercom or radio link to courtrooms, chambers and the screening station.",
              risk: "Without direct communication, the command center cannot warn courtrooms of a developing threat or confirm the status of an alarm.",
              mits: [
                "Provide a radio or direct telephone link from the command center to every courtroom, chambers suite and screening post.",
                "Test communications daily and confirm radio coverage in stairwells, holding areas and the basement.",
                "Install a building-wide public address system controllable from the command center."
              ],
              risks: ["delayed-response", "life-safety"],
              cost: "med"
            }
          ]
        },
        {
          name: "High-Threat & High-Visibility Proceedings",
          vulns: [
            {
              id: "jud-ht-no-plan",
              title: "No written plan for high-threat trials",
              text: "There is no written procedure for planning security for high-threat or high-visibility proceedings, such as gang, terrorism or widely publicized cases.",
              risk: "These cases draw crowds, protesters, media and people intent on disruption or violence, and need more staff and coordination than normal operations provide.",
              mits: [
                "Establish a procedure for identifying high-threat proceedings early and holding a security planning meeting with the judge, court administration and law enforcement partners.",
                "Write an operations plan for each such case covering staffing, screening, seating, juror and witness movement, and media.",
                "Coordinate with local police for exterior security and crowd control.",
                "Hold a debrief after the proceeding and record lessons learned."
              ],
              risks: ["violence", "disruption", "protectee-harm"],
              cost: "low"
            },
            {
              id: "jud-ht-gallery-unseparated",
              title: "Rival groups seated without separation",
              text: "During contentious hearings, opposing families and supporters are seated together, and there is no procedure to separate them inside the courtroom or in waiting areas.",
              risk: "Rival groups seated together are a common source of courtroom fights and of intimidation of witnesses and victims.",
              mits: [
                "Seat opposing parties' supporters on separate sides of the gallery with an officer positioned between them.",
                "Provide a separate waiting area for victims and witnesses.",
                "Stagger the release of groups when court ends so they do not leave together.",
                "Consider a second screening point at the courtroom door for these proceedings."
              ],
              risks: ["violence", "witness-intimidation"],
              cost: "low"
            },
            {
              id: "jud-ht-witness-exposure",
              title: "Witnesses and victims share waiting areas",
              text: "Victims and witnesses wait in the same public hallway as the defendant's family and associates before testifying.",
              risk: "Shared waiting areas allow intimidation that can change testimony or cause a witness to leave.",
              mits: [
                "Designate a separate, private waiting room for victims and witnesses.",
                "Coordinate with prosecutor victim-witness staff to escort witnesses to and from the courtroom.",
                "Report any approach or intimidation of a witness to the judge and law enforcement the same day."
              ],
              risks: ["witness-intimidation", "personal-safety"],
              cost: "low"
            }
          ]
        },
        {
          name: "Threat Reporting & Protective Intelligence",
          vulns: [
            {
              id: "jud-thr-no-same-day",
              title: "Threats not reported the same day",
              text: "There is no requirement that threats against judges or staff be reported to law enforcement and court administration by the end of the same business day.",
              risk: "Delays in reporting mean threats are not investigated or protective steps are not taken until after the person has had time to act.",
              mits: [
                "Require reporting of threats and incidents to law enforcement and court administration no later than close of business the same day, and immediately for serious threats.",
                "Provide a simple written or electronic reporting form and send copies to the court security committee.",
                "Give feedback to people who report so they continue to report.",
                "Keep a database of threats and incidents and review it regularly for patterns."
              ],
              risks: ["protectee-harm", "delayed-response"],
              cost: "low"
            },
            {
              id: "jud-thr-no-assessment",
              title: "No process to assess reported threats",
              text: "Reported threats and inappropriate communications are filed but not assessed by trained personnel to judge whether the person poses a danger.",
              risk: "People who carry out targeted attacks often show concerning behavior beforehand; without assessment those warning signs can be missed.",
              mits: [
                "Establish a threat assessment process, with trained personnel from law enforcement, that reviews each reported threat or inappropriate communication.",
                "Focus the assessment on the person's behavior and any steps toward an attack, not only on the wording of the message.",
                "Document the assessment and protective steps taken for each case.",
                "Coordinate with the agency responsible for judicial protection in the jurisdiction."
              ],
              risks: ["protectee-harm", "delayed-detection"],
              cost: "low"
            },
            {
              id: "jud-thr-home-security",
              title: "No home security support for judges",
              text: "Judges receive no home security assessments, guidance on removing personal information from public sources, or offsite safety training.",
              risk: "Several serious attacks on judges and their families have taken place at their homes, outside the protection of the courthouse.",
              mits: [
                "Offer home security assessments to judicial officers, with written recommendations for locks, lighting, alarms and cameras.",
                "Help judges request removal of home addresses and family information from public records and data broker sites where state law permits.",
                "Include personal and home safety in judicial orientation and ongoing training.",
                "Coordinate with local police for extra patrols at a judge's home after a credible threat."
              ],
              risks: ["protectee-harm", "personal-safety", "surveillance"],
              cost: "low"
            }
          ]
        },
        {
          name: "Court Security Staffing & Training",
          vulns: [
            {
              id: "jud-stf-no-relief",
              title: "Posts uncovered during absences",
              text: "Court security staffing does not include relief personnel, so posts are left empty during breaks, leave and training.",
              risk: "Screening lanes and courtrooms are left without coverage at unpredictable times, which is when an incident is least likely to be handled well.",
              mits: [
                "Calculate staffing using a relief factor; NCSC guidance estimates about 1.33 full-time employees for each post to cover absences.",
                "Identify minimum staffing levels for each day and the posts to close first when short.",
                "Assign a roving officer to each courtroom floor."
              ],
              risks: ["delayed-response", "unauthorized-entry"],
              cost: "high"
            },
            {
              id: "jud-stf-no-inservice",
              title: "Court security officers lack annual training",
              text: "Court security officers do not receive regular annual in-service training in court security, firearms and intermediate weapons.",
              risk: "Officers who are not trained and qualified regularly may respond poorly to an emergency and expose the court to liability.",
              mits: [
                "Provide mandatory annual in-service training for court security officers; NCSC guidance sets at least 24 hours per year.",
                "Require annual firearms and intermediate weapon qualification.",
                "Include de-escalation, prisoner escort, emergency medical response and active-shooter response in training.",
                "Keep training records for each officer."
              ],
              risks: ["liability", "delayed-response"],
              cost: "med"
            },
            {
              id: "jud-stf-no-staff-training",
              title: "Judges and staff not trained in emergencies",
              text: "Judges and court staff have not received orientation on emergency codes, evacuation routes, duress alarms and personal safety.",
              risk: "Staff who do not know the procedures may freeze, use the wrong exit or fail to call for help in an emergency.",
              mits: [
                "Give every new judge and staff member an orientation covering emergencies, evacuation routes, emergency codes and personal safety.",
                "Hold regular drills and short refresher sessions, with judges taking part.",
                "Post emergency code cards at workstations."
              ],
              risks: ["life-safety", "delayed-response"],
              cost: "low"
            },
            {
              id: "jud-stf-no-committee",
              title: "No court security committee",
              text: "There is no court security committee bringing together the judiciary, court administration, law enforcement and county facilities to set security policy.",
              risk: "Without a standing committee, security decisions are made piecemeal and no one is responsible for following through on assessments.",
              mits: [
                "Establish a court security committee chaired by the presiding judge with representatives of court administration, the agency providing security, and building management.",
                "Have the committee meet regularly, review incident reports and track the status of recommendations.",
                "Have the committee complete a security self-assessment and set priorities for improvements."
              ],
              risks: ["liability", "disruption"],
              cost: "low"
            },
            {
              id: "jud-stf-no-codes",
              title: "No standard emergency codes",
              text: "The building has no standard set of plain emergency codes for announcing threats, evacuations and the all-clear to judges, staff and occupants.",
              risk: "Without agreed codes, announcements can be confusing or alarming, and people may take the wrong action, such as evacuating toward an active threat.",
              mits: [
                "Adopt a simple color-code system, for example red for imminent danger such as an active shooter, orange for evacuation, and green for return to normal operations, as described in NCSC guidance.",
                "Consider plain-language announcements alongside or instead of codes so visitors also understand them.",
                "Post the codes and expected actions at workstations and include them in orientation and drills."
              ],
              risks: ["life-safety", "delayed-response"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "custody",
      name: "Custody & Prisoner Movement",
      category: "Custody & Prisoner Movement",
      blurb: "Receiving, holding, moving and supervising people in custody, from the vehicle sally port through holding cells to the courtroom and back.",
      subs: [
        {
          name: "Vehicle Sally Port",
          vulns: [
            {
              id: "cus-sp-none",
              title: "Prisoners unloaded outside a sally port",
              text: "Prisoners are unloaded from transport vehicles at a public curb, open parking lot or loading dock instead of inside a secure sally port (an enclosed, gated vehicle bay).",
              risk: "Unloading in the open exposes the prisoner to escape attempts, outside help from associates, and contact with the public.",
              mits: [
                "Consider building or designating an enclosed vehicle sally port where prisoners are unloaded behind closed gates.",
                "Where a sally port is not possible, use a fenced, gated area out of public view with camera coverage and clear the area before unloading.",
                "Where the jail is next to the building, consider a secure walkway or tunnel instead of vehicle transport.",
                "Assign enough officers to each unloading that one officer covers the area while others handle the prisoner."
              ],
              risks: ["escape", "violence", "contraband"],
              cost: "high"
            },
            {
              id: "cus-sp-gates-not-interlocked",
              title: "Sally port gates open at the same time",
              text: "The outer vehicle gate and the inner pedestrian door of the sally port can be open at the same time, and the outer gate is not confirmed closed before the vehicle doors open.",
              risk: "If both barriers can be open together, a prisoner who breaks away has a direct path out of the secure area.",
              mits: [
                "Interlock the sally port gates and doors so the inner door cannot open until the outer gate is closed and secured.",
                "Require the outer gate to be closed before any vehicle door is opened.",
                "Control the gates from the command center or holding control station with camera views of both sides.",
                "Test the interlock regularly and record the result."
              ],
              risks: ["escape", "unauthorized-entry"],
              cost: "high"
            },
            {
              id: "cus-sp-no-gun-lockers",
              title: "No weapons lockers before holding",
              text: "There are no weapons lockers at the entry to the holding area, and officers enter holding and cell areas while armed.",
              risk: "A firearm carried into a holding area can be taken by a prisoner during a struggle.",
              mits: [
                "Install individual weapons lockers in the sally port or holding entry so officers secure firearms before entering holding.",
                "Write a policy on which weapons may be carried into holding areas.",
                "Inspect lockers routinely to confirm they work and are in use."
              ],
              risks: ["escape", "violence", "protectee-harm"],
              cost: "low"
            }
          ]
        },
        {
          name: "Central Cellblock / Holding",
          vulns: [
            {
              id: "cus-cb-cells-not-searched",
              title: "Cells not searched before and after use",
              text: "Holding cells are not searched before each prisoner is placed in them and after each prisoner leaves.",
              risk: "Unsearched cells let weapons, drugs and escape tools be hidden by one prisoner and recovered by the next.",
              mits: [
                "Search each holding cell before and after each use, as NCSC guidance states, and record the search.",
                "Check fixtures, vents, drains and benches for damage or hidden items during each search.",
                "Report damaged fixtures for repair before the cell is used again."
              ],
              risks: ["contraband", "escape", "in-custody-harm"],
              cost: "low"
            },
            {
              id: "cus-cb-no-classification-separation",
              title: "Prisoners not separated by category",
              text: "Holding areas do not separate men from women, juveniles from adults, or co-defendants and known enemies from one another.",
              risk: "Mixing these groups creates risk of assault, sexual abuse, witness intimidation and coordination of testimony.",
              mits: [
                "Provide separate holding cells for men and women, with sight and sound separation where the areas are close together.",
                "Keep juveniles held near adults out of sight and sound of adult prisoners, consistent with PREA standards and state law.",
                "Use a classification check at intake to identify co-defendants, rival gang members and separation orders.",
                "Provide at least one single cell for prisoners who must be kept apart."
              ],
              risks: ["in-custody-harm", "witness-intimidation", "liability"],
              cost: "med"
            },
            {
              id: "cus-cb-control-station-view",
              title: "Holding officer cannot see all cells",
              text: "The holding control station does not give the officer a clear view of all cells and the corridor, and camera coverage of the holding area is incomplete.",
              risk: "Assaults, self-harm and escape preparations in cells the officer cannot see may go unnoticed.",
              mits: [
                "Position the security station so the officer can see each cell and corridor directly where the layout allows.",
                "Add cameras covering every cell front and corridor, with recording and display at the control station.",
                "Install a duress alarm at the holding control station.",
                "Review camera views periodically for blind spots."
              ],
              risks: ["in-custody-harm", "escape", "delayed-detection"],
              cost: "med"
            }
          ]
        },
        {
          name: "Courtroom Holding Cells",
          vulns: [
            {
              id: "cus-ch-not-adjacent",
              title: "No holding cell next to the courtroom",
              text: "There is no holding cell next to the courtroom, so prisoners wait in the gallery, jury box or a public hallway before their case is called.",
              risk: "Prisoners waiting in public areas can contact the public, receive contraband, threaten witnesses, or try to escape.",
              mits: [
                "Consider building a holding cell that opens directly into the courtroom through a secure door; NCSC planning guidance suggests placing one between pairs of courtrooms.",
                "Until holding is available, seat prisoners in a defined area away from the gallery and exits with an officer present at all times.",
                "Bring prisoners up only when their case is about to be called."
              ],
              risks: ["escape", "contraband", "witness-intimidation"],
              cost: "high"
            },
            {
              id: "cus-ch-weak-construction",
              title: "Holding cells not built to secure standards",
              text: "Courtroom holding cells have removable drop ceilings, exposed fixtures, or standard office doors and hardware.",
              risk: "Cells with removable ceilings or fixtures allow escape through the ceiling and give prisoners materials to use as weapons or for self-harm.",
              mits: [
                "Reinforce cell walls and ceilings and replace drop ceilings with solid construction.",
                "Use vandal-resistant fixtures, fixed benches, and light fixtures and vents that cannot be removed.",
                "Install detention-grade doors, frames and locks on holding cells.",
                "Have the cell design reviewed against state jail standards and corrections design guidance."
              ],
              risks: ["escape", "in-custody-harm"],
              cost: "high"
            },
            {
              id: "cus-ch-noise",
              title: "Holding cell noise heard in courtroom",
              text: "Noise from courtroom holding cells, such as shouting and banging, can be heard in the courtroom, and the door between them has no vision panel.",
              risk: "Noise from holding disrupts proceedings and can intimidate witnesses and jurors, and officers cannot check the courtroom before opening the door.",
              mits: [
                "Add sound insulation to walls shared with the courtroom and use a two-door vestibule between holding and the courtroom.",
                "Install a small vision panel in the courtroom door from holding.",
                "Keep disruptive prisoners in central holding until their case is called."
              ],
              risks: ["disruption", "witness-intimidation"],
              cost: "med"
            }
          ]
        },
        {
          name: "Escort Routes & Separation of Circulation",
          vulns: [
            {
              id: "cus-esc-public-hallways",
              title: "Prisoners escorted through public areas",
              text: "Prisoners are escorted from holding to the courtroom through public hallways, public elevators or the public entrance.",
              risk: "Escorts through public space bring prisoners into contact with the public, victims, witnesses and jurors, and give opportunities for escape or attack.",
              mits: [
                "Plan for separate secure circulation, a dedicated corridor and elevator, from the sally port to holding and the courtroom so prisoners never cross public or restricted areas.",
                "Until that is built, clear the route ahead of each escort, move bystanders to the far end of hallways, and clear elevators completely.",
                "Schedule prisoner movement at times when hallways are least crowded."
              ],
              risks: ["escape", "witness-intimidation", "violence"],
              cost: "high"
            },
            {
              id: "cus-esc-judge-crossing",
              title: "Prisoner routes cross judge and staff routes",
              text: "The prisoner escort route shares corridors, doors or elevators with judges, jurors or court staff.",
              risk: "Prisoners who meet judges or jurors outside the courtroom can threaten or assault them.",
              mits: [
                "Keep public, restricted (judges and staff) and secure (prisoner) circulation physically separate, as described in the U.S. Courts Design Guide.",
                "Where routes must be shared, use access control and radio coordination so they are never in use by both groups at once.",
                "Post signs and lock shared doors so staff do not walk into an escort."
              ],
              risks: ["protectee-harm", "escape"],
              cost: "high"
            },
            {
              id: "cus-esc-single-officer",
              title: "Escorts conducted by one officer",
              text: "Prisoners are moved by a single officer, with no one clearing the route ahead and no camera coverage along the route.",
              risk: "A single officer handling a prisoner cannot also watch for threats ahead, and has no help if the prisoner resists.",
              mits: [
                "Assign enough officers to each escort, based on the number and risk of prisoners, with one officer clearing the path ahead.",
                "Install cameras along the full escort route, monitored from the command center.",
                "Use radio notice to the command center at the start and end of each movement."
              ],
              risks: ["escape", "violence", "delayed-response"],
              cost: "med"
            }
          ]
        },
        {
          name: "Restraints, Searches & Contraband",
          vulns: [
            {
              id: "cus-rs-inconsistent-restraints",
              title: "Restraint use inconsistent",
              text: "There is no written policy on restraints for prisoners being escorted, and the use of handcuffs, leg restraints and waist chains varies by officer.",
              risk: "Inconsistent restraint practice leaves some prisoners able to run or fight during movement and exposes the agency to liability when restraints are applied unevenly.",
              mits: [
                "Write a restraint policy covering escorted prisoners, consistent with state law and court orders, and train every officer on it.",
                "Use handcuffs, leg restraints and waist chains during movement as the policy requires, with any exceptions documented.",
                "Check restraints for fit and double-lock them before each movement.",
                "Inspect and replace damaged restraints regularly."
              ],
              risks: ["escape", "violence", "liability"],
              cost: "low"
            },
            {
              id: "cus-rs-no-search-on-receipt",
              title: "Prisoners not searched on arrival",
              text: "Prisoners received from the jail or another agency are not searched again on arrival at the building, on the assumption that the sending agency searched them.",
              risk: "Items may be picked up during transport or missed by the sending agency, and the receiving agency is then holding a prisoner with a weapon or contraband.",
              mits: [
                "Search every prisoner on arrival and again before each courtroom appearance and return.",
                "Search transport vehicles before and after each use.",
                "Record each search and anything found."
              ],
              risks: ["contraband", "violence", "escape"],
              cost: "low"
            },
            {
              id: "cus-rs-public-passing",
              title: "Public can pass items to prisoners",
              text: "Family members and the public can approach prisoners in the courtroom or hallway closely enough to hand them items or touch them.",
              risk: "Items passed to prisoners can include drugs, weapons or handcuff keys, and contact can lead to escape attempts or fights.",
              mits: [
                "Prohibit contact between prisoners and the public, family or friends, as NCSC guidance recommends.",
                "Keep a clear space between the gallery and the defendant's seat, using a bar or rail.",
                "Post signs in the courtroom stating that contact with prisoners is not allowed.",
                "Search the prisoner after any contact occurs."
              ],
              risks: ["contraband", "escape"],
              cost: "low"
            }
          ]
        },
        {
          name: "Attorney-Client Interview Rooms",
          vulns: [
            {
              id: "cus-ai-no-booths",
              title: "No secure attorney interview space",
              text: "Attorneys meet in-custody clients in hallways, the gallery, or unsecured offices because there is no attorney interview room in the holding area.",
              risk: "Unsecured meetings expose attorneys to assault, allow items to be passed, and do not give clients a confidential space.",
              mits: [
                "Provide attorney interview booths in or next to the holding area, including non-contact booths with a barrier and pass-through slot for documents.",
                "Allow contact visits only in rooms designed for them, with an officer nearby.",
                "Search the prisoner after any contact visit."
              ],
              risks: ["contraband", "violence", "personal-safety"],
              cost: "med"
            },
            {
              id: "cus-ai-no-duress",
              title: "Interview rooms lack duress alarms",
              text: "Attorney interview rooms have no duress alarm and the door cannot be watched from the holding station.",
              risk: "An attorney or interpreter assaulted in an interview room may have no way to summon help.",
              mits: [
                "Install a duress alarm on the attorney side of each interview room, reporting to the holding control station.",
                "Install a vision panel in the door so officers can check the room without listening in.",
                "Test interview room alarms monthly with other duress alarms."
              ],
              risks: ["violence", "delayed-response"],
              cost: "low"
            }
          ]
        },
        {
          name: "Prisoner Transport",
          vulns: [
            {
              id: "cus-tr-vehicle-unsearched",
              title: "Transport vehicles not searched",
              text: "Transport vehicles are not searched before and after each trip, and the prisoner compartment has loose items or removable parts.",
              risk: "Items left in a vehicle can be picked up by a prisoner and used as a weapon or to defeat restraints.",
              mits: [
                "Search the prisoner compartment before and after each transport and record the search.",
                "Use vehicles with a secure partition and a prisoner compartment free of removable parts.",
                "Keep keys, tools and weapons out of the prisoner compartment."
              ],
              risks: ["contraband", "escape"],
              cost: "low"
            },
            {
              id: "cus-tr-predictable",
              title: "Transport routes and times predictable",
              text: "Prisoner transports follow the same route at the same times each day, and schedules are shared beyond those who need them.",
              risk: "Predictable transports make it easier for associates to plan an ambush or escape attempt.",
              mits: [
                "Vary transport routes and times where practical, especially for high-risk prisoners.",
                "Limit knowledge of transport schedules to personnel who need it.",
                "Use additional vehicles or officers for prisoners identified as high-risk."
              ],
              risks: ["escape", "violence"],
              cost: "low"
            },
            {
              id: "cus-tr-no-comms",
              title: "No communications plan for transports",
              text: "Transport officers have no set check-in procedure with dispatch, and there is no written plan for a vehicle breakdown, crash or medical emergency during transport.",
              risk: "A transport that runs into trouble may not be noticed until it fails to arrive.",
              mits: [
                "Require radio check-ins at departure and arrival.",
                "Write procedures for breakdowns, crashes and medical emergencies during transport.",
                "Carry a first aid kit and restraint keys in each vehicle and train officers on the procedures."
              ],
              risks: ["escape", "delayed-response", "in-custody-harm"],
              cost: "low"
            }
          ]
        },
        {
          name: "Medical, Suicide & In-Custody Welfare",
          vulns: [
            {
              id: "cus-med-tie-off-points",
              title: "Holding cells contain tie-off points",
              text: "Holding cells contain fixtures from which a ligature could be hung, such as exposed pipes, grilles, bunk edges, door handles or sprinkler heads that are not suicide-resistant.",
              risk: "Suicide is a leading cause of death in local jails, and points where a ligature can be tied allow a person to hang themselves within minutes.",
              mits: [
                "Survey each holding cell for points where a cord or cloth could be tied and replace them with suicide-resistant fixtures.",
                "Use suicide-resistant vent grilles, sprinkler heads, door hardware and benches.",
                "Remove belts, shoelaces and drawstrings from prisoners before placing them in holding.",
                "Keep a cut-down tool and first aid kit at the holding control station."
              ],
              risks: ["in-custody-harm", "liability"],
              cost: "med"
            },
            {
              id: "cus-med-observation-checks",
              title: "Observation checks not done or recorded",
              text: "Officers do not conduct and record regular face-to-face observation checks of prisoners in holding cells.",
              risk: "Medical emergencies, self-harm and assaults in cells may go unnoticed for long periods without regular checks.",
              mits: [
                "Establish documented face-to-face observation checks; Texas Commission on Jail Standards rules require checks at least every 60 minutes, and at least every 30 minutes for prisoners who are assaultive, potentially suicidal or mentally ill.",
                "Use an electronic or paper log that records the time and officer for each check.",
                "Treat camera monitoring as a supplement to, not a replacement for, in-person checks.",
                "Review observation logs during supervisory inspections."
              ],
              risks: ["in-custody-harm", "liability", "evidence-gap"],
              cost: "low"
            },
            {
              id: "cus-med-no-screening",
              title: "No medical and suicide screening at intake",
              text: "Prisoners arriving at holding are not asked about medical conditions, medication or suicide risk, and information from the sending jail is not passed along.",
              risk: "Officers who do not know a prisoner is at risk cannot place them under closer watch or get medical help in time.",
              mits: [
                "Ask each prisoner standard screening questions on arrival and record the answers.",
                "Arrange for the sending facility to share known medical and suicide-risk information with transport officers.",
                "Place at-risk prisoners in a cell under closer observation.",
                "Train officers in first aid, CPR and the use of an AED (automated external defibrillator) located near holding."
              ],
              risks: ["in-custody-harm", "liability"],
              cost: "low"
            }
          ]
        },
        {
          name: "Keys, Locks & Door Control in Secure Areas",
          vulns: [
            {
              id: "cus-key-uncontrolled",
              title: "Holding area keys not controlled",
              text: "Keys to holding cells and secure doors are not inventoried, are carried home, or are left in unsecured drawers.",
              risk: "A lost or copied key can be used to free a prisoner or enter the secure area, and missing keys may not be noticed.",
              mits: [
                "Keep holding keys in a secure key cabinet with sign-out and sign-in records.",
                "Inventory keys at each shift change and investigate any missing key immediately.",
                "Re-key affected locks when a key cannot be accounted for.",
                "Keep keys out of reach and view of prisoners at all times."
              ],
              risks: ["escape", "insider", "unauthorized-entry"],
              cost: "low"
            },
            {
              id: "cus-key-door-control",
              title: "Secure doors left unlocked or propped",
              text: "Doors between the holding area and other parts of the building are left unlocked or propped open for convenience.",
              risk: "An open secure door removes the barrier that keeps a prisoner who breaks free inside the secure area.",
              mits: [
                "Keep all secure-area doors closed and locked at all times, with door-position alarms reporting to the holding control station.",
                "Consider remote door control from the holding control station so officers do not need to carry keys into cells.",
                "Address the reasons doors are propped, such as poor traffic flow, rather than allowing it."
              ],
              risks: ["escape", "unauthorized-entry"],
              cost: "med"
            },
            {
              id: "cus-key-power-failure",
              title: "Locks fail open during power loss",
              text: "The electronic locks in the secure area have not been confirmed to stay secure during a power failure, and there is no backup power for door controls.",
              risk: "If secure doors unlock when power fails, prisoners could leave the holding area during an outage.",
              mits: [
                "Confirm how each secure-area lock behaves when power is lost and record it.",
                "Provide backup power for door controls, cameras and intercoms in the secure area.",
                "Work with the fire marshal on emergency release procedures that maintain life safety and custody."
              ],
              risks: ["escape", "life-safety"],
              cost: "high"
            }
          ]
        },
        {
          name: "Unrestrained Defendants in Court",
          vulns: [
            {
              id: "cus-unr-no-procedure",
              title: "No procedure for unrestrained defendants",
              text: "When a judge orders restraints removed for a jury trial, there is no written procedure for officer positioning, staffing or the use of alternative restraints that are not visible to the jury.",
              risk: "Unrestrained in-custody defendants in front of a jury have more opportunity to assault someone or flee, and the courtroom may not be staffed for that.",
              mits: [
                "Write a procedure for unrestrained defendants covering officer positions, the number of officers and seating away from exits.",
                "Consider restraints that are not visible to the jury, such as leg braces under clothing, where the court approves.",
                "Brief the judge on the security plan and any risk information before trial.",
                "Have the defendant seated before the jury enters and remain seated until the jury leaves."
              ],
              risks: ["escape", "violence", "protectee-harm"],
              cost: "low"
            },
            {
              id: "cus-unr-standing-defendant",
              title: "Defendants allowed to move freely in court",
              text: "Defendants are allowed to stand and walk to the bench, the witness stand or the gallery during proceedings without an officer close by.",
              risk: "Moments such as pleas and sentencing are when defendants are most likely to react violently.",
              mits: [
                "Keep defendants seated during pleas and sentencing, as NCSC guidance recommends, or position an officer directly beside them.",
                "Position an officer between the defendant and the bench, and between the defendant and the gallery.",
                "Add officers for sentencing hearings and verdicts."
              ],
              risks: ["violence", "protectee-harm", "escape"],
              cost: "low"
            }
          ]
        },
        {
          name: "Escape & Emergency Procedures",
          vulns: [
            {
              id: "cus-esc-no-plan",
              title: "No written escape response plan",
              text: "There is no written plan for responding to an escape or escape attempt, including notifications, perimeter and search.",
              risk: "Without a plan, the first minutes after an escape, when recapture is most likely, are lost to confusion.",
              mits: [
                "Write an escape response plan covering alarms, notifications to law enforcement, building lockdown and search.",
                "Keep current photographs and descriptions of prisoners in holding for quick distribution.",
                "Drill the plan with court security, holding staff and local police at least annually."
              ],
              risks: ["escape", "delayed-response"],
              cost: "low"
            },
            {
              id: "cus-esc-evacuation",
              title: "No evacuation plan for prisoners",
              text: "The building's evacuation plan does not say how prisoners in holding will be evacuated, where they will be taken, and how they will be kept in custody during a fire or other emergency.",
              risk: "A building evacuation can result in prisoners mixing with the public, escaping, or being left in cells in danger.",
              mits: [
                "Write a prisoner evacuation procedure with a secure assembly point or relocation plan, staffing and restraint requirements.",
                "Coordinate the procedure with the fire department and the jail.",
                "Include the holding area in building evacuation drills."
              ],
              risks: ["escape", "life-safety", "in-custody-harm"],
              cost: "low"
            }
          ]
        }
      ]
    },
    {
      id: "le-facility",
      name: "Law Enforcement Facility",
      category: "Law Enforcement Facility",
      blurb: "Security of police stations, sheriff's offices and similar buildings, including the public lobby, booking, evidence, weapons, vehicles, records and protection of officers at the building.",
      subs: [
        {
          name: "Public Lobby & Front Counter",
          vulns: [
            {
              id: "lef-lob-no-ballistic",
              title: "Front counter lacks ballistic protection",
              text: "The front counter and public lobby are separated from staff by ordinary glass or an open counter, with no bullet-resistant protection.",
              risk: "Station lobbies are a known location for attacks on officers and civilian staff, and staff at an open counter have no protection from gunfire.",
              mits: [
                "Install bullet-resistant glazing and counter panels at the front counter; UL 752 Level III (rated to stop several rounds from a .44 Magnum handgun) is a common choice, with higher levels where rifle threats are assessed.",
                "Include the wall below and around the window in the protected area, not only the glass.",
                "Provide a pass-through drawer for documents and property so the barrier does not need to be opened."
              ],
              risks: ["violence", "personal-safety"],
              cost: "high"
            },
            {
              id: "lef-lob-door-uncontrolled",
              title: "Lobby door to offices not secured",
              text: "The door from the public lobby into the rest of the building is unlocked, can be opened from the lobby side, or is held open.",
              risk: "An unsecured lobby door lets anyone who enters the lobby reach offices, booking and evidence areas.",
              mits: [
                "Fit the lobby-to-office door with access control, a closer and a door-held alarm, and keep it locked at all times.",
                "Make the door and frame at least as resistant as the front counter barrier.",
                "Have staff meet visitors in the lobby or in a separate interview room off the lobby."
              ],
              risks: ["unauthorized-entry", "violence"],
              cost: "med"
            },
            {
              id: "lef-lob-after-hours",
              title: "Lobby open after hours without staff",
              text: "The lobby stays open after hours with no one present and no camera monitoring, or the after-hours call phone does not reach dispatch.",
              risk: "An unattended lobby can be used for vandalism, for leaving suspicious items, or for an ambush of officers responding to a lobby call.",
              mits: [
                "Monitor the lobby by camera from dispatch whenever it is open and unattended.",
                "Provide a call box that connects directly to dispatch and is tested regularly.",
                "Consider locking the lobby after hours and posting instructions for reaching an officer."
              ],
              risks: ["violence", "vandalism", "explosive-threat"],
              cost: "low"
            }
          ]
        },
        {
          name: "Booking & Detainee Processing",
          vulns: [
            {
              id: "lef-bk-sally-port",
              title: "Arrestees brought in through staff doors",
              text: "Arrestees are walked from patrol cars through a public or staff door instead of through a secure sally port (an enclosed, gated vehicle bay) leading directly to booking.",
              risk: "Arrestees moving through open parking areas and staff corridors can flee, assault staff or discard evidence.",
              mits: [
                "Consider a vehicle sally port connected directly to booking with gates that close before the vehicle is opened.",
                "Provide weapons lockers outside booking so officers secure firearms before handling arrestees.",
                "Until a sally port is available, use a single designated door, kept clear, with camera coverage."
              ],
              risks: ["escape", "violence"],
              cost: "high"
            },
            {
              id: "lef-bk-no-search",
              title: "Arrestees not searched before booking",
              text: "Arrestees are not searched thoroughly before entering the booking area, and property is not inventoried in their presence.",
              risk: "Weapons and drugs can be brought into the building, and property disputes cannot be resolved without a record.",
              mits: [
                "Search every arrestee before they enter booking, and search again before placing them in a holding cell.",
                "Inventory property in the arrestee's presence and have them sign the record.",
                "Use camera coverage of the booking counter and property inventory."
              ],
              risks: ["contraband", "evidence-gap", "liability"],
              cost: "low"
            },
            {
              id: "lef-bk-holding-welfare",
              title: "Short-term holding lacks welfare checks",
              text: "Short-term holding cells in booking contain ligature points and are not checked face to face on a regular schedule.",
              risk: "People in custody are at high risk of self-harm and medical crises in the first hours after arrest, especially when intoxicated.",
              mits: [
                "Replace tie-off points in holding cells with suicide-resistant fixtures.",
                "Conduct and record face-to-face checks on a set schedule, with more frequent checks for intoxicated, injured or at-risk people.",
                "Screen each arrestee for medical and suicide risk at booking and arrange medical care when needed."
              ],
              risks: ["in-custody-harm", "liability"],
              cost: "med"
            }
          ]
        },
        {
          name: "Interview Rooms",
          vulns: [
            {
              id: "lef-int-no-recording",
              title: "Interviews not recorded",
              text: "Interview rooms are not equipped to record audio and video of interviews, or recordings are not kept under evidence controls.",
              risk: "Unrecorded interviews leave the agency without evidence of what was said and how the interview was conducted.",
              mits: [
                "Install audio and video recording in each interview room with indicators showing when recording is active.",
                "Store recordings under evidence procedures with access logging.",
                "Write a policy on which interviews must be recorded, consistent with state law and prosecutor guidance."
              ],
              risks: ["evidence-gap", "liability"],
              cost: "med"
            },
            {
              id: "lef-int-room-hazards",
              title: "Interview rooms contain hazards",
              text: "Interview rooms contain loose furniture, objects that can be used as weapons, and no duress alarm, and the door can be locked from inside.",
              risk: "Interviews can turn violent, and interviewers may be trapped or assaulted with objects in the room.",
              mits: [
                "Fix furniture to the floor and remove loose objects from the room.",
                "Install a duress alarm reachable by the interviewer.",
                "Use door hardware that cannot be locked by the person being interviewed, and position the interviewer nearest the door.",
                "Provide a separate soft interview room for victims and witnesses."
              ],
              risks: ["violence", "in-custody-harm"],
              cost: "low"
            }
          ]
        },
        {
          name: "Evidence & Property Room",
          vulns: [
            {
              id: "lef-ev-access-broad",
              title: "Too many people can enter the evidence room",
              text: "Access to the evidence and property room is not limited to assigned evidence staff, and entries are not logged.",
              risk: "Broad access makes it impossible to show who handled evidence and increases the chance of theft of drugs, cash and firearms.",
              mits: [
                "Limit access to the evidence room to assigned evidence custodians, and require others to be escorted and signed in.",
                "Use electronic access control that records each entry by person and time.",
                "Install cameras at entry points and inside high-value storage areas.",
                "Review access logs regularly."
              ],
              risks: ["evidence-gap", "theft", "insider"],
              cost: "med"
            },
            {
              id: "lef-ev-chain-custody",
              title: "Chain of custody records incomplete",
              text: "Evidence items are not tracked from intake to disposition with a complete record of each transfer, and temporary evidence lockers are not secured.",
              risk: "A gap in the chain of custody can lead to evidence being excluded in court and to missing items going unnoticed.",
              mits: [
                "Use a tracking system, such as barcodes, recording each transfer of an item with date, time and person.",
                "Provide one-way evidence lockers that officers can load but only evidence staff can open.",
                "Separate high-value items such as drugs, cash, firearms and jewelry into additional locked storage.",
                "Dispose of items no longer needed under a written, approved procedure."
              ],
              risks: ["evidence-gap", "liability"],
              cost: "med"
            },
            {
              id: "lef-ev-no-audit",
              title: "No independent evidence audits",
              text: "The evidence room has not been audited or inventoried by someone outside the evidence unit, including after a change of evidence custodian.",
              risk: "Without independent audits, theft or loss of evidence may continue for years before it is discovered.",
              mits: [
                "Conduct periodic audits of a random sample of items by staff from outside the evidence unit.",
                "Conduct a full inventory whenever the evidence custodian changes.",
                "Report audit results to agency leadership and track corrective actions."
              ],
              risks: ["evidence-gap", "insider", "reputational"],
              cost: "low"
            }
          ]
        },
        {
          name: "Armory & Weapons Storage",
          vulns: [
            {
              id: "lef-arm-weak-room",
              title: "Armory not built as a secure room",
              text: "Agency firearms and ammunition are stored in a room with standard office walls, doors or locks, or in an area without an intrusion alarm.",
              risk: "Stolen agency weapons can be used in crimes and create serious liability and public concern.",
              mits: [
                "Store weapons in a room with reinforced walls, a solid-core or steel door and high-security locks.",
                "Install an intrusion alarm on the armory that reports to dispatch or a monitoring center.",
                "Store firearms in locked racks or safes within the room."
              ],
              risks: ["theft", "forced-entry", "reputational"],
              cost: "high"
            },
            {
              id: "lef-arm-no-inventory",
              title: "Weapons not inventoried regularly",
              text: "Agency weapons, ammunition and less-lethal equipment are not inventoried by serial number on a regular schedule, and issue and return are not recorded.",
              risk: "Missing weapons may not be noticed or traced to a person without regular inventory and issue records.",
              mits: [
                "Keep a serial-number inventory of all agency weapons and reconcile it on a regular schedule.",
                "Record each issue and return with the date and the officer's signature.",
                "Limit armory access to assigned armorers and supervisors."
              ],
              risks: ["theft", "insider", "evidence-gap"],
              cost: "low"
            },
            {
              id: "lef-arm-vehicle-weapons",
              title: "Weapons left in vehicles unsecured",
              text: "Rifles, shotguns and other weapons are left in patrol and take-home vehicles without locked racks or vaults.",
              risk: "Vehicle break-ins are a common source of stolen police weapons.",
              mits: [
                "Install locked weapon mounts or vaults in all vehicles that carry agency weapons.",
                "Write a policy on removing or securing weapons from vehicles left unattended, especially overnight at home.",
                "Report and investigate any vehicle weapon theft immediately."
              ],
              risks: ["theft", "reputational"],
              cost: "med"
            }
          ]
        },
        {
          name: "Fleet & Secure Parking",
          vulns: [
            {
              id: "lef-flt-open-lot",
              title: "Patrol vehicle lot open to the public",
              text: "Patrol vehicles and officers' personal vehicles are parked in an open lot that the public can walk or drive into.",
              risk: "Open lots allow tampering with vehicles, theft of equipment, and observation of officers' personal vehicles and license plates.",
              mits: [
                "Enclose the fleet and employee parking area with fencing and an access-controlled gate.",
                "Install lighting and cameras covering the lot, monitored by dispatch.",
                "Separate employee parking from public parking."
              ],
              risks: ["vandalism", "theft", "sabotage"],
              cost: "high"
            },
            {
              id: "lef-flt-keys",
              title: "Vehicle keys not controlled",
              text: "Fleet vehicle keys are left in vehicles or kept on an open key board.",
              risk: "Uncontrolled keys allow vehicles and their equipment to be taken by anyone in the building or lot.",
              mits: [
                "Store fleet keys in a locked key cabinet or electronic key control system that records each sign-out.",
                "Prohibit leaving keys in unattended vehicles.",
                "Audit keys against the fleet list regularly."
              ],
              risks: ["theft", "insider"],
              cost: "low"
            }
          ]
        },
        {
          name: "Records & Criminal Justice Information",
          vulns: [
            {
              id: "lef-rec-terminals-exposed",
              title: "Criminal justice data visible to visitors",
              text: "Computer screens and terminals that display criminal history and other criminal justice information can be seen by visitors, or are left logged in and unattended.",
              risk: "Criminal justice information is protected by the FBI CJIS Security Policy (the federal rules for systems connected to FBI criminal justice data), and exposure can lead to loss of system access and harm to the people in the records.",
              mits: [
                "Place terminals that access criminal justice information in areas where visitors cannot see the screens, or use privacy screens.",
                "Set screens to lock automatically after a short period of inactivity.",
                "Escort all visitors, including vendors and contractors, in areas where this information is accessed."
              ],
              risks: ["info-compromise", "liability"],
              cost: "low"
            },
            {
              id: "lef-rec-unscreened-access",
              title: "Unscreened personnel with records access",
              text: "Staff, IT contractors or cleaning crews with unescorted access to records areas or criminal justice systems have not had fingerprint-based background checks or security awareness training.",
              risk: "The CJIS Security Policy requires screening and security training for people with unescorted access, and unscreened insiders can misuse or leak information.",
              mits: [
                "Require fingerprint-based background checks for personnel with unescorted access to criminal justice information or the areas where it is processed.",
                "Provide security awareness training to these personnel when they start and on the schedule the policy sets.",
                "Remove system access and building access promptly when personnel leave or change roles.",
                "Review user accounts and access logs for misuse."
              ],
              risks: ["insider", "info-compromise"],
              cost: "low"
            },
            {
              id: "lef-rec-paper-disposal",
              title: "Paper records not disposed of securely",
              text: "Printed reports, criminal histories and other sensitive records are discarded in regular trash or recycling bins.",
              risk: "Discarded records can be recovered and used to identify witnesses, victims, informants or officers.",
              mits: [
                "Shred sensitive paper records on site or use a bonded shredding service with locked collection bins.",
                "Store paper records in locked cabinets or a locked records room.",
                "Have authorized staff witness or certify destruction."
              ],
              risks: ["info-compromise", "witness-intimidation"],
              cost: "low"
            }
          ]
        },
        {
          name: "Staff Entrances & Ambush Awareness",
          vulns: [
            {
              id: "lef-amb-predictable-entry",
              title: "Staff entrance visible and predictable",
              text: "The staff entrance and the route from the parking lot are visible from public streets, poorly lit, and used at predictable shift-change times.",
              risk: "Attacks on officers at or near their stations often take place where officers are predictable, such as entrances, parking lots and shift changes.",
              mits: [
                "Screen the staff entrance and parking route from public view with fencing or landscaping that does not create hiding spots.",
                "Light the staff entrance and parking route and cover them with cameras monitored by dispatch.",
                "Train officers to check the area before leaving the building and report suspicious vehicles or people.",
                "Stagger shift-change arrival times where practical."
              ],
              risks: ["violence", "personal-safety", "surveillance"],
              cost: "med"
            },
            {
              id: "lef-amb-perimeter-standoff",
              title: "Vehicles can approach the building closely",
              text: "Vehicles can drive or park directly against the building's front and staff entrances with no barriers.",
              risk: "A vehicle parked against the building can be used to ram an entrance or deliver an explosive device.",
              mits: [
                "Install bollards or planters rated for vehicle impact at entrances and along the building front.",
                "Prohibit unattended parking next to the building and enforce it.",
                "Use the Interagency Security Committee risk management process to set the appropriate distance and barrier level for the building."
              ],
              risks: ["vehicle-attack", "explosive-threat"],
              cost: "high"
            },
            {
              id: "lef-amb-no-lockdown",
              title: "No lockdown or attack response plan",
              text: "The building has no written plan or drills for an armed attack on the building itself, including lockdown of the lobby and staff areas.",
              risk: "Staff inside a law enforcement building may assume they are protected and not be ready to respond to an attack on the building.",
              mits: [
                "Write a building attack response plan covering lockdown, communications, and response by on-duty officers.",
                "Provide a lockdown control that secures lobby and entry doors from dispatch or the front desk.",
                "Drill the plan with sworn and civilian staff, including after-hours shifts."
              ],
              risks: ["violence", "life-safety", "delayed-response"],
              cost: "low"
            }
          ]
        }
      ]
    }
  ],
  risks: {
    "escape": {
      title: "Escape from custody",
      text: "A person in custody at {subject} may escape during transport, unloading, holding or movement to and from court, endangering staff, the public and the people involved in the case.",
      mits: [
        "Keep prisoner circulation physically separate from public and staff areas, with secure doors that stay locked.",
        "Apply restraints and searches consistently under a written policy.",
        "Staff each prisoner movement with enough officers and clear routes ahead of the escort.",
        "Maintain and drill a written escape response plan with local law enforcement.",
        "Cover sally ports, holding areas and escort routes with monitored cameras."
      ]
    },
    "contraband": {
      title: "Contraband introduction",
      text: "Weapons, drugs, restraint keys or other prohibited items may be brought into {subject} or passed to people in custody, creating risk of violence, escape, overdose or self-harm.",
      mits: [
        "Screen everyone and everything entering the building or secure areas.",
        "Search people in custody on arrival, before and after court appearances, and after any contact.",
        "Search holding cells and transport vehicles before and after each use.",
        "Prevent contact between people in custody and the public.",
        "Record searches and items found, and review records for patterns."
      ]
    },
    "protectee-harm": {
      title: "Harm to judges and protected officials",
      text: "Judges, judicial officers and other protected officials connected with {subject} may be threatened, stalked or attacked at work, while traveling, or at home because of their official duties.",
      mits: [
        "Report threats the same day and have trained personnel assess them.",
        "Keep judges' circulation, parking and entrances separate from the public and from people in custody.",
        "Provide duress alarms, ballistic protection and escorts where the risk assessment supports them.",
        "Offer home security assessments and help with reducing publicly available personal information.",
        "Train judicial officers in personal and home safety."
      ]
    },
    "in-custody-harm": {
      title: "Harm to people in custody",
      text: "People held at {subject} may suffer self-harm, suicide, medical emergencies or assault by others in custody, and the agency holding them is responsible for their safety.",
      mits: [
        "Screen each person for medical and suicide risk on arrival.",
        "Use suicide-resistant cells without points where a ligature could be tied.",
        "Conduct and record face-to-face observation checks at the frequency required by applicable standards, with closer watch for at-risk people.",
        "Separate people in custody by sex, age and known conflicts.",
        "Train staff in first aid, CPR and emergency medical response."
      ]
    },
    "witness-intimidation": {
      title: "Witness, victim and juror intimidation",
      text: "Witnesses, victims and jurors at {subject} may be approached, threatened or influenced by parties, people in custody or their associates, which can harm them and undermine proceedings.",
      mits: [
        "Provide separate waiting areas and escorted routes for victims, witnesses and jurors.",
        "Keep juror identities and personal details out of public view.",
        "Separate opposing groups in courtrooms and waiting areas.",
        "Report approaches and threats to the judge and law enforcement the same day."
      ]
    },
    "unauthorized-entry": {
      title: "Unauthorized entry",
      text: "People without permission may enter {subject} or its restricted areas, bypassing screening and other security controls.",
      mits: [
        "Limit entry to controlled points with screening or access control.",
        "Keep restricted and secure doors closed and locked, with door alarms.",
        "Manage keys and access cards and remove access promptly when no longer needed.",
        "Train staff to challenge or report people who are out of place and to prevent tailgating."
      ]
    },
    "violence": {
      title: "Violence against people on site",
      text: "Staff, visitors or people in custody at {subject} may be assaulted or attacked, including by a person with a weapon.",
      mits: [
        "Screen people and items entering the building.",
        "Install duress alarms at higher-risk locations and test them regularly.",
        "Provide ballistic protection and barriers where the assessment supports them.",
        "Train staff in de-escalation and emergency response.",
        "Maintain and drill emergency plans with local law enforcement."
      ]
    },
    "explosive-threat": {
      title: "Explosive or bomb threat",
      text: "An explosive device may be brought into or placed near {subject}, or a bomb threat may be received, putting occupants at risk and disrupting operations.",
      mits: [
        "Screen people, packages and deliveries entering the building.",
        "Conduct routine sweeps of public and sensitive areas.",
        "Control vehicle approach and parking near the building.",
        "Keep a bomb threat procedure and checklist at phones that receive public calls.",
        "Train staff to recognize and report suspicious items."
      ]
    },
    "vehicle-attack": {
      title: "Vehicle attack",
      text: "A vehicle may be used to ram {subject}, its entrances, or people near it, or to bring an explosive device close to the building.",
      mits: [
        "Install vehicle barriers such as bollards at entrances and along exposed frontage.",
        "Control vehicle access to parking next to the building.",
        "Keep standoff distance between public parking and the building.",
        "Monitor approaches with cameras."
      ]
    },
    "personal-safety": {
      title: "Personal safety of staff and visitors",
      text: "Individuals at {subject}, including staff arriving, leaving or working alone, may be exposed to assault, robbery or harassment.",
      mits: [
        "Provide lighting and camera coverage on routes to and from parking.",
        "Offer escorts for staff where risk is elevated.",
        "Provide duress alarms or other quick ways to call for help.",
        "Train staff in personal safety awareness."
      ]
    },
    "surveillance": {
      title: "Hostile surveillance",
      text: "People planning harm may watch {subject}, its staff or officials to learn routines, vehicles, entrances and security practices.",
      mits: [
        "Reduce information visible from outside, such as names on parking signs and open window coverings.",
        "Vary routines for higher-risk people where practical.",
        "Train staff to notice and report people who appear to be watching the building or photographing security features.",
        "Review camera footage when suspicious activity is reported."
      ]
    },
    "insider": {
      title: "Insider threat",
      text: "Employees, contractors or others with authorized access to {subject} may misuse that access to steal, leak information or help someone cause harm.",
      mits: [
        "Conduct background checks for people with access to sensitive areas and information.",
        "Grant access only as needed for each role and review it regularly.",
        "Log and review access to sensitive areas, systems and property.",
        "Remove access promptly when people leave or change roles.",
        "Give staff a clear way to report concerns."
      ]
    },
    "info-compromise": {
      title: "Compromise of sensitive information",
      text: "Sensitive information held at {subject}, such as case files, criminal justice data or personal details of officials, jurors and witnesses, may be exposed, stolen or misused.",
      mits: [
        "Limit access to sensitive information to people who need it.",
        "Protect screens and records from public view.",
        "Store paper records securely and destroy them by shredding.",
        "Train staff on information handling rules that apply to their systems."
      ]
    },
    "evidence-gap": {
      title: "Gaps in records and evidence",
      text: "Missing logs, recordings or chain of custody records at {subject} may make it impossible to show what happened, who was responsible or that procedures were followed.",
      mits: [
        "Record security checks, tests, searches and incidents in a consistent log.",
        "Keep camera recordings for a set period and protect them from alteration.",
        "Track evidence and property transfers from intake to disposition.",
        "Audit records periodically."
      ]
    },
    "delayed-response": {
      title: "Delayed emergency response",
      text: "Help may not reach the location of an incident at {subject} quickly enough because alarms are not monitored, communications are poor or staff are not trained.",
      mits: [
        "Monitor alarms and cameras from a staffed location whenever the building is occupied.",
        "Link alarms to camera views and provide direct communications to responders.",
        "Test alarms and communications regularly.",
        "Train and drill staff on emergency procedures."
      ]
    },
    "delayed-detection": {
      title: "Delayed detection",
      text: "A threat, intrusion or emergency at {subject} may not be noticed until harm has occurred because areas are not watched or checked.",
      mits: [
        "Provide camera coverage of entrances, secure areas and routes.",
        "Conduct regular checks and sweeps on a set schedule.",
        "Install alarms on doors and secure spaces.",
        "Review coverage for blind spots."
      ]
    },
    "liability": {
      title: "Legal and financial liability",
      text: "Failure to follow recognized practices or applicable standards at {subject} may expose the responsible agencies to lawsuits, findings by oversight bodies and financial loss.",
      mits: [
        "Put security and custody procedures in writing and train staff on them.",
        "Compare practices against applicable standards and recognized guidance.",
        "Document training, inspections and corrective actions.",
        "Consult legal counsel on policies affecting people in custody."
      ]
    },
    "life-safety": {
      title: "Life safety",
      text: "Occupants of {subject}, including people in custody, may be harmed during a fire, medical emergency or other event if emergency plans, equipment and training are inadequate.",
      mits: [
        "Maintain written emergency and evacuation plans that cover all occupants, including people in custody.",
        "Coordinate plans with the fire department and other responders.",
        "Hold regular drills.",
        "Keep emergency equipment, communications and backup power in working order."
      ]
    },
    "disruption": {
      title: "Disruption of operations",
      text: "Incidents, noise or poor coordination at {subject} may interrupt proceedings and services, delay cases or cause mistrials.",
      mits: [
        "Plan security in advance for proceedings and events with higher risk.",
        "Separate groups that may come into conflict.",
        "Maintain a security committee to coordinate decisions.",
        "Review incidents and adjust procedures."
      ]
    },
    "theft": {
      title: "Theft",
      text: "Money, property, evidence, weapons or equipment at {subject} may be stolen by outsiders or insiders.",
      mits: [
        "Secure high-value items in locked, alarmed storage.",
        "Control and log access to storage areas.",
        "Inventory property and equipment on a regular schedule.",
        "Use cameras at storage and cash-handling locations."
      ]
    },
    "vandalism": {
      title: "Vandalism",
      text: "Property at {subject}, including vehicles and building fixtures, may be damaged or defaced.",
      mits: [
        "Light and monitor exterior areas and parking.",
        "Control access to vehicle and equipment areas.",
        "Repair damage promptly and record incidents."
      ]
    },
    "forced-entry": {
      title: "Forced entry",
      text: "Doors, walls or windows protecting sensitive areas of {subject} may be broken or bypassed by force.",
      mits: [
        "Use doors, frames, walls and locks matched to the value of what they protect.",
        "Install intrusion alarms on sensitive rooms.",
        "Inspect hardware and repair damage promptly."
      ]
    },
    "reputational": {
      title: "Reputational harm",
      text: "A security failure at {subject}, such as lost evidence, stolen weapons or an escape, may reduce public trust in the agencies involved.",
      mits: [
        "Audit high-risk functions independently.",
        "Report and correct problems promptly.",
        "Maintain written procedures and records that show due care."
      ]
    },
    "sabotage": {
      title: "Sabotage or tampering",
      text: "Vehicles, equipment or systems at {subject} may be tampered with to disable them or to harm the people who use them.",
      mits: [
        "Secure vehicle and equipment areas from public access.",
        "Cover these areas with monitored cameras.",
        "Inspect vehicles and equipment before use."
      ]
    }
  }
});
