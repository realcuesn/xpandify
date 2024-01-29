<template>
    <div class="w-full px-5 xl:px-20">
        <h2 class="py-10 font-nuckle sm:text-6xl lg:py-20 text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium">Xpandify Projects</h2>
        <Swiper :slidesPerView="'auto'" :spaceBetween="30">
            <SwiperSlide>
                <NuxtLink
                    class="h-72 cursor-pointer sm:h-96 sm:w-96 w-[85vw] lg:h-[48vh] lg:w-[40vh] block bg-neutral-200 relative rounded-xl">
                    <img class="h-full w-full object-cover rounded-xl" src="https://via.placeholder.com/800x800"
                        alt="Image 9" />

                    <div class="absolute bottom-5 left-5   flex items-center gap-x-4">
                        <div class="font-medium text-lg px-10 p-3  rounded-full bg-white">Dessange Paris</div>
                        <img src="@/assets/icons/arrow-up.svg" class="h-12" alt="">
                    </div>
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide>
                <NuxtLink
                    class="h-72 cursor-pointer sm:h-96 sm:w-96 w-[85vw] lg:h-[48vh] lg:w-[40vh] block bg-neutral-200 relative rounded-xl">
                    <img class="h-full w-full object-cover rounded-xl" src="https://via.placeholder.com/800x800"
                        alt="Image 9" />

                    <div class="absolute bottom-5 left-5   flex items-center gap-x-4">
                        <div class="font-medium text-lg px-10 p-3  rounded-full bg-white">Dessange Paris</div>
                        <img src="@/assets/icons/arrow-up.svg" class="h-12" alt="">
                    </div>
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide>
                <NuxtLink
                    class="h-72 cursor-pointer sm:h-96 sm:w-96 w-[85vw] lg:h-[48vh] lg:w-[40vh] block bg-neutral-200 relative rounded-xl">
                    <img class="h-full w-full object-cover rounded-xl" src="https://via.placeholder.com/800x800"
                        alt="Image 9" />

                    <div class="absolute bottom-5 left-5   flex items-center gap-x-4">
                        <div class="font-medium text-lg px-10 p-3  rounded-full bg-white">Dessange Paris</div>
                        <img src="@/assets/icons/arrow-up.svg" class="h-12" alt="">
                    </div>
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide>
                <NuxtLink
                    class="h-72 cursor-pointer sm:h-96 sm:w-96 w-[85vw] lg:h-[48vh] lg:w-[40vh] block bg-neutral-200 relative rounded-xl">
                    <img class="h-full w-full object-cover rounded-xl" src="https://via.placeholder.com/800x800"
                        alt="Image 9" />

                    <div class="absolute bottom-5 left-5   flex items-center gap-x-4">
                        <div class="font-medium text-lg px-10 p-3  rounded-full bg-white">Dessange Paris</div>
                        <img src="@/assets/icons/arrow-up.svg" class="h-12" alt="">
                    </div>
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide>
                <NuxtLink
                    class="h-72 cursor-pointer sm:h-96 sm:w-96 w-[85vw] lg:h-[48vh] lg:w-[40vh] block bg-neutral-200 relative rounded-xl">
                    <img class="h-full w-full object-cover rounded-xl" src="https://via.placeholder.com/800x800"
                        alt="Image 9" />

                    <div class="absolute bottom-5 left-5   flex items-center gap-x-4">
                        <div class="font-medium text-lg px-10 p-3  rounded-full bg-white">Dessange Paris</div>
                        <img src="@/assets/icons/arrow-up.svg" class="h-12" alt="">
                    </div>
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide>
                <NuxtLink
                    class="h-72 cursor-pointer sm:h-96 sm:w-96 w-[85vw] lg:h-[48vh] lg:w-[40vh] block bg-neutral-200 relative rounded-xl">
                    <img class="h-full w-full object-cover rounded-xl" src="https://via.placeholder.com/800x800"
                        alt="Image 9" />

                    <div class="absolute bottom-5 left-5   flex items-center gap-x-4">
                        <div class="font-medium text-lg px-10 p-3  rounded-full bg-white">Dessange Paris</div>
                        <img src="@/assets/icons/arrow-up.svg" class="h-12" alt="">
                    </div>
                </NuxtLink>
            </SwiperSlide>


        </Swiper>
    </div>
</template>
  

<style scoped>
.swiper-slide {
    width: fit-content;
    padding-bottom: 20px;
}

/* Style for the Swiper scrollbar */
.swiper-scrollbar {
    background-color: #333;
    /* Background color of the scrollbar */
    width: 8px;
    /* Width of the scrollbar */
}

/* Style for the Swiper scrollbar when it's being dragged */
.swiper-scrollbar-drag {
    background-color: #555;
    /* Background color of the scrollbar when dragged */
}
</style>