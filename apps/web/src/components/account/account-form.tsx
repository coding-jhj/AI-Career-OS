import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type AccountFormProps = {
  mode: "signin" | "signup";
};

export function AccountForm({ mode }: AccountFormProps) {
  const isSignup = mode === "signup";

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{isSignup ? "Create your account" : "Welcome back"}</CardTitle>
        <CardDescription>
          {isSignup
            ? "Start building your AI-powered career operating system."
            : "Continue managing your career system."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full" type="submit">
            {isSignup ? "Create account" : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
