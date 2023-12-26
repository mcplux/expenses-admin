<script setup>
  import closeModal from '../assets/img/cerrar.svg'

  const emit = defineEmits(['hide-modal'])
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
</style>
