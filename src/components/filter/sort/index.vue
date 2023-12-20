<script setup lang="ts">
import Button from "@/ui/button/index.vue";

const sort = ref("all");
const sortButtons = [
  { text: "все", name: "all" },
  { icon: "fa-crown", name: "crown" },
  { icon: "fa-thumbs-down", name: "dislike" },
  { icon: "fa-thumbs-up", name: "like" },
  { icon: "fa-briefcase", name: "case" },
  { icon: "fa-cloud-question", name: "question" },
  { icon: "fa-truck", name: "truck" },
  { icon: "fa-money-bill", name: "money" }
];
</script>

<template>
  <div class="sort">
    <Button
      v-for="(btn, i) in sortButtons"
      :key="i"
      :class="{ active: sort === btn.name }"
      size="small"
      color="purple-reverse"
      @click="sort = btn.name"
    >
      <i v-if="btn.icon" class="fa-regular" :class="[btn.icon]" />
      <template v-else>{{ btn.text }}</template>
    </Button>
  </div>
</template>
<style scoped lang="scss">
.sort {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.active {
  background-color: var(--bg_btn_selected);
  color: #fff;
}
</style>
