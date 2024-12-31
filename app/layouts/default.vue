<script lang="ts" setup>

</script>

<template>
  <UApp>
    <UCard>
      <template #header>
        <ULink href="/" class="mr-2">Home</ULink>
        <ULink href="/login" class="mr-2">Login</ULink>
        <ULink href="/dashboard">Dashboard</ULink>
      </template>

      <slot />

      <template #footer>
        Footer
      </template>
    </UCard>
  </UApp>
</template>

<style></style>