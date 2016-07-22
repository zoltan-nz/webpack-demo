import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions');
  this.route('users');
  this.route('user.questions');
  this.route('user.questions.answers');

  this.route('user', function() {
    this.route('questions');
  });
});

export default Router;
