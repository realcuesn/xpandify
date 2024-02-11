<template>
    <div class="w-full px-5 xl:px-20 py-28 lg:py-40">
        <div class="w-full lg:flex items-center justify-between">
            <h2 class="text-4xl lg:text-4xl xl:text-5xl font-medium">Featured Works</h2>

            <NuxtLink to="/projects" class="w-fit gap-x-2 mt-6 lg:mt-0 lg:gap-x-5 flex items-center">
                <img src="@/assets/icons/arrow-right.svg"
                    class="bg-black h-14 rounded-full scale-75 lg:scale-100 p-3 invert" alt="">
                <p class="text-xl lg:text-2xl font-medium">View Projects</p>
            </NuxtLink>
        </div>

        <ul class="w-full grid sm:grid-cols-2 gap-10 mt-28">




            <NuxtLink to="https://www.in-vac.com/" class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <NuxtImg preload placeholder format="webp" width="1000" class="h-full w-full object-cover rounded-md"
                        src="/images/picture/invac.png" alt="invac" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Invac</h2>
                </div>
            </NuxtLink>

            <NuxtLink to="https://www.criminaldefensegeorgialaw.com/" class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <NuxtImg preload placeholder format="webp" width="1000" class="h-full w-full object-cover rounded-md"
                        src="/images/picture/criminaldefensegeorgialaw.png" alt="Invac" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">TWG Law Firm</h2>
                </div>
            </NuxtLink>

            <NuxtLink class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <NuxtImg preload placeholder format="webp" width="1000" class="h-full w-full object-cover rounded-md"
                        src="/images/picture/creationfurnishings.png" alt="Creations" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Creations</h2>
                </div>
            </NuxtLink>

            <NuxtLink to="https://dessangeindia.com/" class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <NuxtImg preload placeholder format="webp" width="1000" class="h-full w-full object-cover rounded-md"
                        src="/images/picture/dessangeindia.png" alt="Dessange" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Dessange</h2>
                </div>
            </NuxtLink>

            <NuxtLink to="https://www.mattiecarlylelegacy.com/" class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <NuxtImg preload placeholder format="webp" width="1000" class="h-full w-full object-cover rounded-md"
                        src="/images/picture/mattiecarlylelegacy.png" alt="Mattie Carlyle" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Mattie Carlyle</h2>
                </div>
            </NuxtLink>

            <NuxtLink to="https://www.in-air.co/" class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <NuxtImg preload placeholder format="webp" width="1000" class="h-full w-full object-cover rounded-md"
                        src="/images/picture/in-air.png" alt="In air" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">In air</h2>

                </div>
            </NuxtLink>


        </ul>
    </div>
</template>

  