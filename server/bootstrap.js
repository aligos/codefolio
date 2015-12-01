Meteor.startup(function(){
	if(Meteor.users.find().count() === 0){
		Accounts.createUser({
			username: 'aligos',
			password: 'aligos555',
			email: 'aligos@gmail.com',
			profile: {
				name: 'Rahmat Aligos'
			}
		});
	}
});