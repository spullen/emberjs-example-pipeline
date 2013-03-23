App.Router.map(function() {
  this.resource('items', function() {
    this.route('new');
  });
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('items').set('model', App.Item.find());
    this.controllerFor('stages').set('model', App.Stage.find());
  }
});

App.ItemsRoute = Ember.Route.extend({
  model: function() {
    return App.Item.find(); 
  }
});

App.ItemsNewRoute = Ember.Route.extend({
  model: function() { 
    return App.Item.createRecord(); 
  }
});