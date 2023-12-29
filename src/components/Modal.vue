<script setup>
  import { computed, ref } from 'vue'
  import Alert from './Alert.vue'
  import closeModal from '../assets/img/cerrar.svg'

  const error = ref('')

  const emit = defineEmits(['hide-modal', 'save-expense', 'update:name', 'update:expense', 'update:category'])
  const props = defineProps({
    modal: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    expense: {
      type: [String, Number],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    available: {
      type: Number,
      required: true,
    },
    id: {
      type: [String, null],
      required: true,
    },
  })

  const old = props.expense

  const addExpense = () => {
    // Validate empty fields
    const { expense, category, name, available, id } = props
    if([name, expense, category].includes('')) {
      error.value = 'Todos los campos son obligatorios'

      setTimeout(() => {
        error.value = ''
      }, 3000);
      setTimeout(() => {
        error.value = ''
      }, 3000);
      
      return
    }

    //Validate amount
    if(expense <= 0) {
      error.value = 'El gasto debe ser mayor que 0'

      setTimeout(() => {
        error.value = ''
      }, 3000);
      
      return
    }


    // Validate that user does not spend more than the budget
    if(id) {
      if(expense > old + available) {
        error.value = 'Has exedido el presupuesto'

        setTimeout(() => {
          error.value = ''
        }, 3000);
        
        return
      }
    } else {
      if(expense > available) {
        error.value = 'Has exedido el presupuesto'

        setTimeout(() => {
          error.value = ''
        }, 3000);
        
        return
      }
    }

    emit('save-expense')
  }

  const isEditing = computed(() => props.id)
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
      <form class="new-expense" @submit.prevent="addExpense">
        <legend>{{ isEditing ? 'Editar gasto' : 'Añadir gastos' }}</legend>
        <Alert v-if="error">{{ error }}</Alert>
        <div class="field">
          <label for="name">Nombre</label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="Añade el nombre del gasto" 
            :value="name"
            @input="$emit('update:name', $event.target.value)"
          />
        </div>

        <div class="field">
          <label for="expense">Cantidad</label>
          <input 
            type="number"
            id="expense"
            name="expense"
            placeholder="Añade la cantidad del gasto. Ej. 400"
            :value="expense"
            @input="$emit('update:expense', +$event.target.value)"
          />
        </div>

        <div class="field">
          <label for="category">Categoría</label>
          <select 
            name="category" 
            id="category" 
            :value="category" 
            @input="$emit('update:category', $event.target.value)"
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

        <input 
          type="submit" 
          :value="[isEditing ? 'Guardar cambios' : 'Añadir gasto']"
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
