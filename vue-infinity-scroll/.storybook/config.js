import {addDecorator} from '@storybook/vue';

console.log('-------------------------------------------------------------------')

import vuetify from '../src/plugins/vuetify';
addDecorator(() => ({
  vuetify,
  template: '<v-app><story/></v-app>'
}))