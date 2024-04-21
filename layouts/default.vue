<template>
    <div :class="locale === 'th' ? 'anuphan' : 'readex'" class="dark:bg-neutral-800 dark:text-white">
        <main :class="locale === 'th' ? 'anuphan' : 'readex'">
            <NuxtPage />
        </main>
    </div>
</template>
<script setup>
import { initFlowbite } from "flowbite";
const { locale } = useI18n();

onMounted(() => {
    initFlowbite();
});

onBeforeMount(() => {
    const messages = [
        `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
        `NotFoundError: The object can not be found here.`, // safari
    ];
    if (typeof window !== "undefined") {
        window.addEventListener("error", (ev) => {
            if (messages.includes(ev.message)) {
                ev.preventDefault();
                window.location.reload();
            }
        });
    }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@400&display=swap");

.readex {
    font-family: "Readex Pro", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "HEXP" 0;
}

.anuphan {
    font-family: "Anuphan", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>