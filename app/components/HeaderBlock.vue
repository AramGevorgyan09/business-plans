<script lang="ts" setup>

</script>

<template>
  <header>
    <section>
      <NuxtLink to="/" class="logo">
        <img src="/new-logo.png" alt="Logo">
      </NuxtLink>

      <h1>Business Plans | 94 High School</h1>
    </section>

    <p>Լավագույն բիզնես պլանները 94 ավագ դպրոցի աշակերտների կողմից</p>
  </header>
</template>

<style scoped>
section {
  display: flex;
  gap: calc(var(--main-distance) / 2);
  align-items: center;
}

img {
  width: 100px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }
}
</style>
