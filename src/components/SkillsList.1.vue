<template>
<div>
  <div class="holder">
    <ul>
      <li v-for="(data, index) in skills" :key='index'>{{ index }}.{{ data.skill }}</li>
    </ul>

    <div v-bind:class="alertObject">alertObject</div>
    <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
    <p v-if="skills.length >= 1">You have more than 1 skills</p>
    <p v-else>You have less than or equal to 1 skill</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      skills: [{
          "skill": "Front-end Developer"
        },
        {
          "skill": "Father"
        },
        {
          "skill": "Warrior"
        }
      ],
      alertObject: {
        alert: true,
        'another-class': false
      },
      bgColor: 'rgba(250, 200, 100, 0.7)',
      bgWidth: '100%',
      bgHeight: '2em'
    }
  }
}
</script>

<style scoped>
.alert {
  background: rgba(250, 100, 100, 0.7);
  width: 100%;
  height: 2em;
}

.another-class {
  border: 5px solid blue;
}
</style>
