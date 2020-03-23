<template>
    <div
            class="container"
            ref="container"
            @scroll="handleScroll"
    >
        <div
                class="item"
                v-for="i of items"
        >{{i.title}}
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      this.fetchItems();
    },
    methods: {
      fetchItems() {
        console.log('fetch...')
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(response => response.json())
          .then(json => this.items.push(...json));
      },

      handleScroll(e) {
        const {
          scrollHeight, scrollTop,
          clientHeight, clientTop,
          offsetHeight, offsetTop,
        } = e.target;

        if (scrollTop + clientHeight === scrollHeight) this.fetchItems();
      },
    },
  };
</script>

<style scoped>
    .container {
        display: flex;
        flex-flow: column nowrap;


        height: 100px;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>