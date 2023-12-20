<script setup lang="ts">
import fixedLeftColumn from "@/views/layout/fixed-left-column.vue";
import Filter from "@/components/filter";

const router = useRouter();
</script>

<template>
  <fixedLeftColumn>
    <template #fixed>
      <Filter @change="router.push({ query: $event })" />
    </template>
    <NuxtPage />
  </fixedLeftColumn>
</template>
