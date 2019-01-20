<template>
<Layout>
  <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
  <h1>Calculate</h1>
  <div class="operation-select grid-container-4">
    <label for="add">
      <input type="radio" id="add" value="Add" value2="+" v-model="operationName" @click="setOperator">
    Add</label>
    <label for="subtract">
      <input type="radio" id="subtract" value="Subtract" value2="-" v-model="operationName" @click="setOperator">
    Subtract</label>
    <label for="multiply">
      <input type="radio" id="multiply" value="Multiply" value2="*" v-model="operationName" @click="setOperator">
    Multiply</label>
    <label for="divide">
      <input type="radio" id="divide" value="Divide" value2="/" v-model="operationName" @click="setOperator">
    Divide</label>
  </div>

  <div class="operation-confirm">
    <p>Operation: <span style="color: white;">{{ operationName }}</span></p>
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

    <p>Calculate {{ operationName }}: {{ A }} {{ operator }} {{ B }} = {{ result }}</p>
  </div>

  <p>A simple calculator app. A LifeIQ MVP.</p>
</Layout>
</template>

<script>
export default {
  data: function () {
    return {
      A: '',
      B: '',
      operationName: '',
      operator: '',
      result: ''
    }
  },
  methods: {
    calculateResult: function () {
      if (this.operationName == "Add") {
        // this.setOperator();
        this.result = Number(this.A) + Number(this.B);
      } else if (this.operationName == "Subtract") {
        // this.setOperator();
        this.result = Number(this.A) - +Number(this.B);
      } else if (this.operationName == "Multiply") {
        // this.setOperator();
        this.result = Number(this.A) * +Number(this.B);
      } else if (this.operationName == "Divide") {
        // this.setOperator();
        this.result = Float(Number(this.A) / Number(this.B), 2);
      } else {
        this.result = ''
      }
    },
    setOperator: function () {
      if (this.operationName == "Add") {
        this.operator = "+";
        this.calculateResult();
      }
      if (this.operationName == "Subtract") {
        this.operator = "-";
        this.calculateResult();
      }
      if (this.operationName == "Multiply") {
        this.operator = "*";
        this.calculateResult();
      }
      if (this.operationName == "Divide") {
        this.operator = "/";
        this.calculateResult();
      }
    }
  },
  // computed: {
  //   operator: function() {
  //     let result = 0;
  //           if (this.operationName == "Add") {
  //       this.operator = "+";
  //     }
  //     if (this.operationName == "Subtract") {
  //       this.operator = "-";
  //     }
  //     if (this.operationName == "Multiply") {
  //       this.operator = "*";
  //     }
  //     if (this.operationName == "Divide") {
  //       this.operator = "/";
  //     }
  //   }
  // }
}
</script>

<style>
.input-widget-wrapper {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.input-widget-wrapper label {
  display: flex;
  flex-direction: column;
  margin: .5em;
}

.result {
  border-color: #ffaa33;
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

.grid-container-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1;
}

.operation-confirm {
  display: flex;
  padding: 0.25em 1em;
  margin: 0 1em 1em 1em;
  background: rgba(50, 75, 125, 0.75);
}
</style>
