<template>
  <div
    class="flex flex-col items-end justify-end text-right pb-12 pr-12 text-white"
  >
    <h1 class="text-7xl font-bold">
      {{ desc.title }}
    </h1>
    <h3 class="mt-8">
      {{ desc.description }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ["desc"]
};
</script>

<style scoped></style>
