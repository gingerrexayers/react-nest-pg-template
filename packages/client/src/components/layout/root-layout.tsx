import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export function RootLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Outlet />
      <Toaster />
    </main>
  );
}
