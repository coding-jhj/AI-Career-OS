import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { MetricCard } from "@/components/metric-card";
import { TodayFocusCard } from "@/components/today-focus-card";
import { dashboardMetrics } from "@/data/dashboard";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        <AppSidebar />
        <section className="flex-1 p-6 lg:p-10">
          <DashboardHeader />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardMetrics.map((item) => (
              <MetricCard key={item.label} label={item.label} value={item.value} hint={item.hint} />
            ))}
          </div>
          <TodayFocusCard />
        </section>
      </div>
    </main>
  );
}
