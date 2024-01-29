<template>
    <div class="w-full">
        <HomeHero></HomeHero>
        <HomeSecond></HomeSecond>
        <HomeThird></HomeThird>
        <HomeFourth></HomeFourth>
        <HomeFifth></HomeFifth>
 <!--        <HomeSixth></HomeSixth> -->
        <HomeSeventh></HomeSeventh>
        <HomeEight></HomeEight>
        <HomeNinth></HomeNinth>
        <HomeTenth></HomeTenth>
        <!-- <div class="h-[300vh]"></div> -->
    </div>
</template>

<script setup>
useHead({
    title: 'Xpandify | Creative Web Design & Development',
    meta: [
        { name: 'description', content: 'Xpandify Digital Media Marketing Agency: Elevate Your Brand with Data-Driven Strategies. Unlock the Power of Online Marketing Excellence with Us!' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
