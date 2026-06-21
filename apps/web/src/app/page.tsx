const metrics = [
  { label: "Career score", value: "72", hint: "+8 this week" },
  { label: "Resume readiness", value: "64%", hint: "Needs project proof" },
  { label: "Portfolio progress", value: "41%", hint: "3 sections left" },
  { label: "Applications", value: "0", hint: "Crawler pending" }
];

const modules = [
  "AI career coach",
  "Resume builder",
  "Portfolio generator",
  "GitHub analyzer",
  "Job tracker",
  "Skill roadmap"
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        <aside className="hidden w-72 border-r border-zinc-800 p-6 lg:block">
          <div className="text-xl font-bold">AI Career OS</div>
          <nav className="mt-10 space-y-2 text-sm text-zinc-400">
            {modules.map((module) => (
              <div key={module} className="rounded-xl px-3 py-2 hover:bg-zinc-900 hover:text-zinc-50">
                {module}
              </div>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-6 lg:p-10">
          <header className="flex flex-col gap-4 border-b border-zinc-800 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium text-blue-400">Sprint 1 - Core Development</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight">Build your developer career system</h1>
              <p className="mt-4 max-w-2xl text-zinc-400">
                Manage your resume, portfolio, GitHub proof, job pipeline, and AI coaching from one operating system.
              </p>
            </div>
            <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
              Start career audit
            </button>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
                <p className="text-sm text-zinc-400">{metric.label}</p>
                <p className="mt-3 text-3xl font-bold">{metric.value}</p>
                <p className="mt-2 text-sm text-zinc-500">{metric.hint}</p>
              </div>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h2 className="text-2xl font-semibold">Today&apos;s focus</h2>
            <p className="mt-3 text-zinc-400">
              Connect your profile, define your target role, and prepare the first version of your career dashboard.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
