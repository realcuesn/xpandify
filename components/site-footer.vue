<template>
    <div class="w-full px-5 xl:px-28 py-28 lg:grid grid-cols-3  bg-stone-950 lg:pt-16 lg:pb-8 text-white">
        <div class="grid grid-cols-2 w-full lg:w-fit text-sm sm:text-lg lg:text-sm">
            <div class="flex flex-col gap-y-3">
                <NuxtLink class="block" to="/">Home</NuxtLink>
                <NuxtLink class="block" to="/">About</NuxtLink>
                <NuxtLink class="block" to="/">Services</NuxtLink>
                <NuxtLink class="block" to="/">Projects</NuxtLink>
                <NuxtLink class="block" to="/">Contact</NuxtLink>
            </div>
            <div class="flex flex-col gap-y-3">
                <NuxtLink class="block" to="/">Web Design</NuxtLink>
                <NuxtLink class="block" to="/">Web Development</NuxtLink>
                <NuxtLink class="block" to="/">Seo</NuxtLink>
                <NuxtLink class="block" to="/">Branding</NuxtLink>
                <NuxtLink class="block" to="/">Digital Marketing</NuxtLink>
            </div>
        </div>

        <div class="flex flex-col mt-14 lg:mt-0 gap-y-3 text-base sm:text-xl lg:text-base">
            <h2 class="font-medium">Contact:</h2>
            <a href="mailto:contact@xpandify.online" class="font-light text-sm sm:text-lg lg:text-sm">contact@xpandify.online</a>
            <div class="mt-2">
                <img src="@/assets/icons/instagram.svg" class="h-10" alt="">
            </div>
        </div>
        <div class="w-full flex mt-14 lg:mt-0 justify-center lg:justify-end">
            <img src="@/assets/logo.png" class="h-7 sm:h-10 lg:h-14" alt="">
        </div>
    </div>
</template>

<script setup>

</script>
