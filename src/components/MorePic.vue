<template>
  <section>
    <div class="w-full h-full grid grid-cols-6 gap-4">
      <div class="col-span-3 bg-blue-500">
        <Pic />
      </div>
      <div class="col-span-3 bg-yellow-300"></div>
      <div class="col-span-2 bg-pink-300"></div>
      <div class="col-span-2 bg-green-600"></div>
      <div class="col-span-2 bg-red-700"></div>
    </div>
  </section>
</template>

<script>
import Pic from "@/components/Pic";

export default {
  name: "MorePic.vue",
  components: {
    Pic
  }
};
</script>

<style scoped></style>
