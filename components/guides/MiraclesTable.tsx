// components/guides/MiraclesTable.tsx

const miracleCategories = [
  {
    category: "Transformation",
    unlock: "First clearly taught at Wedding at Cana",
    includes:
      "Water into Wine, Miraculous Catch of Fish, Feeding the 5,000, and other object/crowd miracle scenes",
    gameplay:
      "Scene setup, object interaction, timing, and transformation-style miracle inputs",
  },
  {
    category: "Healing",
    unlock: "Early Capernaum progression and later town/story scenes",
    includes:
      "Peter’s mother-in-law, blind or wounded NPCs, lepers, and other illness/injury recovery scenes",
    gameplay:
      "Targeted healing interactions, wound clearing, and story-linked support miracle sequences",
  },
  {
    category: "Exorcism",
    unlock: "After the Wilderness / Satan sequence",
    includes:
      "Possessed NPCs, darkness-removal encounters, and major exorcism story scenes like Legion",
    gameplay:
      "Holy Spirit-driven banishment, combat pressure, and darkness control",
  },
  {
    category: "Resurrection",
    unlock: "Mid-to-late story miracle progression",
    includes:
      "Nain widow’s son, Lazarus, and other late high-stakes life-restoration scenes",
    gameplay:
      "High-pressure resurrection minigames and major story climax miracle sequences",
  },
];

const storyMiracleScenes = [
  {
    scene: "Water into Wine",
    category: "Transformation",
    role: "First major miracle tutorial and the cleanest introduction to how story miracles work",
  },
  {
    scene: "Miraculous Catch of Fish",
    category: "Transformation",
    role: "Core apostle-recruitment story scene tied to Peter and Andrew",
  },
  {
    scene: "Feeding the 5,000",
    category: "Transformation / crowd miracle",
    role: "Major midgame milestone tied to followers, crowd progression, and scale",
  },
  {
    scene: "Walking on Water",
    category: "Story set piece / sea miracle",
    role: "Sea of Galilee progression scene with movement-based miracle gameplay",
  },
  {
    scene: "Calming the Storm",
    category: "Story set piece / sea miracle",
    role: "Environmental miracle logic tied to survival, danger, and sea progression",
  },
  {
    scene: "Restoring Sight / broader healing scenes",
    category: "Healing",
    role: "City and story healing scenes that support progression, cleanup, or completion",
  },
  {
    scene: "Lazarus",
    category: "Resurrection",
    role: "One of the clearest late-game proof miracles and a major story turning point",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 mt-8 text-lg font-semibold">{children}</h3>;
}

export default function MiraclesTable() {
  return (
    <div className="my-8 space-y-8">
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="min-w-full text-left text-sm leading-6">
          <thead className="bg-slate-900/60">
            <tr>
              <th className="px-4 py-3 font-semibold">Miracle Category</th>
              <th className="px-4 py-3 font-semibold">First Major Unlock</th>
              <th className="px-4 py-3 font-semibold">What It Includes</th>
              <th className="px-4 py-3 font-semibold">Core Gameplay Loop</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/70">
            {miracleCategories.map((item) => (
              <tr key={item.category}>
                <td className="px-4 py-3 font-medium">{item.category}</td>
                <td className="px-4 py-3">{item.unlock}</td>
                <td className="px-4 py-3">{item.includes}</td>
                <td className="px-4 py-3">{item.gameplay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <SectionTitle>Major story miracle scenes</SectionTitle>
        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="min-w-full text-left text-sm leading-6">
            <thead className="bg-slate-900/60">
              <tr>
                <th className="px-4 py-3 font-semibold">Story Miracle Scene</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/70">
              {storyMiracleScenes.map((item) => (
                <tr key={item.scene}>
                  <td className="px-4 py-3 font-medium">{item.scene}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}