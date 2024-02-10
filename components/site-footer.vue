<template>
    <div class="w-full px-5 xl:px-28 py-28 lg:grid grid-cols-3  bg-stone-950 lg:pt-16 lg:pb-8 text-white">
        <div class="grid grid-cols-2 w-full lg:w-fit text-sm sm:text-lg lg:text-sm">
            <div class="flex flex-col gap-y-3">
                <NuxtLink class="block" to="/">Home</NuxtLink>
                <NuxtLink class="block" to="/about">About</NuxtLink>
                <NuxtLink class="block" to="/services">Services</NuxtLink>
                <NuxtLink class="block" to="/projects">Projects</NuxtLink>
                <NuxtLink class="block" to="/contact">Contact</NuxtLink>
            </div>
            <div class="flex flex-col gap-y-3">
                <NuxtLink class="block" to="/contact">Web Design</NuxtLink>
                <NuxtLink class="block" to="/contact">Web Development</NuxtLink>
                <NuxtLink class="block" to="/contact">Seo</NuxtLink>
                <NuxtLink class="block" to="/contact">Branding</NuxtLink>
                <NuxtLink class="block" to="/contact">Digital Marketing</NuxtLink>
            </div>
        </div>

        <div class="flex flex-col mt-14 lg:mt-0 gap-y-3 text-base sm:text-xl lg:text-base">
            <h2 class="font-medium">Contact:</h2>
            <a href="mailto:contact@xpandify.agency"
                class="font-light text-sm sm:text-lg lg:text-sm">contact@xpandify.agency</a>
            <div class="mt-2">
                <NuxtLink to="https://www.instagram.com/xpandify.agency/">
                    <img src="@/assets/icons/instagram.svg" class="h-10" alt="">
                </NuxtLink>
            </div>
        </div>
        <div class="w-full flex mt-14 lg:mt-0 justify-center lg:justify-end">
            <NuxtLink to="/">
                <img src="@/assets/logo.png" class="h-7 sm:h-10 lg:h-14" alt="">
            </NuxtLink>
  
        </div>
    </div>
</template>

<script setup>

</script>
