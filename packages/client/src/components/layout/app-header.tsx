import favicon from '@/assets/favicon.png';
import logo from '@/assets/logo_expanded.png';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

interface AppHeaderProps {
  className?: string;
  showLogoutButton?: boolean;
}

export function AppHeader({
  className,
  showLogoutButton = true,
}: AppHeaderProps) {
  const { logout } = useAuth();

  return (
    <header
      className={cn(
        'relative flex items-center justify-between bg-primary p-4 px-4 md:px-8',
        className,
      )}
    >
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="mr-3 hidden h-10 w-auto md:block"
        />
        <img
          src={favicon}
          alt="Logo Small"
          className="mr-3 block h-8 w-8 md:hidden"
        />
        {/* Mobile LOGO text (left-aligned with logo) */}
        <span className="text-3xl font-extrabold uppercase text-primary-foreground md:hidden">
          LOGO
        </span>
      </div>

      {/* Desktop LOGO text (centered absolutely) */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="text-3xl font-extrabold uppercase text-primary-foreground">
          LOGO
        </span>
      </div>

      {/* Logout button on the right */}
      {showLogoutButton && (
        <Button
          onClick={logout}
          variant="secondary"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          Logout
        </Button>
      )}
    </header>
  );
}
