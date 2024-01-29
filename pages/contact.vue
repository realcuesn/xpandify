<template>
    <div class="w-full">
        <ContactHero></ContactHero>
        <ContactSecond></ContactSecond>
        <!-- <div class="h-[300vh]"></div> -->
    </div>
</template>

<script setup>
useHead({
    title: 'Xpandify | Contact',
    meta: [
        { name: 'description', content: 'Xpandify Digital Media Marketing Agency: Elevate Your Brand with Data-Driven Strategies. Unlock the Power of Online Marketing Excellence with Us!' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
