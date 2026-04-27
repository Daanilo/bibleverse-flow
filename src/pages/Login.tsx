import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flame, Lock, User } from "lucide-react";
import { toast } from "sonner";
import mural from "@/assets/graffiti-mural.jpg";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(username, password);
    setLoading(false);
    if (ok) {
      toast.success("Bem-vindo à EBD!");
      navigate("/");
    } else {
      toast.error("Preencha usuário e senha");
    }
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Mural side */}
      <section
        className="relative lg:w-1/2 min-h-[40vh] lg:min-h-screen overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={mural}
          alt="Mural de grafite com símbolos cristãos"
          className="absolute inset-0 w-full h-full object-cover"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/80" />
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12">
          <p className="font-marker text-accent text-lg md:text-xl mb-2 -rotate-2">
            // EBD reimaginada
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight text-stroke-black">
            FÉ NA <span className="text-accent">RUA</span>,<br />
            PALAVRA NA <span className="text-secondary">ALMA</span>.
          </h2>
        </div>
      </section>

      {/* Form side */}
      <section className="lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-background relative">
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        <div className="w-full max-w-md relative animate-spray-in">
          <div className="bg-gradient-card border-2 border-foreground rounded-2xl p-8 shadow-pop">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-hero p-3 rounded-xl border-2 border-foreground shadow-pop-sm -rotate-6">
                <Flame className="h-7 w-7 text-foreground" strokeWidth={3} />
              </div>
              <div>
                <h1 className="font-display text-2xl">ENTRA AÍ</h1>
                <p className="text-sm text-muted-foreground">Acesse seu painel da EBD</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="font-marker text-base">
                  Usuário
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={3} />
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="seu.nome"
                    className="pl-10 h-12 border-2 border-foreground bg-background focus-visible:ring-accent"
                    autoComplete="username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-marker text-base">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={3} />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 h-12 border-2 border-foreground bg-background focus-visible:ring-accent"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-orange text-accent-foreground font-display text-lg border-2 border-foreground shadow-pop hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                {loading ? "ENTRANDO..." : "BORA ESTUDAR"}
              </Button>

              <p className="text-xs text-center text-muted-foreground font-marker">
                * autenticação simulada — qualquer usuário/senha funciona
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
