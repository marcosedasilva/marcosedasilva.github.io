<script setup>
import ZigZag from '../components/ZigZag.vue'
import { Twitter, Github, Linkedin, Mail, Microscope, Database, BrainCircuit, Brain, FileBraces, File } from 'lucide-vue-next'
</script>

<template>
  <main class="max-w-2xl mx-auto px-6 pt-16 pb-24">
    <h1 class="text-4xl md:text-4xl font-bold mb-6 leading-tight">
      Olá, me chamo <span class="text-brand">Marcos E. da Silva!</span>
    </h1>

    <div class="space-y-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
      <p>
        Sou desenvolvedor de software <span class="underline decoration-brand">full-stack pleno</span>, com foco
        em backend
        e uma paixão crescente por inteligência artificial. Tenho uma carreira sólida de mais
        de <span class="underline decoration-brand">6 anos de experiência</span>.
        Apaixonado por <span class="text-brand font-semibold">AI, LLMs e Data Science</span>, estou constantemente
        explorando novas tecnologias para criar soluções inovadoras.
      </p>

      <p>
        Atualmente curso Ciência da Computação na <a href="https://cco.ufsc.br/" target="_blank"><span
            class="text-white font-medium underline decoration-brand"">UFSC</span></a>,
        Onde estou aplicando <span class=" text-brand font-medium">Python</span> para pesquisar a desigualdade social
          por meio de análise de dados avançada.
      </p>

      <p>
        Sou especialista em fazer a ponte entre sistemas de <span class="text-brand font-medium">back-end
          robustos</span> e soluções inteligentes,
        aproveitando minha experiência em IoT e <span class="text-purple-500 font-medium">arquiteturas
          escaláveis</span>.
      </p>
    </div>

    <ZigZag />

    <div class="flex flex-wrap gap-4 mt-8">
      <div class="flex items-center gap-2 text-sm font-mono text-brand bg-brand/10 px-3 py-1 rounded-md">
        <BrainCircuit :size="16" /> LLM
      </div>
      <div class="flex items-center gap-2 text-sm font-mono text-brand bg-brand/10 px-3 py-1 rounded-md">
        <Brain :size="16" /> AI
      </div>
      <div class="flex items-center gap-2 text-sm font-mono text-brand bg-brand/10 px-3 py-1 rounded-md">
        <FileBraces :size="16" /> Python
      </div>
    </div>

    <section class="mt-16" id="social">
      <h3 class="font-bold mb-6 uppercase tracking-widest text-sm text-gray-500">Me encontre em</h3>
      <div class="flex flex-wrap gap-8 text-gray-400">
        <a href="https://github.com/marcosedasilva" target="_blank"
          class="flex items-center gap-2 hover:text-white transition">
          <Github :size="20" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/marcosedasilva/" target="_blank"
          class="flex items-center gap-2 hover:text-white transition">
          <Linkedin :size="20" /> LinkedIn
        </a>
        <a href="mailto:marcos.length@gmail.com" class="flex items-center gap-2 hover:text-white transition">
          <Mail :size="20" /> Email
        </a>
      </div>
    </section>

    <section class="mt-20 p-8 border border-gray-800 rounded-3xl bg-gradient-to-br from-gray-900/50 to-transparent">
      <h3 class="font-bold mb-2">Aberto a propostas para AI, LLM e Python</h3>
      <p class="text-gray-400">
        Atualmente estou buscando oportunidades onde possa aplicar minha experiência em Python,
        Large Language Models (LLMs) e Data Engineering.
        <a href="mailto:marcos.length@gmail.com"
          class="text-white underline decoration-brand underline-offset-8 font-medium ml-1">
          Vamos conversar!
        </a>
      </p>
    </section>
  </main>
</template>