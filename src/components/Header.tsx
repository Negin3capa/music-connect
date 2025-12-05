import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Music className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block">MusicConnect</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</a>
          <a href="#para-musicos" className="text-sm font-medium hover:text-primary transition-colors">Para Músicos</a>
          <a href="#para-contratantes" className="text-sm font-medium hover:text-primary transition-colors">Para Contratantes</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
            Entrar
          </Button>
          <Button size="sm" onClick={() => navigate("/auth")}>
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
