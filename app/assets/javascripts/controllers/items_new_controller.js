App.ItemsNewController = Ember.ObjectController.extend({
  save: function( item ) {
    var title = item.get( 'title' );
    var desc  = item.get( 'desc' );
    if( title && desc ) {
      item.store.commit();
      this.transitionToRoute('index');
    }
    else {
      alert( "Please fill out both fields." );
    }
  },
  cancel: function( item ) {
    item.get('transaction').rollback();
    this.transitionToRoute('index');
  }
});