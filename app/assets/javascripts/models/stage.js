App.Stage = DS.Model.extend({ // need to define attrs except id.
  items: DS.hasMany('App.Item'),
  title: DS.attr('string')
});