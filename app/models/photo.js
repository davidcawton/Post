import DS from 'ember-data';

const { computed } = Ember;

export default Ember.Object.extend({
  thumbUrl: computed('id', function() {
    return `../image${this.get('id')}-thumb.jpg`;
  }),

  largeUrl: computed('id', function() {
    return `../${this.get('id')}--large.jpg`;
  }),

  name: computed('id', function() {
    return `Photo ${this.get('id')}`;
  }),
});