const modules = [
  "AI career coach",
  "Resume builder",
  "Portfolio generator",
  "GitHub analyzer",
  "Job tracker",
  "Skill roadmap"
];

export function AppSidebar() {
  return (
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
  );
}
