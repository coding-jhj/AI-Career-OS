import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-zinc-800 pb-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-medium text-blue-400">Sprint 1 - Core Development</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Build your developer career system</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Manage your resume, portfolio, GitHub proof, job pipeline, and AI coaching from one operating system.
        </p>
      </div>
      <Button size="lg">Start career audit</Button>
    </header>
  );
}
