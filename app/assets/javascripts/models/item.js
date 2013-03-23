App.Item = DS.Model.extend({
  stage: DS.belongsTo('App.Stage'),
  title: DS.attr('string'),
  desc: DS.attr('string')
});