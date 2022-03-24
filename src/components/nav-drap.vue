<template>
  <div class="drap" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <!-- <i class="iconfont icon-yooxi drap__icon"></i> -->
    <div v-if="!$slots.default">
      <a
        href="javascript:;"
        @click="checkMenuItem(item)"
        v-for="(item, index) in list"
        :key="index"
        :class="{'item-active': currentMenuItem === item.name}"
        class="item"
        >
        {{item.name}}
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    currentMenuItem: {
        type: String,
        default: ''
    }
  },
  methods: {
    checkMenuItem (e) {
      this.$emit('update:currentMenuItem', e.name)
      this.$emit('checkMenuItem', e)
    },
    mouseenter () {
      this.$emit('mouseenter')
    },
    mouseleave () {
      this.$emit('mouseleave')
    }
  }
}
</script>

<style lang="less" scoped>
.drap {
  // width: 170px;
  background-color: #ffffff;
  padding: 10px 0;
  border-radius: 7px;
  position: absolute;
  z-index: 30;
  filter: drop-shadow(0px 2px 8px rgba(198, 198, 198, 0.5));
//   &__icon{ position: absolute;
//     top: -12px;
//     font-size: 14px;
//     left: 16px;
//     color: #f1ee36;
//   }
  .item {
    display: block;
    font-size: 10px;
    // text-align: center;
    color: #000000;
    // padding: 10px 20px;
    padding: 0px 10px;
    text-decoration:none;
    &:hover {
      background-color: rgba(233, 233, 233, 0.315);
      // color:rgb(165, 165, 165);
    }
  }
  .item-active {
    text-decoration:none;
    background-color: #fff !important;
    color: #3358ff !important;
  }
}
</style>