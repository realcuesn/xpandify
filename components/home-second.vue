<template>
    <div ref="container"
        class="w-full h-[32vh] sm:h-[60vh]  lg:[h-105vh]  2xl:h-[120vh] hidden lg:flex items-start sm:items-center justify-center bg-black overflow-clip">
        <div class="flex gap-x-4 justify-center sm:justify-start h-[80vh] lg:h-[180vh]">
            <div ref="colOne" class="w-[50vw] min-w-[50vw] flex flex-col gap-y-4">
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-antoni-shkraba-7144176.jpg" alt="Image 9" />
                </div>
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-asad-photo-maldives-1654834.jpg" alt="Image 9" />
                </div>
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-cottonbro-studio-3993320.jpg" alt="Image 9" />
                </div>

            </div>

            <div ref="colTwo" class="w-[50vw] min-w-[50vw] flex flex-col  2xl:-translate-y-[14%] sm:translate-y-0 gap-y-4">
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-daniel-andraski-13065690.jpg" alt="Image 9" />
                </div>
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-engin-akyurt-3331486.jpg" alt="Image 9" />
                </div>
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-tima-miroshnichenko-6873180.jpg" alt="Image 9" />
                </div>
            </div>

            <div ref="colThree" class="w-[50vw] min-w-[50vw] flex flex-col gap-y-4">
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-maria-geller-2127039.jpg" alt="Image 9" />
                </div>
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-pixabay-164634.jpg" alt="Image 9" />
                </div>
                <div class="w-full h-[32vw] bg-white">
                    <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                        src="/images/picture/pexels-maria-geller-2127039.jpg" alt="Image 9" />
                </div>
            </div>
        </div>
    </div>

    <div class="w-full grid grid-flow-col lg:hidden bg-black overflow-x-clip justify-center gap-3">
        <div class=" w-[60vw]  flex flex-col gap-y-3">
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="/images/picture/pexels-maria-geller-2127039.jpg" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
        </div>
        <div class=" w-[60vw]  flex flex-col gap-y-3">
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
        </div>
        <div class=" w-[60vw]  flex flex-col gap-y-3">
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
            <div class="w-full h-[37vw]">
                <NuxtImg format="webp" width="700" quality="80" class="h-full w-full object-cover"
                    src="https://via.placeholder.com/800x800" alt="Image 9" />
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';


const colOne = ref(null);
const colTwo = ref(null);
const colThree = ref(null);
const container = ref(null);

const animateColumn = (element, translateY) => {
    gsap.to(element, {
        y: translateY,
        scrollTrigger: {
            trigger: container.value,
            scrub: 1,
        },
    });
};

onMounted(() => {
    if (colOne.value && colTwo.value && colThree.value && container.value) {
        animateColumn(colOne.value, '-15vw');
        animateColumn(colTwo.value, '15vw');
        animateColumn(colThree.value, '-15vw');
    }
});
</script>
