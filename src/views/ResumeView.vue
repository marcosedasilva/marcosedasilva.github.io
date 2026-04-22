<script setup>
import ZigZag from '../components/ZigZag.vue'
import { 
  Download, Briefcase, GraduationCap, Globe2, 
  BrainCircuit, Sparkles, Database, Code2 
} from 'lucide-vue-next'

function calculateInterval(firstDate, lastDate) {
  const begin = new Date(firstDate);
  const end = new Date(lastDate);

  if (end < begin) {
    return
  }

  let anos = end.getFullYear() - begin.getFullYear();
  let meses = end.getMonth() - begin.getMonth();

  // Ajuste de meses
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const partes = [];

  if (anos > 0) {
    partes.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
  }

  if (meses > 0) {
    partes.push(`${meses} ${meses === 1 ? "mês" : "meses"}`);
  }

  return partes.join(" e ");
}

const aiSkills = [
  { name: 'Python (Especialista)', color: 'text-brand' },
  { name: 'LLM Integration', color: 'text-brand' },
  { name: 'RAG (Retrieval-Augmented Generation)', color: 'text-brand' },
  { name: 'Prompt Engineering', color: 'text-brand' },
  { name: 'LangChain / AutoGPT', color: 'text-brand' },
  { name: 'AI Model Deployment', color: 'text-brand' },
]

const techSkills = [
  { name: 'PHP / Laravel', color: 'text-gray-400' },
  { name: 'Vue.js / React', color: 'text-gray-400' },
  { name: 'TypeScript', color: 'text-gray-400' },
  { name: 'PostgreSQL / MySQL', color: 'text-gray-400' },
  { name: 'MongoDB', color: 'text-gray-400' },
  { name: 'Docker', color: 'text-gray-400' },
]

const experiences = [
  {
    role: 'Desenvolvedor Full-Stack & AI Enthusiast',
    company: 'Clicker Sports Solutions',
    period: 'Fev. 2024 - Presente',
    time: calculateInterval('2024-02-01', new Date().toISOString().split('T')[0]),
    location: 'Florianópolis, SC',
    description: [
      'Desenvolvimento de aplicações de alto tráfego utilizando PHP (Laravel) e Vue.js, focando em escalabilidade.',
      'Implementação de lógica de negócios complexa com TypeScript e JavaScript.',
      'Pivoteando expertise técnica para integração de fluxos de automação baseados em Python e inteligência de dados.',
      'Otimização de estruturas de banco de dados (PostgreSQL/MySQL) para suporte a soluções de software esportivo.'
    ]
  },
  {
    role: 'Engenheiro de Software (Estágio) | Python & Automação',
    company: 'Corpo de Bombeiros Militar de Santa Catarina',
    period: 'Nov. 2025 - Presente',
    time: calculateInterval('2025-11-01', new Date().toISOString().split('T')[0]),
    location: 'Florianópolis, SC',
    description: [
      'Foco na modernização de sistemas públicos através de automação e boas práticas de engenharia de software.',
      'Automação com Python: Desenvolvimento de scripts para otimizar processos internos.',
      'Backend: Manutenção e melhora de aplicações web usando Python e Javascript, garantindo escalabilidade, segurança e desempenho.',
      'Metodologias Ágeis: Participação ativa em equipes Scrum/Kanban, utilizando Git para controle de versão.',
      'Documentação do sistema: Auxiliei na criação de documentação técnica para APIs e processos internos, visando garantir a transferência de conhecimento e a confiabilidade do sistema.'
    ]
  },
  {
    role: 'Missionário Voluntário (Liderança & Comunicação)',
    company: 'The Church of Jesus Christ of Latter-day Saints',
    period: 'Fev. 2022 - Jan. 2024',
    time: calculateInterval('2022-02-01', '2024-02-01'),
    location: 'Buenos Aires, Argentina',
    description: [
      'Liderança de equipes multiculturais de até 14 voluntários, gerenciando metas e relatórios de progresso.',
      'Treinamentos semanais para grupos de 40+ pessoas sobre estratégias de comunicação e desenvolvimento pessoal.',
      'Fluência profissional em Espanhol atingida através de imersão total e trabalho sob alta pressão.'
    ]
  },
  {
    role: 'Desenvolvedor Full-Stack Júnior',
    company: 'Dataclick Ltda',
    period: 'Fev. 2021 - Fev. 2022',
    time: calculateInterval('2021-02-01', '2022-02-01'),
    location: 'Itajaí, SC',
    description: [
      'Desenvolvimento de APIs RESTful robustas para integração de sistemas internos e externos.',
      'Migração de projetos legados e otimização de performance de banco de dados e UI/UX.',
      'Resolução de problemas críticos, melhorando significativamente a estabilidade do sistema para o usuário final.'
    ]
  }
]

const education = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'UFSC - Univ. Federal de Santa Catarina',
    period: '2024 - 2028',
    details: 'Foco em rigor técnico e fundamentos de computação.'
  },
  {
    degree: 'Software Engineering',
    institution: 'BYU-Pathway Worldwide',
    period: '2025 - 2028',
    details: 'Currículo internacional focado em agilidade e mercado global.'
  },
  {
    degree: 'Internet of Things (IoT)',
    institution: 'Cruzeiro do Sul Virtual',
    period: '2025 - 2026',
    details: 'Integração Hardware-Software e automação.'
  },
  {
    degree: 'Técnico em Informática',
    institution: 'Instituto Federal Catarinense (IFC)',
    period: '2018 - 2021',
    details: 'Base técnica inicial e fundamentos de TI.'
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <section>
      <div class="flex items-center gap-3 mb-4">
        <Sparkles class="text-brand animate-pulse" :size="32" />
        <h1 class="text-4xl font-bold italic">Currículo Profissional</h1>
      </div>
      <p class="text-gray-400 text-lg max-w-3xl leading-relaxed">
        Engenheiro de Software movido pela interseção entre o desenvolvimento Full-stack e a 
        <span class="text-white font-semibold">Inteligência Artificial</span>. 
        Com uma base sólida em sistemas escaláveis, estou focando minha carreira na implementação de 
        soluções inteligentes usando <span class="text-brand font-bold">Python, LLMs e RAG</span>.
      </p>
      <ZigZag />
    </section>

    <section class="mt-12 p-8 bg-brand/5 border border-brand/20 rounded-3xl">
      <div class="flex items-center gap-2 mb-6">
        <BrainCircuit class="text-brand" :size="24" />
        <h2 class="text-xl font-bold uppercase tracking-wider text-brand">Core AI & Data Skills</h2>
      </div>
      <div class="flex flex-wrap gap-3">
        <div v-for="skill in aiSkills" :key="skill.name" 
             class="bg-brand/10 border border-brand/30 px-4 py-2 rounded-xl flex items-center gap-2 group hover:bg-brand/20 transition cursor-default">
          <span class="text-brand font-black">❯</span>
          <span class="text-sm font-bold text-white">{{ skill.name }}</span>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <div class="flex items-center justify-between mb-10">
        <div class="flex items-center gap-2">
          <Briefcase class="text-brand" :size="24" />
          <h2 class="text-2xl font-bold">Histórico Profissional</h2>
        </div>
        <a href="/resume_marcos_da_silva.pdf" target="_blank" class="text-brand hover:text-white transition flex items-center gap-2 text-sm font-bold uppercase">
          <Download :size="18" /> PDF
        </a>
      </div>

      <div class="relative border-l-2 border-gray-800 ml-4 space-y-16">
        <div v-for="exp in experiences" :key="exp.company" class="relative pl-10 group">
          <div class="absolute w-5 h-5 bg-dark-bg border-4 border-brand rounded-full -left-[11px] top-1 group-hover:scale-125 transition-transform"></div>
          
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 class="text-2xl font-bold text-white group-hover:text-brand transition-colors">{{ exp.role }}</h3>
            <span class="text-sm text-center font-mono text-gray-500 bg-gray-900 px-3 py-1 rounded-md">{{ exp.period }} <br> {{ exp.time }}</span>
          </div>
          
          <p class="text-brand font-medium mb-4">{{ exp.company }} • <span class="text-gray-500 font-normal">{{ exp.location }}</span></p>
          
          <ul class="space-y-3">
            <li v-for="point in exp.description" :key="point" class="text-gray-400 flex gap-3 text-sm leading-relaxed">
              <span class="text-brand font-bold">»</span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mt-24">
      <div class="flex items-center gap-2 mb-8">
        <GraduationCap class="text-brand" :size="24" />
        <h2 class="text-2xl font-bold">Formação Acadêmica</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="edu in education" :key="edu.degree" 
             class="p-6 bg-gray-900/20 border border-gray-800 rounded-2xl hover:border-brand/40 transition-all group">
          <h3 class="font-bold text-white group-hover:text-brand transition-colors">{{ edu.degree }}</h3>
          <p class="text-sm text-brand/80 mt-1">{{ edu.institution }}</p>
          <div class="text-xs text-gray-600 mt-2 font-mono uppercase">{{ edu.period }}</div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">{{ edu.details }}</p>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-gray-800 rounded-2xl flex flex-col items-center text-center">
          <Globe2 class="text-brand mb-3" />
          <h4 class="font-bold text-white">Espanhol</h4>
          <p class="text-gray-500 text-sm">Nativo / Bilíngue (C2)</p>
        </div>
        <div class="p-6 border border-gray-800 rounded-2xl flex flex-col items-center text-center">
          <Globe2 class="text-brand mb-3" />
          <h4 class="font-bold text-white">Português</h4>
          <p class="text-gray-500 text-sm">Nativo</p>
        </div>
        <div class="p-6 border border-gray-800 rounded-2xl flex flex-col items-center text-center">
          <Globe2 class="text-brand mb-3" />
          <h4 class="font-bold text-white">Inglês</h4>
          <p class="text-gray-500 text-sm">Intermediário (B1)</p>
        </div>
      </div>
    </section>
  </div>
</template>