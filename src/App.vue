<script setup>
  import Budget from './components/Budget.vue'
</script>

<template>
  <div>
    <header>
      <h1>Planificador de gastos</h1>
      <div class="container-header container shadow">
        <Budget

        />
      </div>
    </header>
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
</style>
