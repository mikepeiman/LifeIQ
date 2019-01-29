<template>
  <div @keydown.ctrl="popMenu">
    <h1>Parent</h1>
    <Child />
  </div>
</template>

<script>
import Child from './Child'
export default {
  data() {
    
  },
  components: {
    Child
  },
  methods: {
    popMenu() {
      console.log('ctrl pressed on parent')      
      let originalElement = document.activeElement;
      document.activeElement.blur()
      document.getElementById('toggle').checked = true
      document.getElementById('radial-menu').focus()     
    }
  }
  
}
</script>

<style scoped>

</style>
