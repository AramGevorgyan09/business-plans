<script setup lang="ts">
import type { BusinessPlan } from '~/types/business-plan'

defineProps<{
  hide: (newBusinessPlan?: BusinessPlan) => void
}>()
</script>

<template>
  <div class="black-back" @click="hide()" />
</template>

<style scoped>
.black-back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  z-index: 1000;
}
</style>
