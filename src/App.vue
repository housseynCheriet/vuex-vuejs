<template>
  <div id="app">
    <new-car />
  </div>
</template>

<script>
import NewCar from './components/new-car.vue'

export default {
  components: {
    'new-car': NewCar
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
