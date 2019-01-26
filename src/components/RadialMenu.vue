<template>
<div class="radial-menu-container" tabindex="0" @keydown="setOperationByKeyDown">
  <div class="menu">
    <input type="checkbox" id="toggle" />
    <label id="show-menu" for="toggle">
        <div class="btn">
          <img v-if="selectedOperation == ''" class="material-icons md-24 toggleBtn menuBtn" id="menuBtn"></img>
          <img v-if="selectedOperation == ''" class="material-icons md-24 toggleBtn closeBtn" id="closeBtn"></img>
          <img v-if="selectedOperation != undefined" :src="selectedOperation.filename" class="material-icons md-24 toggleBtn menuBtn" id="closeBtn"></img>
          <img v-if="selectedOperation != undefined" :src="selectedOperation.filename" class="material-icons md-24 toggleBtn closeBtn" id="closeBtn"></img>
        </div>
        <div class="btn" v-for="operation in operations">
            <img :src="operation.filename"  @click="operationSelect(operation)" width="36px" height="36px;" name="operation" v-model="selectedOperation" />
  </div>
  </label>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      keyCode: '',
      e: '',
      isChecked: false,
      isMenuToggled: false,
      selectedOperation: '',
      clickedOperation: '',
      operations: [
        {
          name: 'Multiply',
          symbol: '*',
          filename: require('../assets/svg/multiply.svg'),
          dataSvg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#6DC82A;" d="M256,512C114.839,512,0,397.161,0,256S114.839,0,256,0s256,114.839,256,256S397.161,512,256,512z"/><path style="fill:#61B325;" d="M512,256C512,114.839,397.161,0,256,0v512C397.161,512,512,397.161,512,256z"/><path style="fill:#FFFFFF;" d="M389.594,272.699H122.406c-9.225,0-16.699-7.475-16.699-16.699c0-9.225,7.475-16.699,16.699-16.699	h267.189c9.225,0,16.699,7.475,16.699,16.699C406.294,265.225,398.819,272.699,389.594,272.699z"/><path style="fill:#FFEB99;" d="M389.594,239.301H256v33.399h133.594c9.225,0,16.699-7.475,16.699-16.699	C406.294,246.775,398.819,239.301,389.594,239.301z"/></svg>'
        },
        {
          name: 'Subtract',
          symbol: '-',
          filename: require('../assets/svg/minus.svg'),
          dataSvg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#6DC82A;" d="M256,512C114.839,512,0,397.161,0,256S114.839,0,256,0s256,114.839,256,256S397.161,512,256,512z"/><path style="fill:#61B325;" d="M512,256C512,114.839,397.161,0,256,0v512C397.161,512,512,397.161,512,256z"/><path style="fill:#FFFFFF;" d="M389.594,272.699H122.406c-9.225,0-16.699-7.475-16.699-16.699c0-9.225,7.475-16.699,16.699-16.699	h267.189c9.225,0,16.699,7.475,16.699,16.699C406.294,265.225,398.819,272.699,389.594,272.699z"/><path style="fill:#FFEB99;" d="M389.594,239.301H256v33.399h133.594c9.225,0,16.699-7.475,16.699-16.699	C406.294,246.775,398.819,239.301,389.594,239.301z"/></svg>'
        },
        {
          name: 'Add',
          symbol: '+',
          filename: require('../assets/svg/plus.svg'),
          dataSvg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#6DC82A;" d="M256,512C114.839,512,0,397.161,0,256S114.839,0,256,0s256,114.839,256,256S397.161,512,256,512z"/><path style="fill:#61B325;" d="M512,256C512,114.839,397.161,0,256,0v512C397.161,512,512,397.161,512,256z"/><path style="fill:#FFFFFF;" d="M389.594,272.699H122.406c-9.225,0-16.699-7.475-16.699-16.699c0-9.225,7.475-16.699,16.699-16.699	h267.189c9.225,0,16.699,7.475,16.699,16.699C406.294,265.225,398.819,272.699,389.594,272.699z"/><path style="fill:#FFEB99;" d="M389.594,239.301H256v33.399h133.594c9.225,0,16.699-7.475,16.699-16.699	C406.294,246.775,398.819,239.301,389.594,239.301z"/></svg>'
        },
        {
          name: 'Divide',
          symbol: '/',
          filename: require('../assets/svg/division.svg'),
          dataSvg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#6DC82A;" d="M256,512C114.839,512,0,397.161,0,256S114.839,0,256,0s256,114.839,256,256S397.161,512,256,512z"/><path style="fill:#61B325;" d="M512,256C512,114.839,397.161,0,256,0v512C397.161,512,512,397.161,512,256z"/><path style="fill:#FFFFFF;" d="M389.594,272.699H122.406c-9.225,0-16.699-7.475-16.699-16.699c0-9.225,7.475-16.699,16.699-16.699	h267.189c9.225,0,16.699,7.475,16.699,16.699C406.294,265.225,398.819,272.699,389.594,272.699z"/><path style="fill:#FFEB99;" d="M389.594,239.301H256v33.399h133.594c9.225,0,16.699-7.475,16.699-16.699	C406.294,246.775,398.819,239.301,389.594,239.301z"/></svg>'
        }
      ]
    }
  },
  methods: {
    getImg(filename) {
      return require('../assets/svg/' + filename)
    },
    operationSelect(operation) {
      // let toggle = document.getElementById('toggle')
      // console.log(operation.name, this.isMenuToggled, toggle)
      this.clickedOperation = operation.name
      console.log(operation.name, this.clickedOperation)
      this.selectedOperation = this.setOperationByClick
      this.$emit('operation', this.selectedOperation)

      // 
    },
    setOperationByKeyDown(e) {
      let toggle = document.getElementById('toggle')
      this.keyCode = e.keyCode
      console.log(e.keyCode, toggle.checked)
      toggle.checked = false
      this.selectedOperation = this.setOperationByKey
      console.log('second @click method', this.selectedOperation)
      this.$emit('operation', this.selectedOperation)
    }
  },
  computed: {
    setOperationByKey() {
      switch (this.keyCode) {
        case 13:
          return toggle.checked = true
        case 37:
          return this.operations[1] // this.selectedOperation = "Subtract";
          break;
        case 38:
          return this.operations[0] // this.selectedOperation = "Multiply";
          break;
        case 39:
          return this.operations[2] // this.selectedOperation = "Add";
          break;
        case 40:
          return this.operations[3] // this.selectedOperation = "Divide";
          break;
        default:
          return this.selectedOperation
      }
    },
    setOperationByClick() {
      switch (this.clickedOperation) {
        case "Subtract":
          return this.operations[1] // this.selectedOperation = "Subtract";
          break;
        case "Multiply":
          return this.operations[0] // this.selectedOperation = "Multiply";
          break;
        case "Add":
          return this.operations[2] // this.selectedOperation = "Add";
          break;
        case "Divide":
          return this.operations[3] // this.selectedOperation = "Divide";
          break;
      }
    },
    result() {
      switch (this.selectedOperation.name) {
        case "Add":
          return this.calculatedResult = Number(this.A) + Number(this.B);
          break;
        case "Subtract":
          return this.calculatedResult = Number(this.A) - Number(this.B);
          break;
        case "Multiply":
          return this.calculatedResult = Number(this.A) * Number(this.B);
          break;
        case "Divide":
          this.calculatedResult = Number(this.A) / Number(this.B);
          if (!Number.isInteger(this.calculatedResult)) {
            return this.calculatedResult = (Number(this.A) / Number(this.B)).toFixed(2);
          } else {
            return this.calculatedResult
          }
          break;
      }
    },
    listenForArrowKeys() {

    }
    // selectedOperation() {
    //   this.selectedOperation = this.operation.name
    // }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.label-image {
  line-height: 0;
}

.input-hidden {
  position: absolute;
  display: none;
  z-index: 4;
}

/* input[type=radio]:checked + label>img {
  border: 5px solid #fff;
  box-shadow: 0 0 3px 3px #090;
} */

/* input[type="radio"] {
  appearance: none;
  margin: 0;
  padding: 0;
} */

.radial-menu-container {
  margin: 0 1em;
}

body {
  overflow: hidden;
  background: #212121
}

input {
  position: absolute;
  display: none
}

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.menu {
  margin: 0 auto;
  position: absolute;
  /* top: 50%;
  left: 50%; */
  margin-left: -17px;
  margin-top: -7px;
}

.btn {
  width: 36px;
  height: 36px;
  border-radius: 36px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
}

/* .material-icons.md-36 { font-size: 36px; color: #03A9F4 } */

.btn {
  background: #ECEFF1;
  font-size: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  z-index: 3;
}

.btn:not(:first-child) {
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  z-index: 2;

  -webkit-transition: all 0.6s cubic-bezier(.87, -.41, .19, 1.44);
  transition: all 0.6s cubic-bezier(.87, -.41, .19, 1.44);
}

.btn:nth-child(2) {
  top: 0px;
  -webkit-transition-delay: 0s;
  transition-delay: 0s
}

.btn:nth-child(3) {
  top: 0px;
  left: 0px;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s
}

.btn:nth-child(4) {
  left: 0px;
  ;
  -webkit-transition-delay: 0.2s;
  ;
  transition-delay: 0.2s
}

.btn:nth-child(5) {
  top: 0px;
  left: 0px;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s
}

.btn:nth-child(6) {
  top: 0px;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s
}

.btn:nth-child(7) {
  top: 0px;
  left: 0px;
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s
}

.btn:nth-child(8) {
  left: 0px;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s
}

.btn:nth-child(9) {
  top: 0px;
  left: 0px;
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s
}

input#toggle:checked~#show-menu .btn:nth-child(2) {
  top: -36px;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input#toggle:checked~#show-menu .btn:nth-child(3) {
  left: -36px;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input#toggle:checked~#show-menu .btn:nth-child(4) {
  left: 36px;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input#toggle:checked~#show-menu .btn:nth-child(5) {
  top: 36px;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.menuBtn,
.closeBtn {
  position: absolute;
  transition: all 0.3s ease;
}

.closeBtn {
  transform: translateY(36px);
  opacity: 0;
}

input#toggle:checked~#show-menu .btn .menuBtn {
  transform: translateY(-36px);
  opacity: 0;
}

input#toggle:checked~#show-menu .btn .closeBtn {
  transform: translateY(0px);
  opacity: 1;
}
</style>
