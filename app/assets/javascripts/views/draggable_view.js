App.DraggableView = Ember.View.extend({
  didInsertElement: function() {
    var itemId = this.get('content').get('id');

    this.$().find(">:first-child").draggable({
      start: function( event, ui ) {
        $(this).css( 'z-index', 1000 );
        $(this).data("itemId", itemId);
      },
      stop: function( event, ui ) {
        $(this).css( 'z-index', 1 );
      },
      revert: function( droppableObject ) {
        if( droppableObject !== false &&
          droppableObject.hasClass("ui-droppable") ) {
          return false;
        }
        else
        {
          return true;  
        }
      }
    });
  }
});