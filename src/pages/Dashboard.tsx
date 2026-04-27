import { useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { LessonCard } from "@/components/LessonCard";
import { lessons, themes, LessonTheme } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Dashboard = () => {
  const [activeTheme, setActiveTheme] = useState<LessonTheme | "Todas">("Todas");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"recent" | "old">("recent");

  const filtered = useMemo(() => {
    return lessons
      .filter((l) => activeTheme === "Todas" || l.theme === activeTheme)
      .filter(
        (l) =>
          l.title.toLowerCase().includes(query.toLowerCase()) ||
          l.subtitle.toLowerCase().includes(query.toLowerCase())
      )
      .sort((a, b) =>
        sort === "recent"
          ? b.date.localeCompare(a.date)
          : a.date.localeCompare(b.date)
      );
  }, [activeTheme, query, sort]);

  return (
    <div className="min-h-screen">
      <AppHeader />

      <main className="container py-8 md:py-12">
        {/* Hero */}
        <section className="relative mb-10 md:mb-14">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent rounded-full blur-3xl opacity-50" />
          <div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-40" />
          <div className="relative">
            <p className="font-marker text-accent text-sm md:text-base mb-2 -rotate-1">
              // sua escola dominical
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-none mb-3">
              AULAS DA <span className="text-accent">EBD</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Mergulhe no conteúdo, baixe materiais e leve a Palavra pra rua. Filtre por tema ou data.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={3} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar uma aula..."
                className="pl-10 h-12 border-2 border-foreground bg-card"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setSort("recent")}
                className={`h-12 border-2 border-foreground font-marker ${
                  sort === "recent" ? "bg-accent text-accent-foreground" : "bg-card"
                }`}
              >
                Mais recentes
              </Button>
              <Button
                variant="outline"
                onClick={() => setSort("old")}
                className={`h-12 border-2 border-foreground font-marker ${
                  sort === "old" ? "bg-accent text-accent-foreground" : "bg-card"
                }`}
              >
                Mais antigas
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["Todas", ...themes] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTheme(t)}
                className={`px-4 py-2 rounded-xl border-2 border-foreground font-display text-sm transition-all ${
                  activeTheme === t
                    ? "bg-gradient-hero text-foreground shadow-pop-sm -translate-y-0.5"
                    : "bg-card text-muted-foreground hover:text-foreground hover:-translate-y-0.5"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
            <p className="font-display text-xl text-muted-foreground">Nenhuma aula encontrada</p>
            <p className="text-sm text-muted-foreground mt-2">Tente outro filtro ou busca.</p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
