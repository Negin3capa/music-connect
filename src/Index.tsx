import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import {
  Music,
  Users,
  Calendar,
  Star,
  Search,
  Guitar,
  Mic,
  PlayCircle,
  Shield,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const musicGenres = [
    "Rock",
    "MPB",
    "Sertanejo",
    "Jazz",
    "Pop",
    "Blues",
    "Reggae",
    "Eletrônica",
    "Forró",
    "Samba",
    "Pagode",
    "Funk Brasileiro",
    "Trap",
    "Axé",
    "Bossa Nova",
    "Frevo",
    "Baião",
    "Piseiro",
    "Arrocha",
    "Xote",
  ];

  const handleSearch = () => {
    // TODO: Implementar busca quando tiver a funcionalidade
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Conecte Música e Oportunidades
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              A plataforma que une músicos talentosos e contratantes em todo o
              Brasil.
              <span className="text-primary font-semibold">
                {" "}
                Encontre seu show ideal
              </span>{" "}
              ou
              <span className="text-secondary font-semibold">
                {" "}
                contrate o artista perfeito
              </span>
              .
            </p>

            {/* Search Bar */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-xl">
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center">
                <div className="w-full md:flex-1 relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 sm:h-5 w-4 sm:w-5" />
                  <input
                    type="text"
                    placeholder="Buscar músicos, bandas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-background border border-border rounded-lg sm:rounded-xl text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button
                  size="lg"
                  variant="musical"
                  onClick={handleSearch}
                  className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Search className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Buscar Agora
                </Button>
              </div>

              {/* Gêneros Populares */}
              <div className="mt-3 sm:mt-4 text-left">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Gêneros populares:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {musicGenres.slice(0, 6).map((genre) => (
                    <Badge
                      key={genre}
                      variant="secondary"
                      className="text-xs sm:text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <Button
                size="lg"
                variant="hero"
                onClick={() => navigate("/auth")}
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-4"
              >
                <Music className="mr-2 h-5 sm:h-6 w-5 sm:w-6" />
                Sou Músico
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/auth")}
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-4 border-2"
              >
                <Users className="mr-2 h-5 sm:h-6 w-5 sm:w-6" />
                Quero Contratar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Como Funciona
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Um processo simples e seguro para conectar música e oportunidades
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>1. Busque e Encontre</CardTitle>
                <CardDescription>
                  Músicos criam perfis detalhados com portfólio. Contratantes
                  buscam por estilo, localização e disponibilidade.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>2. Agende e Contrate</CardTitle>
                <CardDescription>
                  Negocie datas, valores e detalhes do evento. Confirme a
                  contratação com segurança através da plataforma.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>3. Realize e Avalie</CardTitle>
                <CardDescription>
                  Show realizado! Pagamento seguro liberado automaticamente.
                  Avaliem uns aos outros para construir reputação.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Músicos */}
      <section id="para-musicos" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Para <span className="text-primary">Músicos</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                Transforme sua paixão musical em oportunidades reais. Conecte-se
                com contratantes e aumente sua visibilidade no mercado musical.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Guitar className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Portfólio Musical Completo
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Crie um perfil profissional com fotos, vídeos, links para
                      streaming e histórico musical.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Calendar className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Gestão de Agenda
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Controle sua disponibilidade, preços por data e receba
                      propostas de contratação.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <CreditCard className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Pagamento Garantido
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Sistema escrow garante que você receba pelo show
                      realizado. Sem preocupações com inadimplência.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                variant="hero"
                className="mt-6 sm:mt-8 w-full sm:w-auto"
                onClick={() => navigate("/auth")}
              >
                <Music className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Criar Perfil Musical
              </Button>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                      <Mic className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        João Silva
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Violonista • MPB/Bossa Nova
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-yellow-500 fill-current shrink-0" />
                      <span className="text-xs sm:text-sm">
                        4.9 (23 avaliações)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PlayCircle className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-primary shrink-0" />
                      <span className="text-xs sm:text-sm">
                        12 shows realizados
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-green-500 shrink-0" />
                      <span className="text-xs sm:text-sm">
                        R$ 300 - R$ 500 por show
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                  >
                    Ver Perfil Completo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Para Contratantes */}
      <section
        id="para-contratantes"
        className="py-12 sm:py-16 px-4 bg-muted/30"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Para <span className="text-secondary">Contratantes</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                Encontre músicos profissionais para seus eventos. Do bar da
                esquina ao grande festival, temos o artista ideal para sua
                ocasião.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                    <Users className="h-5 sm:h-6 w-5 sm:w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Músicos Verificados
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Todos os artistas passam por verificação. Veja portfólio,
                      avaliações e histórico de apresentações.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                    <Shield className="h-5 sm:h-6 w-5 sm:w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Contratação Segura
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Contratos digitais, pagamento via plataforma e garantia de
                      comparecimento do artista.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                    <Sparkles className="h-5 sm:h-6 w-5 sm:w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Matchmaking Inteligente
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Algoritmo sugere artistas ideais baseado no seu tipo de
                      evento, orçamento e preferências musicais.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="mt-6 sm:mt-8 w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground border-2"
                onClick={() => navigate("/auth")}
              >
                <Users className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Começar a Contratar
              </Button>
            </div>

            <div className="lg:order-1 mt-8 lg:mt-0">
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-bold text-base sm:text-lg mb-2">
                      Bar do João - Evento de Sexta
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                      Procurando banda de rock nacional para show ao vivo
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Data:</span>
                      <span>15 de Novembro, 21h</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Duração:</span>
                      <span>2-3 horas</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Orçamento:</span>
                      <span className="text-green-600 font-semibold">
                        R$ 800
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Local:</span>
                      <span>São Paulo, SP</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Rock
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Nacional
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Banda
                    </Badge>
                  </div>

                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                  >
                    Ver Candidatos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Pronto para Conectar Música e Oportunidades?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Junte-se a milhares de músicos e contratantes que já estão fazendo
            história na MusicConnect.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 border-white text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-4"
            >
              Cadastrar Grátis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-card border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Music className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MusicConnect
            </span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm px-2">
            © 2024 MusicConnect. Conectando música e oportunidades em todo o
            Brasil.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
