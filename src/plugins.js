import Backbone from 'backbone';
import $ from 'jquery';
window.$ = $;
Backbone.$ = $;
import Marionette from 'backbone.marionette';
import 'babel/polyfill';

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
