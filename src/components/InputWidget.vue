<template>
  <div class="input-widget-wrapper grid-container-2">
    <label for="input-a">Enter a number
      <input class="input-widget input" id="inputA" name="input-a" v-model="A" v-on:blur="calculateResult" v-on:keyup="calculateResult">
    </label>
        <label for="input-b">Enter another number
      <input class="input-widget input" id="inputB" name="input-b" v-model="B" v-on:blur="calculateResult" v-on:keyup="calculateResult">
    </label>
  </div>
</template>

<script>
export default {
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>
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

</style>
