<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
      };
    },
    methods: {
      onSubmit() {
        console.log('Submit', this.title);
        if (this.title.trim()) {
          const newTodo = {
            title: this.title,
            completed: false,
            id: Date.now(),
          };

          this.$emit('add-todo', newTodo);
          this.title = '';
        }
      },
    },
  };
</script>

<style scoped>
    form {
        display: flex;
        padding: .5rem 2rem;
        justify-content: space-between;
    }

    input {
        width: 80%;
    }

    button {
        background: #ccc;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    button:hover {
        background: #6f6;
        cursor: pointer;
    }
</style>