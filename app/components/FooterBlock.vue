<script lang="ts" setup>
const thisYear = new Date().getUTCFullYear()
</script>

<template>
  <footer>
    <section class="end center">&#169; {{ thisYear }}. Երևանի Գ․ Մարգարյանի անվան 94 ավագ դպրոց</section>
  </footer>
</template>

<style scoped>
.end {
  color: #666;
}
</style>
