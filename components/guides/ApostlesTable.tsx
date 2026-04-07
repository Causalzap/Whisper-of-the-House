const apostlesData = [
    {
      name: "Peter (Simon)",
      region: "Galilee",
      zone: "Capernaum Beach",
      anchor: "Fishing boats and fishermen washing their nets",
      appearsAfter: "After Wedding at Cana and travel to the Sea of Galilee",
      marker: "Yes",
    },
    {
      name: "Andrew",
      region: "Galilee",
      zone: "Capernaum Beach",
      anchor: "Standing next to Peter by the fishing boats",
      appearsAfter: "Same chain as Peter",
      marker: "Shared with Peter",
    },
    {
      name: "James (Son of Zebedee)",
      region: "Galilee",
      zone: "Shoreline south of Capernaum",
      anchor: "Wooden dock and Zebedee repairing a torn net",
      appearsAfter: "Immediately after Peter and Andrew",
      marker: "Yes",
    },
    {
      name: "John",
      region: "Galilee",
      zone: "Beside James on the dock",
      anchor: "Next to Zebedee’s boat",
      appearsAfter: "Immediately after Peter and Andrew",
      marker: "Shared with James",
    },
    {
      name: "Philip",
      region: "Bethsaida / Cana outskirts",
      zone: "Busy market square",
      anchor: "Merchant stall with clay pots and bread",
      appearsAfter: "After the early fisherman group",
      marker: "Often no obvious marker",
    },
    {
      name: "Bartholomew (Nathanael)",
      region: "Cana outskirts",
      zone: "Fig tree area",
      anchor: "Three-way signpost and dried well",
      appearsAfter: "After Philip points you there",
      marker: "Usually appears after the route opens",
    },
    {
      name: "Matthew (Levi)",
      region: "Capernaum",
      zone: "Tax collector’s booth area",
      anchor: "Roman guards and crowd-pressure scene",
      appearsAfter: "After returning to Capernaum in the mid-early flow",
      marker: "Often proximity-triggered",
    },
    {
      name: "Thomas (Didymus)",
      region: "Nain",
      zone: "Carpenter’s workshop area",
      anchor: "Timber stacks and a broken cart",
      appearsAfter: "After the widow’s son route in Nain",
      marker: "Easy to miss without the return trigger",
    },
    {
      name: "James (Son of Alphaeus)",
      region: "Judean countryside",
      zone: "Field-side road area",
      anchor: "Stone wall and nearby sheep",
      appearsAfter: "During wider preaching and travel progression",
      marker: "Yes",
    },
    {
      name: "Thaddaeus (Jude)",
      region: "Galilee / Capernaum area",
      zone: "Synagogue courtyard",
      anchor: "Debate near the entrance pillars",
      appearsAfter: "After an early major exorcism in the region",
      marker: "Often trigger-based",
    },
    {
      name: "Simon the Zealot",
      region: "Judea / Jericho outskirts",
      zone: "Hidden camp area in the hills",
      anchor: "Cave entrance and rebel-style camp markers",
      appearsAfter: "After the path toward Jericho opens",
      marker: "Often hidden until you follow the route",
    },
    {
      name: "Judas Iscariot",
      region: "Judea / Jerusalem",
      zone: "Temple-side money district",
      anchor: "Money changers and outer-court crowd activity",
      appearsAfter: "Late Jerusalem-facing story progression",
      marker: "Yes",
    },
  ];
  
  export default function ApostlesTable() {
    return (
      <div className="my-8 overflow-x-auto rounded-xl border border-slate-700">
        <table className="min-w-full text-left text-sm leading-6">
          <thead className="bg-slate-900/60">
            <tr>
              <th className="px-4 py-3 font-semibold">Apostle</th>
              <th className="px-4 py-3 font-semibold">Region</th>
              <th className="px-4 py-3 font-semibold">First encounter zone</th>
              <th className="px-4 py-3 font-semibold">Scene anchor / trigger context</th>
              <th className="px-4 py-3 font-semibold">Appears after</th>
              <th className="px-4 py-3 font-semibold">Marker behavior</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/70">
            {apostlesData.map((apostle) => (
              <tr key={apostle.name}>
                <td className="px-4 py-3 font-medium">{apostle.name}</td>
                <td className="px-4 py-3">{apostle.region}</td>
                <td className="px-4 py-3">{apostle.zone}</td>
                <td className="px-4 py-3">{apostle.anchor}</td>
                <td className="px-4 py-3">{apostle.appearsAfter}</td>
                <td className="px-4 py-3">{apostle.marker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }