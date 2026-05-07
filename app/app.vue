<script lang="ts" setup>
import type { BusinessPlan } from './types/business-plan'
import { BusinessPlanTypes } from './types/enums/business-plan-types'

const applyWindow = ref<boolean>(false)
const currentBusinessPlan = ref<BusinessPlan>()

const toggleApplyWindow = (newBusinessPlan?: BusinessPlan) => {
  applyWindow.value = applyWindow.value ? false : true
  currentBusinessPlan.value = newBusinessPlan ? newBusinessPlan : undefined
}

watch(applyWindow, () => {
  document.body.classList.toggle('overflow-hidden')
})

const businessPlans = ref<BusinessPlan[]>([
  {
    type: BusinessPlanTypes.New,
    img: '/business-plans/flowers.jpg',
    name: 'Գեղեցիկ ծաղիկ',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad modi saepe quam expedita, blanditiis possimus?',
    region: 'Երևան',
    school: '94 Ավագ Դպրոց',
    teacher: 'Գ․ Մեսրոպյան',
    students: ['Ծաղկակաղամբ', 'Հնդկաձավար', 'Արքայախնձոր'],
    phone: '+374 (94) 488 349',
    email: 'gevorgyanaram0909@gmail.com'
  },
  {
    type: BusinessPlanTypes.Top,
    img: '/business-plans/flowers.jpg',
    name: 'Գեղեցիկ ծաղիկ',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad modi saepe quam expedita, blanditiis possimus?',
    region: 'Երևան',
    school: '94 Ավագ Դպրոց',
    teacher: 'Գ․ Մեսրոպյան',
    students: ['Ծաղկակաղամբ', 'Հնդկաձավար', 'Արքայախնձոր'],
    phone: '+374 (94) 488 349',
    email: 'gevorgyanaram0909@gmail.com'
  },
  {
    type: BusinessPlanTypes.Recommended,
    img: '/business-plans/flowers.jpg',
    name: 'Գեղեցիկ ծաղիկ',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad modi saepe quam expedita, blanditiis possimus?',
    region: 'Երևան',
    school: '94 Ավագ Դպրոց',
    teacher: 'Գ․ Մեսրոպյան',
    students: ['Ծաղկակաղամբ', 'Հնդկաձավար', 'Արքայախնձոր'],
    phone: '+374 (94) 488 349',
    email: 'gevorgyanaram0909@gmail.com'
  },
  {
    type: BusinessPlanTypes.New,
    img: '/business-plans/flowers.jpg',
    name: 'Գեղեցիկ ծաղիկ',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad modi saepe quam expedita, blanditiis possimus?',
    region: 'Երևան',
    school: '94 Ավագ Դպրոց',
    teacher: 'Գ․ Մեսրոպյան',
    students: ['Ծաղկակաղամբ', 'Հնդկաձավար', 'Արքայախնձոր'],
    phone: '+374 (94) 488 349',
    email: 'gevorgyanaram0909@gmail.com'
  },
  {
    type: BusinessPlanTypes.Top,
    img: '/business-plans/flowers.jpg',
    name: 'Գեղեցիկ ծաղիկ',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad modi saepe quam expedita, blanditiis possimus?',
    region: 'Երևան',
    school: '94 Ավագ Դպրոց',
    teacher: 'Գ․ Մեսրոպյան',
    students: ['Ծաղկակաղամբ', 'Հնդկաձավար', 'Արքայախնձոր'],
    phone: '+374 (94) 488 349',
    email: 'gevorgyanaram0909@gmail.com'
  },
  {
    type: BusinessPlanTypes.Recommended,
    img: '/business-plans/flowers.jpg',
    name: 'Գեղեցիկ ծաղիկ',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad modi saepe quam expedita, blanditiis possimus?',
    region: 'Երևան',
    school: '94 Ավագ Դպրոց',
    teacher: 'Գ․ Մեսրոպյան',
    students: ['Ծաղկակաղամբ', 'Հնդկաձավար', 'Արքայախնձոր'],
    phone: '+374 (94) 488 349',
    email: 'gevorgyanaram0909@gmail.com'
  }
])
</script>

<template>
  <HeaderBlock />

  <hr>

  <main>
    <div class="business-plans">
      <div v-for="(businessPlan, index) in businessPlans" :key="index">
        <BusinessPlan :business-plan="businessPlan" :show="toggleApplyWindow" />
      </div>
    </div>
  </main>

  <BlackBack v-if="applyWindow" :hide="toggleApplyWindow" />
  <MoreWindow v-if="applyWindow" :hide="toggleApplyWindow" :business-plan="currentBusinessPlan" />

  <hr>

  <FooterBlock />
</template>

<style>
main {
  margin-inline: 300px;
  z-index: 10;
}

.business-plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--main-distance);
}

@media screen and (max-width: 1840px) {
  main {
    margin-inline: 100px;
  }
}

@media screen and (max-width: 1440px) {
  main {
    margin: 0;
  }
}

@media screen and (max-width: 1024px) {
  .business-plans {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .business-plans {
    grid-template-columns: unset;
  }
}
</style>
