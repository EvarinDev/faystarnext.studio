<template>
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <NuxtImg
        src="https://bucket.rlss.in.th/assets/img/rlss.ico"
        width="219"
        height="222"
        alt="RLSSLOGO"
      />
      <h1 class="text-4xl mb-4">{{ $t("open_date") }}</h1>
      <p class="text-xl">{{ $t("message_coming_soon") }}</p>
      <p class="text-xl">{{ $t("contact.c_me") }}</p>
      <a href="https://discord.gg/DeVffTmKqx">
        <DiscordIcon />
      </a>
    </div>
  </template>
  <script setup lang="ts">
  useHead({
    title: "RLSS - Contact",
  });
  
  useSeoMeta({
    title: "RLSS - Contact",
    description: "RLSS - Contact",
    keywords: "RLSS",
    ogImage: "https://bucket.rlss.in.th/Back-FSL.png",
    ogUrl: "https://rlss.in.th",
    ogType: "website",
    ogTitle: "RLSS - Contact",
    ogDescription: "RLSS - Contact",
    twitterCard: "summary_large_image",
    twitterTitle: "RLSS - Contact",
    twitterDescription: "RLSS - Contact",
    twitterImage: "https://bucket.rlss.in.th/Back-FSL.png",
  });
  </script>