<script setup>
import Navbar from './components/Navbar.vue'
import { Heart, Monitor, Cpu, GitBranch, User } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand selection:text-dark-bg">
    <Navbar />
    
    <main class="flex-1 w-full block">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>


    <footer class="max-w-4xl mx-auto px-6 py-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
      <p>© 2026 - Feito com <Heart :size="14" class="inline text-red-500 fill-red-500" /> por Marcos E. da Silva</p>
      
      <div class="flex items-center gap-6">
        <router-link to="/uses" class="hover:text-white transition">Setup</router-link>
        <router-link to="/resume" class="hover:text-white transition">Currículo</router-link>
        <!-- <User :size="18" class="hover:text-white cursor-pointer" />
        <GitBranch :size="18" class="hover:text-white cursor-pointer" /> -->
      </div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

main {
  display: block;
  width: 100%;
}
</style>