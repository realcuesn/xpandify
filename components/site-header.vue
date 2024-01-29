<template>
    <nav :class="{ '!border-b border-stone-100 !border-solid': scrollBorder && !menuState, '!bg-stone-950 !border-stone-100': menuState }"
        class="w-full flex items-center z-50 justify-between transition-all duration-1000 ease-linear border-b-0 fixed bg-stone-950 py-4 sm:py-7 lg:py-4 px-5 xl:px-6 top-0">
        <div>
            <NuxtLink to="/">
                <img src="@/assets/logo.png" class="h-14 transition-all duration-700" alt="">
            </NuxtLink>
        </div>
        

        <div class="flex items-center gap-x-10 transition-all duration-700">
            <div class="gap-x-10 sm:flex items-center hidden overflow-y-clip">
                <NuxtLink to="/services" :class="{ '-translate-y-[100%]': menuState }"
                    class="text-xl block font-medium transition-all duration-1000">
                    Services
                </NuxtLink>
                <NuxtLink to="/projects" :class="{ '-translate-y-[100%]': menuState }"
                    class="text-xl block font-medium transition-all duration-1000">
                    Projects</NuxtLink>
                <NuxtLink to="/contact" :class="{ '-translate-y-[100%]': menuState }"
                    class="text-xl block font-medium bg-stone-100 text-stone-950 rounded-full py-1.5 px-5 transition-all duration-1000">
                    Contact
                </NuxtLink>
            </div>
            <img src="@/assets/icons/plus.svg" :class="{ 'rotate-45': menuState }" @click="handleMenuToggle"
                class=" h-10 w-10 bg-black invert rounded-full transition-all duration-1000 p-1 cursor-pointer lg:hover:opacity-70 lg:active:opacity-90"
                alt="">
        </div>
    </nav>
</template>

<script setup lang="ts">
const props = defineProps(['scrollBorder'])
const menuState = useState('menu')
const menuAnimateState = useState('menu-animate')
const handleMenuToggle = () => {

    if (!menuState.value) {
        menuState.value = true
    } else {
        menuAnimateState.value = true
    }
}
</script>