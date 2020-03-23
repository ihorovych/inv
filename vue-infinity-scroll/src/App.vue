<template>
    <div id="app">
        <h1>Infinity scroll</h1>
        <hr>
        <Infinity/>
    </div>
</template>

<script>
  import InfinityTest from '@/components/InfinityTest';

  export default {
    name: 'App',
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
