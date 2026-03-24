type GuideQuickAnswerProps = {
    title?: string;
    children: React.ReactNode;
  };
  
  export default function GuideQuickAnswer({
    title = "Quick Answer",
    children,
  }: GuideQuickAnswerProps) {
    return (
      <section className="my-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        <div className="prose prose-zinc max-w-none dark:prose-invert">
          {children}
        </div>
      </section>
    );
  }