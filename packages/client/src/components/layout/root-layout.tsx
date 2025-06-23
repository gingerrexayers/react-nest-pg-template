import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Outlet />
      <Toaster />
    </main>
  );
}
