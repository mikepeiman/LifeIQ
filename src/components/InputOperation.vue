<template>
<div class="component-wrapper">
  <p>
    <span>Selected operation: {{ selectedOperation.name }}</span>
  </p>

  <div class="input-widget-wrapper flex">
    <label for="inputA">Enter a number
      <input tabindex="1" type="number" class="input-widget input" id="inputA" name="input-a" v-model="A">
    </label>
    <RadialMenu tabindex="2" @operation="setOperator" />
    <label for="inputB">Enter another number
      <input tabindex="3" type="number" class="input-widget input" id="inputB" name="input-b" v-model="B">
    </label>
    <div class="results">= {{ result }}</div>
  </div>

  <div class="input-widget-wrapper result">
    <p>Calculate {{ selectedOperation.name }}: {{ A }} {{ selectedOperation.symbol }} {{ B }} = {{ result }}</p>
  </div>
</div>
</template>

<script>
import RadialMenu from '.././components/RadialMenu';
export default {
  components: {
    RadialMenu
  },
  data() {
    return {
      isChecked: false,
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
  methods: {
    setOperator(operator) {
      this.selectedOperation = operator
    }
  },
  computed: {
    result() {
      console.log("this.selectedOperation.name: ", this.selectedOperation.name)
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
        return 42
      }
    }
  }
}
</script>

<style scoped>
.results {
  /* font-size: 1.5em; */
  margin: 22px 0 0 0px;
  /* background: ffb42a; */
  padding: 3px 10px;
  color: #ffb42a;
  border: 3px solid #ffb42a;
  border-radius: 3px;
}
.radio {
  cursor: pointer;
}

.operation-select {
  background: rgba(50, 75, 125, 0.25);
  border: 5px solid rgba(50, 75, 125, 0.75);
  margin: 1em;
  padding: .5em;
}

.grid-container-3 {
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-auto-rows: 1;
}
.flex {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: space-around;
  align-items: center;
}
.input-widget {
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-bottom: 1px dashed #00a1ff; 
  background: none;
  color: #FFAB00;
}
.input-widget:focus {
  border: none;
  outline: none;
  border-bottom: 1px dashed #FFAB00;
}

.input {
  border-color: #aaccff;
}

.input-widget-wrapper {
  /* background: rgba(0, 0, 0, 0.1); */
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
:checked + span {
  background: #fff;
}
</style>
