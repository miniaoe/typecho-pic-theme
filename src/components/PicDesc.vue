<template>
  <div
    class="flex flex-col items-end justify-end text-right pb-6 px-6 text-white md:px-12"
  >
    <h1 class="text-4xl md:text-6xl font-bold">
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
