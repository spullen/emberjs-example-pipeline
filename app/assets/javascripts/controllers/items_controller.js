App.ItemsController = Ember.ArrayController.extend({
  unassigned: function() {
    return this.filter(function(item, index, enumerable){
      return !item.get('stage');
    });
  }.property('@each.stage'),
  delete: function( item ) {
    var title = item.get('title');
    if( confirm("Really delete " + title + "?") ){
      item.store.deleteRecord( item );
      item.store.commit();
    }
  }
});