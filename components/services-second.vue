<template>
    <div class="px-5">
        <div class="w-full lg:max-w-[90%] lg:2xl:max-w-[80%] lg:pl-[5%] mx-auto pb-20 lg:pb-32">
            <ul class=" w-full space-y-20 pt-32">
                <li class="items-end w-full grid gap-x-7 lg:grid-cols-2">

                    <div class="w-full overflow-clip rounded-2xl">
                        <div ref="boxOne"
                            class="w-full will-change-transform bg-neutral-900 rounded-2xl flex items-center justify-center p-[28%] h-[40%] lg:h-[50vh]">
                            <ClientOnly>
                                <Vue3Lottie class="invert"
                                    animationLink="
                                    https://assets.website-files.com/62838db5e5cc597190f9a798/6362731981b979002cdc6890_ICO_3-circles-float1.json" />
                            </ClientOnly>
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col mt-10 lg:mt-0 gap-y-3 justify-end">
                        <div class="flex items-center gap-x-3">
                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                UI/UX
                            </div>

                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Landing Pages
                            </div>


                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Redesigns
                            </div>
                        </div>
                        <h2 class="mt-4 text-3xl lg:text-5xl">Web Design</h2>
                        <p class="text-xl font-normal">We specialize in developing interactive, scalable, brand-oriented,
                            and business-ready customized
                            web design.</p>

                         <div class="w-fit gap-x-2 mt-6 lg:mt-10 lg:gap-x-5 flex items-center opacity-0">
                            <img src="@/assets/icons/arrow-right.svg"
                                class="bg-black  h-14 rounded-full scale-75 lg:scale-100 p-3" alt="" />
                            <p class="text-base lg:text-xl font-medium">Learn More</p>
                        </div>
                    </div>

                </li>


                <li class="items-end w-full grid gap-x-7 lg:grid-cols-2">

                    <div class="w-full overflow-clip rounded-2xl">
                        <div ref="boxTwo"
                            class="w-full will-change-transform bg-neutral-900 rounded-2xl flex items-center justify-center p-[28%] h-[40%] lg:h-[50vh]">
                            <ClientOnly>
                                <Vue3Lottie class="invert"
                                    animationLink="https://assets.website-files.com/62838db5e5cc597190f9a798/635998625c63a94fa0bfc053_58687-3d-cubes.json" />
                            </ClientOnly>
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col mt-10 lg:mt-0 gap-y-3 justify-end">
                        <div class="flex items-center gap-x-3">
                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Functionality
                            </div>

                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Optimization
                            </div>


                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Back-End
                            </div>
                        </div>
                        <h2 class="mt-4 text-3xl lg:text-5xl">Web Development</h2>
                        <p class="text-xl font-normal">Be it static, customized, or dynamic, we follow industry best
                            practices to develop attractive and highly functional websites.
                        </p>

                        <div class="w-fit gap-x-2 mt-6 lg:mt-10 lg:gap-x-5 flex items-center opacity-0">
                            <img src="@/assets/icons/arrow-right.svg"
                                class="bg-black  h-14 rounded-full scale-75 lg:scale-100 p-3" alt="" />
                            <p class="text-base lg:text-xl font-medium">Learn More</p>
                        </div>
                    </div>

                </li>


                <li class="items-end w-full grid gap-x-7 lg:grid-cols-2">

                    <div class="w-full overflow-clip rounded-2xl">
                        <div ref="boxThree"
                            class="w-full will-change-transform bg-neutral-900 rounded-2xl flex items-center justify-center p-[28%] h-[40%] lg:h-[50vh]">
                            <ClientOnly>
                                <Vue3Lottie class="invert"
                                    animationLink="https://assets.website-files.com/62838db5e5cc597190f9a798/635996aeaa2f7b71ccb0e3a4_87827-sphere.json" />
                            </ClientOnly>
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col mt-10 lg:mt-0 gap-y-3 justify-end">
                        <div class="flex items-center gap-x-3">
                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                CRO
                            </div>

                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Shopify
                            </div>


                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                CMS
                            </div>
                        </div>
                        <h2 class="mt-4 text-3xl lg:text-5xl">E-commerce</h2>
                        <p class="text-xl font-normal">Robust, aesthetically pleasing, and conversion-focused e-commerce
                            website development.
                        </p>

                         <div class="w-fit gap-x-2 mt-6 lg:mt-10 lg:gap-x-5 flex items-center opacity-0">
                            <img src="@/assets/icons/arrow-right.svg"
                                class="bg-black  h-14 rounded-full scale-75 lg:scale-100 p-3" alt="" />
                            <p class="text-base lg:text-xl font-medium">Learn More</p>
                        </div>
                    </div>

                </li>

                <li class="items-end w-full grid gap-x-7 lg:grid-cols-2">

                    <div class="w-full overflow-clip rounded-2xl">
                        <div ref="boxFour"
                            class="w-full will-change-transform bg-neutral-900 rounded-2xl flex items-center justify-center p-[28%] h-[40%] lg:h-[50vh]">
                            <ClientOnly>
                                <Vue3Lottie class="invert"
                                    animationLink="https://assets.website-files.com/62838db5e5cc597190f9a798/6361e1aa18e68f58e38e19c4_lf30_editor_xg1usmyz.json" />
                            </ClientOnly>
                        </div>
                    </div>

                    <div class=" w-full h-full flex flex-col mt-10 lg:mt-0 gap-y-3 justify-end">
                        <div class="flex items-center gap-x-3">
                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Identity
                            </div>

                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Messaging
                            </div>


                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Value Proposition
                            </div>
                        </div>
                        <h2 class="mt-4 text-3xl lg:text-5xl">Branding</h2>
                        <p class="text-xl font-normal">From brand strategy, naming, and logo design, to
                            guidelines,
                            campaigns, and content, we build brands that connect with your target audience.
                        </p>

                         <div class="w-fit gap-x-2 mt-6 lg:mt-10 lg:gap-x-5 flex items-center opacity-0">
                            <img src="@/assets/icons/arrow-right.svg"
                                class="bg-black  h-14 rounded-full scale-75 lg:scale-100 p-3" alt="" />
                            <p class="text-base lg:text-xl font-medium">Learn More</p>
                        </div>
                    </div>

                </li>

                <li class="items-end w-full grid gap-x-7 lg:grid-cols-2">

                    <div class="w-full overflow-clip rounded-2xl">
                        <div ref="boxFive"
                            class="w-full will-change-transform bg-neutral-900 rounded-2xl flex items-center justify-center p-[28%] h-[40%] lg:h-[50vh]">
                            <ClientOnly>
                                <Vue3Lottie class="invert"
                                    animationLink="https://assets.website-files.com/62838db5e5cc597190f9a798/636272147ef11b97ecb6f836_lf30_editor_rp2cenlg.json" />
                            </ClientOnly>
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col mt-10 lg:mt-0 gap-y-3 justify-end">
                        <div class="flex items-center gap-x-3">
                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                On-Page
                            </div>

                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Technical
                            </div>


                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Visibility
                            </div>
                        </div>
                        <h2 class="mt-4 text-3xl lg:text-5xl">SEO</h2>
                        <p class="text-xl font-normal">Our carefully crafted SEO strategies are designed to increase
                            visibility within the algorithmic search results to deliver relevant, targeted traffic to your
                            website.
                        </p>

                         <div class="w-fit gap-x-2 mt-6 lg:mt-10 lg:gap-x-5 flex items-center opacity-0">
                            <img src="@/assets/icons/arrow-right.svg"
                                class="bg-black  h-14 rounded-full scale-75 lg:scale-100 p-3" alt="" />
                            <p class="text-base lg:text-xl font-medium">Learn More</p>
                        </div>
                    </div>

                </li>


                <li class="items-end w-full grid gap-x-7 lg:grid-cols-2">

                    <div class="w-full overflow-clip rounded-2xl">
                        <div ref="boxSix"
                            class="w-full will-change-transform bg-neutral-900 rounded-2xl flex items-center justify-center p-[28%] h-[40%] lg:h-[50vh]">
                            <ClientOnly>
                                <Vue3Lottie class="invert"
                                    animationLink="https://assets.website-files.com/62838db5e5cc597190f9a798/636272955ad3283090359e4c_102285-rotating-ring.json" />
                            </ClientOnly>
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col mt-10 lg:mt-0 gap-y-3 justify-end">
                        <div class="flex items-center gap-x-3">
                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                3D Animation
                            </div>

                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Socials
                            </div>


                            <div class="rounded-full py-2 text-xs px-5 border border-white ">
                                Paid Ads
                            </div>
                        </div>
                        <h2 class="mt-4 text-3xl lg:text-5xl">Digital Marketing</h2>
                        <p class="text-xl font-normal">We specialize in digital marketing campaigns that delivers content
                            that wow's across all paid advertising channels.
                        </p>

                         <div class="w-fit gap-x-2 mt-6 lg:mt-10 lg:gap-x-5 flex items-center opacity-0">
                            <img src="@/assets/icons/arrow-right.svg"
                                class="bg-black  h-14 rounded-full scale-75 lg:scale-100 p-3" alt="" />
                            <p class="text-base lg:text-xl font-medium">Learn More</p>
                        </div>
                    </div>

                </li>


            </ul>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';

const boxOne = ref(); // Create a ref for boxOne element
const boxTwo = ref(); // Create a ref for boxOne element
const boxThree = ref(); // Create a ref for boxOne element
const boxFour = ref(); // Create a ref for boxOne element
const boxFive = ref(); // Create a ref for boxOne element
const boxSix = ref(); // Create a ref for boxOne element

onMounted(() => {
    gsap.from(boxOne.value, {
        y: '-30%',
        duration: 2.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: boxOne.value,
            scrub: true,
        },
    });

    gsap.from(boxTwo.value, {
        y: '-30%',
        duration: 2.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: boxTwo.value,
            scrub: true,
        },
    });

    gsap.from(boxThree.value, {
        y: '-30%',
        duration: 2.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: boxThree.value,
            scrub: true,
        },
    });

    gsap.from(boxFour.value, {
        y: '-30%',
        duration: 2.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: boxFour.value,
            scrub: true,
        },
    });

    gsap.from(boxFive.value, {
        y: '-30%',
        duration: 2.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: boxFive.value,
            scrub: true,
        },
    });

    gsap.from(boxSix.value, {
        y: '-30%',
        duration: 2.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: boxSix.value,
            scrub: true,
        },
    });
});
</script>