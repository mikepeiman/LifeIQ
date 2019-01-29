<template>
<Layout>

<div ref="calculationContainer"></div>

  <h1>Calculate</h1>
  <button @click="createCalcWidget">Add a calculation</button>
  <div v-for="i in iterator">
    <InputOperation :operator="operator" :id="currentId" />
  </div>

  <CalcList />
</Layout>
</template>

<script>
import InputOperation from './../components/InputOperation';
import CalcList from './../components/CalcList';

export default {
  components: {
    InputOperation,
    CalcList
  },
  data: function () {
    return {
      valueA: 0,
      valueB: 0,
      operator: '',
      result: 0,
      widgets: [],
      id: 0,
      currentId: 0,
      iterator: []
    }
  },
  methods: {
    createCalcWidget() {
      this.id++
      console.log('id: ', this.id)
      this.widgets.push({
        valueA: this.A,
        valueB: this.B,
        operator: this.operator,
        result: this.result
      })
    }
  },
  computed: {
    setCurrentId() {

    }
  }
}
</script>

<style>
.result {
  border-color: #FFAB00;
}

.grid-container-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1;
  margin: .5em;
}

.operation-confirm {
  display: flex;
  padding: 0.25em 1em;
  margin: 0 1em 1em 1em;
  background: rgba(50, 75, 125, 0.75);
}
</style>
