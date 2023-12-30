<script setup>
  import { computed } from 'vue';
  import CircleProgress from 'vue3-circle-progress'
  import "vue3-circle-progress/dist/circle-progress.css"
  import { formatMoney } from '../helpers'

  defineEmits(['reset-app'])

  const props = defineProps({
    available: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    spent: {
      type: Number,
      required: true,
    },
  })

  const percent = computed(() => {
    return parseInt(props.spent / props.budget * 100) 
  })
</script>

<template>
  <div class="two-columns">
    <div class="graphic-container">
      <p class="percent">{{ percent }}%</p>
      <CircleProgress 
        :percent="percent"
        :size="250"
        :border-width="25"
        :border-bg-width="25"
        fill-color="#3b82f6"
        empty-color="#e1e1e1"
      />
    </div>
    <div class="budget-container">
      <button type="button" class="reset-app" @click="$emit('reset-app')">
        Restablecer aplicación
      </button>

      <p>
        <span>Presupuesto: </span>
        {{ formatMoney(budget) }}
      </p>

      <p>
        <span>Disponible: </span>
        {{ formatMoney(available) }}
      </p>

      <p>
        <span>Gastado: </span>
        {{ formatMoney(spent) }}
      </p>
    </div>
  </div>  
</template>

<style scoped>
  .graphic-container {
    position: relative;

  }
  .percent {
    position: absolute;
    margin: auto;
    top: calc(50% - 1.5rem);
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;
    font-size: 3rem;
    font-weight: 900;
    color: var(--dark-gray);
  }
  .two-columns {
    display: flex;
    flex-direction: column;
  }
  .two-columns > :first-child {
    margin-bottom: 3rem;
  }
  @media (min-width: 768px) {
    .two-columns {
      flex-direction: row;
      gap: 4rem;
      align-items: center;
    }
    .two-columns > :first-child {
    margin-bottom: 0;
    }
  }
  .reset-app {
    background-color: #db2777;
    border: none;
    padding: 1rem;
    width: 100%;
    color: var(--white);
    text-transform: uppercase;
    font-weight: 900;
    border-radius: 1rem;
    transition-property: background-color;
    transition-duration: 300ms;
  }
  .reset-app:hover {
    cursor: pointer;
    background-color: #be2168;
  }
  .budget-container {
    width: 100%;
  }
  .budget-container p {
    font-size: 2.4rem;
    text-align: center;
    color: var(--dark-gray);
  }
  @media (min-width: 768px) {
    .budget-container p {
      text-align: left;
    }
  }
  .budget-container span {
    font-weight: 900;
    color: var(--blue);
  }
</style>
