<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<style scoped>
 .alert {
  padding: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.6rem;
  text-align: center;
  background: var(--white);
  border-left: 5px solid #891c1c;
  color: #891c1c;
  margin-bottom: 2rem;
 }
</style>
