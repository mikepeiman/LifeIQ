<template>
  <div class="operation-select grid-container-4">
    <label for="add">
      <input type="radio" name="operatorSelect" id="add" value="+" v-model="operationName" @click="setOperator">
    Add</label>
    <label for="subtract">
      <input type="radio" name="operatorSelect" id="subtract" value="-" v-model="operationName" @click="setOperator">
    Subtract</label>
    <label for="multiply">
      <input type="radio" name="operatorSelect" id="multiply" value="*" v-model="operationName" @click="setOperator">
    Multiply</label>
    <label for="divide">
      <input type="radio" name="operatorSelect" id="divide" value="/" v-model="operationName" @click="setOperator">
    Divide</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      InputIQ: '',
      result: '',
      operator: ''
    }
  },
  watch: {
    operator: function(operatorSelect) {
      this.$dispatch('operatorSelect', operatorSelect)
    }
  },
  methods: {
    setOperator() {
      this.operator = this.value
      console.log(this.operator, this.value)
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
