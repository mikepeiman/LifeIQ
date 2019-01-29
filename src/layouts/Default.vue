<template>
<div class="layout">
  <header class="header">
    <strong>
        <g-link :to="{ name: 'home' }"><g-image alt="Example image" src="~/assets/LifeIQ v1.9.svg" width="75" /></g-link>
      </strong>
    <nav class="nav">
      <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
      <g-link class="nav__link" :to="{ name: 'calculator' }">Calculator</g-link>
      <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
      <g-link class="nav__link" :to="{ name: 'skills' }">Skills</g-link>
      <g-link class="nav__link" :to="{ name: 'events' }">Events</g-link>
      <g-link class="nav__link" :to="{ name: 'radial-menu' }">Radial Menu</g-link>
      <i class="fas" v-bind:class="{'fa-sun': !dark, 'fa-moon': dark}" v-on:click="toggle"></i>
    </nav>
  </header>
  <slot />
</div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
      body: ''
    }
  },
  methods: {
    toggle() {
      this.dark = this.dark === false ? true : false;
      this.body = document.getElementById('custom-body-id')
      this.body.classList.toggle('app-dark-mode')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import "https://use.fontawesome.com/releases/v5.6.3/css/all.css";

.app-dark-mode {
  background: #282222;
  color: #00a1ff;
}
.app-mode-light {
  background: white;
  color: #111111;
}
body {
  font-family: 'Montserrat', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
  color: #00a1ff;
}

.nav i {
  margin-left: 3em;
  color: #00a1ff;
}

button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}
</style>
