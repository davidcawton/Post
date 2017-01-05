import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact', function() {
    this.route('find');
  });
  this.route('work', function() {
    this.route('photo', {
      path: '/work/photos/:photo_id'
    });
  });
});

export default Router;
