<template>
    <div class="wrap">
        <v-list
                class="container"
                ref="container"
                id="container"
        >
            <v-list-item
                    v-scroll:#container="handleScroll"
                    class="item"
                    v-for="item of currentItems"
            >{{item}}
            </v-list-item>
        </v-list>
        <div class="scroll-wrap" ref="scroll">
            <div
                    v-bind:style="{top: scrollPinPosition + 'px'}"
                    class="scroll-pin"/>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      items: Array,
    },
    data() {
      return {
        currentMinItem: 0,
        currentMaxItem: 100,

        scrollPinPosition: 0,

      };
    },
    computed: {
      currentScrollPosition() {
        console.log(this.$refs.scroll.clientHeight / (this.items.length || 1));
        return 0;
      },
      currentItems() {
        const start = Math.max(Math.min(this.currentMinItem, this.items.length - 100), 0);
        const end = Math.min(this.currentMaxItem, this.items.length);
        const items = this.items.slice(start, Math.min(this.currentMaxItem, end));
        console.log(items);
        return items;
      },
    },
    methods: {
      handleScroll(e) {
        const {
          scrollHeight,
          scrollTop,
          clientHeight,
          clientTop,
          offsetHeight,
          offsetTop,
        } = e.target;

        // console.log(this.$refs.scroll.clientHeight);
        // console.log('scrollHeight', scrollHeight);
        // console.log('scrollTop', scrollTop);
        // console.log('clientHeight', clientHeight);
        // console.log('clientTop', clientTop);
        // console.log('offsetHeight', offsetHeight);
        // console.log('offsetTop', offsetTop);

        // console.log('scrollTop + clientHeight/2', scrollTop + clientHeight/2)
        // console.log('scrollHeight', scrollHeight)
        //
        // this.scrollPinPosition = ((scrollTop) / scrollHeight) * 100;

        const microScroll = (((scrollTop) / scrollHeight) * 100) * (100 / this.items.length);
        const scrollPercent = ((this.currentMinItem) / (this.items.length)) * 100 + microScroll;
        this.scrollPinPosition = clientHeight * 0.9 * scrollPercent / 100;

        //
        // console.log('this.scrollPinPosition', this.scrollPinPosition)

        if (scrollTop + clientHeight === scrollHeight && this.currentMaxItem < this.items.length) {
          e.target.scrollTo(0, scrollHeight * 0.5 - clientHeight);
          this.nextItems();
        }

        if (!scrollTop && this.currentMinItem) {
          e.target.scrollTo(0, scrollHeight * 0.5);
          this.prevItems();
        }
      },
      nextItems() {
        this.currentMinItem += 50;
        this.currentMaxItem += 50;
      },
      prevItems() {
        this.currentMinItem -= 50;
        this.currentMaxItem -= 50;
      },

    },
  };
</script>

<style scoped lang="scss">
    @import "./s";
</style>