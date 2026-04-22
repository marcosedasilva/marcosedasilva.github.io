<script setup>
import { onMounted, ref } from 'vue'
import { Twitter, Github, Moon, Mail, Sun } from 'lucide-vue-next'
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <nav class="max-w-4xl flex items-center justify-between py-8  mx-auto px-6">
    <!-- Logo -->
    <router-link to="/" class="text-2xl font-bold tracking-tighter gap-4 flex ">
      <span class="text-brand">//</span>
      <span class="text-white">MDS</span>
    </router-link>

    <!-- Links e Ícones -->
    <div class="flex items-center gap-6">
      <div class="hidden md:flex gap-6 text-sm font-medium tracking-widest uppercase">
        <router-link to="/resume" class="hover:text-brand transition">Currículo</router-link>
        <a href="/#social" class="hover:text-brand transition">CONTATO</a>
      </div>

      <div class="flex items-center gap-4 border-l border-gray-800 pl-6">
        <a href="mailto:marcos.length@gmail.com" class="hover:text-brand transition">
          <Mail :size="20"/>
        </a>
        <a href="https://github.com/marcosedasilva" target="_blank">
          <Github :size="20" class="hover:text-brand transition" />
        </a>
        <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400">
          <Sun v-if="isDark" :size="20" />
          <Moon v-else :size="20" />
        </button>
      </div>
    </div>
  </nav>
</template>