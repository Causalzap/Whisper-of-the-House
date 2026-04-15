import * as React from "react";

type GuideTableColumn = {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
};

type GuideTableRow = Record<string, React.ReactNode>;

type GuideTableProps = {
  columns: GuideTableColumn[];
  rows: GuideTableRow[];
  caption?: string;
  className?: string;
};

function getAlignClass(align?: "left" | "center" | "right") {
  switch (align) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "text-left";
  }
}

export default function GuideTable({
  columns,
  rows,
  caption,
  className = "",
}: GuideTableProps) {
  return (
    <div className={`my-8 overflow-x-auto ${className}`}>
      <table className="min-w-full border-collapse overflow-hidden rounded-2xl border border-zinc-200 bg-white text-sm dark:border-zinc-800 dark:bg-zinc-950">
        {caption ? (
          <caption className="px-4 py-3 text-left text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {caption}
          </caption>
        ) : null}

        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`border-b border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 ${getAlignClass(
                  column.align
                )}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`align-top px-4 py-3 leading-7 text-zinc-700 dark:text-zinc-300 ${getAlignClass(
                    column.align
                  )}`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}