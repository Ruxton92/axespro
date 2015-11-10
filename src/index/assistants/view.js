import $ from 'jquery';
import Backbone from 'backbone';
import {CompositeView, ItemView} from 'backbone.marionette';
import collection_template from './collection_template.hbs';
import item_template from './item_template.hbs';

let AssistantView = ItemView.extend({
  template: item_template,
  className: 'assistant list-group-item',
  tagName: 'li',
});

export default CompositeView.extend({
  template: collection_template,
  className: 'assistants',
  childView: AssistantView,
  childViewContainer: '.assistants-wrapper',
});
