<script setup lang="ts">
import DateRange from "@/ui/date-range/index.vue";
import Button from "@/ui/button/index.vue";
import Select from "@/ui/select/index.vue";
import Search from "@/components/shared/search/index.vue";
import FilterSort from "@/components/filter/sort/index.vue";

const emit = defineEmits(["change"]);

const route = useRoute();
const router = useRouter();

const filters = ref({
  date_start: route.query.date_start,
  date_finish: route.query.date_finish,
  year: (route.query.year as string) ?? "",
  search_type: (route.query.search_type as string) ?? "order_number",
  search_value: (route.query.search_value as string) ?? ""
});

const queryFilters = computed(() => {
  return Object.keys(filters.value).reduce((result, key) => {
    result[key] = filters.value[key] === "" ? undefined : filters.value[key];
    return result;
  }, {});
});

const date = computed({
  get() {
    return {
      date_start: route.query.date_start,
      date_finish: route.query.date_finish
    };
  },
  set(newDate) {
    filters.value.date_start = newDate.date_start;
    filters.value.date_finish = newDate.date_finish;
  }
});

watch(
  filters,
  () => {
    emit("change", queryFilters.value);
  },
  { deep: true }
);
</script>

<template>
  <div class="filter__blocks">
    <Button class="filter__btn-back" size="large" color="purple-reverse" @click="router.go(-1)">Назад</Button>
    <div class="filter__block block">
      <DateRange :date="date" @change="date = $event" />
      <Search
        v-model:search-query="filters.search_value"
        v-model:type="filters.search_type"
        :types="{
          order_number: { placeholder: 'Введите номер заказа', title: 'Номер заказа' },
          psid: { placeholder: 'Введите номер фотосессии', title: 'Номер фотосессии' },
          client_id: { placeholder: 'Введите клиент ID', title: 'Клиент ID' },
          phone: { placeholder: 'Введите телефон', title: 'Телефон' },
          email: { placeholder: 'Введите email', title: 'Email' },
          email2: { placeholder: 'Введите плательщик, ребенок', title: 'Плательщик, ребенок' }
        }"
      />
      <FilterSort />
    </div>
    <div class="filter__block block">
      <Select
        v-model="filters.year"
        :items="[
          { title: '2023', value: '2023' },
          { title: '2022', value: '2022' },
          { title: '2021', value: '2021' }
        ]"
        name="year"
      />
      <div class="filter__buttons">
        <Button class="button" size="large" color="purple">Показать</Button>
        <Button class="button" size="large" color="purple-reverse">Сбросить</Button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.filter {
  &__blocks {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 16px;
  }

  &__btn-back {
    @include start-at("lg") {
      display: none;
    };
  }

  &__buttons {
    display: flex;
    gap: 15px;

    & .button {
      flex: 1;
    }
  }
}
</style>
