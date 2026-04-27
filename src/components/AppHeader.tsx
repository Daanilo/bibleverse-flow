import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Flame, LogOut } from "lucide-react";

export const AppHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-background/85 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-orange shadow-pop-sm border-2 border-foreground rounded-xl p-2 -rotate-3">
            <Flame className="h-6 w-6 text-foreground" strokeWidth={3} />
          </div>
          <div>
            <h1 className="font-display text-xl md:text-2xl leading-none">
              EBD<span className="text-accent">.</span>LIVE
            </h1>
            <p className="text-xs text-muted-foreground font-marker">
              Igreja Batista Nacional
            </p>
          </div>
        </div>

        {user && (
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-marker text-sm text-muted-foreground">
              salve, {user.username}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="border-2 border-foreground shadow-pop-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <LogOut className="h-4 w-4" strokeWidth={3} />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
