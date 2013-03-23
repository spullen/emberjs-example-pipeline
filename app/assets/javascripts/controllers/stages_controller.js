App.StagesController = Ember.ArrayController.extend({
  addItemToStage: function( itemId, stageId ) {
    var stage = App.Stage.find( stageId );
    var item  = App.Item.find( itemId );

    item.set('stage', stage);
    item.store.commit();
  },
  removeItemFromStage: function( item ) {
    item.set('stage', null);
    item.store.commit();
  }
});