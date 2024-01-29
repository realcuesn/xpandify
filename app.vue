<template>
  <div class="w-full font-neue bg-stone-950 text-white">
    <SiteHeader :scroll-border="scrollBorder"></SiteHeader>
    <div class="w-full pt-20">
      <NuxtPage></NuxtPage>
    </div>
    <SiteFooter></SiteFooter>
    <SiteMenu v-if="menuState"></SiteMenu>
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const menuState = useState('menu', () => false)
const menuAnimateState = useState('menu-animate', () => false)
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const scrollBorder = ref(false);

onMounted(() => {
  const lenis = new Lenis()

  lenis.on('scroll', (e: any) => {
    /*   console.log(window.scrollY > 30) */
    if (window.scrollY > 30) scrollBorder.value = true
    else scrollBorder.value = false
    /*   console.log(e) */
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

/*width*/
::-webkit-scrollbar {
  width: auto;
  background: #E7E5E3;
}

/*thumb*/
::-webkit-scrollbar-thumb {
  background: #000;
}

html,
body {
  width: 100%;
}


html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>