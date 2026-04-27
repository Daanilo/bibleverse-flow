import { Lesson } from "@/data/lessons";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const themeStyles: Record<string, string> = {
  Doutrina: "bg-gradient-blue shadow-glow-blue",
  Família: "bg-gradient-purple shadow-glow-purple",
  "Vida Cristã": "bg-gradient-orange shadow-glow-orange",
  Juventude: "bg-graffiti-pink shadow-glow-purple",
};

export const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const formatted = new Date(lesson.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/aula/${lesson.id}`}
      className="group relative block bg-gradient-card border-2 border-foreground rounded-2xl overflow-hidden shadow-pop hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-foreground">
        <img
          src={lesson.cover}
          alt={lesson.title}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-lg border-2 border-foreground font-display text-xs text-foreground ${themeStyles[lesson.theme]}`}
        >
          {lesson.theme}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-marker">
          <Calendar className="h-3.5 w-3.5" strokeWidth={3} />
          <time dateTime={lesson.date}>{formatted}</time>
        </div>
        <h3 className="font-display text-lg leading-tight line-clamp-2">
          {lesson.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{lesson.subtitle}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-marker text-accent">{lesson.teacher}</span>
          <ArrowRight
            className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform"
            strokeWidth={3}
          />
        </div>
      </div>
    </Link>
  );
};
