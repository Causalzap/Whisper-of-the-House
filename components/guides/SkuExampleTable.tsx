export default function SkuExampleTable() {
    const rows = [
      ["Apocalyptic Sheriff", "Action", "High", "1352823"],
      ["Tomezilla", "Action", "High", "1141474"],
      ["Alien Brain Implants", "Horror", "High", "5663962"],
      ["A Scientist and His Kennel", "Sci-Fi", "High", "6342712"],
      ["Midnight Heart Drive", "Drama", "Medium", "4443933"],
    ];
  
    return (
      <div className="my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">
                Movie
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">
                Genre
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">
                Profit
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">
                SKU
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([movie, genre, profit, sku]) => (
              <tr
                key={sku}
                className="border-t border-zinc-200 dark:border-zinc-800"
              >
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                  {movie}
                </td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                  {genre}
                </td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                  {profit}
                </td>
                <td className="px-4 py-3 font-mono text-zinc-900 dark:text-zinc-100">
                  {sku}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }