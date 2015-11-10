import $ from 'jquery';
import Backbone from 'backbone';
import {CompositeView, LayoutView} from 'backbone.marionette';
import collection_template from './collection_template.hbs';
import item_template from './item_template.hbs';
import AssistantsView from '../assistants/view';

let SubordinateView = LayoutView.extend({
  template: item_template,
  className: 'subordinate list-group-item',
  tagName: 'li',

  ui: {
    'toggleAdditional': '.subordinate-name a:first',
    'additional': '.subordinate-additional'
  },

  events: {
    'click @ui.toggleAdditional': 'toggleAdditional',
  },

  initialize() {
    this.addRegion('subordinates', `.subordinates-region-${this.model.get('id')}`);
    this.addRegion('assistants', `.assistants-region-${this.model.get('id')}`);
  },

  onShow() {
    this.loadPersonal();
  },

  toggleAdditional(e) {
    e.preventDefault();
    if (this.ui.additional.hasClass('hide')) {
      this.ui.additional.removeClass('hide');
      this.loadPersonal();
    }
    else {
      this.ui.additional.addClass('hide');
      this.unloadPersonal();
    }
  },

  loadPersonal() {
    if (this.model.has('subordinates')) {
      this.subordinatesView = new SubordinatesView({collection: new Backbone.Collection(this.model.get('subordinates'))});
    }
    if (this.model.has('assistants')) {
      this.assistantsView = new AssistantsView({collection: new Backbone.Collection(this.model.get('assistants'))});
    }
    if (this.subordinatesView || this.assistantsView) {
      if (this.subordinatesView) this.subordinates.show(this.subordinatesView);
      if (this.assistantsView) this.assistants.show(this.assistantsView);
    }
    else {
      this.ui.toggleAdditional.addClass('disabled');
    }
  },

  unloadPersonal() {
    if (this.subordinatesView) this.subordinatesView.remove();
    if (this.assistantsView) this.assistantsView.remove();
  },
});

let SubordinatesView = CompositeView.extend({
  template: collection_template,
  className: 'subordinates list-group',
  childView: SubordinateView,
  childViewContainer: '.subordinates-wrapper',
});

export default SubordinatesView;