<script setup>
import { computed, ref } from 'vue'

const partsLength = ref(3)

const parts = computed(() => {
  return Array.from({ length: partsLength.value }, (_, i) => i + 1)
})
function handlePartclick(e) {
  console.log(e.detail)
}
</script>

<template>
  <div class="playground-vue">
    <split-circle :parts="parts" @partclick="handlePartclick">
      <template v-for="(part, index) in parts" :key="index">
        <span :slot="index">{{ part }}</span>
      </template>
    </split-circle>

    <input v-model="partsLength" class="playground-vue-input" type="number" min="3">
  </div>
</template>

<style scoped>
.playground-vue {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.playground-vue-input {
  margin-top: 20px;
  text-align: center;
}
</style>
