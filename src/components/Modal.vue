<script setup>
  import closeModal from '../assets/img/cerrar.svg'

  const emit = defineEmits(['hide-modal'])
  const props = defineProps({
    modal: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="modal">
    <div class="close-modal">
      <img 
        :src="closeModal" 
        alt="Cerrar Modal"
        @click="$emit('hide-modal')"
      />
    </div>

    <div class="container form-container" :class="[modal.animate ? 'animate' : 'close']">
      <form class="new-expense">
        <legend>Añadir gasto</legend>
        <div class="field">
          <label for="name">Nombre</label>
          <input 
            type="text"
            id="name"
            placeholder="Añade el nombre del gasto" 
          />
        </div>

        <div class="field">
          <label for="number">Cantidad</label>
          <input 
            type="number"
            id="number"
            placeholder="Añade la cantidad del gasto. Ej. 400" 
          />
        </div>

        <div class="field">
          <label for="category">Categoría</label>
          <select name="category" id="category">
            <option value="" selected disabled>---Seleccione una opción---</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="enterteiment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
            <option value="others">Otros</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Añadir gasto"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    position: absolute;
    background-color: rgb(0 0 0 / 0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .close-modal {
    position: absolute;
    right: 3rem;
    top: 3rem;
  }
  .close-modal img {
    width: 3rem;
    cursor: pointer;

  }
  .form-container {
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
  }
  .form-container.animate {
    opacity: 1;
  }
  .form-container.close {
    opacity: 0;
  }
  .new-expense {
    margin: 10rem auto 0 auto;
    display: grid;
    gap: 2rem;
  }
  .new-expense legend {
    text-align: center;
    color: var(--white);
    font-size: 3rem;
    font-weight: 700;
  }
  .new-expense .field {
    display: grid;
    gap: 2rem;
  }
  .new-expense input,
  .new-expense select {
    background-color: var(--light-gray);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
  }
  .new-expense label {
    color: var(--white);
    font-size: 3rem;
  }
  .new-expense input[type="submit"] {
    background-color: var(--blue);
    color: var(--white);
    font-weight: 700;
    cursor: pointer;
  }
</style>
