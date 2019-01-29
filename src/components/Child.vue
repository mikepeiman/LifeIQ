<template>
  <div>
    <h2>Child</h2>
    <ul>
      <li>Input A: {{ inputA }}</li>
      <li>Operator: {{ operator }}</li> 
      <li>Input B: {{ inputB }}</li>      
      <li>Result: {{ result }}</li>
    </ul>
    <ul class="calculations-list">
      <button @click="childCounter++">Add Grandchild Component</button>
      <li v-for="newChild in childCounter">
        <Grandchild :addGrandchild="childCounter" />
      </li>
    </ul>
    
  </div>
</template>

<script>
import Grandchild from './Grandchild'
export default {
  data() {
    return {
      inputA: '',
      operator: '',
      inputB: '',
      result: '',
      childCounter: 0
    }
  },
  components: {
    Grandchild
  }
}
</script>

<style scoped>
.calculations-list li {
  list-style: none;
}
.calculations-list li:focus-within {
  border-left: 3px solid #FFAB00;
  background: rgba(120, 120, 255, 0.05);
}
</style>
