<script setup>
  defineProps(['filter'])
  defineEmits(['update:filter'])
</script>

<template>
  <div class="filter shadow container">
    <form>
      <div class="field">
        <label for="filter">Filtrar gastos</label>
        <select 
            name="filter" 
            id="filter" 
            :value="filter" 
            @input="$emit('update:filter', $event.target.value)"
          >
            <option value="" selected disabled>---Seleccione una opción---</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="enterteiment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="subscription">Suscripciones</option>
            <option value="others">Otros</option>
          </select>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .filter {
    margin-top: 10rem;
  }
  .filter .field {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .filter label {
    font-size: 3rem;
    font-weight: 900;
    color: var(--dark-gray);
  }
  .filter select {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--light-gray);
    text-align: center;
  }
</style>
