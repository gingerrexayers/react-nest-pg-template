import { AppHeader } from "@/components/layout/app-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader className="flex-shrink-0" />
      <div className="flex-grow overflow-y-auto container mx-auto p-4 md:p-8">
        <Card className="flex flex-col h-full">
          <CardHeader className="grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] gap-x-4 gap-y-3 p-4 items-center flex-shrink-0">
            <CardTitle data-cy="dashboard-title">Your Content</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow overflow-y-auto pt-0">
            <p className="p-4 text-center text-muted-foreground">
              No content found. Add some to get started!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
