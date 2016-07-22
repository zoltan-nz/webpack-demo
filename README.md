ember new question-answer-app
cd question-answer-app

ember install ember-cli-sass && ember install ember-cli-bootstrap-sassy && echo '@import "bootstrap";' > ./app/styles/app.scss && rm ./app/styles/app.css

ember install ember-cli-mirage 

ember g template application

ember g model user name questions:hasMany answers:hasMany
ember g mirage-model user name questions:hasMany answers:hasMany
ember g model question description answers:hasMany users:hasMany 
ember g mirage-model question description answers:hasMany users:hasMany
ember g mirage-model answer option question:belongsTo users:hasMany   
ember g model answer option question:belongsTo users:hasMany

ember g adapter application
namespace setting

.container-fluid>.row>.col-xs-4*3

ember g route index

