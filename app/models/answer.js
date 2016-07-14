import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  option: attr(),
  question: belongsTo('question'),
  users: hasMany('user')
});
