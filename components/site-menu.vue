<template>
    <div class="w-full fixed top-0 h-screen">
        <div ref="container"
            class="h-full w-full flex flex-col bg-stone-950 text-white px-5 xl:px-6 justify-between z-40 pt-28 sm:pt-40 lg:pt-40 pb-20">
            <div
                class="flex flex-col text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl gap-y-6 lg:gap-y-6 xl:gap-y-7 2xl:gap-y-10">
                <div class="overflow-y-clip">
                    <div ref="linkOne">
                        <NuxtLink @click="menuAnimateState = true" to="/" class="font-nuckle block font-semibold">Home
                        </NuxtLink>
                    </div>
                </div>
                <div class="overflow-y-clip">
                    <div ref="linkTwo">
                        <NuxtLink @click="menuAnimateState = true" to="/projects" class="font-nuckle font-semibold">Projects
                        </NuxtLink>
                    </div>
                </div>
                <div class="overflow-y-clip">
                    <div ref="linkThree">
                        <NuxtLink @click="menuAnimateState = true" to="/services" class="font-nuckle font-semibold">Services
                        </NuxtLink>
                    </div>
                </div>
                <div class="overflow-y-clip">
                    <div ref="linkFive">
                        <NuxtLink @click="menuAnimateState = true" to="/contact" class="font-nuckle font-semibold">Contact
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="w-full lg:flex space-y-10 lg:space-y-0 justify-between font-nuckle items-center">
                <div class="overflow-y-clip">
                    <div ref="linkSix"
                        class="lg:text-base border-white text-white border block w-fit p-2 px-10 rounded-full">Instagram
                    </div>
                </div>

                <div class="lg:flex gap-x-10 items-center">
                    <div class="overflow-y-clip">
                        <h2 ref="linkSeven" class="text-4xl font-semibold hidden lg:block">
                            Let's Xpandify
                        </h2>
                    </div>

                    <div class="overflow-y-clip">
                        <div ref="linkEight" class="h-20 w-0.5 bg-white hidden lg:block"></div>
                    </div>

                    <div class="overflow-y-clip">
                        <div ref="linkNine">
                            <NuxtLink @click="menuAnimateState = true" to="/contact"
                                class="bg-primary text-neutral-900 p-3.5 px-10 block w-fit font-medium rounded-full text-base">
                                Start your project</NuxtLink>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from "gsap";
const container = ref(null);
const menuState = useState("menu");
const menuAnimateState = useState("menu-animate");
const linkOne = ref("");
const linkTwo = ref(null);
const linkThree = ref(null);
const linkFour = ref(null);
const linkFive = ref(null);
const linkSix = ref(null);
const linkSeven = ref(null);
const linkEight = ref(null);
const linkNine = ref(null);
const animationDuration = 0.2; // Adjust as needed
const animationDelay = 0.05; // Adjust as needed
onMounted(() => {
    gsap.from(container.value, {
        y: "-100%",
        duration: 0.5,
    });
    gsap.from(linkOne.value, {
        duration: 0.5,
        y: "100%",
        delay: 0.5,
    });
    gsap.from(linkTwo.value, {
        duration: 0.5,
        y: "100%",
        delay: 0.6, // Adjust delay as needed
    });
    gsap.from(linkThree.value, {
        duration: 0.5,
        y: "100%",
        delay: 0.7, // Adjust delay as needed
    });
    gsap.from(linkFour.value, {
        duration: 0.5,
        y: "100%",
        delay: 0.8, // Adjust delay as needed
    });
    gsap.from(linkFive.value, {
        duration: 0.5,
        y: "100%",
        delay: 0.9, // Adjust delay as needed
    });

    gsap.from(linkSix.value, {
        duration: 0.5,
        y: "100%",
        delay: 1, // Adjust delay as needed
    });


    gsap.from(linkSeven.value, {
        duration: 0.5,
        y: "100%",
        delay: 1.1, // Adjust delay as needed
    });


    gsap.from(linkEight.value, {
        duration: 0.5,
        y: "100%",
        delay: 1.2, // Adjust delay as needed
    });


    gsap.from(linkNine.value, {
        duration: 0.5,
        y: "100%",
        delay: 1.3, // Adjust delay as needed
    });
});

watch(
    () => menuAnimateState.value,
    () => {
        if (menuAnimateState.value) {
            gsap.to([linkOne.value, linkTwo.value, linkThree.value, linkFour.value, linkFive.value, linkSix.value, linkSeven.value, linkEight.value, linkNine.value].reverse(), {
                duration: animationDuration,
                y: "-100%",
                stagger: -animationDelay, // Use negative stagger to reverse the order
            });

            gsap.to(container.value, {
                y: "100%",
                duration: 0.5,
                delay: 0.6,
                onComplete: () => {
                    menuAnimateState.value = false;
                    menuState.value = false;
                },
            });
        }
    }
);
</script>
