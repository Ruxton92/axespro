import $ from 'jquery';
import _ from 'lodash';
import Handlebars from 'handlebars';
import Radio from 'backbone.radio';
import {Application} from 'backbone.marionette';
import LayoutView from './layout-view';

export default Application.extend({
  initialize() {
    this.$body = $(document.body);
    this.layout = new LayoutView();
    let isTouchDevice = true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    if (isTouchDevice) this.$body.addClass('touch-device');
    this.promise = new Promise(function(resolve, reject) {});
    this.layout.render();
  },
});
