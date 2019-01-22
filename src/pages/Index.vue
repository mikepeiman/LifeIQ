<template>
<Layout>
  
  <h1>Calculate</h1>

  <OperatorSelect />
  <VButton />

  <div class="operation-confirm">
    <p>Operation: <span style="color: white;">{{ operationName }}</span></p>
  </div>

  <div class="grid-container-2">
    <InputWidget />
  </div>

  <div class="input-widget-wrapper result">
    <p>Calculate {{ operationName }}: {{ A }} {{ operator }} {{ B }} = {{ result }}</p>

  </div>
</Layout>
</template>

<script>
import InputWidget from './../components/InputWidget';
import OperatorSelect from './../components/OperatorSelect';
import VButton from './../components/VButton';


export default {
  components: {
    InputWidget,
    OperatorSelect,
    VButton
  },
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
.result {
  border-color: #ffaa33;
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
