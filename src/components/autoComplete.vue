<template>
  <div>
    <div class="search">
      <input class="search__input"
        @click.stop
        @focus="focus"
        placeholder="请输入关键字进行搜索"
        @keyup.13="search"
        @input="OnInput"
        v-model="keyWord"
        type="text" />
      <div @click="search" class="search__icon iconfont "></div>
      <transition name="slide">
        <nav-drap
          v-clickOut="hideDrap"
          @checkMenuItem="checkMenuItem"
          v-if="showDrap"
          :list="options"
          class="nav-drap">
          <slot name="label"></slot>
        </nav-drap>
      </transition>
    </div>
  </div>
</template>

<script>
import NavDrap from './nav-drap.vue'
export default {
  components: {
    NavDrap
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      showDrap: false,
      keyWord: '',
      options: []
    }
  },
  watch:{
    list:{
        handler(val){
            this.options = val
        },
        deep: true
    }
  },
  created(){
      this.options = this.list
  },
  directives: {
    clickOut: {
      bind: (el, binding) => {
        // removeEventListener只能移除对象上的某个具名函数
        function handler () {
          if (el.contains(el.target)) return false
          binding.value()
        }
        el.handler = handler
        document.addEventListener('click', el.handler)
      },
      unbind: function (el) {
        document.removeEventListener('click', el.handler)
      }
    }
  },
  methods: {
    // Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
    OnInput (event) {
        setTimeout(()=>{
            this.$emit('search', event.target.value)
        },500)
    },
    search () {
      this.$emit('search', this.keyWord)
    },
    hideDrap () {
      this.showDrap = false
    },
    focus () {
      this.showDrap = true
    },
    checkMenuItem (e) {
      this.keyWord = e
      this.showDrap = false
    }
  }
}
</script>

<style lang="less" scoped>
// @import '~@/assets/scss/variable.scss';

.search {
    border-radius: 20px;
    height: 30px;
    width: 100%;
    background-color: #f2f3f5;
    position: relative;
    &__input {
      display: inline-block;
      background-color: #f2f3f5;
      margin: 0 0 0 12px;
      height: 26px;
      line-height: 30px;
      width: 85%;
      text-decoration: none;
      border: none;
      font-size: 14px;
      color: rgb(34, 34, 34);
      &:focus {
        outline:none;
      }
    }
    .nav-drap {
      width: 100%;
      top: 35px;
      left: 0;
      overflow-x: hidden;
      max-height: 170px;
    }

    &__icon {  
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: 2px solid currentcolor;
      color: #a1a1a1;
      position: relative;
      float: right;
    //   transform: translateY(-50%);
    margin:6px 20px 0 0;
      cursor: pointer;
      &:after {
        content: "";
        transform: rotate(45deg);
        width: 8px;
        height: 2px;
        position: absolute;
        top: 11px;
        left: 9px;
        background-color: currentcolor;
      }
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #a1a1a1;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #a1a1a1;
    }

    input:-ms-input-placeholder{
        color: #a1a1a1;
    }

    input::-webkit-input-placeholder{
        color: #a1a1a1;
    }
  }
</style>