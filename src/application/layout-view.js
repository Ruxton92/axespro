import {LayoutView} from 'backbone.marionette';
import template from './layout-template.hbs';

export default LayoutView.extend({
  el: '.application',
  template: template,

  regions: {
    content : '.application__content',
  },

  ui: {
    content : '.application__content',
  },

  initialize() {
  }

});
