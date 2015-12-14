import Ember from 'ember';

export default Ember.Route.extend({
});

var rentals = [{
  id: 1,
  title: 'Grand Old Mansion',
  owner: 'Elon Musk',
  city: 'San Fransisco',
  type: 'Estate',
  bedrooms: 15,
  image: 'https://upload.wikimedia.org/wikimedia/commons/c/cb/Crane_estate_(5).jpg'
},{
  id: 2,
  title: 'Urban Living',
  owner: 'Mikey DeMarriot',
  city: 'Seattle',
  type: 'Condo',
  bedrooms: 1,
  image: 'https://upload.wikimedia.org/wikimedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
},{
  id: 3,
  title: 'Downtown Charm',
  owner: 'Violet Beauregarde',
  city: 'Portland',
  type: 'Apartment',
  bedrooms: 3,
  image: 'https://upload.wikimedia.org/wikimedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  },
});
