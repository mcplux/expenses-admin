<script setup>
  import { formatMoney, formatDate } from '../helpers'
  import SavingIcon from '../assets/img/icono_ahorro.svg'
  import FoodIcon from '../assets/img/icono_comida.svg'
  import ExpenseIcon from '../assets/img/icono_gastos.svg'
  import EnterteimentIcon from '../assets/img/icono_ocio.svg'
  import HealthIcon from '../assets/img/icono_salud.svg'
  import SubscriptionIcon from '../assets/img/icono_suscripciones.svg'

  const dictIcons = {
    saving: SavingIcon,
    food: FoodIcon,
    others: ExpenseIcon,
    enterteiment: EnterteimentIcon,
    health: HealthIcon,
    subscription: SubscriptionIcon,
  }
  const dictCategories = {
    saving: 'Ahorro',
    food: 'Comida',
    others: 'Otros',
    enterteiment: 'Entretenimiento',
    health: 'Salud',
    subscription: 'Suscripciones',
  }

  const props = defineProps({
    expense: {
      type: Object,
      required: true,
    },
  })

  defineEmits(['select-expense'])
</script>

<template>
  <div class="expense shadow">
    <div class="content">
      <img 
        :src="dictIcons[expense.category]" 
        alt="Ícono de Gasto" 
        class="icon" 
      />
      <div class="details">
        <p class="category">{{ dictCategories[expense.category] }}</p>
        <p @click="$emit('select-expense', expense.id)" class="name">{{ expense.name }}</p>
        <p class="date">
          Fecha: 
          <span>{{ formatDate(expense.date) }}</span>
        </p>
      </div>
    </div>
    <p class="amount">{{ formatMoney(expense.expense) }}</p>
  </div>
</template>

<style scoped>
  .expense {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .content {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .icon {
    width: 5rem;
  }
  .details p {
    margin: 0 0 1rem 0;
  }
  .category {
    color: var(--gray);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
  }
  .name {
    color: var(--dark-gray);
    font-size: 2.4rem;
    font-weight: 700;
    cursor: pointer;
  }
  .date {
    color: var(--gray);
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 900;
  }
  .date span {
    font-weight: 400;
  }
  .amount {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
  }
</style>
