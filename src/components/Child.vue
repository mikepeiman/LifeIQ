<template>
  <div>
    <h2>Child</h2>
    <ul>
      <li>Input A: {{ inputA }}</li>
      <li>Operation: {{ operation.name }}</li> 
      <li>Input B: {{ inputB }}</li>      
      <li>Result: {{ result }}</li>
    </ul>
    <ul class="calculations-list">
      <li>childCounter: {{ childCounter }}</li>
      <button @click="generateID">Add Grandchild Component</button>
      <li v-for="child in children" :id="child.id">
        <Grandchild :childCounter="childCounter" 
        @operation="operation = $event"
        @inputA="inputA = $event"
        @inputB="inputB = $event"
        @result="result = $event" />
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
      operation: '',
      inputB: '',
      result: '',
      childCounter: '',
      children: [],
      newID: ''
      // CalculationListItem: ''
    }
  },
  components: {
    Grandchild
  },
  methods: {
    generateID() {
      this.childCounter++;
      this.newID = 'CalculationListItem' + this.childCounter
      this.children.push({
        id: this.newID
      })
    }
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
