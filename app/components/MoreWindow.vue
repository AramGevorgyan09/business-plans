<script setup lang="ts">
import type { BusinessPlan } from '~/types/business-plan'

defineProps<{
  hide: () => void
  businessPlan: BusinessPlan | undefined
}>()
</script>

<template>
  <div class="more-window">
    <div class="business-plan">
      <img :src="businessPlan?.img" alt="Image">

      <div class="main">
        <p class="medium-title">{{ businessPlan?.name }}</p>

        <p class="data description">
          <span class="bold item-with-icon"><Icon name="material-symbols:description-outline-rounded" size="24px" style="color: var(--main-color);" /> Նկարագրություն</span><br>
          {{ businessPlan?.description }}
        </p>
        <p class="data">
          <span class="bold item-with-icon"><Icon name="material-symbols:location-on-outline-rounded" size="24px" style="color: var(--main-color);" /> Մարզ / Քաղաք</span><br>
          {{ businessPlan?.region }}
        </p>
        <p class="data">
          <span class="bold item-with-icon"><Icon name="material-symbols:school-outline-rounded" size="24px" style="color: var(--main-color);" /> Դպրոց</span><br>
          {{ businessPlan?.school }}
        </p>
      </div>

      <div class="students">
        <div class="bold item-with-icon"><Icon name="ph:student" size="24px" style="color: var(--main-color);" /> Մասնակից Աշակերտներ</div>
        <div v-for="(student, index) in businessPlan?.students" :key="index">- {{ student }}</div>
      </div>
    </div>

    <div class="pointer">
      <Icon name="material-symbols:close" size="32px" style="color: #000;" @click="hide" />
    </div>
  </div>
</template>

<style scoped>
.more-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 80%;
  padding: var(--main-distance);
  border-radius: 30px;
  max-height: 95%;
  overflow-y: auto;
  z-index: 10000;
}

.business-plan {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: var(--main-distance);
}

.business-plan img {
  border-radius: 15px;
}

.business-plan .main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--main-distance);
  height: min-content;
}

.business-plan .main .medium-title,
.business-plan .main .description {
  grid-column: 1 / 3;
}

.business-plan .main .data {
  padding: calc(var(--main-distance) / 2);
  border: 1px solid #ccc;
  border-radius: 15px;
}

.business-plan .main .data span,
.business-plan .students .item-with-icon {
  font-size: 18px;
}

.business-plan .students {
  padding: calc(var(--main-distance) / 2);
  border: 1px solid #ccc;
  border-radius: 15px;
  display: grid;
  gap: calc(var(--main-distance) / 2);
}

.pointer {
  position: absolute;
  top: var(--main-distance);
  right: var(--main-distance);
  width: 40px;
  height: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px transparent;
}

.pointer:hover {
  box-shadow: 0 0 4px 1px #000;
}

@media screen and (max-width: 1600px) {
  .business-plan {
    grid-template-columns: unset;
  }
}

@media screen and (max-width: 1024px) {
  .business-plan img {
    width: 80%;
  }

  .business-plan .main {
    grid-template-columns: unset;
  }

  .business-plan .main .medium-title,
  .business-plan .main .description {
    grid-column: unset;
  }

  .business-plan .main .medium-title {
    font-size: 24px;
  }

  .business-plan .main .data span,
  .business-plan .students .item-with-icon {
    font-size: 16px;
    margin-bottom: -5px;
  }
}

@media screen and (max-width: 768px) {
  .business-plan img {
    width: 100%;
    margin-top: calc(40px + var(--main-distance));
  }
}

@media screen and (max-width: 420px) {
  .more-window {
    width: 95%;
  }
}
</style>
