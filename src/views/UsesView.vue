<script setup>
import ZigZag from '../components/ZigZag.vue'
import { Laptop, Monitor, MousePointer2, Terminal, Code2, Layout, Coffee, PenTool } from 'lucide-vue-next'

const sections = [
  {
    title: 'Hardware',
    icon: Laptop,
    items: [
      { name: 'Notebook', model: 'Acer Nitro 5', link: '#' },
      { name: 'Monitor', model: 'AOC 24"', link: '#' },
      { name: 'Mouse', model: 'Logitech G203', link: '#' },
    ]
  },
  {
    title: 'Ferramentas de Desenvolvimento',
    icon: Code2,
    items: [
      { name: 'IDE', model: 'VS Code / Antigravity', link: '#' },
      { name: 'Terminal', model: 'Oh My Zsh', link: '#' },
      { name: 'DB Viewer', model: 'Heidi', link: '#' },
      { name: 'API Client', model: 'Insomnia / Postman', link: '#' },
    ]
  },
  {
    title: 'Ambiente de Trabalho',
    icon: Layout,
    items: [
      { name: 'Backend', model: 'Python / Laravel 11', link: '#' },
      { name: 'Frontend', model: 'Vue 3 / Tailwind v4', link: '#' },
      { name: 'Ambiente', model: 'Docker', link: '#' },
    ]
  },
  {
    title: 'Produtividade e Criatividade',
    icon: PenTool,
    items: [
      { name: 'Notas', model: 'Notion', link: '#' },
      { name: 'Comunicação', model: 'Discord / Slack', link: '#' },
      { name: 'Browser', model: 'Brave / Chrome', link: '#' },
    ]
  }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <section class="mb-12">
      <h1 class="text-4xl font-bold mb-4 italic">Setup</h1>
      <p class="text-gray-400 text-lg">
        O software, hardware e ferramentas que utilizo no meu dia a dia para construir
        aplicações robustas e escaláveis.
      </p>
      <ZigZag />
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="section in sections" :key="section.title"
        class="p-8 bg-gray-900/20 border border-gray-800 rounded-2xl hover:bg-gray-900/40 transition-all duration-300 group">

        <div class="flex items-center gap-3 mb-6">
          <div class="p-2 bg-brand/10 rounded-lg group-hover:bg-brand/20 transition">
            <component :is="section.icon" class="text-brand" :size="20" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ section.title }}</h2>
        </div>

        <ul class="space-y-4">
          <li v-for="item in section.items" :key="item.name" class="flex flex-col">
            <span class="text-xs font-bold uppercase tracking-widest text-gray-500">{{ item.name }}</span>
            <a :href="item.link"
              class="text-gray-300 hover:text-white transition decoration-brand/30 underline underline-offset-4 decoration-2 hover:decoration-brand">
              {{ item.model }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gray-900\/20 {
  backdrop-filter: blur(8px);
}
</style>