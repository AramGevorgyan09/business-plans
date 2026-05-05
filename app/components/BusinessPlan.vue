<script lang="ts" setup>
import type { BusinessPlan } from '~/types/business-plan'

defineProps<{
  businessPlan: BusinessPlan
  show: (newBusinessPlan?: BusinessPlan) => void
}>()
</script>

<template>
  <div class="business-plan">
    <img :src="businessPlan.img" alt="Image">

    <div class="type">{{ businessPlan.type }}</div>

    <div class="main">
      <div class="name-and-price">
        <p class="small-title">{{ businessPlan.name }}</p>
        <p class="small-title price">{{ businessPlan.price }} &#x058F;</p>
      </div>

      <p class="description">{{ businessPlan.description }}</p>

      <div class="info">
        <p class="item-with-icon"><Icon name="material-symbols:location-on-rounded" size="20px" style="color: #777;" /> {{ businessPlan.region }}</p>
        <p class="item-with-icon"><Icon name="material-symbols:school-rounded" size="20px" style="color: #777;" /> {{ businessPlan.school }}</p>
        <p class="item-with-icon"><Icon name="material-symbols:person-rounded" size="20px" style="color: #777;" /> {{ businessPlan.teacher }}</p>
        <p class="item-with-icon"><Icon name="material-symbols:call" size="20px" style="color: #777;" /> {{ businessPlan.phone }}</p>
      </div>
    </div>

    <div class="bottom">
      <div class="students">
        <div v-for="(student, index) in businessPlan.students" :key="index" class="student">{{ student[0] }}</div>
      </div>

      <button @click="show(businessPlan)">Ավելին</button>
    </div>
  </div>
</template>

<style scoped>
.business-plan {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 15px;
  display: grid;
  overflow: hidden;
}

img {
  width: 100%;
  transition: 0.5s;
}

.business-plan:hover img {
  transform: scale(1.05);
}

.type {
  position: absolute;
  top: calc(var(--main-distance) / 2);
  left: calc(var(--main-distance) / 2);
  background-color: #5419ddcc;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
}

.main {
  position: relative;
  background-color: #fff;
  padding: calc(var(--main-distance) / 2);
  z-index: 1;
  display: grid;
  gap: calc(var(--main-distance) / 2);
}

.main .name-and-price {
  display: grid;
  grid-template-columns: 4fr 1fr;
}

.main .name-and-price .price {
  color: var(--main-color);
  justify-self: right;
  white-space: nowrap;
}

.description {
  min-width: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.main .info {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--main-distance) / 2);
}

.main .info p {
  padding: 5px 10px;
  border-radius: 100px;
  border: 1px solid #777;
  color: #777;
}

.bottom {
  padding: calc(var(--main-distance) / 2);
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.bottom .students {
  display: flex;
  align-self: end;
}

.bottom .students .student {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--main-color);
  color: #fff;
  display: grid;
  align-items: center;
  justify-items: center;
  border: 2px solid #fff;
  margin-right: -8px;
}

.bottom .students .student:last-child {
  margin: 0;
}

button {
  justify-self: right;
}
</style>
