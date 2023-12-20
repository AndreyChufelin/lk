<script setup lang="ts">
import StatusCard from "@/ui/status-card/index.vue";
import Empty from "@/ui/empty/index.vue";

const route = useRoute();

const { data, pending } = useGetOrders();

const order = computed(() => data.value.find((o: { id: string }) => o.id === route.params.id));
</script>

<template>
  <template v-if="!pending">
    <StatusCard v-if="order" class="orders__card">№: {{ order.id }}</StatusCard>
    <Empty v-else>Заказов еще нет</Empty>
  </template>
</template>

<style scoped lang="scss">
.orders {
  &__card {
    padding: 15px;
  }
}
</style>
