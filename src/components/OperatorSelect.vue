<template>
  <div class="operation-select grid-container-4">
    <label for="add">
      <input type="radio" id="add" value="=" v-model="operationName" @click="setOperator">
    Add</label>
    <label for="subtract">
      <input type="radio" id="subtract" value="-" v-model="operationName" @click="setOperator">
    Subtract</label>
    <label for="multiply">
      <input type="radio" id="multiply" value="*" v-model="operationName" @click="setOperator">
    Multiply</label>
    <label for="divide">
      <input type="radio" id="divide" value="/" v-model="operationName" @click="setOperator">
    Divide</label>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      operator: ''
    }
  },
  methods: {
        setOperator() {
      if (this.operationName == "Add") {
        this.operator = "+";
      }
      if (this.operationName == "Subtract") {
        this.operator = "-";
      }
      if (this.operationName == "Multiply") {
        this.operator = "*";
      }
      if (this.operationName == "Divide") {
        this.operator = "/";
      }
    }
  }
}
</script>

<style scoped>
.operation-select {
  background: rgba(50, 75, 125, 0.25);
  border: 5px solid rgba(50, 75, 125, 0.75);
  margin: 1em;
  padding: .5em;
}

.grid-container-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1;
}
</style>
