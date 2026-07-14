import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Terminal,
  ChevronRight,
  Quote,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Cookie
} from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SKILLS = [
  { category: "Backend & Core", icon: <Terminal className="w-6 h-6 text-orange-500" />, items: ["Java 11+", "Spring Boot", "Spring MVC", "Quarkus"] },
  { category: "Arquitetura", icon: <Code2 className="w-6 h-6 text-sky-400" />, items: ["Microsserviços", "Arquitetura Hexagonal", "DDD", "Clean Code", "TDD"] },
  { category: "Integração & Mensageria", icon: <Server className="w-6 h-6 text-amber-500" />, items: ["Apache Kafka", "Apache Camel", "Digibee", "Camunda BPM"] },
  { category: "Cloud & DevOps", icon: <Cloud className="w-6 h-6 text-red-400" />, items: ["AWS", "Microsoft Azure", "Docker", "CI/CD", "Grafana", "Splunk"] },
  { category: "Banco de Dados", icon: <Database className="w-6 h-6 text-yellow-500" />, items: ["PostgreSQL", "SQL Server", "JPA / Hibernate", "Panache"] },
];

const EXPERIENCES = [
  {
    company: "Accenture Brasil",
    role: "Analista Sênior de Eng. de Software Customizado",
    description: "Atuação em projetos de alta criticidade (Banco BV, TIM, C6 Bank, Santander, Itaú). Construção de microsserviços, APIs RESTful, integrações corporativas de alta volumetria e arquiteturas cloud-native.",
    tags: ["Java", "Spring Boot", "Kafka", "Azure", "AWS"]
  },
  {
    company: "K2 Partnering Solutions",
    role: "Desenvolvedor Java",
    description: "Desenvolvimento de funcionalidades backend com foco em regras de negócio complexas e integração entre sistemas corporativos bancários.",
    tags: ["Java", "Backend", "Integrações"]
  },
  {
    company: "Stefanini",
    role: "Analista de Suporte de TI",
    description: "Suporte especializado nível 2 e 3, resolução de incidentes críticos e ponte analítica entre infraestrutura e desenvolvimento.",
    tags: ["Troubleshooting", "Sistemas Corporativos"]
  }
];

const ACADEMIC = [
  {
    course: "Ciência de Dados e Machine Learning",
    institution: "Faculdade Iguaçu",
    type: "Pós-Graduação",
    status: "Cursando"
  },
  {
    course: "Business Intelligence",
    institution: "Faculdade Iguaçu",
    type: "Executive MBA",
    status: "Cursando"
  },
  {
    course: "Inteligência Artificial",
    institution: "Faculdade Iguaçu",
    type: "Pós-Graduação",
    status: "Concluído"
  },
  {
    course: "TI para Estratégias de Negócios",
    institution: "UNIP - Universidade Paulista",
    type: "Pós-Graduação",
    status: "Concluído"
  },
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "UNIP - Universidade Paulista",
    type: "Tecnólogo",
    status: "Concluído"
  },
  {
    course: "Informática para Internet",
    institution: "IFSul",
    type: "Técnico",
    status: "Concluído"
  }
];

const QUOTES = [
  {
    text: "Qualquer tolo consegue escrever código que um computador entenda. Bons programadores escrevem código que humanos possam entender.",
    author: "Martin Fowler"
  },
  {
    text: "Falar é fácil. Me mostre o código.",
    author: "Linus Torvalds"
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-stone-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500 bg-slate-100 dark:bg-stone-800 p-0.5 shadow-lg shadow-orange-500/20">
              <img 
                src="1780665451143.png" 
                alt="Marcos Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-stone-100 tracking-tight transition-colors">
              Marcos<span className="text-orange-500">.dev</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-slate-600 dark:text-stone-300 font-medium">
            <a href="#sobre" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Sobre Mim</a>
            <a href="#skills" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Skills</a>
            <a href="#experiencia" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Trajetória</a>
            <a href="#formacao" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Formação</a>
            <a href="#contato" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 dark:text-stone-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-stone-900 border-b border-slate-200 dark:border-stone-800 transition-colors">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-md transition-colors">Sobre Mim</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-md transition-colors">Skills</a>
            <a href="#experiencia" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-md transition-colors">Trajetória</a>
            <a href="#formacao" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-md transition-colors">Formação</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-md transition-colors">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-semibold border border-orange-200 dark:border-orange-500/20 transition-colors">
            <Terminal size={16} />
            <span>Transformando café em código... e resolvendo BOs!</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight transition-colors">
            Olá, sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-500 dark:from-orange-400 dark:via-amber-500 dark:to-sky-400">Marcos Farias</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-stone-300 max-w-2xl mx-auto md:mx-0 transition-colors">
            Desenvolvedor Backend Java & Solucionador de Problemas Complexos. 
            Construo arquiteturas escaláveis para que você não tenha que se preocupar com os servidores caindo na sexta-feira.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#contato" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white dark:text-stone-950 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/25">
              Bora Codar Juntos?
            </a>
            <a href="https://github.com/TarjaBlack" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white dark:bg-stone-800 hover:bg-slate-50 dark:hover:bg-stone-700 text-slate-900 dark:text-white font-medium rounded-lg transition-all flex items-center gap-2 border border-slate-200 dark:border-stone-700 shadow-sm">
              <GithubIcon size={20} />
              Meu GitHub
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative max-w-md w-full">
          <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-stone-800 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 bg-slate-100 dark:bg-stone-900">
            <img 
              src="1780665451143.png" 
              alt="Marcos Cartoon Dev" 
              className="w-full h-auto object-cover mix-blend-multiply dark:mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 dark:from-stone-950/60 to-transparent"></div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-400/30 dark:bg-sky-500/20 rounded-full blur-2xl transition-colors"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-400/30 dark:bg-orange-500/20 rounded-full blur-2xl transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-100/50 dark:bg-stone-900/50 border-y border-slate-200 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-slate-600 dark:text-stone-300 leading-relaxed transition-colors">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 transition-colors">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              Sobre o Desenvolvedor
            </h2>
            
            <div className="mb-4">
              <img 
                src="20260625_102255-IMG_STYLE.jpg" 
                alt="Marcos Farias PB" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl grayscale float-left mr-6 mb-4 border-2 border-slate-200 dark:border-stone-700 shadow-lg"
              />
              <p className="mb-4">
                Com sólida experiência nas trincheiras de projetos de altíssima criticidade, 
                venho domando servidores e construindo microsserviços para gigantes dos setores financeiro e de telecomunicações, 
                como Banco BV, Itaú Unibanco, Santander, C6 Bank e TIM.
              </p>
              <p className="mb-4">
                Sou apaixonado pelo ecossistema Java moderno (11+, Spring Boot, Quarkus). Minha especialidade é pegar 
                requisitos de negócio que parecem um quebra-cabeça de mil peças e transformá-los em arquiteturas robustas, 
                utilizando Domain-Driven Design (DDD) e Arquitetura Hexagonal.
              </p>
            </div>
            
            <p className="font-medium text-orange-600 dark:text-orange-400 transition-colors">
              Perfil focado, resiliente e sempre pronto para resolver o próximo grande bug em produção (de preferência antes do cliente notar!).
            </p>
          </div>
          
          <div className="space-y-8">
            {QUOTES.map((quote, idx) => (
              <div key={idx} className="relative bg-white dark:bg-stone-900 p-8 rounded-2xl border border-slate-200 dark:border-stone-800 shadow-xl transition-colors">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-200 dark:text-stone-800 opacity-50 transition-colors" />
                <p className="text-lg italic text-slate-700 dark:text-stone-300 relative z-10 transition-colors">"{quote.text}"</p>
                <div className="mt-4 text-orange-500 font-bold text-sm tracking-wider uppercase">
                  — {quote.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Arsenal Técnico</h2>
          <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto transition-colors">
            As ferramentas e tecnologias que utilizo diariamente para transformar ideias abstratas em sistemas que funcionam em escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-900/80 p-6 rounded-2xl border border-slate-200 dark:border-stone-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors shadow-sm hover:shadow-md dark:shadow-none group">
              <div className="w-12 h-12 bg-slate-50 dark:bg-stone-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-stone-800">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-stone-300 transition-colors">
                    <ChevronRight size={16} className="text-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trajectory = () => {
  return (
    <section id="experiencia" className="py-20 bg-slate-100/50 dark:bg-stone-900/40 border-y border-slate-200 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Minha Trajetória</h2>
          <p className="text-slate-600 dark:text-stone-400 transition-colors">Por onde passei e os desafios que ajudei a superar.</p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 dark:bg-stone-700 -translate-x-1/2 transition-colors"></div>
              
              <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-50 dark:border-stone-950 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_10px_rgba(249,115,22,0.3)] dark:shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-colors"></div>
                
                <div className="md:w-[45%] bg-white dark:bg-stone-900 p-6 rounded-2xl border border-slate-200 dark:border-stone-800 shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-stone-700 hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5 transition-all">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{exp.role}</h3>
                  <h4 className="text-lg text-orange-600 dark:text-orange-400 mb-4 font-medium transition-colors">{exp.company}</h4>
                  <p className="text-slate-600 dark:text-stone-300 text-sm leading-relaxed mb-4 transition-colors">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-50 dark:bg-stone-950 text-xs text-slate-600 dark:text-stone-300 rounded-md border border-slate-200 dark:border-stone-800 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Academic = () => {
  return (
    <section id="formacao" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex justify-center items-center gap-3 transition-colors">
            <GraduationCap className="w-8 h-8 text-orange-500" />
            Formação Acadêmica
          </h2>
          <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto transition-colors">
            Acredito que o aprendizado contínuo é o que mantém um desenvolvedor relevante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMIC.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-slate-200 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 dark:bg-stone-950 rounded-lg text-orange-600 dark:text-orange-400 border border-slate-100 dark:border-stone-800 transition-colors">
                  <BookOpen size={20} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border transition-colors ${
                  item.status === 'Concluído' 
                    ? 'bg-emerald-50 dark:bg-stone-950 border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400' 
                    : 'bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400'
                }`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight flex-grow transition-colors">{item.course}</h3>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-stone-800/50 transition-colors">
                <p className="text-slate-600 dark:text-stone-400 text-sm font-medium transition-colors">{item.institution}</p>
                <p className="text-slate-500 dark:text-stone-500 text-sm transition-colors">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-slate-900 dark:bg-stone-950 border-t border-slate-800 dark:border-stone-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-12 mb-16">
          
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-light text-white mb-2">Vamos conversar sobre negócios?</h2>
              <p className="text-slate-300 dark:text-stone-400">
                Estou aberto a novas oportunidades, conexões profissionais e desafios que exijam solidez e excelência em engenharia de software.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:m.diazfarias@gmail.com" className="flex items-center justify-center lg:justify-start gap-4 text-slate-300 dark:text-stone-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-stone-900 flex items-center justify-center group-hover:bg-orange-600 transition-colors border border-slate-700 dark:border-stone-800">
                  <Mail size={18} />
                </div>
                <span className="text-lg">m.diazfarias@gmail.com</span>
              </a>
              
              <a href="tel:+5548988621897" className="flex items-center justify-center lg:justify-start gap-4 text-slate-300 dark:text-stone-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-stone-900 flex items-center justify-center group-hover:bg-sky-600 transition-colors border border-slate-700 dark:border-stone-800">
                  <Phone size={18} />
                </div>
                <span className="text-lg">(48) 98862-1897</span>
              </a>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="https://www.linkedin.com/in/marcosdiazfarias/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 dark:bg-stone-900 border border-slate-700 dark:border-stone-800 flex items-center justify-center text-slate-300 dark:text-stone-300 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                  <LinkedinIcon size={22} />
                </a>
                <a href="https://github.com/TarjaBlack" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 dark:bg-stone-900 border border-slate-700 dark:border-stone-800 flex items-center justify-center text-slate-300 dark:text-stone-300 hover:bg-[#333] hover:text-white hover:border-[#333] transition-all">
                  <GithubIcon size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[16.8rem] lg:w-1/4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-sky-600 rounded-lg blur opacity-25"></div>
              <img 
                src="20260625_215054-IMG_STYLE.jpg" 
                alt="Marcos André Díaz Farias - Perfil Profissional" 
                className="relative rounded-lg shadow-2xl object-cover border border-slate-800 dark:border-stone-800 w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] object-top"
              />
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-slate-800 dark:border-stone-900 text-center text-slate-400 dark:text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Marcos André Díaz Farias. Todos os direitos reservados.</p>
          <p className="mt-1 text-slate-500 dark:text-stone-600">Desenvolvido com React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Substitua 'G-XXXXXXXXXX' pelo seu ID de Métrica do Google Analytics
  const GA_TRACKING_ID = 'G-YXPNLHP9PF'; 

  const initializeAnalytics = () => {
    if (window.gtag) return; // Evita carregar duas vezes
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  };

  useEffect(() => {
    const consent = localStorage.getItem('marcosdev_cookie_consent');
    if (!consent) {
      // Se não tem resposta ainda, mostra o banner após 1 segundo
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // Se já aceitou antes, inicia o Analytics silenciosamente
      initializeAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('marcosdev_cookie_consent', 'accepted');
    setShowBanner(false);
    initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('marcosdev_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl shrink-0">
            <Cookie size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Privacidade e Cookies</h3>
            <p className="text-slate-600 dark:text-stone-300 text-sm leading-relaxed">
              Utilizo cookies e o Google Analytics apenas para entender como os visitantes interagem com meu portfólio (quantos acessos, de onde vêm), ajudando a melhorar a experiência. Nenhum dado pessoal é comercializado. Você aceita o uso destas métricas?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end md:justify-start">
          <button 
            onClick={handleDecline}
            className="px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
          >
            Recusar
          </button>
          <button 
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors shadow-lg shadow-orange-500/20"
          >
            Sim, eu aceito
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-stone-950 font-sans selection:bg-orange-500/30 selection:text-orange-800 dark:selection:text-orange-200 scroll-smooth transition-colors duration-300 relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Trajectory />
        <Academic />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}