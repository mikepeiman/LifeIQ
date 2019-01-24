<template>
<div class="component-wrapper">
  <div class="operation-select grid-container-4" v-for="operation in operations">
    <label :for="operation.name"  class="radio" >
      <input @click="calculateResult" type="radio" :id="operation.name" name="operation" :value="operation" v-model="selectedOperation">
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
    <label for="input-a">Enter a number
      <input type="number" class="input-widget input" id="inputA" name="input-a" v-model="A" v-on:keyup="calculateResult">
    </label>
    <label for="input-b">Enter another number
      <input type="number" class="input-widget input" id="inputB" name="input-b" v-model="B" v-on:keyup="calculateResult">
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
      operation: '',
      selectedOperation: '',
      selectedOperations: [],
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
      result: 0 ? 0 : this.calculateResult()
    }
  },
  methods: {
    calculateResult($event) {
      console.log('calculateResult method called')
      setTimeout(() => {
              console.log('beginning setTimeout function')
      switch (this.selectedOperation.name) {
        case "Add": this.result = Number(this.A) + Number(this.B);
        console.log(this.selectedOperation.name, this.result, $event.timestamp, $event.path);
        break;
        case "Subtract": this.result =  Number(this.A) - Number(this.B);
        console.log(this.selectedOperation.name, this.result, $event.timestamp, $event.path);
        break;
        case "Multiply": this.result =  Number(this.A) * Number(this.B);
        console.log(this.selectedOperation.name, this.result, $event.timestamp, $event.path) ;
        break;
        case "Divide": 
        this.result = Number(this.A) / Number(this.B);
        if (!Number.isInteger(this.result)) {
          this.result = (Number(this.A) / Number(this.B)).toFixed(2);
        }
        // this.result = isInteger(this.result) ? this.result : (Number(this.A) / Number(this.B)).toFixed(2);
        console.log(this.selectedOperation.name, this.result, $event.timestamp, $event.path);
        break;
      }
      }, 10);


    }
    // setOperator(event) {
    //   this.selectedOperation = event.target.value
    //   console.log("From component InputOperation.vue: ", this.selectedOperation)
    // }
  },
  // props: [
  //   'selectedOperation'
  // ],
  computed: {}
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
