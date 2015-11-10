import $ from 'jquery';
import Backbone from 'backbone';
import {LayoutView} from 'backbone.marionette';
import template from './template.hbs';
import SubordinatesView from './subordinates/collection_view';

import Employees from './collection';

export default LayoutView.extend({
  template: template,
  className: 'index container-fluid',

  regions: {
    'employees': '.employees-region',
  },

  initialize() {
    this.employeesView = new SubordinatesView({collection: new Backbone.Collection(Employees)});
  },

  onShow() {
    this.employees.show(this.employeesView);
  }
});
