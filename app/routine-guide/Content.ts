// app/routine-guide/Content.ts

export interface Task {
    id: string;
    text: string;
    tip?: string;
    isCritical?: boolean;
    isAction?: boolean;
  }
  
  export interface Phase {
    id: string;
    title: string;
    tasks: Task[];
  }
  
  export interface VisualIntel {
    tag: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface SurvivalPriority {
    id: string;
    text: string;
  }
  
  export interface ChapterContent {
    slug: string;
    chapterNumber: string;
    title: string;
    subTitle: string;
    description: string;
    phases: Phase[];
    priorities: SurvivalPriority[];
    visualIntel: VisualIntel[];
    faq?: { q: string; a: string }[];
  }
  
  export const CHAPTERS_CONTENT: Record<string, ChapterContent> = {
    "chapter-1-birth-stealth-walkthrough": {
      slug: "chapter-1-birth-stealth-walkthrough",
      chapterNumber: "01",
      title: "Birth",
      subTitle: "Stealth & Logic Protocol",
      description: "Navigate the complete 35-minute operational sequence of Chapter 1. This protocol covers initial gear acquisition, environmental puzzle solving, and the high-stakes stealth infiltration of the Living Quarters.",
      phases: [
        {
          id: 'arrivals',
          title: 'Phase 1: Initial Deployment & Gear',
          tasks: [
            { id: 'p1-1', text: 'Print & Retrieve ID Card', tip: 'The physical ID card slides into a gap under the printer desk; you must crouch to retrieve it.' },
            { id: 'p1-2', text: 'Equip Space Helmet', tip: 'Essential for oxygen-depleted zones. Located in the illuminated wall recess.' },
            { id: 'p1-3', text: 'Retrieve C.A.T Tool', tip: 'Located in Meeting Room A01. Ensure you have the blue battery pack from the nearby lockers.' },
            { id: 'p1-4', text: 'Decipher Elevator PIN', tip: 'Sync your C.A.T to the projector. The code is randomized and found under the DATABASE tab.', isCritical: true },
          ]
        },
        {
          id: 'transit',
          title: 'Phase 2: Transit Station Override',
          tasks: [
            { id: 'p2-1', text: 'Bypass Tram Station Shutter', tip: 'Look for sparking fuse boxes above the entrance. Fire a C.A.T pulse to force the gate.', isAction: true },
            { id: 'p2-2', text: 'Reset Terminal Error E02', tip: 'Crouch at the base of the terminal and toggle the physical switch twice to clear the lock.' },
          ]
        },
        {
          id: 'stealth',
          title: 'Phase 3: Living Quarters Stealth',
          tasks: [
            { id: 'p3-1', text: 'Avoid Type-05 Detection', tip: 'Break line-of-sight when the red lens sweep approaches. Use dark corners as hard cover.', isCritical: true },
            { id: 'p3-2', text: 'Navigate Ventilation Grids', tip: 'Shoot C.A.T pulses at high-altitude fans to stall them, allowing crawl-space access.', isAction: true },
          ]
        },
        {
          id: 'extraction',
          title: 'Phase 4: Extraction Sequence',
          tasks: [
            { id: 'p4-1', text: 'Final ID Verification', tip: 'Look at your character\'s chest plate to verify your personal login ID before terminal entry.' },
            { id: 'p4-2', text: 'Initiate Tram Departure', tip: 'The chapter ends once the tram is successfully activated for the Main Hub.' },
          ]
        }
      ],
      priorities: [
        { id: "01", text: "Database Integrity: Randomized codes change every playthrough. Always verify your PDA Database." },
        { id: "02", text: "Silent Movement: Sound carries in metal corridors. Crouching reduces your detection radius significantly." },
        { id: "03", text: "Battery Management: C.A.T pulses are finite. Save charges for environmental overrides rather than distractions." }
      ],
      visualIntel: [
        {
            tag: "INTEL_01: DATABASE_SYNC",
            title: "P.D.A. Credential Retrieval",
            description: "Access the 'DATABASE' tab on your Personal Data Assistant to retrieve randomized security credentials, such as the Arrival Elevator PIN.",
            image: "/images/routine/ch1-pda-database.webp"
        },
        {
            tag: "INTEL_02: SHUTTER_OVERRIDE",
            title: "C.A.T. Pulse Interaction",
            description: "Identify sparking terminals near blocked pathways. Fire a tactical C.A.T. pulse to force open heavy shutters and access the Tram Station.",
            image: "/images/routine/ch1-tram-shutter.webp"
        }
      ],
      faq: [
        { q: "Why is the Elevator Code not 3519?", a: "Routine uses randomized logic. Check your own PDA Database tab to find the unique code for your session." },
        { q: "How do I survive the first robot?", a: "Stay in the shadows and wait for its light to pass. Do not run; it is faster than you." }
      ]
    },

    "chapter-2-incision-stealth-walkthrough": {
      slug: "chapter-2-incision-stealth-walkthrough",
      chapterNumber: "02",
      title: "Incision",
      subTitle: "A.S.N. Access Protocol",
      description: "Infiltrate the Mall sector to retrieve the Ultraview Module. Master infrared smudge analysis to bypass randomized security grids and reach the A.S.N. Gateway.",
      phases: [
        {
          id: 'mall-arrival',
          title: 'Phase 1: Mall Entry & Mini IC',
          tasks: [
            { id: 'c2-1-1', text: 'Validate ID at Reception', tip: 'Enter the ID from your chest badge. Talk to the Mini IC robot to unlock the Staff Entrance ladder.' },
            { id: 'c2-1-2', text: 'Bypass the Maintenance Hatch', tip: 'Shoot the panel through the window to trigger the hatch release. Crawl through to enter the Mall.', isAction: true },
            { id: 'c2-1-3', text: 'Loop the Type-05 Stalker', tip: 'A robot will cut through the door. Use the central table to loop around it and escape.' },
          ]
        },
        {
          id: 'ultraview',
          title: 'Phase 2: Ultraview Module Acquisition',
          tasks: [
            { id: 'c2-2-1', text: 'Unlock John Coopers Office', tip: 'Shoot the ceiling panel where the yellow wire terminates to unlock the door.', isAction: true },
            { id: 'c2-2-2', text: 'Retrieve Ultraview Module', tip: 'Found in O’Nelly’s Electronics on the shelf. This unlocks the C.A.T. flashlight and IR scanner.', isCritical: true },
            { id: 'c2-2-3', text: 'Decode the UV Fingerprint', tip: 'Aim Ultraview at keypads. The HEAVIEST smudge is the first digit; the FADED one is the last.', isCritical: true },
          ]
        },
        {
          id: 'mall-escape',
          title: 'Phase 3: Maintenance & Escape',
          tasks: [
            { id: 'c2-3-1', text: 'Override Mall Exit Shutters', tip: 'Lean out the maintenance room window to blast the hidden fuse box.', isAction: true },
            { id: 'c2-3-2', text: 'Outrun the Lockdown Pursuit', tip: 'After enabling the exit at the Megazone terminal, a Type-05 will chase you. Do not stop until you reach the elevator.' },
          ]
        },
        {
          id: 'asn-gateway',
          title: 'Phase 4: Entering the A.S.N.',
          tasks: [
            { id: 'c2-4-1', text: 'Gateway ID & Code Scan', tip: 'Scan Kei’s ID card and use Ultraview to reveal the hidden Access Code on the terminal.', isCritical: true },
            { id: 'c2-4-2', text: 'Overload the Mini IC', tip: 'Shoot the talking Mini IC as requested to force the A.S.N. elevator open.', isAction: true },
          ]
        }
      ],
      priorities: [
        { 
          id: "01", 
          text: "UV Fingerprint Sequencing: Smudge intensity equals digit order. The thickest/brightest smudge is the 1st digit, while the most faded is the last. Scan all keypads with Ultraview IR." 
        },
        { 
          id: "02", 
          text: "Mini IC Navigation: Use the 'Push for Assistance' button at reception to spawn a Mini IC. Follow it to unlock the ladder-access Staff Entrance; it is the only way into the Mall." 
        },
        { 
          id: "03", 
          text: "Tactical Lean Execution: Standard aiming is blocked by window frames in the Maintenance Room. You MUST use the Lean mechanic (Space + A/D) to hit fuse boxes located outside." 
        },
        { 
          id: "04", 
          text: "ASN Gateway Protocol: To enter the ASN, you must provide both Kei’s ID (from Living Quarters) and the Access Code revealed by Ultraview. Shoot the Mini IC to force the final elevator." 
        }
      ],
      visualIntel: [
        {
          tag: "INTEL_01: ULTRAVIEW_IR_SCAN",
          title: "Infrared Smudge Analysis",
          description: "Obtained at O’Nelly’s Electronics. Use the IR Backlight to visualize fingerprints on terminals. This is the primary method for bypassing randomized security locks.",
          image: "/images/routine/ch2-uv-logic.webp" 
        },
        {
          tag: "INTEL_02: MAINTENANCE_OVERRIDE",
          title: "External Fuse Trajectory",
          description: "Located near the Mall Exit. Identify wires leading out of the window. Use the Lean mechanic to gain a clear line of sight on the external relay to reset the exit shutter.",
          image: "/images/routine/ch2-lean-fuse.webp"
        }
      ],
      faq: [
        { q: "Why is the Mall Exit door showing an error?", a: "You must first visit John Cooper's office terminal and manually blast the fuse box in the maintenance room." },
        { q: "What happens if I shoot the Mini IC?", a: "In the Gateway, shooting the Mini IC is required to overload the system and open the A.S.N. elevator." }
      ]
    },

    "chapter-3-re-create-stealth-walkthrough": {
    slug: "chapter-3-re-create-stealth-walkthrough",
    chapterNumber: "03",
    title: "Re-Create",
    subTitle: "The Core Shutdown Protocol",
    description: "The final confrontation with the A.S.N. network. In Routine Chapter 3, you must navigate the central core chamber, de-activate randomized safety nodes, and confront the truth on the lunar surface.",
    phases: [
      {
        id: 'shutdown-initiation',
        title: 'Phase 1: Initiating the Shutdown',
        tasks: [
          { id: 'c3-1-1', text: 'Locate the Tape Recorder', tip: 'Found next to the body in the initial A.S.N. corridor. Listen for critical lore.' },
          { id: 'c3-1-2', text: 'Clear Terminal Error Messages', tip: 'In the dark room, close all pop-up dialogue boxes on the first terminal to avoid memory errors.' },
          { id: 'c3-1-3', text: 'Trigger Shutdown Sequence', tip: 'Click the Shutdown tab (bottom-left) and select Initiate to proceed.', isCritical: true },
        ]
      },
      {
        id: 'exposing-core',
        title: 'Phase 2: Node Synchronization',
        tasks: [
          { id: 'c3-2-1', text: 'Identify Randomized Node Numbers', tip: 'Check the second glowing terminal; it will assign three specific node IDs (e.g., A3, A9).', isCritical: true },
          { id: 'c3-2-2', text: 'Manually Lower Node Handles', tip: 'Locate the numbered nodes in the center. Use Ultraview if it is too dark to read numbers.' },
          { id: 'c3-2-3', text: 'Activate Release Switches', tip: 'Once nodes are synced, turn to the core housing and flip both manual release switches.', isAction: true },
          { id: 'c3-2-4', text: 'Fire C.A.T. Blast at the Core', tip: 'Switch your C.A.T. to normal mode and blast the exposed core to trigger the event.', isAction: true },
        ]
      },
      {
        id: 'lunar-surface',
        title: 'Phase 3: The Lunar Surface',
        tasks: [
          { id: 'c3-3-1', text: 'Approach the Core Housing', tip: 'Walk toward the structure on the desolate surface. There are no enemies here.' },
          { id: 'c3-3-2', text: 'Investigate the Clicking Sound', tip: 'Wander the surface until you hear a distinct metallic clicking noise.' },
          { id: 'c3-3-3', text: 'Interact with the White Fish', tip: 'Look at the ground for the flapping tail. Approach it to complete the protocol.', isCritical: true },
        ]
      }
    ],
    priorities: [
      { id: "01", text: "Randomization Alert: Node numbers are different in every playthrough. Always check the terminal before pulling handles." },
      { id: "02", text: "Save Point: Use the Wireless Access Point on the wall in the initial corridor before entering the Core room." },
      { id: "03", text: "C.A.T. Mode: Ensure you switch back to 'Normal Mode' from 'Ultraview' to damage the Core." }
    ],
    visualIntel: [
      {
        tag: "INTEL_05: NODE_IDENTIFICATION",
        title: "Manual Node Calibration",
        description: "Each node in the central hub is labeled. If visibility is low, the Ultraview Module will highlight the etched ID numbers.",
        image: "/images/routine/ch3-nodes.webp"
      },
      {
        tag: "INTEL_06: THE_WHITE_FISH",
        title: "Final Interaction Point",
        description: "The White Fish on the lunar surface is the final trigger for the chapter's conclusion. Follow the clicking audio cues.",
        image: "/images/routine/ch3-white-fish.webp"
      }
    ],
    faq: [
      { q: "The terminal shows a 'Memory Error', what do I do?", a: "You must manually click and close all the floating error windows on the terminal screen before the Shutdown tab becomes functional." },
      { q: "I can't find the nodes assigned to me?", a: "The nodes are arranged in a circle around the core. Use your flashlight to check the base of each pillar for the ID tags." }
    ]
    },

    "chapter-4-adrift-stealth-walkthrough": {
      slug: "chapter-4-adrift-stealth-walkthrough",
      chapterNumber: "04",
      title: "Adrift",
      subTitle: "The Ward & Interface Protocol",
      description: "Navigate 'The Canal' and 'The Ward' in Routine Chapter 4. This stage introduces the Security Interface Module and the terrifying Entity-A. Master power diversion and sensory tests to escape the facility.",
      phases: [
        {
          id: 'interface-module',
          title: 'Phase 1: Security Interface Upgrade',
          tasks: [
            { id: 'c4-1-1', text: 'Locate the Breaker in The Canal', tip: 'Divert power to Archives, Door Imaging 01, and Door Systems to enable the reboot screen.' },
            { id: 'c4-1-2', text: 'Retrieve the Interface Module', tip: 'Found on the desk in the Reception area (accessible via the floor hatch).' },
            { id: 'c4-1-3', text: 'Enable Security Interface Monitor', tip: 'Use your new C.A.T. module to aim and fire at the screen above the Archive terminal.', isAction: true },
          ]
        },
        {
          id: 'server-reboot',
          title: 'Phase 2: Restoring Server Operations',
          tasks: [
            { id: 'c4-2-1', text: 'Run Server Diagnostics', tip: 'Connect wirelessly to the Server terminal. Note the randomized damaged drawers (e.g., J3, H3).', isCritical: true },
            { id: 'c4-2-2', text: 'Escape Entity-A', tip: 'Once the server reboots, the Entity-A awakens. Sprint to the lift and do not look back.', isAction: true },
            { id: 'c4-2-3', text: 'Access Kali’s Locker', tip: 'Get the code (e.g., 0236) from the Archive Diary. Collect the four photographs inside.', isCritical: true },
          ]
        },
        {
          id: 'sensory-tests',
          title: 'Phase 3: The Vestibule & Level 02 Clearance',
          tasks: [
            { id: 'c4-3-1', text: 'Crack the Vestibule Code', tip: 'Find 4 symbols using Ultraview at locations shown in Kali’s photos (White Tree, Reception Door, Server Lift, Sink).' },
            { id: 'c4-3-2', text: 'Complete Optical & Auditory Tests', tip: 'Optical: 3 shapes/Ball. Auditory: Back/Unchanged.', isAction: true },
            { id: 'c4-3-3', text: 'Obtain Level 02 Security', tip: 'Drain the basin, crawl through the pipe to find the User ID, and upgrade your C.A.T. at the terminal.', isCritical: true },
          ]
        }
      ],
      priorities: [
        { id: "01", text: "Invisible Threat: Entity-A cannot be seen. Listen for heavy breathing and metallic clanging; use small side rooms to break line of sight." },
        { id: "02", text: "Power Management: Doors only function if the corresponding zone (Commons, Lift, Door Systems) is powered at a Breaker terminal." },
        { id: "03", text: "Screenshot Logic: Take actual screenshots of Kali's note and the four photos; you will need to cross-reference them frequently." }
      ],
      visualIntel: [
        {
          tag: "INTEL_07: INTERFACE_AIM",
          title: "Module Targeting",
          description: "Aim your C.A.T. at the small secondary monitors above security doors to bypass locks. Clearance Level 01 or 02 is required.",
          image: "/images/routine/ch4-interface-use.webp"
        },
        {
          tag: "INTEL_08: UV_SYMBOL_HUNT",
          title: "Vestibule Symbol Locations",
          description: "Symbols are hidden in plain sight. Use the Ultraview Module on the wall next to the Server elevator to reveal the hidden digits.",
          image: "/images/routine/ch4-uv-symbols.webp"
        }
      ],
      faq: [
        { q: "How do I know which server drawers to pull?", a: "After running diagnostics, the terminal lists specific codes (e.g., D2, E3). Find these labels on the side of the server cabinets in the hallway." },
        { q: "I'm stuck at the Alignment Process screen?", a: "You must complete both the Optical and Auditory rooms successfully to drain the water basin and reach the User ID card." }
      ]
    },

    "chapter-5-endure-stealth-walkthrough": {
      slug: "chapter-5-endure-stealth-walkthrough",
      chapterNumber: "05",
      title: "Endure",
      subTitle: "The Main Wing & Decontamination",
      description: "Explore the haunted laboratories of the Main Wing in Routine Chapter 5. Solve the EL9 chemical formula, drain the flooded Overflow, and obtain Security Level 3 clearance to finally access The Canal.",
      phases: [
        {
          id: 'main-wing-access',
          title: 'Phase 1: Reaching the Main Wing',
          tasks: [
            { id: 'c5-1-1', text: 'Initialize the Bunker Airlock', tip: 'Follow the markers on the Lunar surface and use your Interface Module on the terminal screen.' },
            { id: 'c5-1-2', text: 'Locate Maria’s Access Code', tip: 'Enter the dining area; the ID card is leaning against a turquoise toolbox. Watch for the Entity-A jumpscare.' },
            { id: 'c5-1-3', text: 'Access Maria’s Terminal', tip: 'Enter the code and run the .EXE to unlock the laboratory corridors.', isCritical: true },
          ]
        },
        {
          id: 'disinfectant-puzzle',
          title: 'Phase 2: Compiling EL9 Disinfectant',
          tasks: [
            { id: 'c5-2-1', text: 'Reach the Disinfectant Lab', tip: 'Crawl through the hatch in Laboratory 01 and follow the vents to the safe zone.' },
            { id: 'c5-2-2', text: 'Input Chemical Formula', tip: 'Isopropyl Alcohol (Base), Copper Ion (A1), Hydrogen Peroxide (A2), EDTA (Stabilizer).', isCritical: true },
            { id: 'c5-2-3', text: 'Retrieve William’s ID', tip: 'Return to the Lobby, pass through Decontamination, and find the card next to the body in the Control Lab.', isAction: true },
          ]
        },
        {
          id: 'overflow-drainage',
          title: 'Phase 3: Draining the System & Final Upgrade',
          tasks: [
            { id: 'c5-3-1', text: 'Override the Shutter', tip: 'Use William’s code on the Access Override Terminal in the Cafeteria passage.' },
            { id: 'c5-3-2', text: 'Navigate Red Pipe Tunnels', tip: 'Follow the red pipes on the ceiling to find the central valve room and drain the water.', isAction: true },
            { id: 'c5-3-3', text: 'Upgrade to Security Level 3', tip: 'Go down the Overflow ladder, use William’s terminal, and fire your Interface Module at the security screen.', isCritical: true },
          ]
        }
      ],
      priorities: [
        { id: "01", text: "Safe Zones: The Disinfectant Lab and William's Terminal room are safe zones; use the Access Points there to save before facing Entity-A again." },
        { id: "02", text: "Chemical Accuracy: Selecting the wrong chemical for EL9 will fail the test. Ensure you use EDTA as the stabilizer to proceed." },
        { id: "03", text: "Sound Cues: Entity-A becomes much more aggressive after you use Maria's Terminal. Move between alcoves in the Main Wing." }
      ],
      visualIntel: [
        {
          tag: "INTEL_09: EL9_FORMULA",
          title: "Chemical Mixing Station",
          description: "Use the central pillar terminal to select the four required chemicals. Successful testing unlocks the Main Control Lab.",
          image: "/images/routine/ch5-el9-formula.webp"
        },
        {
          tag: "INTEL_10: VALVE_MAZE",
          title: "Overflow Drainage Valve",
          description: "The tunnel is maze-like. Look up at the ceiling red pipes to find the correct path to the drainage wheel.",
          image: "/images/routine/ch5-drainage-valve.webp"
        }
      ],
      faq: [
        { q: "Where is the EL9 recipe found?", a: "Notes scattered around the Disinfectant Lab hint at the formula, but the Copper Ion and EDTA are the most commonly missed components." },
        { q: "How do I get to the airlock after the upgrade?", a: "Backtrack to the Lobby lift. You will experience auditory hallucinations; ignore them and keep moving toward the airlock markers." }
      ]
    },

    "chapter-6-legacy-stealth-walkthrough": {
      slug: "chapter-6-legacy-stealth-walkthrough",
      chapterNumber: "06",
      title: "Legacy",
      subTitle: "The Canal & The Core Sphere",
      description: "The journey concludes in Routine Chapter 6. Align the lunar prongs, navigate the Echography imaging suites, and survive the final encounter with Entity-A as you reach the mysterious sphere within The Canal.",
      phases: [
        {
          id: 'prong-alignment',
          title: 'Phase 1: Dual Prong Calibration',
          tasks: [
            { id: 'c6-1-1', text: 'Align Prong 01', tip: 'Divert power at the Reception breaker. Use the terminal to reach 100% Proximity and Clarity.' },
            { id: 'c6-1-2', text: 'Power Prong 02', tip: 'Enter the Systems area near the White Tree; follow the corridor to the far-end breaker to restore power.' },
            { id: 'c6-1-3', text: 'Align Prong 02', tip: 'Adjust camera zoom and direction until the signal is fully synchronized.', isCritical: true },
          ]
        },
        {
          id: 'imaging-echography',
          title: 'Phase 2: The Lunar Echography',
          tasks: [
            { id: 'c6-2-1', text: 'Enter Imaging 01', tip: 'Return to the Archives, power Imaging 01, and use your Level 3 Interface Module to unlock the door.' },
            { id: 'c6-2-2', text: 'Initiate Echography Sequence', tip: 'Divert power to the Echography room at the end of the red corridor and press Continue on the terminal.' },
            { id: 'c6-2-3', text: 'Unlock "The Path"', tip: 'Once the sequence finishes, the previously locked door across from the breaker will open.', isAction: true },
          ]
        },
        {
          id: 'the-finale',
          title: 'Phase 3: The Final Sprint',
          tasks: [
            { id: 'c6-3-1', text: 'Reach the Turbine Room', tip: 'Follow The Path to the massive turbine; choose "YES" on the final prompt to begin the sequence.' },
            { id: 'c6-3-2', text: 'Escape the Ward', tip: 'Run back to the Archives during the alarm. Mash buttons when Entity-A grabs you in the dark corridor.', isAction: true },
            { id: 'c6-3-3', text: 'Enter the Core Sphere', tip: 'Follow the blue light into The Canal, enter the airlock, and walk toward the figure in the lunar cave.', isCritical: true },
          ]
        }
      ],
      priorities: [
        { id: "01", text: "Calibration Logic: Don't settle for 99%. Both bars must be 100% for the terminal to register the alignment." },
        { id: "02", text: "Entity-A Escape: In the final hallway, the grab is a scripted event. Mash your interaction keys (E/F/Mouse) to break free." },
        { id: "03", text: "Final Save: The Wireless Access Point in the Archives is your last chance to save before the turbine event." }
      ],
      visualIntel: [
        {
          tag: "INTEL_11: PRONG_UI",
          title: "Signal Synchronization",
          description: "Manipulate the UI sliders. Focus on Clarity first, then adjust Proximity for the perfect lock.",
          image: "/images/routine/ch6-prong-ui.webp"
        },
        {
          tag: "INTEL_12: THE_SPHERE",
          title: "The Heart of the Canal",
          description: "The final interaction point. Approach the white sphere on the lunar surface to trigger the game's ending.",
          image: "/images/routine/ch6-final-sphere.webp"
        }
      ],
      faq: [
        { q: "Why is 'The Path' door still locked?", a: "You must visit the Echography terminal AFTER aligning both Prongs 01 and 02 to trigger the door's opening." },
        { q: "What do I do in the blue cave?", a: "Simply walk forward down the slope toward the blue light; there are no more enemies or puzzles in this final segment." }
      ]
    }

};