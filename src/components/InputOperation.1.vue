<template>
<div class="component-wrapper">
  <div class="operation-select grid-container-4">
    <label for="add">
      <input type="radio" name="operatorSelect" id="add" value="+" v-model="selectedOperation" @click="setOperator">
    Add</label>
    <label for="subtract">
      <input type="radio" name="operatorSelect" id="subtract" value="-" v-model="selectedOperation" @click="setOperator">
    Subtract</label>
    <label for="multiply">
      <input type="radio" name="operatorSelect" id="multiply" value="*" v-model="selectedOperation" @click="setOperator">
    Multiply</label>
    <label for="divide">
      <input type="radio" name="operatorSelect" id="divide" value="/" v-model="selectedOperation" @click="setOperator">
    Divide</label>
  </div>

  <div class="input-widget-wrapper grid-container-2">
    <label for="input-a">Enter a number
      <input class="input-widget input" id="inputA" name="input-a" v-model="A" v-on:blur="calculateResult" v-on:keyup="calculateResult">
    </label>
    <label for="input-b">Enter another number
      <input class="input-widget input" id="inputB" name="input-b" v-model="B" v-on:blur="calculateResult" v-on:keyup="calculateResult">
    </label>
  </div>

  <div class="input-widget-wrapper result">
    <p>Calculate {{ selectedOperation }}: {{ A }} {{ selectedOperation }} {{ B }} = {{ result }}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      selectedOperation: String,
      A: '',
      B: '',
      result: ''
    }
  },
  methods: {
    setOperator(event) {
      this.selectedOperation = event.target.value
      console.log("From component InputOperation.vue: ", this.selectedOperation)
    }
  },
  props: [
    'selectedOperation'
  ],
  // computed: {
  //   setOperator() {
  //     console.log(operator, this.operator)
  //   }
  // }
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

.input-widget {
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  border-width: 3px;
}

.input {
  border-color: #aaccff;
}

.input-widget-wrapper {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.input-widget-wrapper label {
  display: flex;
  flex-direction: column;
  margin: .5em;
}
.operation-confirm {
  display: flex;
  padding: 0.25em 1em;
  margin: 0 1em 1em 1em;
  background: rgba(50, 75, 125, 0.75);
}
</style>
