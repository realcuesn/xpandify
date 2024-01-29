<template>
    <div class="w-full px-5 xl:px-20 py-28 lg:py-40">
        <div class="w-full lg:flex items-center justify-between">
            <h2 class="text-4xl lg:text-4xl xl:text-5xl font-medium">Featured Works</h2>

            <div class="w-fit gap-x-2 mt-6 lg:mt-0 lg:gap-x-5 flex items-center">
                <img src="@/assets/icons/arrow-right.svg" class="bg-black h-14 rounded-full scale-75 lg:scale-100 p-3"
                    alt="">
                <p class="text-xl lg:text-2xl font-medium">View Projects</p>
            </div>
        </div>

        <ul class="w-full grid sm:grid-cols-2 gap-10 mt-28">
            <li class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <img class="h-full w-full object-cover rounded-md" src="@/assets/images/picture/invac.png"
                        alt="Invac" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Invac</h2>
                </div>
            </li>

            <li class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <img class="h-full w-full object-cover rounded-md" src="@/assets/images/picture/creationfurnishings.png"
                        alt="Creations" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Creations</h2>
                </div>
            </li>

            <li class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <img class="h-full w-full object-cover rounded-md" src="@/assets/images/picture/dessangeindia.png"
                        alt="Dessange" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">Dessange</h2>
                </div>
            </li>

            <li class="w-full">
                <div class="w-full aspect-square lg:h-[47vh] rounded-md">
                    <img class="h-full w-full object-cover rounded-md" src="@/assets/images/picture/in-air.png"
                        alt="In air" />
                </div>
                <div class="w-full flex items-center justify-between mt-5">
                    <h2 class="font-medium uppercase text-lg">In air</h2>

                </div>
            </li>


        </ul>
    </div>
</template>

  