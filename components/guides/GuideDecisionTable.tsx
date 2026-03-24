type Row = {
    situation: string;
    decision: string;
    why: string;
  };
  
  type GuideDecisionTableProps = {
    title?: string;
    rows: Row[];
  };
  
  export default function GuideDecisionTable({
    title = "Decision Table",
    rows,
  }: GuideDecisionTableProps) {
    return (
      <section className="my-8">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
  
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
            <thead className="bg-zinc-50 dark:bg-zinc-900">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-200">
                  Situation
                </th>
                <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-200">
                  Best Move
                </th>
                <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-200">
                  Why
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {rows.map((row, index) => (
                <tr key={`${row.situation}-${index}`} className="bg-white dark:bg-zinc-950">
                  <td className="px-4 py-3 align-top text-zinc-800 dark:text-zinc-100">
                    {row.situation}
                  </td>
                  <td className="px-4 py-3 align-top font-medium text-zinc-900 dark:text-zinc-100">
                    {row.decision}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300">
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }