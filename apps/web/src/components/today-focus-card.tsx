import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TodayFocusCard() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Today&apos;s focus</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-400">
          Connect your profile, define your target role, and prepare the first version of your career dashboard.
        </p>
      </CardContent>
    </Card>
  );
}
