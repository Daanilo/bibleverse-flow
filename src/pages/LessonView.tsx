import { useParams, Link, Navigate } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { AppHeader } from "@/components/AppHeader";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  Presentation,
  Images,
  ExternalLink,
  Calendar,
  User,
  BookOpen,
} from "lucide-react";

const ResourceButton = ({
  icon: Icon,
  label,
  description,
  url,
  variant,
}: {
  icon: typeof FileText;
  label: string;
  description: string;
  url: string;
  variant: "blue" | "orange" | "purple" | "pink";
}) => {
  const styles = {
    blue: "bg-gradient-blue shadow-glow-blue",
    orange: "bg-gradient-orange shadow-glow-orange",
    purple: "bg-gradient-purple shadow-glow-purple",
    pink: "bg-graffiti-pink",
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block p-5 rounded-2xl border-2 border-foreground ${styles} shadow-pop hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-foreground`}
    >
      <div className="flex items-start gap-4">
        <div className="bg-background/20 backdrop-blur-sm border-2 border-foreground rounded-xl p-3">
          <Icon className="h-6 w-6" strokeWidth={3} />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg leading-tight">{label}</h3>
          <p className="text-sm opacity-90 mt-1">{description}</p>
        </div>
        <ExternalLink className="h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all" strokeWidth={3} />
      </div>
    </a>
  );
};

const LessonView = () => {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) return <Navigate to="/" replace />;

  const formatted = new Date(lesson.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen">
      <AppHeader />

      <main className="container py-6 md:py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-marker text-accent hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} />
          voltar pra grid
        </Link>

        <article className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative animate-spray-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-40 -z-10" />
            <img
              src={lesson.cover}
              alt={lesson.title}
              width={1024}
              height={768}
              className="w-full rounded-2xl border-2 border-foreground shadow-pop object-cover"
            />
            <span className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 rounded-xl border-2 border-foreground font-display shadow-pop-sm rotate-3">
              {lesson.theme}
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <p className="font-marker text-accent text-sm mb-2 -rotate-1">
                // aula da semana
              </p>
              <h1 className="font-display text-3xl md:text-5xl leading-tight">
                {lesson.title}
              </h1>
              <p className="text-lg text-muted-foreground mt-2">{lesson.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border-2 border-border font-marker">
                <Calendar className="h-4 w-4 text-accent" strokeWidth={3} />
                {formatted}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border-2 border-border font-marker">
                <User className="h-4 w-4 text-secondary" strokeWidth={3} />
                {lesson.teacher}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border-2 border-border font-marker">
                <BookOpen className="h-4 w-4 text-primary" strokeWidth={3} />
                {lesson.verse}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">{lesson.description}</p>
          </div>
        </article>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display text-2xl md:text-3xl">RECURSOS</h2>
            <div className="flex-1 h-1 bg-gradient-hero rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <ResourceButton
              icon={FileText}
              label="PDF da Lição"
              description="Apostila completa pra estudar"
              url={lesson.resources.pdfUrl}
              variant="blue"
            />
            <ResourceButton
              icon={Presentation}
              label="Slides"
              description="Apresentação usada na aula"
              url={lesson.resources.slidesUrl}
              variant="orange"
            />
            <ResourceButton
              icon={Images}
              label="Galeria"
              description="Fotos do encontro"
              url={lesson.resources.galleryUrl}
              variant="purple"
            />
            {lesson.resources.externalLinks.length > 0 && (
              <div className="bg-card border-2 border-foreground rounded-2xl p-5 shadow-pop">
                <h3 className="font-display text-lg mb-3">Links Externos</h3>
                <ul className="space-y-2">
                  {lesson.resources.externalLinks.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:underline font-marker"
                      >
                        <ExternalLink className="h-4 w-4" strokeWidth={3} />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="mt-6 text-xs text-muted-foreground text-center font-marker">
            * links apontam para pastas do Google Drive (substitua pelos URLs reais)
          </p>
        </section>
      </main>
    </div>
  );
};

export default LessonView;
