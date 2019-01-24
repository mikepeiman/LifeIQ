<template>
  <div>
    {{ btnState ? 'The button is disabled' : 'The button is active' }}
    <button @click="changeBtnState" class="v-button">Change state</button>
    <button v-on:click="changeName" v-bind:disabled="btnState" class="v-button">Button name: {{ name }}</button>
    </div>

</template>
<script>
export default {
  data() {
    return {
      name: 'LifeIQ',
      btnState: false
    }
  },
  methods: {
    changeName() {
      this.name = this.name === 'LifeIQ' ? 'Second choice' : 'LifeIQ';
      console.log('changeName method called');
    },
      changeBtnState() {
    this.btnState = this.btnState === false ? true : false;
    console.log('changeBtnState method called')
  }
  },
}
</script>

<style>
.v-button {
  padding: .5em;
  border: 3px solid rgba(0,100,250,0.6);
  border-radius: 3px;
  background: rgba(0, 100, 150, 0.4);
  color: white;
}
</style>
