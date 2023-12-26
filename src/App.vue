<script setup>
  import { reactive, ref } from 'vue'
  import Budget from './components/Budget.vue'
  import BudgetControl from './components/BudgetControl.vue'
  import Modal from './components/Modal.vue'
  import newExpenseIcon from './assets/img/nuevo-gasto.svg'

  const modal = reactive({
    show: false,
    animate: false,
  })
  const budget = ref(0)
  const available = ref(0)

  const defineBudget = number => {
    budget.value = number
    available.value = number
  }

  const showModal = () => {
    Object.assign(modal, {
      show: true,
      animate: true,
    })
  }

  const hideModal = () => {
    Object.assign(modal, {
      show: false,
      animate: false,
    })
  }
</script>

<template>
  <div>
    <header>
      <h1>Planificador de gastos</h1>
      <div class="container-header container shadow">
        <Budget
          v-if="budget === 0"
          @define-budget="defineBudget"
        />

        <BudgetControl
          v-else
          :budget="budget"
          :available="available"
        />
      </div>
    </header>

    <main v-if="budget > 0">
      <div class="add-expense">
        <img 
          :src="newExpenseIcon" 
          alt="Expense Icon" 
          @click="showModal"
        />
      </div>

      <Modal 
        v-if="modal.show"
        @hide-modal="hideModal"
      />
    </main>
  </div>
</template>

<style>
  :root {
    --blue: #3b82f6;
    --white: #ffffff;
    --light-gray: #f5f5f5;
    --gray: #94a3b8;
    --dark-gray: #64748b;
    --black: #000000;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;

  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    background-color: var(--light-gray);
  }
  h1 {
    font-size: 4rem;

  }
  h2 {
    font-size: 3rem;
  }
  header {
    background-color: var(--blue);
  }
  header h1 {
    padding: 3rem;
    margin: 0;
    color: var(--white);
    text-align: center;
  }
  .container {
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
  }
  .container-header {
    margin-top: -5rem;
    transform: translateY(5rem);
    padding: 5rem;
  }
  .shadow {
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-color: var(--white);
    border-radius: 1.2rem;
    padding: 5rem;
  }
  .add-expense {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
  }
  .add-expense img {
    width: 5rem;
    cursor: pointer;
  }
</style>
