type MetricCardProps = {
  label: string;
  value: string;
  hint: string;
};

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-sm text-zinc-500">{hint}</p>
    </div>
  );
}
