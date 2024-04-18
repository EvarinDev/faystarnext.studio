<script setup>
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-neutral-950 fixed top-0 left-0 right-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white Trushdex-font">FAYStarNext</span>
            </a>
            <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <button type="button" data-dropdown-toggle="language-dropdown-menu"
                    class="inline-flex items-center transition font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:bg-neutral-950 dark:hover:text-white md:dark:hover:text-blue-500">
                    {{ locale === "th" ? "ภาษาไทย" : "English (US)" }}
                </button>
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                    id="language-dropdown-menu">
                    <ul class="py-2 font-medium" role="none">
                        <li>
                            <NuxtLink :to="switchLocalePath('en')"
                                class="block px-4 py-2 transition text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <div class="inline-flex items-center">English (US)</div>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="switchLocalePath('th')"
                                class="block px-4 py-2 transition text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <div class="inline-flex items-center">ภาษาไทย</div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-language" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-neutral-950 dark:focus:ring-gray-600"
                    aria-controls="navbar-language" aria-expanded="false">
                    <span class="sr-only">Open Menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-950 dark:border-gray-700">
                    <li>
                        <NuxtLink :to="localePath('/', locale)"
                            class="block py-2 px-3 transition md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:bg-neutral-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            {{ $t("memu.title_home") }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/about', locale)"
                            class="block py-2 px-3 transition md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:bg-neutral-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            {{ $t("memu.title_about") }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/project', locale)"
                            class="block py-2 px-3 transition md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:bg-neutral-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            {{ $t("memu.title_project") }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/contact', locale)"
                            class="block py-2 px-3 transition md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:bg-neutral-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            {{ $t("memu.title_contact") }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>