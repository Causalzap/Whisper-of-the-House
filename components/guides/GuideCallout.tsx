type GuideCalloutProps = {
    title?: string;
    children: React.ReactNode;
  };
  
  export default function GuideCallout({
    title = "Tip",
    children,
  }: GuideCalloutProps) {
    return (
      <div className="my-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
          {title}
        </div>
        <div className="text-sm leading-7 text-zinc-700 dark:text-zinc-200">
          {children}
        </div>
      </div>
    );
  }