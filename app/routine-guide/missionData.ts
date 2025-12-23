// app/routine-guide/missionData.ts

export const chapterOneData = {
    chapter: "01",
    title: "Birth",
    slug:"chapter-1-birth-stealth-walkthrough",
    difficulty: "Beginner" as const, // 使用 as const 确保类型匹配组件的 'Beginner' | 'Intermediate' | 'Advanced'
    priorityHint: "CRITICAL: Must visit 'The Mall' first. Obtaining the Ultraview Module (Flashlight) is essential for survival in the pitch-black Living Quarters.",
    keyPoints: [
      "Retrieve C.A.T Tool in Meeting Room A01",
      "Unlock Galaxy Video: Lean to shoot hidden fuse box",
      "Obtain ASN ID from Kei Koyama's Apartment"
    ],
    codes: [
      { label: "Arrivals Elevator", source: "A01 Projector" },
      { label: "Laundrette", source: "CCTV Sticky Note" }
    ],
    imageUrl: "/images/routine/routine-ch1-birth-cover.webp" 
  };

  export const chapterTwoData = {
    chapter: "02",
    title: "Incision",
    slug: "chapter-2-incision-stealth-walkthrough", // 建议创建此路径的详情页
    difficulty: "Intermediate" as const, // 难度上调，因为机器人更具攻击性且环境更狭窄
    priorityHint: "TACTICAL ALERT: The entrance code is on your CHEST. Look down at your ID badge to find the 4-digit sequence.",
    keyPoints: [
      "Reboot Tram Terminal via the hidden reset switch underneath",
      "Disable Fire Protocol in Reception to unlock the Laundrette path",
      "Use CCTV Zoom (F) to find the randomized code on the sticky note",
      "Retrieve Kei Koyama's ID from Apartment 04B"
    ],
    codes: [
      { 
        label: "Living Quarters Gate", 
        source: "Check Player ID Badge (Chest)" 
      },
      { 
        label: "Reception Door", 
        source: "CCTV Sticky Note in Surveillance Room" 
      }
    ],
    imageUrl: "/images/routine/routine-ch2-incision-cover.webp" // 建议配置对应的战术封面图
  };

  export const chapterThreeData = {
    chapter: "03",
    title: "Re-Create",
    slug: "chapter-3-re-create-stealth-walkthrough",
    difficulty: "Advanced" as const, // 涉及随机化解谜和最终核心操作
    priorityHint: "SYSTEM ALERT: Node numbers (A1-A12) are RANDOMIZED. You must check the terminal first to identify the correct sequence.",
    keyPoints: [
      "Clear terminal memory errors by closing all dialogue boxes",
      "Identify and lower the handles for three randomized nodes",
      "Switch C.A.T. to Normal Mode to blast the exposed Core",
      "Follow clicking audio cues on the Lunar Surface to find the Fish"
    ],
    codes: [
      { 
        label: "Node Sequence", 
        source: "Secondary Terminal (Randomized per play)" 
      },
      { 
        label: "Core Release", 
        source: "Manual switches after node synchronization" 
      }
    ],
    imageUrl: "/images/routine/routine-ch3-re-create-cover.webp" // 建议配置对应的终章封面图
  };

  export const chapterFourData = {
    chapter: "04",
    title: "Adrift",
    slug: "chapter-4-adrift-stealth-walkthrough",
    difficulty: "Expert" as const, // 引入隐形敌人和多层级解谜，难度最高
    priorityHint: "STEALTH REQUIRED: Entity-A is invisible and tracks sound. If you hear howling, crouch and hide in the side rooms immediately.",
    keyPoints: [
      "Upgrade C.A.T. with the Security Interface Module in Reception",
      "Identify randomized damaged server drawers (e.g., D2, E3) to reboot the system",
      "Locate four hidden UV symbols to crack the Vestibule Keypad code",
      "Pass the Optical and Auditory tests to gain Security Level 02 clearance"
    ],
    codes: [
      { 
        label: "Kali's Locker", 
        source: "Archive Terminal - 'The Vestibule' Diary Entry" 
      },
      { 
        label: "Vestibule Keypad", 
        source: "Decipher symbols using Kali's Note + Ultraview" 
      }
    ],
    imageUrl: "/images/routine/routine-ch4-adrift-cover.webp"
  };
  
  export const chapterFiveData = {
    chapter: "05",
    title: "Endure",
    slug: "chapter-5-endure-stealth-walkthrough",
    difficulty: "Expert" as const, // 涉及复杂的化学配方与 Entity-A 的高频巡逻
    priorityHint: "DATA ACCESS: Maria's Terminal and the Access Override require specific ID numbers found on physical cards near corpses. Always check the ground.",
    keyPoints: [
      "Navigate the Lunar surface to reach the Main Wing Lobby",
      "Compile EL9 Disinfectant: Isopropyl Alcohol + Copper Ion + Hydrogen Peroxide + EDTA",
      "Retrieve William's ID Card from the Main Control Lab floor",
      "Navigate the red pipe tunnels to reach the Valve and drain the Overflow"
    ],
    codes: [
      { 
        label: "Maria's Terminal", 
        source: "ID Card near the turquoise toolbox (Dining Area)" 
      },
      { 
        label: "Access Override", 
        source: "William's ID Card (Main Control Lab floor)" 
      }
    ],
    imageUrl: "/images/routine/routine-ch5-endure-cover.webp"
  };

  export const chapterSixData = {
    chapter: "06",
    title: "Legacy",
    slug: "chapter-6-legacy-stealth-walkthrough",
    difficulty: "Expert" as const, // 涉及高压逃生与精密对齐操作
    priorityHint: "FINAL PROTOCOL: Aligning the Prongs requires 100% Proximity and Clarity. The final sprint to 'The Canal' is scripted but intense—do not stop moving.",
    keyPoints: [
      "Divert power and align Prong 01 via the Reception breaker",
      "Navigate the Systems area to power and align Prong 02",
      "Calibrate the Lunar Echography Terminal to unlock 'The Path'",
      "Escape the facility and confront the Entity at the heart of The Canal"
    ],
    codes: [
      { 
        label: "Prong Alignment", 
        source: "Manual UI Calibration (Proximity/Clarity)" 
      },
      { 
        label: "The Path Access", 
        source: "Automatic unlock after Echography completion" 
      }
    ],
    imageUrl: "/images/routine/routine-ch6-legacy-cover.webp"
  };

  // 别忘了在导出列表里加上它
  export const missionBriefings = [chapterOneData, chapterTwoData,chapterThreeData,chapterFourData,chapterFiveData,chapterSixData];