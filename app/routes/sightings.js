import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2017-02-09'),
      isNewSighting: false
    });

    let record2 = this.store.createRecord('sighting', {
      location: 'Calloway',
      sightedAt: new Date('2017-03-14'),
      isNewSighting: false,
    });

    let record3 = this.store.createRecord('sighting', {
      location: 'Asilomar',
      sightedAt: new Date('2017-03-21'),
      isNewSighting: true,
    });

    return [record1, record2, record3];
  }
});
