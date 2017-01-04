import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { thumbUrl: '../one.jpg' },
      { thumbUrl: '../two.jpg' },
      { thumbUrl: '../three.jpg' },
      { thumbUrl: '../four.jpg' },
      { thumbUrl: '../five.jpg' },
      { thumbUrl: '../six.jpg' },
    ];
  },
});
