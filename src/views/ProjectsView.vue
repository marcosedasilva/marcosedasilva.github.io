<script setup>
import ZigZag from '../components/ZigZag.vue'
import { Github, ExternalLink, BrainCircuit, Database, Code2, Sparkles, Layers, ShoppingBag, TrendingUp, Brush} from 'lucide-vue-next'

const featuredProject =   {
    title: 'Fast Queue - Event-Driven Microservices Platform',
    description: 'Plataforma de alta performance para monetização de streams via filas pagas. Arquitetura baseada em microsserviços assíncronos, utilizando o padrão CQRS e pipeline de dados via Change Data Capture (CDC) para busca em tempo real.',
    tech: ['Python (FastAPI)', 'Apache Kafka', 'Elasticsearch', 'Vue 3', 'GCP / Firebase', 'Redis'],
    github: 'https://github.com/marcosedasilva/fast-queue',
    link: 'https://fastq.site',
    image: '/projects/fastqueue.png',
    category: 'Backend / Cloud Architecture',
    icon: Layers
  }


const otherProjects = [
  {
    title: 'Floripoints - Engine de Fidelidade e Inteligência Local',
    description: 'Desenvolvimento de uma plataforma de recompensas voltada ao comércio de Florianópolis. Implementei APIs robustas para gestão de transações e comportamento de consumo, estruturando dados para sistemas de recomendação baseados em perfis de usuário e análise de retenção (Churn).',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Python (Data Analysis)'],
    github: 'https://github.com/marcosedasilva/floripoints',
    link: '#',
    category: 'Backend & Intelligence',
    icon: ShoppingBag
  },
  {
    title: 'BrokerScore - Inteligência Preditiva Imobiliária',
    description: 'Plataforma de análise de performance e scoring para o setor imobiliário. Desenvolvi algoritmos para avaliação de leads e corretores, utilizando processamento de dados para gerar rankings inteligentes e insights sobre conversão, prontos para integração com modelos de Machine Learning.',
    tech: ['Python', 'Laravel', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com/marcosedasilva/brokerscore-api',
    link: '#',
    category: 'AI & Backend',
    icon: TrendingUp
  },
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-16">
    <!-- Cabeçalho -->
    <section class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <Sparkles class="text-brand" :size="32" />
        <h1 class="text-4xl font-bold italic">Projetos</h1>
      </div>
      <p class="text-gray-400 text-lg max-w-2xl">
        Explorações técnicas em <span class="text-white">IA</span>, 
        <span class="text-brand">Engenharia de Dados</span> e sistemas escaláveis.
      </p>
      <ZigZag />
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="md:col-span-2 group flex flex-col md:flex-row bg-gray-900/20 border border-gray-800 rounded-3xl overflow-hidden hover:border-brand/40 transition-all duration-300">
        <div class="md:w-1/2 h-64 md:h-auto bg-gray-800 overflow-hidden">
          <img 
            :src="featuredProject.image" 
            alt="Project Preview" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
        </div>
        
        <div class="md:w-1/2 p-8 flex flex-col justify-center">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-[10px] font-bold uppercase tracking-tighter text-brand bg-brand/10 px-3 py-1 rounded-full">
              {{ featuredProject.category }}
            </span>
          </div>
          <h2 class="text-3xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
            {{ featuredProject.title }}
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            {{ featuredProject.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="t in featuredProject.tech" :key="t" class="text-[10px] font-mono text-gray-500 bg-gray-900/50 px-2 py-1 rounded border border-gray-800">
              {{ t }}
            </span>
          </div>

          <div class="flex items-center gap-6">
            <a :href="featuredProject.github" target="_blank" class="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition">
              <Github :size="18" /> GitHub
            </a>
            <a :href="featuredProject.link" target="_blank" class="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand transition">
              <ExternalLink :size="18" /> Demo
            </a>
            <a href="https://raw.githubusercontent.com/marcosedasilva/fast-queue/refs/heads/main/system_design.png" target="_blank" class="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-brand transition">
              <Brush :size="18" /> System Design
            </a>
          </div>
        </div>
      </div>

      <div v-for="project in otherProjects" :key="project.title" 
           class="group flex flex-col bg-gray-900/20 border border-gray-800 rounded-3xl p-8 hover:border-brand/40 transition-all duration-300">
        
        <div class="flex items-center justify-between mb-6">
          <div class="p-3 bg-brand/5 rounded-2xl">
            <component :is="project.icon" class="text-brand" :size="24" />
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-gray-600">
            {{ project.category }}
          </span>
        </div>

        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
          {{ project.title }}
        </h3>
        
        <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {{ project.description }}
        </p>

        <div class="flex items-center gap-4 mt-auto">
          <a :href="project.github" target="_blank" class="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition">
            <Github :size="16" /> GitHub
          </a>
        </div>
      </div>

    </div>
  </div>
</template>