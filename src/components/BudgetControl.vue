<script setup>
  import image from '../assets/img/grafico.jpg'
</script>

<template>
  <div class="two-columns">
    <div class="graphic-container">
      <img :src="image" alt="Gráfico">
    </div>
    <div class="budget-container">
      <button class="reset-app">Restablecer aplicación</button>

      <p>
        <span>Presupuesto: </span>
        $0
      </p>

      <p>
        <span>Disponible: </span>
        $0
      </p>

      <p>
        <span>Gastado: </span>
        $0
      </p>
    </div>
  </div>  
</template>

<style scoped>
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
