<template>
    <div class="pop-over">
        <a @click="toggleOpen" href="javascript: void(0);" style="text-decoration:none;">
            <slot></slot>
        </a>
        <div v-clickoutside="close" v-show="open" class="pop-list">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopOver',
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleOpen: function() {
            this.open = !this.open;
        },
        close: function(e) {
            if(this.$el.contains(e.target)) return;
            this.open = false;
        }
    },
    directives: {
        clickoutside: {
            bind: function (el, binding, vnode) {
                const documentHandler = function (e) {
                    if (!vnode.context || el.contains(e.target)) return;
                    binding.value(e);
                };

                setTimeout(() => {
                    document.addEventListener('click', documentHandler);
                }, 0);
            }
        }
    }
}
</script>

<style scoped>
.pop-over {
    position: relative;
    width: 100%;
    height: 100%;
}
/* 
.pop-button {
    position: relative;
    width: 100%;
    height: 100%;
    text-decoration:none;
    color: inherit;
} */
.pop-list {
    position: absolute;
    will-change: top;
    /* left: -30px; */
    top: 45px;
    z-index: 4000;
}
/* .pop-list li {
    width: 100%;
    height: 100%;
    padding: 8px 3px;
    list-style:none;
} */
</style>
