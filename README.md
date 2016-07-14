ember g template application
ember g model user name questions:hasMany answers:hasMany
ember g mirage-model user name questions:hasMany answers:hasMany
ember g model question description answers:hasMany users:hasMany 
ember g mirage-model question description answers:hasMany users:hasMany
ember g mirage-model answer option question:belongsTo users:hasMany   
ember g model answer option question:belongsTo users:hasMany
