/* aka "DroppableView" */
App.StageColumnView = Ember.View.extend({
  didInsertElement: function( event ) {

    var stageId    = this.get('content').get('id');
    var controller = this.get('controller');

    this.$().find(">:first-child").droppable({
      accept: ".ui-draggable",
      hoverClass: "droppable-hover",
      drop: function( event, ui ) {
        controller.addItemToStage( $(ui.draggable).data("itemId"), stageId);
      }
    });
  }
});