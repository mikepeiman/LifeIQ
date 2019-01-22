<template>
  <div>
    {{ btnState ? 'The button is disabled' : 'The button is active' }}
    <button v-on:click="changeName" v-bind:disabled="btnState" class="v-button">Change name</button>
    </div>

</template>
<script>
export default {
  data() {
    return {
      name: 'LifeIQ',
      btnState: true
    }
  }
}
</script>

<style scoped>
.v-button {
  padding: .5em;
  border: 3px solid rgba(0,100,250,0.6);
  border-radius: 3px;
  background: rgba(0, 100, 150, 0.4);
  color: white;
}
</style>
