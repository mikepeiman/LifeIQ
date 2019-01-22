<template>
<div>
  <div class="holder">
    <form @submit.prevent="addSkill">
      <input type="text" placeholder="Enter a skill..." v-model="newSkill" v-validate="'min:5'" name="skill"></input>

      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <div class="alert-container">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </div>
      </transition>
    </form>
    <ul>
      <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, index) in skills" :key='data.skill'>
          {{ data.skill }}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>  
        </li>
      </transition-group>

    </ul>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      newSkill: '',
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
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({
            skill: this.newSkill
          })
          this.newSkill = ''
        } else {
          console.log('Not valid')
        }
      })
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
@import "https://use.fontawesome.com/releases/v5.6.3/css/all.css";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

i {
  float: right;
  cursor: pointer;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}
.alert-container {
  height: 0;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -50px;
}

.alert-in-enter-active {
  animation: bounce-in .25s;
}

.alert-in-leave-active {
  animation: bounce-in .25s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
