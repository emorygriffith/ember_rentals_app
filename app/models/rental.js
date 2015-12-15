import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  bedrooms: DS.attr(),
  image: DS.attr()
});
