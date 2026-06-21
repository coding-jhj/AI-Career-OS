import { AccountForm } from "@/components/account/account-form";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-zinc-50">
      <AccountForm mode="signup" />
    </main>
  );
}
