<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link :to="{ name: 'home' }"><g-image alt="Example image" src="~/assets/LifeIQ v1.9.svg" width="75" /></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
        <g-link class="nav__link" :to="{ name: 'skills' }">Skills</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  font-family: 'Montserrat',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
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
}
</style>
