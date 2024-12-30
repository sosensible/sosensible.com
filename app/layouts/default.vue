<script lang="ts" setup>

</script>

<template>
  <UApp>
    <UCard>
      <template #header>
        <NuxtLink href="/" class="mr-2">Home</NuxtLink>
        <NuxtLink href="/login" class="mr-2">Login</NuxtLink>
        <NuxtLink href="/dashboard">Dashboard</NuxtLink>
      </template>

      <slot />

      <template #footer>
        Footer
      </template>
    </UCard>
  </UApp>
</template>

<style></style>