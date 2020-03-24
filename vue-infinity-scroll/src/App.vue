<template>
    <div id="app">
        <h1>Infinity scroll</h1>
        <hr>
        <Infinity v-bind:items="items"/>
    </div>
</template>

<script>
  import InfinityTest from '@/components/InfinityTest';

  export default {
    name: 'App',
    data() {
      return {
        items: 'item '.repeat(100000).trim().split(' ').map((e, i) => e + i),
      };
    },
    components: {
      Infinity: InfinityTest,
    },
  };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
