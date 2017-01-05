import Ember from 'ember';
import Photo from '../models/photo';

export default Ember.Route.extend({
  model() {
    return [
      Photo.create({ id: 1 }),
      Photo.create({ id: 2 }),
      Photo.create({ id: 3 }),
      Photo.create({ id: 4 }),
      Photo.create({ id: 5 }),
      Photo.create({ id: 6 }),
      Photo.create({ id: 7 }),
      Photo.create({ id: 8 }),
    ];
  },
});
