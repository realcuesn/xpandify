<template>
    <div class="w-full px-5 xl:px-6 py-28 lg:py-40">
        <div class="w-full">
            <h2 class="text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-nuckle font-semibold lg:pr-[30%]">Ready to enhance
                your brand's impact? Reach out and let's discuss how we can elevate your business to new heights.</h2>

            <div class="font-nuckle text-xl font-medium mt-16">Contact Email:</div>
            <a class="font-nuckle text-[14.4px] lg:text-lg  mt-12 font-light"
                href="mailto:contact@xpandify.agency">contact@xpandify.agency</a>
        </div>

        <form @submit.prevent="handleSubmit" class="w-full lg:flex grid-cols-2 gap-x-20 mt-5 lg:mt-0">
            <div class="w-full hidden lg:block">
                <img class="w-fit rounded-2xl h-full object-cover"
                    src="/images/picture/pexels-spencer-gurley-films-1436707.jpg" alt="Image 9" />
            </div>
            <div class="w-full p-4 lg:p-5 flex flex-col gap-y-10 bg-white text-black rounded-2xl font-nuckle">
                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">Name:</label>
                    <input type="text" v-model="name"
                        class="block w-full border-2 p-3 placeholder:text-neutral-700  text-[14.4px] lg:text-lg rounded-xl mt-3 border-black  transition-all duration-700"
                        placeholder="Type your answer here...">
                </div>

                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">Email:</label>
                    <input type="text" v-model="email"
                        class="block w-full border-2 p-3 placeholder:text-neutral-700  text-[14.4px] lg:text-lg rounded-xl mt-3 border-black  transition-all duration-700"
                        placeholder="Type your answer here...">
                </div>

                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">Phone:</label>
                    <input type="text" v-model="phone"
                        class="block w-full border-2 p-3 placeholder:text-neutral-700  text-[14.4px] lg:text-lg rounded-xl mt-3 border-black  transition-all duration-700"
                        placeholder="Type your answer here...">
                </div>

                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">Country:</label>
                    <input type="text" v-model="country"
                        class="block w-full border-2 p-3 placeholder:text-neutral-700  text-[14.4px] lg:text-lg rounded-xl mt-3 border-black  transition-all duration-700"
                        placeholder="Type your answer here...">
                </div>

                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">Service Needed:</label>
                    <div class="mt-3 grid grid-cols-2 gap-6">
                        <!-- Add the v-model directive to bind to the ref variables -->
                        <div @click="webDesignSelected = !webDesignSelected"
                            class="p-3 border-2 text-center rounded-full cursor-pointer col-span-2 lg:col-span-1 border-black  transition-all duration-700"
                            :class="{ 'bg-black text-white': webDesignSelected }">Web Design</div>

                        <div @click="webDevelopmentSelected = !webDevelopmentSelected"
                            class="p-3 border-2 text-center rounded-full cursor-pointer border-black col-span-2 lg:col-span-1  transition-all duration-700"
                            :class="{ 'bg-black text-white': webDevelopmentSelected }">Web Development</div>

                        <div @click="ecommerceSelected = !ecommerceSelected"
                            class="p-3 border-2 text-center rounded-full cursor-pointer border-black  transition-all duration-700"
                            :class="{ 'bg-black text-white': ecommerceSelected }">E-Commerce</div>

                        <div @click="seoSelected = !seoSelected"
                            class="p-3 border-2 text-center rounded-full cursor-pointer border-black  transition-all duration-700"
                            :class="{ 'bg-black text-white': seoSelected }">SEO</div>

                        <div @click="brandingSelected = !brandingSelected"
                            class="p-3 border-2 text-center rounded-full cursor-pointer border-black  transition-all duration-700"
                            :class="{ 'bg-black text-white': brandingSelected }">Branding</div>

                        <div @click="marketingSelected = !marketingSelected"
                            class="p-3 border-2 text-center rounded-full cursor-pointer border-black  transition-all duration-700"
                            :class="{ 'bg-black text-white': marketingSelected }">Marketing</div>
                    </div>
                </div>

                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">Budget:</label>
                    <div
                        class="block w-full border-2 p-3 text-[14.4px] lg:text-lg rounded-xl mt-3 border-black transition-all duration-700">
                        <select v-model="budget" class="h-full w-full outline-none">
                            <option value="under1000">$1,000 or less</option>
                            <option value="1000to5000">$1,000 - $5,000</option>
                            <option value="5000to10000">$5,000 - $10,000</option>
                            <option value="over10000">Over $10,000</option>
                        </select>
                    </div>
                </div>

                <!-- How did you find us Selector -->
                <div class="">
                    <label class="text-[14.4px] lg:text-lg block font-semibold">How did you find us:</label>
                    <div
                        class="block w-full border-2 p-3 text-[14.4px] lg:text-lg rounded-xl mt-3 border-black transition-all duration-700">
                        <select v-model="howDidYouFindUs" class="h-full w-full outline-none">
                            <option value="google">Google</option>
                            <option value="social_media">Social Media</option>
                            <option value="friend">Friend/Family</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 pb-0">
                    <textarea name="" id="" cols="30" rows="3" v-model="message"
                        class="w-full text-xl border-black border-b placeholder:text-neutral-700"
                        placeholder="Your Message"></textarea>
                </div>

                <button class="text-white bg-black p-3 px-10 rounded-full w-fit text-base" type="submit">Submit</button>
            </div>

            <div class="w-full block mt-10 lg:hidden">
                <img class="w-fit rounded-2xl h-full object-cover"
                    src="/images/picture/pexels-spencer-gurley-films-1436707.jpg" alt="Image 9" />
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const webDesignSelected = ref(false);
const webDevelopmentSelected = ref(false);
const ecommerceSelected = ref(false);
const seoSelected = ref(false);
const brandingSelected = ref(false);
const marketingSelected = ref(false);

const name = ref('');
const email = ref('');
const phone = ref('');
const country = ref('');
const budget = ref('under1000');
const howDidYouFindUs = ref('google');
const message = ref('');
const WEB3FORMS_ACCESS_KEY = "a83b430f-64d3-437c-b5ed-bc7a40fef15a"


const handleSubmit = async () => {
    const formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        country: country.value,
        webDesignSelected: webDesignSelected.value,
        webDevelopmentSelected: webDevelopmentSelected.value,
        ecommerceSelected: ecommerceSelected.value,
        seoSelected: seoSelected.value,
        brandingSelected: brandingSelected.value,
        marketingSelected: marketingSelected.value,
        budget: budget.value,
        howDidYouFindUs: howDidYouFindUs.value,
        message: message.value,
    };

    console.log(formData);

    const res = await fetch("https://api.web3forms.com/submit", {
        body: JSON.stringify({
            ...formData,
            access_key: WEB3FORMS_ACCESS_KEY,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });
    console.log(res);
}
</script>

<style scoped>
/* Adjust the appearance of the dropdown arrow */
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url('/icons/chevron-down.svg');
    /* Replace with your custom arrow icon */
    background-position: right center;
    background-repeat: no-repeat;
    padding-right: 30px;
    /* Adjust the padding to move the arrow to the left */
}

/* Style only the dropdown arrow */
select::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    /* Adjust the right position to move the arrow to the left */
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #000;
    /* Adjust the color and size of the arrow */
    transform: translateY(-50%);
    pointer-events: none;
}
</style>
