<script setup lang="ts">
import StatusCard from "@/ui/status-card/index.vue";
import Empty from "@/ui/empty/index.vue";

const { data, pending } = useGetOrders();
</script>

<template>
  <div v-if="!pending" class="orders__cards">
    <StatusCard v-for="(order, i) in data" :key="i" status="" class="orders__card">№: {{ order.id }}</StatusCard>
    <Empty v-if="!data">Заказов еще нет</Empty>
  </div>
</template>

<style scoped lang="scss">
.orders {
  &__cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__card {
    padding: 15px;
  }
}
</style>
