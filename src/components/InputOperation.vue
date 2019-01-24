<template>
<div class="component-wrapper">
  <div class="operation-select grid-container-4" v-for="operation in operations">
    <label :for="operation.name"  class="radio" >
      <input type="radio" :id="operation.name" name="operation" :value="operation" v-model="selectedOperation">
      {{ operation.name }}</label>
  </div>
<!-- 
  <select v-model="selectedOperation" single>
    <option v-for="operation in operations" v-bind:value="operation.symbol" selected="selected">
      {{ operation.name }}
    </option>
</select> -->
  <p>
    <span>Selected operation: {{ selectedOperation.name }}</span>
  </p>

  <div class="input-widget-wrapper grid-container-2">
    <label for="inputA">Enter a number
      <input type="number" class="input-widget input" id="inputA" name="input-a" v-model="A">
    </label>
    <label for="inputB">Enter another number
      <input type="number" class="input-widget input" id="inputB" name="input-b" v-model="B">
    </label>
  </div>

  <div class="input-widget-wrapper result">
    <p>Calculate {{ selectedOperation.name }}: {{ A }} {{ selectedOperation.symbol }} {{ B }} = {{ result }}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      e: '',
      selectedOperation: '',
      operations: [{
          name: 'Add',
          symbol: '+'
        },
        {
          name: 'Subtract',
          symbol: '-'
        },
        {
          name: 'Multiply',
          symbol: '*'
        },
        {
          name: 'Divide',
          symbol: '/'
        }
      ],
      A: '',
      B: '',
      calculatedResult: ''
    }
  },
  computed: {
    result() {
      switch (this.selectedOperation.name) {
        case "Add": return this.calculatedResult = Number(this.A) + Number(this.B);
        break;
        case "Subtract": return this.calculatedResult =  Number(this.A) - Number(this.B);
        break;
        case "Multiply": return this.calculatedResult =  Number(this.A) * Number(this.B);
        break;
        case "Divide": 
        this.calculatedResult = Number(this.A) / Number(this.B);
        if (!Number.isInteger(this.calculatedResult)) {
          return this.calculatedResult = (Number(this.A) / Number(this.B)).toFixed(2);
        } else {
          return this.calculatedResult
        }
        break;
      }
    }
  }
}
</script>

<style scoped>
.radio {
  cursor: pointer;
}

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
