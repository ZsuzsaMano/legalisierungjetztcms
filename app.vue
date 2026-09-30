<template>
  <div id="site-wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      innerHTML: `
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", (user) => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
      `,
      tagPosition: "bodyClose",
    },
  ],
});
</script>
