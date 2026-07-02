import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  AlertTriangle,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Eye,
  HeartHandshake,
  Hourglass,
  KeyRound,
  MonitorPlay,
  Pencil,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const bannerWorkshop = { url: "/assets/BannerWork.png" };
const keyAsset = { url: "/assets/PNGChaveAntiga.png" };
const leiaPortrait = { url: "/assets/LeiaLendoLivro.png" };
const plateiaAsset = { url: "/assets/ImagemPlateiaEventoLeia.png" };
const storyAsset = { url: "/assets/MulherSegurandoChaveSangrando.png" };
const heroAsset = { url: "/assets/ImagemPrincipalComeco.png" };
const leiaLivro = { url: "/assets/ImagemLeiaLivro.png" };
const contoBarbaAzul = { url: "/assets/ImagemContoBarbaAzul.png" };
const imagem2Conto = { url: "/assets/Imagem2Conto.png" };
const novasPossibilidades = { url: "/assets/NovasPossibilidades.png" };
const fechaduraAsset = { url: "/assets/PNGFechaduraAntiga.png" };
const logoBarbaAzul = { url: "/assets/LogoBarbaAzul.png" };

const audienceItems = [
  "Duvidam da própria percepção e costumam ignorar sinais importantes",
  "Vivem ou já viveram relacionamentos abusivos",
  "Querem mudar padrões de comportamento e ter relacionamentos saudáveis",
  "Desejam mais discernimento para fazer escolhas mais conscientes",
  "Querem aprender a reconhecer sinais de alerta e confiar mais na própria intuição",
  "Desejam compreender melhor a si mesmas e os padrões que influenciam suas escolhas",
  "Querem deixar de ser ingênuas e aprender a lidar com os sabotadores",
];

const faqItems = [
  {
    question: "Este workshop é para mim mesmo que eu nunca tenha lido o conto Barba Azul?",
    answer: "SIM!",
  },
  {
    question: "Posso participar mesmo que já faça terapia ou outros processos de autoconhecimento?",
    answer: "SIM!",
  },
  {
    question: "Vou conseguir aproveitar a experiência sem precisar expor minha vida para o grupo?",
    answer: "SIM!",
  },
  {
    question: "O workshop pode me ajudar a compreender padrões que se repetem nos meus relacionamentos e escolhas?",
    answer: "SIM!",
  },
  {
    question: "Vou aprender a reconhecer sinais que muitas vezes passam despercebidos no dia a dia?",
    answer: "SIM!",
  },
  {
    question: "Posso participar mesmo que esteja vivendo um momento de dúvida, transição ou insatisfação?",
    answer: "SIM!",
  },
  {
    question: "Vou sair da imersão com novas percepções e reflexões para aplicar na minha vida?",
    answer: "SIM!",
  },
  {
    question: "Se eu deixar para depois, corro o risco de pagar mais com a virada do lote?",
    answer: "SIM!",
  },
  {
    question: "O Workshop será realizado online?",
    answer: "SIM! A imersão acontecerá ao vivo através da plataforma Zoom, permitindo que você participe de qualquer lugar.",
  },
  {
    question: "Preciso ter experiência com Zoom para participar?",
    answer: "NÃO. Você receberá orientações simples para acessar a sala e participar da imersão com tranquilidade.",
  },
  {
    question: "Vou receber o link de acesso?",
    answer: "SIM! O link será enviado para o e-mail informado no momento da inscrição e também disponibilizado nos canais oficiais de comunicação do evento.",
  },
  {
    question: "Haverá grupo de participantes?",
    answer: "SIM! Você será incluída em um grupo exclusivo no WhatsApp para receber avisos, orientações e informações importantes sobre a imersão.",
  },
  {
    question: "A imersão ficará gravada?",
    answer: "NÃO. Esta é uma experiência 100% ao vivo e imersiva. O Workshop foi concebido para que você vivencie cada etapa em tempo real, participe das reflexões, acompanhe as dinâmicas e aproveite integralmente a experiência coletiva do grupo. Por isso, reserve esse momento na sua agenda e participe ao vivo.",
  },
  {
    question: "Existe garantia?",
    answer: "SIM! Você tem 7 dias de garantia antes do evento acontecer. Caso desista da sua participação dentro desse período, receberá a devolução integral do valor investido.",
  },
  {
    question: "Posso deixar para me inscrever depois?",
    answer: "SIM. Mas o valor promocional é válido apenas para o lote atual. Após a virada do lote, o investimento será reajustado.",
  },
  {
    question: "Como saberei quais são os canais oficiais do evento?",
    answer: "Todas as informações serão enviadas pelos canais oficiais informados pela equipe. Recomendamos salvar os contatos da organização para evitar tentativas de golpe ou mensagens falsas.",
  },
];

const journeyItems = [
  "Reconhecer comportamentos e padrões que muitas vezes passam despercebidos no dia a dia",
  "Compreender por que certas situações continuam se repetindo, mesmo quando você deseja que sejam diferentes",
  "Identificar os sinais que costumam anteceder escolhas, relacionamentos e decisões que geram sofrimento",
  "Entender como os sabotadores internos influenciam sua percepção, suas emoções e suas atitudes",
  "Fortalecer sua capacidade de confiar mais em si mesma e naquilo que percebe",
  "Desenvolver mais clareza para fazer escolhas alinhadas com quem você é ou quer se tornar",
];

const methodCards = [
  { title: "Autoconhecimento", icon: BookOpen },
  { title: "Inteligência Sistêmica", icon: Pencil },
  { title: "Alquimia Interior", icon: Hourglass },
];

function FadeInSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ eyebrow, title, description, light = false, align = "center", balance = true }: { eyebrow?: string; title: string; description?: string; light?: boolean; align?: "center" | "left", balance?: boolean }) {
  const isCenter = align === "center";
  const titleColor = light ? "text-hero-foreground" : "text-foreground";
  const titleBalance = balance ? "text-balance" : "";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-blue">{eyebrow}</p> : null}
      <h2 className={`mt-4 font-display text-3xl leading-tight md:text-5xl ${titleColor} ${titleBalance}`}>
        {title}
      </h2>
      {description ? (
        <p className={light ? "mt-5 text-base leading-8 text-hero-muted md:text-lg" : "mt-5 text-base leading-8 text-muted-foreground md:text-lg"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })
  ]);

  const testimonials = [
    { name: "Ilda Constantin", text: `Fui acolhida com muito carinho por uma profissional que há anos cuida das nossas dores. Super indico a Léia...não só na condução do Taro, mas também nas outras especialidades como Medicina Chinesa, TRE e outras tantas habilidades que ela desenvolveu. Muito estudiosa...sempre trazendo novidades para nós...só gratidão pela Léia em minha vida.`, image: "/assets/Ilda.png" },
    { name: "Nubia Martins", text: `Minha experiência foi ótima! Estava intoxicada com alterações no estômago, fígado, pâncreas e intestinos. Passei pelo tratamento com a Léia, MTC, TRE, homeopatia Quântica... Foi uma etapa muito importante para minha saúde!` },
    { name: "Elza Carrijo", text: `Gente linda...bom dia, boa tarde e/ou boa noite! Se amem e não se permitam deixar de ir na Dra. Léia Dornelas! Ela é tudo de bom! Fiz TRE e, logo após, brevíssimo tratamento com acupuntura e chás caseiros que fizeram a diferença! As experiências por mim vividas são indescritíveis! Me sinto saudável, plena, divina! Obrigada querida Léia Dornelas! Gratidão! 💜` },
    { name: "Viviane Batista", text: `Minha experiência foi fantástica, a Léia é muito profissional e me senti segura com tanto conhecimento, além do acompanhamento que é muito amoroso, eu entrei angustiada e saí em paz, cheia de certezas! Muita gratidão Léia por existir 🌻` },
    { name: "Lais Latorraca", text: `A Léia é um anjo na terra. Super atenciosa em todos os seus atendimentos. Eu comecei com a constelação familiar, fiz o meu mapa astral, depois a revolução solar no meu aniversário e não vamos parar por ai. As terapias com a Léia me ajudaram a entender o porque de certos padrões em minha vida e agora a Léia esta me ajudando a encontrar meu próprio caminho. Recomendo a Léia com toda confiança em seu trabalho 🙌🏻❤️`, image: "/assets/LaisLatorraca.png" },
    { name: "Carolina Orejuela", text: `Tive uma experiência maravilhosa com o Instituto AIA e Léia Dornelas 💫. Fiz atendimentos online desde a Colômbia, como o mapa natal e também a TRE, e só tenho a agradecer. O cuidado, a sensibilidade e a clareza da Léia fazem toda a diferença. Me senti muito acolhida e cada sessão trouxe insights profundos e transformadores. Recomendo de coração a todos que buscam autoconhecimento e bem-estar.`, image: "/assets/CarolinaOrejuela.png" },
    { name: "Gabriela Ferraz", text: `Experiência maravilhosa. Desde o acolhimento à ambientação, me senti sendo preparada para entrar em processos pessoais a cada passo. Léia foi extremamente explicativa e carinhosa, um convite mesmo para olhar com amor às questões da alma.` },
    { name: "Luciara Cristina Borges Da Silva", text: `Procurei Léia Dornelas com muita dor no pulso, tendinite em tratamento há quase 2 meses sem melhoras significativas, mas a acupuntura e suas orientações fizeram total diferença na minha recuperação!\nEste ano tive a oportunidade de participar de sua mentoria "O Código da Nave" e foi fantástico! Foi meu primeiro contato com meu Mapa Natal e tive outra visão sobre a vida e minha Missão!\nGratidão, Léia!❤️❤️❤️`, image: "/assets/LuciaraCristina.png" },
    { name: "Eliane Ribeiro", text: `A leitura do tarô astrológico com a Léia deu muita clareza quando ao momento em que estou vivenciando. Ela em seus atendimentos supera as expectativas e entrega com muito amor, qualidade e sabedoria aquilo que se propõe a fazer.\nAgradeço de coração pelo direcionamento❤️🙌🏻🌹` },
    { name: "Portal Rede Araxá Em Ação", text: `Experiência única de me conectar comigo mesma e conhecer melhor meus desafios para poder vencê-los.\nFui presenteada com muitas curas.` },
    { name: "Sedese Uberlândia- Odete Dan", text: `Experiência maravilhosa. Léia desenvolve seu trabalho com excelência e os resultados que recebi foram maravilhosos. Super indico.`, image: "/assets/OdeteDan.png" },
    { name: "Gi Barbosa", text: `Fiz um tratamento longo e maravilhoso com a Leia. Foi uma experiência muito boa, com autoconhecimento. Me ajudou muito a entender quem sou e a melhorar a forma de viver todos os dias!` },
    { name: "Solange Duarte Da Costa Nogueira", text: `Conheço o trabalho da Léia desde antes da pandemia,penso que sou das primeiras pacientes dela, no período da pandemia não entrei em uma crise depressiva graças à seu trabalho, com ela já consegui emagrecer e o mais importante caso foi qdo extraí um dente molar e o dentista afetou meu nervoso trigêmeo o que me causou grandes dores e através de sua experiência e conhecimento hoje não sinto mais dor ,somente uma sensibilidade no local e sabemos que isso é muito raro, enfim,após tratar-me com Léia sou outr pessoa!`, image: "/assets/SolangeDuarte.png" },
    { name: "Beth Perez", text: `Excelente profissional, eu indico. Já fiz várias terapias, agora vou fazer meu mapa astral.`, image: "/assets/BethPerez.png" },
    { name: "Vaneide Correa Dornellas", text: `Atendimento excepcional. O local de atendimento é lindo, acolhedor e aconchegante junto à natureza. Lugar cheiroso e limpo. E a Leia é sorridente, alegre e super comprometida com o tratamento individualizado. Super recomendo.`, image: "/assets/VanideCorrea.png" },
    { name: "Julieta D'augero", text: `Minha experiência foi maravilhosa. Adorei às sessões com Leia. Ela me ajudo muito a melhorar muitos aspectos da minha vida 🩵 Altamente responsável. Eu recomendo a ela ✨`, image: "/assets/JulietaD'Augero.png" },
    { name: "Lara Costa Guerra", text: `É uma profissional de excelência ela faz um trabalho que cura sua alma e coloca significado em sua vida,tudo melhora pois você muda sua frequência, para uma mais alta e harmonica! Super indico!`, image: "/assets/LaraCosta.png" },
    { name: "Claudia Rosa Manso", text: `Excelente profissional! Sempre muito assertiva no diagnóstico e na condução do tratamento.`, image: "/assets/ClaudiaRosa.png" },
    { name: "Graziela De Paula Silva", text: `Através da escuta, condução e orientações de Léia Dornelas encontrei respostas, prumo e direção. GRATIDÃO Léia por tudo, por tanto e por sempre... ABRAÇOS`, image: "/assets/Graziela.png" },
    { name: "Luciana Muniz", text: `Uma experiência transformadora. Apoio incrível para a jornada de autoconhecimento, com muito profissionalismo e sabedoria! Gratidão, Leia`, image: "/assets/LucianaMuniz.png" },
    { name: "Reníria Af", text: `Sempre experiências transformadoras, uma profissional muito capacitada e com muita empatia. Exala conhecimento e cura 🙏💖` },
    { name: "Valdevina Rodrigues", text: `Excelente profissional, trabalha com muita seriedade, comprometida, dedicada, muito competente, recomendo demais 😍💖🙏`, image: "/assets/ValdevinaRodrigues.png" },
    { name: "Sonia Barbosa", text: `Eu recomendo. Foi muito bom para mim e minha família. Perfeito o acolhimento e os tratamentos.` },
    { name: "Clori Fernandes Maciel", text: `Valdiléia me tratou com muito amor e profissionalismo. Tenho recomendado para muitas pessoas.`, image: "/assets/CloriFernandes.png" },
  ];

  return (
    <FadeInSection className="section-light border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-5xl px-4 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
          O que dizem mulheres que já participaram de Vivências conduzidas por Léia Dornelas
        </h2>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
          {testimonials.map((t, i) => (
             <div key={i} className="min-w-0 flex-[0_0_85%] pl-6 md:flex-[0_0_45%] lg:flex-[0_0_35%]">
               <div className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                 <div>
                   <div className="mb-3 flex items-center justify-between">
                     <div className="text-4xl text-accent-blue opacity-40 leading-none">"</div>
                     <div className="flex items-center gap-1 text-yellow-400">
                       {[1, 2, 3, 4, 5].map((star) => (
                         <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                           <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                         </svg>
                       ))}
                     </div>
                   </div>
                   <p className="whitespace-pre-line text-lg italic leading-relaxed text-muted-foreground md:text-xl">
                     {t.text}
                   </p>
                 </div>
                 <div className="mt-8 flex items-center gap-4">
                   {t.image ? (
                     <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/50">
                       <img src={t.image} alt={`Foto de ${t.name}`} className="h-full w-full object-cover" loading="lazy" />
                     </div>
                   ) : (
                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hero text-hero-foreground font-display text-xl">
                       {t.name.charAt(0)}
                     </div>
                   )}
                   <p className="font-bold text-foreground text-lg">{t.name}</p>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="sm" className="gap-2 rounded-full border-border/50 bg-white shadow-sm text-muted-foreground hover:text-foreground">
          <a href="https://www.google.com/maps/place/AIA+Sa%C3%BAde+Integral+-+L%C3%A9ia+Dornelas/@-18.9325068,-48.2692629,17z/data=!4m8!3m7!1s0x94a4444df0687de7:0x47bfde9b005ed171!8m2!3d-18.9325068!4d-48.2692629!9m1!1b1!16s%2Fg%2F11c3ss_0_q?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-4 w-4">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Ver avaliações completas no Google
          </a>
        </Button>
      </div>
    </FadeInSection>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workshop: Barba Azul | Léia Dornelas" },
      {
        name: "description",
        content:
          "Participe do Workshop: Barba Azul e aprenda a reconhecer sabotadores internos, sinais de alerta e padrões emocionais que comprometem suas escolhas.",
      },
      { property: "og:title", content: "Workshop: Barba Azul | Léia Dornelas" },
      {
        property: "og:description",
        content:
          "Uma imersão ao vivo para mulheres que desejam mais clareza, discernimento e coragem para interromper padrões e fazer escolhas conscientes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: bannerWorkshop.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Workshop: Barba Azul | Léia Dornelas" },
      {
        name: "twitter:description",
        content:
          "Imersão online e ao vivo para mulheres que querem reconhecer sabotadores internos e confiar mais na própria percepção.",
      },
      { name: "twitter:image", content: bannerWorkshop.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Workshop: Barba Azul',
          description:
            'Imersão online e ao vivo conduzida por Léia Dornelas para reconhecer sabotadores internos, fortalecer a percepção e transformar escolhas.',
          eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          startDate: '2026-07-18T09:00:00-03:00',
          image: [bannerWorkshop.url, plateiaAsset.url],
          performer: {
            '@type': 'Person',
            name: 'Léia Dornelas',
          },
          offers: {
            '@type': 'Offer',
            price: '37.00',
            priceCurrency: 'BRL',
            availability: 'https://schema.org/LimitedAvailability',
            url: '/',
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-red-700/60 bg-red-600 py-3 text-white shadow-[0_10px_30px_-18px_var(--shadow-deep)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-x-6 gap-y-3 px-4 text-center md:flex-row">
          <div className="flex items-center gap-3 animate-pulse">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <span className="text-base font-bold md:text-lg">Garanta seu ingresso por apenas R$ 37</span>
          </div>
          <Button asChild size="sm" className="bg-background text-foreground hover:bg-background/90 font-bold px-6 shadow-sm">
            <a href="#oferta">Garantir com desconto</a>
          </Button>
        </div>
      </div>

      <section
        className="relative overflow-hidden bg-hero pt-24 text-hero-foreground"
        style={{
          backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--hero) 88%, transparent), color-mix(in oklab, var(--hero) 62%, transparent)), url(${bannerWorkshop.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay pointer-events-none absolute inset-0 opacity-80" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-4 pb-18 pt-10 md:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:pb-24 lg:pt-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-hero-border/80 bg-hero-panel px-4 py-2 text-sm font-medium text-hero-muted backdrop-blur-sm"
            >
              <Clock3 className="h-4 w-4 animate-spin-slow text-accent-blue" />
              Vagas quase encerradas para o 1º lote
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
              className="mt-7 max-w-4xl font-display text-4xl leading-[1.02] text-balance md:text-6xl lg:text-7xl"
            >
              Workshop Barba <span className="text-accent-blue">Azul</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              className="mt-4 max-w-4xl font-display text-[1.1rem] sm:text-xl leading-tight whitespace-nowrap text-hero-foreground/90 md:text-2xl lg:text-3xl"
            >
              SEU MAIOR RIVAL ESTÁ NA SUA MENTE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-warm-muted md:text-2xl md:leading-9"
            >
              Aprenda na prática a identificar os sabotadores internos que conduzem suas escolhas, relações e decisões.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
              className="mt-12 space-y-5"
            >
              {[
                "Vivencie como o Conto do Barba Azul revela o que faz uma mulher duvidar da própria percepção, ignorar sinais importantes e permanecer presa aos mesmos ciclos.",
                "Entenda como os predadores emocionais enfraquecem sua intuição, justificam situações impossíveis e dificultam decisões que poderiam mudar a sua vida.",
                "Compreenda como transformar percepção em clareza, clareza em escolha e escolha em movimento real.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center text-accent-blue">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-base leading-7 text-hero-soft md:text-lg">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
              className="mt-8 flex flex-col items-center gap-y-3 text-sm text-hero-muted md:flex-row md:justify-start md:gap-x-2 md:gap-y-0 md:text-base"
            >
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent-blue" />
                18 de julho às 9h
              </span>
              <span className="hidden text-hero-border md:inline">|</span>
              <span className="inline-flex items-center gap-2">
                <MonitorPlay className="h-4 w-4 text-accent-blue" />
                Ao Vivo
              </span>
              <span className="hidden text-hero-border md:inline">|</span>
              <span className="inline-flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-accent-blue" />
                Workshop imersivo e prático
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-14"
            >
              <Button asChild variant="cta" size="xl" className="w-full animate-pulse-gentle">
                <a href="#oferta">QUERO GARANTIR MEU INGRESSO</a>
              </Button>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-hero-muted/70">
                <ShieldCheck className="h-4 w-4" />
                Garantia de 7 dias Antes do Evento
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[520px] items-end justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-hero-border/70 bg-hero-panel shadow-[0_35px_90px_-40px_var(--shadow-deep)]">
              <img src={heroAsset.url} alt="Léia Dornelas, facilitadora do workshop A Chave Proibida" className="h-full w-full object-cover" loading="eager" />
            </div>
            <img src={keyAsset.url} alt="Chave antiga ornamental" className="floating-key pointer-events-none absolute -bottom-8 right-4 hidden w-28 md:block xl:-right-8 xl:w-36" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <FadeInSection className="section-light">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          {/* Título centralizado */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-foreground md:text-5xl">
              Existe uma revelação no conto Barba Azul que toda mulher precisa descobrir...
            </h2>
          </div>

          {/* Galeria de imagens sobrepostas — Desktop */}
          <div className="mt-14 hidden items-center justify-center md:flex">
            {[
              { src: contoBarbaAzul.url, alt: "Ilustração do conto Barba Azul", scale: "scale-[0.88]", z: "z-10", opacity: "opacity-75", ml: "", rotate: "-rotate-3" },
              { src: imagem2Conto.url, alt: "Cena do conto Barba Azul", scale: "scale-105", z: "z-30", opacity: "opacity-100", ml: "-ml-10", rotate: "rotate-1" },
              { src: storyAsset.url, alt: "Mulher segurando uma chave antiga", scale: "scale-105", z: "z-30", opacity: "opacity-100", ml: "-ml-10", rotate: "-rotate-1" },
              { src: novasPossibilidades.url, alt: "Novas possibilidades e transformação", scale: "scale-[0.88]", z: "z-10", opacity: "opacity-75", ml: "-ml-10", rotate: "rotate-3" },
            ].map(({ src, alt, scale, z, opacity, ml, rotate }) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.08, zIndex: 40, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative ${ml} ${z} ${opacity} ${scale} ${rotate} w-[240px] shrink-0 transition-all duration-300 lg:w-[280px] xl:w-[300px]`}
              >
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_20px_60px_-30px_var(--shadow-soft)]">
                  <img src={src} alt={alt} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Galeria de imagens — Mobile (grid 2x2) */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
            {[
              { src: contoBarbaAzul.url, alt: "Ilustração do conto Barba Azul" },
              { src: imagem2Conto.url, alt: "Cena do conto Barba Azul" },
              { src: storyAsset.url, alt: "Mulher segurando uma chave antiga" },
              { src: novasPossibilidades.url, alt: "Novas possibilidades e transformação" },
            ].map(({ src, alt }) => (
              <div key={src} className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-[0_12px_40px_-20px_var(--shadow-soft)]">
                <img src={src} alt={alt} className="aspect-[3/4] w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Texto do Storytelling */}
          <div className="mx-auto mt-14 max-w-3xl space-y-6 text-center text-lg leading-8 text-foreground/86 md:mt-20 md:text-xl md:leading-9">
            <p>
              Imagine uma mulher que sabe que algo não está bem em sua vida. Ela sente. Desconfia. Percebe sinais. Mas encontra razões para não dar atenção. Assim funcionam os sabotadores internos.
            </p>
            <p>
              Eles nos enganam, e se mostram como quem quer cuidar de você. Eles se disfarçam de justificativas. Enfraquecem sua intuição. Instigam medo. Criam uma falsa esperança de que as coisas mudem sozinhas.
            </p>
            <p>
              O conto Barba Azul revela exatamente esse mecanismo. Ele mostra como uma mulher ignora a própria intuição, minimiza sinais importantes e permanece presa a situações que comprometem sua paz, seu sucesso e sua integridade.
            </p>
            <p>
              Por isso esse conto atravessa tantas mulheres de forma profunda. Porque ele fala de uma dinâmica presente na psique feminina. Uma dinâmica que afasta a mulher de si mesma sem que ela perceba.
            </p>
            <p>
              E quando essa história é vivenciada em grupo, ela deixa de ser apenas uma história. Ela se transforma em espelho e revelação.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Floating Key between sections */}
      <div className="pointer-events-none relative z-10 -my-10 flex justify-center md:-my-16">
        <motion.img
          src={keyAsset.url}
          alt="Chave antiga 3D"
          initial={{ rotate: -25, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: 12, scale: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-32 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] md:h-48"
        />
      </div>

      <FadeInSection className="section-tinted overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
          <SectionHeader
            title="Essa imersão é para mulheres que..."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {audienceItems.map((item, index) => {
              const isLastItem = index === audienceItems.length - 1 && audienceItems.length % 2 !== 0;
              return (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  className={`flex h-full items-start gap-5 rounded-3xl border border-accent-blue/14 bg-card/85 p-8 shadow-[0_22px_55px_-45px_var(--shadow-soft)] backdrop-blur-sm ${
                    isLastItem ? "md:col-span-2 md:mx-auto md:w-full md:max-w-2xl" : ""
                  }`}
                >
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-blue/12 text-accent-blue">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="text-lg leading-8 text-foreground/88">{item}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </FadeInSection>

      {/* Floating Logo between sections */}
      <div className="pointer-events-none relative z-10 -my-10 flex justify-center md:-my-16">
        <motion.img
          src={logoBarbaAzul.url}
          alt="Logo Barba Azul 3D"
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-32 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] md:h-48"
        />
      </div>

      <FadeInSection className="section-dark relative overflow-hidden text-hero-foreground">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-accent-blue/6 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
          <SectionHeader
            title="O que você vai vivenciar nesta imersão?"
            description="Ao longo do Workshop, você será conduzida por uma experiência vivencial baseada em um dos contos mais importantes do livro Mulheres que Correm com os Lobos: Barba Azul"
            light
          />

          <div className="mt-10 mx-auto max-w-4xl space-y-8">
            <p className="text-xl text-center text-hero-foreground">Durante essa jornada, você vai:</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-hero-border/40 bg-hero-panel/50 p-6 backdrop-blur-sm"
                >
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center text-accent-blue">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="text-base leading-7 text-hero-muted">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6 pt-8 text-center text-lg leading-8 text-hero-muted">
              <p>Mais do que ouvir uma história, você viverá uma experiência de reflexão, consciência e autopercepção que poderá trazer novos entendimentos sobre sua vida, seus relacionamentos e seu futuro.</p>
              <p>Conquiste em poucas horas percepções que muitas mulheres levam anos para desenvolver sozinhas.</p>
              <p className="pt-4 text-xl font-semibold text-hero-foreground">Tudo isso conduzido através do Método AIA, integrando:</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {methodCards.map(({ title, icon: Icon }) => (
              <motion.div
                key={title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-hero-border/70 bg-hero-panel p-8 text-center shadow-[0_25px_70px_-40px_var(--shadow-deep)]"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-accent-blue/16 text-accent-blue">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl text-hero-foreground">{title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="mx-auto max-w-2xl text-xl leading-8 text-hero-muted mb-8">
              Em apenas uma manhã de imersão, você vivenciará uma experiência profunda de reflexão, autopercepção e consciência.
            </p>
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-8 py-4 text-xl font-medium text-accent-blue backdrop-blur-sm">
              <CalendarDays className="h-6 w-6" />
              Sábado, 18 de julho às 9h
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:py-28">
          
          <div className="h-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-[500px] flex-col gap-6 lg:sticky lg:top-32 lg:mx-0 lg:max-w-none"
          >
            {/* Imagem do Grupo */}
            <div className="w-full overflow-hidden rounded-xl shadow-md md:rounded-2xl">
              <img src={plateiaAsset.url} alt="Léia Dornelas com plateia em roda" className="h-full w-full object-cover" loading="lazy" />
            </div>

            {/* Imagem Léia Livro */}
            <div className="w-full overflow-hidden rounded-xl shadow-md md:rounded-2xl">
              <img src={leiaLivro.url} alt="Léia Dornelas segurando o livro" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-8 flex flex-col justify-center lg:mt-0"
          >
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              Olá! Sou Léia Dornelas e serei sua facilitadora nesta imersão.
            </h2>
            <div className="mt-10 space-y-8 text-xl leading-relaxed text-foreground/86 md:text-[1.35rem] md:leading-relaxed">
              <p>
                Há mais de uma década atuo acompanhando mulheres em processos de autoconhecimento, desenvolvimento emocional e transformação pessoal.
              </p>
              <p>
                Ao longo dessa trajetória, observei algo em comum entre mulheres de diferentes idades, histórias e realidades: Muitas percebiam os sinais. Sentiam desconfortos internos. Intuíam que algo não estava bem. Mas continuavam ignorando a própria percepção, repetindo padrões e permanecendo em situações de riscos emocionais e físicos.
              </p>
              <p>
                Foi justamente por encontrar essa dinâmica repetidamente nos atendimentos individuais e grupos terapêuticos que escolhi trazer o conto Barba Azul para esta experiência.
              </p>
              <p>
                Mais do que uma história, ele revela mecanismos presentes na vida de todas nós e ajuda a compreender como os predadores internos influenciam escolhas, relacionamentos e decisões impedindo sucesso, felicidade e propósito.
              </p>
              <p>
                Nesta imersão, vou conduzir você através do Método AIA — Autoconhecimento, Inteligência Sistêmica e Alquimia Interior — para que possa reconhecer esses padrões com mais clareza e desenvolver uma nova forma de se relacionar consigo mesma, com suas escolhas e com sua própria verdade.
              </p>
            </div>
          </motion.div>

        </div>
      </FadeInSection>

      {/* Testimonials Marquee */}
      <TestimonialsSection />

      {/* Floating Lock between sections */}
      <div className="pointer-events-none relative z-10 -my-10 flex justify-center md:-my-16">
        <motion.img
          src={fechaduraAsset.url}
          alt="Fechadura antiga 3D"
          initial={{ rotate: 20, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: -8, scale: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-32 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] md:h-48"
        />
      </div>

      <FadeInSection id="oferta" className="bg-slate-50 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl font-bold leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Sinta o poder da terapia em grupo através da imersão no conto <span className="text-blue-500">Barba Azul</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
              5 horas de vivência prática para compreender padrões, reconhecer sabotadores internos e desenvolver uma nova forma de se relacionar consigo mesma.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex animate-pulse items-center gap-3 rounded-2xl border border-highlight/70 bg-highlight px-6 py-4 text-center text-sm font-semibold text-highlight-foreground shadow-[0_16px_35px_-20px_var(--shadow-soft)] md:text-base max-w-3xl text-balance">
              <Clock3 className="h-6 w-6 shrink-0" />
              <span>Garanta sua vaga AGORA para vivenciar, na prática, o impacto de um dos contos mais transformadores de Mulheres que Correm com os Lobos</span>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            {/* CARD 1 (Ativo) */}
            <motion.article
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative rounded-[2rem] border-2 border-[#10172A] bg-white px-6 pb-8 pt-12 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.15)] md:px-10 md:pb-10"
            >
              {/* Badge: Mais Vendido */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#10172A] px-6 py-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-amber-100 shadow-md md:text-xs">
                Mais Vendido
              </div>
              
              <div className="flex flex-col items-center text-center">
                <p className="text-xl font-bold uppercase tracking-[0.1em] text-slate-500">Lote 0 - Membros AIA</p>
                <span className="mt-2 text-sm font-medium text-slate-400 line-through">De R$ 77,00</span>
                <span className="mt-1 font-display text-[4rem] font-bold leading-none text-[#10172A] md:text-7xl">R$ 37,00</span>
                <span className="mt-3 text-sm font-bold text-slate-500">ou 5x de R$ 8,19</span>
              </div>
              
              <ul className="mt-12 space-y-5">
                {[
                  "Imersão ao vivo pelo Zoom",
                  "Vivência terapêutica em grupo",
                  "Reflexões e exercícios de autopercepção",
                  "Grupo VIP no WhatsApp exclusivo para participantes",
                  "Garantia de 7 dias Antes do Evento",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4 text-base font-medium leading-7 text-slate-700">
                    <span className="mt-1.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-slate-700 text-slate-700">
                      <Check className="h-[10px] w-[10px]" strokeWidth={3} />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="cta" size="xl" className="mt-14 w-full rounded-xl bg-[#10172A] text-sm font-bold text-amber-100 hover:bg-[#10172A]/90 md:text-base">
                <a href="https://pay.hotmart.com/N106524344D?checkoutMode=10" target="_blank" rel="noopener noreferrer">QUERO GARANTIR MEU INGRESSO</a>
              </Button>
            </motion.article>

            {/* CARD 2 (Inativo) */}
            <motion.article
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10"
            >
              <div className="pointer-events-none opacity-25 grayscale filter">
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl font-bold uppercase tracking-[0.1em] text-slate-400">Próximo Lote</p>
                  <span className="mt-8 font-display text-[3.5rem] font-bold leading-none text-slate-300 md:text-6xl">R$ 77,00</span>
                </div>
                <ul className="mt-12 space-y-5">
                  {[
                    "Imersão ao vivo pelo Zoom",
                    "Vivência terapêutica em grupo",
                    "Reflexões e exercícios de autopercepção",
                    "Grupo VIP no WhatsApp exclusivo para participantes",
                    "Garantia de 7 dias Antes do Evento",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-4 text-base font-medium leading-7 text-slate-400">
                      <span className="mt-1.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border-2 border-slate-300 text-slate-300">
                        <Check className="h-[10px] w-[10px]" strokeWidth={3} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Overlay: EM BREVE Badge */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <div className="-mt-16 -rotate-12 rounded-lg bg-gray-500/90 px-8 py-3 shadow-xl backdrop-blur-xs">
                  <p className="font-display text-2xl font-bold tracking-widest text-white md:text-3xl">EM BREVE</p>
                </div>
              </div>

              {/* Disabled Button at bottom */}
              <div className="relative z-20 mt-14 w-full rounded-xl bg-slate-100 py-[1.125rem] text-center text-sm font-bold tracking-widest text-slate-300 cursor-not-allowed md:text-base">
                INDISPONÍVEL
              </div>
            </motion.article>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex w-full max-w-4xl items-center justify-center gap-3 rounded-2xl border border-red-200 bg-[#fdf5f5] px-6 py-4 text-center text-base font-medium text-red-800 md:text-lg">
              <AlertTriangle className="h-6 w-6 shrink-0 text-red-600" />
              <span><strong className="text-red-700">Atenção:</strong> Na virada do lote, o preço para participar da imersão vai aumentar</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-dark text-hero-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8 lg:py-28">
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas Frequentes"
            description="A resposta para todas as perguntas abaixo é SIM:"
            light
          />

          <div className="mt-12 rounded-[2rem] border border-hero-border/70 bg-hero-panel p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map(({ question, answer }, index) => {
                const firstWord = answer.split(/[.!]/, 1)[0] + (answer.match(/[.!]/)?.[0] ?? "");
                const rest = answer.slice(firstWord.length).trim();
                return (
                  <AccordionItem key={question} value={`item-${index}`} className="border-hero-border/70">
                    <AccordionTrigger className="py-6 text-left font-display text-xl text-hero-foreground hover:no-underline md:text-2xl">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="rounded-[1.5rem] border border-hero-border/70 bg-background/6 p-6">
                        <p className="font-display text-3xl text-warm md:text-4xl">{firstWord}</p>
                        {rest ? <p className="mt-4 text-base leading-8 text-hero-muted md:text-lg">{rest}</p> : null}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="cta" size="xl" className="animate-pulse-gentle">
              <a href="#oferta">
                QUERO ENTRAR NESTA IMERSÃO
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </FadeInSection>

      <footer className="border-t border-[#e2dec9] bg-[#f6f3eb] py-10">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Léia Dornelas
          </h2>
          
          <div className="mt-6 flex justify-center gap-5">
            {/* WhatsApp */}
            <a href="https://wa.me/5534998894252?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20Workshop." target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-[#f6f3eb] transition-transform hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/leiadornelas/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-[#f6f3eb] transition-transform hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-foreground/60">
            2026 © Léia Dornelas - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
