<template>
<div class="component-wrapper grid-container">
  <div class="input-widget-wrapper flex">
    <slot />
    <label for="inputA">Enter a number
      <input tabindex="1" type="number" class="input-widget input" id="inputA" name="input-a" v-model="A">
    </label>
    <RadialMenu tabindex="2" @operation="setOperator" />
    <label for="inputB">Enter another number
      <input tabindex="3" type="number" class="input-widget input" id="inputB" name="input-b" v-model="B">
    </label>
  </div>
  <div class="results-box">= {{ result }}</div>
</div>
</template>

<script>
import RadialMenu from '~/components/RadialMenu';
export default {
  components: {
    RadialMenu
  },
  props: {
    childCounter: Number
  },
  data() {
    return {
      selectedOperation: '',
      A: '',
      B: '',
      calculatedResult: ''
    }
  },
  methods: {
    setOperator(operator) {
      this.selectedOperation = operator
      this.$emit('operation', operator)
    }
  },
  computed: {
    result() {
      console.log("this.selectedOperation.name: ", this.selectedOperation.name)
      this.$emit('inputA', this.A)
      this.$emit('inputB', this.B)
      switch (this.selectedOperation.name) {
        case "Add":
          this.calculatedResult = Number(this.A) + Number(this.B);
          break;
        case "Subtract":
          this.calculatedResult = Number(this.A) - Number(this.B);
          break;
        case "Multiply":
          this.calculatedResult = Number(this.A) * Number(this.B);
          break;
        case "Divide":
          this.calculatedResult = Number(this.A) / Number(this.B);
          if (!Number.isInteger(this.calculatedResult)) {
            this.calculatedResult = (Number(this.A) / Number(this.B)).toFixed(2);
          } else {
            break;
          }
          break;
      }
      this.$emit('result', this.calculatedResult)
      return this.calculatedResult
    }
  }
}
</script>

<style scoped>
.results-box {
  /* font-size: 1.5em; */
  margin: 1.5em 0 1.5em 0;
  top: 10px;
  position: relative;
  width: auto;
  height: 1em;
  /* background: ffb42a; */
  padding: 2px 10px 10px 10px;
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

.grid-container {
  display: grid;
  grid-template-columns: 80% 20%;
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

:checked+span {
  background: #fff;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
