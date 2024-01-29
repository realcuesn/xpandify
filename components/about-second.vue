<template>
    <div class="w-full px-5 sm:px-0 pb-20">
        <div class="aspect-square sm:aspect-auto sm:h-[120vh] w-full relative">
            <div class="w-full h-full">
                <video src="/videos/home-third-video.mp4" class="object-cover h-full w-full rounded-xl sm:rounded-none"
                    playsinline loop autoplay muted></video>
            </div>

            <div class="h-full w-full grid place-content-center absolute top-0">

                <div class="h-52">
                    <ClientOnly>
                        <Vue3Lottie
                            animationLink="https://assets.website-files.com/62838db5e5cc597190f9a798/638b765895fb4309af310304_zorro-design-2022-playreel.json" />
                    </ClientOnly>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>
