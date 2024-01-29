<template>
    <div class="w-full px-5">
        <div class="w-full lg:max-w-[90%] lg:2xl:max-w-[80%] lg:pl-[5%] mx-auto py-20 lg:py-40">
            <h2 class="text-3xl sm:text-5xl font-medium font-nuckle">Here's What Our<br>Clients Say About Us</h2>
            <div class="relative overflow-hidden">
                <transition name="slide-fade" mode="out-in">
                    <div :key="currentIndex" class="slide">
                        <!-- Slide Content -->
                        <p class="mt-20 text-xl">{{ testimonials[currentIndex].content }}</p>
                        <div class="mt-20">
                            <h3 class="text-2xl">{{ testimonials[currentIndex].author }}</h3>
                            <p class="text-sm">{{ testimonials[currentIndex].position }}</p>
                            <div class="w-full flex items-center justify-between">
                                <img src="@/assets/icons/arrow-right.svg" class="h-20 w-20 bg-black rounded-full mt-10"
                                    alt="">

                                <div class="flex gap-x-6 items-center pt-20 lg:pt-0">
                                    <img @click="prevSlide"
                                        src="https://assets.website-files.com/60e64bf78e3268d908f3de13/60e6852c84ee0c2e6c2de221_Arrow%20-%20Left%20Small.svg"
                                        class="h-6 cursor-pointer hover:opacity-80 active:opacity-90 transition-transform duration-700 hover:-translate-x-2"
                                        alt="">
                                    <img @click="nextSlide"
                                        src="https://assets.website-files.com/60e64bf78e3268d908f3de13/60e6852d100a2b8a1934db1e_Arrow%20-%20Right%20Long.svg"
                                        class="h-6 cursor-pointer hover:opacity-80 active:opacity-90 transition-transform duration-700 hover:translate-x-2"
                                        alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Data for client testimonials
const testimonials = [
    {
        content: "We have been working with this company for several years, and they have consistently delivered exceptional results. Their team's dedication and expertise have made a significant impact on our business growth. We highly recommend their services.",
        author: "John Doe",
        position: "CEO, ABC Inc."
    },
    {
        content: "I can't say enough good things about this company. Their innovative solutions have transformed our operations, saving us time and money. The team is responsive, knowledgeable, and a pleasure to work with. We look forward to a long-lasting partnership.",
        author: "Jane Smith",
        position: "COO, XYZ Corp."
    },
    {
        content: "Working with this company has been a game-changer for us. Their attention to detail and commitment to delivering top-notch solutions are unparalleled. We've seen a substantial return on our investment, and we're excited about the future.",
        author: "Michael Johnson",
        position: "CTO, Acme Industries"
    },
    {
        content: "The team at this company goes above and beyond to meet our needs. Their professionalism and expertise are unmatched. We have complete trust in their capabilities and consider them a valuable partner in our success.",
        author: "Sarah Williams",
        position: "VP of Marketing, Tech Solutions Ltd."
    },
    {
        content: "We've been impressed with the quality of work and level of service provided by this company. They have a deep understanding of our industry and have helped us stay ahead of the competition. We couldn't be happier with our choice.",
        author: "David Brown",
        position: "Managing Director, Global Innovations"
    },
];

// Current index of the active testimonial
const currentIndex = ref(0);

// Function to navigate to the next testimonial
const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

// Function to navigate to the previous testimonial
const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

// Automatic testimonial change interval (in milliseconds)
const autoSlideInterval = 8000; // Change testimonials every 8 seconds

let timer;

onMounted(() => {
    // Start the timer for automatic testimonial change
    timer = setInterval(nextSlide, autoSlideInterval);
});

onBeforeUnmount(() => {
    // Clear the timer when the component is unmounted
    clearInterval(timer);
});
</script>
  
<style scoped>
/* Add your custom styles for the carousel here, if needed */

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.slide {
    position: relative;
}
</style>
  