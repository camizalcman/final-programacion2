<script setup lang="ts">

//se define que datos puede recibir este componente desde afuera
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

//se avisa que este componente recibe props y se definen valores por default
withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
})

//se declara que eventos puede emitir el componente a su padre
const emit = defineEmits<{
  click: []
}>()

</script>

<template>
<!--el : adelante de un atributo HTML significa que es dinámico-->
  <button
    :disabled="disabled" 
    @click="emit('click')"
    :class="[
      'px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-200',
      'hover:shadow-md disabled:opacity-50 disabled:pointer-events-none',
      variant === 'primary' && 'bg-primary text-white hover:bg-primary-dark',
      variant === 'secondary' && 'bg-transparent text-primary border border-primary hover:bg-primary/10',
      variant === 'danger' && 'bg-danger text-white hover:bg-red-700',
    ]"
  >
    <slot />
  </button>
</template>