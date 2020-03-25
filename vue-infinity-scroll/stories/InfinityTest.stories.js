import Vue from 'vue';
import vuetify from 'vuetify';

import InfinityTest from '../src/components/InfinityTest.vue';

Vue.use(vuetify);

export default {
  title: 'InfinityTest',
  component: InfinityTest,
};

export const Items = () => ({
  components: {
    Infinity: InfinityTest,
  },
  template: '<Infinity v-bind:items="items"/>',
  data() {
    return {
      items: 'item '.repeat(100000).trim().split(' ').map((e, i) => e + i),
    };
  },
});

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
//
// import MyButton from 'vue-infinity-scroll/stories/MyButton';
//
// export default {
//   title: 'Button',
//   component: MyButton,
// };
//
// export const Text = () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">Hello Button</my-button>',
//   methods: { action: action('clicked') },
// });
//
// export const Jsx = () => ({
//   components: { MyButton },
//   render(h) {
//     return <my-button onClick={this.action}>With JSX</my-button>;
//   },
//   methods: { action: linkTo('clicked') },
// });
//
// export const Emoji = () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//   methods: { action: action('clicked') },
// });
