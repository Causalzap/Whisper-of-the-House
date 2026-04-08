import * as React from "react";

type RowStatus = "confirmed" | "pending" | "unconfirmed";

type GuideDataTableRow = {
  item: React.ReactNode;
  value: React.ReactNode;
  why: React.ReactNode;
  status?: RowStatus;
};

type GuideDataTableProps = {
  title?: string;
  rows: GuideDataTableRow[];
  className?: string;
};

function StatusBadge({ status = "confirmed" }: { status?: RowStatus }) {
  const styles =
    status === "confirmed"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "pending"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : "border-slate-200 bg-slate-100 text-slate-700";

  const label =
    status === "confirmed"
      ? "Confirmed"
      : status === "pending"
      ? "Pending"
      : "Unconfirmed";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold leading-none ${styles}`}
    >
      {label}
    </span>
  );
}

export default function GuideDataTable({
  title,
  rows,
  className = "",
}: GuideDataTableProps) {
  return (
    <section className={`not-prose my-8 ${className}`}>
      {title ? (
        <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      ) : null}

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 font-semibold text-slate-900">Status</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Detail</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Value</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Why it matters</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-slate-200 last:border-b-0 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }`}
              >
                <td className="px-4 py-4 align-top">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4 align-top font-medium text-slate-900">
                  {row.item}
                </td>
                <td className="px-4 py-4 align-top text-slate-700">
                  {row.value}
                </td>
                <td className="px-4 py-4 align-top text-slate-600">
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